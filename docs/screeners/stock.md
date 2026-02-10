# Stock Screener

Complete guide to screening stock market data with the Stock Screener.

## Overview

The `StockScreener` class provides access to TradingView's stock market data, including:

- **15,000+ US stocks** (NYSE, NASDAQ, AMEX)
- **Global markets** (50+ countries)
- **Fundamentals** - Revenue, earnings, ratios, growth metrics
- **Valuation** - P/E, P/B, EV/EBITDA, PEG ratios
- **Dividends** - Yield, payout ratio, growth
- **Technical** - RSI, MACD, Moving averages, Bollinger Bands
- **Recommendations** - Analyst ratings and computed recommendations

## Basic Usage

```typescript
import { StockScreener, StockField } from 'tradingview-screener';

const screener = new StockScreener();

screener
  .where(StockField.MARKET_CAPITALIZATION.gt(1e9))
  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.MARKET_CAPITALIZATION
  );

const results = await screener.get();
console.table(results.data);
```

## Common Use Cases

### Large Cap Stocks

```typescript
screener
  .where(StockField.MARKET_CAPITALIZATION.between(10e9, 500e9))
  .where(StockField.VOLUME.gte(1_000_000))
  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.MARKET_CAPITALIZATION,
    StockField.VOLUME
  )
  .sortBy(StockField.MARKET_CAPITALIZATION, false);
```

### Value Stocks

```typescript
screener
  .where(StockField.PRICE_TO_EARNINGS_RATIO_TTM.lt(15))
  .where(StockField.PRICE_TO_BOOK_MRQ.lt(3))
  .where(StockField.DIVIDEND_YIELD_FWD.gte(2))
  .where(StockField.MARKET_CAPITALIZATION.gte(1e9))
  .select(
    StockField.NAME,
    StockField.PRICE_TO_EARNINGS_RATIO_TTM,
    StockField.PRICE_TO_BOOK_MRQ,
    StockField.DIVIDEND_YIELD_FWD
  );
```

### Growth Stocks

```typescript
screener
  .where(StockField.REVENUE_TTM_YOY_GROWTH.gt(20))
  .where(StockField.MARKET_CAPITALIZATION.between(1e9, 50e9))
  .select(
    StockField.NAME,
    StockField.REVENUE_TTM_YOY_GROWTH,
    StockField.PRICE_EARNINGS_GROWTH_TTM
  );
```

### High Dividend Stocks

```typescript
screener
  .where(StockField.DIVIDEND_YIELD_FWD.gte(4))
  .where(StockField.MARKET_CAPITALIZATION.gte(5e9))
  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.DIVIDEND_YIELD_FWD,
    StockField.DPS_COMMON_STOCK_PRIM_ISSUE_TTM
  )
  .sortBy(StockField.DIVIDEND_YIELD_FWD, false);
```

### Technical Momentum

```typescript
screener
  .where(StockField.RSI.between(40, 70))
  .where(StockField.CHANGE_PERCENT.gt(2))
  .where(StockField.VOLUME.gte(500_000))
  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.CHANGE_PERCENT,
    StockField.RSI,
    StockField.VOLUME
  )
  .sortBy(StockField.CHANGE_PERCENT, false);
```

## Field Categories

### Price & Volume
- `PRICE` - Current price
- `CHANGE` - Absolute price change
- `CHANGE_PERCENT` - Percentage change
- `VOLUME` - Trading volume

### Market Data
- `MARKET_CAPITALIZATION` - Market cap
- `NAME` - Company name
- `DESCRIPTION` - Company description

### Valuation Ratios
- `PRICE_TO_EARNINGS_RATIO_TTM` - P/E ratio (trailing 12 months)
- `PRICE_TO_BOOK_MRQ` - P/B ratio (most recent quarter)
- `PRICE_SALES_CURRENT` - P/S ratio
- `ENTERPRISE_VALUE_EBITDA_TTM` - EV/EBITDA
- `PRICE_EARNINGS_GROWTH_TTM` - PEG ratio

### Income Statement
- `REVENUE_TTM` - Total revenue (trailing 12 months)
- `REVENUE_TTM_YOY_GROWTH` - Revenue growth rate
- `NET_INCOME_TTM` - Net income

### Dividends
- `DIVIDEND_YIELD_FWD` - Forward dividend yield
- `DIVIDENDS_YIELD_FY` - Annual dividend yield (fiscal year)
- `DPS_COMMON_STOCK_PRIM_ISSUE_TTM` - Dividends per share (TTM)

### Per Share Metrics
- `EARNINGS_PER_SHARE_DILUTED_TTM` - EPS (diluted)

### Technical Indicators
- `RSI` - Relative Strength Index
- `ATR` - Average True Range

## Filtering Examples

### Multiple Conditions

```typescript
// Large cap stocks with strong fundamentals
screener
  .where(StockField.MARKET_CAPITALIZATION.gt(50e9))
  .where(StockField.REVENUE_TTM_YOY_GROWTH.gt(15));
```

