DoubleTap looks for a reversal after price tests roughly the same level twice.

## How to read the chart

Two lows form a double bottom and two highs form a double top. The level between them is the neckline.

<!-- signal-chart -->

## When an entry appears

For a double bottom, the confirming move is above the neckline. For a double top, it is below. The entry mode controls whether the initial break is enough or needs a later close or retest.

## How the trade closes

The pattern supplies the stop and target. The strategy can close sooner if an opposite double top or double bottom confirms.

<!-- exit-example -->

## Configuration keys

| Group | Keys | Purpose |
| --- | --- | --- |
| Strategy | `DOUBLETAP_PIVOT_TOLERANCE_PCT` | How different the two tests can be in price. |
| Strategy | `DOUBLETAP_MIN_TAP_SPACING_BARS` | Minimum candles between the two tests. |
| Strategy | `DOUBLETAP_ENTRY_MODE` | Chooses the entry confirmation. |
| Strategy | `DOUBLETAP_TARGET_FIB_PCT` | Target distance based on the figure’s height. |
| Strategy | `DOUBLETAP_EXIT_ON_OPPOSITE_PATTERN` | Allows a confirmed opposite pattern to close a trade. |

## Backtest {#backtest}

Check how far apart the two tests are and whether the break happened before the pattern became too old.

<!-- backtest-commands -->
