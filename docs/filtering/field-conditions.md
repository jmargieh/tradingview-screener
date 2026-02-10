# Field Conditions

Building and using field conditions in queries.

## Overview

Field conditions represent comparisons that can be used in `where()` clauses. They are created by calling comparison methods on fields.

## Creating Conditions

### Basic Comparisons

```typescript
import { StockField } from 'tradingview-screener';

// Create conditions using field methods
const priceAbove100 = StockField.PRICE.gt(100);
const volumeHigh = StockField.VOLUME.gte(1_000_000);
const marketCapLarge = StockField.MARKET_CAPITALIZATION.between(1e9, 100e9);
```

### Condition Structure

A `FieldCondition` contains:
- **field** - The field being compared
- **operation** - The comparison operation (gt, lt, between, etc.)
- **value** - The value(s) to compare against

```typescript
const condition = StockField.PRICE.gt(100);

console.log(condition.field);      // StockField.PRICE
console.log(condition.operation);  // "greater"
console.log(condition.value);      // 100
```

## Using Conditions

### In where() Clauses

```typescript
const screener = new StockScreener();

// Create condition
const condition = StockField.PRICE.gt(100);

// Use in where clause
screener.where(condition);
```

### Inline Creation

Most commonly, conditions are created inline:

```typescript
screener
  .where(StockField.PRICE.gt(100))
  .where(StockField.VOLUME.gte(1_000_000))
  .where(StockField.MARKET_CAPITALIZATION.between(1e9, 100e9));
```

## Comparison Methods

### Numeric Comparisons

```typescript
// Greater than
StockField.PRICE.gt(100)

// Greater than or equal
StockField.PRICE.gte(100)

// Less than
StockField.PRICE.lt(500)

// Less than or equal
StockField.PRICE.lte(500)

// Equal
StockField.NAME.eq('Apple Inc.')

// Not equal
StockField.NAME.ne('Tesla Inc.')
```

### Range Comparisons

```typescript
// Between (inclusive)
StockField.MARKET_CAPITALIZATION.between(1e9, 100e9)

// Not between
StockField.RSI.notBetween(30, 70)  // Overbought or oversold
```

### List Comparisons

```typescript
// In list - using string field
StockField.NAME.isin(['Apple Inc.', 'Microsoft Corporation', 'Amazon.com Inc.'])

// Not in list - using description field
StockField.DESCRIPTION.notIn(['penny stock', 'OTC traded'])
```

### Text Comparisons

```typescript
// Match pattern (regex)
StockField.NAME.match('.*bank.*')

// Not match pattern
StockField.DESCRIPTION.notMatch('.*acquisition.*')
```

## Condition Validation

### Field-to-Field Comparison Prevention

Conditions validate that you're not comparing fields directly:

```typescript
// ✗ This throws an error
try {
  StockField.PRICE.gt(StockField.VOLUME);
} catch (error) {
  console.error('Field-to-field comparisons not supported');
}

// ✓ Compare to a constant value
StockField.PRICE.gt(100);
```

### Type Safety

TypeScript ensures type-safe comparisons:

```typescript
// ✓ Valid
StockField.PRICE.gt(100);           // number to number
StockField.NAME.eq('Apple Inc.');   // string to string

// ✗ Type errors
StockField.PRICE.gt('expensive');   // Error: string not assignable to number
StockField.NAME.gt(5);              // Error: number not valid for text field
```

## Converting Conditions to Filters

Conditions are converted to internal `Filter` objects:

```typescript
const condition = StockField.PRICE.gt(100);

// Convert to filter (done automatically by where())
const filter = condition.toFilter();

console.log(filter.left);       // "close" (field name)
console.log(filter.operation);  // "greater"
console.log(filter.right);      // 100
```

## Reusing Conditions

Conditions can be stored and reused:

```typescript
// Define reusable conditions
const largeCap = StockField.MARKET_CAPITALIZATION.gt(10e9);
const highVolume = StockField.VOLUME.gte(1_000_000);
const profitable = StockField.NET_INCOME_TTM.gt(0);

// Use in multiple queries
const screener1 = new StockScreener()
  .where(largeCap)
  .where(highVolume);

const screener2 = new StockScreener()
  .where(largeCap)
  .where(profitable);
```

## Condition Patterns

### Value Range Pattern

```typescript
// Define acceptable range
const priceInRange = StockField.PRICE.between(10, 500);
const peRatioInRange = StockField.PRICE_TO_EARNINGS_RATIO_TTM.between(10, 20);

screener
  .where(priceInRange)
  .where(peRatioInRange);
```

### Threshold Pattern

```typescript
// Define minimum thresholds
const minimumMarketCap = StockField.MARKET_CAPITALIZATION.gt(1e9);
const minimumVolume = StockField.VOLUME.gte(500_000);
const minimumDividend = StockField.DIVIDEND_YIELD_FWD.gte(2);

screener
  .where(minimumMarketCap)
  .where(minimumVolume)
  .where(minimumDividend);
```

