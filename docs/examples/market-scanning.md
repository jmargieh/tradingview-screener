# Market Scanning

Daily market scans and watchlist management.

## Overview

Systematic market scanning to identify opportunities across different market conditions.

## Pre-Market Scanner

### Gap Up Scanner

```typescript
import { StockScreener, StockField } from 'tradingview-screener';

async function preMarketGappers() {
  const screener = new StockScreener();

  screener
    .where(StockField.CHANGE_PERCENT.gt(3))
    .where(StockField.VOLUME.gte(500_000))
    .where(StockField.PRICE.between(5, 100))
    .select(
      StockField.NAME,
      StockField.PRICE,
      StockField.CHANGE_PERCENT,
      StockField.VOLUME
    )
    .sortBy(StockField.CHANGE_PERCENT, false)
    .setRange(0, 20);

  return await screener.get();
}

// Run before market open
const gappers = await preMarketGappers();
console.log('Pre-Market Gappers:');
console.table(gappers.data);
```

## Morning Scan

### Market Leaders

Identify strong stocks at market open:

```typescript
async function morningLeaders() {
  const screener = new StockScreener();

  screener
    // Strong momentum
    .where(StockField.CHANGE_PERCENT.gt(2))
    .where(StockField.VOLUME.gte(1_000_000))

    // Technical strength
    .where(StockField.RSI.between(55, 70))

    // Size and liquidity
    .where(StockField.MARKET_CAPITALIZATION.gt(500e6))

    .select(
      StockField.NAME,
      StockField.PRICE,
      StockField.CHANGE_PERCENT,
      StockField.RSI,
      StockField.VOLUME
    )
    .sortBy(StockField.CHANGE_PERCENT, false);

  return await screener.get();
}
```

## Midday Momentum

### Continuation Patterns

```typescript
async function middayMomentum() {
  const screener = new StockScreener();

  screener
    // Sustained momentum
    .where(StockField.CHANGE_PERCENT.gt(3))

    // Not overextended
    .where(StockField.RSI.between(60, 75))

    // Liquidity
    .where(StockField.VOLUME.gte(1_000_000))

    .select(
      StockField.NAME,
      StockField.PRICE,
      StockField.CHANGE_PERCENT,
      StockField.RSI,
      StockField.VOLUME
    )
    .sortBy(StockField.VOLUME, false);

  return await screener.get();
}
```

## End-of-Day Review

### Daily Breakouts

```typescript
async function dailyBreakouts() {
  const screener = new StockScreener();

  screener
    // Volume confirmation
    .where(StockField.VOLUME.gte(1_000_000))

    // Not overextended
    .where(StockField.RSI.lt(75))

    // Size
    .where(StockField.MARKET_CAPITALIZATION.gt(1e9))

    .select(
      StockField.NAME,
      StockField.PRICE,
      StockField.CHANGE_PERCENT,
      StockField.VOLUME
    )
    .sortBy(StockField.CHANGE_PERCENT, false);

  return await screener.get();
}
```

## Sector Rotation Scanner

```typescript
async function sectorRotation() {
  const sectors = [
    'Technology',
    'Healthcare',
    'Financial',
    'Consumer Cyclical',
    'Industrials',
    'Energy',
    'Utilities',
    'Real Estate',
  ];

  const sectorPerformance = [];

  for (const sector of sectors) {
    const screener = new StockScreener();

    screener
      .where(StockField.MARKET_CAPITALIZATION.gt(1e9))
      .select(StockField.CHANGE_PERCENT);

    const results = await screener.get();

    const avgChange = results.data.reduce((sum, s) => sum + s.change_abs, 0) / results.data.length;

    sectorPerformance.push({
      sector,
      avgChange: avgChange.toFixed(2),
      count: results.totalCount,
    });
  }

  // Sort by performance
  sectorPerformance.sort((a, b) => parseFloat(b.avgChange) - parseFloat(a.avgChange));

  return sectorPerformance;
}

// Usage
const sectors = await sectorRotation();
console.log('Sector Performance:');
console.table(sectors);
```

## Weekly Swing Setup

