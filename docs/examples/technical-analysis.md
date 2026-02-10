# Technical Analysis

Using technical indicators and momentum for trading decisions.

## Overview

Technical analysis uses price patterns, indicators, and momentum to identify trading opportunities.

## RSI Strategy

### Oversold Stocks

Find oversold stocks ready for bounce:

```typescript
import { StockScreener, StockField } from 'tradingview-screener';

const screener = new StockScreener();

screener
  .where(StockField.RSI.lt(30))  // Oversold
  .where(StockField.MARKET_CAPITALIZATION.gt(1e9))
  .where(StockField.VOLUME.gte(500_000))
  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.RSI,
    StockField.CHANGE_PERCENT
  )
  .sortBy(StockField.RSI, true);

const results = await screener.get();
```

### RSI Sweet Spot

RSI between 50-70 (bullish but not overbought):

```typescript
screener
  .where(StockField.RSI.between(50, 70))
  .where(StockField.VOLUME.gte(1_000_000))
  .where(StockField.MARKET_CAPITALIZATION.gt(1e9))
  .sortBy(StockField.CHANGE_PERCENT, false);
```

## Volatility Analysis

### High Volatility Stocks

Find stocks with significant price movement using ATR:

```typescript
const screener = new StockScreener();

screener
  .where(StockField.ATR.gt(2))  // High volatility
  .where(StockField.MARKET_CAPITALIZATION.gt(1e9))
  .where(StockField.VOLUME.gte(500_000))
  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.ATR,
    StockField.CHANGE_PERCENT,
    StockField.VOLUME
  )
  .sortBy(StockField.ATR, false);
```

### Low Volatility Screening

Stable stocks with lower risk:

```typescript
screener
  .where(StockField.ATR.lt(1))  // Low volatility
  .where(StockField.MARKET_CAPITALIZATION.gt(5e9))
  .where(StockField.RSI.between(40, 60))
  .sortBy(StockField.MARKET_CAPITALIZATION, false);
```

## Momentum Screening

### Strong Momentum

Stocks with powerful upward momentum:

```typescript
const screener = new StockScreener();

screener
  .where(StockField.CHANGE_PERCENT.gt(3))  // Today's change
  .where(StockField.VOLUME.gte(1_000_000))
  .where(StockField.RSI.lt(70))  // Not overbought yet
  .where(StockField.MARKET_CAPITALIZATION.gt(1e9))
  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.CHANGE_PERCENT,
    StockField.VOLUME,
    StockField.RSI
  )
  .sortBy(StockField.CHANGE_PERCENT, false);
```

### Volume Surge

High volume with price increase:

```typescript
screener
  .where(StockField.CHANGE_PERCENT.gt(2))
  .where(StockField.VOLUME.gte(2_000_000))  // High volume threshold
  .where(StockField.MARKET_CAPITALIZATION.gt(500e6))
  .sortBy(StockField.VOLUME, false);
```

## Price and RSI Strategy

### RSI Divergence Setup

Identify potential reversals with RSI:

```typescript
const screener = new StockScreener();

screener
  .where(StockField.RSI.lt(30))  // Oversold
  .where(StockField.CHANGE_PERCENT.gt(-5))  // Not in free fall
  .where(StockField.VOLUME.gte(500_000))
  .where(StockField.MARKET_CAPITALIZATION.gt(1e9))
  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.RSI,
    StockField.CHANGE_PERCENT,
    StockField.ATR
  )
  .sortBy(StockField.RSI, true);
```

## Volatility-Based Trading

### ATR Breakout Scanner

High volatility breakout opportunities:

```typescript
screener
  .where(StockField.ATR.gt(1.5))  // Significant volatility
  .where(StockField.CHANGE_PERCENT.gt(3))
  .where(StockField.VOLUME.gte(500_000))
  .where(StockField.MARKET_CAPITALIZATION.gt(500e6))
  .sortBy(StockField.ATR, false);
```

### RSI with Low Volatility

Oversold stocks with manageable risk:

```typescript
screener
  .where(StockField.RSI.lt(40))
  .where(StockField.ATR.lt(2))  // Lower volatility/risk
  .where(StockField.MARKET_CAPITALIZATION.gt(1e9))
  .sortBy(StockField.RSI, true);
```

## Combined Technical Screen

Multiple technical indicators:

