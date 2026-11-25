The Hyperliquid adapter supplies public candle history, prices and market data for perpetual contracts.

## Markets and capabilities

Use `hyperliquid` to request candles for a recent period. The exchange keeps a limited candle history, so check which dates the backtest actually covered. Access to private accounts and order execution is unavailable.

[HyperliquidConsensus](/marketplace/hyperliquid-consensus) uses separate historical data about selected accounts. Its strategy page explains how to prepare that data.

## Configuration keys

The package listed here is included in a standard project that uses `basePreset`.

| Key | Default value | Purpose |
| --- | --- | --- |
| `connectors` | `["@tradejs/connectors"]` | Registers the adapters package in `tradejs.config.ts`. |

<span id="historical-data"></span>

## Backtest {#backtest}

The example uses [MaStrategy](/marketplace/ma-strategy) and Bitcoin candles from this adapter.

<!-- backtest-commands -->
