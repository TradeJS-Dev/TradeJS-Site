import type { MetadataRoute } from 'next';
import { absoluteUrl, siteConfig } from '@/lib/site-config';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      changeFrequency: 'weekly',
      priority: 1,
      images: siteConfig.screenshots.map(absoluteUrl),
    },
  ];
}
