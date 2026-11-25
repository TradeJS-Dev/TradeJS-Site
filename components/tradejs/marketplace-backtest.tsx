'use client';

import { useState } from 'react';
import { ArrowDownToLine, ChevronDown } from 'lucide-react';
import type { CSSProperties } from 'react';
import { MarketplaceCodeBlock } from './marketplace-code-block';
import { useLocale } from './locale-provider';

export type BacktestTrade = {
  side: 'LONG' | 'SHORT';
  signalAt: number;
  entryAt: number;
  exitAt: number;
  entry: number;
  exit: number;
  stop: number;
  target: number;
  reason: string;
  net: number;
};

export type MarketplaceBacktestReport = {
  strategy: string;
  packageVersion: string;
  cliVersion: string;
  connectorVersion: string;
  connector: string;
  symbol: string;
  interval: string;
  start: number;
  end: number;
  warmupDays: number;
  configName: string;
  config: Record<string, string | number | boolean>;
  costs: {
    fees: { makerRate: number; takerRate: number };
    slippage: { baseBps: number; spreadMultiplier: number; marketImpactBps: number; delayRiskMultiplier: number };
    funding: { enabled: boolean };
  };
  closed: number;
  openAtEnd: number;
  candleHash: string;
  run: string;
  trades: BacktestTrade[];
  candles: [timestamp: number, open: number, high: number, low: number, close: number][];
};

const copy = {
  en: {
    heading: 'Backtest and trade replay',
    intro: 'The chart shows actual fills from a fixed historical run. Select a trade, then select its entry or exit on the chart to inspect that event.',
    select: 'Select a closed trade',
    entry: 'Entry',
    exit: 'Exit',
    stop: 'Stop',
    target: 'Target',
    signal: 'Signal candle',
    fill: 'Simulated fill',
    early: 'Opposite moving-average crossover',
    stopReason: 'Stop loss reached',
    targetReason: 'Take-profit reached',
    longEntry: 'The fast average crossed above the slow average.',
    shortEntry: 'The fast average crossed below the slow average.',
    settings: 'Run conditions and reproduction',
    fees: 'Taker fee',
    slippage: 'Slippage per fill',
    funding: 'Funding',
    disabled: 'disabled',
    warmup: 'Warm-up',
    days: 'days',
    fillModel: 'Open of the next candle after the signal',
    instructions: 'Use a TradeJS project with the versions above and Bybit candle history cached for the run and warm-up periods. Run both commands from the project folder. If the saved configuration already exists, use a new suffix in both commands.',
    download: 'Download candles and trade report',
    result: 'Closed-trade results',
    side: 'Side',
    closed: 'Trades',
    winRate: 'Win rate',
    pnl: 'Net P&L',
    average: 'P&L / trade',
    maxDD: 'Realized drawdown',
    cadence: 'Trades / day',
    openAtEnd: 'Positions open at the end are excluded from closed-trade results.',
    profitFactor: 'Profit factor',
  },
  ru: {
    heading: 'Бэктест и разбор сделок',
    intro: 'На графике показаны исполнения из прогона на истории. Выберите сделку, затем нажмите на вход или выход на графике, чтобы увидеть подробности.',
    select: 'Выбрать закрытую сделку',
    entry: 'Вход',
    exit: 'Выход',
    stop: 'Стоп',
    target: 'Цель',
    signal: 'Свеча сигнала',
    fill: 'Исполнение в бэктесте',
    early: 'Встречное пересечение скользящих средних',
    stopReason: 'Сработал стоп-лосс',
    targetReason: 'Сработал тейк-профит',
    longEntry: 'Быстрая средняя пересекла медленную снизу вверх.',
    shortEntry: 'Быстрая средняя пересекла медленную сверху вниз.',
    settings: 'Условия и повтор прогона',
    fees: 'Комиссия тейкера',
    slippage: 'Проскальзывание на исполнение',
    funding: 'Фандинг',
    disabled: 'выключен',
    warmup: 'Прогрев',
    days: 'дн.',
    fillModel: 'Цена открытия следующей свечи после сигнала',
    instructions: 'Используйте проект TradeJS с указанными версиями и сохранённой историей Bybit за период прогона и прогрева. Выполните обе команды из папки проекта. Если конфигурация с таким именем уже есть, замените суффикс в обеих командах.',
    download: 'Скачать свечи и отчёт о сделках',
    result: 'Результаты закрытых сделок',
    side: 'Сторона',
    closed: 'Сделки',
    winRate: 'Доля прибыльных',
    pnl: 'Чистый P&L',
    average: 'P&L / сделку',
    maxDD: 'Просадка по закрытым',
    cadence: 'Сделок в день',
    openAtEnd: 'Позиции, оставшиеся открытыми в конце прогона, не входят в результаты закрытых сделок.',
    profitFactor: 'Профит-фактор',
  },
};

