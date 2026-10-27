#!/usr/bin/env node
// Usage (from the project root): node scripts/check-assets.mjs
// Finds every "/something.jpg|png|webp|avif|svg|pdf|ico" string in src/ and checks that
// the file exists in public/ with EXACTLY the same letter case (Linux servers are
// case-sensitive, macOS/Windows are not — a classic "works locally, 404 in production").
// Also lists heavy files. Exit code 1 if something is missing.
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const pub = path.join(root, 'public');
const src = path.join(root, 'src');
const EXT = '(?:jpg|jpeg|png|webp|avif|svg|pdf|ico)';
const re = new RegExp(`['"\`](\\/[^'"\`\\s$]*\\.${EXT})['"\`]`, 'gi');

function walk(dir, acc = []) {
  if (!fs.existsSync(dir)) return acc;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) { if (e.name !== 'node_modules') walk(p, acc); } else acc.push(p);
  }
  return acc;
}

const publicFiles = walk(pub).map((p) => '/' + path.relative(pub, p).split(path.sep).join('/'));
const exact = new Set(publicFiles);
const lower = new Map(publicFiles.map((f) => [f.toLowerCase(), f]));

const refs = new Map(); // url -> first file that mentions it
for (const f of walk(src).filter((p) => /\.(tsx?|jsx?|mjs|css|json)$/.test(p))) {
  const text = fs.readFileSync(f, 'utf8');
  for (const m of text.matchAll(re)) if (!refs.has(m[1])) refs.set(m[1], path.relative(root, f));
}

const missing = [], caseMismatch = [];
for (const [url, from] of refs) {
  if (exact.has(url)) continue;
  const alt = lower.get(url.toLowerCase());
  (alt ? caseMismatch : missing).push({ url, from, alt });
}

console.log(`referenced assets: ${refs.size} | files in public/: ${publicFiles.length}`);
if (caseMismatch.length) {
  console.log(`\n✗ CASE MISMATCH (breaks on Linux): ${caseMismatch.length}`);
  caseMismatch.forEach((x) => console.log(`  ${x.url}  →  real file: ${x.alt}   (used in ${x.from})`));
}
if (missing.length) {
  console.log(`\n✗ MISSING: ${missing.length}`);
  missing.forEach((x) => console.log(`  ${x.url}   (used in ${x.from})`));
}

const heavy = publicFiles
  .map((u) => ({ u, size: fs.statSync(path.join(pub, u)).size }))
  .filter((x) => (/\.(jpe?g|png|webp|avif)$/i.test(x.u) && x.size > 400 * 1024) || (/\.pdf$/i.test(x.u) && x.size > 15 * 1024 * 1024))
  .sort((a, b) => b.size - a.size);
if (heavy.length) {
  console.log(`\n! heavy files (images > 400 KB / PDFs > 15 MB): ${heavy.length}`);
  heavy.slice(0, 15).forEach((x) => console.log(`  ${(x.size / 1024).toFixed(0).padStart(6)} KB  ${x.u}`));
}

const used = new Set([...refs.keys()]);
const unused = publicFiles.filter((u) => /^\/products\//.test(u) && !used.has(u));
if (unused.length) console.log(`\ni product photos not referenced by any code: ${unused.length} (e.g. ${unused.slice(0, 5).join(', ')})`);

const bad = missing.length + caseMismatch.length;
console.log(bad ? `\n✗ ${bad} broken reference(s)` : '\n✓ all referenced assets exist');
process.exit(bad ? 1 : 0);
