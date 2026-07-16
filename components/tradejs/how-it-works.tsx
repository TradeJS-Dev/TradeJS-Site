'use client';

import { useLocale } from './locale-provider';
import { AnimateOnScroll } from './animate-on-scroll';
import { ChartNoAxesCombined, Code2, ServerCog, UploadCloud } from 'lucide-react';

const stepIcons = [Code2, ChartNoAxesCombined, UploadCloud, ServerCog];
const stepLabels = ['AUTHOR', 'REPLAY', 'PROMOTE', 'EXECUTE'];

export function HowItWorks() {
  const { t } = useLocale();

  return (
    <section id="how-it-works" className="relative overflow-hidden border-b border-border pb-16 pt-20 lg:pb-16 lg:pt-24">
      <div className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-primary/5 blur-[140px]" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        <AnimateOnScroll>
          <div className="mb-16 text-center">
            <div className="mb-4 font-mono text-[10px] tracking-[0.2em] text-primary">
              02 / CONTROLLED LIFECYCLE
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
              {t.howItWorks.sectionTitle}
            </h2>
            <p className="mt-4 text-muted-foreground text-base lg:text-lg max-w-2xl mx-auto text-pretty">
              {t.howItWorks.sectionSubtitle}
            </p>
          </div>
        </AnimateOnScroll>

        <div className="workflow-rail relative grid gap-4 lg:grid-cols-4 lg:gap-0">
          {t.howItWorks.steps.map((step, i) => {
            const Icon = stepIcons[i] ?? Code2;
            return (
              <AnimateOnScroll key={i} delay={i * 130} className="relative h-full">
                <div className="group relative h-full border border-border bg-surface/55 p-6 backdrop-blur-sm transition-colors hover:bg-surface lg:min-h-[330px] lg:border-r-0 lg:last:border-r">
                  <div className="relative z-10 mb-10 flex items-center justify-between lg:mb-14">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/20 bg-background text-primary shadow-[0_0_30px_rgba(32,197,189,0.08)]">
                      <Icon size={19} />
                    </div>
                    <span className="font-mono text-3xl font-extrabold text-primary/15">
                      {step.step}
                    </span>
                  </div>
                  <div className="mb-3 font-mono text-[9px] tracking-[0.18em] text-primary/80">
                    {stepLabels[i]}
                  </div>
                  <h3 className="mb-3 text-lg font-semibold text-foreground">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                  <div className="absolute bottom-5 left-6 right-6 flex items-center gap-2 font-mono text-[8px] tracking-wider text-muted-foreground/60">
                    <span className="h-1 w-1 rounded-full bg-success" />
                    STAGE READY
                  </div>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
