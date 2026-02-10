# TradingView Screener API - TypeScript

> Query stocks, crypto, forex, bonds, and futures from TradingView

TypeScript port of the [tvscreener](https://github.com/deepentropy/tvscreener/) Python library. Full-featured screener API with fluent methods, type safety, and MCP server support.

📚 **[Complete Documentation](https://jmargieh.github.io/tradingview-screener/)** | 🚀 **[Quick Start](https://jmargieh.github.io/tradingview-screener/quickstart.html)** | 📖 **[API Reference](https://jmargieh.github.io/tradingview-screener/api/base-screener.html)**

## Features

- **6 Asset Types**: Stocks, Crypto, Forex, Bonds, Futures, Coins
- **Type Safe**: Full TypeScript support with strict typing
- **Fluent API**: Chainable methods with TypeScript autocomplete
- **Streaming**: Real-time data updates with async generators
- **MCP Server**: Model Context Protocol integration for Claude
- **Formatting**: Built-in beautification and number formatting

## Installation

```bash
npm install tradingview-screener
```

## Quick Start

```typescript
import { StockScreener, StockField } from 'tradingview-screener';

const screener = new StockScreener();

screener
  .where(StockField.MARKET_CAPITALIZATION.between(1e9, 100e9))
  .where(StockField.PRICE.gt(10))
  .where(StockField.VOLUME.gte(1_000_000))
  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.MARKET_CAPITALIZATION,
    StockField.VOLUME
  )
  .sortBy(StockField.MARKET_CAPITALIZATION, false)
  .setRange(0, 50);

const results = await screener.get();
console.table(results.data);
```

## Usage

### Basic Queries

```typescript
import { StockScreener, StockField } from 'tradingview-screener';

const screener = new StockScreener();

// Simple filter
screener
  .where(StockField.PRICE.gt(100))
  .where(StockField.VOLUME.gte(1_000_000));

// Between range
screener.where(StockField.MARKET_CAPITALIZATION.between(1e9, 50e9));

// In list
screener.where(StockField.SECTOR.isin(['Technology', 'Healthcare']));

// Get results
const results = await screener.get();
```

### Field Selection

```typescript
// Select specific fields
screener.select(
  StockField.NAME,
  StockField.PRICE,
  StockField.VOLUME
);

// Select all available fields (3000+)
screener.selectAll();
```

### Sorting and Pagination

```typescript
// Sort by field (ascending/descending)
screener.sortBy(StockField.MARKET_CAPITALIZATION, false);

// Set result range (pagination)
screener.setRange(0, 50); // First 50 results
screener.setRange(50, 100); // Next 50 results
```

### Crypto Screening

```typescript
import { CryptoScreener, CryptoField } from 'tradingview-screener';

const crypto = new CryptoScreener();

crypto
  .where(CryptoField.MARKET_CAP.gt(1e9))
  .where(CryptoField.CHANGE_PERCENT.gt(5))
  .select(
    CryptoField.NAME,
    CryptoField.PRICE,
    CryptoField.CHANGE_PERCENT,
    CryptoField.VOLUME_24H_IN_USD
  )
  .sortBy(CryptoField.VOLUME_24H_IN_USD, false);

const results = await crypto.get();
```

### Streaming Data

```typescript
// Stream updates every 5 seconds
for await (const data of screener.stream({ interval: 5000 })) {
  if (data) {
    console.log(`Updated: ${data.totalCount} results`);
    console.table(data.data.slice(0, 10));
  }
}

// Stream with max iterations
for await (const data of screener.stream({
  interval: 5000,
  maxIterations: 10
})) {
  // Will stop after 10 iterations
}
```

### Time Intervals

```typescript
// Use field with specific time interval
const priceDaily = StockField.PRICE.withInterval('1D');
const priceWeekly = StockField.PRICE.withInterval('1W');

screener.where(priceDaily.gt(100));
```

### Historical Data

```typescript
// Access historical field values
const volumeYesterday = StockField.VOLUME.withHistory(1);
const volumeTwoDaysAgo = StockField.VOLUME.withHistory(2);

screener.where(volumeYesterday.gt(1_000_000));
```

## All Screener Types

```typescript
import {
  StockScreener,
  CryptoScreener,
  ForexScreener,
  BondScreener,
  FuturesScreener,
  CoinScreener,
} from 'tradingview-screener';

// Stock market
const stocks = new StockScreener();

// Cryptocurrencies
const crypto = new CryptoScreener();

// Forex pairs
const forex = new ForexScreener();

// Bonds
const bonds = new BondScreener();

// Futures contracts
const futures = new FuturesScreener();

// Coins
const coins = new CoinScreener();
```

## Field Categories

### Stock Fields (21 fields implemented)

- **Price & Volume**: `PRICE`, `CHANGE`, `CHANGE_PERCENT`, `VOLUME`
- **Information**: `NAME`, `DESCRIPTION`
- **Valuation**: `MARKET_CAPITALIZATION`, `PRICE_TO_EARNINGS_RATIO_TTM`, `PRICE_EARNINGS_GROWTH_TTM`, `PRICE_SALES_CURRENT`, `PRICE_TO_BOOK_MRQ`, `ENTERPRISE_VALUE_EBITDA_TTM`
- **Fundamentals**: `REVENUE_TTM`, `REVENUE_TTM_YOY_GROWTH`, `NET_INCOME_TTM`, `EARNINGS_PER_SHARE_DILUTED_TTM`
- **Dividends**: `DIVIDEND_YIELD_FWD`, `DIVIDENDS_YIELD_FY`, `DPS_COMMON_STOCK_PRIM_ISSUE_TTM`
- **Technical**: `RSI`, `ATR`

### Crypto Fields

- **Price**: `PRICE`, `CHANGE_PERCENT`, `VOLUME_24H_IN_USD`
- **Market**: `MARKET_CAP`, `CIRCULATING_SUPPLY`, `TOTAL_SUPPLY`
- **Technical**: All standard technical indicators

## Comparison Operators

All fields support these comparison methods:

```typescript
field.gt(value)          // Greater than
field.gte(value)         // Greater than or equal
field.lt(value)          // Less than
field.lte(value)         // Less than or equal
field.eq(value)          // Equal
field.ne(value)          // Not equal
field.between(min, max)  // Between (inclusive)
field.notBetween(min, max) // Not between
field.isin(values)       // In list
field.notIn(values)      // Not in list
field.match(pattern)     // Regex match
field.notMatch(pattern)  // Regex not match
```

## Formatting Utilities

```typescript
import {
  millify,
  formatCurrency,
  formatPercent,
  colorizeNumber,
} from 'tradingview-screener';

// Format large numbers
millify(1_500_000); // "1.50M"
millify(2_300_000_000); // "2.30B"

// Format currency
formatCurrency(1234.56); // "$1,234.56"

// Format percentage
formatPercent(12.34); // "12.34%"

// Colorize for terminal (green for positive, red for negative)
colorizeNumber(12.34, '+12.34'); // Green colored
colorizeNumber(-5.67, '-5.67'); // Red colored
```

## MCP Server

Use as a Model Context Protocol server with Claude:

```bash
# Start MCP server
npm run mcp:server
```

Configure in Claude Desktop (`claude_desktop_config.json`):

```json
{
  "mcpServers": {
    "tradingview-screener": {
      "command": "npx",
      "args": ["tradingview-screener-mcp"]
    }
  }
}
```

## Examples

See the `/examples` directory:

- `quickstart.ts` - Basic usage
- `value-investing.ts` - Value stock screening
- `technical-analysis.ts` - Technical indicator filtering
- `mcp-usage.ts` - MCP server integration

## API Reference

### Screener Methods

- `where(condition)` - Add filter condition
- `select(...fields)` - Select specific fields
- `selectAll()` - Select all available fields
- `sortBy(field, ascending)` - Set sort order
- `setRange(from, to)` - Set result pagination
- `setIndex(...symbols)` - Filter by index constituents
- `get()` - Execute query and return results
- `stream(options)` - Stream live updates

### Field Methods

- `withInterval(interval)` - Create field with time interval
- `withHistory(index)` - Create field with historical data
- All comparison operators (see above)

## Development

```bash
# Install dependencies
npm install

# Build
npm run build

# Run tests
npm test

# Type check
npm run type-check

# Generate field definitions
npm run codegen:generate
```

## Release Process

To create a new release:

```bash
# Patch release (1.1.0 -> 1.1.1)
./scripts/release.sh patch

# Minor release (1.1.0 -> 1.2.0)
./scripts/release.sh minor

# Major release (1.1.0 -> 2.0.0)
./scripts/release.sh major
```

The script will:
1. Update package.json version
2. Create a version bump commit
3. Tag the release
4. Push to GitHub
5. Trigger automated release workflow

See [scripts/README.md](scripts/README.md) for details.

## Documentation

📚 **[View Complete Documentation](docs/README.md)**

### Quick Links
- [Installation Guide](docs/installation.md)
- [Quick Start Tutorial](docs/quickstart.md)
- [Stock Screener Guide](docs/screeners/stock.md)
- [Filter Operations](docs/filtering/operations.md)
- [API Reference](docs/api/base-screener.md)
- [Examples & Strategies](docs/examples/)

## Requirements

- Node.js 18+
- TypeScript 5+

## License
MIT
