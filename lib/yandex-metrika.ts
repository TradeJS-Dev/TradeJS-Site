export const YANDEX_METRIKA_COUNTER_ID = 107254154;

export type YandexMetrikaGoal = 'copy_npx' | 'open_quickstart';

type YandexMetrika = (
  counterId: number,
  method: 'reachGoal',
  target: YandexMetrikaGoal,
  params?: Record<string, unknown>,
) => void;

export const reachYandexMetrikaGoal = (
  target: YandexMetrikaGoal,
  params?: Record<string, unknown>,
) => {
  if (typeof window === 'undefined') {
    return;
  }

  const ym = (window as Window & { ym?: YandexMetrika }).ym;
  ym?.(YANDEX_METRIKA_COUNTER_ID, 'reachGoal', target, params);
};
