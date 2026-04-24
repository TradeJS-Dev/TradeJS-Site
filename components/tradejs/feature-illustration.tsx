'use client';

import { useId, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

export type FeatureIllustrationVariant =
  | 'typescript-strategies'
  | 'pine-compatibility'
  | 'self-hosted'
  | 'grid-backtesting'
  | 'ai-validation'
  | 'runtime-ai'
  | 'results-to-runtime'
  | 'telegram-notifications';

type FeatureIllustrationTone = 'primary' | 'info' | 'success';

interface FeatureIllustrationProps {
  variant: FeatureIllustrationVariant;
  tone: FeatureIllustrationTone;
  className?: string;
}

interface TonePalette {
  solid: string;
  soft: string;
  glow: string;
  shadow: string;
}

interface IllustrationDefs {
  accentGradient: string;
  softGradient: string;
  arrowMarker: string;
  tone: TonePalette;
}

const tonePalettes: Record<FeatureIllustrationTone, TonePalette> = {
  primary: {
    solid: '#20c5bd',
    soft: 'rgba(32, 197, 189, 0.18)',
    glow: 'rgba(32, 197, 189, 0.22)',
    shadow: 'rgba(32, 197, 189, 0.14)',
  },
  info: {
    solid: '#4ca9ff',
    soft: 'rgba(76, 169, 255, 0.18)',
    glow: 'rgba(76, 169, 255, 0.22)',
    shadow: 'rgba(76, 169, 255, 0.16)',
  },
  success: {
    solid: '#19c6a0',
    soft: 'rgba(25, 198, 160, 0.18)',
    glow: 'rgba(25, 198, 160, 0.22)',
    shadow: 'rgba(25, 198, 160, 0.14)',
  },
};

const chrome = {
  panel: 'rgba(9, 13, 20, 0.86)',
  surface: 'rgba(17, 24, 38, 0.84)',
  border: 'rgba(76, 93, 117, 0.6)',
  borderSoft: 'rgba(76, 93, 117, 0.36)',
  line: 'rgba(213, 221, 238, 0.16)',
  fill: 'rgba(213, 221, 238, 0.08)',
  muted: 'rgba(156, 176, 199, 0.22)',
  dot: 'rgba(156, 176, 199, 0.4)',
  text: 'rgba(213, 221, 238, 0.76)',
  textMuted: 'rgba(156, 176, 199, 0.72)',
  positive: 'rgba(25, 198, 160, 0.2)',
  positiveStroke: '#19c6a0',
  warning: 'rgba(243, 191, 114, 0.2)',
  warningStroke: '#f3bf72',
  negative: 'rgba(255, 95, 112, 0.2)',
  negativeStroke: '#ff5f70',
};

const svgFontFamily = 'var(--font-manrope), Manrope, sans-serif';

function WindowFrame({
  x,
  y,
  width,
  height,
  children,
}: {
  x: number;
  y: number;
  width: number;
  height: number;
  children: ReactNode;
}) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect
        width={width}
        height={height}
        rx="16"
        fill={chrome.surface}
      />
      <g transform="translate(12 14)">{children}</g>
    </g>
  );
}

function FlowPath({
  d,
  stroke,
  markerEnd,
  dashed = false,
  strokeWidth = 3,
  opacity = 1,
}: {
  d: string;
  stroke: string;
  markerEnd?: string;
  dashed?: boolean;
  strokeWidth?: number;
  opacity?: number;
}) {
  return (
    <path
      d={d}
      fill="none"
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      strokeDasharray={dashed ? '6 8' : undefined}
      markerEnd={markerEnd}
      opacity={opacity}
    />
  );
}

function Dot({
  cx,
  cy,
  r = 4,
  fill = chrome.dot,
}: {
  cx: number;
  cy: number;
  r?: number;
  fill?: string;
}) {
  return <circle cx={cx} cy={cy} r={r} fill={fill} />;
}

function CodeLine({
  x,
  y,
  width,
  fill,
  height = 5,
}: {
  x: number;
  y: number;
  width: number;
  fill: string;
  height?: number;
}) {
  return (
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      rx={height / 2}
      fill={fill}
    />
  );
}

