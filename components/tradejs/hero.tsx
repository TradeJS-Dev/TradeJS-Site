'use client';

import { useCallback, useEffect, useState } from 'react';
import {
  Activity,
  ArrowRight,
  Braces,
  GitBranch,
  Repeat2,
  Server,
} from 'lucide-react';
import { useLocale } from './locale-provider';
import { AnimateOnScroll } from './animate-on-scroll';

const trustIcons = [Braces, GitBranch, Server, Repeat2];

function ControlRoomPreview() {
  return (
    <div className="control-panel relative mx-auto w-full max-w-[620px] overflow-hidden rounded-[28px] border border-white/10 bg-[#0b111c]/92 shadow-[0_40px_120px_rgba(0,0,0,0.5)]">
      <div className="flex items-center justify-between border-b border-white/8 px-4 py-3 sm:px-5">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-danger/80" />
          <span className="h-2 w-2 rounded-full bg-[#f3bf72]/80" />
          <span className="h-2 w-2 rounded-full bg-success/80" />
          <span className="ml-2 font-mono text-[10px] tracking-[0.16em] text-muted-foreground">
            TRADEJS / CONTROL ROOM
          </span>
        </div>
        <div className="flex items-center gap-2 font-mono text-[9px] text-success">
          <span className="live-dot h-1.5 w-1.5 rounded-full bg-success" />
          RUNTIME ONLINE
        </div>
      </div>

      <div className="grid gap-px bg-white/8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="bg-[#0b111c] p-4 sm:p-5">
          <div className="mb-4 flex items-center justify-between">
            <span className="font-mono text-[10px] text-primary">strategy.ts</span>
            <span className="rounded-full border border-primary/20 bg-primary/5 px-2 py-1 font-mono text-[8px] tracking-wider text-primary">
              TYPED
            </span>
          </div>
          <div className="space-y-2.5 font-mono text-[10px] leading-relaxed text-muted-foreground sm:text-[11px]">
            <p><span className="text-info">export const</span> strategy =</p>
            <p className="pl-3"><span className="text-info">async</span> ({'{'} api {'}'}) =&gt; {'{'}</p>
            <p className="pl-6 text-foreground/80">const signal = await</p>
            <p className="pl-9 text-primary">api.indicators.emaCross()</p>
            <p className="pl-6"><span className="text-info">if</span> (!signal) return api.skip()</p>
            <p className="pl-6"><span className="text-info">return</span> api.entry({'{'}</p>
            <p className="pl-9">direction: <span className="text-success">&apos;LONG&apos;</span>,</p>
            <p className="pl-9">risk: <span className="text-[#f3bf72]">0.01</span></p>
            <p className="pl-6">{'}'})</p>
            <p className="pl-3">{'}'}</p>
          </div>
          <div className="mt-5 flex items-center gap-2 border-t border-white/8 pt-4 font-mono text-[9px] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-success" />
            TYPE CHECK PASSED
          </div>
        </div>

        <div className="relative overflow-hidden bg-[#0d1421] p-4 sm:p-5">
          <div className="absolute inset-0 grid-pattern-fine opacity-35" />
          <div className="relative flex items-start justify-between">
            <div>
              <p className="font-mono text-[9px] tracking-[0.18em] text-muted-foreground">BACKTEST #1842</p>
              <p className="mt-1 text-xl font-semibold text-foreground">BTC / USDT</p>
            </div>
            <div className="rounded-md border border-success/20 bg-success/8 px-2 py-1 font-mono text-[9px] text-success">
              COMPLETE
            </div>
          </div>

          <div className="relative mt-5 h-32 sm:h-40">
            <svg viewBox="0 0 360 170" className="h-full w-full" fill="none" aria-hidden="true">
              <defs>
                <linearGradient id="hero-chart-area" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#20c5bd" stopOpacity="0.28" />
                  <stop offset="100%" stopColor="#20c5bd" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0 143C26 141 34 126 55 129C82 134 86 112 108 114C132 116 140 93 164 98C188 103 195 75 221 81C246 86 257 58 278 64C301 70 318 34 360 25V170H0Z"
                fill="url(#hero-chart-area)"
              />
              <path
                className="hero-chart-line"
                d="M0 143C26 141 34 126 55 129C82 134 86 112 108 114C132 116 140 93 164 98C188 103 195 75 221 81C246 86 257 58 278 64C301 70 318 34 360 25"
                stroke="#20c5bd"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <circle className="hero-chart-pulse" cx="360" cy="25" r="4" fill="#20c5bd" />
            </svg>
          </div>

          <div className="relative grid grid-cols-3 gap-2 border-t border-white/8 pt-4">
            {[
              ['RETURN', '+24.8%', 'text-success'],
              ['DRAWDOWN', '-6.2%', 'text-danger'],
              ['TRADES', '184', 'text-foreground'],
            ].map(([label, value, color]) => (
              <div key={label}>
                <p className="font-mono text-[8px] tracking-wider text-muted-foreground">{label}</p>
                <p className={`mt-1 font-mono text-sm font-semibold ${color}`}>{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative flex items-center gap-3 border-t border-white/8 bg-[#0a101a] px-4 py-3 sm:px-5">
        <span className="font-mono text-[9px] tracking-wider text-muted-foreground">PIPELINE</span>
        <div className="relative h-px flex-1 overflow-hidden bg-white/10">
          <span className="signal-sweep absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-primary to-transparent" />
        </div>
        <div className="flex items-center gap-2 font-mono text-[9px] text-primary">
          STRATEGY
          <ArrowRight size={11} />
          RUNTIME
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  const { locale, t } = useLocale();
  const [wordIndex, setWordIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const words = t.hero.actionWords;

  const firstBacktestUrl =
    locale === 'ru'
      ? 'https://docs.tradejs.dev/ru/getting-started/first-backtest'
      : 'https://docs.tradejs.dev/getting-started/first-backtest';
  const typescriptApiUrl =
    locale === 'ru'
      ? 'https://docs.tradejs.dev/ru/strategies/authoring/typescript-strategy-step-by-step'
      : 'https://docs.tradejs.dev/strategies/authoring/typescript-strategy-step-by-step';

  const cycleWord = useCallback(() => {
    setIsFlipping(true);
    setTimeout(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
      setIsFlipping(false);
    }, 300);
  }, [words.length]);

  useEffect(() => {
    const interval = setInterval(cycleWord, 2600);
    return () => clearInterval(interval);
  }, [cycleWord]);

  const trustItems = [
    { label: t.hero.trust.typescript, Icon: trustIcons[0] },
    { label: t.hero.trust.openSource, Icon: trustIcons[1] },
    { label: t.hero.trust.selfHosted, Icon: trustIcons[2] },
    { label: t.hero.trust.lifecycle, Icon: trustIcons[3] },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden border-b border-white/6 pt-24">
      <div className="absolute inset-0 control-grid opacity-70" />
      <div className="absolute left-[-15%] top-[-20%] h-[700px] w-[700px] rounded-full bg-primary/8 blur-[150px]" />
      <div className="absolute bottom-[-30%] right-[-10%] h-[760px] w-[760px] rounded-full bg-info/7 blur-[180px]" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-4 pb-16 pt-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:pb-20 lg:pt-24">
        <div>
          <AnimateOnScroll delay={80}>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 font-mono text-[10px] tracking-[0.16em] text-primary">
              <Activity size={12} />
              OPEN-SOURCE / SELF-HOSTED / TYPESCRIPT
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={140}>
            <h1 className="text-[clamp(3rem,6vw,6rem)] font-extrabold leading-[0.94] tracking-[-0.055em] text-foreground">
              <span
                className={`mechanical-flip block min-h-[1.02em] text-primary ${isFlipping ? 'flipping-out' : 'flipping-in'}`}
              >
                {words[wordIndex]}
              </span>
              <span className="block max-w-[9ch]">{t.hero.titleSuffix}</span>
            </h1>
          </AnimateOnScroll>

          <AnimateOnScroll delay={220}>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {t.hero.subtitle}
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={300}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={firstBacktestUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-accent-hover glow-accent"
              >
                {t.hero.quickstart}
                <ArrowRight className="ml-2" size={17} />
              </a>
              <a
                href={typescriptApiUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-border bg-surface/60 px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:bg-surface"
              >
                {t.hero.secondaryCta}
              </a>
            </div>
          </AnimateOnScroll>
        </div>

        <AnimateOnScroll delay={260} className="lg:pl-4">
          <ControlRoomPreview />
        </AnimateOnScroll>
      </div>

      <div className="relative z-10 border-t border-white/6 bg-background/45 backdrop-blur-md">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-white/6 px-px md:grid-cols-4">
          {trustItems.map(({ label, Icon }) => (
            <div key={label} className="flex items-center gap-3 bg-background/80 px-5 py-4 sm:justify-center">
              <Icon size={15} className="text-primary/80" />
              <span className="text-xs font-medium text-muted-foreground">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
