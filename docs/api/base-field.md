# BaseField API Reference

Complete API reference for the BaseField class and field system.

## BaseField Class

The base class for all screener fields.

### Constructor

```typescript
class BaseField {
  constructor(name: string, metadata: FieldMetadata)
}
```

#### Parameters

- `name` (string): Field identifier (e.g., "PRICE", "VOLUME")
- `metadata` (FieldMetadata): Field metadata object

### Properties

```typescript
class BaseField {
  readonly name: string;              // Field name
  readonly metadata: FieldMetadata;   // Field metadata
}
```

### FieldMetadata Interface

```typescript
interface FieldMetadata {
  label: string;        // Human-readable label
  fieldName: string;    // Internal API field name
  format: FieldFormat;  // Value format type
  interval: boolean;    // Supports time intervals
  historical: boolean;  // Supports historical data
}
```

## Comparison Operators

### Greater Than

```typescript
gt(value: number): FieldCondition
```

Creates a "greater than" condition.

**Example:**
```typescript
StockField.PRICE.gt(100)  // Price > 100
```

### Greater Than or Equal

```typescript
gte(value: number): FieldCondition
```

Creates a "greater than or equal" condition.

**Example:**
```typescript
StockField.VOLUME.gte(1_000_000)  // Volume >= 1,000,000
```

### Less Than

```typescript
lt(value: number): FieldCondition
```

Creates a "less than" condition.

**Example:**
```typescript
StockField.RSI.lt(30)  // RSI < 30 (oversold)
```

### Less Than or Equal

```typescript
lte(value: number): FieldCondition
```

Creates a "less than or equal" condition.

**Example:**
```typescript
StockField.PRICE_TO_EARNINGS_RATIO_TTM.lte(15)
```

### Equal

```typescript
eq(value: any): FieldCondition
```

Creates an "equal to" condition.

**Example:**
```typescript
StockField.NAME.eq('Apple Inc.')
StockField.PRICE.eq(100)
```

### Not Equal

```typescript
ne(value: any): FieldCondition
```

Creates a "not equal to" condition.

**Example:**
```typescript
StockField.NAME.ne('Apple Inc.')
StockField.DESCRIPTION.notMatch('.*bank.*')
```

## Range Operators

### Between

```typescript
between(min: number, max: number): FieldCondition
```

Creates an "in range" condition (inclusive).

**Example:**
```typescript
StockField.MARKET_CAPITALIZATION.between(1e9, 10e9)  // 1B to 10B
StockField.RSI.between(30, 70)  // RSI sweet spot
```

### Not Between

```typescript
notBetween(min: number, max: number): FieldCondition
```

Creates a "not in range" condition.

**Example:**
```typescript
StockField.RSI.notBetween(30, 70)  // Overbought or oversold
```

## List Operators

### In List

```typescript
isin(values: any[]): FieldCondition
```

Creates an "in list" condition.

**Example:**
```typescript
StockField.NAME.isin(['Apple Inc.', 'Microsoft Corporation', 'Alphabet Inc.'])
StockField.DESCRIPTION.match('.*technology.*')
```

### Not In List

```typescript
notIn(values: any[]): FieldCondition
```

Creates a "not in list" condition.

**Example:**
```typescript
StockField.NAME.notIn(['Penny Stock Inc.', 'OTC Corp'])
StockField.PRICE.notIn([0, 1])
```

## Text Operators

### Match Pattern

```typescript
match(pattern: string): FieldCondition
```

Creates a regex match condition.

**Example:**
```typescript
StockField.NAME.match('.*bank.*')
StockField.DESCRIPTION.match('.*Software.*')
```

### Not Match Pattern

```typescript
notMatch(pattern: string): FieldCondition
```

Creates a regex non-match condition.

**Example:**
```typescript
StockField.NAME.notMatch('.*acquisition.*')
```

## Array Operators

### Has Any

```typescript
has(values: any[]): FieldCondition
```

For array fields, checks if any value is present.

**Example:**
```typescript
// Array field operations not available with current field set
```

### Has None Of

```typescript
hasNoneOf(values: any[]): FieldCondition
```

For array fields, checks that none of the values are present.

**Example:**
```typescript
// Array field operations not available with current field set
```

## Cross-Field Operators

### Above

```typescript
above(otherField: BaseField): FieldCondition
```

Compare this field to another field (greater than).

**Example:**
```typescript
// Cross-field comparisons require technical indicator fields
// which are not available in the current field set
StockField.PRICE.gt(100)  // Use standard comparison instead
```

