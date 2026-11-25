TradeJS Base provides the packages used by a standard TradeJS project.

## What is included

`basePreset` registers the standard strategies, the exchange adapters, the indicator package and the [opposite positions plugin](/marketplace/opposite-positions). Components included in the preset carry the **base** tag in the [Marketplace](/marketplace).

## Extend the preset

For example, install [Triangle](/marketplace/triangle) and add it to the project configuration. `defineConfig` merges package lists, so the standard strategies stay available alongside Triangle.

```ts
import { defineConfig } from '@tradejs/core/config';
import { basePreset } from '@tradejs/base';

export default defineConfig(basePreset, {
  strategies: ['@tradejs/strategy-triangle'],
});
```

## Configuration keys

| Key | Default value | Purpose |
| --- | --- | --- |
| `strategies` | `basePreset.strategies` | Lists the strategy packages available in the project. |
| `connectors` | `["@tradejs/connectors"]` | Registers the exchange adapters. |
| `indicators` | `["@tradejs/indicators"]` | Registers the built-in indicators. |
| `hooks.beforePlaceOrder` | `basePreset.hooks.beforePlaceOrder` | Registers the check for opposing positions before sending new orders. |

## Backtest {#backtest}

After connecting the preset, try one of its strategies, [MaStrategy](/marketplace/ma-strategy).

<!-- backtest-commands -->