```typescript
async function comprehensiveTechnicalScreen() {
  const screener = new StockScreener();

  screener
    // RSI momentum
    .where(StockField.RSI.between(50, 70))

    // Volatility check
    .where(StockField.ATR.gt(0.5))  // Some volatility for trading

    // Volume
    .where(StockField.VOLUME.gte(500_000))

    // Price movement
    .where(StockField.CHANGE_PERCENT.gt(1))

    // Size
    .where(StockField.MARKET_CAPITALIZATION.gt(1e9))

    .select(
      StockField.NAME,
      StockField.PRICE,
      StockField.RSI,
      StockField.ATR,
      StockField.CHANGE_PERCENT,
      StockField.VOLUME
    )
    .sortBy(StockField.CHANGE_PERCENT, false);

  return await screener.get();
}
```

## Breakout Scanner

### Price Momentum Breakout

Stocks with strong price movement:

```typescript
screener
  .where(StockField.CHANGE_PERCENT.gt(5))
  .where(StockField.VOLUME.gte(1_000_000))
  .where(StockField.RSI.lt(75))
  .where(StockField.MARKET_CAPITALIZATION.gt(500e6))
  .sortBy(StockField.CHANGE_PERCENT, false);
```

### Volume Breakout with Volatility

High volume with significant price range:

```typescript
screener
  .where(StockField.VOLUME.gte(2_000_000))
  .where(StockField.CHANGE_PERCENT.gt(3))
  .where(StockField.ATR.gt(1))  // Volatility present
  .where(StockField.MARKET_CAPITALIZATION.gt(1e9))
  .sortBy(StockField.VOLUME, false);
```

## Trading Setup Scanner

### Entry Point Scanner

Find potential entry points:

```typescript
async function tradingSetup() {
  const screener = new StockScreener();

  screener
    // Look for pullbacks in momentum
    .where(StockField.CHANGE_PERCENT.between(-3, 0))

    // RSI support level
    .where(StockField.RSI.between(35, 50))

    // Adequate volume
    .where(StockField.VOLUME.gte(500_000))

    // Quality stocks
    .where(StockField.MARKET_CAPITALIZATION.gt(1e9))

    .select(
      StockField.NAME,
      StockField.PRICE,
      StockField.RSI,
      StockField.CHANGE_PERCENT,
      StockField.ATR
    )
    .sortBy(StockField.RSI, true);

  return await screener.get();
}
```

## Active Trading Scanner

### High Activity Stocks

Stocks with strong intraday movement:

```typescript
screener
  .where(StockField.CHANGE_PERCENT.gt(3))
  .where(StockField.VOLUME.gte(1_000_000))
  .where(StockField.PRICE.between(5, 100))
  .where(StockField.ATR.gt(0.5))
  .sortBy(StockField.CHANGE_PERCENT, false);
```

### Momentum Scanner

Strong momentum with RSI confirmation:

```typescript
screener
  .where(StockField.CHANGE_PERCENT.gt(5))
  .where(StockField.VOLUME.gte(2_000_000))
  .where(StockField.RSI.between(60, 80))
  .where(StockField.PRICE.gt(10))
  .sortBy(StockField.VOLUME, false);
```

## Real-Time Technical Monitor

```typescript
async function liveTechnicalMonitor() {
  const screener = new StockScreener();

  screener
    .where(StockField.RSI.between(50, 70))
    .where(StockField.VOLUME.gte(1_000_000))
    .where(StockField.MARKET_CAPITALIZATION.gt(1e9))
    .select(
      StockField.NAME,
      StockField.PRICE,
      StockField.RSI,
      StockField.CHANGE_PERCENT,
      StockField.VOLUME
    )
    .sortBy(StockField.CHANGE_PERCENT, false)
    .setRange(0, 15);

  for await (const data of screener.stream({ interval: 30000 })) {
    if (data) {
      console.clear();
      console.log('=== Technical Screener ===');
      console.log(`${new Date().toLocaleTimeString()}\n`);

      data.data.forEach((stock, i) => {
        console.log(
          `${(i + 1).toString().padStart(2)}. ` +
          `${stock.name.padEnd(25)} ` +
          `$${stock.close.toFixed(2).padStart(7)} ` +
          `RSI: ${stock.rsi.toFixed(1).padStart(5)} ` +
          `Change: ${stock.change_abs > 0 ? '+' : ''}${stock.change_abs.toFixed(2)}%`
        );
      });
    }
  }
}
```

## Best Practices

1. **RSI Analysis**: Use RSI (30 oversold, 70 overbought) for momentum signals
2. **ATR for Risk**: Use ATR to gauge volatility and set appropriate stop losses
3. **Volume Verification**: Always check volume to confirm price movements
4. **Multiple Confirmations**: Combine RSI and ATR with price and volume
5. **Market Context**: Consider overall market trend and conditions

## Next Steps

- [Value Investing](value-investing.md) - Fundamental analysis
- [Growth Stocks](growth-stocks.md) - High-growth companies
- [Market Scanning](market-scanning.md) - Daily scans
