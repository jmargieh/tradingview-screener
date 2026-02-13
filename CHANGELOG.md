# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.3.2] - 2026-02-13
- Fix MCP server errors, by making sure mapping to the correct field names.

## [2.3.1] - 2026-02-12
- README.md fix

## [2.3.0] - 2026-02-11

### Added
- **Complete CoinField implementation**: 3,026 field constants providing full parity with Python tvscreener library
- All major coin field categories now available:
  - 24-hour metrics: Volume, price changes across multiple timeframes
  - Technical Indicators: 2,674 fields (ADX, RSI, MACD, Moving Averages, ATR, Momentum, etc.)
  - Moving Averages: Multiple periods (EMA, SMA, VWMA, HMA)
  - Candlestick Patterns: 270 fields (Doji, Hammer, Engulfing, Harami, etc.)
  - Oscillators: 841 fields (RSI, Stochastic, CCI, Williams %R, etc.)
  - Bollinger Bands, Ichimoku, Pivot Points
  - Multiple timeframes: |1, |5, |15, |30, |60, |120, |240, |1D, |1W, |1M
- **Complete FuturesField implementation**: 393 field constants providing full parity with Python tvscreener library
- All major futures field categories now available:
  - Price data (Open, High, Low, Close)
  - Technical indicators (ADX, RSI, MACD, Moving Averages)
  - Candlestick patterns (Doji, Hammer, Engulfing, etc.)
  - Pivot points (Camarilla, Classic, Demark, Fibonacci, Woodie)
  - Performance metrics and volume indicators
  - Multiple timeframes support

### Changed
- **MAJOR UPDATE**: CoinField.ts completely rewritten with all 3,026 fields
  - Previous implementation: 2 fields (NAME, PRICE)
  - New implementation: 3,026 fields sourced from Python tvscreener
  - Field breakdown: 2,379 float, 270 bool, 126 percent, 100 rating, 82 number_group, 55 date, 14 text
- **MAJOR UPDATE**: FuturesField.ts completely rewritten with all 393 fields
  - Previous implementation: 2 fields (NAME, PRICE)
  - New implementation: 393 fields sourced from Python tvscreener
  - Field breakdown: 279 float, 30 percent, 27 bool, 26 date, 15 text, 10 rating, 6 number_group
- **CoinScreener**: Changed default field from `PRICE` to `CLOSE` (matching Python implementation)
- **FuturesScreener**: Changed default field from `PRICE` to `CLOSE` (matching Python implementation)
- **MCP Server**: Migrated from deprecated `Server` to `McpServer` class
  - Updated import to use `@modelcontextprotocol/sdk/server/mcp.js`
  - Now uses `McpServer` with access to underlying `server` property for advanced request handling
  - Maintains backward compatibility with existing tool handlers
- README.md: Updated field counts to reflect coin (3,026) and futures (393) implementations

### Fixed
- CoinField and FuturesField now use correct field names matching Python tvscreener
- All coin and futures fields properly typed with correct formats
- Documentation accurately reflects implemented field counts

### Breaking Changes
- `CoinField.PRICE` removed - use `CoinField.CLOSE` instead
- `FuturesField.PRICE` removed - use `FuturesField.CLOSE` instead

### Technical Details
- **CoinField**: 3,026 fields, 24,235 lines, sourced from https://github.com/deepentropy/tvscreener/blob/main/tvscreener/field/coin.py
- **FuturesField**: 393 fields, 3,179 lines, sourced from https://github.com/deepentropy/tvscreener/blob/main/tvscreener/field/futures.py
- Total library fields: 13,000+ (3,522 stock + 3,026 coin + 2,965 forex + 3,108 crypto + 393 futures)
- All fields validated against official Python implementation - no invented fields

## [2.2.1] - 2026-02-10
### Updated
- **Documentation**: Improve readability README.md.

## [2.2.0] - 2026-02-10

### Added
- **Complete ForexField implementation**: 2,965 field constants providing full parity with Python tvscreener library
- All major forex field categories now available:
  - Price & Volume: 280 fields with OHLC data and spreads
  - Moving Averages: 824 fields (SMA, EMA, HMA, VWMA, WMA)
  - Oscillators: 480 fields (RSI, MACD, Stochastic, CCI, Williams %R)
  - Volatility: 113 fields (ATR, Bollinger Bands, Keltner Channels, Donchian)
  - Momentum: 290 fields (ADX, Momentum, ROC, Awesome Oscillator, Aroon)
  - Candlestick Patterns: 151 fields
  - Pivot Points: 310 fields (Classic, Fibonacci, Woodie, Camarilla, DeMark)
  - Volume Indicators: 146 fields (VWAP, Money Flow, OBV, Volume Oscillator)
  - Market Data: 20 fields (Recommendations, market info)
  - Other: 317 fields (Additional technical indicators)

