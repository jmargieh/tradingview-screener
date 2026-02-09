---
layout: home

hero:
  name: TradingView Screener API
  text: TypeScript Library for Market Data
  tagline: Query stocks, crypto, forex, bonds, and futures with 13,000+ fields
  image:
    src: /hero-image.png
    alt: TradingView Screener API
  actions:
    - theme: brand
      text: Get Started
      link: /quickstart
    - theme: alt
      text: View on GitHub
      link: https://github.com/jmargieh/tradingview-screener-api
    - theme: alt
      text: API Reference
      link: /api/base-screener

features:
  - icon: 🚀
    title: Simple & Powerful
    details: Clean, fluent API for building complex market screens with minimal code. Chain filters, select fields, and retrieve results effortlessly.

  - icon: 📊
    title: 13,000+ Fields
    details: Access comprehensive market data including fundamentals, technicals, earnings, dividends, analyst ratings, and real-time price data.

  - icon: 🔍
    title: Multiple Asset Types
    details: Screen stocks, cryptocurrencies, forex pairs, bonds, futures, and coins with specialized screeners for each asset class.

  - icon: ⚡
    title: High Performance
    details: Optimized queries with pagination, streaming support, and efficient data fetching. Built with TypeScript for type safety.

  - icon: 🎯
    title: Flexible Filtering
    details: 15+ filter operators including numeric comparisons, text matching, range queries, and technical indicator conditions.

  - icon: 🤖
    title: Claude MCP Integration
    details: Built-in Model Context Protocol server for seamless integration with Claude Desktop. 9 powerful tools for AI-powered market analysis.

  - icon: 📝
    title: Well Documented
    details: Comprehensive guides, API reference, and real-world examples covering value investing, technical analysis, and more.

  - icon: 🎨
    title: Beautiful Formatting
    details: Built-in formatters and beautifiers for displaying data in tables, CLI output, or custom UIs with proper number formatting.

  - icon: 🧪
    title: Battle Tested
    details: Extensively tested with unit tests, integration tests, and real-world usage. Type-safe with full TypeScript support.
---

## Quick Example

```typescript
import { StockScreener, StockField } from 'tradingview-screener'

// Find undervalued dividend stocks
const screener = new StockScreener()
  .where(StockField.PRICE_TO_EARNINGS_RATIO_TTM.lt(15))
  .where(StockField.DIVIDEND_YIELD_FWD.gte(3))
  .where(StockField.MARKET_CAPITALIZATION.gte(1_000_000_000))
  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.PRICE_TO_EARNINGS_RATIO_TTM,
    StockField.DIVIDEND_YIELD_FWD
  )
  .sortBy(StockField.DIVIDEND_YIELD_FWD, false)
  .setRange(0, 50)

const results = await screener.get()
console.log(`Found ${results.totalCount} stocks`)
results.data.forEach(stock => console.log(stock))
```

## Use Cases

<div class="use-cases">
  <div class="use-case">
    <h3>📈 Value Investing</h3>
    <p>Find undervalued stocks using P/E ratios, P/B ratios, dividend yields, and fundamental metrics.</p>
  </div>

  <div class="use-case">
    <h3>📊 Technical Analysis</h3>
    <p>Screen by RSI, MACD, moving averages, volume, and other technical indicators across multiple timeframes.</p>
  </div>

  <div class="use-case">
    <h3>💰 Dividend Investing</h3>
    <p>Discover high-yield dividend stocks with consistent payout history and strong fundamentals.</p>
  </div>

  <div class="use-case">
    <h3>🚀 Growth Stocks</h3>
    <p>Identify high-growth companies using revenue growth, earnings momentum, and analyst recommendations.</p>
  </div>

  <div class="use-case">
    <h3>₿ Crypto Trading</h3>
    <p>Screen cryptocurrencies by market cap, volume, price changes, and technical indicators.</p>
  </div>

  <div class="use-case">
    <h3>🤖 AI Integration</h3>
    <p>Use with Claude Desktop for natural language market queries and automated investment research.</p>
  </div>
</div>

<style>
.use-cases {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
}

.use-case {
  padding: 1.5rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  transition: all 0.2s;
}

.use-case:hover {
  border-color: var(--vp-c-brand);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.use-case h3 {
  margin-top: 0;
  margin-bottom: 0.5rem;
}

.use-case p {
  margin: 0;
  color: var(--vp-c-text-2);
}
</style>
