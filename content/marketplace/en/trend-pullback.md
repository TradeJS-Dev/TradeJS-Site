TrendPullback enters on a recovery after a pullback within an hourly trend.

## How to read the chart

The averages show the hourly trend. The marked pullback temporarily moves against it. A later candle shows price starting to recover.

<!-- signal-chart -->

## When an entry appears

In an uptrend, the strategy waits for RSI, a measure of recent price strength, to drop past its threshold. It then requires a candle to close above the previous candle’s high. A downtrend uses the corresponding conditions.

## How the trade closes

The stop starts beyond the pullback’s extreme and can move when price advances. The default target is four initial stop distances away. Loss of the hourly trend or the holding deadline can close the position sooner.

<!-- exit-example -->

## Configuration keys

| Group | Keys | Purpose |
| --- | --- | --- |
| Strategy | `TP_FAST_EMA`, `TP_SLOW_EMA` | Periods of the exponential moving averages that determine the hourly trend. |
| Strategy | `TP_RSI_PULLBACK` | RSI threshold used to spot the pullback. |
| Strategy | `TP_PENDING_BARS` | Maximum wait for confirmation after a pullback. |
| Strategy | `TP_TRAIL_ATR` | Trailing distance in ATR units. |
| Strategy | `TP_MAX_HOLD_HOURS` | Maximum holding time in hours. |
| Strategy | `TP_TARGET_R` | Target distance in multiples of the initial stop distance. |

## Backtest {#backtest}

The package supports hourly entries and 15-minute entries with the same hourly trend check.

<!-- backtest-commands -->
