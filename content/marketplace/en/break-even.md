This plugin moves the protective stop toward the entry price once an open position has moved far enough in its favor.

## When it runs

TradeJS checks the price at each candle close. With the standard settings, the move must cover half the distance from entry to the current stop. When that distance is unavailable, the plugin uses the risk setting for the trade direction. It leaves an existing stop at or beyond entry in place.

## Example

> **Entry 100 → initial stop 96 → candle closes at 102 → stop moves to 100.**
>
> The favorable move of 2 is half the initial distance to the stop. The position stays open. Fees and slippage can still result in a loss.

## Configuration keys

| Key | Default value | Purpose |
| --- | --- | --- |
| `triggerRiskMultiplier` | `0.5` | Favorable move required, as a multiple of the distance to the stop. |
| `stopProfitMultiplier` | `0` | Places the stop at entry. A positive value moves it toward the take-profit by that fraction of the distance from entry to target. |
| `isEnabled` | `() => true` | Optional function that selects which strategy configurations use the plugin. |
