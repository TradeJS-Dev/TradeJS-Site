StructureZones looks for a price bounce or break at a zone built from recent highs and lows.

## How to read the chart

The shaded band marks a price area rather than a single level. The candle at its edge shows the reaction the strategy evaluates.

<!-- signal-chart -->

## When an entry appears

Depending on the allowed types, a move away from the zone or a breakout can qualify. The strategy also checks the quality of the zone and of the confirming candle.

## How the trade closes

The stop sits outside the relevant zone, and the target is calculated from the risk distance. A new signal against the position can close it early if enabled.

<!-- exit-example -->

## Configuration keys

| Group | Keys | Purpose |
| --- | --- | --- |
| Strategy | `STRUCTURE_ZONES_TARGET_R_MULT` | Target distance measured against the initial stop distance. |
| Strategy | `STRUCTURE_ZONES_COOLDOWN_HOURS` | Minimum wait between entries, in hours. |
| Strategy | `STRUCTURE_ZONES_EXIT_ON_OPPOSITE_SIGNAL` | Allows a new opposite zone signal to close the position. |
| Strategy | `MAX_LOSS_VALUE` | Loss budget used to choose position size. |

## Backtest {#backtest}

Check which type of signal opened the trade. A bounce and a breakout can come from the same zone but mean different things.

<!-- backtest-commands -->
