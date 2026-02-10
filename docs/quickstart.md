# Quick Start

Get started with TradingView Screener in 5 minutes.

## Your First Screener

```typescript
import { StockScreener, StockField } from 'tradingview-screener';

// Create a screener
const screener = new StockScreener();

// Build your query
screener
  .where(StockField.MARKET_CAPITALIZATION.gt(1_000_000_000))  // Market cap > 1B
  .where(StockField.PRICE.between(10, 500))                    // Price between $10-500
  .where(StockField.VOLUME.gte(100_000))                       // Volume >= 100K
  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.MARKET_CAPITALIZATION,
    StockField.VOLUME
  )
  .sortBy(StockField.MARKET_CAPITALIZATION, false)             // Sort by market cap (desc)
  .setRange(0, 50);                                             // Get top 50

// Execute and display results
const results = await screener.get();

console.log(`Found ${results.totalCount} stocks`);
console.table(results.data);
```

## Output

```
Found 2847 stocks

┌─────────┬───────────────────┬─────────┬──────────────────────┬───────────┐
│ (index) │      symbol       │  name   │  market_cap_basic    │  volume   │
├─────────┼───────────────────┼─────────┼──────────────────────┼───────────┤
│    0    │ 'NASDAQ:AAPL'     │ 'Apple' │    3000000000000     │ 50000000  │
│    1    │ 'NASDAQ:MSFT'     │ 'Micr…' │    2800000000000     │ 25000000  │
│   ...   │       ...         │   ...   │         ...          │    ...    │
└─────────┴───────────────────┴─────────┴──────────────────────┴───────────┘
```

## Step-by-Step Breakdown

### 1. Import the Library

```typescript
import { StockScreener, StockField } from 'tradingview-screener';
```

- `StockScreener` - The screener class for stock data
- `StockField` - All available stock fields/columns

### 2. Create a Screener

```typescript
const screener = new StockScreener();
```

Other screener types:
- `CryptoScreener` - Cryptocurrencies
- `ForexScreener` - Forex pairs
- `BondScreener` - Bonds
- `FuturesScreener` - Futures contracts
- `CoinScreener` - Coins

### 3. Add Filters with `where()`

```typescript
screener.where(StockField.PRICE.gt(10));
```

Common operators:
- `.gt(value)` - Greater than
- `.gte(value)` - Greater than or equal
- `.lt(value)` - Less than
- `.lte(value)` - Less than or equal
- `.eq(value)` - Equal to
- `.between(min, max)` - Between two values
- `.isin([values])` - In a list

### 4. Select Fields with `select()`

```typescript
screener.select(
  StockField.NAME,
  StockField.PRICE,
  StockField.VOLUME
);
```

Or select all fields:
```typescript
screener.selectAll();
```

### 5. Sort Results with `sortBy()`

```typescript
screener.sortBy(StockField.VOLUME, false); // descending
screener.sortBy(StockField.PRICE, true);   // ascending
```

### 6. Set Range with `setRange()`

```typescript
screener.setRange(0, 50);   // First 50 results
screener.setRange(50, 100); // Next 50 results
```

### 7. Execute with `get()`

```typescript
const results = await screener.get();

console.log(results.totalCount); // Total matching stocks
console.log(results.data);       // Array of result objects
```

## More Examples

### Value Investing

Find undervalued stocks:

```typescript
import { StockScreener, StockField } from 'tradingview-screener';

const screener = new StockScreener();

screener
  .where(StockField.PRICE_TO_EARNINGS_RATIO_TTM.lt(15))
  .where(StockField.PRICE_TO_BOOK_MRQ.lt(3))
  .where(StockField.DIVIDEND_YIELD_FWD.gte(2))
  .where(StockField.MARKET_CAPITALIZATION.gte(1e9))
  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.PRICE_TO_EARNINGS_RATIO_TTM,
    StockField.PRICE_TO_BOOK_MRQ,
    StockField.DIVIDEND_YIELD_FWD
  )
  .sortBy(StockField.PRICE_TO_EARNINGS_RATIO_TTM, true);

const results = await screener.get();
console.table(results.data);
```

### Crypto Screening

Find large-cap cryptocurrencies:

```typescript
import { CryptoScreener, CryptoField } from 'tradingview-screener';

const screener = new CryptoScreener();

screener
  .where(CryptoField.MARKET_CAP.gt(1_000_000_000))
  .where(CryptoField.VOLUME_24H_IN_USD.gte(100_000_000))
  .select(
    CryptoField.NAME,
    CryptoField.PRICE,
    CryptoField.CHANGE_PERCENT,
    CryptoField.VOLUME_24H_IN_USD,
    CryptoField.MARKET_CAP
  )
  .sortBy(CryptoField.MARKET_CAP, false);

const results = await screener.get();
console.table(results.data);
```

