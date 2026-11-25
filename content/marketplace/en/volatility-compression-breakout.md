VolatilityCompressionBreakout looks for price to leave a narrow range after a quiet spell.

## How to read the chart

The box marks the earlier range. The breakout candle expands beyond that range as the move picks up.

<!-- signal-chart -->

## When an entry appears

The strategy measures whether the market has been quiet relative to its recent history. Then it checks the break for sufficient distance, candle size or volume. The required checks depend on the settings.

## How the trade closes

The stop sits beyond the structure that price broke out of. The target uses the distance to that stop. A new confirmed breakout in the opposite direction can close the trade early.

<!-- exit-example -->

## Configuration keys

| Group | Keys | Purpose |
| --- | --- | --- |
| Strategy | `VCB_MAX_ATR_PCT_RANK` | Maximum relative volatility reading for a quiet setup. |
| Strategy | `VCB_MIN_VOLUME_REL20` | Minimum volume relative to the average of 20 candles. |
| Strategy | `VCB_MIN_ACCEPTANCE_CLOSES` | Minimum qualifying closes beyond the broken boundary. |
| Strategy | `VCB_TARGET_R_MULT` | Target distance as a multiple of the stop distance. |
| Strategy | `VCB_EXIT_ON_OPPOSITE_BREAKOUT` | Enables an exit on a confirmed opposite breakout. |

## Backtest {#backtest}

Compare the quiet period and the breakout on the same interval and use market data with enough history for the volatility measures.

<!-- backtest-commands -->
