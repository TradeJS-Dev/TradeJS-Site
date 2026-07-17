import { LandingPage } from '@/components/tradejs/landing-page';

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        name: 'TradeJS',
        url: 'https://tradejs.dev',
        inLanguage: 'en',
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://docs.tradejs.dev/?q={search_term_string}',
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'SoftwareApplication',
        name: 'TradeJS',
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Linux, macOS, Windows',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
        url: 'https://tradejs.dev',
        description:
          'TypeScript framework for building, backtesting, and running programmable trading strategies, with a self-hosted runtime you control.',
      },
      {
        '@type': 'SoftwareSourceCode',
        name: 'TradeJS',
        codeRepository: 'https://github.com/tradejs-dev/tradejs',
        programmingLanguage: 'TypeScript',
        runtimePlatform: 'Node.js',
        url: 'https://tradejs.dev',
        license: 'https://github.com/TradeJS-Dev/TradeJS/blob/stable/LICENSING.md',
        description:
          'TypeScript-native strategy framework and runtime stack for infrastructure you control.',
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
