import { Fragment, type ReactNode } from 'react';
import type { Locale } from '@/lib/i18n';
import type { ConfigParameter } from '@/lib/marketplace-configuration';

export type ConfigurationGroupView = {
  title: string;
  rows: { description: ReactNode; parameters: ConfigParameter[] }[];
};

const copy = {
  en: {
    heading: 'Configuration keys',
    help: 'Defaults from package version',
    key: 'Key',
    purpose: 'What it changes',
    value: 'Default value',
    unset: 'Not set',
    shared: 'Applies to the following keys',
  },
  ru: {
    heading: 'Ключи конфигурации',
    help: 'Значения по умолчанию из версии пакета',
    key: 'Ключ',
    purpose: 'Что меняет',
    value: 'Значение по умолчанию',
    unset: 'Не задано',
    shared: 'Относится к следующим ключам',
  },
};

export function MarketplaceConfigurationKeys({
  groups,
  version,
  packageName,
  locale,
}: {
  groups: ConfigurationGroupView[];
  version?: string;
  packageName: string;
  locale: Locale;
}) {
  const labels = copy[locale];

  return (
    <div className="marketplace-configuration-keys" id="configuration-table">
      <span id="defaults" className="marketplace-article-anchor" />
      {version && <p>{labels.help}{' '}
        <a href={`https://www.npmjs.com/package/${packageName}/v/${version}`}><code>{version}</code></a>
      </p>}
      <div className="marketplace-table marketplace-configuration-scroll" tabIndex={0}>
        <table aria-label={labels.heading} role="table">
          <colgroup><col /><col /><col /></colgroup>
          <thead><tr>
            <th scope="col">{labels.key}</th>
            <th scope="col">{labels.value}</th>
            <th scope="col">{labels.purpose}</th>
          </tr></thead>
          {groups.map(({ title, rows }) => (
            <tbody key={title}>
              {title && <tr className="marketplace-configuration-group">
                <th scope="rowgroup" colSpan={3}>{title}</th>
              </tr>}
              {rows.map(({ description, parameters }, index) => (
                <Fragment key={index}>
                  {parameters.length > 1 && (
                    <tr className="marketplace-configuration-shared">
                      <td colSpan={3}>
                        <span className="marketplace-configuration-label" aria-hidden="true">{labels.shared}</span>
                        {description}
                      </td>
                    </tr>
                  )}
                  {parameters.map(({ key, value }, parameterIndex) => (
                    <tr key={key}>
                      <th scope="row"><code>{key}</code></th>
                      <td>
                        <span className="marketplace-configuration-label" aria-hidden="true">{labels.value}</span>
                        {value == null ? labels.unset : <code>{value}</code>}
                      </td>
                      {parameterIndex === 0 && (
                        <td rowSpan={parameters.length}>
                          <span className="marketplace-configuration-label" aria-hidden="true">{labels.purpose}</span>
                          {description}
                        </td>
                      )}
                    </tr>
                  ))}
                </Fragment>
              ))}
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
}
