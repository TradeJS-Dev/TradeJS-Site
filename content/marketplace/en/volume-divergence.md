VolumeDivergence looks for a possible reversal when price and volume stop moving together.

## How to read the chart

The upper chart shows two turning points in price. The lower chart compares volume after scaling it to its recent range.

<!-- signal-chart -->

## When an entry appears

A lower price low with a higher volume low can point to a rise. A higher price high with a lower volume high can point to a fall. The strategy checks the spacing, confirmation and risk before entering.

## How the trade closes

The stop and final target protect the main position. You can add an earlier target to close part of the trade. The default partial share is zero, so this option is off.

<!-- exit-example -->

## Configuration keys

| Group | Keys | Purpose |
| --- | --- | --- |
| Strategy | `NORMALIZATION_LENGTH` | Window used to scale volume against recent candles. |
| Strategy | `VOLUME_DIVERGENCE_PIVOT_SOURCE` | Chooses whether turning points are found on volume or price. |
| Strategy | `VOLUME_DIVERGENCE_TARGET_R_MULT` | Final target distance in multiples of initial risk. |
| Strategy | `VOLUME_DIVERGENCE_PARTIAL_EXIT_RATE` | Share of the position closed at the earlier target. Zero disables it. |
| Strategy | `VOLUME_DIVERGENCE_PARTIAL_EXIT_R_MULT` | Earlier target distance relative to the initial stop. It must be below the final target. |

## Backtest {#backtest}

Use candles with reliable volume and compare volume at the aligned turning points.

<!-- backtest-commands -->
