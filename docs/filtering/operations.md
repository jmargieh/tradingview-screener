# Filter Operations

Complete reference for all filter operations and comparison operators.

## Overview

Filters define the conditions that results must match. The library provides 15+ comparison operators for building complex queries.

## Basic Operators

### Greater Than (`gt`)

```typescript
StockField.PRICE.gt(100)
// SQL equivalent: WHERE price > 100
```

**Use cases:**
- Price above a threshold
- Volume above average
- Market cap above $1B

```typescript
screener
  .where(StockField.PRICE.gt(50))
  .where(StockField.VOLUME.gt(1_000_000))
  .where(StockField.MARKET_CAPITALIZATION.gt(1e9));
```

### Greater Than or Equal (`gte`)

```typescript
StockField.DIVIDEND_YIELD_FWD.gte(3)
// SQL equivalent: WHERE dividend_yield >= 3
```

**Use cases:**
- Minimum dividend yield
- Minimum volume requirement
- Minimum ratings

```typescript
screener
  .where(StockField.DIVIDEND_YIELD_FWD.gte(3))
  .where(StockField.PRICE_TO_EARNINGS_RATIO_TTM.lte(20)); // Reasonable valuation
```

### Less Than (`lt`)

```typescript
StockField.PRICE_TO_EARNINGS_RATIO_TTM.lt(15)
// SQL equivalent: WHERE pe_ratio < 15
```

**Use cases:**
- Maximum P/E ratio
- Maximum price
- Low volatility

```typescript
screener
  .where(StockField.PRICE_TO_EARNINGS_RATIO_TTM.lt(15))
  .where(StockField.ATR.lt(5)) // Low volatility
  .where(StockField.PRICE_TO_BOOK_MRQ.lt(2));
```

### Less Than or Equal (`lte`)

```typescript
StockField.PRICE.lte(500)
// SQL equivalent: WHERE price <= 500
```

**Use cases:**
- Maximum price
- Maximum valuation ratios
- Cap on metrics

```typescript
screener
  .where(StockField.PRICE.lte(500))
  .where(StockField.PRICE_TO_BOOK_MRQ.lte(3))
  .where(StockField.DIVIDEND_YIELD_FWD.lte(8));
```

### Equal (`eq`)

```typescript
StockField.NAME.eq('Apple Inc.')
// SQL equivalent: WHERE name = 'Apple Inc.'
```

**Use cases:**
- Exact matches
- Specific company names
- Specific values

```typescript
screener
  .where(StockField.NAME.eq('Apple Inc.'))
  .where(StockField.PRICE.eq(150))
  .where(StockField.VOLUME.gt(1_000_000));
```

### Not Equal (`ne`)

```typescript
StockField.PRICE.ne(0)
// SQL equivalent: WHERE price != 0
```

**Use cases:**
- Exclude specific values
- Filter out zeros
- Exclude nulls

```typescript
screener
  .where(StockField.PRICE.ne(0))
  .where(StockField.VOLUME.ne(0)); // Exclude inactive stocks
```

## Range Operators

### Between (`between`)

```typescript
StockField.MARKET_CAPITALIZATION.between(1e9, 100e9)
// SQL equivalent: WHERE market_cap BETWEEN 1e9 AND 100e9
```

**Use cases:**
- Market cap ranges (small, mid, large cap)
- Price ranges
- Valuation ratio ranges

```typescript
screener
  // Mid-cap stocks
  .where(StockField.MARKET_CAPITALIZATION.between(2e9, 10e9))
  // Moderate P/E ratio
  .where(StockField.PRICE_TO_EARNINGS_RATIO_TTM.between(10, 20))
  // Price range
  .where(StockField.PRICE.between(10, 100))
  // RSI not overbought/oversold
  .where(StockField.RSI.between(40, 60));
```

### Not Between (`notBetween`)

```typescript
StockField.RSI.notBetween(30, 70)
// SQL equivalent: WHERE rsi NOT BETWEEN 30 AND 70
```

**Use cases:**
- Exclude mid-range values
- Find extreme values
- Overbought/oversold conditions

```typescript
screener
  // Find overbought or oversold
  .where(StockField.RSI.notBetween(30, 70))
  // Avoid mid-cap
  .where(StockField.MARKET_CAPITALIZATION.notBetween(2e9, 10e9));
```

## List Operators

### In List (`isin`)

