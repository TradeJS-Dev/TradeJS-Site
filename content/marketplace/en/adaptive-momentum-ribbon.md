AdaptiveMomentumRibbon looks for a change in the strength and direction of price moves.

## How to read the chart

The lines around price are the Keltner channel. The ribbon below the candles tracks momentum, or how strongly price is moving.

<!-- signal-chart -->

## When an entry appears

The strategy looks for a new upward or downward signal from the ribbon. It can require confirmation on the next candle or check that the channel agrees with the direction. Conflicting signals are skipped.

## How the trade closes

The stop is placed beyond the level that would invalidate the setup. The target is a multiple of that risk distance. An opposite signal or a move that invalidates the setup can close the trade earlier.

<!-- exit-example -->

## Configuration keys

| Group | Keys | Purpose |
| --- | --- | --- |
| Strategy | `AMR_MOMENTUM_PERIOD` | Number of candles used to measure momentum. |
| Strategy | `AMR_CONFIRM_ON_NEXT_BAR` | Requires the next candle to confirm the signal. |
| Strategy | `AMR_REQUIRE_KC_BIAS` | Requires the channel to agree with the signal direction. |
| Strategy | `AMR_TARGET_R_MULT` | Target distance measured in initial stop distances. |
| Strategy | `AMR_EXIT_ON_INVALIDATION` | Closes when the price invalidates the setup. |

## Backtest {#backtest}

Use enough candles to warm up the ribbon and the channel before comparing signals.

<!-- backtest-commands -->