### Range Filters

```typescript
// Mid-cap stocks with moderate valuation
screener
  .where(StockField.MARKET_CAPITALIZATION.between(2e9, 10e9))
  .where(StockField.PRICE_TO_EARNINGS_RATIO_TTM.between(10, 20))
  .where(StockField.PRICE_TO_BOOK_MRQ.between(1, 3));
```

### List Filters

```typescript
// Filter by name pattern (example)
// Note: SECTOR and COUNTRY fields are not available in the current API
```

## Sorting

```typescript
// Sort by market cap (largest first)
screener.sortBy(StockField.MARKET_CAPITALIZATION, false);

// Sort by dividend yield (highest first)
screener.sortBy(StockField.DIVIDEND_YIELD_FWD, false);

// Sort by P/E ratio (lowest first)
screener.sortBy(StockField.PRICE_TO_EARNINGS_RATIO_TTM, true);

// Sort alphabetically by name
screener.sortBy(StockField.NAME, true);
```

## Pagination

```typescript
// Get first 100 results
screener.setRange(0, 100);
const page1 = await screener.get();

// Get next 100 results
screener.setRange(100, 200);
const page2 = await screener.get();

// Get specific page
const pageSize = 50;
const pageNumber = 3;
screener.setRange(pageNumber * pageSize, (pageNumber + 1) * pageSize);
```

## Field Selection

### Default Fields

By default, the screener returns common fields:

```typescript
// Default selection (if select() not called)
const results = await screener.get();
// Returns: NAME, PRICE, CHANGE, CHANGE_PERCENT, VOLUME, MARKET_CAPITALIZATION
```

### Custom Selection

```typescript
// Select specific fields
screener.select(
  StockField.NAME,
  StockField.PRICE,
  StockField.PRICE_TO_EARNINGS_RATIO_TTM,
  StockField.DIVIDEND_YIELD_FWD
);
```

### Select All Fields

```typescript
// Get all available fields
screener.selectAll();

const results = await screener.get();
// Results will have all 21 available stock fields
```

## Working with Results

```typescript
const results = await screener.get();

// Total count
console.log(`Found ${results.totalCount} stocks`);

// Iterate results
results.data.forEach(stock => {
  console.log(`${stock.name}: $${stock.close}`);
});

// Filter results
const highVolume = results.data.filter(stock => stock.volume > 1_000_000);

// Map results
const prices = results.data.map(stock => stock.close);

// Find specific stock
const apple = results.data.find(stock => stock.symbol === 'NASDAQ:AAPL');
```

## Real-Time Streaming

```typescript
// Stream top 10 stocks by volume
screener
  .where(StockField.MARKET_CAPITALIZATION.gt(1e9))
  .select(StockField.NAME, StockField.PRICE, StockField.CHANGE_PERCENT)
  .sortBy(StockField.VOLUME, false)
  .setRange(0, 10);

// Update every 5 seconds
for await (const data of screener.stream({ interval: 5000 })) {
  if (data) {
    console.clear();
    console.log('Top 10 by Volume:', new Date().toLocaleTimeString());
    console.table(data.data);
  }
}
```

## Market-Specific Queries

### US Markets Only

```typescript
// Default is US markets
const screener = new StockScreener();
```

### Specific Exchange

```typescript
// Note: EXCHANGE field is not available in the current API
// Use country/exchange filters through other means if needed
```

### Multiple Countries

```typescript
// Note: COUNTRY field is not available in the current API
```

## Advanced Techniques

### Screen Pre-Market Movers

```typescript
screener
  .where(StockField.CHANGE_PERCENT.gt(5))
  .where(StockField.VOLUME.gte(1_000_000))
  .where(StockField.MARKET_CAPITALIZATION.gt(1e9))
  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.CHANGE_PERCENT,
    StockField.VOLUME
  )
  .sortBy(StockField.CHANGE_PERCENT, false);
```

### Find Undervalued Stocks

```typescript
screener
  .where(StockField.PRICE_TO_EARNINGS_RATIO_TTM.lt(15))
  .where(StockField.PRICE_TO_BOOK_MRQ.lt(2))
  .where(StockField.MARKET_CAPITALIZATION.gte(1e9));
```

### Quality Growth Stocks

```typescript
screener
  .where(StockField.REVENUE_TTM_YOY_GROWTH.gt(20))
  .where(StockField.MARKET_CAPITALIZATION.between(1e9, 50e9));
```

## Performance Tips

1. **Select Only Needed Fields** - Don't use `selectAll()` unless necessary
2. **Use Appropriate Ranges** - Limit results with `setRange()`
3. **Filter Before Sorting** - Reduce dataset size first
4. **Cache Results** - Store results to avoid repeated API calls

## Next Steps

- [Crypto Screener](crypto.md) - Screen cryptocurrencies
- [Filter Operations](../filtering/operations.md) - All filter operators
- [Stock Fields Reference](../fields/stock-fields.md) - Complete field list
- [Examples](../examples/value-investing.md) - More examples
