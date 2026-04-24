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
  'pine-compatibility',
  'self-hosted',
];

export function StrategyAuthoring() {
  const { t } = useLocale();

  return (
    <section
      id="advantages"
      className="relative py-24 lg:py-32 overflow-hidden bg-background"
    >
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern-fine opacity-50" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary tracking-wider uppercase">
              01
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              {t.strategyAuthoring.sectionTitle}
            </h2>
            <p className="mt-4 text-muted-foreground text-base lg:text-lg max-w-2xl mx-auto text-pretty">
              {t.strategyAuthoring.sectionSubtitle}
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid gap-6 lg:grid-cols-3">
          {t.strategyAuthoring.items.map((item, i) => {
            const variant = illustrationVariants[i] ?? 'typescript-strategies';
            return (
              <AnimateOnScroll key={i} delay={i * 100} className="h-full">
                <div className="group relative flex h-full flex-col rounded-xl border border-border bg-surface/60 p-8 backdrop-blur-sm hover:border-primary/30 hover:bg-surface transition-all duration-300">
                  <FeatureIllustration variant={variant} tone="primary" />
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
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
