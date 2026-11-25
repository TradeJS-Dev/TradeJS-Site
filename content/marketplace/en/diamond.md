Diamond looks for a reversal when a widening price range contracts and then breaks.

## How to read the chart

The left half widens as the highs and lows move apart. On the right, the two boundaries move closer together.

<!-- signal-chart -->

## When an entry appears

Six confirmed turning points define the figure. A close through the boundary can signal a reversal. In the default confirmation mode, the strategy waits for an additional close.

## How the trade closes

The stop sits beyond the last opposing turning point with a buffer. By default the target is one pattern height from the break. A confirmed opposite Diamond can also close the trade.

<!-- exit-example -->

## Configuration keys

| Group | Keys | Purpose |
| --- | --- | --- |
| Strategy | `DIAMOND_MIN_EXPANSION_RATIO` | Minimum expansion of the widening half. |
| Strategy | `DIAMOND_MAX_RIGHT_WIDTH_RATIO` | Limits the width of the contracting half. |
| Strategy | `DIAMOND_ENTRY_MODE` | Chooses how a break is confirmed. |
| Strategy | `DIAMOND_TARGET_HEIGHT_PCT` | Target distance projected from the break as a percentage of the figure’s height. |
| Strategy | `DIAMOND_EXIT_ON_OPPOSITE_PATTERN` | Enables early closure on a confirmed opposite Diamond. |

## Backtest {#backtest}

Compare the break with the preceding move and the narrowing right half before changing the confirmation settings.

<!-- backtest-commands -->
