import type { MetadataRoute } from 'next';
import { catalog, componentPath } from '@/lib/marketplace';
import { absoluteUrl, siteConfig } from '@/lib/site-config';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      changeFrequency: 'weekly',
      priority: 1,
      images: siteConfig.screenshots.map(absoluteUrl),
    },
    {
      url: absoluteUrl('/marketplace'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...catalog.map((item) => ({
      url: absoluteUrl(componentPath(item)),
      changeFrequency: 'monthly' as const,
    })),
  ];
}
