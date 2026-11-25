TrendFollow looks for an existing trend to continue.

## How to read the chart

The line follows price in the direction of the move. It marks the current trailing stop and moves as the trend advances.

<!-- signal-chart -->

## When an entry appears

A new uptrend or downtrend signal can start a trade if that direction is enabled and the risk checks pass. The trailing line sets the initial protective level.

## How the trade closes

The target is a multiple of the initial stop distance. Price can cross the active trailing stop before reaching the target. A confirmed opposite trend can also close the position when enabled.

<!-- exit-example -->

## Configuration keys

| Group | Keys | Purpose |
| --- | --- | --- |
| Strategy | `TRENDFOLLOW_TARGET_R_MULT` | Target distance based on initial risk distance. |
| Strategy | `TRENDFOLLOW_EXIT_ON_TRAIL_STOP` | Enables exit when price crosses the active trailing-stop level. |
| Strategy | `TRENDFOLLOW_EXIT_ON_OPPOSITE_SIGNAL` | Enables exit on a confirmed move in the opposite direction. |
| Strategy | `MAX_LOSS_VALUE` | Loss budget for calculating the size of the position. |

## Backtest {#backtest}

Compare the entry candle with the stop as it was at entry, then follow how the line moves during the trade.

<!-- backtest-commands -->
