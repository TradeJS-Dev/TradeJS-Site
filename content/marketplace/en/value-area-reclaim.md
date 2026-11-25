ValueAreaReclaim looks for a return to the price range where most recent trading volume was concentrated.

## How to read the chart

The band is the volume area. The marked center shows the price level with the most volume in the profile.

<!-- signal-chart -->

## When an entry appears

Price first leaves the area and then closes back inside it. The strategy checks the time taken to return, the distance to the target and the number of prior entries on that side.

## How the trade closes

The stop is placed beyond the excursion with a buffer. The target is the price level with the most volume. An open position can also close at the holding deadline, or if its entry record cannot be recovered.

<!-- exit-example -->

## Configuration keys

| Group | Keys | Purpose |
| --- | --- | --- |
| Strategy | `VAR_PROFILE_DAYS` | Number of complete UTC days used to build the profile. |
| Strategy | `VAR_VALUE_FRACTION` | Share of traded volume contained in the area. |
| Strategy | `VAR_RECLAIM_BARS` | Maximum wait for a close back inside the area. |
| Strategy | `VAR_ATR_BUFFER` | Distance beyond the price extreme used for the stop, in ATR units. |
| Strategy | `VAR_MAX_HOLD_BARS` | Maximum holding time in execution candles. |

## Backtest {#backtest}

The volume profile needs complete 15-minute history for the selected UTC days. This also applies when evaluating signals hourly.

<!-- backtest-commands -->
