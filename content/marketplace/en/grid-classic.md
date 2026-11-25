GridClassic places several entry levels around a sideways price range.

## How to read the chart

The chart shows the two edges and the midpoint of the range. The initial entry and any additions belong to the same position.

<!-- signal-chart -->

## When an entry appears

Depending on the mode, the strategy looks for a bounce back inside the range, a continuation after a break, or a reversal after a failed break. Each addition must satisfy the entry and risk rules.

## How the trade closes

The stop protects the combined position. The target can be the midpoint or the opposite edge, depending on the mode. A failed bounce, broken range or holding deadline can end the trade earlier.

<!-- exit-example -->

## Configuration keys

| Group | Keys | Purpose |
| --- | --- | --- |
| Strategy | `GRIDCLASSIC_MODE` | Selects the range trading mode. |
| Strategy | `GRIDCLASSIC_LOOKBACK_BARS` | Candle window used to identify the range. |
| Strategy | `GRIDCLASSIC_LEVELS` | Number of grid levels. |
| Strategy | `GRIDCLASSIC_TP_MODE` | Chooses where to place the target within the range. |
| Strategy | `GRIDCLASSIC_MAX_HOLD_BARS` | Maximum holding time, measured in candles. |

## Backtest {#backtest}

Use the same mode when comparing runs. A bounce and a breakout continuation follow different rules.

<!-- backtest-commands -->
