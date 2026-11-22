import { useId } from 'react';
import { atr, breakoutIndex, candles, entry, entryIndex, exitIndex, neckline, pivots, stop, target } from '@/lib/head-and-shoulders-demo';

const plot = { left: 15, right: 832, top: 25, bottom: 300 };
const x = (index: number) => plot.left + (plot.right - plot.left) * index / (candles.length - 1);
const y = (price: number) => plot.bottom - (price - 66000) / 3100 * (plot.bottom - plot.top);

interface ReplayChartProps {
  last: number;
  phase: number;
  className?: string;
  decorative?: boolean;
  labels: {
    chart: string;
    shoulders: readonly string[];
    neckline: string;
    entry: string;
    exit: string;
  };
}

export function StrategyReplayChart({ last, phase, className, labels, decorative }: ReplayChartProps) {
  const id = useId();
  const visible = candles.slice(0, last + 1);
  const positionOpen = last >= entryIndex;
  const positionClosed = last >= exitIndex;
  const orderWidth = Math.min(plot.right - x(entryIndex), x(last + 1) - x(entryIndex));
  const lastPrice = candles[last].close;
  const event = phase === 2 ? { index: breakoutIndex, price: candles[breakoutIndex].close, color: 'var(--info)' }
    : phase === 3 ? { index: entryIndex, price: entry, color: 'var(--primary)' }
    : positionClosed ? { index: exitIndex, price: target, color: 'var(--primary)' }
    : undefined;

  return (
    <svg
      viewBox="0 0 900 410"
      preserveAspectRatio={decorative ? undefined : 'none'}
      className={className}
      role={decorative ? undefined : 'img'}
      aria-hidden={decorative}
      aria-label={decorative ? undefined : labels.chart}
    >
      {!decorative && (
        <defs>
          <linearGradient id={`${id}-sweep`}>
            <stop stopColor="var(--primary)" stopOpacity="0" />
            <stop offset="1" stopColor="var(--primary)" stopOpacity="0.16" />
          </linearGradient>
          <linearGradient id={`${id}-reward`} x2="0" y2="1">
            <stop stopColor="var(--primary)" stopOpacity="0.03" />
            <stop offset="1" stopColor="var(--primary)" stopOpacity="0.24" />
          </linearGradient>
        </defs>
      )}
      <g stroke="var(--border)" strokeWidth="1" opacity="0.7">
        {[66000, 66500, 67000, 67500, 68000, 68500, 69000].map((price) => (
          <line key={price} x1="0" x2={plot.right} y1={y(price)} y2={y(price)} />
        ))}
        {[0, 8, 16, 24, 32, 40, 48].map((index) => (
          <line key={index} x1={x(index)} x2={x(index)} y1={plot.top} y2="375" />
        ))}
        <path d="M832 25V375H0 M0 309H832" fill="none" />
      </g>
      {!decorative && (
        <g className="replay-chart-labels fill-muted-foreground font-mono text-[12px]">
          {[66000, 67000, 68000, 69000].map((price) => (
            <text key={price} x="844" y={y(price) + 4}>{(price / 1000).toFixed(1)}k</text>
          ))}
          {[0, 8, 16, 24, 32, 40, 48].map((index) => (
            <text key={index} x={x(index)} y="397" textAnchor={index === 0 ? 'start' : 'middle'}>
              {String(8 + index / 4).padStart(2, '0')}:00
            </text>
          ))}
        </g>
      )}
      {positionOpen && !decorative && (
        <g className="replay-annotation">
          <rect className="replay-order-zone" x={x(entryIndex)} y={y(stop)} width={orderWidth} height={y(entry) - y(stop)} fill="var(--danger)" opacity="0.13" />
          <rect className="replay-order-zone" x={x(entryIndex)} y={y(entry)} width={orderWidth} height={y(target) - y(entry)} fill={`url(#${id}-reward)`} />
          {[{ price: stop, color: 'var(--danger)', label: 'SL' }, { price: target, color: 'var(--primary)', label: 'TP' }].map(({ price, color, label }) => (
            <g key={label} fill={color}>
              <line x1={x(entryIndex) - 12} x2={plot.right} y1={y(price)} y2={y(price)} stroke={color} strokeDasharray="4 5" opacity="0.72" />
              <text x="845" y={y(price) + 4} className="replay-chart-labels font-mono text-[12px]">{label}</text>
            </g>
          ))}
          <line x1={x(entryIndex)} x2={x(entryIndex) + orderWidth} y1={y(entry)} y2={y(entry)} stroke="var(--primary)" strokeDasharray="3 4" opacity="0.7" />
        </g>
      )}
      {!decorative && !positionClosed && (
        <g className="replay-sweep" style={{ transform: `translateX(${x(last)}px)` }}>
          <rect x="-62" y={plot.top} width="62" height={375 - plot.top} fill={`url(#${id}-sweep)`} />
          <line y1={plot.top} y2="375" stroke="var(--primary)" strokeDasharray="3 5" opacity="0.55" />
        </g>
      )}
      {visible.map((candle, index) => {
        const color = candle.close >= candle.open ? 'var(--success)' : 'var(--danger)';
        const volumeHeight = candle.volume * 0.19;
        return (
          <g key={index} fill={color} className={index === last && !decorative ? 'replay-latest-candle' : undefined}>
            <line x1={x(index)} x2={x(index)} y1={y(candle.high)} y2={y(candle.low)} stroke={color} strokeWidth="1.3" />
            <rect x={x(index) - 4} y={y(Math.max(candle.open, candle.close))} width="8" height={Math.max(1.6, Math.abs(y(candle.open) - y(candle.close)))} rx="1" />
            {phase > 0 && <rect x={x(index) - 4} y={368 - volumeHeight} width="8" height={volumeHeight} opacity={index === entryIndex ? 0.7 : 0.32} />}
          </g>
        );
      })}
      {phase > 0 && !decorative && (
        <g className="replay-annotation">
          <polyline
            fill="none"
            stroke="var(--info)"
            strokeWidth="1.5"
            points={atr.slice(0, last + 1).map((value, index) => `${x(index)},${365 - value * 0.24}`).join(' ')}
          />
          <polyline
            className="replay-pattern-line"
            pathLength="1"
            fill="none"
            stroke="var(--primary)"
            strokeLinejoin="round"
            strokeWidth="2.2"
            points={pivots.map((point) => `${x(point.index)},${y(point.price)}`).join(' ')}
          />
          <line x1={x(pivots[1].index)} x2={x(Math.max(last, breakoutIndex))} y1={y(neckline)} y2={y(neckline)} stroke="var(--info)" strokeDasharray="5 5" />
          <text x={x(pivots[1].index) + 8} y={y(neckline) + 20} className="replay-chart-labels fill-info font-mono text-[12px]">{labels.neckline} · 67 500</text>
          {pivots.map((point, index) => (
            <g key={point.index}>
              <circle cx={x(point.index)} cy={y(point.price)} r="4" fill="var(--background)" stroke="var(--primary)" strokeWidth="2" />
              {index % 2 === 0 && (
                <text x={x(point.index)} y={y(point.price) - 13} textAnchor="middle" className="replay-chart-labels fill-foreground font-mono text-[12px]">
                  {labels.shoulders[index / 2]}
                </text>
              )}
            </g>
          ))}
          {positionOpen && (
            <g className="fill-primary">
              <circle cx={x(entryIndex)} cy={y(entry)} r="5" stroke="var(--background)" strokeWidth="2" />
              <text x={x(entryIndex) + 9} y={y(entry) - 10} className="replay-chart-labels font-mono text-[12px]">{labels.entry}</text>
            </g>
          )}
          {positionClosed && (
            <g className="fill-primary">
              <circle cx={x(exitIndex)} cy={y(target)} r="5" stroke="var(--background)" strokeWidth="2" />
              <text x={x(exitIndex) - 10} y={y(target) + 19} textAnchor="end" className="replay-chart-labels font-mono text-[12px]">{labels.exit}</text>
            </g>
          )}
        </g>
      )}
      {!decorative && !positionClosed && (
        <g className="replay-price-marker" style={{ transform: `translateY(${y(lastPrice)}px)` }}>
          <line x1={x(last) + 6} x2={plot.right} stroke="var(--primary)" strokeDasharray="2 5" opacity="0.43" />
          <g className="replay-chart-labels">
            <rect x="835" y="-10" width="64" height="20" rx="3" fill="var(--primary)" />
            <text x="867" y="4" textAnchor="middle" className="fill-primary-foreground font-mono text-[11px] font-bold">
              {lastPrice.toLocaleString('en-US')}
            </text>
          </g>
        </g>
      )}
      {event && !decorative && (
        <g key={phase} transform={`translate(${x(event.index)} ${y(event.price)})`} stroke={event.color} fill="none">
          <circle r="8" strokeWidth="1.3" opacity="0.6" />
          <circle r="8" strokeWidth="1.5" className="replay-event-ring" />
        </g>
      )}
    </svg>
  );
}
