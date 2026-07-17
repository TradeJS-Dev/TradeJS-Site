'use client';

import {
  Braces,
  Database,
  Radio,
  ServerCog,
  ShieldCheck,
} from 'lucide-react';
import { cn } from '@/lib/utils';

export type ProductVisualVariant =
  | 'authoring'
  | 'lifecycle'
  | 'self-hosted';

interface ProductVisualProps {
  variant: ProductVisualVariant;
  className?: string;
}

function Shell({
  label,
  status,
  children,
  className,
}: {
  label: string;
  status: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'product-visual relative min-h-[300px] overflow-hidden rounded-[26px] border border-white/10 bg-[#080d15] text-[#dce5f4] shadow-[0_30px_90px_rgba(3,8,15,0.35)]',
        className,
      )}
    >
      <div className="absolute inset-0 product-visual-grid opacity-60" />
      <div className="relative z-10 flex items-center justify-between border-b border-white/8 px-5 py-3.5">
        <span className="font-mono text-[9px] tracking-[0.2em] text-[#93a7bd]">{label}</span>
        <span className="flex items-center gap-2 font-mono text-[8px] tracking-[0.14em] text-[#20c5bd]">
          <span className="live-dot h-1.5 w-1.5 rounded-full bg-[#20c5bd]" />
          {status}
        </span>
      </div>
      <div className="relative z-10 min-h-[252px]">{children}</div>
    </div>
  );
}

function CodeRows() {
  return (
    <div className="space-y-2.5 font-mono text-[9px] leading-none text-[#6f8198]">
      <div><span className="text-[#4ca9ff]">const</span> {'{'} indicators {'}'} =</div>
      <div className="pl-4">strategyApi.<span className="text-[#20c5bd]">getCurrentIndicatorsContext</span>()</div>
      <div className="pt-2"><span className="text-[#4ca9ff]">const</span> cross = <span className="text-[#20c5bd]">detectCross</span>(maFast, maSlow)</div>
      <div><span className="text-[#4ca9ff]">if</span> (!cross) strategyApi.skip(<span className="text-[#8ed59f]">&apos;NO_CROSS&apos;</span>)</div>
      <div className="pt-2"><span className="text-[#4ca9ff]">return</span> strategyApi.<span className="text-[#20c5bd]">entry</span>({'{'}</div>
      <div className="pl-4">direction: modeConfig.direction</div>
      <div>{'}'})</div>
    </div>
  );
}

