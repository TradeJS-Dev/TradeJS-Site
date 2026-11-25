import { readdir, readFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const packageRoot = process.argv[2];
if (!packageRoot) {
  throw new Error('Pass the directory containing node_modules with the TradeJS strategy packages installed.');
}

const root = path.resolve(packageRoot);
const scope = path.join(root, 'node_modules', '@tradejs');
const resolvePackage = createRequire(path.join(root, 'package.json')).resolve;
const names = (await readdir(scope)).filter((name) => name.startsWith('strategy-') && name !== 'strategy-kit').sort();
const defaults = {};

function flatten(record, prefix = '') {
  return Object.fromEntries(Object.entries(record).flatMap(([key, value]) => {
    const field = prefix + key;
    if (value && typeof value === 'object' && !Array.isArray(value) && Object.keys(value).length) {
      return Object.entries(flatten(value, field + '.'));
    }
    const displayed = JSON.stringify(value, (_key, part) =>
      typeof part === 'number' && !Number.isFinite(part) ? String(part) : part,
    );
    return [[field, displayed ?? null]];
  }));
}

for (const name of names) {
  const { version } = JSON.parse(await readFile(path.join(scope, name, 'package.json'), 'utf8'));
  const { strategyEntries } = await import(pathToFileURL(resolvePackage(`@tradejs/${name}`)).href);
  for (const { manifest, defaults: params } of strategyEntries) {
    if (defaults[manifest.name]) throw new Error(`Duplicate strategy: ${manifest.name}`);
    defaults[manifest.name] = { version, params: flatten(params) };
  }
}

process.stdout.write(JSON.stringify(defaults, null, 2) + '\n');
