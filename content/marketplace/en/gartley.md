Gartley waits for a reversal from a five-point figure with specific price ratios.

## How to read the chart

The letters X through D label the turning points. D completes the shape. B marks the level that confirms the reversal if price crosses it.

<!-- signal-chart -->

## When an entry appears

After D is confirmed, price still has to break B in the new direction. The strategy also checks the trend rules for the selected side.

## How the trade closes

It calculates the stop and target from the size of the X–A move. A confirmed opposite Gartley can close the trade early if enabled.

<!-- exit-example -->

## Configuration keys

| Group | Keys | Purpose |
| --- | --- | --- |
| Strategy | `GARTLEY_PIVOT_LENGTH` | Sets the candle window for confirming a turning point. |
| Strategy | `GARTLEY_MAX_BREAKOUT_AFTER_D_BARS` | Limits the wait for the break after D. |
| Strategy | `GARTLEY_ENTRY_MODE` | Selects the confirmation used for entry. |
| Strategy | `GARTLEY_TARGET_XA_FIB_PCT` | Sets the target using a percentage of the X–A distance. |
| Strategy | `GARTLEY_EXIT_ON_OPPOSITE_PATTERN` | Allows a confirmed opposite Gartley to close the trade. |

## Backtest {#backtest}

Look for the break of B after D. That confirms the example rather than the last turning point alone.

<!-- backtest-commands -->
