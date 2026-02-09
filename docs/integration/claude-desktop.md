# Claude Desktop Integration

Using TradingView Screener with Claude Desktop.

## Overview

Integrate the TradingView Screener MCP server with Claude Desktop to query financial markets through natural language.

## Prerequisites

- Claude Desktop app installed
- Node.js 18+ installed
- TradingView Screener package installed

## Installation

### 1. Install the Package

```bash
npm install -g tradingview-screener
```

### 2. Configure Claude Desktop

Edit Claude Desktop configuration file:

**macOS/Linux:**
```bash
~/.config/Claude/claude_desktop_config.json
```

**Windows:**
```
%APPDATA%\Claude\claude_desktop_config.json
```

### 3. Add MCP Server Configuration

```json
{
  "mcpServers": {
    "tradingview-screener": {
      "command": "npx",
      "args": ["tvscreener-mcp"],
      "env": {}
    }
  }
}
```

### 4. Restart Claude Desktop

Close and reopen Claude Desktop to load the MCP server.

## Verification

Check that the server is loaded:

1. Open Claude Desktop
2. Start a new conversation
3. Look for the MCP indicator (server icon)
4. Server should show: "tradingview-screener"

## Usage Examples

### Discovering Fields

**Prompt:**
```
What fields are available for dividend analysis?
```

**Claude's Response:**
Claude will use the `discover_fields` tool to search for dividend-related fields and show you available options like:
- DIVIDEND_YIELD_FWD
- DIVIDEND_PAYOUT_RATIO_TTM
- DIVIDEND_GROWTH_RATE_5Y

### Finding Stocks

**Prompt:**
```
Find large-cap dividend stocks with yield above 3%
```

**Claude's Response:**
Claude will use the `custom_query` tool to screen for:
```json
{
  "assetType": "stock",
  "filters": [
    {
      "field": "MARKET_CAPITALIZATION",
      "operator": "greater",
      "value": 10000000000
    },
    {
      "field": "DIVIDEND_YIELD_FWD",
      "operator": "greater",
      "value": 3
    }
  ],
  "fields": ["NAME", "PRICE", "DIVIDEND_YIELD_FWD", "MARKET_CAPITALIZATION"],
  "sort": {
    "field": "DIVIDEND_YIELD_FWD",
    "ascending": false
  },
  "limit": 20
}
```

### Top Movers

**Prompt:**
```
Show me today's top 10 stock gainers
```

**Claude's Response:**
Claude will use the `get_top_movers` tool:
```json
{
  "type": "gainers",
  "assetType": "stock",
  "limit": 10
}
```

### Crypto Screening

**Prompt:**
```
Find cryptocurrencies with market cap over 1B and high volume
```

**Claude's Response:**
Claude will use the `search_crypto` tool:
```json
{
  "minMarketCap": 1000000000,
  "minVolume24h": 100000000,
  "limit": 20
}
```

## Advanced Queries

### Value Investing

**Prompt:**
```
Find undervalued stocks with:
- P/E ratio below 15
- P/B ratio below 3
- Market cap over 1 billion
- Positive earnings growth
```

**Claude will construct:**
```json
{
  "assetType": "stock",
  "filters": [
    {"field": "PRICE_TO_EARNINGS_RATIO_TTM", "operator": "less", "value": 15},
    {"field": "PRICE_TO_BOOK_MRQ", "operator": "less", "value": 3},
    {"field": "MARKET_CAPITALIZATION", "operator": "greater", "value": 1000000000},
    {"field": "EARNINGS_GROWTH_TTM", "operator": "greater", "value": 0}
  ],
  "fields": [
    "NAME",
    "PRICE",
    "PRICE_TO_EARNINGS_RATIO_TTM",
    "PRICE_TO_BOOK_MRQ",
    "EARNINGS_GROWTH_TTM",
    "MARKET_CAPITALIZATION"
  ],
  "sort": {
    "field": "PRICE_TO_EARNINGS_RATIO_TTM",
    "ascending": true
  },
  "limit": 50
}
```

### Technical Analysis

**Prompt:**
```
Find stocks with RSI between 30-70 and price above 50-day MA
```

**Claude will construct:**
```json
{
  "assetType": "stock",
  "filters": [
    {"field": "RSI", "operator": "in_range", "value": [30, 70]},
    {"field": "PRICE", "operator": "above", "value": "MOVING_AVERAGE_50"}
  ],
  "fields": ["NAME", "PRICE", "RSI", "MOVING_AVERAGE_50", "VOLUME"],
  "limit": 50
}
```

### Sector-Specific

**Prompt:**
```
Show me technology stocks with revenue growth over 20%
```

**Claude will construct:**
```json
{
  "assetType": "stock",
  "filters": [
    {"field": "SECTOR", "operator": "equal", "value": "Technology"},
    {"field": "REVENUE_GROWTH_TTM", "operator": "greater", "value": 20}
  ],
  "fields": [
    "NAME",
    "PRICE",
    "REVENUE_GROWTH_TTM",
    "MARKET_CAPITALIZATION"
  ],
  "sort": {
    "field": "REVENUE_GROWTH_TTM",
    "ascending": false
  },
  "limit": 30
}
```

