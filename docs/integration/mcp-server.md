# MCP Server

Model Context Protocol integration for AI assistants.

## Overview

The MCP (Model Context Protocol) server allows AI assistants like Claude to interact with the TradingView Screener API through a standardized interface.

## Installation

The MCP server is included with the main package:

```bash
npm install tradingview-screener
```

## Starting the Server

### Standalone Mode

```bash
npx tvscreener-mcp
```

### Programmatic Usage

```typescript
import { startMCPServer } from 'tradingview-screener/mcp';

await startMCPServer();
```

## Available Tools

The MCP server provides 5 tools for querying financial data:

### 1. discover_fields

Search for available fields/indicators.

```json
{
  "name": "discover_fields",
  "description": "Search for available fields and indicators",
  "inputSchema": {
    "type": "object",
    "properties": {
      "query": {
        "type": "string",
        "description": "Search query (e.g., 'price', 'volume', 'rsi')"
      },
      "assetType": {
        "type": "string",
        "enum": ["stock", "crypto", "forex", "bond", "futures"],
        "description": "Asset type to search in"
      }
    },
    "required": ["query"]
  }
}
```

#### Example Request

```json
{
  "name": "discover_fields",
  "arguments": {
    "query": "dividend",
    "assetType": "stock"
  }
}
```

#### Example Response

```json
{
  "fields": [
    {
      "name": "DIVIDEND_YIELD_FWD",
      "label": "Dividend yield (forward)",
      "format": "percent"
    },
    {
      "name": "DIVIDEND_PAYOUT_RATIO_TTM",
      "label": "Dividend payout ratio",
      "format": "percent"
    }
  ],
  "count": 2
}
```

### 2. custom_query

Build flexible custom queries.

```json
{
  "name": "custom_query",
  "description": "Build custom screener queries",
  "inputSchema": {
    "type": "object",
    "properties": {
      "assetType": {
        "type": "string",
        "enum": ["stock", "crypto", "forex", "bond", "futures"],
        "description": "Asset type to query"
      },
      "filters": {
        "type": "array",
        "description": "Filter conditions",
        "items": {
          "type": "object",
          "properties": {
            "field": { "type": "string" },
            "operator": { "type": "string" },
            "value": {}
          }
        }
      },
      "fields": {
        "type": "array",
        "description": "Fields to return",
        "items": { "type": "string" }
      },
      "sort": {
        "type": "object",
        "properties": {
          "field": { "type": "string" },
          "ascending": { "type": "boolean" }
        }
      },
      "limit": {
        "type": "number",
        "description": "Maximum results"
      }
    },
    "required": ["assetType"]
  }
}
```

#### Example Request

```json
{
  "name": "custom_query",
  "arguments": {
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
}
```

### 3. search_stocks

Preset stock queries.

```json
{
  "name": "search_stocks",
  "description": "Search stocks with common presets",
  "inputSchema": {
    "type": "object",
    "properties": {
      "preset": {
        "type": "string",
        "enum": ["large_cap", "dividend", "value", "growth", "top_gainers", "top_losers"],
        "description": "Preset query type"
      },
      "limit": {
        "type": "number",
        "description": "Maximum results"
      }
    },
    "required": ["preset"]
  }
}
```

#### Example Request

```json
{
  "name": "search_stocks",
  "arguments": {
    "preset": "dividend",
    "limit": 10
  }
}
```

### 4. search_crypto

Search cryptocurrencies.

```json
{
  "name": "search_crypto",
  "description": "Search cryptocurrencies",
  "inputSchema": {
    "type": "object",
    "properties": {
      "minMarketCap": {
        "type": "number",
        "description": "Minimum market cap in USD"
      },
      "minVolume24h": {
        "type": "number",
        "description": "Minimum 24h volume in USD"
      },
      "limit": {
        "type": "number",
        "description": "Maximum results"
      }
    }
  }
}
```

#### Example Request

```json
{
  "name": "search_crypto",
  "arguments": {
    "minMarketCap": 1000000000,
    "minVolume24h": 100000000,
    "limit": 20
  }
}
```

### 5. get_top_movers

Find biggest gainers/losers.

```json
{
  "name": "get_top_movers",
  "description": "Get top gainers or losers",
  "inputSchema": {
    "type": "object",
    "properties": {
      "type": {
        "type": "string",
        "enum": ["gainers", "losers"],
        "description": "Type of movers"
      },
      "assetType": {
        "type": "string",
        "enum": ["stock", "crypto"],
        "description": "Asset type"
      },
      "limit": {
        "type": "number",
        "description": "Maximum results"
      }
    },
    "required": ["type"]
  }
}
```

#### Example Request

```json
{
  "name": "get_top_movers",
  "arguments": {
    "type": "gainers",
    "assetType": "stock",
    "limit": 10
  }
}
```

## Server Configuration

### Environment Variables

```bash
# Server port (default: stdio)
MCP_PORT=3000

# Log level
MCP_LOG_LEVEL=info

# Cache settings
MCP_CACHE_ENABLED=true
MCP_CACHE_TTL=60000  # 1 minute
```

