import type { Locale } from './i18n';

export type ExitOutcome = 'close' | 'partial' | 'protect';
export type ExitPlot = 'time' | 'cross' | 'line' | 'trail' | 'partial' | 'opposite' | 'zone' | 'retest' | 'protect' | 'context';

export type ExitExample = {
  trigger: Record<Locale, string>;
  keys: string[];
  outcome: ExitOutcome;
  plot?: ExitPlot;
};

export const exitExamples: Record<string, ExitExample> = {
  'head-and-shoulders': {
    trigger: {
      en: "An opposite head-and-shoulders pattern confirms while the position is open.",
      ru: "Пока позиция открыта, подтверждается фигура «голова и плечи» в другую сторону.",
    },
    keys: ["HEADSHOULDERS_EXIT_ON_OPPOSITE_PATTERN"],
    outcome: 'close',
  },
  'breakout': {
    trigger: {
      en: "The score confirms an opposite entry, or the moving-average trend turns against the position.",
      ru: "Оценка подтверждает встречный вход или тренд по скользящим средним разворачивается против позиции.",
    },
    keys: [],
    outcome: 'close',
    plot: 'opposite',
  },
  'triangle': {
    trigger: {
      en: "A confirmed break of a triangle points against the open position.",
      ru: "Подтверждается пробой границы треугольника против открытой позиции.",
    },
    keys: ["TRIANGLE_EXIT_ON_OPPOSITE_PATTERN"],
    outcome: 'close',
    plot: 'opposite',
  },
  'adaptive-momentum-ribbon': {
    trigger: {
      en: "The ribbon gives an opposite signal, or the active setup is invalidated.",
      ru: "Лента даёт встречный сигнал или условия текущего сигнала перестают выполняться.",
    },
    keys: ["AMR_EXIT_ON_OPPOSITE_SIGNAL","AMR_EXIT_ON_INVALIDATION"],
    outcome: 'close',
    plot: 'opposite',
  },
  'adaptive-trend-channel': {
    trigger: {
      en: "Price breaks the active channel boundary against the position, or the channel flips the other way.",
      ru: "Цена пробивает границу рабочего канала против позиции или канал разворачивается.",
    },
    keys: ["ADAPTIVE_TREND_CHANNEL_EXIT_ON_CHANNEL_BREAK","ADAPTIVE_TREND_CHANNEL_EXIT_ON_OPPOSITE_FLIP","ADAPTIVE_TREND_CHANNEL_EXIT_CONFIRMATION_BARS"],
    outcome: 'close',
  },
  'crab': {
    trigger: {
      en: "The last pivot of an opposite Crab pattern is confirmed.",
      ru: "Подтверждается последняя точка встречной фигуры Crab.",
    },
    keys: ["CRAB_EXIT_ON_OPPOSITE_PATTERN"],
    outcome: 'close',
    plot: 'opposite',
  },
  'cup-and-handle': {
    trigger: {
      en: "A cup and handle in the opposite direction confirms a break.",
      ru: "Подтверждается пробой «чашки с ручкой» в противоположную сторону.",
    },
    keys: ["CUPHANDLE_EXIT_ON_OPPOSITE_PATTERN"],
    outcome: 'close',
    plot: 'opposite',
  },
  'diamond': {
    trigger: {
      en: "A Diamond break confirms in the opposite direction.",
      ru: "Подтверждается пробой фигуры Diamond в противоположную сторону.",
    },
    keys: ["DIAMOND_EXIT_ON_OPPOSITE_PATTERN"],
    outcome: 'close',
    plot: 'opposite',
  },
  'double-tap': {
    trigger: {
      en: "An opposite double top or double bottom confirms.",
      ru: "Подтверждается встречная двойная вершина или двойное дно.",
    },
    keys: ["DOUBLETAP_EXIT_ON_OPPOSITE_PATTERN"],
    outcome: 'close',
    plot: 'opposite',
  },
  'dragon': {
    trigger: {
      en: "An opposite Dragon pattern confirms on a line break.",
      ru: "Пробой линии подтверждает встречную фигуру Dragon.",
    },
    keys: ["DRAGON_EXIT_ON_OPPOSITE_PATTERN"],
    outcome: 'close',
    plot: 'opposite',
  },
  'flag': {
    trigger: {
      en: "An opposite flag confirms while the position is open.",
      ru: "Пока позиция открыта, подтверждается встречный флаг.",
    },
    keys: ["FLAG_EXIT_ON_OPPOSITE_PATTERN"],
    outcome: 'close',
    plot: 'opposite',
  },
  'gartley': {
    trigger: {
      en: "A confirmed Gartley pattern points in the opposite direction.",
      ru: "Подтверждается фигура Гартли в противоположную сторону.",
    },
    keys: ["GARTLEY_EXIT_ON_OPPOSITE_PATTERN"],
    outcome: 'close',
    plot: 'opposite',
  },
  'grid': {
    trigger: {
      en: "The market regime flips against the grid, or a volatility shock triggers the exit rule.",
      ru: "Рыночный режим меняется против сетки или срабатывает правило выхода при резком росте волатильности.",
    },
    keys: ["GRID_EXIT_ON_REGIME_FLIP","GRID_EXIT_ON_VOLATILITY_SHOCK"],
    outcome: 'close',
    plot: 'cross',
  },
  'grid-classic': {
    trigger: {
      en: "The range breaks or becomes invalid, a rejection fails, volatility surges, or the holding limit expires.",
      ru: "Цена пробивает диапазон, отбой не подтверждается, диапазон теряет силу, волатильность резко растёт или истекает срок удержания.",
    },
    keys: ["GRIDCLASSIC_FAILED_REJECTION_EXIT_BARS","GRIDCLASSIC_MAX_HOLD_BARS"],
    outcome: 'close',
    plot: 'zone',
  },
  'hyperliquid-consensus': {
    trigger: {
      en: "Enough tracked accounts switch direction or reduce their positions by enough to meet the exit thresholds.",
      ru: "Достаточно отслеживаемых аккаунтов меняют сторону или сокращают позиции до порога выхода.",
    },
    keys: ["HLC_EXIT_ON_OPPOSITE_CONSENSUS","HLC_EXIT_ON_POSITION_REDUCTION","HLC_EXIT_MIN_UNIQUE_WHALES","HLC_EXIT_MIN_NOTIONAL_USD","HLC_EXIT_MIN_DIRECTION_SHARE"],
    outcome: 'close',
    plot: 'context',
  },
  'imbalance-momentum': {
    trigger: {
      en: "Price moves far enough in favor of the position to activate the trailing stop.",
      ru: "Цена проходит достаточно далеко в пользу позиции, чтобы включился скользящий стоп.",
    },
    keys: [],
    outcome: 'protect',
    plot: 'protect',
  },
  'liquidity-tails': {
    trigger: {
      en: "An enabled rule detects invalidation, an opposite retest, or a retest that would otherwise add to the position.",
      ru: "Включённое правило замечает потерю силы зоны, встречный повторный тест или тест, который обычно добавил бы объём.",
    },
    keys: ["LIQUIDITY_TAILS_EXIT_ON_INVALIDATION","LIQUIDITY_TAILS_EXIT_ON_OPPOSITE_RETEST","LIQUIDITY_TAILS_EXIT_ON_SCALE_IN_RETEST"],
    outcome: 'close',
    plot: 'zone',
  },
  'liquidity-zones': {
    trigger: {
      en: "Price retests an opposite liquidity zone and the detector confirms the reaction.",
      ru: "Цена возвращается к встречной зоне ликвидности, и стратегия подтверждает реакцию.",
    },
    keys: ["LIQUIDITY_ZONES_EXIT_ON_OPPOSITE_RETEST"],
    outcome: 'close',
    plot: 'retest',
  },
  'london-breakout': {
    trigger: {
      en: "The position is still open at 08:00 UTC the following day.",
      ru: "Позиция остаётся открытой к 08:00 UTC следующего дня.",
    },
    keys: [],
    outcome: 'close',
    plot: 'time',
  },
  'ma-strategy': {
    trigger: {
      en: "For an open long, the fast average crosses below the slow one. The short uses the opposite cross if enabled.",
      ru: "При открытом лонге быстрая средняя пересекает медленную сверху вниз. Для шорта работает обратное пересечение, если оно включено.",
    },
    keys: ["MA_EXIT_ON_OPPOSITE_CROSS_LONG","MA_EXIT_ON_OPPOSITE_CROSS_SHORT"],
    outcome: 'close',
    plot: 'cross',
  },
  'market-flush-reversal': {
    trigger: {
      en: "A fresh flush-reversal signal points against the open position.",
      ru: "Новый сигнал разворота после резкого движения рынка направлен против позиции.",
    },
    keys: ["MFR_EXIT_ON_OPPOSITE_SIGNAL"],
    outcome: 'close',
    plot: 'context',
  },
  'range-reclaim': {
    trigger: {
      en: "The holding limit elapses from the signal timestamp before stop or target.",
      ru: "До стопа и цели цена не дошла, а срок удержания с момента сигнала истёк.",
    },
    keys: ["RANGE_RECLAIM_MAX_HOLD_BARS"],
    outcome: 'close',
    plot: 'time',
  },
  'relative-rotation': {
    trigger: {
      en: "A confirmed change in a symbol’s relative strength versus Bitcoin points the other way.",
      ru: "Подтверждается смена направления относительной силы инструмента к биткоину.",
    },
    keys: ["RR_EXIT_ON_OPPOSITE_ROTATION"],
    outcome: 'close',
    plot: 'context',
  },
  'reverse-trendline': {
    trigger: {
      en: "Price closes far enough beyond the active line against the expected bounce.",
      ru: "Цена закрывается достаточно далеко за активной линией против ожидаемого отбоя.",
    },
    keys: ["REVERSE_TRENDLINE_FAILED_BOUNCE_EXIT_PCT"],
    outcome: 'close',
    plot: 'line',
  },
  'structure-zones': {
    trigger: {
      en: "The zone detector emits a fresh signal in the opposite direction.",
      ru: "Стратегия подтверждает новый сигнал от ценовой зоны в противоположную сторону.",
    },
    keys: ["STRUCTURE_ZONES_EXIT_ON_OPPOSITE_SIGNAL"],
    outcome: 'close',
    plot: 'zone',
  },
  'trading-patterns': {
    trigger: {
      en: "The pattern that opened the position detects its own exit condition. For example, a confirmed opposite Flag can close a Flag position.",
      ru: "Фигура, по которой открылась позиция, проверяет своё правило выхода. Например, подтверждённый встречный флаг может закрыть позицию по флагу.",
    },
    keys: ["FLAG_EXIT_ON_OPPOSITE_PATTERN","HEADSHOULDERS_EXIT_ON_OPPOSITE_PATTERN"],
    outcome: 'close',
    plot: 'opposite',
  },
  'trend-follow': {
    trigger: {
      en: "Price crosses the active trailing-stop level or the engine confirms an opposite trend signal.",
      ru: "Цена пересекает действующий скользящий стоп или подтверждается встречный трендовый сигнал.",
    },
    keys: ["TRENDFOLLOW_EXIT_ON_TRAIL_STOP","TRENDFOLLOW_EXIT_ON_OPPOSITE_SIGNAL"],
    outcome: 'close',
    plot: 'trail',
  },
  'trend-pullback': {
    trigger: {
      en: "The hourly trend no longer supports the position, or the holding limit expires. A crossed stop can also close the position.",
      ru: "Часовой тренд перестаёт поддерживать позицию или истекает срок удержания. Позиция также может закрыться при пересечении стопа.",
    },
    keys: ["TP_MAX_HOLD_HOURS"],
    outcome: 'close',
    plot: 'time',
  },
  'trend-shift': {
    trigger: {
      en: "The band confirms a flip against the position after any required confirmation bars.",
      ru: "Граница тренда подтверждает разворот против позиции после заданного числа свечей.",
    },
    keys: ["TRENDSHIFT_EXIT_ON_OPPOSITE_FLIP","TRENDSHIFT_OPPOSITE_EXIT_CONFIRMATION_BARS"],
    outcome: 'close',
    plot: 'opposite',
  },
  'trendline': {
    trigger: {
      en: "After a break, the price crosses back through the active trendline against the position.",
      ru: "После пробоя цена возвращается за активную линию тренда против позиции.",
    },
    keys: [],
    outcome: 'close',
    plot: 'line',
  },
  'value-area-reclaim': {
    trigger: {
      en: "The maximum holding time expires. A matching position without a tracked entry checkpoint is also closed.",
      ru: "Истекает срок удержания. Стратегия также запрашивает закрытие позиции, если не может восстановить отметку о её входе.",
    },
    keys: ["VAR_MAX_HOLD_BARS"],
    outcome: 'close',
    plot: 'time',
  },
  'volatility-compression-breakout': {
    trigger: {
      en: "A fresh breakout from compression confirms against the current position.",
      ru: "Подтверждается новый пробой после сжатия волатильности против текущей позиции.",
    },
    keys: ["VCB_EXIT_ON_OPPOSITE_BREAKOUT"],
    outcome: 'close',
    plot: 'opposite',
  },
  'volume-divergence': {
    trigger: {
      en: "Price reaches the first profit level while partial take-profit is enabled.",
      ru: "Цена достигает первой цели, когда включена частичная фиксация.",
    },
    keys: ["VOLUME_DIVERGENCE_PARTIAL_EXIT_RATE","VOLUME_DIVERGENCE_PARTIAL_EXIT_R_MULT"],
    outcome: 'partial',
    plot: 'partial',
  },
  'vwap-reversion': {
    trigger: {
      en: "The holding limit expires, the UTC session changes, or a gap appears in the session data.",
      ru: "Истекает срок удержания, меняется сессия UTC или обнаруживается пропуск в данных сессии.",
    },
    keys: ["VWAP_MAX_HOLD_BARS"],
    outcome: 'close',
    plot: 'time',
  },
};
