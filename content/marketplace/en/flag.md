Flag looks for a strong move to resume after a brief pullback.

## How to read the chart

The initial strong move is the pole. The price then pauses inside a narrow channel that forms the flag.

<!-- signal-chart -->

## When an entry appears

The strategy measures the pole and checks that the pause is narrow enough. It then waits for a break of the flag in the direction of the original move. The entry can require a later close or retest.

## How the trade closes

The stop sits beyond the other edge of the flag. The target is projected using the pole length. An opposite confirmed flag can close the trade early. The optional local AI check for this package accepts short candidates only.

<!-- exit-example -->

## Configuration keys

| Group | Keys | Purpose |
| --- | --- | --- |
| Strategy | `FLAG_MIN_POLE_MOVE_ATR` | Minimum original move, measured in ATR units. |
| Strategy | `FLAG_MAX_CHANNEL_TO_POLE_RATIO` | Limits the flag’s width relative to the pole. |
| Strategy | `FLAG_ENTRY_MODE` | Chooses break, later confirmation or retest. |
| Strategy | `FLAG_TARGET_POLE_RATIO` | Target distance as a share of pole length. |
| Strategy | `FLAG_EXIT_ON_OPPOSITE_PATTERN` | Enables early closure on a confirmed opposite flag. |

## Backtest {#backtest}

Compare the width of the pause and the size of the original move on the same candle interval.

<!-- backtest-commands -->
