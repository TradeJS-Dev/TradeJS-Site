The Coinbase adapter supplies spot candles and prices for backtests and strategy calculations. It reads public data.

## Markets and capabilities

Use a TradeJS symbol such as `BTCUSDT`. The adapter translates it to `BTC-USD`, so the candles are quoted in US dollars. Keep that difference in mind when comparing the same strategy across exchanges. Order execution is unavailable.

## Configuration keys

The package listed here is included in a standard project that uses `basePreset`.

| Key | Default value | Purpose |
| --- | --- | --- |
| `connectors` | `["@tradejs/connectors"]` | Registers the adapters package in `tradejs.config.ts`. |
| `COINBASE_BASE_URL` | `https://api.exchange.coinbase.com` | Overrides the Coinbase public API address if set in the project environment. |

<span id="choose-a-symbol"></span>

## Backtest {#backtest}

The example uses [MaStrategy](/marketplace/ma-strategy) and Bitcoin candles from this adapter.

<!-- backtest-commands -->