function Sparkline({
  points,
  stroke,
  strokeWidth = 3,
}: {
  points: string;
  stroke: string;
  strokeWidth?: number;
}) {
  return (
    <polyline
      points={points}
      fill="none"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  );
}

function Chip({
  x,
  y,
  width,
  label,
  fill = chrome.fill,
  stroke,
  textFill = chrome.text,
}: {
  x: number;
  y: number;
  width: number;
  label: string;
  fill?: string;
  stroke?: string;
  textFill?: string;
}) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect width={width} height="16" rx="8" fill={fill} stroke={stroke} />
      <text
        x={width / 2}
        y="11"
        textAnchor="middle"
        fontSize="6.4"
        fontWeight="700"
        letterSpacing="0"
        fill={textFill}
        style={{ fontFamily: svgFontFamily }}
      >
        {label}
      </text>
    </g>
  );
}

function SvgText({
  x,
  y,
  label,
  fill = chrome.textMuted,
  fontSize = 8,
  fontWeight = 700,
  anchor = 'start',
}: {
  x: number;
  y: number;
  label: string;
  fill?: string;
  fontSize?: number;
  fontWeight?: number;
  anchor?: 'start' | 'middle' | 'end';
}) {
  return (
    <text
      x={x}
      y={y}
      textAnchor={anchor}
      fontSize={fontSize}
      fontWeight={fontWeight}
      letterSpacing="0"
      fill={fill}
      style={{ fontFamily: svgFontFamily }}
    >
      {label}
    </text>
  );
}

function CheckMark({
  x,
  y,
  stroke,
}: {
  x: number;
  y: number;
  stroke: string;
}) {
  return (
    <path
      d={`M${x} ${y + 3}l3 3 6-7`}
      fill="none"
      stroke={stroke}
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  );
}

function CrossMark({
  x,
  y,
  stroke,
}: {
  x: number;
  y: number;
  stroke: string;
}) {
  return (
    <>
      <path
        d={`M${x} ${y}l8 8`}
        fill="none"
        stroke={stroke}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d={`M${x + 8} ${y}l-8 8`}
        fill="none"
        stroke={stroke}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </>
  );
}

