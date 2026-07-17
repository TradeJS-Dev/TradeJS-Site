'use client';

import {
  BrainCircuit,
  ChartNoAxesCombined,
  Check,
  CircleAlert,
  DatabaseZap,
  Minus,
  Sparkles,
} from 'lucide-react';
import { AnimateOnScroll } from './animate-on-scroll';
import { useLocale } from './locale-provider';

const icons = {
  classic: ChartNoAxesCombined,
  ml: BrainCircuit,
  ai: Sparkles,
  gate: DatabaseZap,
};

const signalTones = {
  classic: ['positive', 'positive', 'requirement', 'warning'],
  ml: ['positive', 'requirement', 'warning', 'warning'],
  ai: ['warning', 'requirement', 'warning', 'warning'],
  gate: ['positive', 'positive', 'positive', 'requirement'],
} as const;

type ModelKey = keyof typeof icons;

function ArchitectureArt({ variant }: { variant: ModelKey }) {
  if (variant === 'classic') {
    return (
      <svg viewBox="0 0 520 150" className="h-32 w-full sm:h-36" fill="none" aria-hidden="true">
        <rect x="14" y="18" width="168" height="116" rx="14" fill="rgba(147,167,189,.045)" stroke="rgba(147,167,189,.16)" />
        <text x="29" y="38" fill="#93a7bd" fontSize="7" fontFamily="monospace" letterSpacing="1">BACKTEST TRADES</text>
        <path d="M29 119H166M29 48V119M29 83H166M96 48V119" stroke="rgba(147,167,189,.1)" />
        {[[42, 74], [58, 101], [75, 61], [94, 91], [111, 112], [130, 67], [151, 97]].map(([x, y], index) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="4" fill={index % 3 === 0 ? '#4ca9ff' : index % 3 === 1 ? '#20c5bd' : '#ff8a91'} className="trade-dot" style={{ animationDelay: `${index * 0.16}s` }} />
        ))}
        <path d="M186 76H224" stroke="#20c5bd" strokeWidth="2" strokeDasharray="4 6" className="trade-flow-line" />
        <path d="M218 72L226 76L218 80" fill="#20c5bd" />
        <rect x="232" y="39" width="122" height="74" rx="14" fill="rgba(32,197,189,.07)" stroke="rgba(32,197,189,.24)" />
        <text x="293" y="61" textAnchor="middle" fill="#93a7bd" fontSize="7" fontFamily="monospace">PAIR BACKTESTS</text>
        <path d="M250 78H336M250 91H321" stroke="#7ee9e3" strokeWidth="2" strokeLinecap="round" />
        <text x="293" y="105" textAnchor="middle" fill="#7ee9e3" fontSize="7" fontFamily="monospace">RANK RESULTS</text>
        <path d="M358 76H393" stroke="#20c5bd" strokeWidth="2" strokeDasharray="4 6" className="trade-flow-line" />
        <path d="M387 72L395 76L387 80" fill="#20c5bd" />
        {[['BTC', 405, 30], ['ETH', 405, 62], ['SOL', 405, 94]].map(([label, x, y], index) => (
          <g key={label as string}>
            <rect x={x as number} y={y as number} width="74" height="24" rx="8" fill={index === 0 ? 'rgba(32,197,189,.16)' : 'rgba(147,167,189,.07)'} stroke={index === 0 ? 'rgba(32,197,189,.55)' : 'rgba(147,167,189,.16)'} />
            <text x={(x as number) + 37} y={(y as number) + 16} textAnchor="middle" fill={index === 0 ? '#7ee9e3' : '#93a7bd'} fontSize="9" fontFamily="monospace">{label as string}</text>
          </g>
        ))}
      </svg>
    );
  }

  if (variant === 'ml') {
    return (
      <svg viewBox="0 0 520 150" className="h-32 w-full sm:h-36" fill="none" aria-hidden="true">
        <rect x="14" y="18" width="156" height="116" rx="14" fill="rgba(147,167,189,.045)" stroke="rgba(147,167,189,.16)" />
        <text x="29" y="38" fill="#93a7bd" fontSize="7" fontFamily="monospace" letterSpacing="1">BACKTEST TRADES</text>
        <path d="M29 119H155M29 48V119M29 83H155M91 48V119" stroke="rgba(147,167,189,.1)" />
        {[[42, 74], [58, 101], [75, 61], [94, 91], [111, 112], [130, 67], [148, 97]].map(([x, y], index) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="4" fill={index % 3 === 0 ? '#4ca9ff' : index % 3 === 1 ? '#20c5bd' : '#ff8a91'} className="trade-dot" style={{ animationDelay: `${index * 0.16}s` }} />
        ))}
        <path d="M174 76H199" stroke="#4ca9ff" strokeWidth="2" strokeDasharray="4 6" className="trade-flow-line" />
        <path d="M193 72L201 76L193 80" fill="#4ca9ff" />
        <text x="282" y="21" textAnchor="middle" fill="#7ebcff" fontSize="7" fontFamily="monospace">TRAIN + VALIDATE</text>
        {[[220, 42], [220, 76], [220, 110], [282, 58], [282, 94], [344, 76]].map(([x, y], index) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r={index === 5 ? 12 : 8} fill={index === 5 ? 'rgba(32,197,189,.22)' : 'rgba(76,169,255,.15)'} stroke={index === 5 ? '#20c5bd' : 'rgba(76,169,255,.65)'} />
        ))}
        {['M228 42L274 58', 'M228 42L274 94', 'M228 76L274 58', 'M228 76L274 94', 'M228 110L274 58', 'M228 110L274 94', 'M290 58L332 76', 'M290 94L332 76'].map((d) => <path key={d} d={d} stroke="rgba(76,169,255,.35)" />)}
        <path d="M356 76H388" stroke="#4ca9ff" strokeWidth="2" strokeDasharray="4 6" className="trade-flow-line" />
        <rect x="392" y="48" width="104" height="56" rx="14" fill="rgba(32,197,189,.08)" stroke="rgba(32,197,189,.28)" />
        <text x="444" y="72" textAnchor="middle" fill="#93a7bd" fontSize="8" fontFamily="monospace">ENTRY SCORE</text>
        <text x="444" y="92" textAnchor="middle" fill="#7ee9e3" fontSize="15" fontFamily="monospace">0.82</text>
      </svg>
    );
  }

  if (variant === 'ai') {
    return (
      <svg viewBox="0 0 520 150" className="h-32 w-full sm:h-36" fill="none" aria-hidden="true">
        <rect x="14" y="18" width="156" height="116" rx="14" fill="rgba(147,167,189,.045)" stroke="rgba(147,167,189,.16)" />
        <text x="29" y="38" fill="#93a7bd" fontSize="7" fontFamily="monospace" letterSpacing="1">BACKTEST TRADES</text>
        <path d="M29 119H155M29 48V119M29 83H155M91 48V119" stroke="rgba(147,167,189,.1)" />
        {[[42, 74], [58, 101], [75, 61], [94, 91], [111, 112], [130, 67], [148, 97]].map(([x, y], index) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="4" fill={index % 3 === 0 ? '#ff8a6b' : index % 3 === 1 ? '#20c5bd' : '#ff8a91'} className="trade-dot" style={{ animationDelay: `${index * 0.16}s` }} />
        ))}
        <path d="M174 77H200" stroke="#ff8a6b" strokeWidth="2" strokeDasharray="4 7" className="trade-flow-line" />
        <path d="M194 73L202 77L194 81" fill="#ff8a6b" />
        <circle cx="264" cy="76" r="45" fill="rgba(76,169,255,.08)" stroke="rgba(76,169,255,.3)" />
        <circle cx="264" cy="76" r="31" fill="rgba(76,169,255,.08)" stroke="rgba(76,169,255,.22)" />
        <path d="M246 77C246 65 254 58 264 58C274 58 282 65 282 77C282 88 274 96 264 96C254 96 246 88 246 77Z" stroke="#4ca9ff" strokeWidth="2" />
        <path d="M253 75L260 82L276 66" stroke="#7ebcff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M309 76H362" stroke="#ff8a6b" strokeWidth="2" strokeDasharray="4 7" className="trade-flow-line" />
        <rect x="382" y="35" width="112" height="34" rx="10" fill="rgba(32,197,189,.08)" stroke="rgba(32,197,189,.25)" />
        <rect x="382" y="83" width="112" height="34" rx="10" fill="rgba(255,95,112,.08)" stroke="rgba(255,95,112,.25)" />
        <text x="438" y="56" textAnchor="middle" fill="#7ee9e3" fontSize="9" fontFamily="monospace">ALLOW</text>
        <text x="438" y="104" textAnchor="middle" fill="#ff8a91" fontSize="9" fontFamily="monospace">REJECT</text>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 520 150" className="h-32 w-full sm:h-36" fill="none" aria-hidden="true">
      <rect x="14" y="18" width="162" height="116" rx="14" fill="rgba(147,167,189,.045)" stroke="rgba(147,167,189,.16)" />
      <text x="29" y="38" fill="#93a7bd" fontSize="7" fontFamily="monospace" letterSpacing="1">BACKTEST TRADES</text>
      <path d="M29 119H162M29 48V119" stroke="rgba(147,167,189,.12)" />
      {[[42, 96], [58, 72], [74, 105], [92, 48], [108, 61], [124, 88], [146, 42], [151, 101]].map(([x, y], index) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="4" fill={index < 3 ? '#4ca9ff' : index < 6 ? '#20c5bd' : '#f3bf72'} className="trade-dot" style={{ animationDelay: `${index * 0.16}s` }} />
      ))}
      <rect x="34" y="84" width="52" height="34" rx="9" stroke="rgba(76,169,255,.55)" strokeDasharray="4 4" />
      <rect x="82" y="38" width="58" height="38" rx="9" stroke="rgba(32,197,189,.6)" strokeDasharray="4 4" />
      <rect x="132" y="30" width="34" height="84" rx="9" stroke="rgba(243,191,114,.55)" strokeDasharray="4 4" />
      <path d="M186 76H238" stroke="#20c5bd" strokeWidth="2" strokeDasharray="4 6" className="trade-flow-line" />
      <rect x="242" y="35" width="112" height="82" rx="16" fill="rgba(32,197,189,.09)" stroke="rgba(32,197,189,.35)" />
      <path d="M264 58H330M264 76H318M264 94H324" stroke="#7ee9e3" strokeWidth="2" strokeLinecap="round" />
      <path d="M354 76H397" stroke="#20c5bd" strokeWidth="2" strokeDasharray="4 6" className="trade-flow-line" />
      <circle cx="450" cy="76" r="34" fill="rgba(32,197,189,.08)" stroke="rgba(32,197,189,.3)" />
      <circle cx="450" cy="76" r="23" fill="rgba(32,197,189,.08)" stroke="rgba(32,197,189,.22)" />
      <path d="M438 75L449 86L469 64" stroke="#7ee9e3" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArchitectureIllustration({
  variant,
  steps,
  recommended,
}: {
  variant: ModelKey;
  steps: readonly string[];
  recommended: boolean;
}) {
  return (
    <div className={`overflow-hidden rounded-2xl border bg-[#0d151d] ${recommended ? 'border-[#66e4dc]/22' : 'border-[#091019]/12'}`}>
      <div className="border-b border-white/7 px-4 pb-1 pt-3">
        <ArchitectureArt variant={variant} />
      </div>
      <div
        className="grid gap-px bg-white/7"
        style={{ gridTemplateColumns: `repeat(${steps.length}, minmax(0, 1fr))` }}
      >
        {steps.map((step, index) => (
          <div
            key={step}
            className={`flex min-h-12 items-center justify-center bg-[#101a23] px-2 text-center font-mono text-[7px] font-medium leading-relaxed tracking-[0.1em] sm:text-[8px] ${
              recommended && index === steps.length - 2 ? 'text-[#8ff3ed]' : 'text-[#a9b9ca]'
            }`}
          >
            {step}
          </div>
        ))}
      </div>
    </div>
  );
}

