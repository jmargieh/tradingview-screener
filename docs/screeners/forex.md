# Forex Screener

Query foreign exchange pairs with the Forex Screener.

## Overview

```typescript
import { ForexScreener, ForexField } from 'tradingview-screener';

const screener = new ForexScreener();
```

The Forex Screener provides access to **2,965 fields** covering comprehensive technical analysis, indicators, and market data - achieving full parity with the Python [tvscreener](https://github.com/deepentropy/tvscreener) library.

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

The `ForexField` object provides **2,965 fields** organized into the following categories:

### Field Categories

- **Basic Information** (34 fields) - Pair names, descriptions, metadata
- **Price & Volume** (280 fields) - Price data, volume, and related metrics
- **Moving Averages** (824 fields) - SMA, EMA, and other moving average types
- **Oscillators** (480 fields) - RSI, Stochastic, CCI, and momentum oscillators
- **Volatility** (113 fields) - ATR, Bollinger Bands, and volatility measures
- **Momentum** (290 fields) - ADX, directional indicators, and trend strength
- **Candlestick Patterns** (151 fields) - Doji, Hammer, Engulfing, and pattern recognition
- **Pivot Points** (310 fields) - Camarilla, Fibonacci, and Classic pivot levels
- **Volume Indicators** (146 fields) - Volume-based analysis and metrics
- **Market Data** (20 fields) - Exchange info and market metadata
- **Other** (317 fields) - Additional technical metrics and calculations

### Common Fields

```typescript
// Basic Information
ForexField.NAME                          // Pair name (e.g., "EUR/USD")
ForexField.DESCRIPTION                   // Full description

// Price & Volume
ForexField.PRICE                         // Current exchange rate
ForexField.CHANGE_PERCENT                // Percentage change
ForexField.CHANGE                        // Absolute change
ForexField.HIGH_5D                       // 5-day high
ForexField.LOW_5D                        // 5-day low

// Moving Averages
ForexField.SIMPLE_MOVING_AVERAGE_10      // 10-period SMA
ForexField.SIMPLE_MOVING_AVERAGE_20      // 20-period SMA
ForexField.SIMPLE_MOVING_AVERAGE_50      // 50-period SMA
ForexField.SIMPLE_MOVING_AVERAGE_200     // 200-period SMA
ForexField.EXPONENTIAL_MOVING_AVERAGE_10 // 10-period EMA
ForexField.EXPONENTIAL_MOVING_AVERAGE_20 // 20-period EMA
ForexField.EXPONENTIAL_MOVING_AVERAGE_50 // 50-period EMA
ForexField.EXPONENTIAL_MOVING_AVERAGE_200// 200-period EMA

// Oscillators
ForexField.RELATIVE_STRENGTH_INDEX_14    // 14-period RSI
ForexField.RELATIVE_STRENGTH_INDEX_7     // 7-period RSI
ForexField.COMMODITY_CHANNEL_INDEX_20    // 20-period CCI

// Volatility
ForexField.AVERAGE_TRUE_RANGE_14         // 14-period ATR

// Momentum
ForexField.AVERAGE_DIRECTIONAL_INDEX_14  // 14-period ADX
ForexField.POSITIVE_DIRECTIONAL_INDICATOR_14 // +DI indicator

// Candlestick Patterns
ForexField.CANDLE_DOJI                   // Doji pattern detected
ForexField.CANDLE_DOJI_DRAGONFLY         // Dragonfly Doji pattern
ForexField.CANDLE_HANGINGMAN             // Hanging Man pattern

// Pivot Points
ForexField.PIVOT_CAMARILLA_P             // Camarilla pivot point

// Volume Indicators
ForexField.AVERAGE_DAY_RANGE_14          // 14-period ADR
```

### Technical Indicators

The screener includes comprehensive technical indicators with multiple timeframes:

- **Moving Averages**: Simple (SMA), Exponential (EMA), Weighted (WMA), and Hull (HMA) with periods from 5 to 200
- **Oscillators**: RSI (7, 10, 14 periods), Stochastic (various configurations), CCI, Williams %R
- **Volatility**: ATR, Bollinger Bands, Average Day Range, volatility percentages
- **Momentum**: ADX, MACD (histogram and signal), directional indicators (+DI, -DI)
- **Volume**: Chaikin Money Flow, volume-based indicators across multiple timeframes

Many indicators are available across different timeframes (1min, 5min, 15min, 1h, 4h, 1D, 1W, 1M) using the interval suffix pattern (e.g., `|1`, `|15`, `|60`, `|1D`, `|1W`, `|1M`).

## Common Use Cases

### Active Pairs

Find currency pairs with recent price movement:

```typescript
screener
  .where(ForexField.CHANGE_PERCENT.ne(0))
  .select(ForexField.NAME, ForexField.PRICE, ForexField.CHANGE_PERCENT)
  .sortBy(ForexField.CHANGE_PERCENT, false);
```

### Major Pairs Above 1.0

Filter pairs by exchange rate threshold:

```typescript
screener
  .where(ForexField.PRICE.gt(1.0))
  .select(ForexField.NAME, ForexField.PRICE);
```

### Oversold RSI Signals

Find pairs with RSI below 30 (potentially oversold):

```typescript
screener
  .where(ForexField.RELATIVE_STRENGTH_INDEX_14.lt(30))
  .select(
    ForexField.NAME,
    ForexField.PRICE,
    ForexField.RELATIVE_STRENGTH_INDEX_14
  )
  .sortBy(ForexField.RELATIVE_STRENGTH_INDEX_14);
```

### Moving Average Crossover

Find pairs where price is above the 20 and 50 period SMAs:

```typescript
screener
  .where(ForexField.PRICE.gt(ForexField.SIMPLE_MOVING_AVERAGE_20))
  .where(ForexField.PRICE.gt(ForexField.SIMPLE_MOVING_AVERAGE_50))
  .select(
    ForexField.NAME,
    ForexField.PRICE,
    ForexField.SIMPLE_MOVING_AVERAGE_20,
    ForexField.SIMPLE_MOVING_AVERAGE_50
  );
```

### High Volatility Pairs

Screen for pairs with high Average True Range:

```typescript
screener
  .where(ForexField.AVERAGE_TRUE_RANGE_14.gt(0.001))
  .select(
    ForexField.NAME,
    ForexField.PRICE,
    ForexField.AVERAGE_TRUE_RANGE_14,
    ForexField.CHANGE_PERCENT
  )
  .sortBy(ForexField.AVERAGE_TRUE_RANGE_14, false);
```

### Strong Momentum

Find pairs with strong ADX and positive change:

```typescript
screener
  .where(ForexField.AVERAGE_DIRECTIONAL_INDEX_14.gt(25))
  .where(ForexField.CHANGE_PERCENT.gt(0))
  .select(
    ForexField.NAME,
    ForexField.PRICE,
    ForexField.AVERAGE_DIRECTIONAL_INDEX_14,
    ForexField.CHANGE_PERCENT
  )
  .sortBy(ForexField.AVERAGE_DIRECTIONAL_INDEX_14, false);
```

### Candlestick Pattern Detection

Find pairs with Doji candlestick patterns:

```typescript
screener
  .where(ForexField.CANDLE_DOJI.eq(true))
  .select(
    ForexField.NAME,
    ForexField.PRICE,
    ForexField.CHANGE_PERCENT
  );
```

## Complete Example

```typescript
import { ForexScreener, ForexField } from 'tradingview-screener';

async function findForexTradingOpportunities() {
  const screener = new ForexScreener();

  // Find pairs with strong momentum and bullish indicators
  screener
    .where(ForexField.RELATIVE_STRENGTH_INDEX_14.between(40, 70))
    .where(ForexField.AVERAGE_DIRECTIONAL_INDEX_14.gt(20))
    .where(ForexField.CHANGE_PERCENT.gt(0))
    .where(ForexField.PRICE.gt(ForexField.EXPONENTIAL_MOVING_AVERAGE_20))
    .select(
      ForexField.NAME,
      ForexField.PRICE,
      ForexField.CHANGE_PERCENT,
      ForexField.RELATIVE_STRENGTH_INDEX_14,
      ForexField.AVERAGE_DIRECTIONAL_INDEX_14,
      ForexField.EXPONENTIAL_MOVING_AVERAGE_20,
      ForexField.AVERAGE_TRUE_RANGE_14
    )
    .sortBy(ForexField.CHANGE_PERCENT, false)
    .setRange(0, 20);

  const results = await screener.get();
  console.table(results.data);
}

findForexTradingOpportunities().catch(console.error);
```

## Field Naming Patterns

Many technical indicators follow consistent naming patterns:

### Interval Suffixes

Fields support multiple timeframes using interval suffixes:

```typescript
ForexField.RELATIVE_STRENGTH_INDEX_14    // Default/current timeframe
ForexField.RSI10_1                       // 1-minute interval
ForexField.RSI10_5                       // 5-minute interval
ForexField.RSI10_15                      // 15-minute interval
ForexField.RSI10_60                      // 1-hour interval
ForexField.RSI10_240                     // 4-hour interval
ForexField.RSI10_1D                      // Daily interval
ForexField.RSI10_1W                      // Weekly interval
ForexField.RSI10_1M                      // Monthly interval
```

### Historical Values

Access previous values using array notation in field names:

```typescript
ForexField.CCI20_1                       // CCI[1] - previous value
```

## Full Field Parity

This implementation provides complete parity with the Python [tvscreener](https://github.com/deepentropy/tvscreener) library, offering all 2,965 fields available in the TradingView Forex Screener API. You can access any technical indicator, moving average configuration, or market data field that TradingView provides.

## Next Steps

- [Filter Operations](../filtering/operations.md)
- [Basic Usage](../basic-usage.md)
