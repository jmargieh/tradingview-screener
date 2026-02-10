# Value Investing

Finding undervalued stocks using fundamental analysis with currently implemented fields.

## Overview

Value investing focuses on finding stocks trading below their intrinsic value based on fundamental metrics. This guide uses only the **21 currently implemented StockField constants**.

## Available Value Metrics

The following valuation fields are currently implemented:

- `PRICE_TO_EARNINGS_RATIO_TTM` - P/E ratio
- `PRICE_EARNINGS_GROWTH_TTM` - PEG ratio
- `PRICE_SALES_CURRENT` - Price to Sales ratio
- `PRICE_TO_BOOK_MRQ` - Price to Book ratio
- `ENTERPRISE_VALUE_EBITDA_TTM` - EV/EBITDA ratio
- `DIVIDEND_YIELD_FWD` - Forward dividend yield
- `DIVIDENDS_YIELD_FY` - Fiscal year dividend yield

## Basic Value Screen

### Low P/E Ratio

Find stocks with attractive price-to-earnings ratios:

```typescript
import { StockScreener, StockField } from 'tradingview-screener';

const screener = new StockScreener();

screener
  .where(StockField.PRICE_TO_EARNINGS_RATIO_TTM.between(5, 15))
  .where(StockField.MARKET_CAPITALIZATION.gt(1e9))
  .where(StockField.NET_INCOME_TTM.gt(0))  // Profitable
  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.PRICE_TO_EARNINGS_RATIO_TTM,
    StockField.MARKET_CAPITALIZATION
  )
  .sortBy(StockField.PRICE_TO_EARNINGS_RATIO_TTM, true)
  .setRange(0, 50);

const results = await screener.get();
console.table(results.data);
```

### Low Price-to-Book

Find stocks trading below book value:

```typescript
screener
  .where(StockField.PRICE_TO_BOOK_MRQ.lt(1.5))
  .where(StockField.PRICE_TO_BOOK_MRQ.gt(0))  // Positive book value
  .where(StockField.MARKET_CAPITALIZATION.gt(500e6))
  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.PRICE_TO_BOOK_MRQ,
    StockField.MARKET_CAPITALIZATION
  )
  .sortBy(StockField.PRICE_TO_BOOK_MRQ, true);

const results = await screener.get();
```

## Growth at Reasonable Price (GARP)

Using PEG ratio to find growth stocks at fair value:

```typescript
const screener = new StockScreener();

screener
  // PEG ratio below 1 (growth at reasonable price)
  .where(StockField.PRICE_EARNINGS_GROWTH_TTM.between(0.5, 1))

  // Revenue growth
  .where(StockField.REVENUE_TTM_YOY_GROWTH.gt(15))

  // Positive earnings
  .where(StockField.EARNINGS_PER_SHARE_DILUTED_TTM.gt(0))

  // Market cap filter
  .where(StockField.MARKET_CAPITALIZATION.gt(1e9))

  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.PRICE_EARNINGS_GROWTH_TTM,
    StockField.REVENUE_TTM_YOY_GROWTH,
    StockField.EARNINGS_PER_SHARE_DILUTED_TTM
  )
  .sortBy(StockField.PRICE_EARNINGS_GROWTH_TTM, true);

const results = await screener.get();
console.table(results.data);
```

## Deep Value Screen

Finding severely undervalued companies:

```typescript
const screener = new StockScreener();

screener
  // Very low P/E
  .where(StockField.PRICE_TO_EARNINGS_RATIO_TTM.lt(10))

  // Trading below book value
  .where(StockField.PRICE_TO_BOOK_MRQ.lt(1))

  // Low price-to-sales
  .where(StockField.PRICE_SALES_CURRENT.lt(1))

  // Positive earnings
  .where(StockField.NET_INCOME_TTM.gt(0))

  // Not penny stocks
  .where(StockField.PRICE.gt(5))

  // Minimum liquidity
  .where(StockField.VOLUME.gte(100_000))

  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.PRICE_TO_EARNINGS_RATIO_TTM,
    StockField.PRICE_TO_BOOK_MRQ,
    StockField.PRICE_SALES_CURRENT,
    StockField.MARKET_CAPITALIZATION
  )
  .sortBy(StockField.PRICE_TO_BOOK_MRQ, true);

const results = await screener.get();
```

## Dividend Value Strategy

Value stocks with income:

```typescript
const screener = new StockScreener();

screener
  // Value metrics
  .where(StockField.PRICE_TO_EARNINGS_RATIO_TTM.lt(15))
  .where(StockField.PRICE_TO_BOOK_MRQ.lt(2))

  // Dividend requirements
  .where(StockField.DIVIDEND_YIELD_FWD.gte(3))
  .where(StockField.DIVIDENDS_YIELD_FY.gte(3))

  // Dividend payments
  .where(StockField.DPS_COMMON_STOCK_PRIM_ISSUE_TTM.gt(0))

  // Positive earnings
  .where(StockField.NET_INCOME_TTM.gt(0))

  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.PRICE_TO_EARNINGS_RATIO_TTM,
    StockField.DIVIDEND_YIELD_FWD,
    StockField.DIVIDENDS_YIELD_FY,
    StockField.DPS_COMMON_STOCK_PRIM_ISSUE_TTM
  )
  .sortBy(StockField.DIVIDEND_YIELD_FWD, false);

const results = await screener.get();
```

## Enterprise Value Screening

Using EV/EBITDA for valuation:

```typescript
const screener = new StockScreener();

screener
  // Attractive EV/EBITDA
  .where(StockField.ENTERPRISE_VALUE_EBITDA_TTM.between(5, 10))

  // Profitability
  .where(StockField.NET_INCOME_TTM.gt(0))
  .where(StockField.REVENUE_TTM.gt(0))

  // Size requirement
  .where(StockField.MARKET_CAPITALIZATION.gt(500e6))

  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.ENTERPRISE_VALUE_EBITDA_TTM,
    StockField.REVENUE_TTM,
    StockField.NET_INCOME_TTM
  )
  .sortBy(StockField.ENTERPRISE_VALUE_EBITDA_TTM, true);

const results = await screener.get();
```

## Multi-Metric Value Screen

Combining multiple valuation metrics:

```typescript
async function comprehensiveValueScreen() {
  const screener = new StockScreener();

  screener
    // Multiple valuation metrics
    .where(StockField.PRICE_TO_EARNINGS_RATIO_TTM.between(5, 15))
    .where(StockField.PRICE_TO_BOOK_MRQ.lt(2))
    .where(StockField.PRICE_SALES_CURRENT.lt(1.5))
    .where(StockField.ENTERPRISE_VALUE_EBITDA_TTM.lt(10))

    // Growth (even value stocks should grow)
    .where(StockField.REVENUE_TTM_YOY_GROWTH.gt(0))

    // Profitability
    .where(StockField.NET_INCOME_TTM.gt(0))
    .where(StockField.EARNINGS_PER_SHARE_DILUTED_TTM.gt(0))

    // Size and liquidity
    .where(StockField.MARKET_CAPITALIZATION.gt(1e9))
    .where(StockField.VOLUME.gte(200_000))

    .select(
      StockField.NAME,
      StockField.PRICE,
      StockField.PRICE_TO_EARNINGS_RATIO_TTM,
      StockField.PRICE_TO_BOOK_MRQ,
      StockField.PRICE_SALES_CURRENT,
      StockField.REVENUE_TTM_YOY_GROWTH,
      StockField.MARKET_CAPITALIZATION
    )
    .sortBy(StockField.PRICE_TO_EARNINGS_RATIO_TTM, true);

  const results = await screener.get();

  // Score each stock based on valuation metrics
  const scored = results.data.map(stock => {
    let score = 0;

    // Valuation score
    if (stock.price_earnings_ttm < 10) score += 2;
    if (stock.price_book_fq < 1) score += 2;
    if (stock.price_sales_current < 1) score += 1;
    if (stock.enterprise_value_ebitda_ttm < 8) score += 1;

    // Growth score
    if (stock.total_revenue_yoy_growth_ttm > 10) score += 2;

    return { ...stock, valueScore: score };
  });

  // Sort by value score
  scored.sort((a, b) => b.valueScore - a.valueScore);

  return scored;
}

// Usage
const topValue = await comprehensiveValueScreen();
console.log('Top value stocks by score:');
console.table(topValue.slice(0, 20));
```

## Streaming Value Updates

Monitor value stocks in real-time:

```typescript
import { StockScreener, StockField } from 'tradingview-screener';

async function monitorValueStocks() {
  const screener = new StockScreener();

  screener
    .where(StockField.PRICE_TO_EARNINGS_RATIO_TTM.lt(15))
    .where(StockField.PRICE_TO_BOOK_MRQ.lt(2))
    .where(StockField.MARKET_CAPITALIZATION.gt(1e9))
    .select(
      StockField.NAME,
      StockField.PRICE,
      StockField.CHANGE_PERCENT,
      StockField.PRICE_TO_EARNINGS_RATIO_TTM
    )
    .sortBy(StockField.CHANGE_PERCENT, false)
    .setRange(0, 20);

  // Stream updates every 5 seconds
  for await (const data of screener.stream({ interval: 5000, maxIterations: 10 })) {
    if (data) {
      console.clear();
      console.log(`Updated: ${new Date().toLocaleTimeString()}`);
      console.table(data.data);
    }
  }
}

// Run the monitor
monitorValueStocks();
```

## Best Practices

1. **Multiple Metrics**: Use several valuation ratios together (P/E, P/B, P/S, EV/EBITDA)
2. **Growth Context**: Even value stocks should show revenue growth
3. **Profitability**: Filter for positive earnings and revenue
4. **Size Matters**: Use market cap filters to avoid illiquid stocks
5. **Avoid Value Traps**: Combine value metrics with growth indicators
6. **Dividend Support**: Income adds value, especially in low-growth environments

## Available Fields Summary

**Valuation Ratios:**
- `PRICE_TO_EARNINGS_RATIO_TTM`
- `PRICE_EARNINGS_GROWTH_TTM`
- `PRICE_SALES_CURRENT`
- `PRICE_TO_BOOK_MRQ`
- `ENTERPRISE_VALUE_EBITDA_TTM`

**Fundamentals:**
- `REVENUE_TTM`
- `REVENUE_TTM_YOY_GROWTH`
- `NET_INCOME_TTM`
- `EARNINGS_PER_SHARE_DILUTED_TTM`
- `MARKET_CAPITALIZATION`

**Dividends:**
- `DIVIDEND_YIELD_FWD`
- `DIVIDENDS_YIELD_FY`
- `DPS_COMMON_STOCK_PRIM_ISSUE_TTM`

**Price & Volume:**
- `PRICE`, `CHANGE`, `CHANGE_PERCENT`, `VOLUME`

## Next Steps

- [Growth Stocks](growth-stocks.md) - High-growth screening
- [Dividend Investing](dividend-investing.md) - Income strategies
- [Technical Analysis](technical-analysis.md) - Momentum indicators
- [Stock Fields Reference](../fields/stock-fields.md) - Complete field list
