import type { Locale } from '@/lib/i18n';
import { StrategyPriceExample } from './index';
import type { StrategyExample } from './examples';

const boundaryBreak: StrategyExample = {
  closes: [40, 48, 53, 58, 66, 71, 67, 63, 55, 61],
  guides: [
    { points: [[0, 28], [4, 44], [6, 52], [8, 59], [9, 60]], color: 'blue', solid: true },
    { points: [[0, 28], [9, 28]] },
  ],
  markers: [
    {
      bar: 5,
      en: 'The blue lower boundary rises with the channel. The dashed line still marks the initial stop.',
      ru: 'Синяя нижняя граница поднимается вместе с каналом. Пунктир остаётся на уровне начального стопа.',
    },
    {
      bar: 8,
      en: 'The candle closes below the active boundary while the initial stop is still below price. The strategy requests a close.',
      ru: 'Свеча закрывается ниже действующей границы. Цена ещё выше начального стопа, но стратегия уже запрашивает закрытие.',
    },
  ],
};

const oppositeFlip: StrategyExample = {
  closes: [44, 49, 58, 68, 73, 69, 65, 62, 56, 49, 47],
  guides: [
    { points: [[0, 30], [4, 42], [6, 48]], color: 'blue', solid: true },
    { points: [[7, 73], [8, 68], [10, 61]], color: 'violet', solid: true },
    { points: [[7, 40], [8, 35], [10, 28]], color: 'violet' },
  ],
  markers: [
    {
      bar: 4,
      en: 'A long is open while the blue lower boundary follows the upward move.',
      ru: 'Лонг открыт, синяя нижняя граница следует за ростом.',
    },
    {
      bar: 7,
      en: 'The confirmed downward signal turns the channel purple. The close remains above the new lower boundary, but the opposite signal is enough to request an exit.',
      ru: 'Подтверждается сигнал вниз, и канал становится фиолетовым. Свеча всё ещё закрылась выше новой нижней границы, но для выхода достаточно встречного сигнала.',
    },
  ],
};

export function AdaptiveTrendChannelExits({ locale }: { locale: Locale }) {
  return (
    <div id="exit-example" className="marketplace-exit-example">
      <h3>{locale === 'ru' ? 'Закрытие за действующей границей' : 'Close beyond the active boundary'}</h3>
      <StrategyPriceExample example={boundaryBreak} locale={locale} />
      <h3>{locale === 'ru' ? 'Встречный разворот канала' : 'Opposite channel flip'}</h3>
      <StrategyPriceExample example={oppositeFlip} locale={locale} />
    </div>
  );
}
