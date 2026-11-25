import { readFile } from 'node:fs/promises';

const defaults = JSON.parse(await readFile(new URL('../content/marketplace/strategy-defaults.json', import.meta.url)));
const strategies = await readFile(new URL('../lib/marketplace-strategies.ts', import.meta.url), 'utf8');
const slugs = [...strategies.matchAll(/name: '([^']+)',\s+slug: '([^']+)'/g)];
const packages = new Map(slugs.map(([, name, slug]) => [
  `@tradejs/strategy-${['trendline', 'reverse-trendline'].includes(slug) ? 'trend-line' : slug}`,
  defaults[name].version,
]));
for (const name of ['base', 'connectors', 'indicators', 'node']) packages.set(`@tradejs/${name}`, null);

async function packageInfo(name, pinned) {
  const url = `https://registry.npmjs.org/${encodeURIComponent(name)}`;
  const response = await fetch(url, { signal: AbortSignal.timeout(15000) });
  if (!response.ok) throw new Error(`${name}: npm returned ${response.status}`);
  const data = await response.json();
  const version = pinned ?? data['dist-tags'].latest;
  const manifest = data.versions[version];
  if (!manifest) throw new Error(`${name}@${version} is missing from npm`);
  const peerRanges = Object.fromEntries(Object.entries(manifest.peerDependencies ?? {}).filter(([key]) =>
    ['@tradejs/core', '@tradejs/node', '@tradejs/types'].includes(key),
  ));
  const releases = Object.entries(data.time)
    .filter(([key]) => /^\d+\.\d+\.\d+$/.test(key) && data.versions[key])
    .sort((left, right) => right[1].localeCompare(left[1]))
    .slice(0, 5)
    .map(([published, date]) => {
      const commit = data.versions[published].gitHead;
      return {
        version: published,
        date: date.slice(0, 10),
        commit: typeof commit === 'string' && /^[0-9a-f]{40}$/.test(commit) ? commit : undefined,
      };
    });
  const repository = typeof manifest.repository === 'string' ? manifest.repository : manifest.repository?.url;
  const repositoryUrl = repository?.match(/github\.com[/:]([\w.-]+\/[\w.-]+?)(?:\.git)?$/)?.[1];

  return {
    version,
    latest: data['dist-tags'].latest,
    node: manifest.engines?.node,
    peerRanges,
    releases,
    source: repositoryUrl ? `https://github.com/${repositoryUrl}` : undefined,
  };
}

const result = {};
const entries = [...packages.entries()].sort(([left], [right]) => left.localeCompare(right));
for (let index = 0; index < entries.length; index += 6) {
  const group = entries.slice(index, index + 6);
  const values = await Promise.all(group.map(([name, pinned]) => packageInfo(name, pinned)));
  group.forEach(([name], offset) => { result[name] = values[offset]; });
}

process.stdout.write(JSON.stringify(result, null, 2) + '\n');
