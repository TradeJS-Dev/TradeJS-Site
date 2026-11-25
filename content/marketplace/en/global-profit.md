This plugin can close open positions together when their combined unrealized profit reaches a threshold.

## When it runs

TradeJS checks the account before looking for new signals. If the total profit on its open positions reaches the threshold, the plugin requests closure for each open position and stops that signal run.

## Threshold

The threshold is the average positive loss limit across the configured strategies multiplied by `profitRiskMultiplier`.

> **Average loss limit 2 × multiplier 5 = profit threshold 10.**
>
> With the settings in the connection panel, positions showing +12 and −2 reach the threshold together.

## Configuration keys

| Key | Default value | Purpose |
| --- | --- | --- |
| `profitRiskMultiplier` | `4` | Multiplies the average loss limit to set the account profit threshold. The connection example sets it to `5`. |
| `getStrategyDefaultConfig` | — | Optional function supplying strategy defaults when resolving the loss limit. |
| `MAX_LOSS_VALUE` | — | Loss limit supplied by each strategy. The plugin averages the available positive values. |

## When a close fails

The plugin needs an adapter that reads profit on open positions and can close them. If the adapter cannot confirm a close, the current signal run still stops. Check the runtime log and the remaining positions.