function AuthoringVisual() {
  return (
    <Shell label="AUTHORING SURFACE" status="TYPE SAFE" className="min-h-[390px]">
      <div className="grid min-h-[342px] md:grid-cols-[1.08fr_0.92fr]">
        <div className="border-b border-white/8 p-5 sm:p-7 md:border-b-0 md:border-r">
          <div className="mb-5 flex items-center gap-3">
            <Braces size={15} className="text-[#20c5bd]" />
            <span className="font-mono text-[9px] text-[#93a7bd]">strategy.ts</span>
            <span className="ml-auto rounded-full border border-[#20c5bd]/20 bg-[#20c5bd]/5 px-2 py-1 font-mono text-[7px] text-[#20c5bd]">TS</span>
          </div>
          <CodeRows />
          <div className="mt-6 grid grid-cols-3 gap-2">
            {['0 ERRORS', '12 TYPES', 'READY'].map((item) => (
              <div key={item} className="rounded-md border border-white/8 bg-white/[0.025] px-2 py-2 text-center font-mono text-[7px] tracking-wider text-[#93a7bd]">
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="relative flex flex-col justify-center p-5 sm:p-7">
          <div className="absolute left-[42px] top-[54px] bottom-[54px] w-px bg-gradient-to-b from-[#4ca9ff]/20 via-[#20c5bd] to-[#19c6a0]/20" />
          {[
            ['CONFIG', 'StrategyConfig<T>', '#4ca9ff'],
            ['CONTRACT', 'StrategyAPI', '#20c5bd'],
            ['OUTPUT', 'Entry | Skip', '#19c6a0'],
          ].map(([label, value, color]) => (
            <div key={label} className="relative mb-4 flex items-center gap-4 last:mb-0">
              <span className="z-10 flex h-9 w-9 items-center justify-center rounded-full border bg-[#080d15]" style={{ borderColor: `${color}55` }}>
                <span className="h-2 w-2 rounded-full" style={{ background: color }} />
              </span>
              <div className="min-w-0 flex-1 rounded-xl border border-white/8 bg-[#0d1421]/90 px-4 py-3">
                <p className="font-mono text-[7px] tracking-[0.16em] text-[#6f8198]">{label}</p>
                <p className="mt-1 font-mono text-[9px] text-[#c8d7ea]">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Shell>
  );
}

function LifecycleVisual() {
  return (
    <Shell label="ONE STRATEGY / TWO MODES" status="SYNCED">
      <div className="relative min-h-[252px] p-5 sm:p-7">
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 600 252" preserveAspectRatio="none">
          <path d="M300 58C300 112 145 88 145 166" stroke="rgba(32,197,189,.42)" strokeWidth="2" fill="none" strokeDasharray="5 7" />
          <path d="M300 58C300 112 455 88 455 166" stroke="rgba(32,197,189,.42)" strokeWidth="2" fill="none" strokeDasharray="5 7" />
        </svg>
        <div className="relative mx-auto flex w-fit items-center gap-3 rounded-xl border border-[#20c5bd]/30 bg-[#20c5bd]/8 px-5 py-3 shadow-[0_0_50px_rgba(32,197,189,.12)]">
          <Braces size={16} className="text-[#20c5bd]" />
          <div>
            <p className="font-mono text-[7px] tracking-wider text-[#6f8198]">SOURCE OF TRUTH</p>
            <p className="mt-1 font-mono text-[10px] text-[#dce5f4]">strategy.ts</p>
          </div>
        </div>
        <div className="relative mt-24 grid grid-cols-2 gap-4">
          <div className="rounded-xl border border-white/8 bg-[#0d1421]/90 p-4">
            <p className="font-mono text-[8px] tracking-[0.16em] text-[#4ca9ff]">BACKTEST</p>
            <svg className="mt-4 h-10 w-full" viewBox="0 0 180 40" fill="none">
              <path d="M0 34L18 30L38 32L58 20L78 25L98 13L118 18L140 8L160 12L180 3" stroke="#4ca9ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="rounded-xl border border-white/8 bg-[#0d1421]/90 p-4">
            <p className="font-mono text-[8px] tracking-[0.16em] text-[#19c6a0]">RUNTIME</p>
            <div className="mt-4 flex items-center justify-between">
              <span className="font-mono text-[8px] text-[#93a7bd]">SIGNAL ENGINE</span>
              <span className="rounded-md bg-[#19c6a0]/10 px-2 py-1 font-mono text-[7px] text-[#19c6a0]">ONLINE</span>
            </div>
          </div>
        </div>
      </div>
    </Shell>
  );
}

function SelfHostedVisual() {
  return (
    <Shell label="YOUR INFRASTRUCTURE" status="LOCAL CONTROL" className="min-h-[390px]">
      <div className="relative min-h-[342px] p-5 sm:p-7">
        <div className="rounded-[24px] border border-dashed border-[#20c5bd]/22 bg-[#0a111b]/72 p-4 sm:p-5">
          <div className="mb-4 flex items-center justify-between border-b border-white/8 pb-3">
            <div className="flex items-center gap-2">
              <ShieldCheck size={14} className="text-[#20c5bd]" />
              <span className="font-mono text-[8px] tracking-[0.16em] text-[#dce5f4]">PRIVATE NETWORK</span>
            </div>
            <span className="rounded-full border border-[#20c5bd]/20 bg-[#20c5bd]/8 px-2 py-1 font-mono text-[6px] tracking-wider text-[#20c5bd]">NO SHARED CLOUD</span>
          </div>

          <div className="relative grid grid-cols-[0.78fr_1.28fr_0.78fr] items-stretch gap-3">
            <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 520 166" preserveAspectRatio="none" aria-hidden="true">
              <path d="M116 42H188M116 124H188M332 42H404M332 124H404" stroke="rgba(32,197,189,.4)" strokeWidth="1.5" strokeDasharray="4 6" className="trade-flow-line" />
            </svg>

            <div className="relative z-10 grid content-center gap-3">
              {[
                ['MARKET DATA', Database],
                ['STRATEGY CODE', Braces],
              ].map(([label, Icon]) => {
                const NodeIcon = Icon as typeof Database;
                return (
                  <div key={label as string} className="rounded-xl border border-white/8 bg-[#0d1421] px-3 py-3">
                    <NodeIcon size={14} className="text-[#4ca9ff]" />
                    <p className="mt-3 font-mono text-[6px] leading-relaxed tracking-wider text-[#93a7bd] sm:text-[7px]">{label as string}</p>
                    <span className="mt-2 block h-1 w-8 rounded-full bg-[#4ca9ff]/35" />
                  </div>
                );
              })}
            </div>

            <div className="relative z-10 rounded-2xl border border-[#20c5bd]/30 bg-[#20c5bd]/8 p-3 text-center shadow-[0_0_50px_rgba(32,197,189,.1)] sm:p-4">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-[#20c5bd]/25 bg-[#080d15]">
                <ServerCog size={24} className="text-[#20c5bd]" />
              </span>
              <p className="mt-3 font-mono text-[7px] tracking-[0.16em] text-[#93a7bd]">TRADEJS NODE</p>
              <p className="mt-1 font-mono text-[10px] font-semibold text-[#dce5f4]">localhost</p>
              <div className="mt-4 grid gap-1.5">
                {['BACKTEST ENGINE', 'RUNTIME', 'AI GATE'].map((service) => (
                  <span key={service} className="rounded-md border border-white/8 bg-[#080d15]/70 px-2 py-1.5 font-mono text-[6px] tracking-wider text-[#93a7bd]">
                    {service}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative z-10 grid content-center gap-3">
              {[
                ['EXCHANGE', Radio],
                ['SIGNAL API', ShieldCheck],
              ].map(([label, Icon]) => {
                const NodeIcon = Icon as typeof Database;
                return (
                  <div key={label as string} className="rounded-xl border border-white/8 bg-[#0d1421] px-3 py-3">
                    <NodeIcon size={14} className="text-[#19c6a0]" />
                    <p className="mt-3 font-mono text-[6px] leading-relaxed tracking-wider text-[#93a7bd] sm:text-[7px]">{label as string}</p>
                    <span className="mt-2 block h-1 w-8 rounded-full bg-[#19c6a0]/35" />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-4 grid grid-cols-4 gap-2 border-t border-white/8 pt-4">
            {['DOCKER', 'POSTGRES', 'LOCAL KEYS', 'YOUR LOGS'].map((item, index) => (
              <div key={item} className="rounded-lg border border-white/8 bg-white/[0.025] px-2 py-2 text-center">
                <span className={`mx-auto mb-1.5 block h-1.5 w-1.5 rounded-full ${index === 2 ? 'bg-[#f3bf72]' : 'bg-[#20c5bd]'}`} />
                <span className="font-mono text-[5px] tracking-wider text-[#93a7bd] sm:text-[6px]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Shell>
  );
}

export function ProductVisual({ variant, className }: ProductVisualProps) {
  const visual = (() => {
    switch (variant) {
      case 'authoring': return <AuthoringVisual />;
      case 'lifecycle': return <LifecycleVisual />;
      case 'self-hosted': return <SelfHostedVisual />;
    }
  })();

  return <div className={className}>{visual}</div>;
}
