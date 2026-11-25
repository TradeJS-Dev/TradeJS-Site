import { catalog } from '@/lib/marketplace';
import type { NpmDownloadCount, NpmDownloadCounts } from '@/lib/marketplace-packages';

const packages = [...new Set(catalog.map(({ packageName }) => packageName))];
const datePattern = /^\d{4}-\d{2}-\d{2}$/;

async function fetchCount(packageName: string): Promise<NpmDownloadCount | null> {
  const url = `https://api.npmjs.org/downloads/point/last-week/${encodeURIComponent(packageName)}`;
  try {
    const response = await fetch(url, { next: { revalidate: 86400 }, signal: AbortSignal.timeout(6000) });
    if (!response.ok) return null;
    const data = await response.json();
    if (!Number.isSafeInteger(data.downloads) || data.downloads < 0 ||
        !datePattern.test(data.start) || !datePattern.test(data.end)) return null;
    return { downloads: data.downloads, start: data.start, end: data.end };
  } catch {
    return null;
  }
}

export async function GET(request: Request) {
  const selected = new URL(request.url).searchParams.get('package');
  if (selected !== null && !packages.includes(selected)) {
    return Response.json({}, { status: 404 });
  }
  const counts: NpmDownloadCounts = {};
  const names = selected ? [selected] : packages;
  await Promise.all(names.map(async (name) => {
    const count = await fetchCount(name);
    if (count) counts[name] = count;
  }));
  const cache = Object.keys(counts).length === names.length
    ? 'public, max-age=900, stale-while-revalidate=3600'
    : 'public, max-age=60';
  return Response.json(counts, { headers: { 'Cache-Control': cache } });
}
