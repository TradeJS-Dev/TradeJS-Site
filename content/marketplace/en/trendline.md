TrendLine looks for price to break through a line drawn from recent highs or lows.

## How to read the chart

The sloping line connects earlier turning points. The example highlights the candle that breaks it, and any later follow-through or retest.

<!-- signal-chart -->

## When an entry appears

The strategy first needs a valid line. It checks the price move beyond it, the allowed stage of the break, and the potential target relative to the stop. It can skip signals if volatility or risk exceed the allowed limits.

## How the trade closes

The trade has a stop and target. If price crosses back through the active line against the position, the strategy can request an early exit.

<!-- exit-example -->

## Configuration keys

| Group | Keys | Purpose |
| --- | --- | --- |
| Strategy | `TRENDLINE.minTouches` | Minimum touches needed to use a line. |
| Strategy | `TRENDLINE.epsilon` | Price tolerance for fitting the line to turning points. |
| Strategy | `TRENDLINE_ALLOWED_ENTRY_TIMINGS` | Entry stages the strategy can accept: breakout, follow-through or retest. |
| Strategy | `TRENDLINE_STOP_BASE_PCT` | Base stop distance as a percentage of price. |
| Strategy | `TRENDLINE_TARGET_R_MULT` | Target distance as a multiple of the initial stop distance. |

## Backtest {#backtest}

Watch for the candle that breaks the line and for closes back on the old side after entry.

<!-- backtest-commands -->
