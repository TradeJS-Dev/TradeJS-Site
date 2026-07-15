export type Locale = 'en' | 'ru';

export const translations = {
  en: {
    nav: {
      advantages: 'Why TradeJS',
      howItWorks: 'Workflow',
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
      trust: {
        typescript: 'TypeScript-native',
        openSource: 'Open Source',
        selfHosted: 'Self-Hosted',
        lifecycle: 'Backtest & Runtime',
      },
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
    // Group 2: Optional extensions
    intelligence: {
      sectionTitle: 'Extend When You Need It',
      sectionSubtitle:
        'Add compatibility, intelligence, and operational integrations without changing the TypeScript-first workflow',
      items: [
        {
          title: 'Pine Strategy Interoperability',
          description:
            'Port or compare Pine-backed strategies while keeping TypeScript as the primary strategy and runtime surface.',
          links: [
            {
              label: 'Pine Strategies',
              url: 'https://docs.tradejs.dev/guides/pine-workflows',
            },
          ],
        },
        {
          title: 'Optional AI / ML Layers',
          description:
            'Add AI review or ML enrichment when a strategy needs extra scoring and filtering beyond its deterministic TypeScript logic.',
          links: [
            {
              label: 'AI Workflows',
              url: 'https://docs.tradejs.dev/ai-ml/ai/configuration',
            },
            {
              label: 'ML Workflows',
              url: 'https://docs.tradejs.dev/ai-ml/ml/configuration',
            },
          ],
        },
        {
          title: 'Operational Integrations',
          description:
            'Connect exchanges, monitor runtime activity, and deliver signal, execution, and error notifications through Telegram.',
          links: [
            {
              label: 'Connectors',
              url: 'https://docs.tradejs.dev/core-concepts/connectors',
            },
            {
              label: 'Telegram Setup',
              url: 'https://docs.tradejs.dev/runtime/execution/telegram-notifications',
            },
          ],
        },
      ],
    },
    // Group 3: Backtest-to-runtime workflow
    execution: {
      sectionTitle: 'From Backtest to Runtime',
      sectionSubtitle:
        'Move one TypeScript strategy through research, comparison, signals, and controlled execution',
      items: [
        {
          title: 'Backtest & Compare',
          description:
            'Run deterministic backtests and parameter grids, then inspect metrics and artifacts before selecting a configuration.',
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
    howItWorks: {
      sectionTitle: 'How It Works',
      sectionSubtitle: 'Write once, then move the strategy through one controlled workflow',
      steps: [
        {
          step: '01',
          title: 'Write in TypeScript',
          description:
            'Define entry and exit logic, indicators, state, and risk management with a typed StrategyAPI.',
        },
        {
          step: '02',
          title: 'Backtest',
          description:
            'Replay the strategy on historical data, compare configurations, and inspect metrics and chart artifacts.',
        },
        {
          step: '03',
          title: 'Promote Configuration',
          description:
            'Move the selected backtest result into runtime configuration without rewriting the strategy.',
        },
        {
          step: '04',
          title: 'Run Self-Hosted',
          description:
            'Generate signals and optionally execute orders on infrastructure, data stores, and credentials you control.',
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
        'Start with the open-source framework, run the first backtest, and keep the entire stack on your infrastructure.',
      quickstart: 'Run your first backtest',
      secondaryCta: 'Explore TypeScript API',
    },
    footer: {
      description:
        'Open-source, self-hosted framework for TypeScript trading strategies.',
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
      howItWorks: 'Процесс',
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
      trust: {
        typescript: 'TypeScript-native',
        openSource: 'Open Source',
        selfHosted: 'Self-Hosted',
        lifecycle: 'Бэктест и runtime',
      },
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
    intelligence: {
      sectionTitle: 'Расширяйте по необходимости',
      sectionSubtitle:
        'Добавляйте совместимость, интеллектуальные слои и интеграции, не меняя TypeScript-first процесс',
      items: [
        {
          title: 'Совместимость с Pine-стратегиями',
          description:
            'Переносите и сравнивайте Pine-backed стратегии, сохраняя TypeScript основным языком стратегий и runtime.',
          links: [
            {
              label: 'Pine-стратегии',
              url: 'https://docs.tradejs.dev/ru/guides/pine-workflows',
            },
          ],
        },
        {
          title: 'Опциональные AI / ML-слои',
          description:
            'Добавляйте AI-проверку или ML enrichment, когда стратегии нужна дополнительная оценка и фильтрация поверх детерминированной TypeScript-логики.',
          links: [
            {
              label: 'AI workflows',
              url: 'https://docs.tradejs.dev/ru/ai-ml/ai/configuration',
            },
            {
              label: 'ML workflows',
              url: 'https://docs.tradejs.dev/ru/ai-ml/ml/configuration',
            },
          ],
        },
        {
          title: 'Операционные интеграции',
          description:
            'Подключайте биржи, контролируйте runtime и получайте уведомления о сигналах, исполнении и ошибках в Telegram.',
          links: [
            {
              label: 'Коннекторы',
              url: 'https://docs.tradejs.dev/ru/core-concepts/connectors',
            },
            {
              label: 'Настройка Telegram',
              url: 'https://docs.tradejs.dev/ru/runtime/execution/telegram-notifications',
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
    howItWorks: {
      sectionTitle: 'Как это работает',
      sectionSubtitle:
        'Напишите один раз и проведите стратегию через единый контролируемый процесс',
      steps: [
        {
          step: '01',
          title: 'Напишите на TypeScript',
          description:
            'Определите входы, выходы, индикаторы, состояние и управление рисками через типизированный StrategyAPI.',
        },
        {
          step: '02',
          title: 'Проведите бэктест',
          description:
            'Воспроизведите стратегию на истории, сравните конфигурации и изучите метрики и графические артефакты.',
        },
        {
          step: '03',
          title: 'Перенесите конфигурацию',
          description:
            'Перенесите выбранный результат бэктеста в runtime-конфигурацию, не переписывая стратегию.',
        },
        {
          step: '04',
          title: 'Запустите на своём сервере',
          description:
            'Генерируйте сигналы и при необходимости исполняйте ордера на инфраструктуре, которой управляете сами.',
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
        'Начните с open-source фреймворка, запустите первый бэктест и оставьте весь стек на своей инфраструктуре.',
      quickstart: 'Запустить первый бэктест',
      secondaryCta: 'Изучить TypeScript API',
    },
    footer: {
      description:
        'Open-source self-hosted фреймворк для торговых стратегий на TypeScript.',
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
