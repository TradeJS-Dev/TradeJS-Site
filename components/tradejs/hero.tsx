'use client';

import { useCallback, useEffect, useState } from 'react';
import {
  Activity,
  ArrowRight,
  Braces,
  CheckCircle2,
  Database,
  Terminal,
} from 'lucide-react';
import { useLocale } from './locale-provider';
import { AnimateOnScroll } from './animate-on-scroll';

function ControlRoomPreview() {
  return (
    <div className="control-panel relative mx-auto w-full max-w-[640px] overflow-hidden rounded-[30px] border border-white/10 bg-[#080d15]/95 shadow-[0_50px_140px_rgba(0,0,0,0.55)]">
      <div className="flex items-center justify-between border-b border-white/8 px-4 py-3 sm:px-5">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-danger/80" />
          <span className="h-2 w-2 rounded-full bg-[#f3bf72]/80" />
          <span className="h-2 w-2 rounded-full bg-success/80" />
          <span className="ml-2 font-mono text-[10px] tracking-[0.16em] text-muted-foreground">
            TRADEJS / SYSTEM MAP
          </span>
        </div>
        <div className="flex items-center gap-2 font-mono text-[9px] text-success">
          <span className="live-dot h-1.5 w-1.5 rounded-full bg-success" />
          ALL SYSTEMS NOMINAL
        </div>
      </div>

      <div className="relative h-[460px] overflow-hidden">
        <div className="absolute inset-0 product-visual-grid opacity-80" />
        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/10 bg-primary/[0.025]" />
        <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/15" />

        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 640 500" fill="none" aria-hidden="true">
          <path d="M320 250C250 250 226 120 142 120" stroke="rgba(32,197,189,.35)" strokeWidth="1.5" strokeDasharray="5 7" />
          <path d="M320 250C390 250 414 120 498 120" stroke="rgba(32,197,189,.35)" strokeWidth="1.5" strokeDasharray="5 7" />
          <path d="M320 250C250 250 226 390 142 390" stroke="rgba(32,197,189,.35)" strokeWidth="1.5" strokeDasharray="5 7" />
          <path d="M320 250C390 250 414 390 498 390" stroke="rgba(32,197,189,.35)" strokeWidth="1.5" strokeDasharray="5 7" />
          <circle className="hero-chart-pulse" cx="320" cy="250" r="5" fill="#20c5bd" />
        </svg>

        <div className="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-[28px] border border-primary/30 bg-[#0d1720] shadow-[0_0_70px_rgba(32,197,189,.16)] sm:h-40 sm:w-40">
          <Braces size={28} className="text-primary" />
          <p className="mt-3 font-mono text-[7px] tracking-[0.18em] text-muted-foreground">SOURCE OF TRUTH</p>
          <p className="mt-1 font-mono text-[10px] text-foreground">strategy.ts</p>
        </div>

        <div className="absolute left-4 top-10 w-[42%] max-w-[220px] rounded-2xl border border-white/9 bg-[#0d1421]/95 p-4 sm:left-7 sm:top-12">
          <div className="flex items-center gap-2 text-info"><Terminal size={14} /><span className="font-mono text-[8px] tracking-wider">BOOTSTRAP</span></div>
          <p className="mt-4 truncate font-mono text-[9px] text-foreground">$ npx create-tradejs</p>
          <div className="mt-3 flex items-center gap-2 font-mono text-[7px] text-success"><CheckCircle2 size={10} /> PROJECT READY</div>
        </div>

        <div className="absolute right-4 top-10 w-[42%] max-w-[220px] rounded-2xl border border-white/9 bg-[#0d1421]/95 p-4 sm:right-7 sm:top-12">
          <div className="flex items-center justify-between"><span className="font-mono text-[8px] tracking-wider text-info">BACKTEST</span><span className="font-mono text-[8px] text-success">+24.8%</span></div>
          <svg className="mt-3 h-10 w-full" viewBox="0 0 180 40" fill="none"><path d="M0 35L20 31L40 33L62 24L82 27L104 16L126 20L150 8L180 3" stroke="#4ca9ff" strokeWidth="2.5" strokeLinecap="round" /></svg>
        </div>

        <div className="absolute bottom-10 left-4 w-[42%] max-w-[220px] rounded-2xl border border-white/9 bg-[#0d1421]/95 p-4 sm:bottom-12 sm:left-7">
          <div className="flex items-center gap-2 text-muted-foreground"><Database size={14} /><span className="font-mono text-[8px] tracking-wider">SELF-HOSTED</span></div>
          <div className="mt-4 grid grid-cols-3 gap-1.5">{['DB', 'REDIS', 'DATA'].map((item) => <span key={item} className="rounded border border-white/8 py-1 text-center font-mono text-[6px] text-muted-foreground">{item}</span>)}</div>
        </div>

        <div className="absolute bottom-10 right-4 w-[42%] max-w-[220px] rounded-2xl border border-success/20 bg-success/[0.045] p-4 sm:bottom-12 sm:right-7">
          <div className="flex items-center justify-between"><span className="font-mono text-[8px] tracking-wider text-success">RUNTIME</span><span className="live-dot h-1.5 w-1.5 rounded-full bg-success" /></div>
          <p className="mt-4 font-mono text-[9px] text-foreground">SIGNAL / LONG</p>
          <p className="mt-2 font-mono text-[7px] text-muted-foreground">BTC-USDT · 1H</p>
        </div>
      </div>

      <div className="relative flex items-center gap-3 border-t border-white/8 bg-[#0a101a] px-4 py-3 sm:px-5">
        <span className="font-mono text-[9px] tracking-wider text-muted-foreground">ONE LIFECYCLE</span>
        <div className="relative h-px flex-1 overflow-hidden bg-white/10">
          <span className="signal-sweep absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-primary to-transparent" />
        </div>
        <div className="flex items-center gap-2 font-mono text-[9px] text-primary">
          CREATE
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

  return (
    <section className="relative min-h-screen overflow-hidden border-b border-border pt-20">
      <div className="absolute inset-0 control-grid opacity-70" />
      <div className="absolute left-[-15%] top-[-20%] h-[700px] w-[700px] rounded-full bg-primary/8 blur-[150px]" />
      <div className="absolute bottom-[-30%] right-[-10%] h-[760px] w-[760px] rounded-full bg-info/7 blur-[180px]" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-4 pb-14 pt-12 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:pb-16 lg:pt-12">
        <div>
          <AnimateOnScroll delay={80}>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 font-mono text-[10px] tracking-[0.16em] text-primary">
              <Activity size={12} />
              TRADEJS / STRATEGY SYSTEM
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
                className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3.5 font-mono text-sm font-semibold text-primary-foreground transition-all hover:bg-accent-hover glow-accent"
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

    </section>
  );
}
