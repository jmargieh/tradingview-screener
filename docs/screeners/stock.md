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
  .where(StockField.REVENUE_GROWTH_TTM.gt(20))
  .where(StockField.EARNINGS_GROWTH_TTM.gt(15))
  .where(StockField.MARKET_CAPITALIZATION.between(1e9, 50e9))
  .select(
    StockField.NAME,
    StockField.REVENUE_GROWTH_TTM,
    StockField.EARNINGS_GROWTH_TTM,
    StockField.PRICE_TO_EARNINGS_GROWTH_RATIO_TTM
  );
```

### High Dividend Stocks

```typescript
screener
  .where(StockField.DIVIDEND_YIELD_FWD.gte(4))
  .where(StockField.DIVIDEND_PAYOUT_RATIO_TTM.lte(70))
  .where(StockField.MARKET_CAPITALIZATION.gte(5e9))
  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.DIVIDEND_YIELD_FWD,
    StockField.DIVIDEND_PAYOUT_RATIO_TTM,
    StockField.DIVIDENDS_PER_SHARE_FY
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
- `AVERAGE_VOLUME_10D` - 10-day average volume
- `AVERAGE_VOLUME_30D` - 30-day average volume
- `RELATIVE_VOLUME_10D` - Volume relative to 10-day average

### Market Data
- `MARKET_CAPITALIZATION` - Market cap
- `NAME` - Company name
- `DESCRIPTION` - Company description
- `SECTOR` - Business sector
- `INDUSTRY` - Industry classification
- `COUNTRY` - Country of incorporation

### Valuation Ratios
- `PRICE_TO_EARNINGS_RATIO_TTM` - P/E ratio (trailing 12 months)
- `PRICE_TO_BOOK_MRQ` - P/B ratio (most recent quarter)
- `PRICE_TO_SALES_RATIO_TTM` - P/S ratio
- `ENTERPRISE_VALUE_EBITDA_TTM` - EV/EBITDA
- `PRICE_TO_EARNINGS_GROWTH_RATIO_TTM` - PEG ratio
- `PRICE_TO_FREE_CASH_FLOW_TTM` - P/FCF ratio

### Income Statement
- `REVENUE_TTM` - Total revenue (trailing 12 months)
- `REVENUE_GROWTH_TTM` - Revenue growth rate
- `NET_INCOME_TTM` - Net income
- `NET_INCOME_GROWTH_TTM` - Net income growth
- `OPERATING_MARGIN_TTM` - Operating margin
- `NET_MARGIN_TTM` - Net profit margin
- `EBITDA_TTM` - EBITDA

### Balance Sheet
- `TOTAL_ASSETS_MRQ` - Total assets (most recent quarter)
- `TOTAL_LIABILITIES_MRQ` - Total liabilities
- `TOTAL_EQUITY_MRQ` - Total equity
- `DEBT_TO_EQUITY_RATIO_MRQ` - Debt/equity ratio
- `CURRENT_RATIO_MRQ` - Current ratio
- `QUICK_RATIO_MRQ` - Quick ratio

### Cash Flow
- `FREE_CASH_FLOW_TTM` - Free cash flow
- `OPERATING_CASH_FLOW_TTM` - Operating cash flow
- `LEVERED_FREE_CASH_FLOW_TTM` - Levered free cash flow

### Dividends
- `DIVIDEND_YIELD_FWD` - Forward dividend yield
- `DIVIDENDS_PER_SHARE_FY` - Annual dividends per share
- `DIVIDEND_PAYOUT_RATIO_TTM` - Payout ratio
- `DIVIDEND_GROWTH_RATE_5Y` - 5-year dividend growth

### Per Share Metrics
- `EARNINGS_PER_SHARE_DILUTED_TTM` - EPS (diluted)
- `EARNINGS_PER_SHARE_BASIC_TTM` - EPS (basic)
- `BOOK_VALUE_PER_SHARE_MRQ` - Book value per share
- `FREE_CASH_FLOW_PER_SHARE_TTM` - FCF per share
- `REVENUE_PER_SHARE_TTM` - Revenue per share

### Technical Indicators
- `RSI` - Relative Strength Index
- `ATR` - Average True Range
- `MACD` - MACD indicator
- `STOCHASTIC_K` - Stochastic %K
- `STOCHASTIC_D` - Stochastic %D
- `BOLLINGER_BANDS_UPPER` - Upper Bollinger Band
- `BOLLINGER_BANDS_LOWER` - Lower Bollinger Band
- `MOVING_AVERAGE_50` - 50-day MA
- `MOVING_AVERAGE_200` - 200-day MA

### Recommendations
- `ANALYST_RECOMMENDATION` - Analyst consensus rating
- `ANALYST_TARGET_PRICE` - Average price target
- `COMPUTED_RECOMMENDATION_ALL` - Computed recommendation

## Filtering Examples

### Multiple Conditions

```typescript
// Large cap tech stocks with strong fundamentals
screener
  .where(StockField.MARKET_CAPITALIZATION.gt(50e9))
  .where(StockField.SECTOR.eq('Technology'))
  .where(StockField.REVENUE_GROWTH_TTM.gt(15))
  .where(StockField.OPERATING_MARGIN_TTM.gt(20))
  .where(StockField.DEBT_TO_EQUITY_RATIO_MRQ.lt(0.5));
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
// Stocks in specific sectors
screener.where(
  StockField.SECTOR.isin([
    'Technology',
    'Healthcare',
    'Consumer Cyclical'
  ])
);

// Stocks in specific countries
screener.where(
  StockField.COUNTRY.isin(['US', 'CA', 'GB'])
);
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
// Get all available fields (15+ fields)
screener.selectAll();

const results = await screener.get();
// Results will have all available stock fields
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
screener.where(StockField.EXCHANGE.eq('NASDAQ'));
screener.where(StockField.EXCHANGE.eq('NYSE'));
```

### Multiple Countries

```typescript
screener.where(
  StockField.COUNTRY.isin(['US', 'CA', 'GB', 'DE'])
);
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
  .where(StockField.RETURN_ON_EQUITY_TTM.gt(15))
  .where(StockField.DEBT_TO_EQUITY_RATIO_MRQ.lt(1))
  .where(StockField.MARKET_CAPITALIZATION.gte(1e9));
```

### Quality Growth Stocks

```typescript
screener
  .where(StockField.REVENUE_GROWTH_TTM.gt(20))
  .where(StockField.OPERATING_MARGIN_TTM.gt(15))
  .where(StockField.RETURN_ON_EQUITY_TTM.gt(20))
  .where(StockField.CURRENT_RATIO_MRQ.gt(1.5))
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
