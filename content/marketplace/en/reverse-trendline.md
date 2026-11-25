ReverseTrendLine looks for a price bounce from a line drawn through recent highs or lows.

## How to read the chart

The line represents resistance when drawn through highs and support when drawn through lows. On the chart, price approaches the line and turns away.

<!-- signal-chart -->

## When an entry appears

The strategy checks whether the line has enough touches and whether the current price action supports a bounce. A setup can be rejected when the move is too volatile or the entry arrives too late.

## How the trade closes

The stop is a configured distance from entry. The target is calculated from that risk distance. A close far enough beyond the active line can end the position early.

<!-- exit-example -->

## Configuration keys

| Group | Keys | Purpose |
| --- | --- | --- |
| Strategy | `TRENDLINE.minTouches` | Minimum touches used to identify a trend line. |
| Strategy | `REVERSE_TRENDLINE_STOP_BASE_PCT` | Initial stop distance as a percentage of entry price. |
| Strategy | `REVERSE_TRENDLINE_TARGET_R_MULT` | Target distance in initial stop distances. |
| Strategy | `REVERSE_TRENDLINE_FAILED_BOUNCE_EXIT_PCT` | Distance beyond the line that counts as a failed bounce. |

## Backtest {#backtest}

Compare where price closed relative to the line, especially when distinguishing a bounce from a failed bounce.

<!-- backtest-commands -->