### Below

```typescript
below(otherField: BaseField): FieldCondition
```

Compare this field to another field (less than).

**Example:**
```typescript
// Cross-field comparisons require technical indicator fields
// which are not available in the current field set
StockField.PRICE.lt(1000)  // Use standard comparison instead
```

### Near

```typescript
near(otherField: BaseField, tolerance: number): FieldCondition
```

Check if field is within tolerance of another field.

**Example:**
```typescript
// Cross-field comparisons require technical indicator fields
// which are not available in the current field set
StockField.PRICE.between(99, 101)  // Use range comparison instead
```

### Crosses

```typescript
crosses(otherField: BaseField): FieldCondition
```

Detects when this field crosses another field (either direction).

**Example:**
```typescript
// Cross-field comparisons require technical indicator fields
// which are not available in the current field set
```

### Crosses Above

```typescript
crossesAbove(otherField: BaseField): FieldCondition
```

Detects when this field crosses above another field.

**Example:**
```typescript
// Cross-field comparisons require technical indicator fields
// which are not available in the current field set
```

### Crosses Below

```typescript
crossesBelow(otherField: BaseField): FieldCondition
```

Detects when this field crosses below another field.

**Example:**
```typescript
// Cross-field comparisons require technical indicator fields
// which are not available in the current field set
```

## Time Interval Modifiers

### With Interval

```typescript
withInterval(interval: string): FieldWithInterval
```

Apply a time interval to the field.

**Parameters:**
- `interval` (string): Time interval ('1D', '1W', '1M', '3M', '6M', '1Y')

**Returns:** FieldWithInterval with all comparison operators

**Example:**
```typescript
StockField.PRICE.withInterval('1W')  // Weekly price
StockField.RSI.withInterval('1M')    // Monthly RSI
```

### With History

```typescript
withHistory(bars: number): FieldWithHistory
```

Get historical values for the field.

**Parameters:**
- `bars` (number): Number of historical bars to retrieve

**Returns:** FieldWithHistory with all comparison operators

**Example:**
```typescript
StockField.PRICE.withHistory(30)     // Last 30 bars
StockField.VOLUME.withHistory(10)    // Last 10 bars
```

## Static Methods

### Search Fields

```typescript
static search(query: string): BaseField[]
```

Search for fields by name or label.

**Example:**
```typescript
const fields = StockField.search('dividend');
// Returns: DIVIDEND_YIELD_FWD, DIVIDENDS_YIELD_FY, DPS_COMMON_STOCK_PRIM_ISSUE_TTM

const priceFields = StockField.search('price');
// Returns: PRICE, PRICE_TO_EARNINGS_RATIO_TTM, PRICE_SALES_CURRENT, etc.
```

### By Format

```typescript
static byFormat(format: FieldFormat): BaseField[]
```

Get all fields with a specific format.

**Example:**
```typescript
const currencyFields = StockField.byFormat('currency');
const percentFields = StockField.byFormat('percent');
```

### Technical Indicators

```typescript
static technicals(): BaseField[]
```

Get all technical indicator fields.

**Example:**
```typescript
const indicators = StockField.technicals();
// Returns: RSI, ATR, etc.
```

### Recommendations

```typescript
static recommendations(): BaseField[]
```

Get all recommendation fields.

**Example:**
```typescript
// Recommendation fields are not available in the current field set
const recs = StockField.recommendations();
```

## FieldWithInterval Class

Extended field with time interval.

```typescript
class FieldWithInterval extends BaseField {
  readonly baseField: BaseField;
  readonly interval: string;

  // Inherits all comparison operators from BaseField
}
```

**Example:**
```typescript
const weeklyRSI = StockField.RSI.withInterval('1W');

screener.where(weeklyRSI.between(30, 70));
```

## FieldWithHistory Class

Extended field with historical data.

```typescript
class FieldWithHistory extends BaseField {
  readonly baseField: BaseField;
  readonly bars: number;

  // Inherits all comparison operators from BaseField
}
```

**Example:**
```typescript
const last10Prices = StockField.PRICE.withHistory(10);

screener.where(last10Prices.gt(100));
```

## Field Formats

