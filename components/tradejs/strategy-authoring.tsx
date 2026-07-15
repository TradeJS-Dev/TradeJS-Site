'use client';

import { useLocale } from './locale-provider';
import { AnimateOnScroll } from './animate-on-scroll';
import {
  FeatureIllustration,
  type FeatureIllustrationVariant,
} from './feature-illustration';
import { ExternalLink } from 'lucide-react';

const illustrationVariants: FeatureIllustrationVariant[] = [
  'typescript-strategies',
  'results-to-runtime',
  'self-hosted',
];

export function StrategyAuthoring() {
  const { t } = useLocale();

  return (
    <section id="advantages" className="relative overflow-hidden border-b border-white/6 py-24 lg:py-32">
      <div className="absolute inset-0 control-grid opacity-35" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        <AnimateOnScroll>
          <div className="mb-14 grid items-end gap-6 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <div className="mb-4 font-mono text-[10px] tracking-[0.2em] text-primary">
                01 / CORE SYSTEM
              </div>
              <h2 className="max-w-xl text-3xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
              {t.strategyAuthoring.sectionTitle}
              </h2>
            </div>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:justify-self-end lg:text-lg">
              {t.strategyAuthoring.sectionSubtitle}
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid gap-5 lg:grid-cols-12 lg:auto-rows-fr">
          {t.strategyAuthoring.items.map((item, i) => {
            const variant = illustrationVariants[i] ?? 'typescript-strategies';
            const layout = i === 0 ? 'lg:col-span-7 lg:row-span-2' : 'lg:col-span-5';
            return (
              <AnimateOnScroll key={i} delay={i * 100} className={`h-full ${layout}`}>
                <div className="panel-sheen group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/9 bg-surface/50 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 sm:p-8">
                  <div className="mb-5 flex items-center justify-between">
                    <span className="font-mono text-[10px] tracking-[0.18em] text-muted-foreground">
                      MODULE / {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_14px_rgba(32,197,189,0.8)]" />
                  </div>
                  <FeatureIllustration
                    variant={variant}
                    tone="primary"
                    className={i === 0 ? 'h-[250px] lg:h-[300px]' : undefined}
                  />
                  <h3 className={`${i === 0 ? 'text-2xl sm:text-3xl' : 'text-xl'} mb-3 font-semibold text-foreground`}>
                    {item.title}
                  </h3>
                  <p className={`${i === 0 ? 'max-w-xl text-base' : 'text-sm'} leading-relaxed text-muted-foreground`}>
                    {item.description}
                  </p>
                  {i === 0 && (
                    <div className="mt-7 grid gap-px overflow-hidden rounded-xl border border-white/8 bg-white/8 sm:grid-cols-3">
                      {[
                        ['API', 'TYPED CONTRACT'],
                        ['DX', 'IDE AUTOCOMPLETE'],
                        ['ECOSYSTEM', 'NPM PACKAGES'],
                      ].map(([label, value]) => (
                        <div key={label} className="bg-background/75 p-4">
                          <p className="font-mono text-[8px] tracking-wider text-muted-foreground">{label}</p>
                          <p className="mt-1.5 font-mono text-[9px] text-primary">{value}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="mt-auto flex flex-wrap gap-3 pt-5">
                    {item.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:text-accent-hover transition-colors"
                      >
                        {link.label}
                        <ExternalLink size={12} />
                      </a>
                    ))}
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
