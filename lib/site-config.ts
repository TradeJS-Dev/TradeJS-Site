export const siteConfig = {
  name: 'TradeJS',
  url: 'https://tradejs.dev',
  title: 'TradeJS — TypeScript Trading & Backtesting Framework',
  description:
    'Build, backtest, and run algorithmic trading strategies in TypeScript with a self-hosted runtime, typed APIs, and reproducible backtests.',
  shortDescription:
    'A self-hosted TypeScript framework for strategy authoring, backtesting, runtime signals, and controlled execution.',
  language: 'en',
  locale: 'en_US',
  version: '2.0.0',
  image: '/og-image-v2.png',
  links: {
    app: 'https://app.tradejs.dev',
    docs: 'https://docs.tradejs.dev/',
    github: 'https://github.com/TradeJS-Dev/TradeJS',
    npm: 'https://www.npmjs.com/org/tradejs',
    createTradeJs: 'https://www.npmjs.com/package/create-tradejs',
    firstBacktest:
      'https://docs.tradejs.dev/getting-started/first-backtest',
    installation: 'https://docs.tradejs.dev/getting-started/installation',
    licensing: 'https://docs.tradejs.dev/introduction/licensing',
    x: 'https://x.com/tradejsdev',
  },
  screenshots: [
    '/screenshots/btc-market-chart.jpg',
    '/screenshots/backtest-form.jpg',
    '/screenshots/runtime-performance.webp',
    '/screenshots/strategy-statistics.webp',
  ],
} as const;

export const aiCrawlerUserAgents = [
  'OAI-SearchBot',
  'ChatGPT-User',
  'GPTBot',
  'Claude-SearchBot',
  'Claude-User',
  'ClaudeBot',
  'PerplexityBot',
  'Perplexity-User',
] as const;

export function absoluteUrl(path: string) {
  return new URL(path, siteConfig.url).toString();
}
