import type { Locale } from '@/lib/i18n';
import type { CatalogItem } from '@/lib/marketplace';
import { MarketplaceCodeBlock } from './marketplace-code-block';

const copy = {
  en: {
    intro: 'Run both commands from your TradeJS project folder with the local services running.',
    save: '1. Save the example settings',
    run: '2. Run the backtest',
    result: (venue: string) => `The example tests the last seven days on ${venue}. The report may show zero trades if there were no matching signals.`,
    docs: 'Customize the backtest settings',
  },
  ru: {
    intro: 'Выполните обе команды из папки проекта TradeJS с запущенными локальными сервисами.',
    save: '1. Сохранить настройки примера',
    run: '2. Запустить бэктест',
    result: (venue: string) => `Пример использует данные ${venue} за последние семь дней. Если за этот период не было подходящих сигналов, в отчёте будет ноль сделок.`,
    docs: 'Как изменить настройки бэктеста',
  },
};

export function MarketplaceBacktestCommands({
  item,
  locale,
  defaultInterval,
}: {
  item: CatalogItem;
  locale: Locale;
  defaultInterval?: string | null;
}) {
  const isStrategy = item.category === 'strategies';
  const isAdapter = item.category === 'connectors';
  // The published Breakout preset does not export INTERVAL. Its documented example uses 15 minutes.
  const interval = isStrategy && item.id !== 'breakout' ? defaultInterval?.match(/^"(\d+)"$/)?.[1] : '15';
  if (!interval) throw new Error('Missing backtest interval for ' + item.name);

  const labels = copy[locale];
  const ticker = item.id === 'relative-rotation' ? 'ETHUSDT' : 'BTCUSDT';
  const config = (isStrategy ? item.name : 'MaStrategy') + ':docs-example';
  const connector = isAdapter ? item.id : 'bybit';
  const venue = isAdapter ? item.name : 'Bybit';
  const grid = JSON.stringify({ INTERVAL: [interval] });
  const save = [
    'docker compose -f docker-compose.dev.yml exec -T redis redis-cli JSON.SET \\',
    "  'users:root:backtests:configs:" + config + "' '$' '" + grid + "' NX",
  ].join('\n');
  const run = [
    'npm run backtest -- --user root --config ' + config + ' \\',
    '  --connector ' + connector + ' --tickers ' + ticker + ' --timeframe ' + interval + ' \\',
    '  --days 7 --tests 1 --parallel 1',
  ].join('\n');
  const docsUrl = 'https://docs.tradejs.dev' + (locale === 'ru' ? '/ru' : '') + '/getting-started/backtest-config';

  return (
    <>
      <p>{labels.intro}</p>
      <MarketplaceCodeBlock title={labels.save} code={save} />
      <MarketplaceCodeBlock title={labels.run} code={run} />
      <p>{labels.result(venue)} <a href={docsUrl}>{labels.docs}</a>.</p>
    </>
  );
}
