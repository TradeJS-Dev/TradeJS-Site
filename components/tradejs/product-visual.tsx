'use client';

import {
  Bell,
  BrainCircuit,
  Braces,
  Check,
  Database,
  Radio,
  ServerCog,
  ShieldCheck,
} from 'lucide-react';
import { cn } from '@/lib/utils';

export type ProductVisualVariant =
  | 'authoring'
  | 'lifecycle'
  | 'self-hosted'
  | 'backtest'
  | 'promote'
  | 'pine'
  | 'ai-sidecar'
  | 'operations';

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

function BacktestVisual() {
  return (
    <Shell label="HISTORICAL REPLAY" status="184 / 184 TRADES" className="min-h-[360px]">
      <div className="grid min-h-[312px] md:grid-cols-[1fr_180px]">
        <div className="border-b border-white/8 p-5 sm:p-7 md:border-b-0 md:border-r">
          <div className="flex items-end justify-between">
            <div>
              <p className="font-mono text-[7px] tracking-wider text-[#6f8198]">EQUITY / BTC-USDT / 1H</p>
              <p className="mt-2 font-mono text-xl text-[#dce5f4]">+24.8%</p>
            </div>
            <span className="font-mono text-[8px] text-[#19c6a0]">SELECTED RUN</span>
          </div>
          <svg className="mt-5 h-44 w-full" viewBox="0 0 500 180" fill="none" preserveAspectRatio="none">
            <defs>
              <linearGradient id="backtest-area" x1="0" y1="0" x2="0" y2="1">
                <stop stopColor="#20c5bd" stopOpacity=".3" />
                <stop offset="1" stopColor="#20c5bd" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0 156L35 148L70 151L105 132L140 138L175 110L210 119L245 91L280 97L315 65L350 77L385 42L420 51L455 23L500 13V180H0Z" fill="url(#backtest-area)" />
            <path d="M0 156L35 148L70 151L105 132L140 138L175 110L210 119L245 91L280 97L315 65L350 77L385 42L420 51L455 23L500 13" stroke="#20c5bd" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M0 116H500M0 76H500M0 36H500" stroke="rgba(147,167,189,.08)" />
          </svg>
        </div>
        <div className="grid grid-cols-2 gap-px bg-white/8 md:grid-cols-1">
          {[
            ['RETURN', '+24.8%', '#19c6a0'],
            ['DRAWDOWN', '-6.2%', '#ff5f70'],
            ['PF', '1.84', '#dce5f4'],
            ['TRADES', '184', '#dce5f4'],
          ].map(([label, value, color]) => (
            <div key={label} className="flex flex-col justify-center bg-[#0b111c] px-5 py-4">
              <span className="font-mono text-[7px] tracking-wider text-[#6f8198]">{label}</span>
              <span className="mt-2 font-mono text-base" style={{ color }}>{value}</span>
            </div>
          ))}
        </div>
      </div>
    </Shell>
  );
}

function PromoteVisual() {
  return (
    <Shell label="CONFIG PROMOTION" status="VALIDATED" className="min-h-[360px]">
      <div className="grid min-h-[312px] items-center gap-4 p-5 sm:grid-cols-[1fr_auto_1fr] sm:p-7">
        <div className="rounded-2xl border border-white/8 bg-[#0d1421] p-5">
          <p className="font-mono text-[8px] tracking-wider text-[#4ca9ff]">BACKTEST #1842</p>
          <div className="mt-5 space-y-3">
            {['EMA_FAST  09', 'EMA_SLOW  21', 'RISK      01'].map((item) => (
              <div key={item} className="border-b border-white/6 pb-2 font-mono text-[9px] text-[#93a7bd]">{item}</div>
            ))}
          </div>
        </div>
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#19c6a0]/30 bg-[#19c6a0]/8 text-[#19c6a0]">
          <Check size={18} />
        </div>
        <div className="rounded-2xl border border-[#19c6a0]/20 bg-[#19c6a0]/5 p-5">
          <p className="font-mono text-[8px] tracking-wider text-[#19c6a0]">RUNTIME CONFIG</p>
          <div className="mt-5 space-y-3 font-mono text-[9px]">
            <p className="text-[#93a7bd]">status: <span className="text-[#19c6a0]">ready</span></p>
            <p className="text-[#93a7bd]">source: <span className="text-[#dce5f4]">#1842</span></p>
            <p className="text-[#93a7bd]">mode: <span className="text-[#dce5f4]">signal</span></p>
          </div>
        </div>
      </div>
    </Shell>
  );
}

function PineVisual() {
  return (
    <Shell label="PINE INTEROP" status="OPTIONAL">
      <div className="grid min-h-[252px] grid-cols-[1fr_auto_1fr] items-center gap-3 p-5 sm:p-7">
        <div className="rounded-xl border border-white/8 bg-[#0d1421] p-4">
          <p className="font-mono text-[8px] text-[#f3bf72]">PINE</p>
          <div className="mt-4 space-y-2">
            {[80, 58, 72, 45].map((width, i) => <div key={i} className="h-1.5 rounded-full bg-[#f3bf72]/20" style={{ width: `${width}%` }} />)}
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="h-px w-8 bg-gradient-to-r from-[#f3bf72] to-[#20c5bd]" />
          <span className="font-mono text-[7px] text-[#6f8198]">ADAPT</span>
        </div>
        <div className="rounded-xl border border-[#20c5bd]/20 bg-[#20c5bd]/5 p-4">
          <p className="font-mono text-[8px] text-[#20c5bd]">STRATEGY CORE</p>
          <div className="mt-4 flex items-center gap-2 text-[#93a7bd]">
            <Braces size={14} />
            <span className="font-mono text-[8px]">TypeScript runtime</span>
          </div>
        </div>
      </div>
    </Shell>
  );
}

function AiSidecarVisual() {
  return (
    <Shell label="OPTIONAL INTELLIGENCE" status="SIDE-CAR">
      <div className="relative min-h-[252px] p-5 sm:p-7">
        <div className="rounded-xl border border-white/8 bg-[#0d1421] p-4">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[8px] text-[#dce5f4]">DETERMINISTIC STRATEGY</span>
            <span className="rounded-md bg-[#19c6a0]/10 px-2 py-1 font-mono text-[7px] text-[#19c6a0]">PASS</span>
          </div>
        </div>
        <div className="ml-8 h-8 w-px bg-[#4ca9ff]/40" />
        <div className="ml-8 flex items-center gap-4 rounded-xl border border-[#4ca9ff]/20 bg-[#4ca9ff]/5 p-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#4ca9ff]/10 text-[#4ca9ff]"><BrainCircuit size={20} /></div>
          <div className="flex-1">
            <p className="font-mono text-[8px] tracking-wider text-[#4ca9ff]">AI REVIEW</p>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/8"><div className="h-full w-[82%] bg-[#4ca9ff]" /></div>
          </div>
          <span className="font-mono text-sm text-[#4ca9ff]">0.82</span>
        </div>
      </div>
    </Shell>
  );
}

function OperationsVisual() {
  return (
    <Shell label="EVENT DELIVERY" status="CONNECTED">
      <div className="relative min-h-[252px] p-5 sm:p-7">
        <div className="absolute left-10 right-10 top-1/2 h-px bg-gradient-to-r from-[#20c5bd]/20 via-[#20c5bd] to-[#20c5bd]/20" />
        <div className="relative grid min-h-[196px] grid-cols-3 items-center gap-3">
          {[
            ['RUNTIME', ServerCog],
            ['EVENT BUS', Radio],
            ['TELEGRAM', Bell],
          ].map(([label, Icon], i) => {
            const NodeIcon = Icon as typeof ServerCog;
            return (
              <div key={label as string} className={cn('mx-auto flex w-full max-w-[130px] flex-col items-center gap-3 rounded-xl border bg-[#0d1421] p-4 text-center', i === 1 ? 'border-[#20c5bd]/30 shadow-[0_0_40px_rgba(32,197,189,.12)]' : 'border-white/8')}>
                <NodeIcon size={18} className={i === 1 ? 'text-[#20c5bd]' : 'text-[#93a7bd]'} />
                <span className="font-mono text-[7px] tracking-wider text-[#93a7bd]">{label as string}</span>
              </div>
            );
          })}
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
      case 'backtest': return <BacktestVisual />;
      case 'promote': return <PromoteVisual />;
      case 'pine': return <PineVisual />;
      case 'ai-sidecar': return <AiSidecarVisual />;
      case 'operations': return <OperationsVisual />;
    }
  })();

  return <div className={className}>{visual}</div>;
}
