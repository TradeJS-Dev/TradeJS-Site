The package provides built-in indicators. TradeJS can also load indicators from other packages registered in your project.

## What the package provides

Open the **Indicators** menu on a chart to see the available indicators. For example, a moving average shows the price trend by smoothing recent candles. Displaying it on the chart leaves the strategy’s trading rules as configured.

## Add a custom indicator

Export `indicatorEntries` from your package using `defineIndicatorPlugin` from `@tradejs/core/config`. Add the package to `indicators` in `tradejs.config.ts` and restart TradeJS.

## Configuration keys

| Key | Default value | Purpose |
| --- | --- | --- |
| `indicators` | `["@tradejs/indicators"]` | Lists the indicator packages to load. The default shown is from `basePreset`. |
| `historyKey` | — | In an indicator definition, names the candle history field used to store the result. Use the same key in its chart renderer. |
| `renderer` | — | Describes how the indicator appears on the chart. |

## Check the result

Enable the new indicator from the chart menu. If nothing appears, check that the calculation returns a number, enough candles are available and the renderer reads the expected history field. [See the full TypeScript example](https://docs.tradejs.dev/indicators/authoring).
