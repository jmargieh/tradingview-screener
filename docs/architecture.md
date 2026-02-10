# Architecture

Project structure and design principles.

## Overview

The TradingView Screener API is a TypeScript library for querying financial market data with a fluent, type-safe interface.

## Project Structure

```
tradingview-screener/
├── src/
│   ├── index.ts                    # Main exports
│   ├── screeners/
│   │   ├── BaseScreener.ts         # Abstract base class
│   │   ├── StockScreener.ts        # Stock screener
│   │   ├── CryptoScreener.ts       # Crypto screener
│   │   ├── ForexScreener.ts        # Forex screener
│   │   ├── BondScreener.ts         # Bond screener
│   │   ├── FuturesScreener.ts      # Futures screener
│   │   └── CoinScreener.ts         # Alt coin screener
│   ├── fields/
│   │   ├── BaseField.ts            # Field base class
│   │   ├── FieldWithInterval.ts    # Time interval wrapper
│   │   ├── FieldWithHistory.ts     # Historical data wrapper
│   │   ├── StockField.ts           # Stock field definitions
│   │   ├── CryptoField.ts          # Crypto field definitions
│   │   ├── ForexField.ts           # Forex field definitions
│   │   ├── BondField.ts
│   │   ├── FuturesField.ts
│   │   ├── CoinField.ts
│   │   └── presets.ts              # Curated field collections
│   ├── filters/
│   │   ├── Filter.ts               # Internal filter representation
│   │   ├── FieldCondition.ts       # Field comparison wrapper
│   │   └── ExtraFilter.ts          # Additional filter types
│   ├── enums/
│   │   ├── FilterOperator.ts       # Filter operations
│   │   ├── Market.ts               # Market regions
│   │   ├── Country.ts              # Country codes
│   │   ├── Exchange.ts             # Stock exchanges
│   │   ├── Sector.ts               # Industry sectors
│   │   ├── Industry.ts             # Detailed industries
│   │   ├── IndexSymbol.ts          # Market indices
│   │   ├── SymbolType.ts           # Asset types
│   │   └── Rating.ts               # Analyst ratings
│   ├── utils/
│   │   ├── http.ts                 # HTTP client
│   │   ├── formatters.ts           # Value formatting
│   │   ├── columns.ts              # Column building
│   │   └── beautify.ts             # Terminal styling
│   ├── exceptions/
│   │   └── MalformedRequestException.ts
│   ├── mcp/
│   │   ├── server.ts               # MCP server
│   │   └── tools.ts                # MCP tool implementations
│   ├── ta/
│   │   └── indicators.ts           # Technical analysis
│   ├── codegen/
│   │   ├── generate.ts             # Code generator
│   │   ├── scraper.ts              # Web scraper
│   │   ├── templates/              # Code templates
│   │   └── data/                   # JSON source files
│   └── types/
│       └── index.ts                # Shared types
├── tests/
│   ├── unit/                       # Unit tests
│   └── integration/                # Integration tests
├── examples/                       # Example scripts
├── docs/                          # Documentation
├── dist/                          # Built output
├── package.json
├── tsconfig.json
├── tsup.config.ts
└── vitest.config.ts
```

## Core Components

### Screeners

Abstract base class with concrete implementations for each asset type.

```typescript
// BaseScreener.ts
abstract class BaseScreener<T = any> {
  protected filters: Filter[] = [];
  protected sort?: SortConfig;
  protected range: [number, number] = [0, 150];
  protected specificFields?: BaseField[];

  abstract get fieldType(): typeof BaseField;
  abstract get url(): string;

  where(condition: FieldCondition): this;
  select(...fields: BaseField[]): this;
  sortBy(field: BaseField, ascending: boolean): this;
  setRange(from: number, to: number): this;

  async get(debug?: boolean): Promise<ScreenerResult<T>>;
  async *stream(options?: StreamOptions): AsyncGenerator<ScreenerResult<T> | null>;

  protected abstract _buildPayload(): QueryPayload;
}

// StockScreener.ts
class StockScreener extends BaseScreener {
  get fieldType() { return StockField; }
  get url() { return 'https://scanner.tradingview.com/america/scan'; }

  protected _buildPayload(): QueryPayload {
    // Stock-specific payload
  }
}
```

