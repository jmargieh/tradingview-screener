# Dividend Investing

Income strategies using dividend-paying stocks.

## Overview

Dividend investing focuses on generating passive income through regular dividend payments while maintaining capital appreciation potential.

## High Dividend Yield

### Basic Dividend Screen

```typescript
import { StockScreener, StockField } from 'tradingview-screener';

const screener = new StockScreener();

screener
  .where(StockField.DIVIDEND_YIELD_FWD.gte(4))
  .where(StockField.MARKET_CAPITALIZATION.gt(1e9))
  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.DIVIDEND_YIELD_FWD,
    StockField.DPS_COMMON_STOCK_PRIM_ISSUE_TTM,
    StockField.MARKET_CAPITALIZATION
  )
  .sortBy(StockField.DIVIDEND_YIELD_FWD, false);

const results = await screener.get();
console.table(results.data);
```

## Quality Dividend Stocks

Companies with strong dividend yields and quality metrics:

```typescript
async function qualityDividendStocks() {
  const screener = new StockScreener();

  screener
    // Strong yield
    .where(StockField.DIVIDEND_YIELD_FWD.gte(2.5))

    // Profitability
    .where(StockField.NET_INCOME_TTM.gt(0))
    .where(StockField.EARNINGS_PER_SHARE_DILUTED_TTM.gt(0))

    // Size and liquidity
    .where(StockField.MARKET_CAPITALIZATION.gt(5e9))
    .where(StockField.VOLUME.gt(500000))

    .select(
      StockField.NAME,
      StockField.PRICE,
      StockField.DIVIDEND_YIELD_FWD,
      StockField.DPS_COMMON_STOCK_PRIM_ISSUE_TTM,
      StockField.EARNINGS_PER_SHARE_DILUTED_TTM,
      StockField.MARKET_CAPITALIZATION
    )
    .sortBy(StockField.DIVIDEND_YIELD_FWD, false);

  return await screener.get();
}
```

## Dividend Growth

### High Yield with Growth Potential

```typescript
screener
  .where(StockField.DIVIDEND_YIELD_FWD.gte(2))
  .where(StockField.REVENUE_TTM_YOY_GROWTH.gt(5))
  .where(StockField.EARNINGS_PER_SHARE_DILUTED_TTM.gt(0))
  .where(StockField.NET_INCOME_TTM.gt(0))
  .select(
    StockField.NAME,
    StockField.DIVIDEND_YIELD_FWD,
    StockField.DPS_COMMON_STOCK_PRIM_ISSUE_TTM,
    StockField.REVENUE_TTM_YOY_GROWTH,
    StockField.EARNINGS_PER_SHARE_DILUTED_TTM
  )
  .sortBy(StockField.REVENUE_TTM_YOY_GROWTH, false);
```

## Safe Dividends

Financial strength and sustainability:

```typescript
async function safeDividendScreen() {
  const screener = new StockScreener();

  screener
    // Attractive yield
    .where(StockField.DIVIDEND_YIELD_FWD.between(3, 8))

    // Profitable
    .where(StockField.NET_INCOME_TTM.gt(0))
    .where(StockField.EARNINGS_PER_SHARE_DILUTED_TTM.gt(0))

    // Positive revenue growth
    .where(StockField.REVENUE_TTM_YOY_GROWTH.gt(-5))

    // Large cap for stability
    .where(StockField.MARKET_CAPITALIZATION.gt(2e9))

    .select(
      StockField.NAME,
      StockField.PRICE,
      StockField.DIVIDEND_YIELD_FWD,
      StockField.DPS_COMMON_STOCK_PRIM_ISSUE_TTM,
      StockField.NET_INCOME_TTM,
      StockField.EARNINGS_PER_SHARE_DILUTED_TTM
    )
    .sortBy(StockField.DIVIDEND_YIELD_FWD, false);

  return await screener.get();
}
```

## High Yield Stocks

Find stocks with attractive dividend yields:

```typescript
screener
  .where(StockField.DIVIDEND_YIELD_FWD.gte(5))
  .where(StockField.MARKET_CAPITALIZATION.gt(500e6))
  .where(StockField.VOLUME.gt(100000))
  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.DIVIDEND_YIELD_FWD,
    StockField.DPS_COMMON_STOCK_PRIM_ISSUE_TTM
  )
  .sortBy(StockField.DIVIDEND_YIELD_FWD, false);
```

## Sector-Specific Dividend Strategies

### High-Yield Sectors

Focus on traditionally high-dividend sectors:

```typescript
screener
  .where(StockField.DIVIDEND_YIELD_FWD.gte(4))
  .where(StockField.MARKET_CAPITALIZATION.gt(1e9))
  .where(StockField.VOLUME.gt(200000))
  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.DIVIDEND_YIELD_FWD,
    StockField.MARKET_CAPITALIZATION
  )
  .sortBy(StockField.DIVIDEND_YIELD_FWD, false);
```

## Dividend Value Combo

Combining dividends with value metrics:

```typescript
async function dividendValueScreen() {
  const screener = new StockScreener();

  screener
    // Dividend
    .where(StockField.DIVIDEND_YIELD_FWD.gte(3))

    // Value
    .where(StockField.PRICE_TO_EARNINGS_RATIO_TTM.lt(15))
    .where(StockField.PRICE_TO_BOOK_MRQ.lt(2))

    // Quality
    .where(StockField.NET_INCOME_TTM.gt(0))
    .where(StockField.EARNINGS_PER_SHARE_DILUTED_TTM.gt(0))

    // Size
    .where(StockField.MARKET_CAPITALIZATION.gt(2e9))

    .select(
      StockField.NAME,
      StockField.PRICE,
      StockField.DIVIDEND_YIELD_FWD,
      StockField.PRICE_TO_EARNINGS_RATIO_TTM,
      StockField.PRICE_TO_BOOK_MRQ,
      StockField.EARNINGS_PER_SHARE_DILUTED_TTM
    )
    .sortBy(StockField.DIVIDEND_YIELD_FWD, false);

  const results = await screener.get();

  // Calculate dividend score
  const scored = results.data.map(stock => {
    let score = 0;

    if (stock.dividend_yield_fwd > 4) score += 2;
    if (stock.price_earnings_ttm < 12) score += 2;
    if (stock.price_book_mrq < 1.5) score += 2;

    return { ...stock, dividendScore: score };
  });

  return scored.sort((a, b) => b.dividendScore - a.dividendScore);
}
```

## Dividend Portfolio Builder

```typescript
async function buildDividendPortfolio(targetYield: number = 4) {
  const screener = new StockScreener();

  screener
    .where(StockField.DIVIDEND_YIELD_FWD.gte(targetYield))
    .where(StockField.NET_INCOME_TTM.gt(0))
    .where(StockField.MARKET_CAPITALIZATION.gt(1e9))
    .where(StockField.VOLUME.gt(200000))
    .select(
      StockField.NAME,
      StockField.PRICE,
      StockField.DIVIDEND_YIELD_FWD,
      StockField.DPS_COMMON_STOCK_PRIM_ISSUE_TTM,
      StockField.MARKET_CAPITALIZATION
    )
    .sortBy(StockField.DIVIDEND_YIELD_FWD, false)
    .setRange(0, 50);

  const results = await screener.get();

  // Calculate portfolio yield
  const avgYield = results.data.reduce((sum, s) => sum + s.dividend_yield_fwd, 0) / results.data.length;

  return {
    stocks: results.data,
    count: results.data.length,
    averageYield: avgYield.toFixed(2) + '%',
  };
}

// Usage
const portfolio = await buildDividendPortfolio(4);
console.log(`Portfolio: ${portfolio.count} stocks`);
console.log(`Average Yield: ${portfolio.averageYield}`);
console.table(portfolio.stocks);
```

## Dividend Screening by Yield

Screen stocks by dividend yield ranges:

```typescript
async function screenByDividendYield() {
  const screener = new StockScreener();

  screener
    .where(StockField.DIVIDEND_YIELD_FWD.gte(3))
    .where(StockField.MARKET_CAPITALIZATION.gt(1e9))
    .where(StockField.NET_INCOME_TTM.gt(0))
    .select(
      StockField.NAME,
      StockField.PRICE,
      StockField.DIVIDEND_YIELD_FWD,
      StockField.DPS_COMMON_STOCK_PRIM_ISSUE_TTM,
      StockField.DIVIDENDS_YIELD_FY
    )
    .sortBy(StockField.DIVIDEND_YIELD_FWD, false);

  const results = await screener.get();

  // Categorize by yield
  const categories = {
    moderate: results.data.filter(s => s.dividend_yield_fwd >= 3 && s.dividend_yield_fwd < 5),
    high: results.data.filter(s => s.dividend_yield_fwd >= 5 && s.dividend_yield_fwd < 8),
    veryHigh: results.data.filter(s => s.dividend_yield_fwd >= 8),
  };

  return categories;
}
```

## Dividend Monitor

Track dividend portfolio:

```typescript
async function monitorDividendStocks(symbols: string[]) {
  const screener = new StockScreener();

  screener
    .where(StockField.SYMBOL.isin(symbols))
    .select(
      StockField.NAME,
      StockField.PRICE,
      StockField.CHANGE_PERCENT,
      StockField.DIVIDEND_YIELD_FWD,
      StockField.DPS_COMMON_STOCK_PRIM_ISSUE_TTM
    );

  for await (const data of screener.stream({ interval: 60000 })) {
    if (data) {
      console.clear();
      console.log('=== Dividend Portfolio Monitor ===');
      console.log(`Updated: ${new Date().toLocaleTimeString()}\n`);

      let totalValue = 0;
      let totalYield = 0;

      data.data.forEach((stock, i) => {
        const change = stock.change_percent > 0 ? `+${stock.change_percent}%` : `${stock.change_percent}%`;
        console.log(
          `${(i + 1).toString().padStart(2)}. ${stock.name.padEnd(25)} ` +
          `$${stock.price.toFixed(2).padStart(7)} ` +
          `${change.padStart(7)} ` +
          `Yield: ${stock.dividend_yield_fwd.toFixed(2)}%`
        );

        totalValue += stock.price;
        totalYield += stock.dividend_yield_fwd;
      });

      console.log(`\nAverage Yield: ${(totalYield / data.data.length).toFixed(2)}%`);
    }
  }
}

// Usage
await monitorDividendStocks(['JNJ', 'PG', 'KO', 'PEP', 'MCD']);
```

## Best Practices

1. **Diversification**: Spread across sectors and companies
2. **Yield Analysis**: Compare forward yield (DIVIDEND_YIELD_FWD) with fiscal year yield (DIVIDENDS_YIELD_FY)
3. **Sustainability**: Check dividend per share (DPS_COMMON_STOCK_PRIM_ISSUE_TTM) relative to earnings
4. **Financial Health**: Verify positive net income and earnings per share
5. **Yield Trap**: Avoid extremely high yields (>10%) without thorough research
6. **Size Matters**: Focus on larger cap companies for dividend stability

## Next Steps

- [Value Investing](value-investing.md) - Finding undervalued stocks
- [Market Scanning](market-scanning.md) - Daily scans
- [Basic Usage](../basic-usage.md) - Core concepts