### Changed
- **MAJOR UPDATE**: ForexField.ts completely rewritten with all 2,965 fields organized into 11 logical categories
- README.md: Updated forex section to reflect complete 2,965 field implementation
- Documentation comprehensively updated:
  - Created `docs/fields/forex-fields.md`: Complete field reference with all categories and usage examples
  - `docs/screeners/forex.md`: Updated with complete field coverage, multi-timeframe analysis, and 7 use cases
  - README: Added comprehensive Forex Fields section documenting all categories

### Breaking Changes
- None - this is a pure addition. All existing 3 ForexField constants remain unchanged and backward compatible

### Technical Details
- Total forex fields: 2,965 (from 3)
- Format types: 11 (float, bool, percent, rating, number_group, date, computed_recommendation, text, round, recommendation, missing)
- Interval support: 2,662 fields (89.8%)
- Historical data support: 829 fields (28.0%)
- File size: src/fields/ForexField.ts now 539 KB, 23,768 lines
- All fields sourced from: https://github.com/deepentropy/tvscreener/blob/main/tvscreener/field/forex.py

## [2.1.0] - 2026-02-10

### Added
- **Complete CryptoField implementation**: 3,108 field constants providing full parity with Python tvscreener library
- All major crypto field categories now available:
  - Price & Volume: 136 fields with timeframe support (24H metrics, volume changes)
  - Technical Indicators: 2,400+ fields including:
    - Moving Averages: 404 fields (SMA, EMA, VWMA)
    - RSI variations: 218 fields
    - Stochastic: 229 fields
    - ADX: 266 fields
    - Bollinger Bands: 60 fields
    - MACD: 30 fields
    - Ichimoku: 90 fields
    - Other indicators: 800+ fields
  - Candlestick Patterns: 270 fields
  - Pivot Points: 310 fields
  - Recommendations: 63 fields
  - Market Data: 76 fields (Highs/Lows)

### Changed
- **MAJOR UPDATE**: CryptoField.ts completely rewritten with all 3,108 fields organized into 20+ logical categories
- README.md: Updated crypto section to reflect complete 3,108 field implementation
- Documentation comprehensively updated:
  - `docs/fields/crypto-fields.md`: Complete field reference with categories, intervals, and usage examples
  - `docs/examples/crypto-trading.md`: Fixed 9 broken field references, rewritten with real fields
  - `docs/screeners/crypto.md`: Updated with complete field coverage and multi-timeframe analysis
  - `docs/quickstart.md`: Verified crypto examples, added field count note

### Fixed
- `docs/examples/crypto-trading.md` no longer uses unimplemented fields (9 invalid fields replaced)
- All crypto documentation examples now use only real, implemented fields

### Breaking Changes
- None - this is a pure addition. All existing 5 CryptoField constants remain unchanged and backward compatible

### Technical Details
- Total crypto fields: 3,108 (from 5)
- Format types: 11 (float, bool, number_group, percent, rating, date, round, computed_recommendation, text, missing, recommendation)
- Interval support: 2,673 fields (86.0%)
- Historical data support: 839 fields (27.0%)
- File size: src/fields/CryptoField.ts now 569 KB, 24,885 lines
- All fields sourced from: https://github.com/deepentropy/tvscreener/blob/main/tvscreener/field/crypto.py

## [2.0.0] - 2026-02-10

### Added
- **Complete field implementation**: 3,522 StockField constants providing full parity with Python tvscreener library
- All major field categories now available:
  - Price & Volume: 296 fields with 9 timeframe intervals (1m, 5m, 15m, 30m, 1h, 2h, 4h, 1D, 1W, 1M)
  - Technical Indicators: 1,803 fields including:
    - Moving Averages: 674 fields (SMA, EMA, VWMA)
    - RSI variations: 248 fields across all timeframes
    - MACD: 30 fields (MACD, Signal, Histogram)
    - Bollinger Bands: 49 fields (Upper, Lower, Basis)
    - Stochastic: 200 fields (K, D, RSI variations)
    - ADX: 247 fields (+DI, -DI variations)
    - Ichimoku: 89 fields (Base, Conversion, Lead lines)
  - Candlestick Patterns: 260 fields (27 patterns × ~10 timeframes)
  - Fundamentals: 480 fields (Earnings, Revenue, Cash Flow, Balance Sheet, Ratios, Dividends)
  - Performance Metrics: 193 fields (historical price changes)
  - Recommendations: 57 fields (analyst ratings, technical recommendations)
  - Pivot Points: 213 fields
  - Other indicators: 277 fields
- Added 'missing' format type to support all field types from Python library

