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
    <Shell label="YOUR INFRASTRUCTURE" status="LOCAL CONTROL">
      <div className="relative min-h-[252px] p-5 sm:p-7">
        <div className="absolute inset-5 rounded-[32px] border border-dashed border-[#20c5bd]/18 sm:inset-7" />
        <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-3xl border border-[#20c5bd]/30 bg-[#20c5bd]/8 shadow-[0_0_60px_rgba(32,197,189,.13)]">
          <ShieldCheck size={35} className="text-[#20c5bd]" />
        </div>
        {[
          ['DATA', Database, 'left-10 top-10'],
          ['RUNTIME', ServerCog, 'right-10 top-10'],
          ['SIGNALS', Radio, 'bottom-10 left-10'],
          ['EXCHANGE', Braces, 'bottom-10 right-10'],
        ].map(([label, Icon, position]) => {
          const NodeIcon = Icon as typeof Database;
          return (
            <div key={label as string} className={cn('absolute flex items-center gap-2 rounded-lg border border-white/8 bg-[#0d1421] px-3 py-2.5', position as string)}>
              <NodeIcon size={13} className="text-[#93a7bd]" />
              <span className="font-mono text-[7px] tracking-wider text-[#93a7bd]">{label as string}</span>
            </div>
          );
        })}
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
