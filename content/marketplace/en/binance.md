The Binance adapter supplies spot candles and prices for backtests and strategy calculations.

## Markets and capabilities

Use `binance` to test a strategy on a spot pair such as `BTCUSDT`. The adapter reads public data and has no order execution.

## Configuration keys

The package listed here is included in a standard project that uses `basePreset`.

| Key | Default value | Purpose |
| --- | --- | --- |
| `connectors` | `["@tradejs/connectors"]` | Registers the adapters package in `tradejs.config.ts`. |

<span id="use-it-in-a-backtest"></span>

## Backtest {#backtest}

The example uses [MaStrategy](/marketplace/ma-strategy) and Bitcoin candles from this adapter.

<!-- backtest-commands -->
