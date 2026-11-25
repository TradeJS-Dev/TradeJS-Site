MaStrategy looks for the fast moving average to cross the slow one.

## How to read the chart

The fast line responds to recent candles sooner. A cross above the slow line points toward a possible rise. A cross below points toward a possible decline.

<!-- signal-chart -->

## When an entry appears

A new cross must pass the selected checks for that direction. The strategy can reject a signal when the averages are too close together, volume is too low or the target is too close relative to risk.

## How the trade closes

The stop and target are set for each direction. By default, a cross in the other direction can close a long early. The same rule is off for shorts.

<!-- exit-example -->

## Configuration keys

| Group | Keys | Purpose |
| --- | --- | --- |
| Strategy | `MA_FAST`, `MA_SLOW` | Periods of the fast and slow averages, in candles. |
| Strategy | `MA_MIN_CROSS_GAP_ATR_LONG`, `MA_MIN_CROSS_GAP_ATR_SHORT` | Minimum gap between the averages at entry, in ATR units, per direction. |
| Strategy | `LONG.TP`, `SHORT.TP` | Take-profit distance for the respective direction. |
| Strategy | `LONG.SL`, `SHORT.SL` | Stop distance for the respective direction. |
| Strategy | `MA_EXIT_ON_OPPOSITE_CROSS_LONG`, `MA_EXIT_ON_OPPOSITE_CROSS_SHORT` | Enables early exit on an opposite cross for the respective direction. |

## Backtest {#backtest}

<!-- backtest-commands -->

The historical example below includes an actual early exit from an opposing crossover.

[See the reproducible run and trade replay](#backtest-report).
