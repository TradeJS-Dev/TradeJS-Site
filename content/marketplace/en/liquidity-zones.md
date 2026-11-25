LiquidityZones builds price zones around recent highs and lows and waits for a reaction when price returns.

## How to read the chart

The shaded band marks a zone, which covers a range of prices around a turning point. The next marker shows price coming back to it.

<!-- signal-chart -->

## When an entry appears

The return must meet the selected retest conditions. If price penetrates too far into the zone or fails the market filters, the strategy can skip the entry.

## How the trade closes

The stop is placed beyond the zone. The target is measured from the stop distance. A confirmed reaction at an opposite zone can close the position early.

<!-- exit-example -->

## Configuration keys

| Group | Keys | Purpose |
| --- | --- | --- |
| Strategy | `LIQUIDITY_ZONES_PIVOT_LOOKBACK` | Candle window used to confirm a high or low for zone construction. |
| Strategy | `LIQUIDITY_ZONES_MAX_RETEST_PENETRATION_PCT` | Maximum allowed penetration into the zone during a retest. |
| Strategy | `LIQUIDITY_ZONES_STOP_BUFFER_PCT` | Controls the stop buffer beyond the zone. |
| Strategy | `LIQUIDITY_ZONES_TARGET_R_MULT` | Target distance in stop distances. |
| Strategy | `LIQUIDITY_ZONES_EXIT_ON_OPPOSITE_RETEST` | Enables an exit on a confirmed reaction at an opposite zone. |

## Backtest {#backtest}

Inspect which zone the strategy used and how far into it the confirming candle moved.

<!-- backtest-commands -->
