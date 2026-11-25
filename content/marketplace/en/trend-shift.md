TrendShift looks for a change in direction when price breaks through a trend boundary.

## How to read the chart

The line tracks the current trend. A confirmed break makes the boundary switch sides.

<!-- signal-chart -->

## When an entry appears

The strategy waits for a directional change and checks that the move beyond the boundary is strong enough. It can also require a stronger confirming candle or sufficient trend strength.

## How the trade closes

The stop sits beyond the current boundary with a buffer. The target is measured from the initial risk distance. The opposite change can close the trade after the configured confirmation candles.

<!-- exit-example -->

## Configuration keys

| Group | Keys | Purpose |
| --- | --- | --- |
| Strategy | `TRENDSHIFT_CONFIRM_FLIP_WITH_CLOSE` | Requires the close to confirm the direction change. |
| Strategy | `TRENDSHIFT_MIN_FLIP_DISTANCE_ATR` | Minimum distance beyond the boundary in ATR units. |
| Strategy | `TRENDSHIFT_TARGET_R_MULT` | Target distance measured against initial risk distance. |
| Strategy | `TRENDSHIFT_EXIT_ON_OPPOSITE_FLIP` | Enables a close after an opposite direction change. |
| Strategy | `TRENDSHIFT_OPPOSITE_EXIT_CONFIRMATION_BARS` | Additional candles used to confirm an early exit. |

## Backtest {#backtest}

Compare the first touch of the boundary with the candle that actually confirms the change.

<!-- backtest-commands -->
