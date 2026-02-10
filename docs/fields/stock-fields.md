# Stock Fields Reference

Complete reference of currently implemented stock fields.

## Currently Implemented Fields

The TypeScript implementation currently includes **21 stock fields**. These fields are actively maintained and guaranteed to work with the TradingView API.

## Field Categories

### Price & Volume Fields

```typescript
StockField.PRICE                    // Current stock price
StockField.CHANGE                   // Absolute price change
StockField.CHANGE_PERCENT           // Percentage price change
StockField.VOLUME                   // Trading volume
```

### Company Information

```typescript
StockField.NAME                     // Company name
StockField.DESCRIPTION              // Company description
```

### Valuation Ratios

```typescript
StockField.PRICE_TO_EARNINGS_RATIO_TTM         // P/E ratio (TTM)
StockField.PRICE_EARNINGS_GROWTH_TTM           // PEG ratio (TTM)
StockField.PRICE_SALES_CURRENT                 // Price to Sales ratio
StockField.PRICE_TO_BOOK_MRQ                   // P/B ratio
StockField.ENTERPRISE_VALUE_EBITDA_TTM         // EV/EBITDA ratio
```

### Fundamental Metrics

```typescript
StockField.MARKET_CAPITALIZATION               // Market cap
StockField.REVENUE_TTM                         // Total revenue (TTM)
StockField.REVENUE_TTM_YOY_GROWTH             // Revenue YoY growth (TTM)
StockField.NET_INCOME_TTM                      // Net income (TTM)
StockField.EARNINGS_PER_SHARE_DILUTED_TTM      // EPS diluted (TTM)
```

### Dividend Fields

```typescript
StockField.DIVIDEND_YIELD_FWD                  // Forward dividend yield
StockField.DIVIDENDS_YIELD_FY                  // Fiscal year dividend yield
StockField.DPS_COMMON_STOCK_PRIM_ISSUE_TTM    // Dividend per share (TTM)
```

### Technical Indicators

```typescript
StockField.RSI                                 // Relative Strength Index
StockField.ATR                                 // Average True Range
```

## Field Details

### PRICE
- **Type**: Number (currency)
- **Format**: `currency`
- **Supports Interval**: Yes
- **Field Name**: `close`

Example:
```typescript
StockField.PRICE.gt(100)
StockField.PRICE.between(10, 500)
```

### MARKET_CAPITALIZATION
- **Type**: Number (currency)
- **Format**: `currency`
- **Field Name**: `market_cap_basic`

Example:
```typescript
StockField.MARKET_CAPITALIZATION.between(1e9, 100e9)  // 1B to 100B
```

### VOLUME
- **Type**: Number
- **Format**: `number_group`
- **Field Name**: `volume`

Example:
```typescript
StockField.VOLUME.gte(1_000_000)  // At least 1M volume
```

### PRICE_TO_EARNINGS_RATIO_TTM
- **Type**: Number (float)
- **Format**: `float`
- **Field Name**: `price_earnings_ttm`

Example:
```typescript
StockField.PRICE_TO_EARNINGS_RATIO_TTM.between(10, 20)  // P/E 10-20
```

### PRICE_EARNINGS_GROWTH_TTM
- **Type**: Number (round)
- **Format**: `round`
- **Field Name**: `price_earnings_growth_ttm`

Example:
```typescript
StockField.PRICE_EARNINGS_GROWTH_TTM.between(0.5, 1)  // PEG ratio 0.5-1
```

### PRICE_SALES_CURRENT
- **Type**: Number (round)
- **Format**: `round`
- **Field Name**: `price_sales_current`

Example:
```typescript
StockField.PRICE_SALES_CURRENT.lt(5)  // Price/Sales < 5
```

### REVENUE_TTM_YOY_GROWTH
- **Type**: Number (percent)
- **Format**: `percent`
- **Field Name**: `total_revenue_yoy_growth_ttm`

Example:
```typescript
StockField.REVENUE_TTM_YOY_GROWTH.gt(20)  // Revenue growth > 20%
```

### DIVIDEND_YIELD_FWD
- **Type**: Number (percent)
- **Format**: `percent`
- **Field Name**: `dividend_yield_forward`

Example:
```typescript
StockField.DIVIDEND_YIELD_FWD.gte(3)  // At least 3% yield
```

### DIVIDENDS_YIELD_FY
- **Type**: Number (percent)
- **Format**: `percent`
- **Field Name**: `dividends_yield_fy`

Example:
```typescript
StockField.DIVIDENDS_YIELD_FY.gt(4)  // Fiscal year yield > 4%
```

### DPS_COMMON_STOCK_PRIM_ISSUE_TTM
- **Type**: Number (currency)
- **Format**: `currency`
- **Field Name**: `dps_common_stock_prim_issue_ttm`

Example:
```typescript
StockField.DPS_COMMON_STOCK_PRIM_ISSUE_TTM.gt(0.5)  // DPS > $0.50
```

