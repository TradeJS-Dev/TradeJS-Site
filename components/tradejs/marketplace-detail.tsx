'use client';

import type { ReactNode } from 'react';
import Link from 'next/link';
import { Activity, ArrowDown, ArrowLeft, Plug, Puzzle } from 'lucide-react';
import type { Locale } from '@/lib/i18n';
import { marketplaceCategoryAnchor, type CatalogItem } from '@/lib/marketplace';
import { Footer } from './footer';
import { Header } from './header';
import { useLocale } from './locale-provider';
import { MarketplaceConfig } from './marketplace-config';
import type { StrategyDefaults } from '@/lib/marketplace-configuration';
import { MarketplaceBacktest, type MarketplaceBacktestReport } from './marketplace-backtest';
import { MarketplacePackageInfo } from './marketplace-package-info';
import type { MarketplacePackage } from '@/lib/marketplace-packages';
import type { ExitExample } from '@/lib/marketplace-exits';

const copy = {
  en: {
    all: 'Back to Marketplace',
    strategies: 'Strategy',
    connectors: 'Adapter',
    plugins: 'Plugin',
    setup: 'Connect',
    setupTitle: 'Project configuration',
    setupHelp: 'Merge this example into your existing project configuration.',
    included: 'Already included if your project uses basePreset. This example shows explicit registration.',
  },
  ru: {
    all: 'Назад в Marketplace',
    strategies: 'Стратегия',
    connectors: 'Адаптер',
    plugins: 'Плагин',
    setup: 'Подключить',
    setupTitle: 'Конфигурация проекта',
    setupHelp: 'Добавьте настройки из примера в существующую конфигурацию проекта.',
    included: 'Уже входит в basePreset. Пример показывает, как подключить компонент отдельно.',
  },
} as const;

const icons = { strategies: Activity, connectors: Plug, plugins: Puzzle };

export function MarketplaceDetail({
  item,
  articles,
  defaults,
  metadata,
  backtest,
  exitExample,
}: {
  item: CatalogItem;
  articles: Record<Locale, ReactNode>;
  defaults?: StrategyDefaults;
  metadata?: MarketplacePackage;
  backtest?: MarketplaceBacktestReport;
  exitExample?: ExitExample;
}) {
  const { locale } = useLocale();
  const labels = copy[locale];
  const Icon = icons[item.category];
  const exitLink = exitExample?.outcome === 'protect'
    ? (locale === 'ru' ? 'Перенос стопа' : 'Stop adjustment')
    : (locale === 'ru' ? 'Сценарий выхода' : 'Exit example');

  return (
    <div className="marketplace marketplace-detail" lang={locale}>
      <Header marketplace />
      <main>
        <div className="marketplace-detail-hero">
          <div className="marketplace-container">
            <div className="marketplace-detail-top">
              <Link className="marketplace-back" href={`/marketplace#${marketplaceCategoryAnchor[item.category]}`}>
                <ArrowLeft size={16} aria-hidden="true" /> {labels.all}
              </Link>
              <p className="marketplace-kicker">
                <Icon size={17} aria-hidden="true" /> {labels[item.category]}
              </p>
            </div>
            <div className="marketplace-detail-heading">
              <div>
                <h1>{item.name}</h1>
                <p className="marketplace-detail-description">{item.description[locale]}</p>
                <a className="marketplace-detail-jump" href="#configuration-table">
                  {locale === 'ru' ? 'Ключи конфигурации' : 'Configuration keys'}
                </a>
                {exitExample && <a className="marketplace-detail-jump" href="#exit-example">
                  {exitLink}
                </a>}
                {backtest && <a className="marketplace-detail-jump" href="#backtest-report">
                  {locale === 'ru' ? 'Разбор бэктеста' : 'Backtest replay'}
                </a>}
                {metadata && <a className="marketplace-detail-jump" href="#package-info">
                  {locale === 'ru' ? 'Совместимость и версии' : 'Compatibility and versions'}
                </a>}
                <div className="marketplace-detail-package">
                  <code>{item.packageName}</code>
                  {item.base && <span className="marketplace-base">base</span>}
                </div>
              </div>
              <a href="#connect" className="marketplace-primary">
                {labels.setup} <ArrowDown size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
        <div className="marketplace-container marketplace-detail-layout">
          <article className="marketplace-article" aria-label={item.name}>
            {articles[locale]}
            {backtest && <MarketplaceBacktest report={backtest} />}
          </article>
          <div className="marketplace-detail-sidebar">
            <aside id="connect" className="marketplace-setup" aria-labelledby="connect-title">
              <h2 id="connect-title">{labels.setupTitle}</h2>
              <p>{item.base ? labels.included : labels.setupHelp}</p>
              <MarketplaceConfig key={item.id} item={item} />
            </aside>
            {metadata && <MarketplacePackageInfo
              item={item}
              metadata={metadata}
              interval={defaults?.params.INTERVAL?.replaceAll('"', '')}
            />}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
