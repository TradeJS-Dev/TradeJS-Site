import { ArrowRight, CircleDot, Flag, LogOut, Shield, Split } from 'lucide-react';
import { type ExitExample, type ExitOutcome, type ExitPlot } from '@/lib/marketplace-exits';
import { PricePlot } from './marketplace-signal-chart';
import { examples, type StrategyExample, type StrategySlug } from './marketplace-signal-chart/examples';
import type { Locale } from '@/lib/i18n';
import type { StrategyDefaults } from '@/lib/marketplace-configuration';

const copy = {
  en: {
    close: 'Early exit',
    partial: 'Partial exit',
    protect: 'Manage the stop',
    position: 'Position is open',
    note: 'Schematic example',
    markedEntry: 'Position opens',
    markedAction: 'Rule takes effect',
    markedPattern: 'Opposite setup takes shape',
    defaults: 'Package defaults',
    disabled: 'This example requires enabling the rule.',
    result: {
      close: 'The strategy requests a position close.',
      partial: 'The first target closes part of the position. The remainder stays open.',
      protect: 'The strategy moves the protective stop. The position stays open.',
    },
    chartNotes: {
      time: 'The holding deadline arrives while price stays between the stop and target.',
      cross: 'The fast average falls below the slow one while the long position is open.',
      line: 'The last candle crosses the active line against the position.',
      trail: 'The last candle crosses the rising trailing stop.',
      partial: 'Price reaches the first target. The higher target still applies to the remainder.',
      opposite: 'A move in the other direction confirms while a position is already open.',
      zone: 'Price moves beyond the shaded zone against the existing position.',
      retest: 'Price returns to the upper liquidity zone and turns down. The strategy can close the long after it confirms the reaction.',
      protect: 'The original stop is shown in blue. The purple line shows the updated stop after a favorable move.',
    },
  },
  ru: {
    close: 'Досрочный выход',
    partial: 'Частичный выход',
    protect: 'Перенос стопа',
    position: 'Позиция открыта',
    note: 'Условный пример',
    markedEntry: 'Открытие позиции',
    markedAction: 'Срабатывает правило',
    markedPattern: 'Формируется встречный сигнал',
    defaults: 'Значения из пакета',
    disabled: 'Для этого сценария правило нужно включить.',
    result: {
      close: 'Стратегия запрашивает закрытие позиции.',
      partial: 'По первой цели закрывается часть позиции. Остаток остаётся открытым.',
      protect: 'Стратегия переносит защитный стоп. Позиция остаётся открытой.',
    },
    chartNotes: {
      time: 'Срок удержания истекает, пока цена остаётся между стопом и целью.',
      cross: 'Быстрая средняя опускается ниже медленной, пока лонг открыт.',
      line: 'Последняя свеча пересекает активную линию против позиции.',
      trail: 'Последняя свеча пересекает растущий скользящий стоп.',
      partial: 'Цена достигает первой цели. Для остатка позиции действует верхняя цель.',
      opposite: 'Пока позиция открыта, на графике подтверждается движение в противоположную сторону.',
      zone: 'Цена проходит за выделенную зону против открытой позиции.',
      retest: 'Цена возвращается к верхней зоне ликвидности и разворачивается вниз. После подтверждения реакции стратегия может закрыть лонг.',
      protect: 'Синяя линия показывает начальный стоп. Фиолетовая — новый уровень стопа после движения в пользу позиции.',
    },
  },
};

const guide = (start: number, end: number, color: 'blue' | 'violet') => ({
  points: [[0, start], [9, end]] as [number, number][],
  color,
  solid: true,
});

const plots: Record<Exclude<ExitPlot, 'opposite' | 'context'>, Omit<StrategyExample, 'markers'>> = {
  time: {
    closes: [42, 48, 55, 51, 63, 56, 59, 53, 60, 55],
    guides: [guide(29, 29, 'violet'), guide(77, 77, 'blue')],
  },
  cross: {
    closes: [34, 48, 54, 65, 68, 62, 61, 58, 52, 47],
    guides: [guide(51, 56, 'violet'), { points: [[0, 42], [2, 59], [5, 64], [8, 58], [9, 51]], color: 'blue', solid: true }],
  },
  line: {
    closes: [38, 50, 56, 68, 73, 72, 64, 62, 60, 51],
    guides: [guide(38, 59, 'blue')],
  },
  trail: {
    closes: [37, 48, 55, 62, 73, 79, 86, 83, 78, 67],
    guides: [{ points: [[0, 24], [3, 38], [6, 55], [8, 72], [9, 72]], color: 'violet', solid: true }],
  },
  partial: {
    closes: [32, 37, 47, 45, 50, 57, 61, 55, 62, 70],
    guides: [guide(67, 67, 'blue'), guide(87, 87, 'violet')],
  },
  zone: {
    closes: [42, 47, 55, 65, 68, 65, 60, 54, 46, 39],
    zones: [{ bars: [0, 9], prices: [43, 51] }],
    guides: [guide(33, 33, 'violet')],
  },
  retest: {
    closes: [44, 52, 62, 74, 65, 59, 62, 66, 74, 63],
    wicks: { 3: [69, 79], 8: [66, 80] },
    zones: [{ bars: [2, 9], prices: [75, 82] }],
  },
  protect: {
    closes: [30, 36, 39, 45, 53, 62, 68, 72, 77, 81],
    guides: [
      guide(21, 21, 'blue'),
      { points: [[6, 31], [7, 34], [8, 39], [9, 43]], color: 'violet', solid: true },
    ],
  },
};