function summarize(trades: BacktestTrade[]) {
  let net = 0;
  let peak = 0;
  let drawdown = 0;
  let wins = 0;
  let profit = 0;
  let loss = 0;
  for (const trade of trades) {
    net += trade.net;
    peak = Math.max(peak, net);
    drawdown = Math.max(drawdown, peak - net);
    if (trade.net > 0) {
      wins++;
      profit += trade.net;
    } else {
      loss -= trade.net;
    }
  }
  return { net, drawdown, wins, factor: loss ? profit / loss : null };
}

export function MarketplaceBacktest({ report }: { report: MarketplaceBacktestReport }) {
  const { locale } = useLocale();
  const labels = copy[locale];
  const [selected, setSelected] = useState(() => Math.max(0, report.trades.findIndex(({ reason }) => reason.startsWith('CLOSE_'))));
  const [event, setEvent] = useState<'entry' | 'exit'>('exit');
  const trade = report.trades[selected];
  const candleSize = Number(report.interval) * 60_000;
  const candles = report.candles.filter(([time]) => time >= trade.signalAt - 8 * candleSize && time <= trade.exitAt + 8 * candleSize);
  const priceFormat = new Intl.NumberFormat(locale, { maximumFractionDigits: 2, minimumFractionDigits: 2 });
  const dates = new Intl.DateTimeFormat(locale, { dateStyle: 'medium', timeStyle: 'short', timeZone: 'UTC' });
  const minimum = Math.min(trade.stop, trade.target, ...candles.map(([, , , low]) => low));
  const maximum = Math.max(trade.stop, trade.target, ...candles.map(([, , high]) => high));
  const pricePosition = (price: number) => 9 + 82 * (maximum - price) / (maximum - minimum);
  const barPosition = (index: number) => 5 + 90 * (index + 0.5) / candles.length;
  const timePosition = (time: number) => barPosition(candles.findIndex(([timestamp]) => timestamp === time));
  const reason = (name: string) => name.startsWith('STOP_') ? labels.stopReason
    : name.startsWith('TAKE_') ? labels.targetReason : labels.early;
  const note = event === 'entry' ? (trade.side === 'LONG' ? labels.longEntry : labels.shortEntry) : reason(trade.reason);
  const grid = Object.fromEntries(Object.entries(report.config).map(([key, value]) => [key, [value]]));
  const seed = `docker compose -f docker-compose.dev.yml exec -T redis redis-cli JSON.SET \\\n  'users:root:backtests:configs:${report.configName}' '$' \\\n  '${JSON.stringify(grid)}' NX`;
  const command = `npm run backtest -- --user root --config ${report.configName} \\\n  --connector bybit --tickers ${report.symbol} --timeframe ${report.interval} \\\n  --startTime ${report.start} --endTime ${report.end} --cacheOnly \\\n  --tests 1 --parallel 1 --backtestPriceMode open --backtestEntryDelayBars 1 \\\n  --executionCosts '${JSON.stringify(report.costs)}'`;
  const days = (report.end - report.start) / 86_400_000;

  return (
    <section id="backtest-report" className="marketplace-backtest" aria-labelledby="backtest-report-title">
      <h2 id="backtest-report-title">{labels.heading}</h2>
      <p>{labels.intro}</p>
      <div className="marketplace-trade-replay">
        <label className="marketplace-trade-selector">
          <span>{labels.select}</span>
          <select value={selected} onChange={(change) => {
            setSelected(Number(change.target.value));
            setEvent('exit');
          }}>
            {report.trades.map((item, index) => (
              <option value={index} key={item.entryAt}>
                {item.side} · {dates.format(item.entryAt)} UTC · {reason(item.reason)}
              </option>
            ))}
          </select>
        </label>
        <div className="marketplace-trade-chart" aria-label={`${report.symbol} · ${report.interval}m`} style={{ '--chart-candle-width': `${65 / candles.length}cqi` } as CSSProperties}>
          {candles.map(([time, open, high, low, close], index) => (
            <div
              key={time}
              aria-hidden="true"
              className="marketplace-trade-candle"
              data-down={close < open}
              style={{ left: `${barPosition(index)}%`, top: `${pricePosition(high)}%`, height: `${pricePosition(low) - pricePosition(high)}%` }}
            >
              <span style={{
                top: `${high > low ? 100 * (high - Math.max(open, close)) / (high - low) : 0}%`,
                height: `${high > low ? 100 * Math.abs(close - open) / (high - low) : 0}%`,
              }} />
            </div>
          ))}
          <span aria-hidden="true" className="marketplace-trade-guide" data-guide="stop" style={{ top: `${pricePosition(trade.stop)}%` }} />
          <span aria-hidden="true" className="marketplace-trade-guide" data-guide="target" style={{ top: `${pricePosition(trade.target)}%` }} />
          {(['entry', 'exit'] as const).map((stage) => (
            <button
              key={stage}
              type="button"
              aria-pressed={event === stage}
              style={{ left: `${timePosition(stage === 'entry' ? trade.entryAt : trade.exitAt)}%`, top: `${pricePosition(trade[stage])}%` }}
              onClick={() => setEvent(stage)}
            >
              {labels[stage]}
            </button>
          ))}
        </div>
        <div className="marketplace-trade-legend">
          <span data-guide="stop">{labels.stop} {priceFormat.format(trade.stop)}</span>
          <span data-guide="target">{labels.target} {priceFormat.format(trade.target)}</span>
        </div>
        <div className="marketplace-trade-event" aria-live="polite">
          <strong>{labels[event]} · {trade.side}</strong>
          <p>{note}</p>
          <dl>
            {event === 'entry' && <div><dt>{labels.signal}</dt><dd>{dates.format(trade.signalAt)} UTC</dd></div>}
            <div><dt>{labels.fill}</dt><dd>{dates.format(event === 'entry' ? trade.entryAt : trade.exitAt)} UTC</dd></div>
            <div><dt>{report.symbol}</dt><dd>{priceFormat.format(trade[event])} USDT</dd></div>
            {event === 'exit' && <div><dt>{labels.pnl}</dt><dd>{priceFormat.format(trade.net)} USDT</dd></div>}
          </dl>
        </div>
      </div>

      <h3>{labels.result}</h3>
      <div className="marketplace-table" tabIndex={0}>
        <table aria-label={labels.result}>
          <thead><tr><th scope="col">{labels.side}</th>
            {[labels.closed, labels.pnl, labels.average, labels.profitFactor, labels.winRate, labels.maxDD, labels.cadence].map((heading) => <th scope="col" key={heading}>{heading}</th>)}
          </tr></thead>
          <tbody>{(['ALL', 'LONG', 'SHORT'] as const).map((side) => {
            const trades = report.trades.filter((item) => side === 'ALL' || item.side === side);
            const stats = summarize(trades);
            return <tr key={side}>
              <th scope="row">{side}</th><td>{trades.length}</td>
              <td>{priceFormat.format(stats.net)} USDT</td>
              <td>{trades.length ? priceFormat.format(stats.net / trades.length) : '—'}</td>
              <td>{stats.factor == null ? '—' : priceFormat.format(stats.factor)}</td>
              <td>{trades.length ? `${priceFormat.format(100 * stats.wins / trades.length)}%` : '—'}</td>
              <td>{priceFormat.format(stats.drawdown)} USDT</td><td>{priceFormat.format(trades.length / days)}</td>
            </tr>;
          })}</tbody>
        </table>
      </div>
      <p>{report.openAtEnd} · {labels.openAtEnd}</p>

      <details className="marketplace-defaults">
        <summary>{labels.settings} <ChevronDown size={18} aria-hidden="true" /></summary>
        <div className="marketplace-defaults-body">
          <p>{report.connector} · {report.symbol} · {report.interval}m · {dates.format(report.start)} – {dates.format(report.end)} UTC</p>
          <p>TradeJS CLI <code>{report.cliVersion}</code> · {report.strategy} <code>{report.packageVersion}</code> · {report.connector} <code>{report.connectorVersion}</code></p>
          <p>{labels.warmup} {report.warmupDays} {labels.days} · {labels.fillModel}</p>
          <p>{labels.fees} {priceFormat.format(report.costs.fees.takerRate * 100)}% · {labels.slippage} {report.costs.slippage.baseBps} bps · {labels.funding} {labels.disabled}</p>
          <p>{labels.instructions}</p>
          <p><code>{report.run}</code></p>
          <MarketplaceCodeBlock code={seed} />
          <MarketplaceCodeBlock code={command} />
          <a href="/marketplace/reports/ma-strategy.json" download className="inline-flex items-center gap-2">
            <ArrowDownToLine size={16} aria-hidden="true" /> {labels.download}
          </a>
        </div>
      </details>
    </section>
  );
}
