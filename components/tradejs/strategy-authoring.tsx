'use client';

import { ArrowUpRight } from 'lucide-react';
import { AnimateOnScroll } from './animate-on-scroll';
import { useLocale } from './locale-provider';
import { ProductVisual, type ProductVisualVariant } from './product-visual';

const visuals: ProductVisualVariant[] = ['authoring', 'lifecycle', 'self-hosted'];
const labels = ['AUTHOR', 'REUSE', 'OWN'];

export function StrategyAuthoring() {
  const { t } = useLocale();

  return (
    <section id="advantages" className="relative overflow-hidden border-b border-border bg-background pb-12 pt-24 text-[#091019] lg:pb-16 lg:pt-28">
      <div className="absolute inset-0 blueprint-grid opacity-55" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        <AnimateOnScroll>
          <div className="mb-12 grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-end lg:mb-16">
            <div>
              <div className="mb-5 font-mono text-[10px] tracking-[0.22em] text-[#087f79]">02 / THE SYSTEM</div>
              <h2 className="max-w-3xl text-4xl font-bold leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-7xl text-balance">
                {t.strategyAuthoring.sectionTitle}
              </h2>
            </div>
            <p className="max-w-xl text-base leading-relaxed text-[#263842]/70 md:justify-self-end lg:text-lg">
              {t.strategyAuthoring.sectionSubtitle}
            </p>
          </div>
        </AnimateOnScroll>

        <div className="divide-y divide-[#091019]/14 border-y border-[#091019]/14">
          {t.strategyAuthoring.items.map((item, i) => (
            <AnimateOnScroll key={item.title} delay={i * 80}>
              <article className="grid gap-10 py-10 lg:grid-cols-12 lg:items-center lg:gap-14 lg:py-20">
                <div className={i % 2 === 1 ? 'lg:order-2 lg:col-span-4 lg:col-start-9' : 'lg:col-span-4'}>
                  <div className="mb-8 flex items-center gap-4">
                    <span className="font-mono text-[10px] tracking-[0.2em] text-[#087f79]">0{i + 1}</span>
                    <span className="h-px w-10 bg-[#087f79]/35" />
                    <span className="font-mono text-[10px] tracking-[0.2em] text-[#263842]/55">{labels[i]}</span>
                  </div>
                  <h3 className="text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-4xl">{item.title}</h3>
                  <p className="mt-5 text-base leading-relaxed text-[#263842]/72">{item.description}</p>
                  <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3">
                    {item.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 border-b border-[#087f79]/30 pb-1 text-xs font-semibold text-[#087f79] transition-colors hover:border-[#087f79]"
                      >
                        {link.label}
                        <ArrowUpRight size={13} />
                      </a>
                    ))}
                  </div>
                </div>

                <div className={i % 2 === 1 ? 'lg:order-1 lg:col-span-7' : 'lg:col-span-7 lg:col-start-6'}>
                  <ProductVisual variant={visuals[i]} />
                </div>
              </article>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
