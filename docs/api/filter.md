# Filter API Reference

Complete API reference for the filter system.

## Filter Class

Internal representation of filter conditions.

### Constructor

```typescript
class Filter {
  constructor(
    left: string,
    operation: FilterOperator,
    right: any
  )
}
```

#### Parameters

- `left` (string): Field name
- `operation` (FilterOperator): Filter operation
- `right` (any): Comparison value(s)

### Properties

```typescript
class Filter {
  readonly left: string;               // Field name
  readonly operation: FilterOperator;  // Operation type
  readonly right: any;                 // Value(s)
}
```

### Methods

#### toDict()

Convert filter to API payload format.

```typescript
toDict(): FilterDict
```

**Returns:** FilterDict object

**Example:**
```typescript
const filter = new Filter('close', FilterOperator.GREATER, 100);
const dict = filter.toDict();
// { left: 'close', operation: 'greater', right: 100 }
```

## FieldCondition Class

Wrapper for field comparison conditions.

### Constructor

```typescript
class FieldCondition {
  constructor(
    field: BaseField,
    operation: FilterOperator,
    value: any
  )
}
```

### Properties

```typescript
class FieldCondition {
  readonly field: BaseField;           // Field being compared
  readonly operation: FilterOperator;  // Comparison operation
  readonly value: any;                 // Comparison value(s)
}
```

### Methods

#### toFilter()

Convert condition to Filter object.

```typescript
toFilter(): Filter
```

**Returns:** Filter object

**Example:**
```typescript
const condition = StockField.PRICE.gt(100);
const filter = condition.toFilter();
```

### Validation

FieldCondition validates that field-to-field comparisons use appropriate operators:

```typescript
// ✓ Valid: Cross-field comparison with special operator
StockField.PRICE.above('Moving Average (50)')

// ✗ Invalid: Direct field-to-field comparison
try {
  StockField.PRICE.gt(StockField.PRICE_TO_EARNINGS_RATIO_TTM)  // Error!
} catch (error) {
  // "Field-to-field comparisons are not supported..."
}
```

## FilterOperator Enum

Available filter operations.

```typescript
enum FilterOperator {
  GREATER = 'greater',
  GREATER_OR_EQUAL = 'egreater',
  LESS = 'less',
  LESS_OR_EQUAL = 'eless',
  EQUAL = 'equal',
  NOT_EQUAL = 'nequal',
  IN_RANGE = 'in_range',
  NOT_IN_RANGE = 'not_in_range',
  IN = 'in',
  NOT_IN = 'not_in',
  MATCH = 'match',
  NOT_MATCH = 'nmatch',
  HAS = 'has',
  HAS_NONE_OF = 'has_none_of',
  ABOVE = 'above',
  BELOW = 'below',
  CROSSES = 'crosses',
  CROSSES_ABOVE = 'crosses_above',
  CROSSES_BELOW = 'crosses_below',
}
```

### Operator Usage

#### Numeric Comparisons

```typescript
FilterOperator.GREATER          // >
FilterOperator.GREATER_OR_EQUAL // >=
FilterOperator.LESS             // <
FilterOperator.LESS_OR_EQUAL    // <=
FilterOperator.EQUAL            // ==
FilterOperator.NOT_EQUAL        // !=
```

**Example:**
```typescript
new Filter('close', FilterOperator.GREATER, 100)
new Filter('volume', FilterOperator.GREATER_OR_EQUAL, 1_000_000)
```

#### Range Comparisons

```typescript
FilterOperator.IN_RANGE         // value BETWEEN min AND max
FilterOperator.NOT_IN_RANGE     // value NOT BETWEEN min AND max
```

**Example:**
```typescript
new Filter('market_cap_basic', FilterOperator.IN_RANGE, [1e9, 10e9])
new Filter('rsi', FilterOperator.NOT_IN_RANGE, [30, 70])
```

#### List Comparisons

```typescript
FilterOperator.IN               // value IN (list)
FilterOperator.NOT_IN           // value NOT IN (list)
```