### Technical Analysis

Find momentum stocks:

```typescript
import { StockScreener, StockField } from 'tradingview-screener';

const screener = new StockScreener();

screener
  .where(StockField.RSI.between(40, 60))
  .where(StockField.VOLUME.gte(500_000))
  .where(StockField.PRICE.gt(20))
  .where(StockField.CHANGE_PERCENT.gt(0))
  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.CHANGE_PERCENT,
    StockField.RSI,
    StockField.VOLUME
  )
  .sortBy(StockField.CHANGE_PERCENT, false);

const results = await screener.get();
console.table(results.data);
```

## Real-Time Streaming

Stream live data updates:

```typescript
import { StockScreener, StockField } from 'tradingview-screener';

const screener = new StockScreener();

screener
  .where(StockField.MARKET_CAPITALIZATION.gt(1e9))
  .select(StockField.NAME, StockField.PRICE, StockField.CHANGE_PERCENT)
  .setRange(0, 10);

// Stream updates every 5 seconds
for await (const data of screener.stream({ interval: 5000 })) {
  if (data) {
    console.clear();
    console.log(`Updated at ${new Date().toLocaleTimeString()}`);
    console.table(data.data);
  }
}
```

## Method Chaining

All methods return `this`, enabling fluent chaining:

```typescript
const results = await new StockScreener()
  .where(StockField.PRICE.gt(10))
  .where(StockField.VOLUME.gte(100_000))
  .select(StockField.NAME, StockField.PRICE)
  .sortBy(StockField.VOLUME, false)
  .setRange(0, 20)
  .get();
```

## Type Safety

Full TypeScript support with autocomplete:

```typescript
// TypeScript will suggest all available fields
screener.select(StockField.

// TypeScript will show all comparison operators
StockField.PRICE.

// Result types are fully typed
const results = await screener.get();
results.data.forEach(row => {
  console.log(row.symbol);  // ✓ Type-safe
  console.log(row.name);    // ✓ Type-safe
});
```

## Error Handling

```typescript
import { MalformedRequestException } from 'tradingview-screener';

try {
  const results = await screener.get();
  console.table(results.data);
} catch (error) {
  if (error instanceof MalformedRequestException) {
    console.error(`API Error ${error.code}: ${error.responseMsg}`);
  } else {
    console.error('Unexpected error:', error);
  }
}
```

## Next Steps

- [Basic Usage](basic-usage.md) - Learn core concepts in depth
- [Stock Screener](screeners/stock.md) - Complete stock screening guide
- [Filter Operations](filtering/operations.md) - All available operators
- [Field Reference](fields/stock-fields.md) - All available fields
- [Examples](examples/value-investing.md) - More real-world examples

## Common Patterns

### Pagination

```typescript
// Get first page
screener.setRange(0, 50);
const page1 = await screener.get();

// Get second page
screener.setRange(50, 100);
const page2 = await screener.get();
```

### Reusable Queries

```typescript
const baseScreener = new StockScreener()
  .where(StockField.MARKET_CAPITALIZATION.gt(1e9))
  .where(StockField.VOLUME.gte(100_000));

// Query 1: High growth
const growth = await baseScreener
  .where(StockField.REVENUE_TTM_YOY_GROWTH.gt(20))
  .select(StockField.NAME, StockField.PRICE)
  .get();

// Query 2: High dividend
const dividend = await new StockScreener()
  .where(StockField.MARKET_CAPITALIZATION.gt(1e9))
  .where(StockField.DIVIDEND_YIELD_FWD.gt(3))
  .select(StockField.NAME, StockField.DIVIDEND_YIELD_FWD)
  .get();
```

### Debug Mode

Print the request payload:

```typescript
const results = await screener.get(true); // Prints request details
```

## Tips

1. **Start Simple** - Begin with basic filters, add complexity gradually
2. **Use Type Hints** - Let TypeScript guide you with autocomplete
3. **Check Total Count** - Use `results.totalCount` to see matches
4. **Limit Results** - Use `setRange()` for better performance
5. **Stream Carefully** - Don't set interval too low (min 1 second)

## Getting Help

- [Documentation](README.md) - Full documentation
- [Examples](examples/) - More examples
- [GitHub Issues](https://github.com/your-org/tradingview-screener/issues) - Bug reports
- [Discussions](https://github.com/your-org/tradingview-screener/discussions) - Questions
