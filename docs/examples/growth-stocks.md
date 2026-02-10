# Growth Stocks

Finding high-growth companies with strong momentum.

## Overview

Growth investing focuses on companies with above-average revenue and earnings growth, typically trading at premium valuations.

## Basic Growth Screen

### High Revenue Growth

Find companies with strong revenue expansion:

```typescript
import { StockScreener, StockField } from 'tradingview-screener';

const screener = new StockScreener();

screener
  .where(StockField.REVENUE_TTM_YOY_GROWTH.gt(20))
  .where(StockField.MARKET_CAPITALIZATION.gt(1e9))
  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.REVENUE_TTM_YOY_GROWTH,
    StockField.MARKET_CAPITALIZATION
  )
  .sortBy(StockField.REVENUE_TTM_YOY_GROWTH, false)
  .setRange(0, 50);

const results = await screener.get();
console.table(results.data);
```

### Profitable Companies

Companies with positive earnings:

```typescript
screener
  .where(StockField.NET_INCOME_TTM.gt(0))  // Profitable
  .where(StockField.MARKET_CAPITALIZATION.between(1e9, 50e9))  // Mid-cap
  .where(StockField.EARNINGS_PER_SHARE_DILUTED_TTM.gt(1))
  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.NET_INCOME_TTM,
    StockField.EARNINGS_PER_SHARE_DILUTED_TTM
  )
  .sortBy(StockField.NET_INCOME_TTM, false);
```

## GARP Strategy

Growth at a Reasonable Price:

```typescript
async function garpScreen() {
  const screener = new StockScreener();

  screener
    // Strong growth
    .where(StockField.REVENUE_TTM_YOY_GROWTH.gt(15))

    // Reasonable valuation
    .where(StockField.PRICE_TO_EARNINGS_RATIO_TTM.lt(30))
    .where(StockField.PRICE_EARNINGS_GROWTH_TTM.lt(2))  // PEG < 2

    // Size
    .where(StockField.MARKET_CAPITALIZATION.gt(2e9))

    .select(
      StockField.NAME,
      StockField.PRICE,
      StockField.REVENUE_TTM_YOY_GROWTH,
      StockField.PRICE_TO_EARNINGS_RATIO_TTM,
      StockField.PRICE_EARNINGS_GROWTH_TTM
    )
    .sortBy(StockField.PRICE_EARNINGS_GROWTH_TTM, true);

  return await screener.get();
}

// Usage
const garpStocks = await garpScreen();
console.table(garpStocks.data);
```

## High-Growth Companies

Companies with strong revenue growth:

```typescript
const screener = new StockScreener();

screener
  // Strong growth
  .where(StockField.REVENUE_TTM_YOY_GROWTH.gt(30))

  // Profitable
  .where(StockField.NET_INCOME_TTM.gt(0))

  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.REVENUE_TTM_YOY_GROWTH,
    StockField.NET_INCOME_TTM
  )
  .sortBy(StockField.REVENUE_TTM_YOY_GROWTH, false);
```

## Small-Cap Growth

High-growth small companies:

```typescript
const screener = new StockScreener();

screener
  // Small-cap range
  .where(StockField.MARKET_CAPITALIZATION.between(300e6, 2e9))

  // Explosive growth
  .where(StockField.REVENUE_TTM_YOY_GROWTH.gt(40))

  // Liquidity
  .where(StockField.VOLUME.gte(100_000))

  // Not penny stocks
  .where(StockField.PRICE.gt(5))

  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.MARKET_CAPITALIZATION,
    StockField.REVENUE_TTM_YOY_GROWTH,
    StockField.VOLUME
  )
  .sortBy(StockField.REVENUE_TTM_YOY_GROWTH, false);
```

## Growth with Profitability

Companies with strong growth and profitability:

```typescript
async function profitableGrowthScreen() {
  const screener = new StockScreener();

  screener
    // Current growth
    .where(StockField.REVENUE_TTM_YOY_GROWTH.gt(25))

    // Strong profitability
    .where(StockField.NET_INCOME_TTM.gt(100e6))
    .where(StockField.EARNINGS_PER_SHARE_DILUTED_TTM.gt(2))

    .select(
      StockField.NAME,
      StockField.PRICE,
      StockField.REVENUE_TTM_YOY_GROWTH,
      StockField.NET_INCOME_TTM,
      StockField.EARNINGS_PER_SHARE_DILUTED_TTM
    )
    .sortBy(StockField.REVENUE_TTM_YOY_GROWTH, false);

  return await screener.get();
}
```