```typescript
type FieldFormat =
  | 'currency'              // $1,234.56
  | 'percent'               // 12.34%
  | 'float'                 // 123.46
  | 'round'                 // 123
  | 'number_group'          // 1,234,567
  | 'text'                  // Raw text
  | 'date'                  // Date string
  | 'bool'                  // true/false
  | 'rating'                // Strong Buy, Buy, Hold, Sell, Strong Sell
  | 'recommendation'        // Similar to rating
  | 'computed_recommendation'; // Technical recommendation
```

## Available Fields

### Stock Fields

```typescript
// Price & Volume
StockField.PRICE
StockField.VOLUME
StockField.CHANGE
StockField.CHANGE_PERCENT

// Market Data
StockField.MARKET_CAPITALIZATION
StockField.NAME
StockField.DESCRIPTION

// Valuation
StockField.PRICE_TO_EARNINGS_RATIO_TTM
StockField.PRICE_TO_BOOK_MRQ
StockField.PRICE_SALES_CURRENT
StockField.ENTERPRISE_VALUE_EBITDA_TTM
StockField.PRICE_EARNINGS_GROWTH_TTM

// Dividends
StockField.DIVIDEND_YIELD_FWD
StockField.DIVIDENDS_YIELD_FY
StockField.DPS_COMMON_STOCK_PRIM_ISSUE_TTM

// Financial Performance
StockField.REVENUE_TTM
StockField.REVENUE_TTM_YOY_GROWTH
StockField.NET_INCOME_TTM
StockField.EARNINGS_PER_SHARE_DILUTED_TTM

// Technical Indicators
StockField.RSI
StockField.ATR

// Total: 21 available fields
```

### Crypto Fields

```typescript
CryptoField.PRICE
CryptoField.CHANGE_PERCENT
CryptoField.MARKET_CAPITALIZATION
CryptoField.VOLUME
CryptoField.RSI

// Note: Limited crypto fields available
```

## Best Practices

### 1. Use Type-Safe Comparisons

```typescript
// Good: Type-safe
StockField.PRICE.gt(100)

// Bad: Not type-safe
StockField.PRICE.gt('expensive')  // TypeScript error
```

### 2. Store Reusable Conditions

```typescript
// Good: Reusable
const largeCap = StockField.MARKET_CAPITALIZATION.gt(10e9);
screener1.where(largeCap);
screener2.where(largeCap);

// Less efficient: Recreate each time
screener1.where(StockField.MARKET_CAPITALIZATION.gt(10e9));
screener2.where(StockField.MARKET_CAPITALIZATION.gt(10e9));
```

### 3. Chain Modifiers Correctly

```typescript
// Good: Apply interval first
const weeklyRSI = StockField.RSI.withInterval('1W');
screener.where(weeklyRSI.lt(30));

// Works: Inline
screener.where(StockField.RSI.withInterval('1W').lt(30));
```

### 4. Search Before Using

```typescript
// Good: Search for available fields
const dividendFields = StockField.search('dividend');
console.log(dividendFields.map(f => f.name));

// Then use the correct field
screener.where(StockField.DIVIDEND_YIELD_FWD.gte(3));
```

## Examples

### Basic Filtering

```typescript
screener
  .where(StockField.PRICE.gt(10))
  .where(StockField.PRICE.lt(500))
  .where(StockField.VOLUME.gte(100_000));
```

### Range Filtering

```typescript
screener
  .where(StockField.MARKET_CAPITALIZATION.between(1e9, 10e9))
  .where(StockField.RSI.between(30, 70));
```

### List Filtering

```typescript
screener
  .where(StockField.NAME.match('.*Inc.*'))
  .where(StockField.DESCRIPTION.notMatch('.*penny.*'));
```

### Cross-Field Comparison

```typescript
// Cross-field comparisons require technical indicator fields
// which are not available in the current field set
// Use standard numeric comparisons instead:
screener
  .where(StockField.PRICE.gt(100))
  .where(StockField.RSI.lt(70));
```

### Time Intervals

```typescript
screener
  .where(StockField.CHANGE_PERCENT.withInterval('1W').gt(10))
  .where(StockField.RSI.withInterval('1M').between(40, 60));
```

### Field Discovery

```typescript
// Search for fields
const fields = StockField.search('revenue');
fields.forEach(f => {
  console.log(`${f.name}: ${f.metadata.label}`);
});

// Get all percent fields
const percentFields = StockField.byFormat('percent');

// Get technical indicators
const technicals = StockField.technicals();
```

## Next Steps

- [Filter API](filter.md) - Filter system reference
- [Enums](enums.md) - Enumeration types
- [BaseScreener](base-screener.md) - Screener class
