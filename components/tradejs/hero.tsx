'use client';

import { useState } from 'react';
import { ArrowUpRight, Check, Copy } from 'lucide-react';
import { exitIndex } from '@/lib/head-and-shoulders-demo';
import { siteConfig } from '@/lib/site-config';
import { reachYandexMetrikaGoal } from '@/lib/yandex-metrika';
import { useLocale } from './locale-provider';
import { StrategyReplay } from './strategy-replay';
import { StrategyReplayChart } from './strategy-replay-chart';

const BOOTSTRAP_COMMAND = 'npx create-tradejs';

export function Hero() {
  const { locale, t } = useLocale();
  const [copied, setCopied] = useState(false);
  const firstBacktestUrl =
    locale === 'ru'
      ? 'https://docs.tradejs.dev/ru/getting-started/first-backtest'
      : siteConfig.links.firstBacktest;

  return (
    <>
      <section className="market-intro relative isolate overflow-hidden border-b border-border">
        <div className="market-horizon" aria-hidden="true">
          <StrategyReplayChart last={exitIndex} phase={1} decorative labels={t.replay.chartLabels} className="market-horizon-chart" />
        </div>
        <div className="relative mx-auto flex min-h-[min(780px,96svh)] max-w-7xl flex-col justify-center px-5 pb-12 pt-28 sm:px-8 lg:px-12">
          <p className="mb-6 font-mono text-[11px] tracking-[0.19em] text-primary">TRADEJS / TYPESCRIPT</p>
          <h1 className="market-headline font-extrabold uppercase">
            {t.hero.sceneHeadline}{' '}
            <span className="block text-primary">{t.hero.sceneAccent}</span>
          </h1>
          <p className="mt-7 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">{t.hero.sceneSubtitle}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={firstBacktestUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => reachYandexMetrikaGoal('open_quickstart', { placement: 'hero', locale })}
              className="inline-flex min-h-12 items-center gap-3 rounded-md bg-primary px-5 text-sm font-bold text-primary-foreground hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              {t.hero.quickstart} <ArrowUpRight size={15} aria-hidden="true" />
            </a>
            <div className="flex min-h-12 items-center gap-4 rounded-md border border-border bg-background/80 py-1 pl-3 pr-1 text-muted-foreground">
              <code className="whitespace-nowrap text-xs sm:text-sm"><span className="mr-2 text-primary" aria-hidden="true">$</span>{BOOTSTRAP_COMMAND}</code>
              <button
                type="button"
                className="grid size-9 place-items-center rounded text-primary hover:bg-primary/10 focus-visible:outline-2 focus-visible:outline-primary"
                aria-label={copied ? t.hero.copied : t.hero.copyCommand}
                onClick={async () => {
                  await navigator.clipboard.writeText(BOOTSTRAP_COMMAND);
                  reachYandexMetrikaGoal('copy_npx', { placement: 'hero' });
                  setCopied(true);
                }}
              >
                {copied ? <Check size={15} aria-hidden="true" /> : <Copy size={15} aria-hidden="true" />}
              </button>
            </div>
          </div>
        </div>
      </section>
      <StrategyReplay />
    </>
  );
}