## Profitable Growth

Growth companies with strong profitability:

```typescript
const screener = new StockScreener();

screener
  // Growth
  .where(StockField.REVENUE_TTM_YOY_GROWTH.gt(20))

  // Profitability
  .where(StockField.NET_INCOME_TTM.gt(0))
  .where(StockField.EARNINGS_PER_SHARE_DILUTED_TTM.gt(1))

  // Size
  .where(StockField.MARKET_CAPITALIZATION.gt(5e9))

  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.REVENUE_TTM_YOY_GROWTH,
    StockField.NET_INCOME_TTM,
    StockField.EARNINGS_PER_SHARE_DILUTED_TTM
  )
  .sortBy(StockField.NET_INCOME_TTM, false);
```

## High Revenue Companies

Companies with strong revenue:

```typescript
async function highRevenueScreen() {
  const screener = new StockScreener();

  screener
    // High growth
    .where(StockField.REVENUE_TTM_YOY_GROWTH.gt(30))

    // Strong revenue base
    .where(StockField.REVENUE_TTM.gt(500e6))

    // Market size
    .where(StockField.MARKET_CAPITALIZATION.gt(1e9))

    .select(
      StockField.NAME,
      StockField.PRICE,
      StockField.REVENUE_TTM_YOY_GROWTH,
      StockField.REVENUE_TTM,
      StockField.PRICE_SALES_CURRENT
    )
    .sortBy(StockField.REVENUE_TTM_YOY_GROWTH, false);

  return await screener.get();
}
```

## Large Cap Growth

High-growth large companies:

```typescript
const screener = new StockScreener();

screener
  // Strong growth
  .where(StockField.REVENUE_TTM_YOY_GROWTH.gt(20))

  // Minimum revenue
  .where(StockField.REVENUE_TTM.gt(100e6))

  // Size range
  .where(StockField.MARKET_CAPITALIZATION.between(1e9, 50e9))

  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.REVENUE_TTM_YOY_GROWTH,
    StockField.REVENUE_TTM,
    StockField.MARKET_CAPITALIZATION
  )
  .sortBy(StockField.REVENUE_TTM_YOY_GROWTH, false);
```

## Momentum Growth

Combining growth with technical momentum:

```typescript
const screener = new StockScreener();

screener
  // Fundamental growth
  .where(StockField.REVENUE_TTM_YOY_GROWTH.gt(25))

  // Technical strength
  .where(StockField.RSI.between(50, 70))
  .where(StockField.CHANGE_PERCENT.gt(0))  // Positive daily change

  // Volume confirmation
  .where(StockField.VOLUME.gte(500_000))

  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.REVENUE_TTM_YOY_GROWTH,
    StockField.CHANGE_PERCENT,
    StockField.RSI
  )
  .sortBy(StockField.REVENUE_TTM_YOY_GROWTH, false);
```

## Emerging Growth

Early-stage high-growth companies:

```typescript
async function emergingGrowthScreen() {
  const screener = new StockScreener();

  screener
    // Small to mid-cap
    .where(StockField.MARKET_CAPITALIZATION.between(500e6, 5e9))

    // Explosive revenue growth
    .where(StockField.REVENUE_TTM_YOY_GROWTH.gt(50))

    // Minimum scale
    .where(StockField.REVENUE_TTM.gt(100e6))

    .select(
      StockField.NAME,
      StockField.PRICE,
      StockField.MARKET_CAPITALIZATION,
      StockField.REVENUE_TTM_YOY_GROWTH,
      StockField.REVENUE_TTM
    )
    .sortBy(StockField.REVENUE_TTM_YOY_GROWTH, false);

  return await screener.get();
}
```

## Strong Revenue Growth

Companies with sustained revenue growth:

```typescript
const screener = new StockScreener();

screener
  // Strong current growth
  .where(StockField.REVENUE_TTM_YOY_GROWTH.gt(15))

  // Profitability
  .where(StockField.NET_INCOME_TTM.gt(0))

  // Established but growing
  .where(StockField.MARKET_CAPITALIZATION.gt(5e9))

  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.REVENUE_TTM_YOY_GROWTH,
    StockField.REVENUE_TTM,
    StockField.NET_INCOME_TTM
  )
  .sortBy(StockField.REVENUE_TTM_YOY_GROWTH, false);
```

## Growth Score System

Comprehensive growth scoring:

```typescript
async function growthScoreScreen() {
  const screener = new StockScreener();

  screener
    .where(StockField.REVENUE_TTM_YOY_GROWTH.gt(15))
    .where(StockField.MARKET_CAPITALIZATION.gt(1e9))
    .select(
      StockField.NAME,
      StockField.PRICE,
      StockField.REVENUE_TTM_YOY_GROWTH,
      StockField.NET_INCOME_TTM,
      StockField.PRICE_EARNINGS_GROWTH_TTM,
      StockField.CHANGE_PERCENT
    );

  const results = await screener.get();

  // Calculate growth score
  const scored = results.data.map(stock => {
    let score = 0;

    // Revenue growth
    if (stock.revenue_ttm_yoy_growth > 30) score += 3;
    else if (stock.revenue_ttm_yoy_growth > 20) score += 2;
    else if (stock.revenue_ttm_yoy_growth > 15) score += 1;

    // Profitability
    if (stock.net_income_ttm > 500e6) score += 3;
    else if (stock.net_income_ttm > 100e6) score += 2;
    else if (stock.net_income_ttm > 0) score += 1;

    // Valuation (PEG ratio)
    if (stock.peg_ratio_ttm && stock.peg_ratio_ttm < 1) score += 2;
    else if (stock.peg_ratio_ttm && stock.peg_ratio_ttm < 1.5) score += 1;

    // Price momentum
    if (stock.change_abs > 2) score += 2;
    else if (stock.change_abs > 0) score += 1;

    return { ...stock, growthScore: score };
  });

  // Sort by score
  scored.sort((a, b) => b.growthScore - a.growthScore);

  return scored;
}

// Usage
const topGrowth = await growthScoreScreen();
console.log('Top growth stocks by score:');
console.table(topGrowth.slice(0, 20));
```

## Growth Monitor

Track growth stocks over time:

```typescript
async function monitorGrowthStocks() {
  const screener = new StockScreener();

  screener
    .where(StockField.REVENUE_TTM_YOY_GROWTH.gt(25))
    .where(StockField.MARKET_CAPITALIZATION.gt(2e9))
    .select(
      StockField.NAME,
      StockField.PRICE,
      StockField.REVENUE_TTM_YOY_GROWTH,
      StockField.CHANGE_PERCENT
    )
    .sortBy(StockField.REVENUE_TTM_YOY_GROWTH, false)
    .setRange(0, 20);

  for await (const data of screener.stream({ interval: 60000 })) {
    if (data) {
      console.clear();
      console.log('=== Growth Stocks Monitor ===');
      console.log(`Updated: ${new Date().toLocaleTimeString()}\n`);

      data.data.forEach((stock, i) => {
        const change = stock.change_abs > 0 ? `+${stock.change_abs}%` : `${stock.change_abs}%`;
        console.log(
          `${i + 1}. ${stock.name.padEnd(30)} ` +
          `$${stock.close.toFixed(2).padStart(8)} ` +
          `Growth: ${stock.revenue_ttm_yoy_growth}% ` +
          `Today: ${change}`
        );
      });
    }
  }
}
```

## Best Practices

1. **Balance Growth & Valuation**: Use PEG ratio to avoid overpaying
2. **Quality Matters**: Look for profitable companies with strong earnings
3. **Size Considerations**: Different market caps have different risk/reward profiles
4. **Momentum Confirmation**: Combine fundamentals with technicals
5. **Position Sizing**: Growth stocks are volatile, manage risk
6. **Revenue Quality**: Focus on companies with strong revenue bases

## Next Steps

- [Value Investing](value-investing.md) - Finding undervalued stocks
- [Technical Analysis](technical-analysis.md) - Momentum indicators
- [Market Scanning](market-scanning.md) - Daily scans