**Example:**
```typescript
new Filter('sector', FilterOperator.IN, ['Technology', 'Healthcare'])
new Filter('country', FilterOperator.NOT_IN, ['CN', 'RU'])
```

#### Text Comparisons

```typescript
FilterOperator.MATCH            // value MATCHES pattern
FilterOperator.NOT_MATCH        // value NOT MATCHES pattern
```

**Example:**
```typescript
new Filter('name', FilterOperator.MATCH, '.*bank.*')
new Filter('industry', FilterOperator.NOT_MATCH, '.*acquisition.*')
```

#### Array Comparisons

```typescript
FilterOperator.HAS              // array HAS ANY OF values
FilterOperator.HAS_NONE_OF      // array HAS NONE OF values
```

**Example:**
```typescript
new Filter('tags', FilterOperator.HAS, ['dividend', 'growth'])
new Filter('tags', FilterOperator.HAS_NONE_OF, ['penny', 'otc'])
```

#### Cross-Field Comparisons

```typescript
FilterOperator.ABOVE            // field1 > field2
FilterOperator.BELOW            // field1 < field2
FilterOperator.CROSSES          // field1 crosses field2
FilterOperator.CROSSES_ABOVE    // field1 crosses above field2
FilterOperator.CROSSES_BELOW    // field1 crosses below field2
```

**Example:**
```typescript
new Filter('close', FilterOperator.ABOVE, 'Moving Average (50)')
new Filter('macd.macd', FilterOperator.CROSSES_ABOVE, 'macd.signal')
```

## FilterDict Interface

API payload format for filters.

```typescript
interface FilterDict {
  left: string;          // Field name
  operation: string;     // Operation (FilterOperator value)
  right: any;           // Value(s)
}
```

**Example:**
```typescript
const filterDict: FilterDict = {
  left: 'close',
  operation: 'greater',
  right: 100
};
```

## Creating Filters

### Using Field Methods (Recommended)

```typescript
// Automatically creates FieldCondition -> Filter
screener.where(StockField.PRICE.gt(100));
screener.where(StockField.VOLUME.gte(1_000_000));
screener.where(StockField.RSI.between(30, 70));
```

### Manual Filter Creation

```typescript
import { Filter, FilterOperator } from 'tradingview-screener';

const filter1 = new Filter('close', FilterOperator.GREATER, 100);
const filter2 = new Filter('volume', FilterOperator.GREATER_OR_EQUAL, 1_000_000);
const filter3 = new Filter('market_cap_basic', FilterOperator.IN_RANGE, [1e9, 10e9]);
```

### Manual FieldCondition Creation

```typescript
import { FieldCondition, FilterOperator } from 'tradingview-screener';

const condition = new FieldCondition(
  StockField.PRICE,
  FilterOperator.GREATER,
  100
);

screener.where(condition);
```

## Filter Combinations

### AND Logic

All filters are combined with AND:

```typescript
screener
  .where(StockField.PRICE.gt(10))              // AND
  .where(StockField.PRICE.lt(500))             // AND
  .where(StockField.VOLUME.gte(100_000));      // AND
```

**SQL Equivalent:**
```sql
WHERE close > 10
  AND close < 500
  AND volume >= 100000
```

### OR Logic Simulation

Use `isin()` for OR on same field:

```typescript
// Description matches multiple patterns
screener.where(StockField.DESCRIPTION.match('.*(technology|healthcare).*'));
```

For OR across different fields, run separate queries and merge:

```typescript
const highPrice = await new StockScreener()
  .where(StockField.PRICE.gt(500))
  .get();

const highVolume = await new StockScreener()
  .where(StockField.VOLUME.gt(10_000_000))
  .get();

const combined = [...highPrice.data, ...highVolume.data];
```

## Filter Validation

### Type Checking

Filters validate value types:

```typescript
// ✓ Valid: Number to number
StockField.PRICE.gt(100)

// ✗ Invalid: String to number field
StockField.PRICE.gt('expensive')  // TypeScript error
```

### Field-to-Field Rules

Direct field comparisons are blocked:

