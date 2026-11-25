export type PackageRelease = { version: string; date: string; commit?: string };

export type MarketplacePackage = {
  version: string;
  latest: string;
  node?: string;
  peerRanges: Record<string, string>;
  releases: PackageRelease[];
  source?: string;
};

export type NpmDownloadCount = {
  downloads: number;
  start: string;
  end: string;
};

export type NpmDownloadCounts = Record<string, NpmDownloadCount>;
