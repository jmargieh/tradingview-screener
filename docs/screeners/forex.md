# Forex Screener

Query foreign exchange pairs with the Forex Screener.

## Overview

```typescript
import { ForexScreener, ForexField } from 'tradingview-screener';

const screener = new ForexScreener();
```

## Basic Usage

```typescript
screener
  .where(ForexField.PRICE.gt(1))
  .where(ForexField.CHANGE_PERCENT.ne(0))
  .select(
    ForexField.NAME,
    ForexField.PRICE,
    ForexField.CHANGE_PERCENT
  )
  .sortBy(ForexField.CHANGE_PERCENT, false);

const results = await screener.get();
console.table(results.data);
```

## Available Fields

```typescript
ForexField.NAME              // Pair name (e.g., "EUR/USD")
ForexField.PRICE             // Current exchange rate
ForexField.CHANGE_PERCENT    // Percentage change
```

## Common Use Cases

### Active Pairs

```typescript
screener
  .where(ForexField.CHANGE_PERCENT.ne(0))
  .select(ForexField.NAME, ForexField.PRICE, ForexField.CHANGE_PERCENT)
  .sortBy(ForexField.CHANGE_PERCENT, false);
```

### Major Pairs Above 1.0

```typescript
screener
  .where(ForexField.PRICE.gt(1.0))
  .select(ForexField.NAME, ForexField.PRICE);
```

### Price Range

```typescript
screener
  .where(ForexField.PRICE.between(0.5, 2.0))
  .select(ForexField.NAME, ForexField.PRICE);
```

## Complete Example

```typescript
import { ForexScreener, ForexField } from 'tradingview-screener';

async function findForexMovers() {
  const screener = new ForexScreener();

  screener
    .where(ForexField.CHANGE_PERCENT.gt(0.5))
    .select(
      ForexField.NAME,
      ForexField.PRICE,
      ForexField.CHANGE_PERCENT
    )
    .sortBy(ForexField.CHANGE_PERCENT, false)
    .setRange(0, 20);

  const results = await screener.get();
  console.table(results.data);
}

findForexMovers().catch(console.error);
```

## Next Steps

- [Filter Operations](../filtering/operations.md)
- [Basic Usage](../basic-usage.md)
