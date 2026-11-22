// Deterministic demo candles in USDT. The setup follows the strategy's close-acceptance mode.
const closes = [
  67620, 67650, 67628, 67680, 67658, 67715, 67700, 67758, 67738, 67808,
  67862, 67940, 68028, 68065, 67972, 67894, 67757, 67622, 67527, 67635,
  67824, 68080, 68312, 68557, 68672, 68533, 68319, 68068, 67823, 67645,
  67528, 67678, 67832, 67983, 68069, 67937, 67860, 67764, 67622, 67420,
  67404, 67310, 67220, 67298, 67126, 66989, 67055, 66828, 66696, 66748,
  66524, 66420, 66308,
];

export const pivots = [
  { index: 13, price: 68100 },
  { index: 18, price: 67500 },
  { index: 24, price: 68700 },
  { index: 30, price: 67500 },
  { index: 34, price: 68100 },
] as const;

export const breakoutIndex = 39;
export const entryIndex = 40;
export const exitIndex = closes.length - 1;
export const neckline = pivots[1].price;
const headHeight = pivots[2].price - neckline;
// The default SHORT plan projects 100% of the head height below the neckline.
export const target = neckline - headHeight;
export const stop = pivots[2].price + headHeight * 0.05;
export const entry = closes[entryIndex];

export const candles = closes.map((close, index) => {
  const open = index === 0 ? 67602 : closes[index - 1] + (index * 7 % 13) - 6;
  const pivot = pivots.find((point) => point.index === index);
  const high = Math.max(open, close) + 14 + (index * 11 % 19);
  const low = Math.min(open, close) - 13 - (index * 5 % 13);
  const volume = (index === entryIndex ? 175 : 100) + (index * 19 % 47) + Math.round(Math.abs(close - open) / 4);
  return {
    open,
    high: pivot && pivot.price > close ? pivot.price : high,
    low: pivot && pivot.price < close ? pivot.price : low,
    close,
    volume,
  };
});

// Supply the strategy's prior-trend lookback before the first visible candle.
export const warmupCandles = Array.from({ length: 80 }, (_, index) => {
  const close = 68000 - Math.max(0, index - 60) * 20;
  return { close, open: close + 3, high: close + 17, low: close - 15, volume: 110 };
});

const history = [...warmupCandles, ...candles];
export const atr = candles.map((_, index) => {
  const end = warmupCandles.length + index;
  const first = end - 13;
  const ranges = history.slice(first, end + 1).map((candle, offset) => {
    const previous = history[first + offset - 1];
    return Math.max(
      candle.high - candle.low,
      Math.abs(candle.high - previous.close),
      Math.abs(candle.low - previous.close),
    );
  });
  return ranges.reduce((sum, range) => sum + range, 0) / ranges.length;
});