export function TradingModels() {
  const { t } = useLocale();

  return (
    <section
      id="trading-models"
      className="relative overflow-hidden border-b border-border bg-[#f7faf8] py-20 text-[#091019] lg:py-28"
    >
      <div className="absolute inset-0 blueprint-grid opacity-35" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        <AnimateOnScroll>
          <div className="mb-14 grid gap-8 lg:mb-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <div className="mb-5 font-mono text-[10px] tracking-[0.22em] text-[#087f79]">
                01 / {t.tradingModels.sectionLabel}
              </div>
              <h2 className="max-w-4xl text-4xl font-bold leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-7xl text-balance">
                {t.tradingModels.sectionTitle}
              </h2>
            </div>
            <div className="max-w-xl lg:justify-self-end">
              <p className="text-base leading-relaxed text-[#263842]/72 lg:text-lg">
                {t.tradingModels.sectionSubtitle}
              </p>
              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 font-mono text-[9px] tracking-[0.08em] text-[#263842]/62">
                <span className="flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#087f79]/8 text-[#087f79]">
                    <Check size={11} strokeWidth={2.5} />
                  </span>
                  {t.tradingModels.legend.positive}
                </span>
                <span className="flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#2678bd]/10 text-[#2678bd]">
                    <Minus size={11} strokeWidth={2.5} />
                  </span>
                  {t.tradingModels.legend.requirement}
                </span>
                <span className="flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#d75f43]/10 text-[#c45136]">
                    <CircleAlert size={11} strokeWidth={2.5} />
                  </span>
                  {t.tradingModels.legend.warning}
                </span>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        <div className="space-y-4">
          {t.tradingModels.items.map((item, index) => {
            const recommended = item.key === 'gate';
            const Icon = icons[item.key];
            const signalRows = item.signals
              .map((signal, signalIndex) => ({
                signal,
                tone: signalTones[item.key][signalIndex] ?? 'requirement',
              }))
              .sort((a, b) => {
                const order = { positive: 0, requirement: 1, warning: 2 } as const;
                return order[a.tone] - order[b.tone];
              });

            return (
              <AnimateOnScroll
                key={item.key}
                delay={index * 70}
                variant={recommended ? 'scale' : 'up'}
              >
                <article
                  className={`relative grid gap-8 overflow-hidden rounded-[28px] border px-6 py-9 sm:px-8 lg:grid-cols-[0.82fr_1.18fr_0.78fr] lg:items-center lg:gap-10 lg:px-10 lg:py-12 ${
                    recommended
                      ? 'border-[#087f79] bg-[#0b2425] text-white shadow-[0_26px_90px_rgba(8,127,121,0.16)]'
                      : 'border-[#091019]/14 bg-white/95 text-[#091019] shadow-[0_16px_60px_rgba(9,16,25,0.055)]'
                  }`}
                >
                  {recommended && (
                    <div className="pointer-events-none absolute inset-0 control-grid opacity-25" />
                  )}

                  <div className="relative">
                    <div className="mb-6 flex items-center gap-4">
                      <span
                        className={`font-mono text-[10px] tracking-[0.2em] ${
                          recommended ? 'text-[#66e4dc]' : 'text-[#087f79]'
                        }`}
                      >
                        {item.index}
                      </span>
                      <span
                        className={`h-px w-10 ${recommended ? 'bg-[#66e4dc]/40' : 'bg-[#087f79]/35'}`}
                      />
                      <Icon
                        size={17}
                        className={recommended ? 'text-[#66e4dc]' : 'text-[#087f79]'}
                      />
                    </div>
                    {recommended && (
                      <div className="mb-4 inline-flex rounded-full border border-[#66e4dc]/30 bg-[#66e4dc]/10 px-3 py-1 font-mono text-[8px] tracking-[0.16em] text-[#66e4dc]">
                        {t.tradingModels.recommendation}
                      </div>
                    )}
                    <h3 className="text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
                      {item.title}
                    </h3>
                    <p
                      className={`mt-4 max-w-md text-sm leading-relaxed ${
                        recommended ? 'text-white/72' : 'text-[#263842]/88'
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>

                  <div className="relative min-w-0">
                    <ArchitectureIllustration
                      variant={item.key}
                      steps={item.steps}
                      recommended={recommended}
                    />
                    <p
                      className={`mt-4 text-xs leading-relaxed ${
                        recommended ? 'text-white/62' : 'text-[#40545e]'
                      }`}
                    >
                      {item.tradeoff}
                    </p>
                  </div>

                  <div className="relative space-y-3">
                    {signalRows.map(({ signal, tone }) => {
                      const SignalIcon =
                        tone === 'positive'
                          ? Check
                          : tone === 'warning'
                            ? CircleAlert
                            : Minus;
                      const toneClass =
                        tone === 'positive'
                          ? recommended
                            ? 'bg-[#66e4dc]/12 text-[#66e4dc]'
                            : 'bg-[#087f79]/8 text-[#087f79]'
                          : tone === 'warning'
                            ? recommended
                              ? 'bg-[#ff8a6b]/12 text-[#ff9c83]'
                              : 'bg-[#d75f43]/10 text-[#c45136]'
                            : recommended
                              ? 'bg-[#7ebcff]/12 text-[#8fc5ff]'
                              : 'bg-[#2678bd]/10 text-[#2678bd]';

                      return (
                        <div
                          key={signal}
                          className={`flex items-center gap-3 border-b pb-3 text-xs font-medium last:border-b-0 last:pb-0 ${
                            recommended
                              ? 'border-white/10 text-white/75'
                              : 'border-[#091019]/10 text-[#1c2b32]'
                          }`}
                        >
                          <span
                            className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${toneClass}`}
                          >
                            <SignalIcon size={11} strokeWidth={2.5} />
                          </span>
                          {signal}
                        </div>
                      );
                    })}
                  </div>
                </article>
              </AnimateOnScroll>
            );
          })}
        </div>

        <AnimateOnScroll delay={120}>
          <div className="mt-10 flex flex-col gap-4 border-l-2 border-[#087f79] pl-5 sm:flex-row sm:items-center sm:justify-between lg:mt-14">
            <p className="max-w-3xl text-xl font-semibold tracking-[-0.025em] sm:text-2xl">
              {t.tradingModels.thesis}
            </p>
            <span className="font-mono text-[9px] tracking-[0.18em] text-[#087f79]">
              RESEARCH → RULES → RUNTIME
            </span>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
