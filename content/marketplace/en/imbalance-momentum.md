ImbalanceMomentum looks for a directional price gap across three four-hour candles.

## How to read the chart

In the gap mode, the first and third candles leave a gap around part of the middle candle. The middle candle sets the direction.

<!-- signal-chart -->

## When an entry appears

The strategy builds its four-hour candles from closed 15-minute candles aligned to UTC. In the default mode, the gap must cover more than half of the middle candle’s body.

## How the trade closes

The initial stop is three four-hour ATRs from the fill. There is no fixed target. Once price moves three initial stop distances in favor of the trade, a trailing stop can tighten the protection. Moving the stop keeps the position open.

<!-- exit-example -->

## Configuration keys

| Group | Keys | Purpose |
| --- | --- | --- |
| Strategy | `INTERVAL` | Interval used for the source candles. |
| Strategy | `IMBALANCE_MODE` | Selects which three-candle geometry qualifies. |
| Strategy | `MAX_LOSS_VALUE` | Loss budget used to size the position from the initial stop distance. |

## Backtest {#backtest}

Use an uninterrupted 15-minute candle history so the four-hour bars can be assembled correctly.

<!-- backtest-commands -->
