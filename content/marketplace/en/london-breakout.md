LondonBreakout trades a break of the range established at 08:00 UTC from the previous nine hourly candles.

## How to read the chart

The shaded area shows the earlier range. A candle has to close beyond the boundary and its buffer to qualify.

<!-- signal-chart -->

## When an entry appears

The default setup considers short entries between 08:00 and 16:00 UTC. It skips days when a required candle is missing or the range is wider than allowed relative to daily volatility.

## How the trade closes

The stop and target are measured from the real fill price in the run. If a position remains open until 08:00 UTC the following day, the strategy requests a time exit.

<!-- exit-example -->

## Configuration keys

| Group | Keys | Purpose |
| --- | --- | --- |
| Strategy | `LONDON_ENTRY_HOUR` | UTC hour when the fixed entry window starts. |
| Strategy | `LONDON_MAX_RANGE_ATR` | Rejects ranges wider than this share of daily ATR. |
| Strategy | `LONDON_ENTRY_BUFFER_ATR` | Minimum distance past the range needed for a break. |
| Strategy | `LONDON_STOP_ATR`, `LONDON_TARGET_ATR` | Stop and target distances from the fill, measured in daily ATR. |

## Backtest {#backtest}

Use hourly candles and enough preceding days to measure daily ATR, the usual size of a day’s price range.

<!-- backtest-commands -->