### Configuration File

Create `mcp-config.json`:

```json
{
  "server": {
    "name": "tradingview-screener",
    "version": "1.0.0"
  },
  "transport": {
    "type": "stdio"
  },
  "cache": {
    "enabled": true,
    "ttl": 60000
  },
  "rateLimit": {
    "enabled": true,
    "maxRequests": 100,
    "windowMs": 60000
  }
}
```

## Server Implementation

### Basic Server

```typescript
import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { StockScreener, CryptoScreener, StockField } from 'tradingview-screener';

const server = new Server(
  {
    name: 'tradingview-screener',
    version: '1.0.0',
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

// Register tools
server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    {
      name: 'search_stocks',
      description: 'Search for stocks',
      inputSchema: {
        type: 'object',
        properties: {
          preset: {
            type: 'string',
            enum: ['large_cap', 'dividend'],
          },
        },
      },
    },
  ],
}));

// Handle tool calls
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  if (name === 'search_stocks') {
    const screener = new StockScreener();

    if (args.preset === 'large_cap') {
      screener.where(StockField.MARKET_CAPITALIZATION.gt(10e9));
    } else if (args.preset === 'dividend') {
      screener.where(StockField.DIVIDEND_YIELD_FWD.gte(3));
    }

    const results = await screener.get();

    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify(results, null, 2),
        },
      ],
    };
  }

  throw new Error(`Unknown tool: ${name}`);
});

// Start server
const transport = new StdioServerTransport();
await server.connect(transport);
```

### With Error Handling

```typescript
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  try {
    if (name === 'custom_query') {
      const screener = createScreener(args);
      const results = await screener.get();

      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify(results, null, 2),
          },
        ],
      };
    }

    throw new Error(`Unknown tool: ${name}`);
  } catch (error) {
    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify({
            error: error.message,
            code: error.code,
          }),
        },
      ],
      isError: true,
    };
  }
});
```

## Testing the Server

### Using MCP CLI

```bash
# Install MCP CLI
npm install -g @modelcontextprotocol/cli

# Test discover_fields
mcp call tvscreener-mcp discover_fields '{"query": "price", "assetType": "stock"}'

# Test custom_query
mcp call tvscreener-mcp custom_query '{
  "assetType": "stock",
  "filters": [
    {"field": "PRICE", "operator": "greater", "value": 100}
  ],
  "limit": 10
}'
```

### Using curl (HTTP mode)

```bash
curl -X POST http://localhost:3000/mcp \
  -H "Content-Type: application/json" \
  -d '{
    "method": "tools/call",
    "params": {
      "name": "search_stocks",
      "arguments": {
        "preset": "large_cap",
        "limit": 10
      }
    }
  }'
```

## Monitoring

### Logging

```typescript
import { Logger } from '@modelcontextprotocol/sdk/shared/logger.js';

const logger = new Logger('tradingview-screener');

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  logger.info('Tool called', { name: request.params.name });

  try {
    // Handle request
    const result = await handleTool(request);

    logger.info('Tool completed', { name: request.params.name });
    return result;
  } catch (error) {
    logger.error('Tool failed', { name: request.params.name, error });
    throw error;
  }
});
```

### Metrics

```typescript
const metrics = {
  calls: 0,
  errors: 0,
  totalTime: 0,
};

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  metrics.calls++;
  const start = Date.now();

  try {
    const result = await handleTool(request);
    metrics.totalTime += Date.now() - start;
    return result;
  } catch (error) {
    metrics.errors++;
    throw error;
  }
});

// Log metrics every minute
setInterval(() => {
  console.log('Metrics:', metrics);
}, 60000);
```

## Security

### Authentication

```typescript
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const apiKey = request.params.meta?.apiKey;

  if (!isValidApiKey(apiKey)) {
    throw new Error('Unauthorized');
  }

  // Process request
});
```

### Rate Limiting

```typescript
const rateLimiter = new Map<string, number[]>();

function checkRateLimit(userId: string): boolean {
  const now = Date.now();
  const userRequests = rateLimiter.get(userId) || [];

  // Remove requests older than 1 minute
  const recentRequests = userRequests.filter(time => now - time < 60000);

  if (recentRequests.length >= 100) {
    return false; // Rate limit exceeded
  }

  recentRequests.push(now);
  rateLimiter.set(userId, recentRequests);

  return true;
}
```

## Best Practices

1. **Error Handling**: Always return structured errors
2. **Validation**: Validate all input parameters
3. **Caching**: Cache results to reduce API calls
4. **Logging**: Log all requests for debugging
5. **Rate Limiting**: Protect against abuse
6. **Documentation**: Keep tool schemas up-to-date

## Next Steps

- [Claude Desktop Integration](claude-desktop.md) - Using with Claude
- [Custom Tools](custom-tools.md) - Building custom tools
- [API Reference](../api/base-screener.md) - Complete API
