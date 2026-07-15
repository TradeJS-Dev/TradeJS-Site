'use client';

import { useLocale } from './locale-provider';
import { AnimateOnScroll } from './animate-on-scroll';
import {
  FeatureIllustration,
  type FeatureIllustrationVariant,
} from './feature-illustration';
import { ExternalLink } from 'lucide-react';

const illustrationVariants: FeatureIllustrationVariant[] = [
  'pine-compatibility',
  'runtime-ai',
  'telegram-notifications',
];

export function Intelligence() {
  const { t } = useLocale();

  return (
    <section className="relative overflow-hidden border-b border-white/6 py-24 lg:py-32">
      <div className="absolute inset-0 control-grid opacity-25" />

      {/* Accent glow */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] opacity-10"
        style={{
          background:
            'radial-gradient(circle at top right, rgba(76,169,255,0.3) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 lg:px-8">
        <AnimateOnScroll>
          <div className="mb-14 grid items-end gap-6 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <div className="mb-4 font-mono text-[10px] tracking-[0.2em] text-info">03 / EXTENSIONS</div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
                {t.intelligence.sectionTitle}
              </h2>
            </div>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:justify-self-end lg:text-lg">
              {t.intelligence.sectionSubtitle}
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {t.intelligence.items.map((item, i) => {
            const variant = illustrationVariants[i] ?? 'grid-backtesting';
            return (
              <AnimateOnScroll key={i} delay={i * 120} className="h-full">
                <div className="panel-sheen group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/9 bg-surface/40 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-info/30">
                  {/* Top accent stripe */}
                  <div className="h-1 bg-gradient-to-r from-info/60 via-primary/60 to-transparent" />
                  <div className="flex flex-1 flex-col p-8">
                    <FeatureIllustration variant={variant} tone="info" />
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
                          className="inline-flex items-center gap-1.5 text-xs font-medium text-info hover:text-primary transition-colors"
                        >
                          {link.label}
                          <ExternalLink size={12} />
                        </a>
                      ))}
                    </div>
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
