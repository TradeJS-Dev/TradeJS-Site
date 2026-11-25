'use client';

import { ArrowUpRight, Download } from 'lucide-react';
import type { CatalogItem } from '@/lib/marketplace';
import type { MarketplacePackage, NpmDownloadCount } from '@/lib/marketplace-packages';
import { useLocale } from './locale-provider';
import { useMarketplaceDownloads } from './use-marketplace-downloads';

const copy = {
  en: {
    heading: 'Package and compatibility',
    examined: 'Documented version',
    latest: 'Latest on npm',
    downloads: 'npm downloads in 7 days',
    weekly: 'npm · 7 days',
    interval: 'Default candle interval',
    minute: 'min',
    feed: 'Required data',
    runtime: 'Runtime',
    versions: 'Published versions',
    compare: 'Changes',
    source: 'Source',
    npm: 'All npm versions',
  },
  ru: {
    heading: 'Пакет и совместимость',
    examined: 'Версия в документации',
    latest: 'Последняя на npm',
    downloads: 'Загрузок с npm за 7 дней',
    weekly: 'npm · 7 дней',
    interval: 'Интервал свечей по умолчанию',
    minute: 'мин',
    feed: 'Необходимые данные',
    runtime: 'Среда',
    versions: 'Опубликованные версии',
    compare: 'Изменения',
    source: 'Исходный код',
    npm: 'Все версии на npm',
  },
};

const additionalData: Record<string, Record<'en' | 'ru', string>> = {
  'hyperliquid-consensus': {
    en: 'Candles and position changes from tracked Hyperliquid accounts.',
    ru: 'Свечи и изменения позиций отслеживаемых аккаунтов Hyperliquid.',
  },
  'market-flush-reversal': {
    en: 'Symbol candles and broader market context.',
    ru: 'Свечи инструмента и контекст широкого рынка.',
  },
  'relative-rotation': {
    en: 'Symbol candles and Bitcoin reference candles.',
    ru: 'Свечи инструмента и справочные свечи биткоина.',
  },
  'value-area-reclaim': {
    en: 'Complete 15-minute candle history for the volume profile.',
    ru: 'Полная история 15-минутных свечей для профиля объёма.',
  },
  'vwap-reversion': {
    en: 'Continuous candles with volume from the current UTC session.',
    ru: 'Непрерывные свечи с объёмом за текущую сессию UTC.',
  },
};

export function NpmDownloads({ count, compact = false }: { count: NpmDownloadCount; compact?: boolean }) {
  const { locale } = useLocale();
  const label = copy[locale].downloads;
  const amount = new Intl.NumberFormat(locale).format(count.downloads);

  if (compact) return (
    <span className="marketplace-downloads-small" title={`${label} · ${count.start} – ${count.end}`}>
      <Download size={14} aria-hidden="true" />
      <span>{amount} · {copy[locale].weekly}</span>
    </span>
  );

  return <span>{amount} <span className="marketplace-download-window">· {count.start} – {count.end}</span></span>;
}

export function MarketplacePackageInfo({
  item,
  metadata,
  interval,
}: {
  item: CatalogItem;
  metadata: MarketplacePackage;
  interval?: string;
}) {
  const { locale } = useLocale();
  const labels = copy[locale];
  const downloads = useMarketplaceDownloads(item.packageName)[item.packageName];
  const npm = `https://www.npmjs.com/package/${item.packageName}`;
  const feed = additionalData[item.id]?.[locale];

  return (
    <section id="package-info" className="marketplace-package-info" aria-labelledby="package-info-title">
      <h2 id="package-info-title">{labels.heading}</h2>
      <dl>
        <div><dt>{labels.examined}</dt><dd><a href={`${npm}/v/${metadata.version}`}><code>{metadata.version}</code></a></dd></div>
        {metadata.latest !== metadata.version && <div><dt>{labels.latest}</dt><dd><code>{metadata.latest}</code></dd></div>}
        {metadata.node && <div><dt>{labels.runtime}</dt><dd>Node.js <code>{metadata.node}</code></dd></div>}
        {Object.entries(metadata.peerRanges).map(([name, range]) => (
          <div key={name}><dt><code>{name}</code></dt><dd><code>{range}</code></dd></div>
        ))}
        {interval && <div><dt>{labels.interval}</dt><dd>{interval} {labels.minute}</dd></div>}
        {feed && <div><dt>{labels.feed}</dt><dd>{feed}</dd></div>}
        {downloads && <div><dt>{labels.downloads}</dt><dd><NpmDownloads count={downloads} /></dd></div>}
      </dl>
      <h3>{labels.versions}</h3>
      <ul aria-label={labels.versions}>
        {metadata.releases.map(({ version, date, commit }, index) => {
          const previous = metadata.releases[index + 1]?.commit;
          return (
            <li key={version}>
              <a href={`${npm}/v/${version}`}><code>{version}</code></a>
              <div className="marketplace-package-release">
                {metadata.source && commit && previous && commit !== previous && (
                  <a href={`${metadata.source}/compare/${previous}...${commit}`}>{labels.compare}</a>
                )}
                <time dateTime={date}>{date}</time>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="marketplace-package-links">
        <a href={`${npm}?activeTab=versions`}>{labels.npm} <ArrowUpRight size={14} aria-hidden="true" /></a>
        {metadata.source && <a href={metadata.source}>{labels.source} <ArrowUpRight size={14} aria-hidden="true" /></a>}
      </div>
    </section>
  );
}