```typescript
StockField.PRICE.isin([50, 100, 150, 200])
// SQL equivalent: WHERE price IN (50, 100, 150, 200)
```

**Use cases:**
- Multiple specific values
- Discrete price points
- Whitelist of values

```typescript
screener
  // Specific price points
  .where(StockField.PRICE.isin([50, 100, 150, 200]))
  // Multiple P/E ratios
  .where(StockField.PRICE_TO_EARNINGS_RATIO_TTM.isin([10, 15, 20]))
  // Multiple RSI values
  .where(StockField.RSI.isin([30, 50, 70]));
```

### Not In List (`notIn`)

```typescript
StockField.PRICE.notIn([0, 999999])
// SQL equivalent: WHERE price NOT IN (0, 999999)
```

**Use cases:**
- Exclude specific values
- Blacklist values
- Filter out outliers

```typescript
screener
  // Exclude extreme prices
  .where(StockField.PRICE.notIn([0, 999999]))
  // Exclude certain P/E ratios
  .where(StockField.PRICE_TO_EARNINGS_RATIO_TTM.notIn([0, -1]));
```

## Text Operators

### Match (Regex) (`match`)

```typescript
StockField.NAME.match('.*bank.*')
// SQL equivalent: WHERE name LIKE '%bank%' (roughly)
```

**Use cases:**
- Pattern matching
- Search by keyword
- Fuzzy matching

```typescript
screener
  // Find banks
  .where(StockField.NAME.match('.*bank.*'))
  // Find energy companies
  .where(StockField.NAME.match('.*(energy|oil|gas).*'));
```

### Not Match (`notMatch`)

```typescript
StockField.NAME.notMatch('.*tech.*')
// SQL equivalent: WHERE name NOT LIKE '%tech%'
```

**Use cases:**
- Exclude keywords
- Filter out patterns

```typescript
screener
  .where(StockField.NAME.notMatch('.*acquisition.*'))
  .where(StockField.NAME.notMatch('.*SPAC.*'));
```

## Array Operators

### Has (Contains Any) (`has`)

```typescript
StockField.NAME.has(['Apple', 'Microsoft'])
// Has at least one of the values
```

**Use cases:**
- Name matching
- Keyword filtering
- Multi-value matching

```typescript
screener
  .where(StockField.NAME.has(['Apple', 'Microsoft']))
  .where(StockField.DESCRIPTION.has(['technology', 'software']));
```

### Has None Of (`hasNoneOf`)

```typescript
StockField.NAME.hasNoneOf(['Acquisition', 'SPAC'])
// SQL equivalent: none of the values match
```

**Use cases:**
- Exclude keywords
- Filter out specific terms

```typescript
screener
  .where(StockField.NAME.hasNoneOf(['Acquisition', 'SPAC', 'Holdings']));
```

## Technical Analysis Operators

### Above (`above`)

```typescript
StockField.PRICE.above(StockField.PRICE_TO_BOOK_MRQ)
// Price above P/B ratio (example field-to-field comparison)
```

**Note:** Field-to-field comparisons may not be supported by all operators.

### Below (`below`)

```typescript
StockField.PRICE_TO_EARNINGS_RATIO_TTM.below(StockField.PRICE_TO_BOOK_MRQ)
// P/E below P/B (example field-to-field comparison)
```

### Crosses (`crosses`)

```typescript
StockField.RSI.crosses(50)
// RSI recently crossed the 50 level
```

### Crosses Above (`crossesAbove`)

```typescript
StockField.RSI.crossesAbove(30)
// RSI crossed above 30 (oversold recovery)
```

### Crosses Below (`crossesBelow`)

```typescript
StockField.RSI.crossesBelow(70)
// RSI crossed below 70 (overbought correction)
```

## Combining Operators

### Multiple Conditions (AND)

All `where()` clauses are combined with AND logic:

```typescript
screener
  .where(StockField.PRICE.gt(10))            // AND
  .where(StockField.PRICE.lt(500))           // AND
  .where(StockField.VOLUME.gte(100_000))     // AND
  .where(StockField.MARKET_CAPITALIZATION.gt(1e9));
```

This is equivalent to:
```sql
WHERE price > 10
  AND price < 500
  AND volume >= 100000
  AND market_cap > 1000000000
```

### OR Logic

For OR conditions, use `isin()` or multiple queries:

