Crab looks for a reversal after five alternating highs and lows form the pattern X–A–B–C–D.

## How to read the chart

Letters mark the five turning points. D is the last one. The distances between the points have to match the pattern’s ratio ranges.

<!-- signal-chart -->

## When an entry appears

The strategy waits for candles after D to confirm that it is a turning point. A low at D can signal a long entry. A high can signal a short.

## How the trade closes

The default target retraces 61.8% of the price move from A to D. The stop is placed beyond D. If the opposite Crab confirms while a trade is open, the strategy can close it early.

<!-- exit-example -->

## Configuration keys

| Group | Keys | Purpose |
| --- | --- | --- |
| Strategy | `CRAB_PIVOT_LENGTH` | Number of candles on each side used to confirm a turning point. |
| Strategy | `CRAB_XD_RATIO` | Expected proportion used to locate the final point D. |
| Strategy | `CRAB_TARGET_FIB_PCT` | Target retracement as a percentage of the A–D move. |
| Strategy | `CRAB_STOP_FIB_PCT` | Stop distance beyond D as a percentage of X–A. |
| Strategy | `CRAB_EXIT_ON_OPPOSITE_PATTERN` | Allows a confirmed opposite Crab pattern to close the position. |

## Backtest {#backtest}

Use 15-minute candles for the default setup. Compare signals at the confirmation candle rather than at the earlier turning point.

<!-- backtest-commands -->
