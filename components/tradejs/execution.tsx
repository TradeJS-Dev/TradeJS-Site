'use client';

import { useLocale } from './locale-provider';
import { AnimateOnScroll } from './animate-on-scroll';
import {
  FeatureIllustration,
  type FeatureIllustrationVariant,
} from './feature-illustration';
import { ExternalLink } from 'lucide-react';

const illustrationVariants: FeatureIllustrationVariant[] = [
  'results-to-runtime',
  'telegram-notifications',
];

export function Execution() {
  const { t } = useLocale();

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-background">
      {/* Subtle grid pattern instead of image */}
      <div className="absolute inset-0 grid-pattern-fine opacity-40" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-success/20 bg-success/5 px-4 py-1.5 text-xs font-semibold text-success tracking-wider uppercase">
              03
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              {t.execution.sectionTitle}
            </h2>
            <p className="mt-4 text-muted-foreground text-base lg:text-lg max-w-2xl mx-auto text-pretty">
              {t.execution.sectionSubtitle}
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid gap-6 md:grid-cols-2">
          {t.execution.items.map((item, i) => {
            const variant = illustrationVariants[i] ?? 'results-to-runtime';
            return (
              <AnimateOnScroll key={i} delay={i * 120} className="h-full">
                <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface/40 backdrop-blur-md hover:border-success/30 transition-all duration-300">
                  <div className="flex flex-1 flex-col p-8">
                    {/* Large step number watermark */}
                    <div className="absolute -top-4 -right-2 text-8xl font-extrabold font-mono text-success/5 select-none">
                      {String(i + 1).padStart(2, '0')}
                    </div>

                    <FeatureIllustration variant={variant} tone="success" />
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
                          className="inline-flex items-center gap-1.5 text-xs font-medium text-success hover:text-primary transition-colors"
                        >
                          {link.label}
                          <ExternalLink size={12} />
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Bottom accent stripe */}
                  <div className="h-1 bg-gradient-to-r from-success/60 via-primary/40 to-transparent" />
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
