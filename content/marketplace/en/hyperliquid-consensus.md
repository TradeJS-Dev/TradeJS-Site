HyperliquidConsensus looks for agreement in the position changes of a selected group of Hyperliquid accounts.

## How to read the chart

The price chart shows when the signal appeared. The panel below it shows the share of tracked opening volume in the long direction.

<!-- signal-chart -->

## When an entry appears

The strategy checks that data is recent and comes from enough tracked accounts. It enters only when the total opening volume and its directional share meet the thresholds.

## How the trade closes

The stop allows for market volatility. The target is calculated from the stop distance. A sufficient move in the opposite direction or a significant reduction in tracked positions can close the trade early.

<!-- exit-example -->

## Configuration keys

| Group | Keys | Purpose |
| --- | --- | --- |
| Strategy | `HLC_MIN_UNIQUE_WHALES` | Minimum number of tracked accounts needed to consider an entry. |
| Strategy | `HLC_MAX_CONTEXT_AGE_MS` | Maximum age of the account data in milliseconds. |
| Strategy | `HLC_MIN_TOTAL_ENTRY_NOTIONAL_USD` | Minimum total value of openings, in USD. |
| Strategy | `HLC_LONG_MIN_ENTRY_SHARE` | Minimum long share of opening volume for a long entry. |
| Strategy | `HLC_EXIT_ON_OPPOSITE_CONSENSUS` | Allows a close if tracked accounts meet the opposite thresholds. |
| Strategy | `HLC_EXIT_ON_POSITION_REDUCTION` | Allows a close on a qualifying reduction of tracked positions. |

## Backtest {#backtest}

The default interval is five minutes. Before a test, [load the Hyperliquid position data](https://docs.tradejs.dev/operations/derivatives-ingest) and verify its coverage for the selected dates.

<!-- backtest-commands -->