```typescript
// Option 1: Use isin for OR on same field
screener.where(StockField.PRICE.isin([50, 100, 150]));
// price = 50 OR price = 100 OR price = 150

// Option 2: Run separate queries and merge
const lowPE = await screener1.where(StockField.PRICE_TO_EARNINGS_RATIO_TTM.lt(10)).get();
const highDiv = await screener2.where(StockField.DIVIDEND_YIELD_FWD.gt(5)).get();
const combined = [...lowPE.data, ...highDiv.data];
```

### Complex Conditions

```typescript
screener
  // Market cap: large cap OR mid cap with high volume
  .where(StockField.MARKET_CAPITALIZATION.gt(2e9))
  .where(StockField.VOLUME.gte(500_000))

  // Price: between $10-500 OR momentum play above $500
  .where(StockField.PRICE.gt(10))

  // Valuation: reasonable P/E
  .where(StockField.PRICE_TO_EARNINGS_RATIO_TTM.lt(30))

  // Quality: profitable with positive growth
  .where(StockField.NET_INCOME_TTM.gt(0))
  .where(StockField.REVENUE_TTM_YOY_GROWTH.gt(0));
```

## Operator Precedence

All conditions are evaluated with AND logic. Order doesn't affect results but can affect readability:

```typescript
// Recommended order: most restrictive first
screener
  .where(StockField.MARKET_CAPITALIZATION.gt(10e9))    // Most restrictive
  .where(StockField.PRICE_TO_EARNINGS_RATIO_TTM.lt(20)) // Medium
  .where(StockField.PRICE.gt(10));                      // Least restrictive
```

## Common Patterns

### Value Investing Screen

```typescript
screener
  .where(StockField.PRICE_TO_EARNINGS_RATIO_TTM.between(5, 15))
  .where(StockField.PRICE_TO_BOOK_MRQ.lt(3))
  .where(StockField.DIVIDEND_YIELD_FWD.gte(2))
  .where(StockField.PRICE_SALES_CURRENT.lt(2))
  .where(StockField.NET_INCOME_TTM.gt(0));
```

### Growth Investing Screen

```typescript
screener
  .where(StockField.REVENUE_TTM_YOY_GROWTH.gt(20))
  .where(StockField.EARNINGS_PER_SHARE_DILUTED_TTM.gt(0))
  .where(StockField.NET_INCOME_TTM.gt(0))
  .where(StockField.PRICE_EARNINGS_GROWTH_TTM.lt(1.5));
```

### Momentum Trading Screen

```typescript
screener
  .where(StockField.RSI.between(50, 70))
  .where(StockField.CHANGE_PERCENT.gt(2))
  .where(StockField.VOLUME.gt(1_000_000))
  .where(StockField.ATR.gt(2));
```

### Quality Dividend Screen

```typescript
screener
  .where(StockField.DIVIDEND_YIELD_FWD.between(3, 8))
  .where(StockField.DIVIDENDS_YIELD_FY.gte(2.5))
  .where(StockField.DPS_COMMON_STOCK_PRIM_ISSUE_TTM.gt(0))
  .where(StockField.PRICE_TO_BOOK_MRQ.lt(3))
  .where(StockField.NET_INCOME_TTM.gt(0));
```

## Error Handling

### Invalid Comparisons

```typescript
// ❌ Field-to-field comparison (not supported)
try {
  StockField.PRICE.gt(StockField.PRICE_TO_BOOK_MRQ);
} catch (error) {
  console.error('Field-to-field comparisons not supported');
}

// ✓ Use value comparison
StockField.PRICE.gt(100);
```

### Type Mismatches

```typescript
// ❌ Wrong type
StockField.PRICE.eq('expensive'); // Error: expects number

// ✓ Correct type
StockField.PRICE.gt(100);
StockField.NAME.eq('Apple Inc.');
```

## Performance Tips

1. **Most Selective First** - Apply the most restrictive filters first
2. **Use Ranges** - `between()` is more efficient than multiple comparisons
3. **Limit isin()** - Keep array sizes reasonable (< 50 items)
4. **Avoid Regex** - Text matching can be slow on large datasets

## Next Steps

- [Complex Queries](complex-queries.md) - Advanced filtering techniques
- [Field Reference](../fields/stock-fields.md) - All available fields
- [Examples](../examples/value-investing.md) - Real-world screening examples
