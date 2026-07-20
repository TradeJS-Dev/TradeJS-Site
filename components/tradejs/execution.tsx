'use client';

import { ArrowUpRight } from 'lucide-react';
import { AnimateOnScroll } from './animate-on-scroll';
import { useLocale } from './locale-provider';
import { AppScreenshot } from './app-screenshot';

const screenshots = [
  {
    src: '/screenshots/backtest-run.webp',
    aspect: 'aspect-[1720/1329]',
  },
  {
    src: '/screenshots/runtime-performance.webp',
    aspect: 'aspect-[1720/1222]',
  },
];

export function Execution() {
  const { t } = useLocale();

  return (
    <section className="relative overflow-hidden border-b border-border py-20 lg:py-24">
      <div className="absolute inset-0 control-grid opacity-25" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        <AnimateOnScroll>
          <div className="mb-16 grid gap-8 md:grid-cols-[1fr_0.8fr] md:items-end">
            <div>
              <div className="mb-5 font-mono text-[10px] tracking-[0.22em] text-success">04 / PROVE &amp; PROMOTE</div>
              <h2 className="max-w-3xl text-4xl font-bold leading-[1] tracking-[-0.045em] sm:text-6xl text-balance">
                {t.execution.sectionTitle}
              </h2>
            </div>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:justify-self-end lg:text-lg">
              {t.execution.sectionSubtitle}
            </p>
          </div>
        </AnimateOnScroll>

        <div className="space-y-8">
          {t.execution.items.map((item, i) => (
            <AnimateOnScroll
              key={item.title}
              delay={i * 100}
              variant={i % 2 === 0 ? 'left' : 'right'}
            >
              <article className="grid overflow-hidden rounded-[30px] border border-border bg-surface/45 lg:grid-cols-[0.78fr_1.22fr]">
                <div className="flex flex-col justify-center border-b border-border p-7 sm:p-10 lg:border-b-0 lg:border-r lg:p-12">
                  <div className="mb-8 font-mono text-[10px] tracking-[0.18em] text-success">0{i + 1} / {i === 0 ? 'REPLAY' : 'PROMOTE'}</div>
                  <h3 className="text-3xl font-semibold tracking-[-0.03em] text-foreground sm:text-4xl">{item.title}</h3>
                  <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">{item.description}</p>
                  <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3">
                    {item.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-success hover:text-primary"
                      >
                        {link.label}
                        <ArrowUpRight size={13} />
                      </a>
                    ))}
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <AppScreenshot
                    src={screenshots[i].src}
                    alt={item.imageAlt}
                    label={item.imageLabel}
                    status={i === 0 ? 'RUNNING' : 'LIVE METRICS'}
                    className="h-full"
                    viewportClassName={screenshots[i].aspect}
                    fit="cover"
                    position="right"
                  />
                </div>
              </article>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
