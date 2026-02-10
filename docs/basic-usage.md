# Basic Usage

Learn the core concepts of the TradingView Screener API.

## Core Concepts

### Screeners

Screeners are the main interface for querying different asset types:

```typescript
import {
  StockScreener,
  CryptoScreener,
  ForexScreener,
  BondScreener,
  FuturesScreener,
  CoinScreener
} from 'tradingview-screener';

// Each screener queries a specific asset type
const stockScreener = new StockScreener();
const cryptoScreener = new CryptoScreener();
```

### Fields

Fields represent data columns you can filter on or retrieve:

```typescript
import { StockField } from 'tradingview-screener';

// Fields contain metadata
console.log(StockField.PRICE.fieldName);  // "close"
console.log(StockField.PRICE.label);      // "Price"
console.log(StockField.PRICE.format);     // "currency"
```

### Filters

Filters define conditions that results must match:

```typescript
// Greater than
StockField.PRICE.gt(100)

// Between range
StockField.MARKET_CAPITALIZATION.between(1e9, 100e9)

// In range
StockField.PRICE_TO_EARNINGS_RATIO_TTM.between(10, 20)
```

### Query Building

Build queries using method chaining:

```typescript
const screener = new StockScreener();

screener
  .where(StockField.PRICE.gt(10))           // Add filter
  .where(StockField.VOLUME.gte(100_000))    // Add another filter
  .select(StockField.NAME, StockField.PRICE) // Select fields
  .sortBy(StockField.VOLUME, false)         // Sort descending
  .setRange(0, 50);                         // Limit results

const results = await screener.get();
```

## The Screener Workflow

### 1. Create a Screener

```typescript
import { StockScreener } from 'tradingview-screener';

const screener = new StockScreener();
```

### 2. Add Filters with `where()`

```typescript
// Filter by market cap
screener.where(StockField.MARKET_CAPITALIZATION.gt(1_000_000_000));

// Filter by price range
screener.where(StockField.PRICE.between(10, 500));

// Filter by volume
screener.where(StockField.VOLUME.gte(100_000));
```

**Filters are combined with AND logic** - all conditions must be met.

### 3. Select Fields with `select()`

```typescript
// Choose which fields to return
screener.select(
  StockField.NAME,
  StockField.PRICE,
  StockField.MARKET_CAPITALIZATION,
  StockField.VOLUME
);
```

If you don't call `select()`, default fields are returned.

### 4. Sort Results with `sortBy()`

```typescript
// Sort by volume (descending)
screener.sortBy(StockField.VOLUME, false);

// Sort by price (ascending)
screener.sortBy(StockField.PRICE, true);
```

### 5. Limit Results with `setRange()`

```typescript
// Get first 50 results
screener.setRange(0, 50);

// Get next 50 results
screener.setRange(50, 100);
```

### 6. Execute with `get()`

```typescript
const results = await screener.get();

console.log(`Total matches: ${results.totalCount}`);
console.log(`Returned: ${results.data.length}`);

// Access results
results.data.forEach(stock => {
  console.log(`${stock.name}: $${stock.close}`);
});
```

## Working with Results

### Result Structure

```typescript
interface ScreenerResult {
  data: ScreenerRow[];     // Array of result objects
  totalCount: number;      // Total matching results
}

interface ScreenerRow {
  symbol: string;          // Always present
  [key: string]: any;      // Other selected fields
}
```

### Accessing Data

```typescript
const results = await screener.get();

// Total count
console.log(`Found ${results.totalCount} stocks`);

// Iterate results
results.data.forEach(stock => {
  console.log(`${stock.symbol}: ${stock.name}`);
  console.log(`Price: $${stock.close}`);
  console.log(`Volume: ${stock.volume}`);
});

// Array methods
const symbols = results.data.map(s => s.symbol);
const highVolume = results.data.filter(s => s.volume > 1_000_000);
const apple = results.data.find(s => s.symbol === 'NASDAQ:AAPL');
```

### Field Name Mapping

Field names in results match the `fieldName` property:

```typescript
// StockField.PRICE -> fieldName: "close"
screener.select(StockField.PRICE);

const results = await screener.get();
console.log(results.data[0].close);  // Access as "close"

// StockField.MARKET_CAPITALIZATION -> "market_cap_basic"
screener.select(StockField.MARKET_CAPITALIZATION);
console.log(results.data[0].market_cap_basic);
```

## Method Chaining

All methods return `this`, enabling fluent chaining:

```typescript
const results = await new StockScreener()
  .where(StockField.PRICE.gt(10))
  .where(StockField.VOLUME.gte(100_000))
  .select(StockField.NAME, StockField.PRICE)
  .sortBy(StockField.VOLUME, false)
  .setRange(0, 50)
  .get();
```

This is equivalent to:

```typescript
const screener = new StockScreener();
screener.where(StockField.PRICE.gt(10));
screener.where(StockField.VOLUME.gte(100_000));
screener.select(StockField.NAME, StockField.PRICE);
screener.sortBy(StockField.VOLUME, false);
screener.setRange(0, 50);
const results = await screener.get();
```

## Comparison Operators

### Numeric Comparisons

