import { readFile } from 'node:fs/promises';
import path from 'node:path';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Markdown, { type Components } from 'react-markdown';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import { MarketplaceBacktestCommands } from '@/components/tradejs/marketplace-backtest-commands';
import { MarketplaceExitExample } from '@/components/tradejs/marketplace-exit-example';
import { MarketplaceDetail } from '@/components/tradejs/marketplace-detail';
import { AdaptiveTrendChannelExits } from '@/components/tradejs/marketplace-signal-chart/adaptive-trend-channel-exits';
import { HeadAndShouldersExit } from '@/components/tradejs/marketplace-signal-chart/head-and-shoulders-exit';
import { StrategySignalChart } from '@/components/tradejs/marketplace-signal-chart';
import type { StrategySlug } from '@/components/tradejs/marketplace-signal-chart/examples';
import type { Locale } from '@/lib/i18n';
import { catalog, componentPath, type CatalogItem } from '@/lib/marketplace';
import maBacktest from '@/public/marketplace/reports/ma-strategy.json';
import type { MarketplaceBacktestReport } from '@/components/tradejs/marketplace-backtest';
import packages from '@/content/marketplace/npm-packages.json';
import type { MarketplacePackage } from '@/lib/marketplace-packages';
import defaults from '@/content/marketplace/strategy-defaults.json';
import { componentConfigurationGroups, componentConfigurationTable, configurationGroups, configurationTable, type StrategyDefaults } from '@/lib/marketplace-configuration';
import { MarketplaceConfigurationKeys } from '@/components/tradejs/marketplace-configuration-keys';
import { MarketplaceCodeBlock } from '@/components/tradejs/marketplace-code-block';
import { exitExamples } from '@/lib/marketplace-exits';
import { absoluteUrl } from '@/lib/site-config';
import '../marketplace.css';
import './detail.css';

type PageProps = { params: Promise<{ component: string }> };

export const dynamicParams = false;

const maBacktestReport: MarketplaceBacktestReport = {
  ...maBacktest,
  candles: maBacktest.candles.map(([time, open, high, low, close]) => [time, open, high, low, close]),
  trades: maBacktest.trades.map(({ side, ...trade }) => {
    if (side !== 'LONG' && side !== 'SHORT') throw new Error(`Unexpected backtest side: ${side}`);
    return { ...trade, side };
  }),
};

export function generateStaticParams() {
  return catalog.map(({ id }) => ({ component: id }));
}

async function getItem(params: PageProps['params']) {
  const { component } = await params;
  const item = catalog.find(({ id }) => id === component);
  if (!item) notFound();
  return item;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const item = await getItem(params);
  const canonical = componentPath(item);
  const description = item.description.en;
  return {
    title: item.name,
    description,
    alternates: { canonical },
    openGraph: {
      title: `${item.name} | TradeJS Marketplace`,
      description,
      url: absoluteUrl(canonical),
    },
    twitter: { title: `${item.name} | TradeJS Marketplace`, description },
  };
}

const markdownComponents: Components = {
  a({ href, children }) {
    return href?.startsWith('/marketplace')
      ? <Link href={href}>{children}</Link>
      : <a href={href}>{children}</a>;
  },
  h2({ id, children }) {
    // Preserve anchors that were explicitly set in the original articles.
    const explicit = typeof children === 'string' && children.match(/^(.*) \{#([\w-]+)\}$/);
    return explicit ? <h2 id={explicit[2]}>{explicit[1]}</h2> : <h2 id={id}>{children}</h2>;
  },
  table({ children }) {
    return <div className="marketplace-table" tabIndex={0}><table>{children}</table></div>;
  },
  pre({ node, children }) {
    const codeNode = node?.children.find((child) => child.type === 'element' && child.tagName === 'code');
    if (codeNode?.type !== 'element') return <pre tabIndex={0}>{children}</pre>;
    const code = codeNode.children.map((child) => child.type === 'text' ? child.value : '').join('');
    return <MarketplaceCodeBlock code={code.replace(/\n$/, '')} />;
  },
};

async function readArticle(item: CatalogItem, locale: Locale, strategyDefaults?: StrategyDefaults) {
  const file = path.join(process.cwd(), 'content', 'marketplace', locale, `${item.id}.md`);
  const source = await readFile(file, 'utf8');
  const table = source.match(strategyDefaults ? configurationTable : componentConfigurationTable)?.[0];
  if (!table) throw new Error(`Missing configuration table for ${item.id} (${locale})`);
  const content = source.replace(table, '<!-- configuration-table -->\n');

  return content.split(/^(<!-- signal-chart -->|<!-- channel-exits -->|<!-- head-and-shoulders-exit -->|<!-- exit-example -->|<!-- configuration-table -->|<!-- backtest-commands -->|<span id="[^"]+"><\/span>)$/m).map((section, index) => {
    if (section === '<!-- backtest-commands -->') {
      return <MarketplaceBacktestCommands key={index} item={item} locale={locale} defaultInterval={strategyDefaults?.params.INTERVAL} />;
    }
    if (section === '<!-- configuration-table -->') {
      const config = strategyDefaults ? configurationGroups(table, strategyDefaults, locale) : componentConfigurationGroups(table);
      const groups = config.map(({ title, rows }) => ({
        title,
        rows: rows.map(({ description, parameters }) => ({
          parameters,
          description: (
            <Markdown components={{ ...markdownComponents, p: ({ children }) => <>{children}</> }}>
              {description}
            </Markdown>
          ),
        })),
      }));
      return <MarketplaceConfigurationKeys
        key={index}
        groups={groups}
        version={strategyDefaults?.version}
        packageName={item.packageName}
        locale={locale}
      />;
    }
    if (section === '<!-- exit-example -->') {
      return <MarketplaceExitExample
        key={index}
        example={exitExamples[item.id]}
        defaults={strategyDefaults}
        locale={locale}
        strategy={item.id as StrategySlug}
      />;
    }
    if (section === '<!-- channel-exits -->') {
      return <AdaptiveTrendChannelExits key={index} locale={locale} />;
    }
    if (section === '<!-- head-and-shoulders-exit -->') {
      return <HeadAndShouldersExit key={index} locale={locale} />;
    }
    if (section === '<!-- signal-chart -->') {
      return <StrategySignalChart key={index} strategy={item.id as StrategySlug} locale={locale} />;
    }
    const anchor = section.match(/^<span id="([^"]+)"><\/span>$/);
    if (anchor) return <span key={index} className="marketplace-article-anchor" id={anchor[1]} />;

    return (
      <Markdown key={index} remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeSlug]} components={markdownComponents}>
        {section}
      </Markdown>
    );
  });
}

export default async function MarketplaceComponent({ params }: PageProps) {
  const item = await getItem(params);
  const strategyDefaults = (defaults as Record<string, StrategyDefaults>)[item.name];
  const [en, ru] = await Promise.all([readArticle(item, 'en', strategyDefaults), readArticle(item, 'ru', strategyDefaults)]);
  return <MarketplaceDetail
    item={item}
    articles={{ en, ru }}
    defaults={strategyDefaults}
    backtest={item.id === 'ma-strategy' ? maBacktestReport : undefined}
    metadata={(packages as Record<string, MarketplacePackage>)[item.packageName]}
    exitExample={exitExamples[item.id]}
  />;
}
