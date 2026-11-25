Bybit supplies candles for USDT perpetual contracts. TradeJS can also use it to read positions and send orders for a connected Bybit account.

## Markets and capabilities

Use `bybit` when selecting the data source. A historical run only needs public candles.

## Connect a trading account

Add a Bybit account in TradeJS and reference its `accountId` in the deployment. Bybit limits the size and leverage of an order. TradeJS can block entry if it cannot confirm leverage or protection. [Connect and verify a trading account](https://docs.tradejs.dev/getting-started/run-strategy-in-production).

## Configuration keys

The package listed here is included in a standard project that uses `basePreset`.

| Key | Default value | Purpose |
| --- | --- | --- |
| `connectors` | `["@tradejs/connectors"]` | Registers the adapters package in `tradejs.config.ts`. |
| `connectorName` | — | Select `bybit` in a runtime deployment. |
| `accountId` | — | Selects the saved account used for live execution. |

<span id="try-it-on-historical-data"></span>

## Backtest {#backtest}

The example uses [MaStrategy](/marketplace/ma-strategy) and Bitcoin candles from this adapter.

<!-- backtest-commands -->
