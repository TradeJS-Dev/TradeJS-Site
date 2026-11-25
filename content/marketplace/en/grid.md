Grid builds a position in several steps in the direction of an existing trend.

## How to read the chart

The first mark is the opening trade. The lower marks in the long example show possible additions if price pulls back again.

<!-- signal-chart -->

## When an entry appears

The strategy measures the trend with fast and slow moving averages. It can enter after a pullback ends or after a price break followed by a retest. Additions require enough room within the shared loss budget.

## How the trade closes

The legs are managed as one position. After a new fill the strategy can update its protective levels. A hard stop, a trend reversal or an abrupt rise in volatility can end the cycle.

<!-- exit-example -->

## Configuration keys

| Group | Keys | Purpose |
| --- | --- | --- |
| Strategy | `GRID_FAST_EMA`, `GRID_SLOW_EMA` | Periods of the averages used to identify trend direction. |
| Strategy | `GRID_ENTRY_MODE` | Chooses recovery from a pullback or a breakout retest. |
| Strategy | `GRID_MAX_LEVELS` | Maximum number of grid levels. |
| Strategy | `MAX_LOSS_VALUE` | Loss budget shared by the position and its additions. |
| Strategy | `GRID_EXIT_ON_REGIME_FLIP` | Allows an exit when the trend reverses against the position. |

## Backtest {#backtest}

Check the filled grid levels, average entry, and protective levels for one complete cycle.

<!-- backtest-commands -->