function renderVariant(variant: FeatureIllustrationVariant, defs: IllustrationDefs) {
  const accentStroke = `url(#${defs.accentGradient})`;
  const softFill = `url(#${defs.softGradient})`;
  const arrowMarker = `url(#${defs.arrowMarker})`;

  switch (variant) {
    case 'typescript-strategies':
      return (
        <>
          <WindowFrame x={10} y={20} width={138} height={128}>
            <Chip
              x={0}
              y={0}
              width={28}
              label="TS"
              fill={defs.tone.soft}
              textFill={defs.tone.solid}
            />
            <Chip x={34} y={0} width={42} label="TYPES" fill={chrome.fill} />
            <CodeLine x={0} y={24} width={60} fill={softFill} />
            <CodeLine x={66} y={24} width={28} fill={chrome.fill} />
            <CodeLine x={0} y={38} width={94} fill={chrome.fill} />
            <CodeLine x={0} y={52} width={46} fill={defs.tone.soft} />
            <CodeLine x={52} y={52} width={42} fill={chrome.fill} />
            <CodeLine x={0} y={66} width={82} fill={chrome.fill} />
            <rect
              x="72"
              y="14"
              width="34"
              height="28"
              rx="8"
              fill={chrome.panel}
            />
            <SvgText x={82} y={27} label="qty" fontSize={6.5} anchor="middle" />
            <SvgText x={82} y={36} label="risk" fontSize={6.5} anchor="middle" />
            <Chip x={0} y={80} width={38} label="AUTO" fill={chrome.fill} />
            <Chip x={44} y={80} width={34} label="SAFE" fill={defs.tone.soft} />
          </WindowFrame>

          <WindowFrame x={184} y={28} width={124} height={112}>
            <Chip x={0} y={0} width={34} label="EMA" fill={defs.tone.soft} />
            <Chip x={40} y={0} width={32} label="RSI" fill={chrome.fill} />
            <Chip x={78} y={0} width={34} label="NPM" fill={chrome.fill} />
            <path d="M0 28H100" stroke={chrome.line} strokeDasharray="5 6" />
            <path d="M0 48H100" stroke={chrome.line} strokeDasharray="5 6" />
            <Sparkline
              points="0,56 16,50 30,40 46,46 62,24 78,32 96,14"
              stroke={accentStroke}
            />
            <Sparkline
              points="0,60 16,54 30,50 46,36 62,42 78,30 96,26"
              stroke={defs.tone.soft}
              strokeWidth={2.2}
            />
            <Dot cx={62} cy={24} fill={defs.tone.solid} />
            <Dot cx={62} cy={42} fill={chrome.textMuted} />
            <Chip x={54} y={62} width={36} label="TOOLS" fill={chrome.fill} />
          </WindowFrame>

          <FlowPath
            d="M149 70C164 70 168 62 182 62"
            stroke={accentStroke}
            markerEnd={arrowMarker}
          />
          <Chip
            x={132}
            y={92}
            width={42}
            label="SHIP"
            fill={chrome.panel}
          />
        </>
      );

    case 'pine-compatibility':
      return (
        <>
          <WindowFrame x={12} y={24} width={108} height={92}>
            <Chip
              x={0}
              y={0}
              width={40}
              label="PINE"
              fill={defs.tone.soft}
              textFill={defs.tone.solid}
            />
            <CodeLine x={0} y={22} width={52} fill={defs.tone.soft} />
            <CodeLine x={0} y={36} width={74} fill={chrome.fill} />
            <CodeLine x={0} y={50} width={62} fill={chrome.fill} />
            <Sparkline
              points="0,52 16,54 28,42 42,48 56,28 72,38 84,16"
              stroke={accentStroke}
            />
            <Dot cx={28} cy={42} fill={chrome.textMuted} />
            <Dot cx={56} cy={28} fill={defs.tone.solid} />
          </WindowFrame>

          <WindowFrame x={200} y={24} width={108} height={92}>
            <Chip
              x={0}
              y={0}
              width={58}
              label="TRADEJS"
              fill={chrome.fill}
            />
            <CodeLine x={0} y={22} width={44} fill={defs.tone.soft} />
            <CodeLine x={0} y={36} width={78} fill={chrome.fill} />
            <CodeLine x={0} y={50} width={58} fill={chrome.fill} />
            <Sparkline
              points="0,52 16,54 28,42 42,48 56,28 72,38 84,16"
              stroke={accentStroke}
            />
            <Dot cx={28} cy={42} fill={chrome.textMuted} />
            <Dot cx={56} cy={28} fill={defs.tone.solid} />
          </WindowFrame>

          <FlowPath
            d="M122 68C150 68 158 56 198 56"
            stroke={accentStroke}
            markerEnd={arrowMarker}
          />
          <Chip
            x={121}
            y={82}
            width={78}
            label="NO REWRITE"
            fill={chrome.panel}
          />
        </>
      );

    case 'self-hosted':
      return (
        <>
          <g transform="translate(18 28)">
            <Chip
              x={10}
              y={-8}
              width={46}
              label="LOCAL"
              fill={defs.tone.soft}
              textFill={defs.tone.solid}
            />
            <rect x="0" y="14" width="74" height="46" rx="10" fill={chrome.surface} />
            <rect x="10" y="24" width="54" height="24" rx="6" fill={chrome.fill} />
            <path
              d="M8 66H66"
              stroke={chrome.borderSoft}
              strokeWidth="5"
              strokeLinecap="round"
            />
          </g>

          <g transform="translate(214 24)">
            <Chip x={4} y={0} width={56} label="SERVER" fill={chrome.fill} />
            <rect x="0" y="20" width="82" height="76" rx="16" fill={chrome.surface} />
            <rect x="16" y="34" width="50" height="10" rx="5" fill={defs.tone.soft} />
            <rect x="16" y="52" width="50" height="10" rx="5" fill={chrome.fill} />
            <rect x="16" y="70" width="50" height="10" rx="5" fill={defs.tone.soft} />
            <Dot cx={58} cy={39} r={2.5} fill={defs.tone.solid} />
            <Dot cx={58} cy={57} r={2.5} fill={chrome.textMuted} />
            <Dot cx={58} cy={75} r={2.5} fill={defs.tone.solid} />
          </g>

          <g transform="translate(132 40)">
            <path
              d="M28 0l26 12v18c0 18-12 32-26 38C14 62 2 48 2 30V12L28 0z"
              fill={chrome.panel}
              stroke={accentStroke}
              strokeWidth="2.5"
            />
            <rect x="20" y="23" width="16" height="16" rx="4" fill={defs.tone.soft} />
            <path
              d="M24 23v-5a4 4 0 118 0v5"
              fill="none"
              stroke={defs.tone.solid}
              strokeWidth="2.2"
              strokeLinecap="round"
            />
          </g>

          <Chip x={28} y={118} width={40} label="DATA" fill={chrome.panel} />
          <Chip
            x={214}
            y={118}
            width={54}
            label="CONTROL"
            fill={defs.tone.soft}
            textFill={defs.tone.solid}
          />
        </>
      );

    case 'grid-backtesting':
      return (
        <>
          <WindowFrame x={10} y={20} width={140} height={126}>
            <Chip
              x={0}
              y={0}
              width={40}
              label="GRID"
              fill={defs.tone.soft}
              textFill={defs.tone.solid}
            />
            <SvgText x={2} y={28} label="FAST" fontSize={6.5} />
            <SvgText x={42} y={28} label="SLOW" fontSize={6.5} />
            <SvgText x={82} y={28} label="TP" fontSize={6.5} />
            {Array.from({ length: 3 }).map((_, column) => (
              <g key={column}>
                {Array.from({ length: 4 }).map((__, row) => {
                  const x = column * 40;
                  const y = row * 14;
                  const active =
                    (column === 0 && row === 1) ||
                    (column === 1 && row === 2) ||
                    (column === 2 && row === 0) ||
                    (column === 2 && row === 3);

                  return (
                    <rect
                      key={row}
                      x={x}
                      y={34 + y}
                      width="26"
                      height="9"
                      rx="4.5"
                      fill={active ? defs.tone.soft : chrome.fill}
                      stroke={active ? defs.tone.solid : 'transparent'}
                    />
                  );
                })}
              </g>
            ))}
            <Chip x={0} y={76} width={48} label="64 RUNS" fill={chrome.fill} />
            <Chip x={54} y={76} width={46} label="AUTO" fill={defs.tone.soft} />
          </WindowFrame>

          <FlowPath d="M152 68H184" stroke={accentStroke} markerEnd={arrowMarker} />

          <WindowFrame x={188} y={28} width={122} height={110}>
            <Chip
              x={0}
              y={0}
              width={40}
              label="BEST"
              fill={defs.tone.soft}
              textFill={defs.tone.solid}
            />
            <rect x="0" y="24" width="84" height="14" rx="7" fill={defs.tone.soft} />
            <SvgText
              x={8}
              y={34}
              label="#1 18/55"
              fill={defs.tone.solid}
              fontSize={6.5}
            />
            <rect x="0" y="46" width="72" height="12" rx="6" fill={chrome.fill} />
            <SvgText x={8} y={55} label="#2 12/34" fontSize={6.5} />
            <rect x="0" y="66" width="60" height="12" rx="6" fill={chrome.fill} />
            <SvgText x={8} y={75} label="#3 9/21" fontSize={6.5} />
            <path d="M88 30h12" stroke={accentStroke} strokeWidth="3" strokeLinecap="round" />
            <path d="M96 24l8 6-8 6" fill="none" stroke={defs.tone.solid} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </WindowFrame>
        </>
      );

    case 'ai-validation':
      return (
        <>
          <WindowFrame x={10} y={24} width={102} height={104}>
            <Chip
              x={0}
              y={0}
              width={48}
              label="REPLAY"
              fill={defs.tone.soft}
              textFill={defs.tone.solid}
            />
            <rect x="0" y="22" width="76" height="12" rx="6" fill={chrome.fill} />
            <rect x="0" y="40" width="82" height="12" rx="6" fill={chrome.fill} />
            <rect x="0" y="58" width="70" height="12" rx="6" fill={chrome.fill} />
            <Dot cx={82} cy={28} fill={defs.tone.solid} />
            <Dot cx={88} cy={46} fill={defs.tone.solid} />
            <Dot cx={76} cy={64} fill={defs.tone.solid} />
          </WindowFrame>

          <Chip
            x={114}
            y={64}
            width={54}
            label="REPLAY"
            fill={chrome.panel}
          />
          <FlowPath
            d="M114 54C138 54 154 42 184 40"
            stroke={accentStroke}
            markerEnd={arrowMarker}
          />
          <FlowPath
            d="M114 86C138 86 154 94 184 96"
            stroke={accentStroke}
            markerEnd={arrowMarker}
          />

          <WindowFrame x={186} y={22} width={122} height={66}>
            <Chip x={0} y={0} width={58} label="OLD" fill={chrome.fill} />
            <rect x="0" y="22" width="48" height="12" rx="6" fill={chrome.fill} />
            <CheckMark x={54} y={23} stroke={chrome.positiveStroke} />
            <rect x="68" y="22" width="34" height="12" rx="6" fill={chrome.negative} />
            <CrossMark x={108} y={24} stroke={chrome.negativeStroke} />
          </WindowFrame>

          <WindowFrame x={186} y={82} width={122} height={66}>
            <Chip
              x={0}
              y={0}
              width={58}
              label="NEW"
              fill={defs.tone.soft}
              textFill={defs.tone.solid}
            />
            <rect x="0" y="22" width="48" height="12" rx="6" fill={chrome.positive} />
            <CheckMark x={54} y={23} stroke={chrome.positiveStroke} />
            <rect x="68" y="22" width="34" height="12" rx="6" fill={chrome.positive} />
            <CheckMark x={108} y={23} stroke={chrome.positiveStroke} />
          </WindowFrame>
        </>
      );

    case 'runtime-ai':
      return (
        <>
          <WindowFrame x={10} y={28} width={96} height={108}>
            <Chip
              x={0}
              y={0}
              width={38}
              label="LIVE"
              fill={defs.tone.soft}
              textFill={defs.tone.solid}
            />
            <rect x="0" y="24" width="66" height="12" rx="6" fill={chrome.fill} />
            <rect x="0" y="44" width="76" height="12" rx="6" fill={chrome.fill} />
            <rect x="0" y="64" width="58" height="12" rx="6" fill={chrome.fill} />
            <Dot cx={72} cy={30} fill={defs.tone.solid} />
            <Dot cx={82} cy={50} fill={defs.tone.solid} />
            <Dot cx={64} cy={70} fill={defs.tone.solid} />
          </WindowFrame>

          <FlowPath d="M108 72C120 72 124 72 132 72" stroke={accentStroke} />

          <g transform="translate(132 42)">
            <circle
              cx="28"
              cy="28"
              r="28"
              fill={chrome.panel}
              stroke={accentStroke}
            />
            <Chip
              x={10}
              y={16}
              width={20}
              label="AI"
              fill={defs.tone.soft}
              textFill={defs.tone.solid}
            />
            <Chip x={32} y={36} width={22} label="ML" fill={chrome.fill} />
            <Dot cx={28} cy={-4} fill={defs.tone.solid} />
            <Dot cx={56} cy={48} fill={defs.tone.solid} />
            <Dot cx={0} cy={48} fill={defs.tone.solid} />
            <FlowPath d="M28 4V0" stroke={accentStroke} strokeWidth={2.2} />
            <FlowPath d="M49 44l5 3" stroke={accentStroke} strokeWidth={2.2} />
            <FlowPath d="M7 44l-5 3" stroke={accentStroke} strokeWidth={2.2} />
          </g>

          <FlowPath
            d="M188 72C198 72 202 72 206 72"
            stroke={accentStroke}
            markerEnd={arrowMarker}
          />

          <WindowFrame x={206} y={24} width={104} height={120}>
            <Chip
              x={0}
              y={0}
              width={48}
              label="SCORES"
              fill={chrome.fill}
            />
            <rect x="0" y="24" width="80" height="16" rx="8" fill={chrome.positive} />
            <SvgText
              x={8}
              y={35}
              label="GO   92"
              fill={chrome.positiveStroke}
              fontSize={7}
            />
            <rect x="0" y="48" width="62" height="16" rx="8" fill={chrome.warning} />
            <SvgText
              x={8}
              y={59}
              label="WAIT 61"
              fill={chrome.warningStroke}
              fontSize={7}
            />
            <rect x="0" y="72" width="44" height="16" rx="8" fill={chrome.negative} />
            <SvgText
              x={8}
              y={83}
              label="BLOCK 24"
              fill={chrome.negativeStroke}
              fontSize={7}
            />
          </WindowFrame>
        </>
      );

    case 'results-to-runtime':
      return (
        <>
          <WindowFrame x={10} y={24} width={118} height={110}>
            <Chip
              x={0}
              y={0}
              width={66}
              label="BACKTEST"
              fill={defs.tone.soft}
              textFill={defs.tone.solid}
            />
            <rect x="0" y="24" width="90" height="14" rx="7" fill={defs.tone.soft} />
            <SvgText
              x={8}
              y={34}
              label="WINNER +18%"
              fill={defs.tone.solid}
              fontSize={7}
            />
            <rect x="0" y="46" width="74" height="12" rx="6" fill={chrome.fill} />
            <SvgText x={8} y={55} label="ALT A   +9.3%" fontSize={6.5} />
            <rect x="0" y="64" width="60" height="12" rx="6" fill={chrome.fill} />
            <SvgText x={8} y={73} label="ALT B   +6.1%" fontSize={6.5} />
          </WindowFrame>

          <FlowPath
            d="M132 72H162"
            stroke={accentStroke}
            strokeWidth={4}
            markerEnd={arrowMarker}
          />
          <Chip
            x={132}
            y={90}
            width={58}
            label="PROMOTE"
            fill={chrome.panel}
          />

          <WindowFrame x={194} y={22} width={116} height={124}>
            <Chip x={0} y={0} width={58} label="RUNTIME" fill={chrome.fill} />
            <rect x="0" y="24" width="90" height="16" rx="8" fill={defs.tone.soft} />
            <SvgText
              x={8}
              y={35}
              label="EMA 18/55"
              fill={defs.tone.solid}
              fontSize={7}
            />
            <rect x="0" y="48" width="90" height="16" rx="8" fill={chrome.fill} />
            <SvgText x={8} y={59} label="RISK 1.0%" fontSize={7} />
            <rect x="0" y="74" width="56" height="16" rx="8" fill={chrome.positive} />
            <SvgText
              x={8}
              y={85}
              label="LIVE ON"
              fill={chrome.positiveStroke}
              fontSize={7}
            />
            <path
              d="M74 82l12-8v16z"
              fill={defs.tone.solid}
              opacity="0.92"
            />
          </WindowFrame>
        </>
      );

    case 'telegram-notifications':
      return (
        <>
          <WindowFrame x={10} y={28} width={112} height={108}>
            <Chip
              x={0}
              y={0}
              width={52}
              label="EVENTS"
              fill={defs.tone.soft}
              textFill={defs.tone.solid}
            />
            <rect x="0" y="24" width="72" height="12" rx="6" fill={chrome.fill} />
            <SvgText x={12} y={33} label="SIGNAL" fontSize={6.5} />
            <Dot cx={6} cy={30} fill={chrome.positiveStroke} />
            <rect x="0" y="44" width="84" height="12" rx="6" fill={chrome.fill} />
            <SvgText x={12} y={53} label="EXECUTION" fontSize={6.5} />
            <Dot cx={6} cy={50} fill={defs.tone.solid} />
            <rect x="0" y="64" width="66" height="12" rx="6" fill={chrome.fill} />
            <SvgText x={12} y={73} label="ERROR" fontSize={6.5} />
            <Dot cx={6} cy={70} fill={chrome.negativeStroke} />
          </WindowFrame>

          <FlowPath
            d="M124 56C152 56 168 48 206 48"
            stroke={accentStroke}
            markerEnd={arrowMarker}
          />
          <FlowPath
            d="M124 74C152 74 168 74 206 74"
            stroke={accentStroke}
            markerEnd={arrowMarker}
            opacity={0.85}
          />
          <FlowPath
            d="M124 92C152 92 168 100 206 100"
            stroke={accentStroke}
            markerEnd={arrowMarker}
            opacity={0.75}
          />

          <g transform="translate(210 18)">
            <rect
              width="88"
              height="126"
              rx="24"
              fill={chrome.panel}
              stroke={accentStroke}
            />
            <rect x="24" y="10" width="40" height="6" rx="3" fill={chrome.fill} />
            <Chip
              x={12}
              y={26}
              width={42}
              label="SIGNAL"
              fill={chrome.positive}
              textFill={chrome.positiveStroke}
            />
            <Chip x={30} y={52} width={42} label="FILL" fill={chrome.fill} />
            <Chip
              x={12}
              y={78}
              width={42}
              label="ERROR"
              fill={chrome.negative}
              textFill={chrome.negativeStroke}
            />
            <circle cx="68" cy="24" r="10" fill={defs.tone.soft} />
            <SvgText
              x={68}
              y={27}
              label="3"
              anchor="middle"
              fill={defs.tone.solid}
              fontSize={9}
            />
          </g>
        </>
      );
  }
}