### Changed
- **MAJOR UPDATE**: StockField.ts completely rewritten with all 3,522 fields organized into 22 logical categories
- README.md: Updated to reflect complete 3,522 field implementation
- Documentation comprehensively updated:
  - `docs/fields/stock-fields.md`: Complete field reference with categories, intervals, and usage examples
  - `docs/screeners/stock.md`: Updated with multi-timeframe analysis and candlestick patterns
  - `docs/examples/value-investing.md`: Enhanced with ROE, ROA, ROIC, margins, and cash flow metrics
  - `docs/examples/growth-stocks.md`: Added profitability and efficiency metrics
  - `docs/examples/dividend-investing.md`: Added payout ratios and dividend growth tracking
  - `docs/examples/technical-analysis.md`: Expanded with RSI, MACD, Bollinger Bands, Stochastic, ADX

### Breaking Changes
- None - this is a pure addition. All existing 21 fields remain unchanged and backward compatible

### Technical Details
- Total fields: 3,522 (from 21)
- Format types: 12 (added: missing, recommendation, rating, computed_recommendation)
- Interval support: 2,518 fields (71.5%)
- Historical data support: 9 fields (technical indicators only)
- File size: src/fields/StockField.ts now 675 KB, 28,244 lines
- All fields sourced from: https://github.com/deepentropy/tvscreener/blob/main/tvscreener/field/stock.py

## [1.1.0] - 10-02-2026

### Added
- Five new StockField constants for filtering:
  - `PRICE_EARNINGS_GROWTH_TTM` - PEG Ratio (TTM) for growth at reasonable price screening
  - `PRICE_SALES_CURRENT` - Price to Sales ratio for valuation analysis
  - `DIVIDENDS_YIELD_FY` - Fiscal year dividend yield for income investors
  - `DPS_COMMON_STOCK_PRIM_ISSUE_TTM` - Dividend per share (TTM) metric
  - `REVENUE_TTM_YOY_GROWTH` - Revenue year-over-year growth percentage

### Changed
- Updated documentation to accurately reflect implemented fields (21 total)
- Removed misleading "13,000+ fields" claims from README and package description
- Rewrote `docs/fields/stock-fields.md` with complete reference of all 21 implemented fields
- Rewrote `docs/examples/value-investing.md` to use only implemented fields
- Updated README field categories section to list exact available fields
- Updated package.json description to emphasize type-safety over field count

### Fixed
- Documentation examples no longer reference unimplemented fields
- All code examples in documentation are now guaranteed to work
- Field reference documentation is now 100% accurate and synchronized with implementation

## [1.0.0] - Initial Release

### Added
- TypeScript port of TradingView Screener API
- Support for 6 screener types: Stock, Crypto, Forex, Bond, Futures, Coin
- 16 initial StockField constants:
  - Basic: `NAME`, `DESCRIPTION`
  - Price & Volume: `PRICE`, `CHANGE`, `CHANGE_PERCENT`, `VOLUME`
  - Valuation: `MARKET_CAPITALIZATION`, `PRICE_TO_EARNINGS_RATIO_TTM`, `PRICE_TO_BOOK_MRQ`, `ENTERPRISE_VALUE_EBITDA_TTM`
  - Dividends: `DIVIDEND_YIELD_FWD`
  - Fundamentals: `EARNINGS_PER_SHARE_DILUTED_TTM`, `REVENUE_TTM`, `NET_INCOME_TTM`
  - Technical: `RSI`, `ATR`
- Fluent API with chainable methods
- TypeScript type safety with strict typing
- Comparison operators: `gt`, `gte`, `lt`, `lte`, `eq`, `ne`, `between`, `notBetween`, `isin`, `notIn`
- Field modifiers: `withInterval()`, `withHistory()`
- Streaming support with async generators
- MCP (Model Context Protocol) server integration for Claude
- Formatting utilities: `millify`, `formatCurrency`, `formatPercent`, `colorizeNumber`
- Comprehensive documentation with VitePress
- Full test suite with 142 tests (unit + integration)
- Examples for common strategies

### Features
- **Screener Methods**:
  - `where()` - Add filter conditions
  - `select()` - Select specific fields
  - `selectAll()` - Select all available fields
  - `sortBy()` - Sort results
  - `setRange()` - Pagination
  - `setIndex()` - Filter by index constituents
  - `get()` - Execute query
  - `stream()` - Real-time updates

- **Field System**:
  - Type-safe field constants
  - Field metadata (label, fieldName, format, interval, historical support)
  - Format types: currency, percent, float, round, number_group, text, date, bool

- **MCP Server**:
  - Claude Desktop integration
  - Tools for querying market data
  - Field discovery and search capabilities

[Unreleased]: https://github.com/jmargieh/tradingview-screener/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/jmargieh/tradingview-screener/releases/tag/v1.0.0
