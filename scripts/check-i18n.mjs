#!/usr/bin/env node
// Usage: node scripts/check-i18n.mjs [dictDir=src/dict]
// Compares every locale file with en.json: missing keys, extra keys, empty strings,
// and {placeholders} that differ between languages. Exit code 1 if anything is wrong.
import fs from 'node:fs';
import path from 'node:path';

const dir = path.resolve(process.cwd(), process.argv[2] ?? 'src/dict');
const LOCALES = ['en', 'tr', 'ru', 'de'];

function flatten(value, prefix = '', out = {}) {
  if (Array.isArray(value)) {
    value.forEach((v, i) => flatten(v, `${prefix}[${i}]`, out));
  } else if (value && typeof value === 'object') {
    for (const [k, v] of Object.entries(value)) flatten(v, prefix ? `${prefix}.${k}` : k, out);
  } else {
    out[prefix] = value;
  }
  return out;
}
const placeholders = (s) => (typeof s === 'string' ? [...s.matchAll(/\{(\w+)\}/g)].map((m) => m[1]).sort().join(',') : '');

const data = {};
for (const l of LOCALES) {
  const file = path.join(dir, `${l}.json`);
  if (!fs.existsSync(file)) { console.error(`✗ ${file} not found`); process.exit(1); }
  data[l] = flatten(JSON.parse(fs.readFileSync(file, 'utf8')));
}

let problems = 0;
const base = data.en;
for (const l of LOCALES.filter((x) => x !== 'en')) {
  const cur = data[l];
  const missing = Object.keys(base).filter((k) => !(k in cur));
  const extra = Object.keys(cur).filter((k) => !(k in base));
  const empty = Object.keys(cur).filter((k) => typeof cur[k] === 'string' && cur[k].trim() === '');
  const ph = Object.keys(base).filter((k) => k in cur && placeholders(base[k]) !== placeholders(cur[k]));
  const same = Object.keys(base).filter((k) => k in cur && typeof base[k] === 'string' && base[k].length > 25 && base[k] === cur[k]);
  console.log(`\n== ${l}: ${Object.keys(cur).length} keys (en: ${Object.keys(base).length})`);
  if (missing.length) { problems += missing.length; console.log('  MISSING:', missing.join('\n           ')); }
  if (extra.length) { console.log('  extra (not in en, harmless but check):', extra.join(', ')); }
  if (empty.length) { problems += empty.length; console.log('  EMPTY:', empty.join(', ')); }
  if (ph.length) { problems += ph.length; console.log('  PLACEHOLDER MISMATCH:', ph.join(', ')); }
  if (same.length) console.log('  identical to en (untranslated?):', same.join(', '));
}
console.log(problems ? `\n✗ ${problems} problem(s)` : '\n✓ all locales are consistent');
process.exit(problems ? 1 : 0);
