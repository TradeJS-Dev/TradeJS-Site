This plugin can close positions on other symbols that point against a new entry on the same account.

## When it runs

TradeJS checks open positions before sending a new order. A new long can trigger closure of existing shorts on other symbols, and a new short can trigger closure of existing longs. The plugin skips backtests.

## Example

> **Existing ETH short → new BTC long → TradeJS requests closure of the ETH short before sending the BTC order.**
>
> Both trades use the same exchange account. The BTC strategy has the plugin enabled.

## Configuration keys

| Key | Default value | Purpose |
| --- | --- | --- |
| `CLOSE_OPPOSITE_POSITIONS` | `false` | Set to `true` on the strategy whose new entry should trigger the check. |
| `hooks.beforePlaceOrder` | — | Registers the plugin before new orders. The standard project already registers it through `basePreset`. |

## Enable it for a strategy

Enable `CLOSE_OPPOSITE_POSITIONS` in that strategy’s runtime settings. If your project does not use `basePreset`, add the connection example to `tradejs.config.ts`. [Find the strategy settings in a deployment](https://docs.tradejs.dev/getting-started/run-strategy-in-production).
