'use client';

import { useCallback, useEffect, useState } from 'react';
import { Activity, ArrowRight, Check, Copy, Terminal } from 'lucide-react';
import { useLocale } from './locale-provider';
import { AnimateOnScroll } from './animate-on-scroll';
import { AppScreenshot } from './app-screenshot';

const BOOTSTRAP_COMMAND = 'npx create-tradejs';

export function Hero() {
  const { locale, t } = useLocale();
  const [wordIndex, setWordIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [copied, setCopied] = useState(false);
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

  const copyBootstrapCommand = async () => {
    await navigator.clipboard.writeText(BOOTSTRAP_COMMAND);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section className="hero-atmosphere relative min-h-screen overflow-hidden border-b border-border pt-20">
      <div className="absolute inset-0 control-grid opacity-70" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-14 px-4 pb-16 pt-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:px-8 lg:pb-20 lg:pt-14">
        <div>
          <AnimateOnScroll delay={80}>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 font-mono text-[10px] tracking-[0.16em] text-primary">
              <Activity size={12} />
              TRADEJS / STRATEGY SYSTEM
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={140}>
            <h1 className="text-[clamp(3rem,5.8vw,5.6rem)] font-extrabold leading-[0.94] tracking-[-0.055em] text-foreground">
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

          <AnimateOnScroll delay={280}>
            <div className="control-panel mt-8 max-w-xl overflow-hidden rounded-[14px] border border-white/10 bg-[#080d15] shadow-[0_22px_70px_rgba(8,34,35,0.16)]">
              <div className="flex items-center justify-between border-b border-white/8 bg-[#0b131d] px-4 py-3">
                <div className="flex min-w-0 items-center gap-3">
                  <span className="flex gap-1.5" aria-hidden="true">
                    <span className="h-2 w-2 rounded-full bg-[#ff6b72]/75" />
                    <span className="h-2 w-2 rounded-full bg-[#f3bf72]/75" />
                    <span className="h-2 w-2 rounded-full bg-[#20c5bd]/75" />
                  </span>
                  <span className="flex items-center gap-2 truncate font-mono text-[8px] tracking-[0.14em] text-[#93a7bd] sm:text-[9px]">
                    <Terminal size={13} className="text-[#20c5bd]" />
                    {t.hero.terminalLabel}
                  </span>
                </div>
                <span className="ml-3 shrink-0 font-mono text-[7px] tracking-[0.12em] text-[#61758c] sm:text-[8px]">
                  LOCAL SETUP
                </span>
              </div>
              <div className="px-4 py-4 sm:px-5 sm:py-5">
                <div className="flex items-center gap-3 rounded-lg border border-white/8 bg-black/25 px-3 py-3 text-white">
                  <span className="font-mono text-sm text-[#20c5bd]">$</span>
                  <code className="min-w-0 flex-1 whitespace-nowrap font-mono text-sm font-semibold sm:text-base">
                    {BOOTSTRAP_COMMAND}
                    <span className="terminal-cursor ml-1 inline-block h-[1.05em] w-[2px] translate-y-[2px] bg-[#20c5bd]" />
                  </code>
                  <button
                    type="button"
                    onClick={copyBootstrapCommand}
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-white/10 bg-white/5 text-[#93a7bd] transition-[color,border-color] hover:border-[#20c5bd]/40 hover:text-[#20c5bd]"
                    aria-label={copied ? t.hero.copied : t.hero.copyCommand}
                  >
                    {copied ? <Check size={14} /> : <Copy size={14} />}
                  </button>
                </div>

                <div className="mt-4 grid gap-2 font-mono text-[8px] tracking-[0.09em] text-[#93a7bd] sm:text-[9px]">
                  {t.hero.terminalSteps.map((step, index) => (
                    <span
                      key={step}
                      className="terminal-log flex items-center gap-2"
                      style={{ animationDelay: `${500 + index * 160}ms` }}
                    >
                      <Check size={11} className="text-[#20c5bd]" />
                      {step}
                    </span>
                  ))}
                </div>

                <p className="mt-4 border-t border-white/8 pt-3 text-[11px] leading-relaxed text-[#93a7bd]/80 sm:text-xs">
                  {t.hero.terminalHint}
                </p>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={340}>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <a
                href={firstBacktestUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-[background-color,box-shadow] hover:bg-accent-hover glow-accent"
              >
                {t.hero.quickstart}
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1 motion-reduce:transform-none" size={17} />
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

        <AnimateOnScroll delay={240} variant="scale" className="lg:pl-2 lg:pt-4">
          <div className="relative">
            <div className="absolute -inset-8 rounded-full bg-primary/8 blur-[80px]" />
            <AppScreenshot
              src="/screenshots/strategy-chart-hero.png"
              alt={t.hero.productScreenshotAlt}
              label={t.hero.productScreenshotLabel}
              status="BACKTEST VIEW"
              priority
              className="relative mx-auto w-full max-w-[650px]"
              viewportClassName="aspect-[1534/1219]"
              fit="contain"
            />
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
