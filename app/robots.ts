import type { MetadataRoute } from 'next';
import { aiCrawlerUserAgents, siteConfig } from '@/lib/site-config';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: [...aiCrawlerUserAgents],
        allow: ['/', '/llms.txt', '/llms-full.txt'],
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