```typescript
async function weeklySwingSetup() {
  const screener = new StockScreener();

  screener
    // RSI confirmation
    .where(StockField.RSI.between(40, 55))

    // Quality
    .where(StockField.MARKET_CAPITALIZATION.gt(2e9))
    .where(StockField.VOLUME.gte(500_000))

    .select(
      StockField.NAME,
      StockField.PRICE,
      StockField.RSI,
      StockField.CHANGE_PERCENT
    )
    .sortBy(StockField.RSI, true);

  return await screener.get();
}
```

## Earnings Calendar Scanner

```typescript
async function upcomingEarnings(daysAhead: number = 7) {
  const screener = new StockScreener();

  screener
    // Size and liquidity
    .where(StockField.MARKET_CAPITALIZATION.gt(1e9))
    .where(StockField.VOLUME.gte(500_000))

    // Technical setup
    .where(StockField.RSI.between(45, 65))

    .select(
      StockField.NAME,
      StockField.PRICE,
      StockField.EARNINGS_PER_SHARE_DILUTED_TTM
    )
    .sortBy(StockField.PRICE, true);

  const results = await screener.get();
  return results.data;
}
```

## Watchlist Builder

```typescript
class WatchlistManager {
  private watchlists: Map<string, string[]> = new Map();

  async createFromScreen(
    name: string,
    screener: StockScreener,
    maxStocks: number = 20
  ): Promise<void> {
    screener.setRange(0, maxStocks);
    const results = await screener.get();

    const symbols = results.data.map(s => s.symbol);
    this.watchlists.set(name, symbols);

    console.log(`Created watchlist "${name}" with ${symbols.length} stocks`);
  }

  async scan(name: string): Promise<any[]> {
    const symbols = this.watchlists.get(name);
    if (!symbols) {
      throw new Error(`Watchlist "${name}" not found`);
    }

    const screener = new StockScreener();

    screener
      .select(
        StockField.NAME,
        StockField.PRICE,
        StockField.CHANGE_PERCENT,
        StockField.VOLUME,
        StockField.RSI
      );

    const results = await screener.get();
    return results.data;
  }

  listWatchlists(): string[] {
    return Array.from(this.watchlists.keys());
  }
}

// Usage
const manager = new WatchlistManager();

// Create momentum watchlist
const momentum = new StockScreener();
momentum
  .where(StockField.CHANGE_PERCENT.gt(10))
  .where(StockField.MARKET_CAPITALIZATION.gt(1e9));

await manager.createFromScreen('momentum', momentum, 20);

// Create value watchlist
const value = new StockScreener();
value
  .where(StockField.PRICE_TO_EARNINGS_RATIO_TTM.lt(15))
  .where(StockField.DIVIDEND_YIELD_FWD.gt(3));

await manager.createFromScreen('value', value, 20);

// Scan watchlists
const momentumScan = await manager.scan('momentum');
console.table(momentumScan);
```

## Multi-Strategy Scanner

```typescript
async function dailyMarketScan() {
  console.log('=== Daily Market Scan ===\n');

  // 1. Momentum leaders
  console.log('📈 Momentum Leaders:');
  const momentum = await morningLeaders();
  console.table(momentum.data.slice(0, 5));

  // 2. Breakouts
  console.log('\n🚀 New Breakouts:');
  const breakouts = await dailyBreakouts();
  console.table(breakouts.data.slice(0, 5));

  // 3. Swing setups
  console.log('\n📊 Swing Trade Setups:');
  const swings = await weeklySwingSetup();
  console.table(swings.data.slice(0, 5));

  // 4. Sector performance
  console.log('\n🏭 Sector Performance:');
  const sectors = await sectorRotation();
  console.table(sectors);

  // 5. Oversold bounce candidates
  console.log('\n💎 Oversold Stocks:');
  const oversold = new StockScreener();
  oversold
    .where(StockField.RSI.lt(30))
    .where(StockField.MARKET_CAPITALIZATION.gt(1e9))
    .setRange(0, 5);

  const oversoldResults = await oversold.get();
  console.table(oversoldResults.data);
}

// Run daily scan
await dailyMarketScan();
```

## Automated Alert System

