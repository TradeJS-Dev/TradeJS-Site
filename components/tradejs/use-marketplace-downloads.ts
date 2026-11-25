'use client';

import { useEffect, useState } from 'react';
import type { NpmDownloadCounts } from '@/lib/marketplace-packages';

export function useMarketplaceDownloads(packageName?: string) {
  const [counts, setCounts] = useState<NpmDownloadCounts>({});
  useEffect(() => {
    const controller = new AbortController();
    const path = packageName
      ? `/api/marketplace/downloads?package=${encodeURIComponent(packageName)}`
      : '/api/marketplace/downloads';
    fetch(path, { signal: controller.signal })
      .then(async (response) => {
        if (response.ok && !controller.signal.aborted) setCounts(await response.json());
      })
      .catch(() => {});
    return () => controller.abort();
  }, [packageName]);
  return counts;
}
