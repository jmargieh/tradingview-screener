import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'TradingView Screener API',
  description: 'TypeScript library for querying stocks, crypto, forex, bonds, and futures with 13,000+ fields',

  base: '/tradingview-screener-api/',

  themeConfig: {
    logo: '/logo.svg',

    nav: [
      { text: 'Guide', link: '/quickstart' },
      { text: 'API Reference', link: '/api/base-screener' },
      { text: 'Examples', link: '/examples/value-investing' },
      { text: 'GitHub', link: 'https://github.com/jmargieh/tradingview-screener-api' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Installation', link: '/installation' },
          { text: 'Quick Start', link: '/quickstart' },
          { text: 'Basic Usage', link: '/basic-usage' },
        ]
      },
      {
        text: 'Screeners',
        items: [
          { text: 'Stock Screener', link: '/screeners/stock' },
          { text: 'Crypto Screener', link: '/screeners/crypto' },
          { text: 'Forex Screener', link: '/screeners/forex' },
          { text: 'Bond Screener', link: '/screeners/bond' },
          { text: 'Futures Screener', link: '/screeners/futures' },
          { text: 'Coin Screener', link: '/screeners/coin' },
        ]
      },
      {
        text: 'Fields',
        items: [
          { text: 'Overview', link: '/fields/overview' },
          { text: 'Stock Fields', link: '/fields/stock-fields' },
          { text: 'Crypto Fields', link: '/fields/crypto-fields' },
          { text: 'Field Search', link: '/fields/search' },
          { text: 'Field Modifiers', link: '/fields/modifiers' },
        ]
      },
      {
        text: 'Filtering',
        items: [
          { text: 'Operations', link: '/filtering/operations' },
          { text: 'Field Conditions', link: '/filtering/field-conditions' },
          { text: 'Complex Queries', link: '/filtering/complex-queries' },
        ]
      },
      {
        text: 'Examples',
        items: [
          { text: 'Value Investing', link: '/examples/value-investing' },
          { text: 'Growth Stocks', link: '/examples/growth-stocks' },
          { text: 'Technical Analysis', link: '/examples/technical-analysis' },
          { text: 'Dividend Investing', link: '/examples/dividend-investing' },
          { text: 'Crypto Trading', link: '/examples/crypto-trading' },
          { text: 'Market Scanning', link: '/examples/market-scanning' },
        ]
      },
      {
        text: 'Advanced',
        items: [
          { text: 'Pagination', link: '/advanced/pagination' },
          { text: 'Streaming', link: '/advanced/streaming' },
          { text: 'Sorting', link: '/advanced/sorting' },
          { text: 'Performance', link: '/advanced/performance' },
          { text: 'Error Handling', link: '/advanced/error-handling' },
        ]
      },
      {
        text: 'Integration',
        items: [
          { text: 'MCP Server', link: '/integration/mcp-server' },
          { text: 'Claude Desktop', link: '/integration/claude-desktop' },
          { text: 'Custom Tools', link: '/integration/custom-tools' },
        ]
      },
      {
        text: 'Utilities',
        items: [
          { text: 'Formatting', link: '/utilities/formatting' },
          { text: 'Beautify', link: '/utilities/beautify' },
          { text: 'Types', link: '/utilities/types' },
        ]
      },
      {
        text: 'API Reference',
        items: [
          { text: 'BaseScreener', link: '/api/base-screener' },
          { text: 'BaseField', link: '/api/base-field' },
          { text: 'Filter', link: '/api/filter' },
          { text: 'Enums', link: '/api/enums' },
          { text: 'Exceptions', link: '/api/exceptions' },
        ]
      },
      {
        text: 'Development',
        items: [
          { text: 'Architecture', link: '/architecture' },
          { text: 'Code Generation', link: '/codegen' },
          { text: 'Testing', link: '/testing' },
          { text: 'Contributing', link: '/contributing' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/jmargieh/tradingview-screener-api' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present'
    },

    search: {
      provider: 'local'
    },

    editLink: {
      pattern: 'https://github.com/jmargieh/tradingview-screener-api/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    }
  }
})
