# Crypto Screener

Complete guide to screening cryptocurrency data with the Crypto Screener.

## Overview

The `CryptoScreener` provides access to cryptocurrency market data from TradingView.

```typescript
import { CryptoScreener, CryptoField } from 'tradingview-screener';

const screener = new CryptoScreener();
```

## Basic Usage

```typescript
screener
  .where(CryptoField.MARKET_CAP.gt(1_000_000_000))
  .where(CryptoField.VOLUME_24H_IN_USD.gte(100_000_000))
  .select(
    CryptoField.NAME,
    CryptoField.PRICE,
    CryptoField.CHANGE_PERCENT,
    CryptoField.MARKET_CAP
  )
  .sortBy(CryptoField.MARKET_CAP, false);

const results = await screener.get();
console.table(results.data);
```

## Available Fields

### Basic Fields

```typescript
CryptoField.NAME              // Cryptocurrency name
CryptoField.PRICE             // Current price
CryptoField.CHANGE_PERCENT    // 24h change percentage
CryptoField.VOLUME_24H_IN_USD // 24-hour trading volume in USD
CryptoField.MARKET_CAP        // Market capitalization
```

## Common Use Cases

### Large Cap Cryptocurrencies

```typescript
screener
  .where(CryptoField.MARKET_CAP.gt(1_000_000_000))
  .where(CryptoField.VOLUME_24H_IN_USD.gte(100_000_000))
  .select(
    CryptoField.NAME,
    CryptoField.PRICE,
    CryptoField.MARKET_CAP,
    CryptoField.VOLUME_24H_IN_USD
  )
  .sortBy(CryptoField.MARKET_CAP, false)
  .setRange(0, 50);
```

### High Volume Cryptos

```typescript
screener
  .where(CryptoField.VOLUME_24H_IN_USD.gte(500_000_000))
  .select(
    CryptoField.NAME,
    CryptoField.PRICE,
    CryptoField.VOLUME_24H_IN_USD
  )
  .sortBy(CryptoField.VOLUME_24H_IN_USD, false);
```

### Top Gainers

```typescript
screener
  .where(CryptoField.CHANGE_PERCENT.gt(10))
  .where(CryptoField.MARKET_CAP.gt(100_000_000))
  .select(
    CryptoField.NAME,
    CryptoField.PRICE,
    CryptoField.CHANGE_PERCENT
  )
  .sortBy(CryptoField.CHANGE_PERCENT, false);
```

### Market Cap Ranges

```typescript
// Mid-cap cryptos
screener.where(CryptoField.MARKET_CAP.between(100_000_000, 1_000_000_000));

// Large-cap only
screener.where(CryptoField.MARKET_CAP.gt(10_000_000_000));
```

## Filtering Examples

### Price Range

```typescript
screener
  .where(CryptoField.PRICE.between(0.01, 100))
  .where(CryptoField.VOLUME_24H_IN_USD.gte(1_000_000));
```

### Volume Threshold

```typescript
screener
  .where(CryptoField.VOLUME_24H_IN_USD.gte(50_000_000))
  .sortBy(CryptoField.VOLUME_24H_IN_USD, false);
```

### Market Cap Range

```typescript
screener
  .where(CryptoField.MARKET_CAP.between(1e9, 50e9))
  .select(CryptoField.NAME, CryptoField.MARKET_CAP);
```

## Sorting

```typescript
// Sort by market cap (largest first)
screener.sortBy(CryptoField.MARKET_CAP, false);

// Sort by volume (highest first)
screener.sortBy(CryptoField.VOLUME_24H_IN_USD, false);

// Sort by change (biggest gainers first)
screener.sortBy(CryptoField.CHANGE_PERCENT, false);

// Sort by price (lowest first)
screener.sortBy(CryptoField.PRICE, true);
```

## Real-Time Streaming

```typescript
screener
  .where(CryptoField.MARKET_CAP.gt(1e9))
  .select(
    CryptoField.NAME,
    CryptoField.PRICE,
    CryptoField.CHANGE_PERCENT
  )
  .sortBy(CryptoField.CHANGE_PERCENT, false)
  .setRange(0, 10);

// Stream top 10 gainers
for await (const data of screener.stream({ interval: 5000 })) {
  if (data) {
    console.clear();
    console.log('Top 10 Crypto Gainers');
    console.table(data.data);
  }
}
```

## Working with Results

```typescript
const results = await screener.get();

// Access data
results.data.forEach(crypto => {
  console.log(`${crypto.name}: $${crypto.close}`);
  console.log(`24h Change: ${crypto.change}%`);
  console.log(`Market Cap: $${crypto.market_cap_calc}`);
});

// Filter in JavaScript
const highVolume = results.data.filter(
  c => c['Value.Traded'] > 100_000_000
);
```

## Complete Example

```typescript
import { CryptoScreener, CryptoField } from 'tradingview-screener';

async function findTopCryptos() {
  const screener = new CryptoScreener();

  screener
    .where(CryptoField.MARKET_CAP.gt(500_000_000))
    .where(CryptoField.VOLUME_24H_IN_USD.gte(50_000_000))
    .select(
      CryptoField.NAME,
      CryptoField.PRICE,
      CryptoField.CHANGE_PERCENT,
      CryptoField.VOLUME_24H_IN_USD,
      CryptoField.MARKET_CAP
    )
    .sortBy(CryptoField.MARKET_CAP, false)
    .setRange(0, 20);

  const results = await screener.get();

  console.log(`Found ${results.totalCount} cryptocurrencies`);
  console.table(results.data);
}

findTopCryptos().catch(console.error);
```

## Next Steps

- [Filter Operations](../filtering/operations.md) - All comparison operators
- [Crypto Fields Reference](../fields/crypto-fields.md) - All available fields
- [Streaming Guide](../advanced/streaming.md) - Real-time data
