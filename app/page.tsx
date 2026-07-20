import { LandingPage } from '@/components/tradejs/landing-page';
import { absoluteUrl, siteConfig } from '@/lib/site-config';

export default function Page() {
  const organizationId = absoluteUrl('/#organization');
  const websiteId = absoluteUrl('/#website');
  const webpageId = absoluteUrl('/#webpage');
  const softwareId = absoluteUrl('/#software');
  const sourceCodeId = absoluteUrl('/#source-code');
  const primaryImageId = absoluteUrl('/#primary-image');

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': organizationId,
        name: siteConfig.name,
        url: siteConfig.url,
        logo: {
          '@type': 'ImageObject',
          url: absoluteUrl('/icon-512x512.png'),
          width: 512,
          height: 512,
        },
        sameAs: [
          siteConfig.links.github,
          siteConfig.links.npm,
          siteConfig.links.x,
        ],
      },
      {
        '@type': 'WebSite',
        '@id': websiteId,
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.description,
        inLanguage: siteConfig.language,
        publisher: { '@id': organizationId },
      },
      {
        '@type': 'WebPage',
        '@id': webpageId,
        name: siteConfig.title,
        url: siteConfig.url,
        description: siteConfig.description,
        inLanguage: siteConfig.language,
        isPartOf: { '@id': websiteId },
        about: { '@id': softwareId },
        primaryImageOfPage: { '@id': primaryImageId },
      },
      {
        '@type': 'ImageObject',
        '@id': primaryImageId,
        url: absoluteUrl(siteConfig.image),
        contentUrl: absoluteUrl(siteConfig.image),
        width: 1200,
        height: 630,
        caption: siteConfig.title,
      },
      {
        '@type': 'SoftwareApplication',
        '@id': softwareId,
        name: siteConfig.name,
        alternateName: 'TradeJS Framework',
        applicationCategory: 'DeveloperApplication',
        applicationSubCategory: 'Algorithmic trading and backtesting',
        operatingSystem: 'Linux, macOS, Windows',
        softwareVersion: siteConfig.version,
        softwareRequirements: 'Node.js 20.19 or newer; Docker with Compose',
        url: siteConfig.url,
        downloadUrl: siteConfig.links.createTradeJs,
        installUrl: siteConfig.links.quickstart,
        softwareHelp: siteConfig.links.docs,
        description: siteConfig.shortDescription,
        featureList: [
          'TypeScript-native strategy and indicator authoring',
          'Deterministic historical backtesting and parameter grids',
          'Runtime signals and optional controlled execution',
          'Classic, ML-filtered, AI-at-runtime, and AI Gate workflows',
          'Self-hosted infrastructure and local data control',
        ],
        license: siteConfig.links.licensing,
        isAccessibleForFree: true,
        author: { '@id': organizationId },
        publisher: { '@id': organizationId },
        mainEntityOfPage: { '@id': webpageId },
      },
      {
        '@type': 'SoftwareSourceCode',
        '@id': sourceCodeId,
        name: 'TradeJS source code',
        codeRepository: siteConfig.links.github,
        programmingLanguage: 'TypeScript',
        runtimePlatform: 'Node.js',
        version: siteConfig.version,
        url: siteConfig.links.github,
        license: siteConfig.links.licensing,
        description: siteConfig.shortDescription,
        author: { '@id': organizationId },
        targetProduct: { '@id': softwareId },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <LandingPage />
    </>
  );
}