const contextCharts: Partial<Record<StrategySlug, { bars: readonly number[]; note: Record<Locale, string> }>> = {
  'hyperliquid-consensus': {
    bars: [24, 32, 29, 43, 46, 56, 64, 85],
    note: {
      en: 'The bars show tracked position volume switching to the other side. The last bar passes the illustrative exit threshold.',
      ru: 'Столбцы показывают объём позиций отслеживаемых аккаунтов, которые перешли на другую сторону. Последний столбец превышает условный порог выхода.',
    },
  },
  'market-flush-reversal': {
    bars: [15, 19, 35, 27, 30, 53, 45, 83],
    note: {
      en: 'The bars show growing pressure on the open position. The last bar illustrates a confirmed reversal across the wider market.',
      ru: 'Столбцы показывают, как растёт давление против открытой позиции. Последний столбец иллюстрирует подтверждённый разворот широкого рынка.',
    },
  },
  'relative-rotation': {
    bars: [22, 17, 28, 40, 36, 48, 59, 75],
    note: {
      en: 'The bars show how far the instrument has weakened relative to Bitcoin. The last bar illustrates when the change can trigger an early exit from a long.',
      ru: 'Столбцы показывают, насколько инструмент отстаёт от биткоина. Последний столбец показывает, при каком отставании стратегия может закрыть лонг досрочно.',
    },
  },
};

function oppositeChart(strategy: StrategySlug): StrategyExample {
  const source: StrategyExample = strategy === 'trading-patterns' ? examples.flag : examples[strategy];
  return {
    closes: source.closes.map((value) => 100 - value),
    guides: source.guides?.map((guide) => ({
      ...guide,
      points: guide.points.map(([bar, price]) => [bar, 100 - price]),
    })),
    zones: source.zones?.map((zone) => ({
      ...zone,
      prices: [100 - zone.prices[1], 100 - zone.prices[0]],
    })),
    wicks: source.wicks && Object.fromEntries(Object.entries(source.wicks).map(([bar, [low, high]]) =>
      [bar, [100 - high, 100 - low]],
    )),
    markers: [source.markers[0], source.markers[1]],
  };
}

const outcomeIcons: Record<ExitOutcome, typeof LogOut> = {
  close: LogOut,
  partial: Split,
  protect: Shield,
};

export function MarketplaceExitExample({
  example,
  defaults,
  locale,
  strategy,
}: {
  example: ExitExample;
  defaults?: StrategyDefaults;
  locale: Locale;
  strategy: StrategySlug;
}) {
  const labels = copy[locale];
  const Icon = outcomeIcons[example.outcome];
  const params = defaults?.params ?? {};
  const shown = example.keys.flatMap((key) => params[key] == null ? [] : [[key, params[key]]]);
  const flags = shown.filter(([, value]) => value === 'true' || value === 'false');
  const disabled = (flags.length > 0 && flags.every(([, value]) => value === 'false'))
    || (example.outcome === 'partial' && shown[0]?.[1] === '0');
  const plot = example.plot;
  const standardMarkers: StrategyExample['markers'] = [
    { bar: 1, en: copy.en.position, ru: copy.ru.position },
    { bar: 9, en: copy.en[example.outcome], ru: copy.ru[example.outcome] },
  ];

  const chart = plot === 'opposite' ? oppositeChart(strategy)
    : plot && plot !== 'context' ? { ...plots[plot], markers: standardMarkers }
    : null;
  const context = plot === 'context' ? contextCharts[strategy] : undefined;
  const chartNote = plot === 'context' ? context?.note[locale] : plot && labels.chartNotes[plot];

  return (
    <section id="exit-example" className="marketplace-exit-example" aria-labelledby="exit-example-title">
      <h3 id="exit-example-title">{labels[example.outcome]}</h3>
      <figure className="marketplace-exit-figure">
        <figcaption>{labels.note}</figcaption>
        <ol className="marketplace-exit-steps">
          <li><CircleDot size={17} aria-hidden="true" />{labels.position}</li>
          <li><Flag size={17} aria-hidden="true" />{example.trigger[locale]}</li>
          <li><Icon size={17} aria-hidden="true" />{labels.result[example.outcome]}</li>
        </ol>
        {chart && (
          <>
            <PricePlot example={chart} />
            <div className="marketplace-exit-marker-key">
              <span>1 · {plot === 'opposite' ? labels.markedPattern : labels.markedEntry}</span>
              <span>2 · {labels.markedAction}</span>
            </div>
          </>
        )}
        {context && (
          <div className="marketplace-context-chart" aria-hidden="true">
            {context.bars.map((value, index) => <span key={index} style={{ height: `${value}%` }} />)}
          </div>
        )}
        {chartNote && (
          <p className="marketplace-exit-chart-note">
            <ArrowRight size={15} aria-hidden="true" /> {chartNote}
          </p>
        )}
        {shown.length > 0 && (
          <div className="marketplace-exit-options">
            <p>{disabled ? labels.disabled : labels.defaults}</p>
            {shown.map(([key, value]) => <code key={key}>{key} = {value}</code>)}
          </div>
        )}
      </figure>
    </section>
  );
}
