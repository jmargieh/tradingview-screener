# Bond Screener

Query bond data with the Bond Screener.

## Overview

```typescript
import { BondScreener, BondField } from 'tradingview-screener';

const screener = new BondScreener();
```

## Basic Usage

```typescript
screener
  .where(BondField.PRICE.gt(90))
  .select(BondField.NAME, BondField.PRICE);

const results = await screener.get();
console.table(results.data);
```

## Available Fields

```typescript
BondField.NAME     // Bond name
BondField.PRICE    // Bond price
```

## Complete Example

```typescript
import { BondScreener, BondField } from 'tradingview-screener';

async function findBonds() {
  const screener = new BondScreener();

  screener
    .where(BondField.PRICE.between(95, 105))
    .select(BondField.NAME, BondField.PRICE)
    .setRange(0, 50);

  const results = await screener.get();
  console.table(results.data);
}

findBonds().catch(console.error);
```

## Next Steps

- [Filter Operations](../filtering/operations.md)
- [Basic Usage](../basic-usage.md)
