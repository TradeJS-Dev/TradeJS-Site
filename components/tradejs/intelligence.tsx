'use client';

import { ArrowUpRight, Braces, CircleDotDashed } from 'lucide-react';
import { AnimateOnScroll } from './animate-on-scroll';
import { useLocale } from './locale-provider';
import { ProductVisual, type ProductVisualVariant } from './product-visual';

const visuals: ProductVisualVariant[] = ['pine', 'ai-sidecar', 'operations'];

export function Intelligence() {
  const { t } = useLocale();

  return (
    <section className="relative overflow-hidden border-b border-border py-20 lg:py-24">
      <div className="absolute inset-0 product-visual-grid opacity-30" />
      <div className="absolute right-[-20%] top-[10%] h-[900px] w-[900px] rounded-full bg-info/5 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        <AnimateOnScroll>
          <div className="mb-16 max-w-4xl">
            <div className="mb-5 font-mono text-[10px] tracking-[0.22em] text-info">05 / OPTIONAL SIDECARS</div>
            <h2 className="text-4xl font-bold leading-[1] tracking-[-0.045em] sm:text-6xl lg:text-7xl text-balance">
              {t.intelligence.sectionTitle}
            </h2>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground lg:text-lg">
              {t.intelligence.sectionSubtitle}
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid gap-8 lg:grid-cols-[320px_1fr] lg:items-start">
          <AnimateOnScroll className="lg:sticky lg:top-28">
            <div className="relative overflow-hidden rounded-[28px] border border-primary/20 bg-primary/[0.045] p-8">
              <div className="absolute inset-0 control-grid opacity-40" />
              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/25 bg-background text-primary">
                  <Braces size={25} />
                </div>
                <p className="mt-12 font-mono text-[9px] tracking-[0.2em] text-primary">DETERMINISTIC CORE</p>
                <h3 className="mt-3 text-3xl font-semibold tracking-[-0.03em]">{t.intelligence.coreStatement}</h3>
                <div className="mt-10 space-y-4 border-t border-border pt-6">
                  {['ENTRY / EXIT', 'RISK', 'STATE', 'EXECUTION'].map((item) => (
                    <div key={item} className="flex items-center gap-3 font-mono text-[9px] tracking-wider text-muted-foreground">
                      <CircleDotDashed size={12} className="text-primary" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          <div className="divide-y divide-border border-y border-border">
            {t.intelligence.items.map((item, i) => (
              <AnimateOnScroll key={item.title} delay={i * 80}>
                <article className="grid gap-8 py-10 md:grid-cols-[0.72fr_1.28fr] md:items-center">
                  <div>
                    <div className="mb-5 font-mono text-[9px] tracking-[0.2em] text-info">SIDECAR / 0{i + 1}</div>
                    <h3 className="text-2xl font-semibold tracking-[-0.025em] sm:text-3xl">{item.title}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                    <div className="mt-6 flex flex-wrap gap-x-4 gap-y-3">
                      {item.links.map((link) => (
                        <a
                          key={link.url}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-semibold text-info hover:text-primary"
                        >
                          {link.label}
                          <ArrowUpRight size={12} />
                        </a>
                      ))}
                    </div>
                  </div>
                  <ProductVisual variant={visuals[i]} />
                </article>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