```typescript
async function marketAlertSystem() {
  const alerts = {
    bigMovers: { threshold: 5, hits: [] as any[] },
    volumeSurge: { threshold: 3, hits: [] as any[] },
    breakouts: { hits: [] as any[] },
  };

  const screener = new StockScreener();

  screener
    .where(StockField.MARKET_CAPITALIZATION.gt(1e9))
    .where(StockField.VOLUME.gte(500_000))
    .select(
      StockField.NAME,
      StockField.PRICE,
      StockField.CHANGE_PERCENT,
      StockField.VOLUME
    );

  for await (const data of screener.stream({ interval: 60000 })) {
    if (!data) continue;

    alerts.bigMovers.hits = data.data.filter(
      s => Math.abs(s.change_abs) >= alerts.bigMovers.threshold
    );

    alerts.volumeSurge.hits = data.data.filter(
      s => s.volume >= alerts.volumeSurge.threshold * 1000000
    );

    alerts.breakouts.hits = data.data.filter(
      s => s.close >= s.price * 1.05
    );

    if (alerts.bigMovers.hits.length > 0 ||
        alerts.volumeSurge.hits.length > 0 ||
        alerts.breakouts.hits.length > 0) {

      console.log(`\n🚨 ALERTS ${new Date().toLocaleTimeString()}`);

      if (alerts.bigMovers.hits.length > 0) {
        console.log(`\n📊 Big Movers (${alerts.bigMovers.threshold}%+):`);
        alerts.bigMovers.hits.forEach(s => {
          console.log(`  ${s.name}: ${s.change_abs > 0 ? '+' : ''}${s.change_abs}%`);
        });
      }

      if (alerts.volumeSurge.hits.length > 0) {
        console.log(`\n📈 Volume Surge (${alerts.volumeSurge.threshold}x+):`);
        alerts.volumeSurge.hits.forEach(s => {
          console.log(`  ${s.name}: High volume`);
        });
      }

      if (alerts.breakouts.hits.length > 0) {
        console.log('\n🚀 New Highs:');
        alerts.breakouts.hits.forEach(s => {
          console.log(`  ${s.name}: $${s.close.toFixed(2)}`);
        });
      }
    }
  }
}

// Start alert system
await marketAlertSystem();
```

## Market Summary Report

```typescript
async function generateMarketSummary() {
  const summary = {
    timestamp: new Date().toLocaleString(),
    stats: {
      advancers: 0,
      decliners: 0,
      unchanged: 0,
      newHighs: 0,
      newLows: 0,
      highVolume: 0,
    },
  };

  const screener = new StockScreener();

  screener
    .where(StockField.MARKET_CAPITALIZATION.gt(1e9))
    .select(
      StockField.CHANGE_PERCENT,
      StockField.PRICE,
      StockField.VOLUME
    );

  const results = await screener.get();

  results.data.forEach(stock => {
    if (stock.change_abs > 0) summary.stats.advancers++;
    else if (stock.change_abs < 0) summary.stats.decliners++;
    else summary.stats.unchanged++;

    if (stock.volume > 2000000) summary.stats.highVolume++;
  });

  console.log('=== Market Summary ===');
  console.log(`Time: ${summary.timestamp}\n`);
  console.log(`Advancers: ${summary.stats.advancers}`);
  console.log(`Decliners: ${summary.stats.decliners}`);
  console.log(`Advance/Decline Ratio: ${(summary.stats.advancers / summary.stats.decliners).toFixed(2)}`);
  console.log(`\nHigh Volume Stocks: ${summary.stats.highVolume}`);

  return summary;
}

// Generate report
await generateMarketSummary();
```

## Best Practices

1. **Schedule Scans**: Run at consistent times daily
2. **Multiple Strategies**: Don't rely on one scan
3. **Track Results**: Log and review performance
4. **Adjust Filters**: Refine based on results
5. **Risk Management**: Always use stop losses
6. **Position Sizing**: Don't overconcentrate

## Next Steps

- [Value Investing](value-investing.md) - Finding undervalued stocks
- [Growth Stocks](growth-stocks.md) - High-growth companies
- [Technical Analysis](technical-analysis.md) - Technical indicators
