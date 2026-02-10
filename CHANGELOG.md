# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - TBD

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
