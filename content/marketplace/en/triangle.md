Triangle looks for a break out of a price range that narrows over time.

## How to read the chart

The two lines show an upper and a lower boundary. Successive touches of both edges make the triangle visible.

<!-- signal-chart -->

## When an entry appears

Price must break a boundary after enough touches have formed. In confirmation mode, the strategy waits for a later close on the breakout side. Small or already broken figures can be skipped.

## How the trade closes

The stop is placed beyond the opposite boundary. The target is projected from the broken line using the starting height of the triangle. A confirmed break the other way can close an existing trade early.

<!-- exit-example -->

## Configuration keys

| Group | Keys | Purpose |
| --- | --- | --- |
| Strategy | `TRIANGLE_MIN_TOUCHES_PER_BOUNDARY` | Minimum touches on each edge. |
| Strategy | `TRIANGLE_ENTRY_MODE` | Chooses how a break is confirmed. |
| Strategy | `TRIANGLE_ALLOW_REVERSE_BREAKOUTS` | Allows breaks against the usual direction of ascending and descending triangles. |
| Strategy | `TRIANGLE_TARGET_HEIGHT_RATIO` | Target distance in multiples of the starting triangle height. |
| Strategy | `TRIANGLE_EXIT_ON_OPPOSITE_PATTERN` | Allows a confirmed opposite breakout to close a trade. |

## Backtest {#backtest}

Save a Triangle configuration and choose the default 15-minute candle interval for a first comparison.

<!-- backtest-commands -->