**Design Principles:**
- Template Method pattern for shared logic
- Fluent interface for method chaining
- Type-safe field validation
- Async generator for streaming

### Fields

Composable field system with modifiers.

```typescript
// BaseField.ts
class BaseField {
  constructor(
    public readonly name: string,
    public readonly metadata: FieldMetadata
  ) {}

  // Comparison operators
  gt(value: number): FieldCondition;
  gte(value: number): FieldCondition;
  lt(value: number): FieldCondition;
  // ... more operators

  // Modifiers
  withInterval(interval: string): FieldWithInterval;
  withHistory(bars: number): FieldWithHistory;

  // Static utilities
  static search(query: string): BaseField[];
  static byFormat(format: FieldFormat): BaseField[];
}

// FieldWithInterval.ts (Decorator pattern)
class FieldWithInterval extends BaseField {
  constructor(
    public readonly baseField: BaseField,
    public readonly interval: string
  ) {
    super(baseField.name, baseField.metadata);
  }

  // Inherits all comparison operators
}
```

**Design Principles:**
- Decorator pattern for field modifiers
- Immutable field objects
- Fluent comparison API
- Static utility methods

### Filters

Type-safe filter building.

```typescript
// Filter.ts
class Filter {
  constructor(
    public readonly left: string,
    public readonly operation: FilterOperator,
    public readonly right: any
  ) {}

  toDict(): FilterDict {
    return {
      left: this.left,
      operation: this.operation,
      right: this.right,
    };
  }
}

// FieldCondition.ts (Builder pattern)
class FieldCondition {
  constructor(
    public readonly field: BaseField,
    public readonly operation: FilterOperator,
    public readonly value: any
  ) {
    this.validateCondition();
  }

  private validateCondition(): void {
    // Prevent field-to-field comparisons
    if (this.value instanceof BaseField) {
      throw new Error('Field-to-field comparisons not supported');
    }
  }

  toFilter(): Filter {
    return new Filter(
      this.field.metadata.fieldName,
      this.operation,
      this.value
    );
  }
}
```

**Design Principles:**
- Builder pattern for complex objects
- Validation at construction time
- Conversion to internal representation
- Type safety through TypeScript

## Data Flow

### Query Execution Flow

```
User Code
    │
    ▼
Screener.where(condition)
    │
    ▼
FieldCondition.toFilter()
    │
    ▼
Filter.toDict()
    │
    ▼
BaseScreener._buildPayload()
    │
    ▼
HTTP Request
    │
    ▼
TradingView API
    │
    ▼
Response
    │
    ▼
ScreenerResult
    │
    ▼
User Code
```

### Streaming Flow

```
User Code: for await (data of stream())
    │
    ▼
BaseScreener.stream()
    │
    ├─▶ setInterval(interval)
    │       │
    │       ▼
    │   BaseScreener.get()
    │       │
    │       ▼
    │   yield ScreenerResult
    │       │
    │       └─▶ Back to user
    │
    └─▶ Repeat until maxIterations
```

## Design Patterns

### 1. Template Method

BaseScreener defines the algorithm structure:

```typescript
abstract class BaseScreener {
  async get(): Promise<ScreenerResult> {
    // Template method
    const payload = this._buildPayload();  // Hook
    const response = await this._makeRequest(payload);
    return this._parseResponse(response);
  }

  protected abstract _buildPayload(): QueryPayload;  // Hook
}
```

### 2. Fluent Interface

Method chaining for readable queries:

```typescript
screener
  .where(StockField.PRICE.gt(100))      // Returns this
  .where(StockField.VOLUME.gte(1000))   // Returns this
  .select(StockField.NAME)              // Returns this
  .sortBy(StockField.PRICE, true);      // Returns this
```

### 3. Decorator Pattern

Field modifiers extend behavior:

```typescript
const baseField = StockField.PRICE;
const weeklyPrice = baseField.withInterval('1W');  // Decorated
const historicalPrice = baseField.withHistory(30); // Decorated
```

### 4. Builder Pattern

FieldCondition builds complex filters:

```typescript
StockField.PRICE
  .gt(100)                    // Build step 1
  .and(StockField.VOLUME      // Build step 2
  .gte(1000));                // Build step 3
```

### 5. Strategy Pattern

Different screener implementations:

```typescript
interface ScreenerStrategy {
  buildPayload(): QueryPayload;
}

class StockStrategy implements ScreenerStrategy { /* ... */ }
class CryptoStrategy implements ScreenerStrategy { /* ... */ }
```

### 6. Factory Pattern

Field creation:

```typescript
class FieldFactory {
  static create(name: string, metadata: FieldMetadata): BaseField {
    if (metadata.interval) {
      return new IntervalField(name, metadata);
    }
    return new BaseField(name, metadata);
  }
}
```

## Type System

### Generic Types

```typescript
class BaseScreener<T = any> {
  async get(): Promise<ScreenerResult<T>> { /* ... */ }
}

interface ScreenerResult<T = any> {
  data: T[];
  totalCount: number;
}

// Usage
const results: ScreenerResult<StockData> = await screener.get();
```

### Type Safety

```typescript
// Field comparisons are type-checked
StockField.PRICE.gt(100);      // ✓ Valid
StockField.PRICE.gt('high');   // ✗ TypeScript error

// Enum usage is type-safe
screener.where(StockField.PRICE.gte(50));                 // ✓
screener.where(StockField.PRICE.gte('high'));             // ✗ Error
```

## Error Handling

### Exception Hierarchy

```
Error
  └─ MalformedRequestException
      ├─ 400: Bad Request
      ├─ 429: Rate Limit
      ├─ 500: Server Error
      └─ 503: Service Unavailable
```

### Error Recovery

```typescript
try {
  return await screener.get();
} catch (error) {
  if (error instanceof MalformedRequestException) {
    if (error.code >= 500) {
      // Retry server errors
      return await retryWithBackoff(screener);
    }
    throw error;  // Don't retry client errors
  }
  throw error;
}
```

## Performance Considerations

### 1. Lazy Evaluation

Fields and filters aren't executed until `.get()`:

```typescript
const screener = new StockScreener();
screener.where(StockField.PRICE.gt(100));  // No API call
screener.where(StockField.VOLUME.gte(1000));  // No API call
await screener.get();  // API call happens here
```

### 2. Streaming

Efficient for monitoring:

```typescript
// Memory efficient - processes one result at a time
for await (const data of screener.stream()) {
  process(data);  // Process and discard
}
```

### 3. Caching

Field metadata is cached:

```typescript
// Computed once, cached
const fields = StockField.search('price');
// Subsequent calls use cache
const fields2 = StockField.search('price');
```

## Testing Strategy

### Unit Tests

- Test individual components in isolation
- Mock dependencies
- Fast execution

### Integration Tests

- Test component interactions
- Mock HTTP requests
- Validate API payloads

### Coverage Goals

- 80%+ statement coverage
- 75%+ branch coverage
- Critical paths: 100% coverage

## Build System

### TypeScript Compilation

```typescript
// tsconfig.json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "declaration": true,
    "strict": true,
    "esModuleInterop": true
  }
}
```

### Bundling

```typescript
// tsup.config.ts
export default defineConfig({
  entry: ['src/index.ts', 'src/mcp/server.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
});
```

### Package Distribution

```
dist/
├── index.js        # ESM entry
├── index.cjs       # CJS entry
├── index.d.ts      # Type definitions
├── mcp/
│   └── server.js   # MCP server executable
└── package.json    # Package manifest
```

## Dependencies

### Runtime Dependencies

- **axios**: HTTP client for API requests
- **@modelcontextprotocol/sdk**: MCP server functionality

### Development Dependencies

- **typescript**: TypeScript compiler
- **tsup**: Fast TypeScript bundler
- **vitest**: Test framework
- **playwright**: Web scraping for code generation

## Future Considerations

### Potential Enhancements

1. **Caching Layer**: Cache query results
2. **Rate Limiting**: Built-in rate limit handling
3. **WebSocket Support**: Real-time data streaming
4. **Query Builder UI**: Visual query construction
5. **Historical Data**: Enhanced historical queries
6. **Portfolio Tracking**: Track investment portfolios
7. **Backtesting**: Strategy backtesting framework

### Scalability

- Horizontal: Multiple screener instances
- Vertical: Optimize query performance
- Caching: Redis/Memcached integration
- Load Balancing: Distribute requests

## Next Steps

- [Contributing Guide](contributing.md) - How to contribute
- [Testing Guide](testing.md) - Running tests
