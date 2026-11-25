import type { Locale } from './i18n';
import { strategies } from './marketplace-strategies';

export type Localized = Record<Locale, string>;
export type Category = 'strategies' | 'connectors' | 'plugins';

export const marketplaceCategoryAnchor: Record<Category, string> = {
  strategies: 'catalog',
  connectors: 'adapters',
  plugins: 'plugins',
};

export type CatalogItem = {
  id: string;
  name: string;
  description: Localized;
  category: Category;
  packageName: string;
  config: string;
  base?: boolean;
};

const coreImport = "import { defineConfig } from '@tradejs/core/config';";
const moduleConfig = (field: string, packageName: string) =>
  `${coreImport}

export default defineConfig({
  ${field}: ['${packageName}'],
});`;

const baseStrategies = new Set([
  'adaptive-momentum-ribbon', 'adaptive-trend-channel', 'breakout',
  'cup-and-handle', 'double-tap', 'dragon', 'flag', 'gartley', 'grid',
  'grid-classic', 'head-and-shoulders', 'hyperliquid-consensus', 'liquidity-tails',
  'liquidity-zones', 'ma-strategy', 'market-flush-reversal', 'relative-rotation',
  'reverse-trendline', 'structure-zones', 'trend-follow', 'trend-shift',
  'trendline', 'volatility-compression-breakout', 'volume-divergence',
]);

const strategyItems = strategies.map(({ slug, name, en, ru }): CatalogItem => {
  const packageSlug = ['trendline', 'reverse-trendline'].includes(slug)
    ? 'trend-line'
    : slug;
  const packageName = `@tradejs/strategy-${packageSlug}`;
  return {
    id: slug,
    name,
    description: { en, ru },
    category: 'strategies',
    packageName,
    config: moduleConfig('strategies', packageName),
    base: baseStrategies.has(slug),
  };
});

const connectors = [
  { id: 'bybit', name: 'Bybit', en: 'Market data and order execution on Bybit.', ru: 'Рыночные данные и исполнение ордеров на Bybit.' },
  { id: 'binance', name: 'Binance', en: 'Binance market data for historical tests and reference prices.', ru: 'Рыночные данные Binance для бэктестов и справочных цен.' },
  { id: 'coinbase', name: 'Coinbase', en: 'Coinbase spot market data for historical tests and reference prices.', ru: 'Данные спотового рынка Coinbase для бэктестов и справочных цен.' },
  { id: 'hyperliquid', name: 'Hyperliquid', en: 'Public market data from Hyperliquid perpetuals.', ru: 'Публичные данные бессрочных контрактов Hyperliquid.' },
].map(({ id, name, en, ru }): CatalogItem => ({
  id,
  name,
  description: { en, ru },
  category: 'connectors',
  packageName: '@tradejs/connectors',
  config: moduleConfig('connectors', '@tradejs/connectors'),
  base: true,
}));

function hookConfig(helper: string, hook: string, options = '') {
  return `${coreImport}
import { ${helper} } from '@tradejs/node/strategies';

export default defineConfig({
  hooks: {
    ${hook}: ${helper}(${options}),
  },
});`;
}

const plugins: CatalogItem[] = [
  {
    id: 'indicators',
    name: 'Indicators',
    description: {
      en: 'The official indicators package and registry for adding your own chart indicators.',
      ru: 'Официальный пакет индикаторов и реестр для подключения своих индикаторов к графику.',
    },
    category: 'plugins',
    packageName: '@tradejs/indicators',
    config: moduleConfig('indicators', '@tradejs/indicators'),
    base: true,
  },
  {
    id: 'base',
    name: 'TradeJS Base',
    description: {
      en: 'Start with the default strategies, exchange adapters and indicators package.',
      ru: 'Подключает стандартный набор стратегий, адаптеров бирж и пакет индикаторов.',
    },
    category: 'plugins',
    packageName: '@tradejs/base',
    config: `${coreImport}
import { basePreset } from '@tradejs/base';

export default defineConfig(basePreset);`,
  },
  {
    id: 'break-even',
    name: 'Move stop to break-even',
    description: {
      en: 'Move the stop loss to the entry price once the position reaches a configured profit threshold.',
      ru: 'Переносит стоп-лосс на цену входа, когда прибыль по позиции достигает заданного порога.',
    },
    category: 'plugins',
    packageName: '@tradejs/node',
    config: hookConfig('createMoveStopToBreakEvenOnBarHook', 'onBar'),
  },
  {
    id: 'global-profit',
    name: 'Close on global profit',
    description: {
      en: 'Close all open positions when their combined unrealized profit reaches a configured threshold.',
      ru: 'Закрывает все открытые позиции, когда их общая нереализованная прибыль достигает заданного порога.',
    },
    category: 'plugins',
    packageName: '@tradejs/node',
    config: hookConfig('createCloseAllOnGlobalProfitBeforeSignalsHook', 'beforeSignals', '{ profitRiskMultiplier: 5 }'),
  },
  {
    id: 'opposite-positions',
    name: 'Close opposite positions',
    description: {
      en: 'Close positions in the opposite direction on other symbols before placing a new order.',
      ru: 'Закрывает позиции противоположного направления по другим инструментам перед новым ордером.',
    },
    category: 'plugins',
    packageName: '@tradejs/node',
    config: hookConfig(
      'createCloseOppositeBeforePlaceOrderHook',
      'beforePlaceOrder',
      "{\n      isEnabled: (config) => Boolean(\n        (config as { CLOSE_OPPOSITE_POSITIONS?: unknown }).CLOSE_OPPOSITE_POSITIONS,\n      ),\n    }",
    ),
    base: true,
  },
];

export const catalog = [...strategyItems, ...connectors, ...plugins];

const installPackages: Record<string, string[]> = {
  'london-breakout': ['@tradejs/strategy-london-breakout@0.0.2'],
  'trend-pullback': ['@tradejs/strategy-trend-pullback@0.1.2'],
  'trading-patterns': [
    '@tradejs/strategy-trading-patterns',
    '@tradejs/strategy-diamond',
    '@tradejs/strategy-flag',
    '@tradejs/strategy-gartley',
    '@tradejs/strategy-head-and-shoulders',
  ],
};

export function installCommand(item: Pick<CatalogItem, 'id' | 'packageName'>) {
  const packages = installPackages[item.id] ?? [item.packageName];
  return `npm install --save-exact ${packages.join(' \\\n  ')}`;
}

export function componentPath({ id }: Pick<CatalogItem, 'id'>) {
  return `/marketplace/${id}`;
}

export function marketplaceDocs(locale: Locale, path: string) {
  return `https://docs.tradejs.dev/${locale === 'ru' ? 'ru/' : ''}${path}`;
}
