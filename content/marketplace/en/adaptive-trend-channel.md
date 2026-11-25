AdaptiveTrendChannel follows the current price direction using an upper and a lower boundary. It uses smoothed candle prices to check whether the previous direction has lost its support or resistance.

The package is included in a standard TradeJS project. [Save a configuration for a backtest](https://docs.tradejs.dev/getting-started/backtest-config).

## How to read the chart

In a downtrend, the active boundary runs above the candles. The chart shows it move below price after an upward reversal.

<!-- signal-chart -->

## When an entry appears

When the smoothed lows and close move above the relevant resistance levels, the channel flips upward. The downward flip uses the corresponding support checks. The default breakout filter requires at least 1.2 ATR of distance for a long and 0.9 ATR for a short. ATR measures the typical size of price moves. If additional confirmation is set, the new direction must hold through those candles before an entry can qualify.

For a long, the new lower boundary sets the initial stop. For a short, the new upper boundary serves that role. The default target is twice the distance from entry to the stop. A larger stop distance reduces position size for the same loss budget.

## How the trade closes

The initial stop and target remain part of the order plan. While the position is open, the strategy also checks whether the price has closed through the active channel boundary against the position, or whether the channel has confirmed an opposite entry signal. The active boundary can move away from the initial stop, so the strategy can request a close before that stop is reached.

<!-- channel-exits -->

With the default exit confirmation of zero, the trigger candle is enough. If the setting is one or more, the break or the opposite channel direction must persist for that many additional closed candles. A channel break takes precedence if both conditions occur on the same candle.

## Configuration keys

| Group | Keys | Purpose |
| --- | --- | --- |
| Channel | `ADAPTIVE_TREND_CHANNEL_REGRESSION_BARS` | Number of candles used to estimate the direction and slope. |
| Channel | `ADAPTIVE_TREND_CHANNEL_ENVELOPE_BARS` | Number of recent regression values used to build the envelope. |
| Channel | `ADAPTIVE_TREND_CHANNEL_ATR_STRETCH` | Multiplier for the volatility band around the center line. |
| Channel | `ADAPTIVE_TREND_CHANNEL_VOLATILITY_LOOKBACK` | Number of candles used to calculate ATR for the channel. |
| Channel | `ADAPTIVE_TREND_CHANNEL_MIN_CHANNEL_WIDTH_PCT` | Reject a signal if the channel is narrower than this percentage. Zero turns off the check. |
| Channel | `ADAPTIVE_TREND_CHANNEL_MAX_CHANNEL_WIDTH_PCT` | Reject a signal if the channel is wider than this percentage. Zero turns off the check. |
| Entry | `ADAPTIVE_TREND_CHANNEL_MIN_BREAKOUT_DISTANCE_PCT` | Minimum distance from the channel center line, in percent. Zero turns off this check. |
| Entry | `ADAPTIVE_TREND_CHANNEL_MAX_BREAKOUT_DISTANCE_PCT` | Maximum distance from the channel center line, in percent. Zero turns off this check. |
| Entry | `ADAPTIVE_TREND_CHANNEL_MIN_BREAKOUT_DISTANCE_ATR` | Minimum distance from the channel center line in ATR units. A side-specific setting overrides it. |
| Entry | `ADAPTIVE_TREND_CHANNEL_MIN_BREAKOUT_DISTANCE_ATR_LONG` | Minimum breakout distance for a long signal in ATR units. |
| Entry | `ADAPTIVE_TREND_CHANNEL_MIN_BREAKOUT_DISTANCE_ATR_SHORT` | Minimum breakout distance for a short signal in ATR units. |
| Entry | `ADAPTIVE_TREND_CHANNEL_MAX_BREAKOUT_DISTANCE_ATR` | Maximum breakout distance in ATR units. Zero turns off this check. |
| Entry | `ADAPTIVE_TREND_CHANNEL_MIN_VOLUME_REL20` | Minimum volume relative to the average of 20 candles. Zero turns off this check. |
| Entry | `ADAPTIVE_TREND_CHANNEL_REQUIRE_CONTEXT_ALIGNMENT` | Checks whether market conditions support the direction of the signal. |
| Entry | `ADAPTIVE_TREND_CHANNEL_MIN_CONTEXT_ALIGNMENTS` | How many checks must agree when market context confirmation is enabled. The checks include the trend, local range and benchmark. |
| Entry | `ADAPTIVE_TREND_CHANNEL_FLIP_CONFIRMATION_BARS` | Additional candles the new direction must hold before entry. |
| Entry | `ADAPTIVE_TREND_CHANNEL_REQUIRE_PRICE_ACCEPTANCE` | Requires a close past a recent high for a long or below a recent low for a short. |
| Exit and risk | `ADAPTIVE_TREND_CHANNEL_TARGET_R_MULT` | Distance to the target as a multiple of the initial distance to the stop. |
| Exit and risk | `ADAPTIVE_TREND_CHANNEL_EXIT_ON_CHANNEL_BREAK` | Requests a close when a candle closes at or beyond the active boundary against the position. |
| Exit and risk | `ADAPTIVE_TREND_CHANNEL_EXIT_ON_OPPOSITE_FLIP` | Requests a close when the channel confirms a signal against the position. |
| Exit and risk | `ADAPTIVE_TREND_CHANNEL_EXIT_CONFIRMATION_BARS` | Additional candles for an exit rule to hold. Zero means the trigger candle is enough. |
| Exit and risk | `ADAPTIVE_TREND_CHANNEL_EXIT_CONFIRMATION_BARS_LONG` | Overrides exit confirmation for longs. If unset, the shared value applies. |
| Exit and risk | `ADAPTIVE_TREND_CHANNEL_EXIT_CONFIRMATION_BARS_SHORT` | Overrides exit confirmation for shorts. If unset, the shared value applies. |
| Exit and risk | `ADAPTIVE_TREND_CHANNEL_REENTRY_COOLDOWN_MS` | Minimum time between entry signals, in milliseconds. The package default is 24 hours. |
| Exit and risk | `MAX_LOSS_VALUE` | Loss budget used to size a position from its stop distance and estimated costs. |
| Exit and risk | `LONG.enable`, `SHORT.enable` | Enables entry signals for the respective direction. |
| Exit and risk | `LONG.minRiskRatio`, `SHORT.minRiskRatio` | Minimum reward-to-risk ratio for each direction after estimated costs. |
| Candles and chart | `INTERVAL` | Timeframe of the candles used to evaluate signals. |
| Candles and chart | `ADAPTIVE_TREND_CHANNEL_MAX_FIGURE_POINTS` | Maximum number of points retained in channel drawings. |

## Backtest {#backtest}

<!-- backtest-commands -->
