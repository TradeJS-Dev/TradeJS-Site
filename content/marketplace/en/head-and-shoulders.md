HeadAndShoulders looks for the head-and-shoulders pattern. The default settings allow short trades, which are positions taken in anticipation of falling prices. You can enable long entries separately for the inverse pattern.

The strategy is included in a standard TradeJS project. [Try it on historical data](#backtest).

## How to read the chart

The pattern has three peaks. The middle peak is higher and is called the head. The peaks on either side are the shoulders. The neckline connects the two lows between the peaks.

<!-- signal-chart -->

## When an entry appears

1. After the right shoulder, price breaks below the neckline.
2. In the default mode, the strategy waits for one of the next two candles to close below the line. It also checks the volume of the confirming candle.
3. If the checks pass, the strategy signals a short entry. The actual fill price depends on the runtime or backtest settings.

An entry can be skipped when the shoulders differ too much, the break is too weak, or confirmation arrives too late. If the optional AI check is enabled, a signal can also be skipped when the data needed for the check is missing.

## How the trade closes

- **Stop.** The stop sits just above the head. The default buffer is 5% of the pattern height.
- **Target.** The target sits below the neckline. For a short, its default distance from the line equals the pattern height.
- **Early exit.** A confirmed inverse pattern can close an open short. This rule is off by default. Enable it with `HEADSHOULDERS_EXIT_ON_OPPOSITE_PATTERN`.

<!-- head-and-shoulders-exit -->

## Configuration keys

| Group | Keys | Purpose |
| --- | --- | --- |
| Pattern | `HEADSHOULDERS_PIVOT_LOOKBACK` | Number of candles on each side used to confirm a local high or low. |
| Pattern | `HEADSHOULDERS_SHOULDER_TOLERANCE_PCT` | Maximum difference between the shoulders, measured as a percentage of the pattern height. |
| Pattern | `HEADSHOULDERS_MIN_HEAD_PROMINENCE_RATIO` | How far the head must stand out from each shoulder relative to the pattern height. |
| Entry | `INTERVAL` | Candle interval used to look for the pattern and check the breakout. |
| Entry | `HEADSHOULDERS_ENTRY_MODE` | Choose a breakout, a subsequent confirming close, or a return to the neckline followed by a close on the breakout side. |
| Entry | `HEADSHOULDERS_CONFIRMATION_MAX_BARS` | Maximum number of candles to wait after the break in confirmation mode. |
| Entry | `HEADSHOULDERS_MIN_CONFIRMATION_VOLUME_REL` | Minimum volume of the confirming candle as a share of the average over the previous candles. |
| Entry | `HEADSHOULDERS_CONFIRMATION_VOLUME_PERIOD` | Number of previous candles used to calculate that average volume. |
| Entry | `SHORT.enable` | Allows entries that trade a price decline. |
| Entry | `LONG.enable` | Allows entries after a confirmed inverse pattern, for a potential price rise. |
| Position | `MAX_LOSS_VALUE` | Loss budget used to calculate position size from the stop distance and estimated trading costs. |
| Position | `HEADSHOULDERS_STOP_BUFFER_HEIGHT_PCT` | Distance beyond the head for the stop, as a percentage of the pattern height. |
| Position | `HEADSHOULDERS_TARGET_HEIGHT_PCT_SHORT` | Distance from the neckline to the target for a short, as a percentage of the pattern height. |
| Position | `HEADSHOULDERS_TARGET_HEIGHT_PCT_LONG` | Distance from the neckline to the target for a long, as a percentage of the pattern height. |
| Position | `HEADSHOULDERS_EXIT_ON_OPPOSITE_PATTERN` | Requests early closure when a confirmed pattern points in the opposite direction. |

## Backtest {#backtest}

<!-- backtest-commands -->
