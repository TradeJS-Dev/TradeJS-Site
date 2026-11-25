RelativeRotation compares a symbol’s hourly and daily moves with Bitcoin to find a shift in relative strength.

## How to read the chart

The comparison line shows how the symbol is doing relative to Bitcoin. The two prices can rise together while one becomes stronger than the other.

<!-- signal-chart -->

## When an entry appears

The strategy looks for a sufficiently large difference in the selected direction. Its other checks can include volume, correlation with Bitcoin and the current market trend.

## How the trade closes

The stop is padded for typical price movement. The target is set in multiples of the stop distance. An optional rule closes the trade when a sufficiently strong opposite change in relative strength appears.

<!-- exit-example -->

## Configuration keys

| Group | Keys | Purpose |
| --- | --- | --- |
| Strategy | `RR_MIN_RELATIVE_STRENGTH_1H` | Minimum strength difference versus Bitcoin over one hour. |
| Strategy | `RR_TARGET_R_MULT` | Target distance measured against the initial stop distance. |
| Strategy | `RR_EXIT_ON_OPPOSITE_ROTATION` | Enables early exit when the relative-strength signal reverses. |
| Strategy | `MAX_LOSS_VALUE` | Loss budget used to size the position. |

## Backtest {#backtest}

Load both the symbol and Bitcoin history for the same test window.

<!-- backtest-commands -->
