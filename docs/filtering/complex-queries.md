# Complex Queries

Building sophisticated multi-condition queries.

## Overview

Complex queries combine multiple filters, field selections, and sorting to find exactly what you need.

## Multiple Filter Conditions

### AND Logic

All `where()` clauses are combined with AND:

```typescript
screener
  .where(StockField.PRICE.gt(10))              // AND
  .where(StockField.PRICE.lt(500))             // AND
  .where(StockField.VOLUME.gte(100_000))       // AND
  .where(StockField.MARKET_CAPITALIZATION.gt(1e9));

// SQL equivalent:
// WHERE price > 10
//   AND price < 500
//   AND volume >= 100000
//   AND market_cap > 1000000000
```

### Simulating OR Logic

For OR across different fields, run separate queries and merge:

```typescript
// High price OR high volume
const highPrice = await new StockScreener()
  .where(StockField.PRICE.gt(500))
  .get();

const highVolume = await new StockScreener()
  .where(StockField.VOLUME.gt(10_000_000))
  .get();

const combined = [...highPrice.data, ...highVolume.data];
```

## Value Investing Screen

```typescript
import { StockScreener, StockField } from 'tradingview-screener';

const screener = new StockScreener();

screener
  // Valuation: Low P/E and P/B
  .where(StockField.PRICE_TO_EARNINGS_RATIO_TTM.between(5, 15))
  .where(StockField.PRICE_TO_BOOK_MRQ.lt(3))

  // Income: Good dividend yield
  .where(StockField.DIVIDEND_YIELD_FWD.gte(2))

  // Quality: Profitable
  .where(StockField.NET_INCOME_TTM.gt(0))

  // Size: Established companies
  .where(StockField.MARKET_CAPITALIZATION.gte(1e9))

  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.PRICE_TO_EARNINGS_RATIO_TTM,
    StockField.PRICE_TO_BOOK_MRQ,
    StockField.DIVIDEND_YIELD_FWD,
    StockField.MARKET_CAPITALIZATION
  )
  .sortBy(StockField.PRICE_TO_EARNINGS_RATIO_TTM, true);

const results = await screener.get();
```

## Growth Stock Screen

```typescript
const screener = new StockScreener();

screener
  // Growth: Strong revenue growth
  .where(StockField.REVENUE_TTM_YOY_GROWTH.gt(20))

  // Size: Mid-cap growth
  .where(StockField.MARKET_CAPITALIZATION.between(1e9, 50e9))

  // Valuation: Reasonable PEG ratio
  .where(StockField.PRICE_EARNINGS_GROWTH_TTM.lt(2))

  .select(
    StockField.NAME,
    StockField.REVENUE_TTM_YOY_GROWTH,
    StockField.PRICE_EARNINGS_GROWTH_TTM,
    StockField.MARKET_CAPITALIZATION
  )
  .sortBy(StockField.REVENUE_TTM_YOY_GROWTH, false);
```

## Technical Momentum Screen

```typescript
const screener = new StockScreener();

screener
  // Technical: RSI in sweet spot
  .where(StockField.RSI.between(50, 70))

  // Momentum: Positive price action
  .where(StockField.CHANGE_PERCENT.gt(2))

  // Volume: Above average
  .where(StockField.VOLUME.gte(500_000))

  // Volatility: ATR not too high
  .where(StockField.ATR.lt(10))

  // Size: Liquid stocks
  .where(StockField.MARKET_CAPITALIZATION.gt(1e9))

  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.CHANGE_PERCENT,
    StockField.RSI,
    StockField.VOLUME,
    StockField.ATR
  )
  .sortBy(StockField.CHANGE_PERCENT, false);
```

## Quality Dividend Screen

```typescript
const screener = new StockScreener();

screener
  // Dividend: High yield but not too high (sustainable)
  .where(StockField.DIVIDEND_YIELD_FWD.between(3, 8))

  // Quality: Profitable
  .where(StockField.NET_INCOME_TTM.gt(0))

  // Size: Established companies
  .where(StockField.MARKET_CAPITALIZATION.gte(5e9))

  .select(
    StockField.NAME,
    StockField.DIVIDEND_YIELD_FWD,
    StockField.DPS_COMMON_STOCK_PRIM_ISSUE_TTM,
    StockField.NET_INCOME_TTM
  )
  .sortBy(StockField.DIVIDEND_YIELD_FWD, false);
```

## Sector-Specific Screens

### Tech Growth

```typescript
screener
  .where(StockField.REVENUE_TTM_YOY_GROWTH.gt(25))
  .where(StockField.MARKET_CAPITALIZATION.between(1e9, 100e9));
```

