export type Locale = 'en' | 'ru';

export const translations = {
  en: {
    nav: {
      advantages: 'Why TradeJS',
      architectures: 'Architectures',
      devExperience: 'TypeScript',
      x: 'X.com',
      github: 'GitHub',
      quickstart: 'Run first backtest',
    },
    hero: {
      actionWords: ['BUILD', 'BACKTEST', 'RUN'],
      titleSuffix: 'TypeScript Strategies',
      subtitle:
        'An open-source, self-hosted framework for building, backtesting, and running programmable trading strategies',
      quickstart: 'Run your first backtest',
      secondaryCta: 'Explore TypeScript API',
      terminalLabel: 'RUN IN YOUR TERMINAL',
      terminalHint:
        'The CLI scaffolds a local TradeJS project, starts the required services, and opens the dashboard.',
      terminalSteps: ['CREATE PROJECT', 'START SERVICES', 'OPEN DASHBOARD'],
      copyCommand: 'Copy command',
      copied: 'Command copied',
      productScreenshotAlt:
        'TradeJS application showing a backtested strategy with entries, exits, take profit and stop loss on a market chart',
      productScreenshotLabel: 'TRADEJS APP / STRATEGY CHART',
    },
    tradingModels: {
      sectionLabel: 'TRADING ARCHITECTURES',
      sectionTitle: 'Four paths from backtest to live decisions',
      sectionSubtitle:
        'TradeJS supports all four. The architecture determines what enters the runtime decision path—and what must be validated before you trust it.',
      recommendation: 'RECOMMENDED DIRECTION',
      thesis: 'Use AI to discover the rules. Keep runtime deterministic.',
      legend: {
        positive: 'Strength',
        requirement: 'Requirement',
        warning: 'Risk',
      },
      items: [
        {
          key: 'classic',
          index: '01',
          title: 'Classic trading',
          description:
            'Backtest a deterministic strategy across a long history, then promote only pairs and configurations that survive multiple market regimes.',
          tradeoff:
            'Easy to explain and reproduce, but pair selection is still model selection: without out-of-sample checks, the best history can simply be overfit.',
          steps: ['LONG BACKTEST', 'PAIR SELECTION', 'RUNTIME'],
          signals: [
            'No model latency',
            'Explicit strategy logic',
            'Long history required',
            'Pair-selection overfit risk',
          ],
        },
        {
          key: 'ml',
          index: '02',
          title: 'ML filter',
          description:
            'Build a point-in-time dataset from backtest candidates, train on past windows, validate on holdout and walk-forward windows, then score new candidates locally.',
          tradeoff:
            'Inference is fast. The operational burden moves to leakage prevention, drift monitoring, retraining, and explaining model decisions.',
          steps: ['BACKTEST DATA', 'TRAIN + VALIDATE', 'MODEL GATE', 'RUNTIME'],
          signals: [
            'Fast local inference',
            'Walk-forward + retraining',
            'Harder to explain',
            'Dataset leakage risk',
          ],
        },
        {
          key: 'ai',
          index: '03',
          title: 'AI at runtime',
          description:
            'Send every candidate with its signal-time market context to an external model and use the answer as an allow-or-reject decision before the order.',
          tradeoff:
            'Latency, cost, model updates, and nondeterminism enter the execution path. Historical replay is comparable only when provider output is captured or re-run.',
          steps: ['SIGNAL', 'AI REQUEST', 'ALLOW / REJECT', 'ORDER'],
          signals: [
            'Provider latency',
            'Forward testing required',
            'Model / prompt drift',
            'Expensive historical replay',
          ],
        },
        {
          key: 'gate',
          index: '04',
          title: 'AI Gate',
          description:
            'Use AI during research to discover candidate pockets in backtest exports. Validate them in time order, then encode the survivors as a local deterministic strategy wrapper.',
          tradeoff:
            'Runtime uses only signal-time data and local rules. The same gate can be replayed in backtests, but still needs holdout and forward validation before promotion.',
          steps: ['BACKTEST EXPORT', 'AI POCKET SEARCH', 'LOCAL GATE', 'RUNTIME'],
          signals: [
            'Provider outside decision path',
            'Explicit, versioned rules',
            'Reproducible backtests',
            'Holdout + forward validation',
          ],
        },
      ],
    },
    // Group 1: TypeScript-first product pillars
    strategyAuthoring: {
      sectionTitle: 'Built for TypeScript Developers',
      sectionSubtitle:
        'Use the language, tools, and infrastructure you already control',
      items: [
        {
          title: 'TypeScript-Native Strategies',
          description:
            'Build typed strategy logic, indicators, and replayable state machines with IDE support and access to the npm ecosystem.',
          links: [
            {
              label: 'TypeScript Strategy',
              url: 'https://docs.tradejs.dev/strategies/authoring/typescript-strategy-step-by-step',
            },
            {
              label: 'Author Indicators',
              url: 'https://docs.tradejs.dev/indicators/authoring',
            },
          ],
        },
        {
          title: 'One Strategy Lifecycle',
          description:
            'Use the same TypeScript strategy implementation to backtest historical data, generate runtime signals, and prepare controlled execution.',
          links: [
            {
              label: 'First Backtest',
              url: 'https://docs.tradejs.dev/getting-started/first-backtest',
            },
            {
              label: 'Runtime Signals',
              url: 'https://docs.tradejs.dev/runtime/execution/signals',
            },
          ],
        },
        {
          title: 'Self-Hosted by Default',
          description:
            'Keep strategy code, market data, exchange credentials, and execution on infrastructure you operate.',
          links: [
            {
              label: 'Local Setup',
              url: 'https://docs.tradejs.dev/getting-started/quickstart',
            },
            {
              label: 'Self-Hosted',
              url: 'https://docs.tradejs.dev/operations/production-runbook',
            },
          ],
        },
      ],
    },
    // Group 2: Backtest-to-runtime workflow
    execution: {
      sectionTitle: 'From Backtest to Runtime',
      sectionSubtitle:
        'Move one TypeScript strategy through research, comparison, signals, and controlled execution',
      items: [
        {
          title: 'Backtest & Compare',
          description:
            'Run deterministic backtests and parameter grids, then inspect metrics and artifacts before selecting a configuration.',
          imageAlt:
            'TradeJS backtest runner with strategy, date window, connector and parallel execution settings',
          imageLabel: 'TRADEJS APP / BACKTEST RUNNER',
          links: [
            {
              label: 'Backtesting',
              url: 'https://docs.tradejs.dev/runtime/backtesting/overview',
            },
            {
              label: 'Grid Config',
              url: 'https://docs.tradejs.dev/runtime/backtesting/grid-config',
            },
          ],
        },
        {
          title: 'Promote & Run',
          description:
            'Promote a selected result into runtime configuration, evaluate closed candles, and optionally automate execution.',
          imageAlt:
            'TradeJS runtime dashboard showing strategy performance, drawdown, orders and win rate',
          imageLabel: 'TRADEJS APP / RUNTIME PERFORMANCE',
          links: [
            {
              label: 'Results to Runtime',
              url: 'https://docs.tradejs.dev/runtime/backtesting/results-runtime-config',
            },
            {
              label: 'Runtime Signals',
              url: 'https://docs.tradejs.dev/runtime/execution/signals',
            },
          ],
        },
      ],
    },
    devExperience: {
      sectionTitle: 'Developer Experience',
      sectionSubtitle:
        'A typed strategy API with npm packages, IDE support, and code you can test',
      tsTab: 'TypeScript',
    },
    roadmap: {
      sectionTitle: 'Roadmap',
      sectionSubtitle: 'Project roadmap for the next major milestones',
      completedLabel: 'Completed',
      items: [
        {
          quarter: 'Q1',
          completed: true,
          title: 'Project Launch',
          description:
            'Launch of the TradeJS open-source framework and the core project foundation.',
        },
        {
          quarter: 'Q2',
          completed: true,
          title: 'AI Filter Validation on Backtest Data',
          description:
            'Capture replayable AI rows during backtests and validate prompt, model, and gating changes on the same historical trades before live rollout.',
        },
        {
          quarter: 'Q3',
          completed: false,
          title: 'Built-In Strategy Catalog Expansion',
          description:
            'Expand the catalog of built-in working and validated strategies available out of the box.',
        },
        {
          quarter: 'Q4',
          completed: false,
          title: 'New Data Sources For Strategies',
          description:
            'Add new data sources for strategies, including news portals, Reddit, X.com, and Arkham.',
        },
      ],
    },
    finalCta: {
      title: 'Build Your Strategy in TypeScript',
      subtitle:
        'Start with the real example, run a historical replay, and inspect your first result before changing the strategy.',
      quickstart: 'Run your first backtest',
      secondaryCta: 'Explore TypeScript API',
    },
    footer: {
      description: 'One strategy lifecycle from research to runtime.',
      app: 'Application',
      docs: 'Documentation',
      github: 'GitHub Repository',
      x: 'X',
      contact: 'Contact me',
      rights: 'All rights reserved.',
    },
  },
  ru: {
    nav: {
      advantages: 'Почему TradeJS',
      architectures: 'Архитектуры',
      devExperience: 'TypeScript',
      x: 'X.com',
      github: 'GitHub',
      quickstart: 'Первый бэктест',
    },
    hero: {
      actionWords: ['СОЗДАВАЙ', 'ТЕСТИРУЙ', 'ЗАПУСКАЙ'],
      titleSuffix: 'TypeScript-стратегии',
      subtitle:
        'Open-source self-hosted фреймворк для создания, бэктестинга и запуска программируемых торговых стратегий',
      quickstart: 'Запустить первый бэктест',
      secondaryCta: 'Изучить TypeScript API',
      terminalLabel: 'ВЫПОЛНИТЕ В ТЕРМИНАЛЕ',
      terminalHint:
        'CLI создаст локальный проект TradeJS, запустит необходимые сервисы и откроет dashboard.',
      terminalSteps: ['СОЗДАТЬ ПРОЕКТ', 'ЗАПУСТИТЬ СЕРВИСЫ', 'ОТКРЫТЬ DASHBOARD'],
      copyCommand: 'Скопировать команду',
      copied: 'Команда скопирована',
      productScreenshotAlt:
        'Приложение TradeJS с результатом бэктеста, входами, выходами, take profit и stop loss на графике',
      productScreenshotLabel: 'TRADEJS APP / ГРАФИК СТРАТЕГИИ',
    },
    tradingModels: {
      sectionLabel: 'АРХИТЕКТУРЫ ТОРГОВЛИ',
      sectionTitle: 'Четыре пути от бэктеста к runtime-решениям',
      sectionSubtitle:
        'TradeJS поддерживает все четыре схемы. Архитектура определяет, что попадёт в runtime decision path — и что нужно проверить, прежде чем ей доверять.',
      recommendation: 'РЕКОМЕНДУЕМОЕ НАПРАВЛЕНИЕ',
      thesis: 'AI исследует данные. В runtime решение принимает детерминированный код.',
      legend: {
        positive: 'Преимущество',
        requirement: 'Требование',
        warning: 'Риск',
      },
      items: [
        {
          key: 'classic',
          index: '01',
          title: 'Классический трейдинг',
          description:
            'Бэктестим детерминированную стратегию на длинной истории и переносим в runtime только пары и конфигурации, устойчивые в разных рыночных режимах.',
          tradeoff:
            'Схему легко объяснить и воспроизвести, но выбор пар — тоже отбор модели: без out-of-sample проверки лучший результат может оказаться переобучением.',
          steps: ['ДЛИННЫЙ БЭКТЕСТ', 'ВЫБОР ПАР', 'RUNTIME'],
          signals: [
            'Нет model latency',
            'Явная логика стратегии',
            'Нужна длинная история',
            'Overfitting при выборе пар',
          ],
        },
        {
          key: 'ml',
          index: '02',
          title: 'ML-фильтр',
          description:
            'Собираем датасет только из данных, доступных на момент сигнала, обучаемся на прошлом, проверяем holdout и walk-forward окна, затем локально оцениваем новые сделки.',
          tradeoff:
            'Inference работает быстро. Основная сложность смещается в защиту от leakage, контроль drift, регулярное обновление модели и объяснение решений.',
          steps: ['ДАННЫЕ БЭКТЕСТА', 'TRAIN + VALIDATE', 'MODEL GATE', 'RUNTIME'],
          signals: [
            'Быстрый локальный inference',
            'Walk-forward + retraining',
            'Сложнее объяснять',
            'Риск dataset leakage',
          ],
        },
        {
          key: 'ai',
          index: '03',
          title: 'AI в runtime',
          description:
            'Отправляем каждый кандидат вместе с доступным на момент сигнала контекстом во внешнюю модель и используем ответ как allow-or-reject решение перед ордером.',
          tradeoff:
            'В execution path попадают задержка, стоимость, обновления модели и недетерминированность. Исторический replay сравним только при сохранении или повторном запросе ответов.',
          steps: ['СИГНАЛ', 'AI-ЗАПРОС', 'ALLOW / REJECT', 'ОРДЕР'],
          signals: [
            'Задержка провайдера',
            'Нужны forward-тесты',
            'Model / prompt drift',
            'Дорогой исторический replay',
          ],
        },
        {
          key: 'gate',
          index: '04',
          title: 'AI Gate',
          description:
            'Используем AI на этапе исследования: ищем pockets в экспортах бэктестов, валидируем их по времени и превращаем выжившие правила в локальную детерминированную обёртку стратегии.',
          tradeoff:
            'Runtime использует только доступные на момент сигнала данные и локальные правила. Тот же gate воспроизводится в бэктестах, но перед promotion всё равно требует holdout и forward validation.',
          steps: ['BACKTEST EXPORT', 'AI POCKET SEARCH', 'LOCAL GATE', 'RUNTIME'],
          signals: [
            'Провайдер вне decision path',
            'Версионируемые правила',
            'Воспроизводимые бэктесты',
            'Holdout + forward validation',
          ],
        },
      ],
    },
    strategyAuthoring: {
      sectionTitle: 'Для TypeScript-разработчиков',
      sectionSubtitle:
        'Используйте знакомый язык, инструменты и инфраструктуру, которой управляете сами',
      items: [
        {
          title: 'TypeScript-native стратегии',
          description:
            'Создавайте типизированную логику, индикаторы и воспроизводимые state machine с поддержкой IDE и экосистемой npm.',
          links: [
            {
              label: 'TypeScript-стратегия',
              url: 'https://docs.tradejs.dev/ru/strategies/authoring/typescript-strategy-step-by-step',
            },
            {
              label: 'Создание индикаторов',
              url: 'https://docs.tradejs.dev/ru/indicators/authoring',
            },
          ],
        },
        {
          title: 'Единый цикл стратегии',
          description:
            'Используйте одну реализацию стратегии на TypeScript для бэктестов, runtime-сигналов и контролируемого исполнения.',
          links: [
            {
              label: 'Первый бэктест',
              url: 'https://docs.tradejs.dev/ru/getting-started/first-backtest',
            },
            {
              label: 'Runtime-сигналы',
              url: 'https://docs.tradejs.dev/ru/runtime/execution/signals',
            },
          ],
        },
        {
          title: 'Self-hosted по умолчанию',
          description:
            'Храните код стратегий, рыночные данные, ключи биржи и исполнение на инфраструктуре под своим управлением.',
          links: [
            {
              label: 'Локальный запуск',
              url: 'https://docs.tradejs.dev/ru/getting-started/quickstart',
            },
            {
              label: 'Запуск на своём сервере',
              url: 'https://docs.tradejs.dev/ru/operations/production-runbook',
            },
          ],
        },
      ],
    },
    execution: {
      sectionTitle: 'От бэктеста к runtime',
      sectionSubtitle:
        'Проведите одну TypeScript-стратегию через исследование, сравнение, сигналы и контролируемое исполнение',
      items: [
        {
          title: 'Тестируйте и сравнивайте',
          description:
            'Запускайте детерминированные бэктесты и перебор параметров, затем изучайте метрики и артефакты перед выбором конфигурации.',
          imageAlt:
            'Форма запуска бэктеста TradeJS с выбором стратегии, периода, коннектора и параллельности',
          imageLabel: 'TRADEJS APP / ЗАПУСК БЭКТЕСТА',
          links: [
            {
              label: 'Бэктестинг',
              url: 'https://docs.tradejs.dev/ru/runtime/backtesting/overview',
            },
            {
              label: 'Grid Config',
              url: 'https://docs.tradejs.dev/ru/runtime/backtesting/grid-config',
            },
          ],
        },
        {
          title: 'Переносите и запускайте',
          description:
            'Перенесите выбранный результат в runtime-конфигурацию, обрабатывайте закрытые свечи и при необходимости автоматизируйте исполнение.',
          imageAlt:
            'Runtime dashboard TradeJS с доходностью стратегии, просадкой, сделками и win rate',
          imageLabel: 'TRADEJS APP / RUNTIME PERFORMANCE',
          links: [
            {
              label: 'Результаты в runtime',
              url: 'https://docs.tradejs.dev/ru/runtime/backtesting/results-runtime-config',
            },
            {
              label: 'Runtime-сигналы',
              url: 'https://docs.tradejs.dev/ru/runtime/execution/signals',
            },
          ],
        },
      ],
    },
    devExperience: {
      sectionTitle: 'Опыт разработчика',
      sectionSubtitle:
        'Типизированный StrategyAPI, npm-пакеты, поддержка IDE и код, который можно тестировать',
      tsTab: 'TypeScript',
    },
    roadmap: {
      sectionTitle: 'Дорожная карта',
      sectionSubtitle: 'Ключевые этапы развития проекта',
      completedLabel: 'Выполнено',
      items: [
        {
          quarter: 'Q1',
          completed: true,
          title: 'Старт проекта',
          description:
            'Запуск TradeJS как open-source фреймворка и формирование базовой архитектуры проекта.',
        },
        {
          quarter: 'Q2',
          completed: true,
          title: 'Проверка AI-фильтра на данных бэктестов',
          description:
            'Сохранение данных для повторной AI-проверки во время бэктестов и сравнение новых версий промптов и правил фильтрации на том же историческом наборе до запуска в рабочем режиме.',
        },
        {
          quarter: 'Q3',
          completed: false,
          title: 'Расширение каталога встроенных стратегий',
          description:
            'Расширение каталога встроенных, проверенных стратегий, доступных из коробки.',
        },
        {
          quarter: 'Q4',
          completed: false,
          title: 'Новые источники данных для стратегий',
          description:
            'Подключение новых источников данных для стратегий, включая новостные порталы, Reddit, X.com и Arkham.',
        },
      ],
    },
    finalCta: {
      title: 'Создайте стратегию на TypeScript',
      subtitle:
        'Начните с реального примера, запустите исторический replay и изучите первый результат до изменения стратегии.',
      quickstart: 'Запустить первый бэктест',
      secondaryCta: 'Изучить TypeScript API',
    },
    footer: {
      description: 'Единый цикл стратегии от исследования до runtime.',
      app: 'Приложение',
      docs: 'Документация',
      github: 'GitHub-репозиторий',
      x: 'X',
      contact: 'Связаться',
      rights: 'Все права защищены.',
    },
  },
} as const;

export type Translations = (typeof translations)[Locale];
