LiquidityTails looks for reactions in areas left by long candle wicks.

## How to read the chart

A long wick shows that price visited an area and then moved away before the candle closed. The shaded zone marks that area.

<!-- signal-chart -->

## When an entry appears

The strategy waits for price to revisit the zone and show a response. It can limit the age or depth of the revisit. An improved later test can add to the position if enabled and within the loss budget.

## How the trade closes

The stop sits outside the zone. The goal is calculated from the stop distance. Optional rules can close the trade when price invalidates the zone or reacts at an opposite area.

<!-- exit-example -->

## Configuration keys

| Group | Keys | Purpose |
| --- | --- | --- |
| Strategy | `LIQUIDITY_TAILS_MIN_RETEST_AGE_BARS` | Earliest eligible return to the zone, measured in candles. |
| Strategy | `LIQUIDITY_TAILS_MAX_RETEST_DISTANCE_PCT` | Limits the allowed distance on the retest. |
| Strategy | `LIQUIDITY_TAILS_SCALE_IN_ENABLED` | Allows adding to the position on a qualifying later retest. |
| Strategy | `LIQUIDITY_TAILS_EXIT_ON_INVALIDATION` | Allows an exit when the active zone fails. |
| Strategy | `LIQUIDITY_TAILS_EXIT_ON_OPPOSITE_RETEST` | Allows an exit on a qualifying opposite retest. |

## Backtest {#backtest}

Compare the original wick and the candle that returned to the zone. They serve different roles in the signal.

<!-- backtest-commands -->
