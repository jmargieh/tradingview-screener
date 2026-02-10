# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
