Dragon looks for a reversal after four alternating highs and lows.

## How to read the chart

In the example of a move upward, the second low is higher than the first. A line drawn through the upper turning points shows the level price needs to break.

<!-- signal-chart -->

## When an entry appears

The four turning points must be confirmed and close enough to the expected shape. A close beyond the line gives a potential entry, with a later confirmation or retest if selected.

## How the trade closes

The stop and target are calculated from the pattern size. A confirmed Dragon pointing the other way can close an open position before either level is reached.

<!-- exit-example -->

## Configuration keys

| Group | Keys | Purpose |
| --- | --- | --- |
| Strategy | `DRAGON_PIVOT_LENGTH` | Controls how many candles are used to confirm a turning point. |
| Strategy | `DRAGON_MAX_BREAKOUT_AFTER_REAR_FOOT_BARS` | Limits the wait for a break after the fourth point. |
| Strategy | `DRAGON_ENTRY_MODE` | Chooses how the line break is confirmed. |
| Strategy | `DRAGON_TARGET_FIB_PCT` | Controls how far the target is projected from the pattern. |
| Strategy | `DRAGON_EXIT_ON_OPPOSITE_PATTERN` | Allows a confirmed opposite Dragon to close a trade. |

## Backtest {#backtest}

Use the chart to check the order of the four turning points before judging the entry.

<!-- backtest-commands -->
