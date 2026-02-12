# TradingView Screener API

> Query TradingView's financial data with a type-safe, fluent TypeScript API. Screen stocks, crypto, forex, bonds, and futures using 13,000+ data fields.

<p align="center">
  <a href="https://www.npmjs.com/package/tradingview-screener"><img src="https://img.shields.io/npm/v/tradingview-screener" alt="npm version"></a>
  <a href="https://www.npmjs.com/package/tradingview-screener"><img src="https://img.shields.io/npm/dm/tradingview-screener" alt="npm downloads"></a>
  <a href="https://github.com/jmargieh/tradingview-screener/blob/main/LICENSE"><img src="https://img.shields.io/npm/l/tradingview-screener" alt="license"></a>
  <a href="https://github.com/jmargieh/tradingview-screener"><img src="https://img.shields.io/github/stars/jmargieh/tradingview-screener?style=social" alt="GitHub stars"></a>
</p>

<p align="center">
  <img alt="TradingView Screener API" height="300" width="400" src="docs/hero-image.png" width="300"/>
</p>

---

**[📚 Documentation](https://jmargieh.github.io/tradingview-screener/)** • **[🚀 Quick Start](#quick-start)** • **[💡 Examples](#use-cases)** • **[🤖 Claude Integration](#mcp-server-claude-desktop-integration)**

## Why Use This Library?

Traditional market data APIs require manual HTTP requests, pagination handling, and parsing. This library provides a **fluent, chainable interface** that lets you build complex market queries in seconds:

```typescript
// Find undervalued tech stocks with strong momentum
const stocks = await new StockScreener()
  .where(StockField.SECTOR.eq('Technology'))
  .where(StockField.PRICE_TO_EARNINGS_RATIO_TTM.lt(20))
  .where(StockField.RSI.between(30, 70))
  .where(StockField.MARKET_CAPITALIZATION.gt(1e9))
  .select(StockField.NAME, StockField.PRICE, StockField.PRICE_TO_EARNINGS_RATIO_TTM)
  .sortBy(StockField.VOLUME, false)
  .get();
```

<p align="center">
  <img alt="TradingView Screener API" width="1280" src="docs/mcp-in-action.gif" width="300"/>
</p>

**Key Features:**
- **13,000+ Data Fields** — 3,522 stock, 3,026 coin, 2,965 forex, 393 futures fields with complete parity to Python tvscreener
- **6 Asset Types** — Stocks, crypto, forex, bonds, futures, coins
- **Type Safety** — Full TypeScript support with IntelliSense autocomplete
- **Fluent API** — Chainable methods that read like natural language
- **Real-Time Streaming** — Live market data updates via async generators
- **Claude Integration** — Natural language queries via Model Context Protocol (MCP)
- **Technical Indicators** — RSI, MACD, Bollinger Bands, Ichimoku, and 100+ more
- **Zero Configuration** — No API keys or authentication required

---

## Table of Contents

- [Installation](#installation)
- [Quick Start](#quick-start)
- [Use Cases](#use-cases)
  - [Value Investing](#1-value-investing-find-undervalued-dividend-stocks)
  - [Technical Analysis](#2-technical-analysis-momentum-breakouts)
  - [Crypto Screening](#3-crypto-market-discovery)
  - [Growth Stocks](#4-growth-stock-discovery)
  - [Custom Queries](#5-complex-multi-filter-queries)
  - [Real-Time Streaming](#6-real-time-data-streaming)
- [MCP Server (Claude Integration)](#mcp-server-claude-desktop-integration)
- [Available Asset Types](#available-screener-types)
- [API Overview](#api-overview)
- [Documentation](#documentation)
- [Contributing](#development)
- [License](#license)

---

## Installation

```bash
# npm
npm install tradingview-screener

# yarn
yarn add tradingview-screener

# pnpm
pnpm add tradingview-screener
```

**Requirements:** Node.js 18+ • TypeScript 5+ (optional but recommended)

---

## Quick Start

Get up and running in 30 seconds:

```typescript
import { StockScreener, StockField } from 'tradingview-screener';

// Create a screener instance
const screener = new StockScreener();

// Find mid-cap stocks with strong volume
screener
    .where(StockField.MARKET_CAPITALIZATION.between(1e9, 100e9))  // $1B - $100B market cap
    .where(StockField.PRICE.gt(10))                                // Price > $10
    .where(StockField.VOLUME.gte(10_000_000))                       // Volume >= 10M shares
    .select(
        StockField.NAME,
        StockField.PRICE,
        StockField.MARKET_CAPITALIZATION,
        StockField.VOLUME
    )
    .sortBy(StockField.MARKET_CAPITALIZATION, false)               // Sort by market cap (descending)
    .setRange(0, 10);                                              // Get top 10 results

// Execute the query
const results = await screener.get();

// Display results
console.table(results.data);

```

**Output:**
```
┌─────────┬───────────────┬────────┬────────┬───────────────────┬──────────┐
│ (index) │ symbol        │ name   │ close  │ market_cap_basic  │ volume   │
├─────────┼───────────────┼────────┼────────┼───────────────────┼──────────┤
│ 0       │ 'NYSE:SPOT'   │ 'SPOT' │ 476.02 │ 98009666941.52788 │ 10859484 │
│ 1       │ 'NYSE:CVS'    │ 'CVS'  │ 75.62  │ 95994481028.1679  │ 13120315 │
│ 2       │ 'NYSE:PBR'    │ 'PBR'  │ 15.33  │ 94777489519.2955  │ 15943064 │
│ 3       │ 'NYSE:NKE'    │ 'NKE'  │ 63.04  │ 93323382260.16087 │ 13003435 │
│ 4       │ 'NYSE:FCX'    │ 'FCX'  │ 63.26  │ 90836974679.75821 │ 11647363 │
│ 5       │ 'NYSE:NU'     │ 'NU'   │ 17.57  │ 85136763028.70029 │ 49285274 │
│ 6       │ 'NYSE:WMB'    │ 'WMB'  │ 68.84  │ 84068705263.16699 │ 15583731 │
│ 7       │ 'NASDAQ:SNDK' │ 'SNDK' │ 541.64 │ 79928326188.71019 │ 15903990 │
│ 8       │ 'NYSE:B'      │ 'B'    │ 46.95  │ 79225019262.32336 │ 16768169 │
│ 9       │ 'NASDAQ:MDLZ' │ 'MDLZ' │ 60.65  │ 77743933905.28818 │ 12195996 │
└─────────┴───────────────┴────────┴────────┴───────────────────┴──────────┘
```

---

---

## Use Cases

### 1. Value Investing: Find Undervalued Dividend Stocks

Screen for companies with strong fundamentals, attractive valuations, and consistent dividend payments:

```typescript
import { StockScreener, StockField } from 'tradingview-screener';

const valueScreener = new StockScreener();

// Find value stocks with dividends
const results = await valueScreener
  .where(StockField.PRICE_TO_EARNINGS_RATIO_TTM.between(5, 20))    // P/E ratio 5-20
  .where(StockField.PRICE_TO_BOOK_MRQ.lt(3))                       // P/B < 3
  .where(StockField.DIVIDEND_YIELD_FORWARD.gte(3))                 // Dividend yield >= 3%
  .where(StockField.RETURN_ON_EQUITY_FY.gt(15))                    // ROE > 15%
  .where(StockField.DEBT_TO_EQUITY_FY.lt(1))                       // Low debt
  .where(StockField.MARKET_CAPITALIZATION.gt(1e9))                 // Market cap > $1B
  .select(
    StockField.NAME,
    StockField.SECTOR,
    StockField.PRICE,
    StockField.PRICE_TO_EARNINGS_RATIO_TTM,
    StockField.DIVIDEND_YIELD_FORWARD,
    StockField.RETURN_ON_EQUITY_FY,
    StockField.DEBT_TO_EQUITY_FY
  )
  .sortBy(StockField.DIVIDEND_YIELD_FORWARD, false)
  .setRange(0, 25)
  .get();

console.table(results.data);
```

**Use Case:** Find stable, profitable companies trading below their intrinsic value with reliable dividend income.

---

### 2. Technical Analysis: Momentum Breakouts

Identify stocks with strong technical momentum using RSI, MACD, and volume indicators:

```typescript
import { StockScreener, StockField } from 'tradingview-screener';

const technicalScreener = new StockScreener();

// Find stocks with bullish technical signals
const results = await technicalScreener
  .where(StockField.RSI.between(50, 70))                           // RSI in bullish zone (not overbought)
  .where(StockField.MACD_MACD.gt(StockField.MACD_SIGNAL))         // MACD crossed above signal line
  .where(StockField.PRICE.gt(StockField.SMA_200))                 // Price above 200-day SMA (uptrend)
  .where(StockField.RELATIVE_VOLUME.gt(1.5))                      // Volume 50% above average
  .where(StockField.PRICE.between(10, 500))                       // Reasonable price range
  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.CHANGE_PERCENT,
    StockField.RSI,
    StockField.MACD_MACD,
    StockField.RELATIVE_VOLUME,
    StockField.VOLUME
  )
  .sortBy(StockField.RELATIVE_VOLUME, false)
  .setRange(0, 20)
  .get();

console.table(results.data);
```

**Use Case:** Catch early momentum before major price moves using technical indicators and volume confirmation.

---

### 3. Crypto Market Discovery

Screen cryptocurrencies by market cap, volume, and performance metrics:

```typescript
import { CryptoScreener, CryptoField } from 'tradingview-screener';

const cryptoScreener = new CryptoScreener();

// Find high-volume cryptocurrencies with recent gains
const results = await cryptoScreener
  .where(CryptoField.MARKET_CAP.gt(1e9))                           // Market cap > $1B
  .where(CryptoField.VOLUME_24H_IN_USD.gt(100e6))                 // 24h volume > $100M
  .where(CryptoField.CHANGE_PERCENT.between(5, 50))               // Daily gain 5-50%
  .where(CryptoField.CIRCULATING_TO_MAX_SUPPLY_RATIO.lt(0.9))     // Less than 90% circulating
  .select(
    CryptoField.NAME,
    CryptoField.PRICE,
    CryptoField.CHANGE_PERCENT,
    CryptoField.VOLUME_24H_IN_USD,
    CryptoField.MARKET_CAP,
    CryptoField.CIRCULATING_SUPPLY,
    CryptoField.TOTAL_SUPPLY
  )
  .sortBy(CryptoField.VOLUME_24H_IN_USD, false)
  .setRange(0, 30)
  .get();

console.table(results.data);
```

**Use Case:** Identify emerging crypto opportunities with strong volume and supply dynamics.

---

### 4. Growth Stock Discovery

Find high-growth companies with strong revenue and earnings momentum:

```typescript
import { StockScreener, StockField } from 'tradingview-screener';

const growthScreener = new StockScreener();

// Find growth stocks with strong fundamentals
const results = await growthScreener
  .where(StockField.REVENUE_TTM_YOY_GROWTH.gt(20))                 // Revenue growth > 20%
  .where(StockField.EARNINGS_PER_SHARE_DILUTED_FQ.gt(0))          // Profitable
  .where(StockField.GROSS_MARGIN_FY.gt(40))                        // Gross margin > 40%
  .where(StockField.RETURN_ON_EQUITY_FY.gt(15))                    // ROE > 15%
  .where(StockField.MARKET_CAPITALIZATION.between(1e9, 50e9))      // Mid-cap stocks
  .where(StockField.SECTOR.isin(['Technology', 'Healthcare']))     // Growth sectors
  .select(
    StockField.NAME,
    StockField.SECTOR,
    StockField.PRICE,
    StockField.REVENUE_TTM_YOY_GROWTH,
    StockField.EARNINGS_PER_SHARE_DILUTED_FQ,
    StockField.GROSS_MARGIN_FY,
    StockField.RETURN_ON_EQUITY_FY
  )
  .sortBy(StockField.REVENUE_TTM_YOY_GROWTH, false)
  .setRange(0, 25)
  .get();

console.table(results.data);
```

**Use Case:** Find the next generation of market leaders with explosive revenue growth and strong unit economics.

---

### 5. Complex Multi-Filter Queries

Combine multiple criteria and use advanced filtering:

```typescript
import { StockScreener, StockField } from 'tradingview-screener';

const customScreener = new StockScreener();

// Advanced screening with multiple dimensions
const results = await customScreener
  // Fundamental filters
  .where(StockField.MARKET_CAPITALIZATION.between(10e9, 200e9))
  .where(StockField.PRICE_TO_EARNINGS_RATIO_TTM.between(10, 25))
  .where(StockField.RETURN_ON_EQUITY_FY.gt(18))

  // Technical filters
  .where(StockField.RSI.between(40, 70))
  .where(StockField.PRICE.gt(StockField.EMA_50))
  .where(StockField.EMA_50.gt(StockField.EMA_200))                 // Golden cross

  // Volume and liquidity
  .where(StockField.VOLUME.gte(500_000))
  .where(StockField.AVERAGE_VOLUME_10D.gte(1_000_000))

  // Sector and region filters
  .where(StockField.SECTOR.notIn(['Real Estate', 'Utilities']))
  .where(StockField.COUNTRY.isin(['US', 'CA']))

  // Select comprehensive data
  .select(
    StockField.NAME,
    StockField.SECTOR,
    StockField.COUNTRY,
    StockField.PRICE,
    StockField.MARKET_CAPITALIZATION,
    StockField.PRICE_TO_EARNINGS_RATIO_TTM,
    StockField.RSI,
    StockField.VOLUME
  )
  .sortBy(StockField.RETURN_ON_EQUITY_FY, false)
  .setRange(0, 50)
  .get();

console.table(results.data);
```

**Use Case:** Build sophisticated screening strategies combining fundamental, technical, and market filters.

---

### 6. Real-Time Data Streaming

Stream live market data updates using async generators:

```typescript
import { StockScreener, StockField } from 'tradingview-screener';

const streamScreener = new StockScreener();

// Configure screener
streamScreener
  .where(StockField.MARKET_CAPITALIZATION.gt(10e9))
  .where(StockField.VOLUME.gte(1_000_000))
  .select(StockField.NAME, StockField.PRICE, StockField.CHANGE_PERCENT, StockField.VOLUME)
  .sortBy(StockField.CHANGE_PERCENT, false)
  .setRange(0, 10);

// Stream updates every 5 seconds
console.log('Starting live market data stream...\n');

for await (const data of streamScreener.stream({ interval: 5000 })) {
  if (data) {
    console.clear();
    console.log(`Last updated: ${new Date().toLocaleTimeString()}`);
    console.log(`Total results: ${data.totalCount}\n`);
    console.table(data.data);
  }
}

// Stream with maximum iterations (auto-stop after 20 updates)
for await (const data of streamScreener.stream({
  interval: 3000,
  maxIterations: 20
})) {
  // Process real-time updates
  if (data) {
    console.log(`Update ${data.totalCount}: ${data.data.length} results`);
  }
}
```

**Use Case:** Monitor market conditions in real-time, track portfolio positions, or build live dashboards.

---

---

## Available Screener Types

All screener types use the same fluent API pattern:

```typescript
import {
  StockScreener,
  CryptoScreener,
  ForexScreener,
  BondScreener,
  FuturesScreener,
  CoinScreener,
} from 'tradingview-screener';

// Stock market (3,522 fields)
const stocks = new StockScreener();

// Cryptocurrencies (3,108 fields)
const crypto = new CryptoScreener();

// Forex pairs (2,965 fields)
const forex = new ForexScreener();

// Bonds
const bonds = new BondScreener();

// Futures contracts
const futures = new FuturesScreener();

// Coins
const coins = new CoinScreener();
```

Each screener provides access to thousands of data fields specific to its asset type, including price data, technical indicators, fundamentals, and more.

---


## MCP Server (Claude Desktop Integration)

This library includes a **Model Context Protocol (MCP) server** that lets you query financial markets using **natural language** in Claude Desktop. This is a unique feature that enables conversational market analysis.

### What is MCP?

MCP allows AI assistants like Claude to connect to external tools and data sources. With the TradingView MCP server, you can ask Claude questions about stocks, crypto, and forex in plain English, and it will query the data for you.

### Installation

1. **Install the package globally or locally:**
   ```bash
   npm install -g tradingview-screener
   # or
   npm install tradingview-screener
   ```
2. **Configure Claude Desktop** by editing your `claude_desktop_config.json`:
3. **macOS:** `~/Library/Application Support/Claude/claude_desktop_config.json`
4. **Windows:** `%APPDATA%\Claude\claude_desktop_config.json`

   ```json
   {
     "mcpServers": {
       "tradingview-screener": {
         "command": "node",
         "args": ["/tradingview-screener/dist/mcp/server.js"]
       }
     }
   }
   ```

5. **Restart Claude Desktop** to load the MCP server.

### Example Prompts

Once configured, you can ask Claude natural language questions:

```
"tech stocks with P/E ratio under 40 and market cap over $400B"

"Show me cryptocurrencies with 24h volume over $100M that gained more than 10% today"

"Find dividend stocks in healthcare sector with yield over 4%"

"Screen for growth stocks with revenue growth over 30%"
```

Claude will automatically:
- Construct the appropriate screener query
- Execute it against TradingView's API
- Format and explain the results

### Running the MCP Server Manually

You can also run the server directly for testing:

```bash
npm run mcp:server
# or
npx tradingview-screener-mcp
```

### Benefits of MCP Integration

- **Natural Language:** No need to remember API syntax
- **Conversational:** Ask follow-up questions and refine queries
- **Educational:** Claude explains what each query does
- **Fast:** Get market insights in seconds
- **Flexible:** Combine with Claude's analysis capabilities

---

---

## API Overview

### Fluent Chainable Interface

Build queries by chaining methods together. The API is designed to read like natural language:

```typescript
const results = await screener
  .where(condition)          // Add filter condition
  .select(...fields)         // Choose fields to return
  .sortBy(field, ascending)  // Sort results
  .setRange(from, to)        // Paginate results
  .get();                    // Execute query
```

### Comparison Operators

All fields support comprehensive filtering operators:

```typescript
// Numeric comparisons
field.gt(value)              // Greater than
field.gte(value)             // Greater than or equal
field.lt(value)              // Less than
field.lte(value)             // Less than or equal
field.eq(value)              // Equal
field.ne(value)              // Not equal
field.between(min, max)      // Between (inclusive)
field.notBetween(min, max)   // Not between

// List operations
field.isin(values)           // Value in list
field.notIn(values)          // Value not in list

// String operations
field.match(pattern)         // Regex match
field.notMatch(pattern)      // Regex not match
```

### Field Selection

```typescript
// Select specific fields
screener.select(
  StockField.NAME,
  StockField.PRICE,
  StockField.VOLUME
);

// Select all available fields (thousands of fields)
screener.selectAll();
```

### Sorting and Pagination

```typescript
// Sort by field (ascending=true, descending=false)
screener.sortBy(StockField.MARKET_CAPITALIZATION, false);

// Paginate results
screener.setRange(0, 50);     // First 50 results
screener.setRange(50, 100);   // Next 50 results
```

### Time Intervals

Access data across different timeframes:

```typescript
// Use field with specific time interval
const priceDaily = StockField.PRICE.withInterval('1D');
const priceWeekly = StockField.PRICE.withInterval('1W');
const price5min = StockField.PRICE.withInterval('5');

screener.where(priceDaily.gt(100));

// Available intervals: 1, 5, 15, 30, 60, 120, 240 (minutes), 1D, 1W, 1M
```

### Historical Data

Access previous values for time-series analysis:

```typescript
// Access historical field values
const volumeYesterday = StockField.VOLUME.withHistory(1);
const volumeTwoDaysAgo = StockField.VOLUME.withHistory(2);
const priceLastWeek = StockField.PRICE.withHistory(7);

screener.where(volumeYesterday.gt(volumeTwoDaysAgo));
```

### Index Filtering

Filter by market indices:

```typescript
// Filter by index constituents
screener.setIndex('SP:SPX');    // S&P 500
screener.setIndex('NASDAQ:NDX'); // NASDAQ 100
```

### Formatting Utilities

Built-in formatting for displaying market data:

```typescript
import {
  millify,
  formatCurrency,
  formatPercent,
  colorizeNumber,
} from 'tradingview-screener';

millify(1_500_000);                  // "1.50M"
millify(2_300_000_000);              // "2.30B"
formatCurrency(1234.56);             // "$1,234.56"
formatPercent(12.34);                // "12.34%"
colorizeNumber(12.34, '+12.34');     // Terminal green
colorizeNumber(-5.67, '-5.67');      // Terminal red
```

---

---

## Documentation

📚 **[Complete Documentation Site](https://jmargieh.github.io/tradingview-screener/)**

### Quick Links

- **[Installation Guide](https://jmargieh.github.io/tradingview-screener/installation.html)** — Setup and configuration
- **[Quick Start Tutorial](https://jmargieh.github.io/tradingview-screener/quickstart.html)** — Your first screener query
- **[API Reference](https://jmargieh.github.io/tradingview-screener/api/base-screener.html)** — Complete method documentation
- **[Stock Screener Guide](https://jmargieh.github.io/tradingview-screener/screeners/stock.html)** — Stock-specific fields and examples
- **[Crypto Screener Guide](https://jmargieh.github.io/tradingview-screener/screeners/crypto.html)** — Crypto-specific fields and examples
- **[Forex Screener Guide](https://jmargieh.github.io/tradingview-screener/screeners/forex.html)** — Forex-specific fields and examples
- **[Filter Operations](https://jmargieh.github.io/tradingview-screener/filtering/operations.html)** — Advanced filtering techniques
- **[Examples & Strategies](https://jmargieh.github.io/tradingview-screener/examples/)** — Real-world screening strategies

### Code Examples

Check out the `/examples` directory in this repository:

- **[`quickstart.ts`](examples/quickstart.ts)** — Basic usage and first queries
- **[`value-investing.ts`](examples/value-investing.ts)** — Finding undervalued dividend stocks
- **[`technical-analysis.ts`](examples/technical-analysis.ts)** — Using RSI, MACD, and other indicators
- **[`mcp-usage.ts`](examples/mcp-usage.ts)** — MCP server integration examples

---

## Development

Contributions are welcome! This project is built with TypeScript and uses modern tooling.

### Setup

```bash
# Clone the repository
git clone https://github.com/jmargieh/tradingview-screener.git
cd tradingview-screener

# Install dependencies
npm install

# Build the project
npm run build

# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Type check
npm run type-check
```

### Running Examples

```bash
npm run example:quickstart
npm run example:value-investing
npm run example:technical-analysis
```

### Release Process

This project uses automated semantic versioning:

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
5. Trigger the automated release workflow

See **[scripts/README.md](scripts/README.md)** for details.

### Contributing Guidelines

- Write tests for new features
- Follow existing code style (enforced by TypeScript)
- Update documentation for API changes
- Add examples for new capabilities
- Ensure all tests pass before submitting PR

---

## License

MIT License - see **[LICENSE](LICENSE)** file for details.

---

## About

TypeScript port of the **[tvscreener](https://github.com/deepentropy/tvscreener/)** Python library, created to bring TradingView's powerful screener capabilities to the Node.js ecosystem with complete field parity and type safety.

**Maintainer:** [@jmargieh](https://github.com/jmargieh)
**Repository:** [github.com/jmargieh/tradingview-screener](https://github.com/jmargieh/tradingview-screener)
**Issues:** [Report a bug or request a feature](https://github.com/jmargieh/tradingview-screener/issues)

---

<p align="center">
  <strong>Star this project on <a href="https://github.com/jmargieh/tradingview-screener">GitHub</a> if you find it useful!</strong>
</p>
