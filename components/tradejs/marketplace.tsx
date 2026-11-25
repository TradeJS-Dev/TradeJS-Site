'use client';

import { useState, useSyncExternalStore } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Activity, ArrowDown, ArrowRight, ArrowUpRight, Box, Code2,
  Plug, Puzzle, Search, X,
} from 'lucide-react';
import {
  Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger,
} from '@/components/ui/dialog';
import { breakoutIndex } from '@/lib/head-and-shoulders-demo';
import { catalog, componentPath, marketplaceCategoryAnchor, marketplaceDocs, type CatalogItem, type Category } from '@/lib/marketplace';
import { useLocale } from './locale-provider';
import { Header } from './header';
import { Footer } from './footer';
import { NpmDownloads } from './marketplace-package-info';
import { useMarketplaceDownloads } from './use-marketplace-downloads';
import type { NpmDownloadCount } from '@/lib/marketplace-packages';
import { MarketplaceCodeBlock } from './marketplace-code-block';
import { MarketplaceConfig } from './marketplace-config';
import { StrategyReplayChart } from './strategy-replay-chart';

const copy = {
  en: {
    title: 'Build your TradeJS setup.',
    intro: 'Browse ready-to-use strategies, exchange adapters, and plugins for your TradeJS project.',
    browse: 'Explore catalog',
    guide: 'Configuration reference',
    catalog: 'Component catalog',
    filters: 'Component type',
    strategies: 'Strategies',
    patternPreview: 'Example of a head and shoulders pattern and its neckline break.',
    connectors: 'Adapters',
    plugins: 'Plugins',
    search: 'Search by name or package…',
    clear: 'Clear search',
    results: 'shown',
    empty: 'No matching components',
    emptyHelp: 'Try searching for another name or package.',
    setup: 'Connect',
    details: 'View details',
    merge: 'Merge these settings into your existing project configuration.',
    included: 'Already included if your project uses basePreset.',
    configTitle: 'Project configuration',
    configHelp: 'Manage accounts, strategy settings, and deployment in the runtime section of your config.',
    runtime: 'Runtime guide',
  },
  ru: {
    title: 'Соберите свой TradeJS.',
    intro: 'Готовые стратегии, адаптеры бирж и плагины для вашего проекта TradeJS.',
    browse: 'Открыть каталог',
    guide: 'Справочник по конфигурации',
    catalog: 'Каталог компонентов',
    filters: 'Тип компонента',
    strategies: 'Стратегии',
    patternPreview: 'Пример фигуры «голова и плечи» с пробоем линии шеи.',
    connectors: 'Адаптеры',
    plugins: 'Плагины',
    search: 'Поиск по названию или пакету…',
    clear: 'Очистить поиск',
    results: 'показано',
    empty: 'Компоненты не найдены',
    emptyHelp: 'Попробуйте другое название или имя пакета.',
    setup: 'Подключить',
    details: 'Подробнее',
    merge: 'Добавьте эти настройки в существующую конфигурацию проекта.',
    included: 'Уже подключён в проектах с basePreset.',
    configTitle: 'Конфигурация проекта',
    configHelp: 'Аккаунты, параметры стратегий и развёртывание задаются в разделе runtime.',
    runtime: 'Руководство по runtime',
  },
} as const;

const categories = [
  { id: 'strategies', icon: Activity },
  { id: 'connectors', icon: Plug },
  { id: 'plugins', icon: Puzzle },
] as const;

function subscribeToCategory(onChange: () => void) {
  window.addEventListener('hashchange', onChange);
  return () => window.removeEventListener('hashchange', onChange);
}

function categoryFromHash(): Category {
  const anchor = window.location.hash.slice(1);
  return categories.find(({ id }) => marketplaceCategoryAnchor[id] === anchor)?.id ?? 'strategies';
}

const categoryCounts = {
  strategies: catalog.filter(({ category }) => category === 'strategies').length,
  connectors: catalog.filter(({ category }) => category === 'connectors').length,
  plugins: catalog.filter(({ category }) => category === 'plugins').length,
};

function ConfigPreview() {
  const code = `import { defineConfig } from
  '@tradejs/core/config';
import { basePreset } from '@tradejs/base';

export default defineConfig(basePreset, {
  strategies: [
    '@tradejs/strategy-triangle',
  ],
});`;
  return (
    <MarketplaceCodeBlock title="tradejs.config.ts" code={code} kind="config">
        <span className="marketplace-code-keyword">import</span>{' { defineConfig } '}
        <span className="marketplace-code-keyword">from</span>{'\n  '}
        <span className="marketplace-code-string">{"'@tradejs/core/config'"}</span>{';\n'}
        <span className="marketplace-code-keyword">import</span>{' { basePreset } '}
        <span className="marketplace-code-keyword">from</span>{' '}
        <span className="marketplace-code-string">{"'@tradejs/base'"}</span>{';\n\n'}
        <span className="marketplace-code-keyword">export default</span>{' defineConfig(basePreset, {\n  '}
        <span className="marketplace-code-field">strategies</span>{': [\n    '}
        <span className="marketplace-code-string">{"'@tradejs/strategy-triangle'"}</span>{',\n  ],\n});'}
    </MarketplaceCodeBlock>
  );
}