### Financial Stability

```typescript
screener
  .where(StockField.PRICE_TO_BOOK_MRQ.lt(1.5))
  .where(StockField.DIVIDEND_YIELD_FWD.gte(3));
```

## Multi-Criteria Screening

### Quality at a Reasonable Price (QARP)

```typescript
screener
  // Reasonable price
  .where(StockField.PRICE_TO_EARNINGS_RATIO_TTM.between(10, 20))
  .where(StockField.PRICE_EARNINGS_GROWTH_TTM.lt(1.5))

  // Growth
  .where(StockField.REVENUE_TTM_YOY_GROWTH.gt(10))

  // Size
  .where(StockField.MARKET_CAPITALIZATION.gte(2e9));
```

## Crypto Screening

### Large Cap with Volume

```typescript
import { CryptoScreener, CryptoField } from 'tradingview-screener';

const crypto = new CryptoScreener();

crypto
  .where(CryptoField.MARKET_CAP.gt(1_000_000_000))
  .where(CryptoField.VOLUME_24H_IN_USD.gte(100_000_000))
  .where(CryptoField.CHANGE_PERCENT.gt(-10))
  .select(
    CryptoField.NAME,
    CryptoField.PRICE,
    CryptoField.CHANGE_PERCENT,
    CryptoField.MARKET_CAP
  )
  .sortBy(CryptoField.MARKET_CAP, false);
```

## Reusable Query Patterns

### Base Query Pattern

```typescript
class ScreenerPatterns {
  static largeCap(): StockScreener {
    return new StockScreener()
      .where(StockField.MARKET_CAPITALIZATION.gt(10e9))
      .where(StockField.VOLUME.gte(1_000_000));
  }

  static profitable(): StockScreener {
    return new StockScreener()
      .where(StockField.NET_INCOME_TTM.gt(0))
      .where(StockField.EARNINGS_PER_SHARE_DILUTED_TTM.gt(0));
  }
}

// Combine patterns
const screener = ScreenerPatterns.largeCap();
screener
  .where(StockField.NET_INCOME_TTM.gt(0))
  .where(StockField.DIVIDEND_YIELD_FWD.gte(3));
```

## Pagination for Large Results

```typescript
async function getAllResults(screener: StockScreener) {
  const pageSize = 150;
  const allResults = [];
  let page = 0;

  while (true) {
    screener.setRange(page * pageSize, (page + 1) * pageSize);
    const results = await screener.get();

    allResults.push(...results.data);

    if (results.data.length < pageSize) {
      break;  // Last page
    }

    page++;
  }

  return allResults;
}
```

## Performance Optimization

### 1. Most Restrictive Filters First

```typescript
// Good: Most restrictive first
screener
  .where(StockField.MARKET_CAPITALIZATION.gt(100e9))  // Very restrictive
  .where(StockField.VOLUME.gte(1_000_000))            // Moderately restrictive
  .where(StockField.PRICE.gt(10));                    // Less restrictive

// Works but less efficient
screener
  .where(StockField.PRICE.gt(10))                     // Least restrictive
  .where(StockField.VOLUME.gte(1_000_000))
  .where(StockField.MARKET_CAPITALIZATION.gt(100e9));
```

### 2. Select Only Needed Fields

```typescript
// Good: Select specific fields
screener.select(StockField.NAME, StockField.PRICE, StockField.VOLUME);

// Avoid: selectAll() for large datasets
screener.selectAll();  // Returns 15+ fields
```

### 3. Use Appropriate Ranges

```typescript
// Good: Reasonable range
screener.where(StockField.MARKET_CAPITALIZATION.between(1e9, 100e9));

// Avoid: Overly broad ranges
screener.where(StockField.MARKET_CAPITALIZATION.gt(0));
```

## Error Handling for Complex Queries

```typescript
import { MalformedRequestException } from 'tradingview-screener';

try {
  const results = await screener.get();

  if (results.totalCount === 0) {
    console.log('No results found. Try relaxing filters.');
  }

  console.table(results.data);
} catch (error) {
  if (error instanceof MalformedRequestException) {
    console.error('API Error:', error.responseMsg);
    console.error('Check your filters and try again.');
  } else {
    console.error('Unexpected error:', error);
  }
}
```

## Next Steps

- [Filter Operations](operations.md) - All comparison operators
- [Field Conditions](field-conditions.md) - Building conditions
- [Stock Screener Guide](../screeners/stock.md) - Detailed examples
