RangeReclaim looks for a failed break of a range taken from a completed higher-timeframe candle.

## How to read the chart

The box is the high and low of that completed candle. The shaded area remains the reference while later candles move around it.

<!-- signal-chart -->

## When an entry appears

For a long, price first goes below the range and then closes inside it. A short uses the opposite side. The setup expires if confirmation is late or a new higher-timeframe range replaces the old one. One confirmed attempt is allowed per range.

## How the trade closes

The stop is placed beyond the excursion, with a volatility buffer. The target is the middle or the other edge of the range. The holding deadline can close a position that is still open.

<!-- exit-example -->

## Configuration keys

| Group | Keys | Purpose |
| --- | --- | --- |
| Strategy | `RANGE_RECLAIM_WAIT_BARS` | Additional candles allowed for a close back in the range. |
| Strategy | `RANGE_RECLAIM_TARGET` | Chooses the midpoint or far boundary as the target. |
| Strategy | `RANGE_RECLAIM_MAX_HOLD_BARS` | Holding deadline in execution intervals, counted from the signal. |
| Strategy | `MAX_LOSS_VALUE` | Loss budget used to calculate position size. |

## Backtest {#backtest}

Use an execution and source interval of 15/240, 15/60 or 60/240 minutes. The detector needs consecutive closed candles to build the higher interval.

<!-- backtest-commands -->
