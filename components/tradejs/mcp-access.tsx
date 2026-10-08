"use client";

import { ArrowUpRight, Link2 } from 'lucide-react';
import { useLocale } from './locale-provider';
import { AnimateOnScroll } from './animate-on-scroll';

export function McpAccess() {
  const { locale } = useLocale();
  const ru = locale === 'ru';
  const items = ru ? [
    ['Монеты и графики', 'Свечи, индикаторы и контекст выбранного графика.'],
    ['Стратегии и сигналы', 'Текущие настройки, причины решений и сохранённые ордера.'],
    ['Бэктесты и диагностика', 'Фоновые проверки и подтверждённые отчёты runtime feedback и parity.'],
  ] : [
    ['Coins and charts', 'Candles, indicators and context from the selected chart.'],
    ['Strategies and signals', 'Effective configs, recorded decisions and order records.'],
    ['Backtests and diagnostics', 'Background jobs and verified runtime feedback and parity reports.'],
  ];
  return (
    <section id="mcp" className="relative overflow-hidden border-b border-border py-20 lg:py-24">
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <AnimateOnScroll>
          <div className="mb-10 flex items-center gap-3 font-mono text-xs tracking-widest text-primary"><Link2 size={16} /> MCP / CODEX / CLAUDE CODE</div>
          <h2 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-5xl">{ru ? 'Исследуйте TradeJS из своего ИИ-ассистента' : 'Explore TradeJS from your AI assistant'}</h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{ru ? 'MCP соединяет Codex и Claude Code с вашим экземпляром TradeJS. Вы выбираете права доступа через OAuth и можете отозвать подключение в приложении.' : 'MCP connects Codex and Claude Code to your TradeJS instance. Choose access through OAuth and revoke connections in the app.'}</p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">{items.map(([title, description]) => <article key={title} className="control-panel rounded-2xl border border-border p-6"><h3 className="text-lg font-semibold">{title}</h3><p className="mt-3 leading-relaxed text-muted-foreground">{description}</p></article>)}</div>
          <p className="mt-6 text-sm text-muted-foreground">{ru ? 'Требуется версия TradeJS с поддержкой MCP. Доступ ограничен выбранными правами; запуск проверок выполняет отдельный worker.' : 'Requires an MCP-enabled TradeJS release. Access follows granted scopes; a separate worker runs background jobs.'}</p>
          <a className="mt-6 inline-flex items-center gap-2 font-medium text-primary hover:text-accent-hover" href={`https://docs.tradejs.dev/${ru ? 'ru/' : ''}guides/mcp`}>{ru ? 'Подключить ассистента' : 'Connect your assistant'}<ArrowUpRight size={16} /></a>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