### RSI
- **Type**: Number (float)
- **Format**: `float`
- **Supports Interval**: Yes
- **Field Name**: `RSI`

Example:
```typescript
StockField.RSI.between(40, 60)  // Not overbought/oversold
```

## Usage Examples

### Basic Query

```typescript
import { StockScreener, StockField } from 'tradingview-screener';

const screener = new StockScreener();

screener
  .where(StockField.PRICE.gt(10))
  .where(StockField.VOLUME.gte(100_000))
  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.VOLUME,
    StockField.MARKET_CAPITALIZATION
  );

const results = await screener.get();
```

### Value Screening

```typescript
screener
  .where(StockField.PRICE_TO_EARNINGS_RATIO_TTM.lt(15))
  .where(StockField.PRICE_TO_BOOK_MRQ.lt(3))
  .where(StockField.DIVIDEND_YIELD_FWD.gte(2))
  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.PRICE_TO_EARNINGS_RATIO_TTM,
    StockField.DIVIDEND_YIELD_FWD
  );
```

### Growth Screening

```typescript
screener
  .where(StockField.REVENUE_TTM_YOY_GROWTH.gt(25))
  .where(StockField.PRICE_EARNINGS_GROWTH_TTM.between(0.5, 1))
  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.REVENUE_TTM_YOY_GROWTH,
    StockField.PRICE_EARNINGS_GROWTH_TTM
  );
```

### Dividend Screening

```typescript
screener
  .where(StockField.DIVIDENDS_YIELD_FY.gt(4))
  .where(StockField.DPS_COMMON_STOCK_PRIM_ISSUE_TTM.gt(0.5))
  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.DIVIDENDS_YIELD_FY,
    StockField.DPS_COMMON_STOCK_PRIM_ISSUE_TTM
  );
```

### Technical Analysis

```typescript
screener
  .where(StockField.RSI.between(40, 60))
  .where(StockField.VOLUME.gte(500_000))
  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.RSI,
    StockField.ATR
  );
```

## Complete Field List

| Field Constant | Label | API Field Name | Format |
|----------------|-------|----------------|--------|
| `NAME` | Name | name | text |
| `DESCRIPTION` | Description | description | text |
| `PRICE` | Price | close | currency |
| `CHANGE` | Change | change | currency |
| `CHANGE_PERCENT` | Change % | change_abs | percent |
| `VOLUME` | Volume | volume | number_group |
| `MARKET_CAPITALIZATION` | Market Cap | market_cap_basic | currency |
| `PRICE_TO_EARNINGS_RATIO_TTM` | P/E Ratio (TTM) | price_earnings_ttm | float |
| `PRICE_EARNINGS_GROWTH_TTM` | PEG Ratio (TTM) | price_earnings_growth_ttm | round |
| `PRICE_SALES_CURRENT` | Price Sales Current | price_sales_current | round |
| `PRICE_TO_BOOK_MRQ` | P/B Ratio | price_book_fq | float |
| `ENTERPRISE_VALUE_EBITDA_TTM` | EV/EBITDA | enterprise_value_ebitda_ttm | float |
| `DIVIDEND_YIELD_FWD` | Dividend Yield (Forward) | dividend_yield_forward | percent |
| `DIVIDENDS_YIELD_FY` | Dividends Yield FY | dividends_yield_fy | percent |
| `DPS_COMMON_STOCK_PRIM_ISSUE_TTM` | Dividend Per Share TTM | dps_common_stock_prim_issue_ttm | currency |
| `EARNINGS_PER_SHARE_DILUTED_TTM` | EPS Diluted (TTM) | earnings_per_share_diluted_ttm | currency |
| `REVENUE_TTM` | Revenue (TTM) | total_revenue_ttm | currency |
| `REVENUE_TTM_YOY_GROWTH` | Revenue (TTM YoY Growth) | total_revenue_yoy_growth_ttm | percent |
| `NET_INCOME_TTM` | Net Income (TTM) | net_income_ttm | currency |
| `RSI` | RSI | RSI | float |
| `ATR` | ATR | ATR | float |

## Field Name Mapping

When accessing results, use the `fieldName`:

```typescript
const results = await screener.get();
const firstRow = results.data[0];

// Access fields by their API field name
console.log(firstRow.close);                              // Price
console.log(firstRow.name);                               // Company name
console.log(firstRow.market_cap_basic);                   // Market cap
console.log(firstRow.price_earnings_ttm);                 // P/E ratio
console.log(firstRow.total_revenue_yoy_growth_ttm);       // Revenue growth
console.log(firstRow.dividends_yield_fy);                 // Dividend yield FY
```

## Next Steps

- [Field System Overview](overview.md) - Understanding fields
- [Field Modifiers](modifiers.md) - Using intervals and history
- [Stock Screener Guide](../screeners/stock.md) - Using stock fields in queries
- [Filter Operations](../filtering/operations.md) - All comparison operators