### Exclusion Pattern

```typescript
// Define exclusion criteria
const notPennyStock = StockField.PRICE.gt(5);
const lowVolatility = StockField.ATR.lt(2);
const highPE = StockField.PRICE_TO_EARNINGS_RATIO_TTM.lt(50);

screener
  .where(notPennyStock)
  .where(lowVolatility)
  .where(highPE);
```

### Sector Inclusion Pattern

```typescript
// Define company name whitelist
const preferredCompanies = StockField.NAME.isin([
  'Apple Inc.',
  'Microsoft Corporation',
  'Amazon.com Inc.'
]);

screener.where(preferredCompanies);
```

## Combining Conditions

### Multiple Conditions (AND)

All conditions are ANDed together:

```typescript
screener
  .where(StockField.PRICE.gt(10))           // AND
  .where(StockField.PRICE.lt(500))          // AND
  .where(StockField.VOLUME.gte(100_000));   // AND
```

### Simulating OR with isin()

```typescript
// Company is Apple OR Microsoft (using isin)
screener.where(StockField.NAME.isin(['Apple Inc.', 'Microsoft Corporation']));

// Equivalent to:
// WHERE name = 'Apple Inc.' OR name = 'Microsoft Corporation'
```

## Debugging Conditions

### Print Condition Details

```typescript
const condition = StockField.PRICE.gt(100);

console.log(condition.toString());
// Output: "PRICE greater 100"

console.log(`Field: ${condition.field.name}`);
console.log(`Operation: ${condition.operation}`);
console.log(`Value: ${condition.value}`);
```

### Debug Screener with Conditions

```typescript
const screener = new StockScreener();

screener
  .where(StockField.PRICE.gt(100))
  .where(StockField.VOLUME.gte(1_000_000));

// Print the query
const results = await screener.get(true);  // Pass true to print request
```

## TypeScript Type Inference

Conditions are fully typed:

```typescript
import { FieldCondition } from 'tradingview-screener';

// Type is inferred
const condition: FieldCondition = StockField.PRICE.gt(100);

// Access properties with autocomplete
condition.field.  // <-- IDE shows field properties
condition.operation  // <-- Type: string
condition.value     // <-- Type: number
```

## Best Practices

### 1. Create Conditions Close to Usage

```typescript
// Good: Inline conditions
screener
  .where(StockField.PRICE.gt(100))
  .where(StockField.VOLUME.gte(1_000_000));

// Also good: Named conditions when reused
const largeCap = StockField.MARKET_CAPITALIZATION.gt(10e9);
screener1.where(largeCap);
screener2.where(largeCap);
```

### 2. Use Descriptive Names for Stored Conditions

```typescript
// Good: Clear names
const isProfitable = StockField.NET_INCOME_TTM.gt(0);
const hasHighDividend = StockField.DIVIDEND_YIELD_FWD.gt(3);
const isLargeCap = StockField.MARKET_CAPITALIZATION.gt(10e9);

// Avoid: Unclear names
const condition1 = StockField.NET_INCOME_TTM.gt(0);
const c2 = StockField.DIVIDEND_YIELD_FWD.gt(3);
```

### 3. Validate Inputs

```typescript
// Good: Validate before creating condition
function createPriceFilter(minPrice: number) {
  if (minPrice <= 0) {
    throw new Error('Price must be positive');
  }
  return StockField.PRICE.gte(minPrice);
}

// Use validated condition
const priceCondition = createPriceFilter(100);
screener.where(priceCondition);
```

### 4. Group Related Conditions

```typescript
// Good: Group by category
// Valuation conditions
const lowPE = StockField.PRICE_TO_EARNINGS_RATIO_TTM.lt(15);
const lowPB = StockField.PRICE_TO_BOOK_MRQ.lt(3);

// Quality conditions
const profitable = StockField.NET_INCOME_TTM.gt(0);
const growingRevenue = StockField.REVENUE_TTM_YOY_GROWTH.gt(10);

screener
  .where(lowPE)
  .where(lowPB)
  .where(profitable)
  .where(growingRevenue);
```

## Common Pitfalls

### Comparing Fields Directly

```typescript
// ✗ Don't do this
StockField.PRICE.gt(StockField.VOLUME);  // Error!

// ✓ Compare to constant values
StockField.PRICE.gt(100);
```

### Wrong Operator Types

```typescript
// ✗ Using numeric operator on text field
StockField.NAME.gt('A');  // Doesn't make sense

// ✓ Use appropriate operators
StockField.NAME.match('.*bank.*');  // Text pattern
StockField.PRICE.gt(100);           // Numeric comparison
```

## Next Steps

- [Filter Operations](operations.md) - All available operators
- [Complex Queries](complex-queries.md) - Advanced filtering
- [Field System](../fields/overview.md) - Understanding fields