```typescript
// ✗ Invalid
try {
  StockField.PRICE.gt(StockField.VOLUME)
} catch (error) {
  // "Field-to-field comparisons are not supported"
}

// ✓ Valid: Use special operators
StockField.PRICE.above('Moving Average (50)')
```

### Value Validation

Range operations require arrays:

```typescript
// ✓ Valid
StockField.MARKET_CAPITALIZATION.between(1e9, 10e9)
// Creates: FilterOperator.IN_RANGE, [1e9, 10e9]

// ✗ Invalid
StockField.MARKET_CAPITALIZATION.between(1e9)  // Missing max
```

## Debugging Filters

### Print Filter Details

```typescript
const condition = StockField.PRICE.gt(100);

console.log('Field:', condition.field.name);
console.log('Operation:', condition.operation);
console.log('Value:', condition.value);

const filter = condition.toFilter();
console.log('Filter Dict:', filter.toDict());
```

### Inspect Screener Filters

```typescript
const screener = new StockScreener();

screener
  .where(StockField.PRICE.gt(100))
  .where(StockField.VOLUME.gte(1_000_000));

// Access internal filters
const filters = screener['filters'];
console.log('Total filters:', filters.length);

filters.forEach((filter, i) => {
  console.log(`Filter ${i + 1}:`, filter.toDict());
});
```

## Advanced Filter Patterns

### Complex Conditions

```typescript
// Multiple conditions on same field
screener
  .where(StockField.PRICE.gt(10))
  .where(StockField.PRICE.lt(500));

// Equivalent to: 10 < price < 500
// Better: Use between
screener.where(StockField.PRICE.between(10, 500));
```

### Exclusion Filters

```typescript
// Exclude specific values
screener
  .where(StockField.DESCRIPTION.notMatch('.*financial.*'))
  .where(StockField.NAME.notMatch('.*(CN|RU).*'))
  .where(StockField.PRICE.gt(5));  // Not penny stocks
```

### Pattern Matching

```typescript
// Regex patterns
screener
  .where(StockField.NAME.match('.*bank.*'))
  .where(StockField.DESCRIPTION.notMatch('.*acquisition.*'));
```

### Technical Filters

```typescript
// Technical indicator filters
screener
  .where(StockField.RSI.between(30, 70))
  .where(StockField.PRICE.above('Moving Average (50)'))
  .where(StockField.ATR.gt(2));
```

## Filter Performance

### Efficient Filtering

```typescript
// Good: Most restrictive first
screener
  .where(StockField.MARKET_CAPITALIZATION.gt(100e9))  // Very restrictive
  .where(StockField.DESCRIPTION.match('.*technology.*'))  // Moderately restrictive
  .where(StockField.PRICE.gt(10));                    // Less restrictive

// Less efficient: Broad filters first
screener
  .where(StockField.PRICE.gt(10))                     // Matches many
  .where(StockField.DESCRIPTION.match('.*technology.*'))
  .where(StockField.MARKET_CAPITALIZATION.gt(100e9));
```

### Avoid Redundant Filters

```typescript
// Good: No redundancy
screener
  .where(StockField.MARKET_CAPITALIZATION.gt(1e9))
  .where(StockField.VOLUME.gte(100_000));

// Wasteful: Redundant filters
screener
  .where(StockField.MARKET_CAPITALIZATION.gt(1e9))
  .where(StockField.MARKET_CAPITALIZATION.gt(500e6))  // Redundant
  .where(StockField.VOLUME.gte(100_000))
  .where(StockField.VOLUME.gt(50_000));                // Redundant
```

## Best Practices

1. **Use Field Methods**: Prefer `field.gt(100)` over manual Filter creation
2. **Validate Values**: Ensure correct types and ranges
3. **Order Filters**: Apply most restrictive filters first
4. **Avoid Redundancy**: Don't duplicate filter conditions
5. **Use between()**: For range queries instead of two comparisons
6. **Check Results**: Verify filter logic produces expected results

## Next Steps

- [BaseField API](base-field.md) - Field class reference
- [Enums](enums.md) - FilterOperator and other enums
- [BaseScreener](base-screener.md) - Screener class
