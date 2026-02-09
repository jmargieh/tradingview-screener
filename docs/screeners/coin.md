# Coin Screener

Query coin data with the Coin Screener.

## Overview

```typescript
import { CoinScreener, CoinField } from 'tradingview-screener';

const screener = new CoinScreener();
```

## Basic Usage

```typescript
screener
  .where(CoinField.PRICE.gt(0.01))
  .select(CoinField.NAME, CoinField.PRICE);

const results = await screener.get();
console.table(results.data);
```

## Available Fields

```typescript
CoinField.NAME     // Coin name
CoinField.PRICE    // Current price
```

## Complete Example

```typescript
import { CoinScreener, CoinField } from 'tradingview-screener';

async function findCoins() {
  const screener = new CoinScreener();

  screener
    .where(CoinField.PRICE.between(0.001, 10))
    .select(CoinField.NAME, CoinField.PRICE)
    .sortBy(CoinField.PRICE, false)
    .setRange(0, 50);

  const results = await screener.get();
  console.table(results.data);
}

findCoins().catch(console.error);
```

## Next Steps

- [Filter Operations](../filtering/operations.md)
- [Basic Usage](../basic-usage.md)