## Configuration Options

### Custom Environment Variables

```json
{
  "mcpServers": {
    "tradingview-screener": {
      "command": "npx",
      "args": ["tvscreener-mcp"],
      "env": {
        "MCP_LOG_LEVEL": "debug",
        "MCP_CACHE_ENABLED": "true",
        "MCP_CACHE_TTL": "60000"
      }
    }
  }
}
```

### Using Local Installation

```json
{
  "mcpServers": {
    "tradingview-screener": {
      "command": "node",
      "args": ["/path/to/tradingview-screener/dist/mcp/server.js"]
    }
  }
}
```

### Multiple Configurations

```json
{
  "mcpServers": {
    "tradingview-screener-dev": {
      "command": "node",
      "args": ["./dist/mcp/server.js"],
      "env": {
        "MCP_LOG_LEVEL": "debug"
      }
    },
    "tradingview-screener-prod": {
      "command": "npx",
      "args": ["tvscreener-mcp"]
    }
  }
}
```

## Troubleshooting

### Server Not Loading

**Check configuration file syntax:**
```bash
cat ~/.config/Claude/claude_desktop_config.json | jq
```

**Verify server command:**
```bash
npx tvscreener-mcp --version
```

**Check Claude logs:**
```bash
# macOS
tail -f ~/Library/Logs/Claude/mcp*.log

# Linux
tail -f ~/.local/share/Claude/logs/mcp*.log

# Windows
type %LOCALAPPDATA%\Claude\logs\mcp*.log
```

### Server Crashes

**Enable debug logging:**
```json
{
  "mcpServers": {
    "tradingview-screener": {
      "command": "npx",
      "args": ["tvscreener-mcp"],
      "env": {
        "MCP_LOG_LEVEL": "debug",
        "NODE_ENV": "development"
      }
    }
  }
}
```

**Check for errors:**
```bash
npx tvscreener-mcp 2>&1 | tee server.log
```

### Rate Limiting

If you see rate limit errors, add delays between requests:

```json
{
  "mcpServers": {
    "tradingview-screener": {
      "command": "npx",
      "args": ["tvscreener-mcp"],
      "env": {
        "MCP_RATE_LIMIT_DELAY": "1000"
      }
    }
  }
}
```

### Permission Issues

**macOS/Linux:**
```bash
chmod +x $(which tvscreener-mcp)
```

**Windows:**
Run as administrator if needed.

## Example Conversations

### Investment Research

**User:** "I'm looking for dividend aristocrats. Can you find stocks with dividend growth for at least 25 years and current yield above 2%?"

**Claude:** Uses the screener to find stocks with:
- DIVIDEND_GROWTH_YEARS >= 25
- DIVIDEND_YIELD_FWD >= 2
- Returns formatted results with company names, yields, and payout ratios

### Portfolio Screening

**User:** "Help me find mid-cap growth stocks in the healthcare sector with strong fundamentals."

**Claude:** Constructs query filtering for:
- Market cap: $2B - $10B
- Sector: Healthcare
- Revenue growth > 15%
- Operating margin > 10%
- Debt/Equity < 1.5

### Market Analysis

**User:** "What are the most oversold large-cap stocks right now?"

**Claude:** Searches for:
- Market cap > $10B
- RSI < 30 (oversold)
- Sorts by RSI ascending
- Returns top candidates

### Crypto Discovery

**User:** "Show me emerging cryptocurrencies with growing volume but not too expensive."

**Claude:** Filters crypto for:
- Market cap: $100M - $1B
- 24h volume growth > 50%
- Price < $10
- Sorts by volume growth

## Best Practices

### 1. Be Specific

**Good:** "Find technology stocks with P/E below 20 and revenue growth above 15%"

**Less Effective:** "Find good tech stocks"

### 2. Use Concrete Numbers

**Good:** "Market cap over 1 billion"

**Less Effective:** "Large companies"

### 3. Specify Sort Order

**Good:** "Sort by dividend yield descending"

**Better Results:** Claude will order results appropriately

### 4. Limit Results

**Good:** "Show me top 20 results"

**Efficient:** Faster responses, focused results

### 5. Iterate on Results

**Follow-up:** "Now filter those results for P/E below 15"

**Claude can refine:** Based on previous results

## Privacy & Security

- **No API Keys Required:** TradingView Screener uses public data
- **Local Processing:** All filtering happens locally
- **No Data Storage:** Results are not persisted
- **Open Source:** Code is publicly auditable

## Performance Tips

1. **Use Specific Filters:** Narrow down results quickly
2. **Limit Result Count:** Request only what you need
3. **Cache Settings:** Enable caching for repeated queries
4. **Avoid Polling:** Don't refresh too frequently

## Limitations

- **Rate Limits:** TradingView API has rate limits
- **Data Delay:** Market data may have delays
- **No Real-Time:** Not suitable for high-frequency trading
- **No Historical:** Limited historical data access

## Next Steps

- [MCP Server Documentation](mcp-server.md) - Server details
- [Custom Tools](custom-tools.md) - Building custom tools
- [Examples](../examples/value-investing.md) - More examples
