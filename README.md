# TradingView Screener API - TypeScript

<p align="center">
  <img alt="TradingView Screener API" height="300" src="docs/hero-image.png" width="300"/>
</p>

TypeScript port of the [tvscreener](https://github.com/deepentropy/tvscreener/) Python library with **full field parity** (3,522 stock fields + 3,108 crypto fields + 2,965 forex fields). Full-featured screener API with fluent methods, type safety, and MCP server support.

📚 **[Complete Documentation](https://jmargieh.github.io/tradingview-screener/)** | 🚀 **[Quick Start](https://jmargieh.github.io/tradingview-screener/quickstart.html)** | 📖 **[API Reference](https://jmargieh.github.io/tradingview-screener/api/base-screener.html)**

## Features

- **6 Asset Types**: Stocks, Crypto, Forex, Bonds, Futures, Coins
- **3,522 Stock + 3,108 Crypto + 2,965 Forex Fields**: Complete field implementation with full parity to Python tvscreener
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

// Select all available fields (3,522 fields)
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
    CryptoField.VOLUME_24H_IN_USD,
    CryptoField.CIRCULATING_SUPPLY,
    CryptoField.TOTAL_SUPPLY
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

### Stock Fields (3,522 fields implemented)

This library provides **complete field parity** with the Python tvscreener library, including all 3,522 fields across these major categories:

#### Core Information
- **Identification**: `NAME`, `DESCRIPTION`, `SECTOR`, `COUNTRY`, `ACTIVE_SYMBOL`
- **Price & Volume**: `PRICE`, `CHANGE`, `CHANGE_PERCENT`, `VOLUME`, `VOLUME_CHANGE`
- **Market Data**: `HIGH`, `LOW`, `PRICE_52_WEEK_HIGH_DATE`, `PRICE_52_WEEK_LOW_DATE`

#### Valuation Metrics
- **Market Cap**: `MARKET_CAPITALIZATION`, `MARKET_CAP_CALC`
- **Price Ratios**: `PRICE_TO_EARNINGS_RATIO_TTM`, `PRICE_EARNINGS_GROWTH_TTM`, `PRICE_SALES_CURRENT`, `PRICE_TO_BOOK_MRQ`, `PRICE_TO_BOOK_FY`
- **Enterprise Value**: `ENTERPRISE_VALUE_EBITDA_CURRENT`, `ENTERPRISE_VALUEEBITDA_TTM`

#### Fundamental Metrics
- **Revenue**: `REVENUE_TTM_YOY_GROWTH`, `REVENUE_FQ`, `REVENUE_PER_SHARE_FY`, `REVENUE_PER_SHARE_TTM`
- **Earnings**: `NET_INCOME_TTM`, `EARNINGS_PER_SHARE_DILUTED_FQ`, `EBITDA_FY`, `EBITDA_TTM`
- **Balance Sheet**: `TOTAL_ASSETS_FY`, `TOTAL_DEBT_FY`, `CASH_AND_EQUIVALENTS_FY`, `BOOK_VALUE_PER_SHARE_FY`
- **Cash Flow**: `CASH_F_OPERATING_ACTIVITIES_TTM`, `CASH_F_INVESTING_ACTIVITIES_TTM`, `CASH_F_FINANCING_ACTIVITIES_TTM`

#### Dividends
- **Yield**: `DIVIDEND_YIELD_FORWARD`, `DIVIDENDS_YIELD_FY`, `DIVIDENDS_YIELD_CURRENT`
- **Payments**: `DIVIDEND_AMOUNT_RECENT`, `DIVIDENDS_PER_SHARE_FY`, `DPS_COMMON_STOCK_PRIM_ISSUE_TTM`
- **Dates**: `DIVIDEND_EX_DATE_RECENT`, `DIVIDEND_PAYMENT_DATE_RECENT`

#### Financial Ratios
- **Profitability**: `RETURN_ON_EQUITY_FY`, `RETURN_ON_ASSETS_FY`, `GROSS_MARGIN_FY`, `OPERATING_MARGIN_FY`
- **Leverage**: `DEBT_TO_EQUITY_FY`, `DEBT_TO_ASSETS`, `CURRENT_RATIO_FQ`
- **Efficiency**: `ASSET_TURNOVER_FY`, `RECEIVABLES_TURNOVER_FY`

#### Technical Indicators
- **Momentum**: `RSI` (RSI, RSI2, RSI3, RSI4, RSI5, RSI7, RSI9, RSI10, RSI20, RSI21, RSI30 with intervals), `MOM`, `AO` (Awesome Oscillator)
- **Volatility**: `ATR`, `ATRP`, `BB_UPPER`, `BB_LOWER`, `BB_BASIS` (Bollinger Bands with various periods)
- **Trend**: `ADX`, `ADX_DI`, `ADX_PLUS_DI` (various periods: 9, 20, 50, 100), `SMA` (periods 3-300), `EMA` (periods 5-200)
- **Volume**: `AVERAGE_VOLUME`, `RELATIVE_VOLUME`, `VOLUME_WEIGHTED_AVERAGE_PRICE`
- **Oscillators**: `STOCH_K`, `STOCH_D`, `CCI20` (with intervals), `MACD_LEVEL`, `MACD_MACD`, `MACD_HIST`
- **Ichimoku**: `ICHIMOKU_BASE_LINE`, `ICHIMOKU_BLINE`, `ICHIMOKU_CLINE`, `ICHIMOKU_LEAD1`, `ICHIMOKU_LEAD2` (various parameter sets)

#### Time Intervals & Historical Data
Most technical and price fields support:
- **Time intervals**: `1`, `5`, `15`, `30`, `60`, `120`, `240` (minutes), `1D`, `1W`, `1M`
- **Historical data**: Access previous values with `.withHistory(index)`

### Crypto Fields (3,108 fields implemented)

This library provides **complete field parity** with the Python tvscreener library for cryptocurrencies, including all 3,108 fields across these major categories:

#### Core Price & Market Data
- **Price**: `PRICE`, `CHANGE`, `CHANGE_PERCENT`, `CHANGE_FROM_OPEN`, `CHANGE_FROM_OPEN_PERCENT`
- **Volume**: `VOLUME_24H_IN_USD`, `VOLUME_24H_CHANGE_PERCENT`, `AVERAGE_VOLUME_10D_CALC_USD`, `AVERAGE_VOLUME_30D_CALC_USD`, `AVERAGE_VOLUME_60D_CALC_USD`, `AVERAGE_VOLUME_90D_CALC_USD`
- **Market Cap**: `MARKET_CAP`, `MARKET_CAPITALIZATION`, `FULLY_DILUTED_MARKET_CAP`, `MARKET_CAP_TO_TVL`
- **Supply**: `CIRCULATING_SUPPLY`, `TOTAL_SUPPLY`, `CIRCULATING_TO_MAX_SUPPLY_RATIO`
- **Price Ranges**: `WEEK_HIGH_52`, `WEEK_LOW_52`, `ALL_TIME_HIGH`, `ALL_TIME_LOW`, `MONTH_HIGH_1`, `MONTH_LOW_1`, `MONTH_HIGH_3`, `MONTH_HIGH_6`

#### Blockchain Metrics
- **Addresses**: `ADDRESSES_ACTIVE`, `ADDRESSES_NEW`, `ADDRESSES_TOTAL`, `ADDRESSES_ZERO_BALANCE`, `ACTIVE_ADDRESSES_RATIO`
- **Transactions**: `AVERAGE_TRANSACTION_USD`
- **Holders**: `AT_THE_MONEY_ADDRESSES_PERCENTAGE`, `BREAK_EVEN_ADDRESSES_PERCENTAGE`, `IN_THE_MONEY_ADDRESSES_PERCENTAGE`
- **Balance**: `AVG_BALANCE`

#### DeFi & DEX Data
- **DEX Volume**: `DEX_TRADING_VOLUME_24H`, `DEX_TRADING_VOLUME_12H`, `DEX_TRADING_VOLUME_4H`, `DEX_TRADING_VOLUME_1H`, `DEX_TRADING_VOLUME_15M`
- **DEX Trades**: `DEX_BUY_VOLUME_24H`, `DEX_BUY_VOLUME_12H`, `DEX_SELL_VOLUME_24H`, `DEX_SELL_VOLUME_12H`, `DEX_TOTAL_SUPPLY`
- **Liquidity**: `TVL`, `MARKET_CAP_TO_TVL`

#### Technical Indicators
- **Momentum**: `RSI` (multiple periods with intervals), `MOMENTUM_10`, `AWESOME_OSCILLATOR`, `STOCH_RSI_K` (with period), `STOCH_RSI_D` (with period)
- **Volatility**: `ATR` (with interval), `ATRP`, `BB_UPPER` (with period), `BB_LOWER` (with period), `BB_BASIS` (with period), `AVERAGE_DAY_RANGE_14`
- **Trend**: `ADX` (with period), `ADX_PLUS_DI` (with period), `ADX_MINUS_DI` (with period), `SMA` (periods 5-300), `EMA` (periods 5-200)
- **Volume Indicators**: `RELATIVE_VOLUME`, `VOLUME_WEIGHTED_AVERAGE_PRICE`
- **Oscillators**: `STOCH_K` (with period), `STOCH_D` (with period), `CCI20` (with interval), `MACD_LEVEL`, `MACD_MACD`, `MACD_HIST`, `MACD_SIGNAL`
- **Ichimoku**: `ICHIMOKU_BASE_LINE` (with parameters), `ICHIMOKU_BLINE` (with parameters), `ICHIMOKU_CLINE` (with parameters), `ICHIMOKU_LEAD1` (with parameters), `ICHIMOKU_LEAD2` (with parameters)
- **Pattern Recognition**: `CANDLE_DOJI`, `CANDLE_HAMMER`, `CANDLE_SHOOTINGSTAR`, `CANDLE_ENGULFING_BULLISH`, `CANDLE_ENGULFING_BEARISH`

#### Performance Metrics
- **Historical Performance**: `MONTHLY_PERFORMANCE`, `MONTH_PERFORMANCE_3`, `MONTH_PERFORMANCE_6`, `YEARLY_PERFORMANCE`, `Y_PERFORMANCE_5`, `ALL_TIME_PERFORMANCE`, `YTD_PERFORMANCE`
- **Change Metrics**: Multiple time intervals (1m, 5m, 15m, 30m, 1h, 2h, 4h, 1D, 1W, 1M) for all price change fields

#### Time Intervals & Historical Data
Most technical and price fields support:
- **Time intervals**: `1`, `5`, `15`, `30`, `60`, `120`, `240` (minutes), `1D`, `1W`, `1M`
- **Historical data**: Access previous values with `.withHistory(index)`

### Forex Fields (2,965 fields implemented)

This library provides **complete field parity** with the Python tvscreener library for forex pairs, including all 2,965 fields across these major categories:

#### Core Price & Market Data (280 fields)
- **Price**: `PRICE`, `CHANGE`, `CHANGE_PERCENT`, `CHANGE_FROM_OPEN`, `CHANGE_FROM_OPEN_PERCENT`
- **OHLC**: `OPEN`, `HIGH`, `LOW`, `CLOSE`, `HIGH_LOW_PERCENT`
- **Volume**: `VOLUME`, `VOLUME_CHANGE`, `RELATIVE_VOLUME`, `AVERAGE_VOLUME_10D`, `AVERAGE_VOLUME_30D`, `AVERAGE_VOLUME_60D`, `AVERAGE_VOLUME_90D`
- **Price Ranges**: `WEEK_HIGH_52`, `WEEK_LOW_52`, `MONTH_HIGH_1`, `MONTH_LOW_1`, `MONTH_HIGH_3`, `MONTH_LOW_3`, `MONTH_HIGH_6`, `MONTH_LOW_6`
- **Spread**: `BID`, `ASK`, `SPREAD_PERCENT`

#### Moving Averages (824 fields)
- **Simple Moving Averages**: `SMA` (periods 3-300 with multiple intervals)
- **Exponential Moving Averages**: `EMA` (periods 5-200 with multiple intervals)
- **Hull Moving Average**: `HMA` (with period and interval)
- **Volume Weighted MA**: `VWMA` (with period and interval)
- **Weighted Moving Average**: `WMA` (with period and interval)

#### Oscillators (480 fields)
- **RSI**: `RSI` (periods 2-30 with intervals), `STOCH_RSI_K`, `STOCH_RSI_D`
- **MACD**: `MACD_LEVEL`, `MACD_MACD`, `MACD_SIGNAL`, `MACD_HIST`
- **Stochastic**: `STOCH_K`, `STOCH_D` (with period and interval)
- **CCI**: `CCI20`, `CCI50`, `CCI100` (with intervals)
- **Williams %R**: `W_R` (with interval)
- **Ultimate Oscillator**: `UO` (with interval)

#### Volatility Indicators (113 fields)
- **ATR**: `ATR`, `ATRP` (Average True Range with intervals)
- **Bollinger Bands**: `BB_UPPER`, `BB_LOWER`, `BB_BASIS` (periods 20-50 with intervals)
- **Keltner Channels**: `KLTCHNL_UPPER`, `KLTCHNL_LOWER`, `KLTCHNL_BASIS`
- **Donchian Channels**: `DONCHIAN_CHANNELS_UPPER`, `DONCHIAN_CHANNELS_LOWER`, `DONCHIAN_CHANNELS_BASIS`
- **Standard Deviation**: `STDEV` (with period and interval)

#### Momentum Indicators (290 fields)
- **ADX**: `ADX`, `ADX_PLUS_DI`, `ADX_MINUS_DI` (periods 9-100 with intervals)
- **Momentum**: `MOM`, `MOMENTUM_10` (with intervals)
- **Rate of Change**: `ROC` (with period and interval)
- **Awesome Oscillator**: `AO`, `AWESOME_OSCILLATOR`
- **Commodity Channel Index**: `CCI` (various periods)
- **Aroon**: `AROON_UP`, `AROON_DOWN` (with period and interval)

#### Candlestick Patterns (151 fields)
- **Reversal Patterns**: `CANDLE_DOJI`, `CANDLE_HAMMER`, `CANDLE_SHOOTINGSTAR`, `CANDLE_HANGING_MAN`, `CANDLE_INVERTED_HAMMER`
- **Engulfing Patterns**: `CANDLE_ENGULFING_BULLISH`, `CANDLE_ENGULFING_BEARISH`
- **Star Patterns**: `CANDLE_MORNINGSTAR`, `CANDLE_EVENINGSTAR`, `CANDLE_MORNINGDOJISTAR`, `CANDLE_EVENINGDOJISTAR`
- **Harami Patterns**: `CANDLE_HARAMI_BULLISH`, `CANDLE_HARAMI_BEARISH`
- **Other Patterns**: `CANDLE_ABANDONED_BABY_BULLISH`, `CANDLE_ABANDONED_BABY_BEARISH`, `CANDLE_TRISTAR_BULLISH`, `CANDLE_TRISTAR_BEARISH`

#### Pivot Points (310 fields)
- **Classic Pivots**: `PIVOT_M_CLASSIC_S1`, `PIVOT_M_CLASSIC_S2`, `PIVOT_M_CLASSIC_S3`, `PIVOT_M_CLASSIC_R1`, `PIVOT_M_CLASSIC_R2`, `PIVOT_M_CLASSIC_R3`
- **Fibonacci Pivots**: `PIVOT_M_FIBONACCI_S1`, `PIVOT_M_FIBONACCI_S2`, `PIVOT_M_FIBONACCI_S3`, `PIVOT_M_FIBONACCI_R1`, `PIVOT_M_FIBONACCI_R2`, `PIVOT_M_FIBONACCI_R3`
- **Woodie Pivots**: `PIVOT_M_WOODIE_S1`, `PIVOT_M_WOODIE_S2`, `PIVOT_M_WOODIE_S3`, `PIVOT_M_WOODIE_R1`, `PIVOT_M_WOODIE_R2`, `PIVOT_M_WOODIE_R3`
- **Camarilla Pivots**: `PIVOT_M_CAMARILLA_S1`, `PIVOT_M_CAMARILLA_S2`, `PIVOT_M_CAMARILLA_S3`, `PIVOT_M_CAMARILLA_S4`, `PIVOT_M_CAMARILLA_R1`, `PIVOT_M_CAMARILLA_R2`, `PIVOT_M_CAMARILLA_R3`, `PIVOT_M_CAMARILLA_R4`
- **DM Pivots**: `PIVOT_M_DEMARK_S1`, `PIVOT_M_DEMARK_R1`
- Multiple timeframes supported: Daily, Weekly, Monthly

#### Volume Indicators (146 fields)
- **Volume**: `VOLUME`, `VOLUME_CHANGE`, `VOLUME_CHANGE_PERCENT`
- **VWAP**: `VOLUME_WEIGHTED_AVERAGE_PRICE` (with intervals)
- **Money Flow**: `MONEY_FLOW_INDEX` (with period and interval)
- **Chaikin Money Flow**: `CHAIKIN_MONEY_FLOW` (with interval)
- **On-Balance Volume**: `OBV` (with interval)
- **Volume Oscillator**: `VOLUME_OSCILLATOR` (with intervals)

#### Ichimoku Cloud (371 fields)
- **Cloud Components**: `ICHIMOKU_BASE_LINE`, `ICHIMOKU_BLINE`, `ICHIMOKU_CLINE`, `ICHIMOKU_LEAD1`, `ICHIMOKU_LEAD2`
- Multiple parameter sets: (9,26,52), (20,60,120), (30,90,180)
- Multiple intervals supported: 1m, 5m, 15m, 30m, 1h, 2h, 4h, 1D, 1W, 1M

#### Time Intervals & Historical Data
Most technical and price fields support:
- **Time intervals**: `1`, `5`, `15`, `30`, `60`, `120`, `240` (minutes), `1D`, `1W`, `1M`
- **Historical data**: Access previous values with `.withHistory(index)`

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
