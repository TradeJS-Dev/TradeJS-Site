'use client';

import hljs from 'highlight.js/lib/core';
import typescript from 'highlight.js/lib/languages/typescript';
import { useMemo } from 'react';
import { useLocale } from './locale-provider';
import { AnimateOnScroll } from './animate-on-scroll';

if (!hljs.getLanguage('typescript')) {
  hljs.registerLanguage('typescript', typescript);
}

const tsCode = `import { CreateStrategyCore } from '@tradejs/types';
import { EMA } from 'technicalindicators';

export const createMyStrategyCore: CreateStrategyCore<
  MyStrategyConfig
> = async ({ strategyApi, config, data }) => {
  const fastLen = Number(config.EMA_FAST ?? 9);
  const slowLen = Number(config.EMA_SLOW ?? 21);
  const closes = data.map((candle) => candle.close);

  const emaFast = new EMA({ period: fastLen, values: closes });
  const emaSlow = new EMA({ period: slowLen, values: closes });

  return async (candle) => {
    const currentPrice = candle.close;
    emaFast.nextValue(currentPrice);
    emaSlow.nextValue(currentPrice);

    if (await strategyApi.isCurrentPositionExists()) {
      return strategyApi.skip('POSITION_EXISTS');
    }

    const fast = emaFast.getResult().slice(-2);
    const slow = emaSlow.getResult().slice(-2);

    if (fast.length < 2 || slow.length < 2) {
      return strategyApi.skip('WAIT_EMA_DATA');
    }

    const [fastPrev, fastCurrent] = fast;
    const [slowPrev, slowCurrent] = slow;

    const entryLong = fastPrev <= slowPrev && fastCurrent > slowCurrent;
    const entryShort = fastPrev >= slowPrev && fastCurrent < slowCurrent;

    if (!entryLong && !entryShort) {
      return strategyApi.skip('NO_EMA_CROSS');
    }

    const direction = entryLong ? 'LONG' : 'SHORT';
    const { stopLossPrice, takeProfitPrice, qty } =
      strategyApi.getDirectionalTpSlPrices({
        price: currentPrice,
        direction,
        takeProfitDelta: 2,
        stopLossDelta: 1,
        unit: 'percent',
      });

    return strategyApi.entry({
      direction,
      indicators: {
        emaFast: fastCurrent,
        emaSlow: slowCurrent,
      },
      orderPlan: {
        qty,
        stopLossPrice,
        takeProfits: [{ rate: 1, price: takeProfitPrice }],
      },
    });
  };
};`;

export function DeveloperExperience() {
  const { t } = useLocale();
  const highlightedTsCode = useMemo(
    () => hljs.highlight(tsCode, { language: 'typescript' }).value,
    [],
  );

  return (
    <section id="dev-experience" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 grid-pattern-fine opacity-30" />
      <div className="relative z-10 mx-auto max-w-5xl px-4 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              {t.devExperience.sectionTitle}
            </h2>
            <p className="mt-4 text-muted-foreground text-base lg:text-lg max-w-2xl mx-auto text-pretty">
              {t.devExperience.sectionSubtitle}
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={100}>
          <div className="rounded-xl border border-border bg-surface/60 overflow-hidden backdrop-blur-sm">
            <div className="border-b border-border bg-surface/80 px-6 py-3 text-sm font-semibold text-primary">
              {t.devExperience.tsTab}
            </div>

            {/* Code block */}
            <div className="p-6 overflow-x-auto">
              <pre className="hljs m-0 bg-transparent p-0 font-mono text-sm leading-relaxed text-foreground/90">
                <code
                  className="language-typescript"
                  dangerouslySetInnerHTML={{ __html: highlightedTsCode }}
                />
              </pre>
            </div>

            {/* Bottom bar */}
            <div className="flex items-center justify-between border-t border-border px-6 py-3 bg-surface-2/50">
              <span className="text-xs text-muted-foreground font-mono">
                strategy.ts
              </span>
              <span className="text-xs text-muted-foreground">
                TypeScript
              </span>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
