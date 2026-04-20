export type Locale = 'en' | 'ru';

export const translations = {
  en: {
    nav: {
      advantages: 'Advantages',
      howItWorks: 'How It Works',
      devExperience: 'For Developers',
      x: 'X.com',
      github: 'GitHub',
      quickstart: 'Getting Started',
    },
    hero: {
      actionWords: ['WRITE', 'TEST', 'RUN'],
      titleSuffix: 'Trading Strategies',
      subtitle: 'Open-source framework for TypeScript & Pine Script strategies',
      quickstart: 'Getting Started',
      trust: {
        backtesting: 'Grid Backtesting',
        runtime: 'Runtime Signals',
        aiml: 'AI / ML',
        telegram: 'Telegram Alerts',
      },
    },
    // Group 1: Strategy Authoring (TS + Pine + Local)
    strategyAuthoring: {
      sectionTitle: 'Strategy Authoring',
      sectionSubtitle:
        'Write strategies in your preferred language with full infrastructure control',
      items: [
        {
          title: 'TypeScript Strategies & Indicators',
          description:
            'Write strategies and indicators in TypeScript with full type safety, autocompletion, and access to the entire npm ecosystem.',
          links: [
            {
              label: 'Write Strategies',
              url: 'https://docs.tradejs.dev/strategies/authoring/write-strategies',
            },
            {
              label: 'Author Indicators',
              url: 'https://docs.tradejs.dev/indicators/authoring',
            },
          ],
        },
        {
          title: 'Pine Script Compatibility',
          description:
            'Migrate existing TradingView strategies seamlessly. TradeJS supports Pine Script authoring alongside TypeScript.',
          links: [
            {
              label: 'Pine Strategies',
              url: 'https://docs.tradejs.dev/strategies/authoring/pine-strategy-step-by-step',
            },
            {
              label: 'Pine Indicators',
              url: 'https://docs.tradejs.dev/indicators/pine',
            },
          ],
        },
        {
          title: 'Local & Self-Hosted',
          description:
            'Run TradeJS locally or deploy self-hosted. Full control over your data, infrastructure, and execution environment.',
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
    // Group 2: Intelligence & Backtesting (AI/ML + Grid)
    intelligence: {
      sectionTitle: 'Intelligence & Backtesting',
      sectionSubtitle:
        'Grid backtests, prompt replay, and built-in AI / ML for safer strategy iteration',
      items: [
        {
          title: 'Grid Backtesting',
          description:
            'Run massive parameter sweeps with grid config. Find optimal strategy configurations across thousands of combinations automatically.',
          links: [
            {
              label: 'Grid Config',
              url: 'https://docs.tradejs.dev/runtime/backtesting/grid-config',
            },
          ],
        },
        {
          title: 'AI Filter Validation on Backtest Data',
          description:
            'Backtests can persist replayable AI rows. Re-run the same historical trades to validate prompt updates, model swaps, and quality thresholds before changing the live AI filter.',
          links: [
            {
              label: 'AI Filter Validation',
              url: 'https://docs.tradejs.dev/ai-ml/ai/prompt-replay',
            },
            {
              label: 'AI Configuration',
              url: 'https://docs.tradejs.dev/ai-ml/ai/configuration',
            },
          ],
        },
        {
          title: 'Runtime AI / ML',
          description:
            'Use AI as a runtime review layer and combine it with ML enrichment when you need live signal filtering, prediction, or risk-aware scoring.',
          links: [
            {
              label: 'AI Configuration',
              url: 'https://docs.tradejs.dev/ai-ml/ai/configuration',
            },
            {
              label: 'ML Configuration',
              url: 'https://docs.tradejs.dev/ai-ml/ml/configuration',
            },
          ],
        },
      ],
    },
    // Group 3: Execution & Monitoring (Pipeline + Telegram)
    execution: {
      sectionTitle: 'Execution & Monitoring',
      sectionSubtitle:
        'From backtest results to live trading with real-time notifications',
      items: [
        {
          title: 'Backtest-to-Runtime Pipeline',
          description:
            'Promote your best backtest results directly to runtime config. No manual tuning — the framework handles the transition.',
          links: [
            {
              label: 'Results to Runtime',
              url: 'https://docs.tradejs.dev/runtime/backtesting/results-runtime-config',
            },
          ],
        },
        {
          title: 'Telegram Notifications',
          description:
            'Get real-time signal alerts, execution reports, and error notifications directly in Telegram. Stay informed without watching dashboards.',
          links: [
            {
              label: 'Telegram Setup',
              url: 'https://docs.tradejs.dev/runtime/execution/telegram-notifications',
            },
          ],
        },
      ],
    },
    howItWorks: {
      sectionTitle: 'How It Works',
      sectionSubtitle: 'From strategy idea to live execution in four steps',
      steps: [
        {
          step: '01',
          title: 'Create Strategy',
          description:
            'Write your strategy in TypeScript or Pine Script. Define entry/exit rules, indicators, and risk management.',
        },
        {
          step: '02',
          title: 'Run Grid Backtests',
          description:
            'Configure parameter grids, run thousands of historical tests, and capture replayable AI rows during the same backtest flow.',
        },
        {
          step: '03',
          title: 'Validate AI Filters on Backtest Data',
          description:
            'Test prompt changes, provider swaps, and quality thresholds on the same backtest sample before enabling the live AI filter.',
        },
        {
          step: '04',
          title: 'Promote & Monitor',
          description:
            'Move the best configs into runtime, launch execution, and monitor live results with Telegram notifications.',
        },
      ],
    },
    devExperience: {
      sectionTitle: 'Developer Experience',
      sectionSubtitle: 'Dual authoring: write in the language you know best',
      tsTab: 'TypeScript',
      pineTab: 'Pine Script',
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
      title: 'Ready to Automate Your Trading?',
      subtitle:
        'Start building with the TradeJS open-source framework today. Self-hosted and built for developers.',
      quickstart: 'Getting Started',
    },
    footer: {
      description: 'Open-source framework for trading strategy developers.',
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
      advantages: 'Преимущества',
      howItWorks: 'Как это работает',
      devExperience: 'Разработчикам',
      x: 'X.com',
      github: 'GitHub',
      quickstart: 'Быстрый старт',
    },
    hero: {
      actionWords: ['ПИШИ', 'ТЕСТИРУЙ', 'ЗАПУСКАЙ'],
      titleSuffix: 'Торговые стратегии',
      subtitle:
        'Open-source фреймворк для создания торговых стратегий на TypeScript и Pine Script',
      quickstart: 'Быстрый старт',
      trust: {
        backtesting: 'Grid-бэктесты',
        runtime: 'Рабочие сигналы',
        aiml: 'AI / ML',
        telegram: 'Уведомления в Telegram',
      },
    },
    strategyAuthoring: {
      sectionTitle: 'Создание стратегий',
      sectionSubtitle:
        'Пишите стратегии на удобном языке с полным контролем инфраструктуры',
      items: [
        {
          title: 'Стратегии и индикаторы на TypeScript',
          description:
            'Пишите стратегии и индикаторы на TypeScript с полной типизацией, автодополнением и доступом ко всей экосистеме npm.',
          links: [
            {
              label: 'Написание стратегий',
              url: 'https://docs.tradejs.dev/ru/strategies/authoring/write-strategies',
            },
            {
              label: 'Создание индикаторов',
              url: 'https://docs.tradejs.dev/ru/indicators/authoring',
            },
          ],
        },
        {
          title: 'Совместимость с Pine Script',
          description:
            'Мигрируйте стратегии из TradingView без потерь. TradeJS поддерживает Pine Script наравне с TypeScript.',
          links: [
            {
              label: 'Pine-стратегии',
              url: 'https://docs.tradejs.dev/ru/strategies/authoring/pine-strategy-step-by-step',
            },
            {
              label: 'Pine-индикаторы',
              url: 'https://docs.tradejs.dev/ru/indicators/pine',
            },
          ],
        },
        {
          title: 'Локальный запуск и свой сервер',
          description:
            'Запускайте TradeJS локально или на своём сервере. Полный контроль над данными, инфраструктурой и средой исполнения.',
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
      sectionTitle: 'Интеллект и бэктестинг',
      sectionSubtitle:
        'Grid-бэктесты, проверка AI-промптов на исторических сделках и встроенный AI / ML для безопасной настройки стратегий',
      items: [
        {
          title: 'Grid-бэктесты',
          description:
            'Запускайте массовый перебор параметров с помощью Grid Config и автоматически находите оптимальные конфигурации среди тысяч комбинаций.',
          links: [
            {
              label: 'Grid Config',
              url: 'https://docs.tradejs.dev/ru/runtime/backtesting/grid-config',
            },
          ],
        },
        {
          title: 'Проверка AI-фильтра на данных бэктестов',
          description:
            'Во время AI-бэктестов TradeJS сохраняет данные по сделкам для повторной проверки. Затем на том же историческом наборе можно сравнивать новые версии промптов, модели и пороги качества до изменения AI-фильтра в рабочем режиме.',
          links: [
            {
              label: 'Проверка AI-фильтра',
              url: 'https://docs.tradejs.dev/ru/ai-ml/ai/prompt-replay',
            },
            {
              label: 'Конфигурация AI',
              url: 'https://docs.tradejs.dev/ru/ai-ml/ai/configuration',
            },
          ],
        },
        {
          title: 'AI / ML в рабочем режиме',
          description:
            'Используйте AI как слой проверки сигналов и комбинируйте его с ML, когда нужна фильтрация входов, прогноз или оценка риска в рабочем режиме.',
          links: [
            {
              label: 'Конфигурация AI',
              url: 'https://docs.tradejs.dev/ru/ai-ml/ai/configuration',
            },
            {
              label: 'Конфигурация ML',
              url: 'https://docs.tradejs.dev/ru/ai-ml/ml/configuration',
            },
          ],
        },
      ],
    },
    execution: {
      sectionTitle: 'Исполнение и мониторинг',
      sectionSubtitle:
        'От результатов бэктестов к рабочему запуску с уведомлениями в реальном времени',
      items: [
        {
          title: 'Из бэктестов в рантайм',
          description:
            'Переносите лучшие результаты бэктестов прямо в конфигурацию рантайма. Без ручной подгонки: фреймворк делает это сам.',
          links: [
            {
              label: 'Результаты в рантайм',
              url: 'https://docs.tradejs.dev/ru/runtime/backtesting/results-runtime-config',
            },
          ],
        },
        {
          title: 'Telegram-уведомления',
          description:
            'Получайте уведомления о сигналах, отчёты об исполнении и сообщения об ошибках прямо в Telegram. Не нужно постоянно держать открытым дашборд.',
          links: [
            {
              label: 'Настройка Telegram',
              url: 'https://docs.tradejs.dev/ru/runtime/execution/telegram-notifications',
            },
          ],
        },
      ],
    },
    howItWorks: {
      sectionTitle: 'Как это работает',
      sectionSubtitle: 'От идеи стратегии до рабочего запуска — четыре шага',
      steps: [
        {
          step: '01',
          title: 'Создайте стратегию',
          description:
            'Напишите стратегию на TypeScript или Pine Script. Определите правила входа/выхода, индикаторы и управление рисками.',
        },
        {
          step: '02',
          title: 'Запустите Grid-бэктесты',
          description:
            'Настройте сетку параметров, прогоните тысячи исторических тестов и сразу сохраните данные для повторной AI-проверки.',
        },
        {
          step: '03',
          title: 'Проверьте AI-фильтр на данных бэктестов',
          description:
            'Сравните новые версии промптов, модели и пороги качества на том же наборе сделок до изменения AI-фильтра в рабочем режиме.',
        },
        {
          step: '04',
          title: 'Перенесите в рантайм и следите за результатами',
          description:
            'Перенесите лучшие конфигурации в рантайм, включите сигналы и следите за результатами через Telegram-уведомления.',
        },
      ],
    },
    devExperience: {
      sectionTitle: 'Опыт разработчика',
      sectionSubtitle:
        'Два режима разработки: пишите на языке, который знаете лучше',
      tsTab: 'TypeScript',
      pineTab: 'Pine Script',
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
      title: 'Готовы автоматизировать трейдинг?',
      subtitle:
        'Начните работать с open-source фреймворком TradeJS уже сегодня. Разворачивайте у себя и управляйте всем стеком самостоятельно.',
      quickstart: 'Быстрый старт',
    },
    footer: {
      description:
        'Open-source фреймворк для разработчиков торговых стратегий.',
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