function CatalogCard({ item, downloads }: { item: CatalogItem; downloads?: NpmDownloadCount }) {
  const { locale, t } = useLocale();
  const labels = copy[locale];
  const href = componentPath(item);
  const Icon = item.category === 'connectors' ? Plug : item.id === 'base' ? Box : Puzzle;

  return (
    <article className="marketplace-card" data-category={item.category}>
      {item.category === 'strategies' ? (
        <div className="marketplace-card-art">
          {item.id === 'head-and-shoulders' ? (
            <StrategyReplayChart
              last={breakoutIndex + 5}
              phase={2}
              className="marketplace-preview-chart"
              labels={{ ...t.replay.chartLabels, chart: labels.patternPreview }}
            />
          ) : (
            <Image
              src={`/marketplace/strategies/${item.id}.webp`}
              alt=""
              fill
              sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 390px"
            />
          )}
        </div>
      ) : null}
      <div className="marketplace-card-body">
        <div className="marketplace-card-meta">
          {item.category !== 'strategies' && <Icon size={19} aria-hidden="true" />}
          <code>{item.packageName}</code>
          {item.base && <span className="marketplace-base">base</span>}
        </div>
        <h3><Link href={href} className="marketplace-card-link">{item.name}</Link></h3>
        <p>{item.description[locale]}</p>
        {downloads && <NpmDownloads count={downloads} compact />}
      </div>
      <div className="marketplace-card-actions">
        <span className="marketplace-card-details" aria-hidden="true">{labels.details} <ArrowRight size={15} /></span>
        <Dialog>
          <DialogTrigger asChild>
            <button type="button" aria-label={`${labels.setup} ${item.name}`}>
              {labels.setup} <ArrowRight size={15} />
            </button>
          </DialogTrigger>
          <DialogContent className="marketplace-dialog sm:max-w-xl" lang={locale}>
            <DialogHeader>
              <DialogTitle>{item.name}</DialogTitle>
              <DialogDescription>
                {item.description[locale]} {item.base ? labels.included : labels.merge}
              </DialogDescription>
            </DialogHeader>
            <MarketplaceConfig item={item} />
            <Link className="marketplace-ask justify-self-start" href={href}>
              {labels.details} <ArrowRight size={15} />
            </Link>
          </DialogContent>
        </Dialog>
      </div>
    </article>
  );
}

export function Marketplace() {
  const { locale } = useLocale();
  const labels = copy[locale];
  const filter = useSyncExternalStore<Category>(subscribeToCategory, categoryFromHash, () => 'strategies');
  const [search, setSearch] = useState('');
  const downloads = useMarketplaceDownloads();
  const query = search.trim().toLocaleLowerCase(locale);
  const results = catalog.filter((item) =>
    item.category === filter &&
    [item.name, item.packageName, item.id, item.description[locale]].some(
      (value) => value.toLocaleLowerCase(locale).includes(query),
    ),
  );

  return (
    <div lang={locale} className="marketplace">
      <Header marketplace />
      <main>
        <section className="marketplace-hero">
          <div className="marketplace-container marketplace-hero-layout">
            <div>
              <p className="marketplace-kicker"><Box size={16} /> TradeJS Marketplace</p>
              <h1>{labels.title}</h1>
              <p className="marketplace-intro">{labels.intro}</p>
              <div className="marketplace-hero-actions">
                <a className="marketplace-primary" href={`#${marketplaceCategoryAnchor[filter]}`}>{labels.browse} <ArrowDown size={16} /></a>
                <a className="marketplace-ask" href={marketplaceDocs(locale, 'api/framework')}>{labels.guide} <ArrowUpRight size={15} /></a>
              </div>
            </div>
            <ConfigPreview />
          </div>
        </section>

        <section id="catalog" aria-labelledby="catalog-title" className="marketplace-container marketplace-catalog">
          <span id={marketplaceCategoryAnchor.connectors} className="marketplace-category-anchor" aria-hidden="true" />
          <span id={marketplaceCategoryAnchor.plugins} className="marketplace-category-anchor" aria-hidden="true" />
          <div className="marketplace-toolbar">
            <h2 id="catalog-title">{labels.catalog}</h2>
            <div className="marketplace-search">
              <Search size={18} aria-hidden="true" />
              <input
                type="search"
                aria-label={labels.search}
                placeholder={labels.search}
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
              {search && (
                <button type="button" aria-label={labels.clear} onClick={() => setSearch('')}>
                  <X size={16} />
                </button>
              )}
            </div>
          </div>
          <div className="marketplace-filters">
            <div className="marketplace-tabs" role="group" aria-label={labels.filters}>
              {categories.map(({ id, icon: Icon }) => (
                <button key={id} type="button" aria-pressed={id === filter} onClick={() => {
                  if (id !== filter) window.location.hash = marketplaceCategoryAnchor[id];
                }}>
                  <Icon size={16} aria-hidden="true" />
                  {labels[id]}
                  <span>{categoryCounts[id]}</span>
                </button>
              ))}
            </div>
            <p className="marketplace-count" role="status">{labels.results} {results.length} / {categoryCounts[filter]}</p>
          </div>
          {results.length ? (
            <div className="marketplace-grid">
              {results.map((item) => <CatalogCard key={item.id} item={item} downloads={downloads[item.packageName]} />)}
            </div>
          ) : (
            <div className="marketplace-empty">
              <Search size={24} aria-hidden="true" />
              <h3>{labels.empty}</h3>
              <p>{labels.emptyHelp}</p>
              <button type="button" className="marketplace-primary" onClick={() => setSearch('')}>
                {labels.clear}
              </button>
            </div>
          )}
          <aside className="marketplace-runtime">
            <Code2 size={22} aria-hidden="true" />
            <div><h2>{labels.configTitle}</h2><p>{labels.configHelp}</p></div>
            <a className="marketplace-ask" href={marketplaceDocs(locale, 'advanced/runtime')}>{labels.runtime} <ArrowUpRight size={15} /></a>
          </aside>
        </section>
      </main>
      <Footer />
    </div>
  );
}
