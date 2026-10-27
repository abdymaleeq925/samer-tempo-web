#!/usr/bin/env node
// One command that packs the project for review:   node scripts/pack-for-review.mjs
// - source code (src/, scripts/, root config files)
// - .env* files with ALL VALUES REPLACED by <hidden> (names only, no secrets)
// - list of files in public/ with sizes (the images themselves are NOT included)
// Result: project-for-review.md in the project root.
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';

const root = process.cwd();
const OUT = 'project-for-review.md';
const temp = [];

function write(name, content) {
  fs.writeFileSync(path.join(root, name), content);
  temp.push(name);
}

// 1) .env files: keep variable names, hide values
for (const name of fs.readdirSync(root).filter((n) => /^\.env(\..+)?$/.test(n))) {
  const masked = fs
    .readFileSync(path.join(root, name), 'utf8')
    .split(/\r?\n/)
    .map((line) => line.replace(/^(\s*(?:export\s+)?[A-Za-z_][A-Za-z0-9_]*\s*=).*/, '$1<hidden>'))
    .join('\n');
  write(`audit-env${name}.txt`, masked);
}

// 2) public/ tree with sizes (no file contents)
function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? walk(path.join(dir, e.name)) : [path.join(dir, e.name)],
  );
}
const tree = walk(path.join(root, 'public'))
  .map((f) => `${fs.statSync(f).size} ${path.relative(root, f).split(path.sep).join('/')}`)
  .sort((a, b) => a.split(' ')[1].localeCompare(b.split(' ')[1]));
write('public-tree.txt', tree.length ? tree.join('\n') + '\n' : '(public/ is empty or missing)\n');

// 3) tool versions
const run = (cmd, args) =>
  spawnSync(cmd, args, { encoding: 'utf8', shell: process.platform === 'win32' }).stdout?.trim() ?? '';
write('audit-versions.txt', `node ${process.version}\nnpm ${run('npm', ['-v'])}\n`);

// 4) pack with repomix
const include = [
  'package.json', 'tsconfig.json', 'next.config.*', 'eslint.config.*', '.eslintrc*', 'postcss.config.*',
  'components.json', '.gitignore', '.prettierrc*', 'README.md', 'vercel.json', 'Dockerfile',
  'src/**', 'scripts/**', 'audit-env*.txt', 'public-tree.txt', 'audit-versions.txt',
].join(',');
const ignore = [
  '**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.webp', '**/*.avif', '**/*.gif', '**/*.pdf', '**/*.ico',
  '**/*.woff', '**/*.woff2', 'package-lock.json', 'pnpm-lock.yaml', 'yarn.lock', 'project-for-review.md',
].join(',');

let status = 1;
try {
  const r = spawnSync(
    'npx',
    ['--yes', 'repomix', '--style', 'markdown', '-o', OUT, '--include', include, '--ignore', ignore],
    { stdio: 'inherit', cwd: root, shell: process.platform === 'win32' },
  );
  status = r.status ?? 1;
} finally {
  for (const f of temp) fs.rmSync(path.join(root, f), { force: true });
}
if (status !== 0) { console.error('\nrepomix failed'); process.exit(status); }

// 5) safety check of the result (prints line numbers only, never the values)
const text = fs.readFileSync(path.join(root, OUT), 'utf8');
const suspicious = [];
text.split('\n').forEach((line, i) => {
  if (/(token|secret|password|passwd|api[_-]?key|private[_-]?key)\s*[=:]\s*['"]?[A-Za-z0-9_\-./+]{16,}/i.test(line)) suspicious.push(i + 1);
  if (/-----BEGIN [A-Z ]*PRIVATE KEY-----/.test(line)) suspicious.push(i + 1);
});
const mb = (fs.statSync(path.join(root, OUT)).size / 1024 / 1024).toFixed(2);
console.log(`\n${OUT}: ${mb} MB`);
if (suspicious.length) {
  console.log(`⚠ Possible secrets on lines: ${suspicious.slice(0, 20).join(', ')} — open the file, check these lines and delete/replace them before sending.`);
} else {
  console.log('✓ No obvious secrets found (still glance through the file before sending).');
}
