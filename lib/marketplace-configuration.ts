import type { Locale } from './i18n';
import { explainCommonKey } from './marketplace-common-keys';

export type StrategyDefaults = {
  version: string;
  params: Record<string, string | null>;
};

export type ConfigParameter = {
  key: string;
  value: string | null | undefined;
};

export type ConfigGroup = {
  title: string;
  rows: { description: string; parameters: ConfigParameter[] }[];
};

export const configurationTable = /^\| (?:Group \| Keys \| Purpose|Группа \| Ключи \| Назначение) \|\n(?:^\|[^\n]*(?:\n|$))+/m;
export const componentConfigurationTable = /^\| (?:Key \| Default value \| Purpose|Ключ \| Значение по умолчанию \| Назначение) \|\n(?:^\|[^\n]*(?:\n|$))+/m;

const tableRows = (table: string) => table.trimEnd().split('\n').slice(2).map((row) =>
  row.split(/(?<!\\)\|/).slice(1, -1).map((cell) => cell.trim()),
);

export function componentConfigurationGroups(table: string): ConfigGroup[] {
  return [{
    title: '',
    rows: tableRows(table).map(([key, value, description]) => ({
      description,
      parameters: [{
        key: key.slice(1, -1),
        value: value === '—' ? null : value.slice(1, -1),
      }],
    })),
  }];
}

function matchesKey(pattern: string, key: string) {
  if (!pattern.includes('*') && !pattern.includes('<name>')) {
    return key === pattern || key.startsWith(pattern + '.');
  }
  const expression = pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    .replaceAll('\\*', '.*')
    .replaceAll('<name>', '[^.]+');
  return new RegExp(`^${expression}$`).test(key);
}

export function configurationGroups(table: string, defaults: StrategyDefaults, locale: Locale): ConfigGroup[] {
  const groups = new Map<string, ConfigGroup['rows']>();
  const defaultKeys = Object.keys(defaults.params);

  for (const [title, keys, description] of tableRows(table)) {
    const matchedKeys = new Set<string>();
    for (const [, pattern] of keys.matchAll(/`([^`]+)`/g)) {
      const matches = defaultKeys.filter((key) => matchesKey(pattern, key));
      for (const key of matches.length ? matches : [pattern]) matchedKeys.add(key);
    }
    if (!matchedKeys.size) continue;
    const parameters = [...matchedKeys].map((key) => ({ key, value: defaults.params[key] }));
    const rows = groups.get(title) ?? [];
    const shared: ConfigParameter[] = [];
    for (const parameter of parameters) {
      const purpose = parameters.length > 1 ? explainCommonKey(parameter.key, locale) : undefined;
      if (purpose) rows.push({ description: purpose, parameters: [parameter] });
      else shared.push(parameter);
    }
    if (shared.length) rows.push({ description, parameters: shared });
    groups.set(title, rows);
  }

  return [...groups].map(([title, rows]) => ({ title, rows }));
}
