MarketFlushReversal looks for a reversal after a sharp move across the wider market.

## How to read the chart

The sharp move is the first part of the example. The later candle shows the instrument starting to move back.

<!-- signal-chart -->

## When an entry appears

The instrument’s candle alone is not enough. The strategy also checks broader market activity, including liquidations and imbalances. Depending on the entry mode, it can wait for a later confirmation.

## How the trade closes

The stop includes a volatility buffer and the target depends on the stop distance. An opposite confirmed market reversal can close the trade early if enabled.

<!-- exit-example -->

## Configuration keys

| Group | Keys | Purpose |
| --- | --- | --- |
| Strategy | `MFR_ENTRY_MODE` | Chooses whether to act on the first valid signal or wait for confirmation. |
| Strategy | `MFR_TARGET_R_MULT` | Target distance as a multiple of the stop distance. |
| Strategy | `MAX_LOSS_VALUE` | Loss budget for position sizing. |
| Strategy | `MFR_EXIT_ON_OPPOSITE_SIGNAL` | Allows an early exit on an opposite confirmed market reversal. |

## Backtest {#backtest}

Before testing, check that the shared market data covers the same period as the candles.

<!-- backtest-commands -->
