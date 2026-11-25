TradingPatterns checks Diamond, Flag, Gartley and HeadAndShoulders in one strategy.

## How to read the chart

Each signal belongs to one of the four figures. The pattern determines which points and levels appear on its chart.

<!-- signal-chart -->

## When an entry appears

On each candle the strategy checks all enabled patterns. If several qualify together, their configured priority decides which one gets the entry.

## How the trade closes

The pattern that opens the position sets its stop, target and early-exit rule. On the exit example, a confirmed opposite flag can close a position that was opened by Flag.

<!-- exit-example -->

## Configuration keys

| Group | Keys | Purpose |
| --- | --- | --- |
| Strategy | `TRADING_PATTERNS_PRIORITY` | Priority order when multiple patterns qualify on one candle. |
| Strategy | `TRADING_PATTERNS.<name>.enable` | Enables the named pattern inside this strategy. |
| Strategy | `LONG.enable`, `SHORT.enable` | Enables the trade direction for the combined strategy. |
| Strategy | `FLAG_EXIT_ON_OPPOSITE_PATTERN` | Allows an opposite flag to close a position opened by Flag. |
| Strategy | `HEADSHOULDERS_EXIT_ON_OPPOSITE_PATTERN` | Allows an opposite head-and-shoulders pattern to close a position opened by that pattern. |

## Backtest {#backtest}

Start at the default one-hour interval. The package also accepts 15-minute candles. In a comparison, record which patterns were enabled and in what order.

<!-- backtest-commands -->
