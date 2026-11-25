'use client';

import Link from 'next/link';
import { Activity, ArrowRight, Plug, Puzzle } from 'lucide-react';
import { catalog, componentPath } from '@/lib/marketplace';
import { useLocale } from './locale-provider';

const featured = catalog.filter(({ id }) => ['breakout', 'bybit', 'indicators'].includes(id));

const copy = {
  en: {
    intro: 'Find ready-to-use trading strategies, exchange adapters, and plugins. Each component has a setup example for',
    open: 'Explore Marketplace',
    strategies: 'Strategy',
    connectors: 'Exchange adapter',
    plugins: 'Plugin',
  },
  ru: {
    intro: 'Выберите готовую торговую стратегию, адаптер биржи или плагин. У каждого компонента есть пример подключения в',
    open: 'Открыть Marketplace',
    strategies: 'Стратегия',
    connectors: 'Адаптер биржи',
    plugins: 'Плагин',
  },
} as const;

const appearance = {
  strategies: { Icon: Activity, classes: 'bg-primary/10 text-primary' },
  connectors: { Icon: Plug, classes: 'bg-info/10 text-info' },
  plugins: { Icon: Puzzle, classes: 'bg-violet-400/10 text-violet-300' },
};

export function MarketplacePreview() {
  const { locale } = useLocale();
  const labels = copy[locale];

  return (
    <section aria-labelledby="marketplace-preview-title" className="border-b border-border bg-surface/40 px-4 py-14 lg:px-8 lg:py-20">
      <div className="blueprint-grid mx-auto grid max-w-6xl gap-8 rounded-2xl border border-border bg-surface p-5 sm:p-8 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-12 lg:p-10">
        <div>
          <h2 id="marketplace-preview-title" className="text-4xl font-bold leading-tight tracking-[-0.045em] sm:text-5xl">
            Marketplace
          </h2>
          <p className="mt-3 max-w-md leading-relaxed text-muted-foreground">
            {labels.intro}{' '}<code className="font-mono text-[0.86em] text-foreground">tradejs.config.ts</code>.
          </p>
          <Link
            href="/marketplace"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          >
            {labels.open} <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
        <ul className="divide-y divide-border rounded-xl border border-border bg-background/85">
          {featured.map((item) => {
            const { Icon, classes } = appearance[item.category];
            return (
              <li key={item.id}>
                <Link
                  href={componentPath(item)}
                  className="group flex items-center gap-3 rounded-lg px-3 py-3 transition-colors hover:bg-surface-2 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring sm:px-4"
                >
                  <span className={`grid size-9 shrink-0 place-items-center rounded-lg ${classes}`}>
                    <Icon size={17} aria-hidden="true" />
                  </span>
                  <span className="flex min-w-0 flex-1 flex-wrap items-baseline justify-between gap-x-3">
                    <span className="font-semibold text-foreground">{item.name}</span>
                    <span className="text-sm text-muted-foreground">{labels[item.category]}</span>
                  </span>
                  <ArrowRight size={16} aria-hidden="true" className="shrink-0 text-muted-foreground group-hover:text-primary" />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
