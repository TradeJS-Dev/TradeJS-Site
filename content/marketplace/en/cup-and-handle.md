CupAndHandle looks for a break after price forms a cup and a shorter pullback called the handle.

## How to read the chart

The broad dip forms the cup. The shorter dip near the rim is the handle. An inverted cup has the same shape upside down.

<!-- signal-chart -->

## When an entry appears

The strategy checks the depth and duration of the cup and handle, then waits for a break of the rim. Depending on the settings, it can wait for a later close or a retest of the broken level.

## How the trade closes

The cup depth determines the target distance and the stop buffer. A confirmed inverted cup can close a long early, and a regular cup can close a short, when the opposite-pattern rule is enabled.

<!-- exit-example -->

## Configuration keys

| Group | Keys | Purpose |
| --- | --- | --- |
| Strategy | `CUPHANDLE_RIM_TOLERANCE_PCT` | Controls how different the two heights at the rim can be. |
| Strategy | `CUPHANDLE_MIN_HANDLE_BARS` | Minimum length of the handle in candles. |
| Strategy | `CUPHANDLE_ENTRY_MODE` | Selects the break, confirming close or retest. |
| Strategy | `CUPHANDLE_TARGET_DEPTH_PCT` | Target distance as a percentage of cup depth. |
| Strategy | `CUPHANDLE_EXIT_ON_OPPOSITE_PATTERN` | Enables early closure when an opposite cup confirms. |

## Backtest {#backtest}

Start by checking whether the rim break and the handle shown on the chart match your selected entry mode.

<!-- backtest-commands -->
