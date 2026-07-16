'use client';

import hljs from 'highlight.js/lib/core';
import typescript from 'highlight.js/lib/languages/typescript';
import { useMemo } from 'react';
import { useLocale } from './locale-provider';
import { AnimateOnScroll } from './animate-on-scroll';
import { ArrowUpRight, CheckCircle2, GitCompareArrows } from 'lucide-react';

if (!hljs.getLanguage('typescript')) {
  hljs.registerLanguage('typescript', typescript);
}

const tsCode = `export const createMaStrategyCore: CreateStrategyCore<
  MaStrategyConfig,
  IndicatorsHistorySnapshot | undefined
> = async ({ config, strategyApi }) => {
  const { FEE_PERCENT, MAX_LOSS_VALUE, TRADE_COOLDOWN_MS, LONG, SHORT } =
    config;

  const lastTradeController = strategyApi.createLastTradeController({
    enabled: Number(TRADE_COOLDOWN_MS ?? 0) > 0,
    cooldownMs: Number(TRADE_COOLDOWN_MS ?? 0),
  });

  return async () => {
    const { indicators } = strategyApi.getCurrentIndicatorsContext();
    if (!indicators) {
      return strategyApi.skip('NO_INDICATORS');
    }

    const maFast = Array.isArray(indicators.maFast) ? indicators.maFast : [];
    const maSlow = Array.isArray(indicators.maSlow) ? indicators.maSlow : [];
    if (maFast.length < 2 || maSlow.length < 2) {
      return strategyApi.skip('WAIT_MA_DATA');
    }

    const cross = detectCross(maFast, maSlow);
    const position = await strategyApi.getCurrentPosition();
    const positionExists = Boolean(
      position && typeof position.qty === 'number' && position.qty > 0,
    );

    if (positionExists && position) {
      if (
        (position.direction === 'LONG' && cross?.kind === 'bearish') ||
        (position.direction === 'SHORT' && cross?.kind === 'bullish')
      ) {
        return strategyApi.exit({
          code: 'CLOSE_BY_OPPOSITE_MA_CROSS',
          direction: position.direction,
        });
      }

      return strategyApi.skip('POSITION_HELD');
    }

    if (!cross) {
      return strategyApi.skip('NO_CROSS');
    }

    const modeConfig = cross.kind === 'bullish' ? LONG : SHORT;
    if (!modeConfig.enable) {
      return strategyApi.skip('STRATEGY_DISABLED');
    }

    const { timestamp, currentPrice, candle } =
      await strategyApi.getDecisionPriceContext();
    if (lastTradeController.isInCooldown(timestamp)) {
      return strategyApi.skip('TRADE_COOLDOWN');
    }

    const { stopLossPrice, takeProfitPrice, riskRatio, qty } =
      strategyApi.getDirectionalTpSlPrices({
        price: currentPrice,
        direction: modeConfig.direction,
        takeProfitDelta: modeConfig.TP,
        stopLossDelta: modeConfig.SL,
        unit: 'percent',
        maxLossValue: MAX_LOSS_VALUE,
        feePercent: Number(FEE_PERCENT ?? 0),
      });

    if (!qty || !Number.isFinite(qty) || qty <= 0) {
      return strategyApi.skip('INVALID_QTY');
    }

    if (riskRatio <= modeConfig.minRiskRatio) {
      return strategyApi.skip(\`RISK_RATIO:\${round(riskRatio)}\`);
    }

    const correlation = getIndicatorsCorrelation(indicators);
    const figureCandles = Array.isArray(indicators.candles15m)
      ? (indicators.candles15m as KlineChartData)
      : candle
        ? ([candle] as KlineChartData)
        : [];

    lastTradeController.markTrade(timestamp);

    return strategyApi.entry({
      code: cross.kind === 'bullish' ? 'MA_BULLISH_CROSS' : 'MA_BEARISH_CROSS',
      direction: modeConfig.direction,
      figures: buildMaStrategyFigures({
        candles: figureCandles,
        maFast,
        maSlow,
        crossTimestamp: timestamp,
        crossPrice: currentPrice,
        crossKind: cross.kind,
      }),
      indicators,
      additionalIndicators: {
        crossKind: cross.kind,
        maFastPrev: cross.maFastPrev,
        maFastCurrent: cross.maFastCurrent,
        maSlowPrev: cross.maSlowPrev,
        maSlowCurrent: cross.maSlowCurrent,
        maGap: cross.maFastCurrent - cross.maSlowCurrent,
        correlation,
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
  const { locale, t } = useLocale();
  const highlightedTsCode = useMemo(
    () => hljs.highlight(tsCode, { language: 'typescript' }).value,
    [],
  );
  const typescriptApiUrl =
    locale === 'ru'
      ? 'https://docs.tradejs.dev/ru/strategies/authoring/typescript-strategy-step-by-step'
      : 'https://docs.tradejs.dev/strategies/authoring/typescript-strategy-step-by-step';

  return (
    <section id="dev-experience" className="relative overflow-hidden border-b border-border pb-16 pt-20 lg:pb-16 lg:pt-24">
      <div className="absolute inset-0 control-grid opacity-30" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        <AnimateOnScroll>
          <div className="mb-12 grid items-end gap-6 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <div className="mb-4 font-mono text-[10px] tracking-[0.2em] text-primary">
                03 / CODE → RESULT
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
                {t.devExperience.sectionTitle}
              </h2>
            </div>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:justify-self-end lg:text-lg">
              {t.devExperience.sectionSubtitle}
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={100}>
          <div className="control-panel grid overflow-hidden rounded-2xl border border-white/9 bg-[#0b111c]/92 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="min-w-0 border-b border-white/8 lg:border-b-0 lg:border-r">
              <div className="flex items-center justify-between border-b border-white/8 bg-surface/50 px-4 py-3 sm:px-6">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-[10px] text-primary">MaStrategy/core.ts</span>
                  <span className="hidden rounded-full border border-white/8 px-2 py-1 font-mono text-[8px] tracking-wider text-muted-foreground sm:block">
                    {t.devExperience.tsTab}
                  </span>
                </div>
                <div className="flex items-center gap-2 font-mono text-[9px] text-success">
                  <CheckCircle2 size={12} />
                  TYPE SAFE
                </div>
              </div>
              <div className="code-fade relative max-h-[560px] overflow-hidden p-5 sm:p-6">
                <div className="overflow-x-auto">
                  <pre className="hljs m-0 bg-transparent p-0 font-mono text-[11px] leading-[1.75] text-foreground/90 sm:text-xs">
                    <code
                      className="language-typescript"
                      dangerouslySetInnerHTML={{ __html: highlightedTsCode }}
                    />
                  </pre>
                </div>
              </div>
              <div className="flex items-center justify-between border-t border-white/8 bg-surface-2/40 px-4 py-3 sm:px-6">
                <span className="font-mono text-[9px] text-muted-foreground">packages/strategies/src/MaStrategy/core.ts</span>
                <a
                  href={typescriptApiUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:text-accent-hover"
                >
                  {t.hero.secondaryCta}
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>

            <div className="relative flex flex-col bg-[#0d1421] p-5 sm:p-7">
              <div className="absolute inset-0 grid-pattern-fine opacity-25" />
              <div className="relative flex items-start justify-between">
                <div>
                  <p className="font-mono text-[9px] tracking-[0.18em] text-muted-foreground">SAMPLE BACKTEST</p>
                  <h3 className="mt-2 text-xl font-semibold text-foreground">MA Strategy / 1h</h3>
                </div>
                <span className="live-dot mt-1 h-2 w-2 rounded-full bg-success" />
              </div>

              <div className="relative mt-8 grid grid-cols-2 gap-3">
                {[
                  ['TOTAL RETURN', '+24.8%', 'text-success'],
                  ['MAX DRAWDOWN', '-6.2%', 'text-danger'],
                  ['PROFIT FACTOR', '1.84', 'text-foreground'],
                  ['TOTAL TRADES', '184', 'text-foreground'],
                ].map(([label, value, color]) => (
                  <div key={label} className="rounded-xl border border-white/8 bg-background/60 p-3.5">
                    <p className="font-mono text-[8px] tracking-wider text-muted-foreground">{label}</p>
                    <p className={`mt-2 font-mono text-lg font-semibold ${color}`}>{value}</p>
                  </div>
                ))}
              </div>

              <div className="relative mt-6 flex-1 rounded-xl border border-white/8 bg-background/55 p-4">
                <div className="mb-3 flex items-center justify-between">
                  <span className="font-mono text-[9px] tracking-wider text-muted-foreground">EQUITY CURVE</span>
                  <span className="font-mono text-[9px] text-success">+24.8%</span>
                </div>
                <svg viewBox="0 0 320 130" className="h-[150px] w-full" fill="none" aria-hidden="true">
                  <path d="M0 118L22 112L44 114L66 98L88 103L110 84L132 88L154 69L176 73L198 51L220 59L242 37L264 43L286 20L320 12" stroke="#20c5bd" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M0 118L22 112L44 114L66 98L88 103L110 84L132 88L154 69L176 73L198 51L220 59L242 37L264 43L286 20L320 12V130H0Z" fill="url(#dev-equity-fill)" />
                  <defs>
                    <linearGradient id="dev-equity-fill" x1="0" y1="0" x2="0" y2="1">
                      <stop stopColor="#20c5bd" stopOpacity="0.24" />
                      <stop offset="1" stopColor="#20c5bd" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div className="relative mt-4 flex items-center justify-between rounded-xl border border-success/20 bg-success/5 p-4">
                <div className="flex items-center gap-3">
                  <GitCompareArrows size={16} className="text-success" />
                  <div>
                    <p className="font-mono text-[8px] tracking-wider text-muted-foreground">SELECTED CONFIG</p>
                    <p className="mt-1 text-xs font-medium text-foreground">Ready to promote</p>
                  </div>
                </div>
                <span className="rounded-md bg-success/10 px-2 py-1 font-mono text-[8px] text-success">PASSED</span>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
