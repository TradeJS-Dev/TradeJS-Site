import type { Locale } from '@/lib/i18n';
import { StrategyPriceExample } from './index';
import type { StrategyExample } from './examples';

const inversePattern: StrategyExample = {
  closes: [65, 58, 50, 41, 48, 55, 44, 31, 43, 55, 48, 42, 49, 53, 60, 63, 64],
  wicks: { 3: [38, 52], 5: [47, 58], 7: [28, 43], 9: [48, 58], 11: [39, 49] },
  guides: [
    { points: [[5, 58], [16, 58]], solid: true },
    { points: [[0, 76], [16, 76]], color: 'violet' },
  ],
  markers: [
    {
      bar: 11,
      en: 'A short is already open. The middle low is deeper than both shoulders. The gold neckline now joins the highs.',
      ru: 'Короткая позиция уже открыта. Средняя впадина глубже двух соседних. Золотая линия шеи теперь соединяет вершины.',
    },
    {
      bar: 14,
      en: 'Price breaks above the inverse pattern’s neckline.',
      ru: 'Цена пробивает линию шеи перевёрнутой фигуры вверх.',
    },
    {
      bar: 15,
      en: 'The candle confirms the opposing pattern before price reaches the purple stop. With early exit enabled, the strategy requests closure.',
      ru: 'Свеча подтверждает встречную фигуру до достижения фиолетового стопа. При включённом правиле стратегия запрашивает закрытие.',
    },
  ],
};

export function HeadAndShouldersExit({ locale }: { locale: Locale }) {
  return (
    <div id="exit-example" className="marketplace-exit-example">
      <h3>{locale === 'ru' ? 'Досрочный выход по перевёрнутой фигуре' : 'Early exit on an inverse pattern'}</h3>
      <StrategyPriceExample example={inversePattern} locale={locale} chartId="head-and-shoulders-exit" />
    </div>
  );
}
