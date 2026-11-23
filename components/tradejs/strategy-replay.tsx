'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowRight, CandlestickChart } from 'lucide-react';
import { atr, breakoutIndex, candles, entry, entryIndex, exitIndex, neckline, stop, target } from '@/lib/head-and-shoulders-demo';
import { AppScreenshot } from './app-screenshot';
import { useLocale } from './locale-provider';
import { StrategyReplayChart } from './strategy-replay-chart';

// Replay cues are tied to candle indices. The right shoulder needs three subsequent bars to be confirmed.
const stages = [
  { start: 23, end: 36 },
  { start: 37, end: breakoutIndex - 1 },
  { start: breakoutIndex, end: entryIndex - 1 },
  { start: entryIndex, end: exitIndex - 1 },
  { start: exitIndex, end: exitIndex },
] as const;

const LAST_STAGE = stages.length - 1;
const clampProgress = (value: number) => Math.min(0.99999, Math.max(0, value));

function getScrollTrack(section: HTMLElement, panel: HTMLElement) {
  const stickyTop = Number.parseFloat(getComputedStyle(panel).top);
  return {
    start: section.getBoundingClientRect().top + window.scrollY - stickyTop,
    distance: Math.max(1, section.offsetHeight - panel.offsetHeight),
  };
}

export function StrategyReplay() {
  const { t, locale } = useLocale();
  const copy = t.replay;
  const scene = useRef<HTMLElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  const [frame, setFrame] = useState<{ phase: number; last: number }>({ phase: 0, last: stages[0].start });
  const { phase, last } = frame;
  const price = new Intl.NumberFormat(locale === 'ru' ? 'ru-RU' : 'en-US', { maximumFractionDigits: 0 });

  useEffect(() => {
    const section = scene.current;
    const stickyPanel = panel.current;
    if (!section || !stickyPanel) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let pendingFrame = 0;
    const update = () => {
      pendingFrame = 0;
      const { start, distance } = getScrollTrack(section, stickyPanel);
      const progress = clampProgress((window.scrollY - start) / distance);
      const scaled = progress * stages.length;
      const phase = Math.floor(scaled);
      section.style.setProperty(
        '--replay-progress',
        String(reduceMotion.matches ? (phase + 1) / stages.length : progress),
      );
      const { start: first, end } = stages[phase];
      const last = reduceMotion.matches ? end : Math.round(first + (end - first) * (scaled - phase));
      setFrame((previous) => previous.phase === phase && previous.last === last ? previous : { phase, last });
    };
    const schedule = () => {
      if (!pendingFrame) pendingFrame = window.requestAnimationFrame(update);
    };

    update();
    const observer = new ResizeObserver(schedule);
    observer.observe(stickyPanel);
    observer.observe(section);
    reduceMotion.addEventListener('change', schedule);
    window.addEventListener('scroll', schedule, { passive: true });
    return () => {
      observer.disconnect();
      reduceMotion.removeEventListener('change', schedule);
      window.removeEventListener('scroll', schedule);
      window.cancelAnimationFrame(pendingFrame);
    };
  }, []);

  const seek = (phase: number) => {
    if (!scene.current || !panel.current) return;
    const { start, distance } = getScrollTrack(scene.current, panel.current);
    window.scrollTo({ top: start + distance * (phase + 0.06) / stages.length, behavior: 'instant' });
  };

  const candle = candles[last];
  const details = phase === 0
    ? [{ label: copy.closePrice, value: price.format(candle.close) }]
    : phase < 3
      ? [
          { label: copy.chartLabels.neckline, value: price.format(neckline) },
          { label: 'ATR (14)', value: price.format(atr[last]) },
        ]
      : [
          { label: copy.entryPrice, value: price.format(entry) },
          { label: 'Stop loss', value: price.format(stop) },
          { label: 'Take profit', value: price.format(target) },
        ];

  return (
    <>
      <section id="strategy-replay" aria-label={copy.sectionLabel} ref={scene} className="replay-scene relative bg-background">
        <div ref={panel} className="replay-sticky">
          <div className="replay-layout mx-auto grid max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="replay-copy">
              <p className="mb-3 font-mono text-[11px] tracking-[0.17em] text-primary">{copy.sectionLabel}</p>
              <div aria-live="polite" aria-atomic="true">
                <h2 className="replay-headline font-extrabold uppercase" key={phase}>{copy.stages[phase].title}</h2>
                <p className="replay-description mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">{copy.stages[phase].description}</p>
              </div>
              <span className="mt-4 hidden font-mono text-xs text-muted-foreground lg:inline">{String(phase + 1).padStart(2, '0')} / 05</span>
            </div>

            <div data-phase={phase} className="replay-terminal min-w-0 overflow-hidden rounded-xl border border-primary/25 bg-[#0b131d]">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-3 py-2.5 sm:px-5 sm:py-3">
                <div className="flex items-center gap-2 text-xs font-semibold sm:text-sm">
                  <CandlestickChart size={16} aria-hidden="true" className="shrink-0 text-primary" />
                  BTC/USDT <span className="font-mono text-[10px] font-normal text-muted-foreground">· 15m</span>
                </div>
                <span className="font-mono text-[10px] text-muted-foreground">{copy.demoData}</span>
              </div>
              <div className="replay-progress" aria-hidden="true" />
              <StrategyReplayChart last={last} phase={phase} labels={copy.chartLabels} className="block w-full" />
              <div className="flex min-h-12 flex-wrap items-center gap-x-4 gap-y-1 border-t border-border px-3 py-2.5 text-xs sm:px-5">
                <span className="font-mono text-primary">{phase === LAST_STAGE ? copy.closed : phase === 3 ? 'SHORT' : 'HeadAndShoulders'}</span>
                <dl className="flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-muted-foreground">
                  {details.map(({ label, value }) => (
                    <div key={label} className="flex items-baseline gap-1.5">
                      <dt>{label}</dt><dd className="font-mono text-foreground">{value}</dd>
                    </div>
                  ))}
                  {phase > 0 && phase < 3 && <div className="flex items-baseline gap-1.5"><dt>{copy.volume}</dt><dd className="font-mono text-foreground">{candle.volume}</dd></div>}
                </dl>
              </div>
            </div>

            <div className="replay-controls grid grid-cols-5 gap-1.5 sm:gap-3" role="group" aria-label={copy.navigation}>
              {copy.stages.map(({ label }, index) => (
                <button
                  key={label}
                  type="button"
                  aria-pressed={phase === index}
                  onClick={() => seek(index)}
                  className="replay-step min-h-11 border-t border-border px-0.5 pt-2 text-left text-[10px] font-semibold text-muted-foreground hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary sm:text-xs"
                >
                  <span aria-hidden="true" className="block font-mono text-[10px] sm:mr-2 sm:inline">{String(index + 1).padStart(2, '0')}</span>{label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface/50">
        <div className="mx-auto grid max-w-7xl items-center gap-9 px-5 py-14 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-12 lg:py-20">
          <div>
            <h2 className="text-balance text-3xl font-extrabold uppercase leading-[1.05] tracking-[-0.045em] sm:text-5xl">{copy.consoleTitle}</h2>
            <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">{copy.consoleDescription}</p>
            <a href={locale === 'ru' ? 'https://docs.tradejs.dev/ru/runtime/backtesting/overview' : 'https://docs.tradejs.dev/runtime/backtesting/overview'} className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary hover:underline">
              {copy.consoleLink} <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>
          <AppScreenshot
            src="/screenshots/btc-market-chart.jpg"
            alt={t.hero.productScreenshotAlt}
            label={t.hero.productScreenshotLabel}
            status={t.hero.productScreenshotStatus}
            viewportClassName="aspect-[1668/905]"
            fit="contain"
          />
        </div>
      </section>
    </>
  );
}