export function FeatureIllustration({
  variant,
  tone,
  className,
}: FeatureIllustrationProps) {
  const id = useId().replace(/:/g, '');
  const palette = tonePalettes[tone];
  const accentGradient = `${id}-accent`;
  const softGradient = `${id}-soft`;
  const arrowMarker = `${id}-arrow`;

  return (
    <div
      aria-hidden="true"
      className={cn(
        'relative mb-6 h-[132px] overflow-hidden rounded-2xl border border-white/8 bg-[linear-gradient(135deg,rgba(9,13,20,0.96),rgba(17,24,38,0.82)_50%,rgba(19,31,49,0.62))] p-1.5 transition-transform duration-300 group-hover:-translate-y-0.5',
        className,
      )}
      style={{
        boxShadow: `inset 0 1px 0 rgba(255,255,255,0.04), 0 18px 40px ${palette.shadow}`,
      }}
    >
      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            'linear-gradient(rgba(156,176,199,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(156,176,199,0.07) 1px, transparent 1px)',
          backgroundSize: '18px 18px',
        }}
      />
      <div
        className="absolute -right-8 top-1/2 h-28 w-28 -translate-y-1/2 rounded-full blur-3xl"
        style={{
          background: `radial-gradient(circle, ${palette.glow} 0%, transparent 72%)`,
        }}
      />

      <svg
        viewBox="8 14 304 122"
        className="relative h-full w-full"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id={accentGradient} x1="0" y1="0" x2="320" y2="160">
            <stop offset="0%" stopColor={palette.solid} stopOpacity="1" />
            <stop offset="100%" stopColor={palette.solid} stopOpacity="0.5" />
          </linearGradient>
          <linearGradient id={softGradient} x1="0" y1="0" x2="120" y2="0">
            <stop offset="0%" stopColor={palette.solid} stopOpacity="0.28" />
            <stop offset="100%" stopColor={palette.solid} stopOpacity="0.1" />
          </linearGradient>
          <marker
            id={arrowMarker}
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto-start-reverse"
          >
            <path d="M0 0L10 5L0 10Z" fill={palette.solid} />
          </marker>
        </defs>

        {renderVariant(variant, {
          accentGradient,
          softGradient,
          arrowMarker,
          tone: palette,
        })}
      </svg>
    </div>
  );
}
