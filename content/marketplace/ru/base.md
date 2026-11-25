TradeJS Base подключает пакеты, которые используются в стандартном проекте TradeJS.

## Состав набора

`basePreset` подключает стандартные стратегии, адаптеры бирж, индикаторы и [плагин закрытия встречных позиций](/marketplace/opposite-positions). Компоненты из набора отмечены тегом **base** в [Marketplace](/marketplace).

## Добавление компонентов

Например, установите [Triangle](/marketplace/triangle) и добавьте её в настройки проекта. `defineConfig` объединяет списки пакетов, поэтому вместе с Triangle будут доступны стандартные стратегии.

```ts
import { defineConfig } from '@tradejs/core/config';
import { basePreset } from '@tradejs/base';

export default defineConfig(basePreset, {
  strategies: ['@tradejs/strategy-triangle'],
});
```

## Ключи конфигурации

| Ключ | Значение по умолчанию | Назначение |
| --- | --- | --- |
| `strategies` | `basePreset.strategies` | Список пакетов стратегий, доступных в проекте. |
| `connectors` | `["@tradejs/connectors"]` | Подключает адаптеры бирж. |
| `indicators` | `["@tradejs/indicators"]` | Подключает штатные индикаторы. |
| `hooks.beforePlaceOrder` | `basePreset.hooks.beforePlaceOrder` | Подключает проверку встречных позиций перед новым ордером. |

## Бэктест {#backtest}

После подключения набора попробуйте [MaStrategy](/marketplace/ma-strategy), которая в него входит.

<!-- backtest-commands -->
