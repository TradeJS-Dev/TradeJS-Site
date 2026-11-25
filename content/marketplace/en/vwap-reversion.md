VwapReversion looks for price to reverse toward the session’s volume-weighted average, called VWAP.

## How to read the chart

The center line gives more weight to candles with higher volume. The surrounding bands show how far price has moved from that average during the UTC day.

<!-- signal-chart -->

## When an entry appears

Price first closes outside a band and then closes back inside the allowed area, on the same side of the center line. By default the price must also reverse toward VWAP. This prevents a band that widens around the price from counting on its own.

## How the trade closes

The target is VWAP at confirmation. The stop sits beyond the farthest excursion plus a buffer. A holding deadline, new UTC day or gap in intraday data can close the trade early.

<!-- exit-example -->

## Configuration keys

| Group | Keys | Purpose |
| --- | --- | --- |
| Strategy | `VWAP_BAND_MULT` | Distance of the outer bands from VWAP, measured in standard deviations. |
| Strategy | `VWAP_MAX_EXCURSION_BARS` | Maximum wait for price to come back after leaving the band. |
| Strategy | `VWAP_REQUIRE_PRICE_REVERSAL` | Requires price to move back toward the mean on confirmation. |
| Strategy | `VWAP_STOP_BUFFER_PCT` | Stop buffer beyond the excursion, expressed in percent. |
| Strategy | `VWAP_MAX_HOLD_BARS` | Maximum holding time in execution candles. |

## Backtest {#backtest}

Use continuous candles with volume from the UTC session. The package supports 15-minute and hourly intervals. Its backtests require entry at the close with zero delay.

<!-- backtest-commands -->
