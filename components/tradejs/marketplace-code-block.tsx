'use client';

import { useState, type ReactNode } from 'react';
import { Check, Code2, Copy, Terminal } from 'lucide-react';
import { useLocale } from './locale-provider';

const copy = {
  en: { code: 'Copy code', install: 'Copy install command', config: 'Copy config', copied: 'Copied', failed: 'Select the code to copy it.' },
  ru: { code: 'Скопировать код', install: 'Скопировать команду установки', config: 'Скопировать конфигурацию', copied: 'Скопировано', failed: 'Выделите код, чтобы скопировать его.' },
};

export function MarketplaceCodeBlock({
  title,
  code,
  children,
  kind = 'code',
}: {
  title?: string;
  code: string;
  children?: ReactNode;
  kind?: 'code' | 'install' | 'config';
}) {
  const { locale } = useLocale();
  const labels = copy[locale];
  const [status, setStatus] = useState<'idle' | 'copied' | 'failed'>('idle');
  const Icon = kind === 'install' ? Terminal : Code2;

  async function copyCode() {
    try {
      await navigator.clipboard.writeText(code);
      setStatus('copied');
    } catch {
      setStatus('failed');
    }
  }

  return (
    <div className="marketplace-config" data-titled={!!title}>
      {title && (
        <div className="marketplace-config-title">
          <Icon size={16} aria-hidden="true" />
          <span>{title}</span>
        </div>
      )}
      <button
        type="button"
        className="marketplace-code-copy"
        aria-label={labels[kind]}
        title={status === 'copied' ? labels.copied : labels[kind]}
        onClick={copyCode}
      >
        {status === 'copied' ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
      </button>
      <pre tabIndex={0}><code>{children ?? code}</code></pre>
      <span role="status" className={status === 'failed' ? 'marketplace-copy-error' : 'sr-only'}>
        {status === 'failed' ? labels.failed : status === 'copied' ? labels.copied : ''}
      </span>
    </div>
  );
}