```typescript
field.gt(value)       // Greater than: field > value
field.gte(value)      // Greater or equal: field >= value
field.lt(value)       // Less than: field < value
field.lte(value)      // Less or equal: field <= value
field.eq(value)       // Equal: field == value
field.ne(value)       // Not equal: field != value
```

### Range Comparisons

```typescript
field.between(min, max)     // min <= field <= max
field.notBetween(min, max)  // field < min OR field > max
```

### List Comparisons

```typescript
field.isin([val1, val2])    // field IN (val1, val2)
field.notIn([val1, val2])   // field NOT IN (val1, val2)
```

### Text Comparisons

```typescript
field.match(pattern)        // Regex match
field.notMatch(pattern)     // Regex not match
```

## Common Patterns

### Multiple Conditions (AND)

```typescript
screener
  .where(StockField.PRICE.gt(10))
  .where(StockField.PRICE.lt(500))
  .where(StockField.VOLUME.gte(100_000));
// All three conditions must be true
```

### Range Filtering

```typescript
// Mid-cap stocks
screener.where(StockField.MARKET_CAPITALIZATION.between(2e9, 10e9));

// Price range
screener.where(StockField.PRICE.between(10, 100));

// P/E ratio range
screener.where(StockField.PRICE_TO_EARNINGS_RATIO_TTM.between(10, 20));
```

### List Filtering

```typescript
// Using text match for name patterns
screener.where(StockField.NAME.match('Tech.*'));

// Multiple name filters
screener.where(StockField.DESCRIPTION.match('.*(software|cloud|semiconductor).*'));
```

### Pagination

```typescript
const pageSize = 50;
const page = 2;

screener.setRange(page * pageSize, (page + 1) * pageSize);
const results = await screener.get();
```

### Reusable Queries

```typescript
// Base query
const baseQuery = new StockScreener()
  .where(StockField.MARKET_CAPITALIZATION.gt(1e9))
  .where(StockField.VOLUME.gte(100_000));

// Variation 1: High P/E stocks
const growthScreener = new StockScreener()
  .where(StockField.MARKET_CAPITALIZATION.gt(1e9))
  .where(StockField.VOLUME.gte(100_000))
  .where(StockField.PRICE_TO_EARNINGS_RATIO_TTM.gt(25));

// Variation 2: High dividend yield stocks
const dividendScreener = new StockScreener()
  .where(StockField.MARKET_CAPITALIZATION.gt(1e9))
  .where(StockField.VOLUME.gte(100_000))
  .where(StockField.DIVIDEND_YIELD_FWD.gt(3));
```

## Type Safety

### TypeScript Autocomplete

```typescript
// Field autocomplete
screener.select(StockField.  // <-- IDE shows all fields

// Operator autocomplete
StockField.PRICE.  // <-- IDE shows all operators

// Typed results
const results = await screener.get();
results.data[0].  // <-- IDE knows available properties
```

### Type Checking

```typescript
// ✓ Valid
StockField.PRICE.gt(100);
StockField.NAME.match('Apple.*');

// ✗ Type error
StockField.PRICE.gt('high');     // Error: string not assignable to number
StockField.VOLUME.match('.*');   // Error: match not valid for numeric field
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
    console.error('URL:', error.url);
    console.error('Payload:', error.payload);
  } else {
    console.error('Unexpected error:', error);
  }
}
```

## Debug Mode

Print request details:

```typescript
const results = await screener.get(true);
// Prints:
// Request: https://scanner.tradingview.com/america/scan
// Payload: { filter: [...], columns: [...], ... }
```

## Async/Await vs Promises

```typescript
// Async/await (recommended)
const results = await screener.get();

// Promise chain
screener.get().then(results => {
  console.table(results.data);
}).catch(error => {
  console.error(error);
});
```

## Real-Time Updates

Stream live data:

```typescript
for await (const data of screener.stream({ interval: 5000 })) {
  if (data) {
    console.clear();
    console.log('Updated:', new Date().toLocaleTimeString());
    console.table(data.data);
  }
}
```

## Best Practices

### 1. Start Simple

```typescript
// Good: Start with basic filters
screener
  .where(StockField.MARKET_CAPITALIZATION.gt(1e9))
  .select(StockField.NAME, StockField.PRICE);
```

### 2. Use Type Safety

```typescript
// Good: Let TypeScript help
StockField.PRICE.  // Use autocomplete

// Avoid: String literals
screener.where({ field: 'close', op: 'greater', value: 100 });
```

### 3. Limit Results

```typescript
// Good: Use setRange
screener.setRange(0, 50);

// Avoid: Fetching all results
screener.setRange(0, 10000);  // May be slow
```

### 4. Select Only Needed Fields

```typescript
// Good: Select specific fields
screener.select(StockField.NAME, StockField.PRICE);

// Avoid: selectAll() unless needed
screener.selectAll();  // Returns 15+ fields
```

### 5. Handle Errors

```typescript
// Good: Proper error handling
try {
  const results = await screener.get();
} catch (error) {
  console.error('Failed to fetch data:', error);
}
```

## Next Steps

- [Stock Screener Guide](screeners/stock.md) - Deep dive into stock screening
- [Filter Operations](filtering/operations.md) - All available operators
- [Field System](fields/overview.md) - Understanding fields
- [Examples](examples/value-investing.md) - Real-world strategies
