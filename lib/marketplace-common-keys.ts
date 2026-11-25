import type { Locale } from './i18n';

const commonKeys: Record<string, Record<Locale, string>> = {
  'ENV': {
    en: "Selects the execution environment, such as backtest or live runtime.",
    ru: "Выбирает режим выполнения, например бэктест или рабочий запуск.",
  },
  'INTERVAL': {
    en: "Sets the candle interval at which the strategy evaluates signals.",
    ru: "Задаёт интервал свечей, на котором стратегия оценивает сигналы.",
  },
  'MAKE_ORDERS': {
    en: "Allows the selected runtime to submit orders when its execution settings permit it.",
    ru: "Разрешает выставлять ордера в выбранном режиме, если настройки запуска это допускают.",
  },
  'CLOSE_OPPOSITE_POSITIONS': {
    en: "Allows the project hook to close positions in the opposite direction before an entry.",
    ru: "Разрешает хуку проекта закрывать встречные позиции перед входом.",
  },
  'BACKTEST_PRICE_MODE': {
    en: "Selects the candle price used for a simulated delayed entry.",
    ru: "Выбирает цену свечи для исполнения отложенного входа в бэктесте.",
  },
  'BACKTEST_ENTRY_DELAY_BARS': {
    en: "Delays simulated entry by this number of closed candles after the signal.",
    ru: "Откладывает исполнение входа в бэктесте на указанное число закрытых свечей после сигнала.",
  },
  'AI_ENABLED': {
    en: "Enables the optional AI check for entry signals.",
    ru: "Включает необязательную AI-проверку сигналов входа.",
  },
  'AI_MODE': {
    en: "Selects the type of AI check used for an entry signal.",
    ru: "Выбирает тип AI-проверки сигнала входа.",
  },
  'MIN_AI_QUALITY': {
    en: "Sets the lowest AI quality score that can pass the entry check.",
    ru: "Задаёт минимальную оценку сигнала, при которой AI-проверка пропустит вход.",
  },
  'ML_ENABLED': {
    en: "Enables the optional machine-learning check for entry signals.",
    ru: "Включает необязательную проверку сигналов входа моделью машинного обучения.",
  },
  'ML_THRESHOLD': {
    en: "Sets the threshold the model score must meet for entry.",
    ru: "Задаёт порог оценки модели для допуска к входу.",
  },
  'RISK_FEE_RATE': {
    en: "One-way fee estimate used when calculating position size and reward-to-risk.",
    ru: "Оценка комиссии за одно исполнение для расчёта размера позиции и отношения цели к риску.",
  },
  'RISK_SLIPPAGE_BPS': {
    en: "Expected difference between planned and executed price, in basis points.",
    ru: "Оценка разницы между запланированной и фактической ценой в базисных пунктах.",
  },
  'RISK_MARKET_IMPACT_BPS': {
    en: "Estimated effect of an order on price, in basis points.",
    ru: "Оценка влияния ордера на цену в базисных пунктах.",
  },
  'MAX_LOSS_VALUE': {
    en: "Loss budget used when calculating position size.",
    ru: "Лимит убытка для расчёта размера позиции.",
  },
  'MA_FAST': {
    en: "Period of the fast moving average, in candles.",
    ru: "Период быстрой скользящей средней в свечах.",
  },
  'MA_MEDIUM': {
    en: "Period of the medium moving average, in candles.",
    ru: "Период средней скользящей средней в свечах.",
  },
  'MA_SLOW': {
    en: "Period of the slow moving average, in candles.",
    ru: "Период медленной скользящей средней в свечах.",
  },
  'OBV_SMA': {
    en: "Smoothing window for the on-balance volume indicator.",
    ru: "Окно сглаживания индикатора балансового объёма.",
  },
  'ATR': {
    en: "Number of candles used to estimate the typical price range.",
    ru: "Число свечей для оценки типичного диапазона движения цены.",
  },
  'ATR_PCT_SHORT': {
    en: "Short measurement window for ATR as a percentage of price.",
    ru: "Короткое окно измерения ATR в процентах от цены.",
  },
  'ATR_PCT_LONG': {
    en: "Long measurement window for ATR as a percentage of price.",
    ru: "Длинное окно измерения ATR в процентах от цены.",
  },
  'BB': {
    en: "Number of candles used to calculate Bollinger Bands.",
    ru: "Число свечей для расчёта полос Боллинджера.",
  },
  'BB_STD': {
    en: "Width of the Bollinger Bands in standard deviations.",
    ru: "Ширина полос Боллинджера в стандартных отклонениях.",
  },
  'MACD_FAST': {
    en: "Period of the fast average used in MACD.",
    ru: "Период быстрой средней для MACD.",
  },
  'MACD_SLOW': {
    en: "Period of the slow average used in MACD.",
    ru: "Период медленной средней для MACD.",
  },
  'MACD_SIGNAL': {
    en: "Smoothing period of the MACD signal line.",
    ru: "Период сглаживания сигнальной линии MACD.",
  },
  'LONG.enable': {
    en: "Allows long entry signals.",
    ru: "Разрешает сигналы входа в лонг.",
  },
  'SHORT.enable': {
    en: "Allows short entry signals.",
    ru: "Разрешает сигналы входа в шорт.",
  },
  'LONG.direction': {
    en: "Order direction assigned to this entry branch.",
    ru: "Направление ордера для этого сценария входа.",
  },
  'SHORT.direction': {
    en: "Order direction assigned to this entry branch.",
    ru: "Направление ордера для этого сценария входа.",
  },
  'LONG.minRiskRatio': {
    en: "Minimum reward-to-risk ratio for a long entry.",
    ru: "Минимальное отношение цели к риску для лонга.",
  },
  'SHORT.minRiskRatio': {
    en: "Minimum reward-to-risk ratio for a short entry.",
    ru: "Минимальное отношение цели к риску для шорта.",
  },
};

export function explainCommonKey(key: string, locale: Locale) {
  return commonKeys[key]?.[locale];
}
