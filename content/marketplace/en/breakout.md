Breakout looks for the price to move beyond recent support or resistance. Each direction has its own scorecard.

## How to read the chart

The marked level is an earlier boundary. In the example, the price breaks above it and later returns to check whether the level holds.

<!-- signal-chart -->

## When an entry appears

The entry must pass every required check and earn enough points. Checks can include trend, volume and a break of a recent level. The detector can act on the break, wait for confirmation or wait for a retest, depending on the selected mode.

## How the trade closes

The position has stop and target settings for its direction. The strategy can also close it when a new opposite entry qualifies or the trend measured by moving averages turns against it.

<!-- exit-example -->

## Configuration keys

| Group | Keys | Purpose |
| --- | --- | --- |
| Strategy | `BREAKOUT_ENTRY_MODE` | Selects a break, confirmation or retest in the entry detector. |
| Strategy | `BREAKOUT_MIN_VOLUME_REL20` | Minimum volume compared with the average over 20 candles. |
| Strategy | `BREAKOUT_MAX_DISTANCE_ATR` | Limits how far price can get from the broken level, in ATR units. |
| Strategy | `REQUIRED_SCORE_LONG`, `REQUIRED_SCORE_SHORT` | Minimum score needed to enter in the respective direction. |
| Strategy | `SL_LONG`, `SL_SHORT` | Stop setting for the respective direction. |

<span id="run"></span>

## Backtest {#backtest}

Use a saved Breakout configuration and check which entry mode it uses before comparing trades.

<!-- backtest-commands -->
