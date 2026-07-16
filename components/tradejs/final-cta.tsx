'use client';

import { useLocale } from './locale-provider';
import { AnimateOnScroll } from './animate-on-scroll';
import { ArrowRight, CheckCircle2, Code2 } from 'lucide-react';

export function FinalCta() {
  const { locale, t } = useLocale();

  const firstBacktestUrl =
    locale === 'ru'
      ? 'https://docs.tradejs.dev/ru/getting-started/first-backtest'
      : 'https://docs.tradejs.dev/getting-started/first-backtest';
  const typescriptApiUrl =
    locale === 'ru'
      ? 'https://docs.tradejs.dev/ru/strategies/authoring/typescript-strategy-step-by-step'
      : 'https://docs.tradejs.dev/strategies/authoring/typescript-strategy-step-by-step';

  return (
    <section className="relative overflow-hidden py-20 lg:py-24">
      <div className="absolute inset-0 control-grid opacity-40" />
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/8 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 lg:px-8">
        <AnimateOnScroll>
          <div className="control-panel overflow-hidden rounded-3xl border border-primary/20 bg-[#0b111c]/90">
            <div className="flex items-center justify-between border-b border-white/8 px-5 py-3 sm:px-8">
              <div className="flex items-center gap-2 font-mono text-[9px] tracking-[0.16em] text-muted-foreground">
                <Code2 size={13} className="text-primary" />
                TRADEJS / NEXT RUN
              </div>
              <div className="flex items-center gap-2 font-mono text-[9px] text-success">
                <CheckCircle2 size={12} />
                READY
              </div>
            </div>

            <div className="grid gap-10 p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-end lg:p-14">
              <div>
                <div className="mb-5 font-mono text-[10px] tracking-[0.2em] text-primary">DEPLOY YOUR IDEA</div>
                <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
                  {t.finalCta.title}
                </h2>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground lg:text-lg">
                  {t.finalCta.subtitle}
                </p>
              </div>

              <div className="flex min-w-[250px] flex-col gap-3">
                <a
                  href={firstBacktestUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3.5 font-mono text-sm font-semibold text-primary-foreground transition-all hover:bg-accent-hover glow-accent"
                  aria-label={t.finalCta.quickstart}
                >
                  {t.finalCta.quickstart}
                  <ArrowRight className="ml-2" size={17} />
                </a>
                <a
                  href={typescriptApiUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg border border-border bg-surface/60 px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:bg-surface"
                >
                  {t.finalCta.secondaryCta}
                </a>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-px border-t border-white/8 bg-white/8">
              {['WRITE / TYPESCRIPT', 'TEST / HISTORICAL DATA', 'RUN / SELF-HOSTED'].map((item) => (
                <div key={item} className="bg-background/85 px-3 py-3 text-center font-mono text-[7px] tracking-wider text-muted-foreground sm:text-[9px]">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
