'use client';

import { installCommand, type CatalogItem } from '@/lib/marketplace';
import { useLocale } from './locale-provider';
import { MarketplaceCodeBlock } from './marketplace-code-block';

const installHelp = {
  en: 'If the package is missing, install it from your project directory.',
  ru: 'Если пакет ещё не установлен, выполните команду в папке проекта.',
};

export function MarketplaceConfig({ item }: { item: CatalogItem }) {
  const { locale } = useLocale();

  return (
    <div className="grid min-w-0 gap-4">
      <div>
        <p className="mb-2 text-sm text-muted-foreground">{installHelp[locale]}</p>
        <MarketplaceCodeBlock title="npm" code={installCommand(item)} kind="install" />
      </div>
      <MarketplaceCodeBlock title="tradejs.config.ts" code={item.config} kind="config" />
    </div>
  );
}
