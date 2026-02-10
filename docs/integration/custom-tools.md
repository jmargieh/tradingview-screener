# Custom Tools

Building custom MCP tools for specific use cases.

## Overview

Extend the TradingView Screener MCP server with custom tools tailored to your specific needs.

## Basic Tool Structure

### Tool Definition

```typescript
interface MCPTool {
  name: string;
  description: string;
  inputSchema: {
    type: 'object';
    properties: Record<string, any>;
    required?: string[];
  };
}
```

### Tool Handler

```typescript
async function handleToolCall(
  name: string,
  args: Record<string, any>
): Promise<ToolResult> {
  // Implement tool logic
  return {
    content: [
      {
        type: 'text',
        text: JSON.stringify(result),
      },
    ],
  };
}
```

## Example: Portfolio Analyzer

### Tool Definition

```typescript
const portfolioAnalyzerTool: MCPTool = {
  name: 'analyze_portfolio',
  description: 'Analyze a portfolio of stocks',
  inputSchema: {
    type: 'object',
    properties: {
      symbols: {
        type: 'array',
        items: { type: 'string' },
        description: 'Stock symbols to analyze',
      },
      metrics: {
        type: 'array',
        items: {
          type: 'string',
          enum: ['valuation', 'growth', 'profitability', 'technical'],
        },
        description: 'Metrics to include',
      },
    },
    required: ['symbols'],
  },
};
```

### Tool Implementation

```typescript
import { StockScreener, StockField } from 'tradingview-screener';

async function analyzePortfolio(
  symbols: string[],
  metrics: string[]
): Promise<any> {
  const screener = new StockScreener();

  // Filter for specific symbols
  screener.where(StockField.NAME.isin(symbols));

  // Select fields based on requested metrics
  const fields = [StockField.NAME, StockField.PRICE];

  if (metrics.includes('valuation')) {
    fields.push(
      StockField.PRICE_TO_EARNINGS_RATIO_TTM,
      StockField.PRICE_TO_BOOK_MRQ,
      StockField.PRICE_SALES_CURRENT
    );
  }

  if (metrics.includes('growth')) {
    fields.push(
      StockField.REVENUE_TTM_YOY_GROWTH,
      StockField.EARNINGS_PER_SHARE_DILUTED_TTM
    );
  }

  if (metrics.includes('profitability')) {
    fields.push(
      StockField.NET_INCOME_TTM,
      StockField.REVENUE_TTM
    );
  }

  if (metrics.includes('technical')) {
    fields.push(
      StockField.RSI,
      StockField.ATR
    );
  }

  screener.select(...fields);

  const results = await screener.get();

  return {
    portfolio: results.data,
    summary: {
      totalStocks: results.data.length,
      metrics: metrics,
    },
  };
}
```

### Register Tool

```typescript
server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    portfolioAnalyzerTool,
    // ... other tools
  ],
}));

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  if (name === 'analyze_portfolio') {
    const result = await analyzePortfolio(args.symbols, args.metrics || []);

    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify(result, null, 2),
        },
      ],
    };
  }

  // ... other tools
});
```

## Example: Sector Comparison

### Tool Definition

```typescript
const sectorComparisonTool: MCPTool = {
  name: 'compare_sectors',
  description: 'Compare performance across sectors',
  inputSchema: {
    type: 'object',
    properties: {
      sectors: {
        type: 'array',
        items: { type: 'string' },
        description: 'Sectors to compare',
      },
      metric: {
        type: 'string',
        enum: ['price_change', 'volume', 'market_cap', 'pe_ratio'],
        description: 'Metric to compare',
      },
      period: {
        type: 'string',
        enum: ['1D', '1W', '1M', '3M', '1Y'],
        description: 'Time period',
      },
    },
    required: ['sectors', 'metric'],
  },
};
```

### Tool Implementation

```typescript
async function compareSectors(
  sectors: string[],
  metric: string,
  period: string = '1D'
): Promise<any> {
  const results = [];

  for (const sector of sectors) {
    const screener = new StockScreener();

    // Note: SECTOR field filtering requires additional implementation
    // This example shows metric selection only

    // Select appropriate field based on metric
    switch (metric) {
      case 'price_change':
        screener.select(StockField.CHANGE_PERCENT);
        break;
      case 'volume':
        screener.select(StockField.VOLUME);
        break;
      case 'market_cap':
        screener.select(StockField.MARKET_CAPITALIZATION);
        break;
      case 'pe_ratio':
        screener.select(StockField.PRICE_TO_EARNINGS_RATIO_TTM);
        break;
    }

    const data = await screener.get();

    // Calculate sector average
    const values = data.data.map(row => row[metric]);
    const average = values.reduce((a, b) => a + b, 0) / values.length;

    results.push({
      sector,
      average,
      count: data.totalCount,
    });
  }

  // Sort by average
  results.sort((a, b) => b.average - a.average);

  return {
    comparison: results,
    metric,
    period,
  };
}
```

## Example: Alert System

### Tool Definition

```typescript
const alertTool: MCPTool = {
  name: 'create_alert',
  description: 'Create a price or indicator alert',
  inputSchema: {
    type: 'object',
    properties: {
      symbol: {
        type: 'string',
        description: 'Stock symbol',
      },
      condition: {
        type: 'object',
        properties: {
          field: { type: 'string' },
          operator: { type: 'string' },
          value: { type: 'number' },
        },
        description: 'Alert condition',
      },
      notification: {
        type: 'object',
        properties: {
          type: {
            type: 'string',
            enum: ['email', 'webhook', 'console'],
          },
          target: { type: 'string' },
        },
      },
    },
    required: ['symbol', 'condition'],
  },
};
```

### Tool Implementation

```typescript
interface Alert {
  id: string;
  symbol: string;
  condition: {
    field: string;
    operator: string;
    value: number;
  };
  notification: {
    type: string;
    target: string;
  };
  active: boolean;
}

const alerts: Map<string, Alert> = new Map();

async function createAlert(
  symbol: string,
  condition: any,
  notification: any
): Promise<string> {
  const alertId = `alert_${Date.now()}_${Math.random().toString(36).slice(2)}`;

  const alert: Alert = {
    id: alertId,
    symbol,
    condition,
    notification: notification || { type: 'console', target: '' },
    active: true,
  };

  alerts.set(alertId, alert);

  // Start monitoring (in background)
  monitorAlert(alert);

  return alertId;
}

async function monitorAlert(alert: Alert): Promise<void> {
  const screener = new StockScreener();

  screener.where(StockField.NAME.eq(alert.symbol));
  screener.select(StockField[alert.condition.field]);

  for await (const data of screener.stream({ interval: 60000 })) {
    if (!alert.active || !data) continue;

    const row = data.data[0];
    if (!row) continue;

    const value = row[alert.condition.field];
    const triggered = checkCondition(
      value,
      alert.condition.operator,
      alert.condition.value
    );

    if (triggered) {
      await sendNotification(alert);
      alert.active = false; // Trigger once
      break;
    }
  }
}

function checkCondition(
  value: number,
  operator: string,
  target: number
): boolean {
  switch (operator) {
    case 'greater':
      return value > target;
    case 'less':
      return value < target;
    case 'equal':
      return value === target;
    default:
      return false;
  }
}

async function sendNotification(alert: Alert): Promise<void> {
  const message = `Alert triggered for ${alert.symbol}: ${alert.condition.field} ${alert.condition.operator} ${alert.condition.value}`;

  switch (alert.notification.type) {
    case 'email':
      // Send email
      console.log('Email:', message);
      break;
    case 'webhook':
      // Call webhook
      await fetch(alert.notification.target, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message, alert }),
      });
      break;
    case 'console':
    default:
      console.log(message);
      break;
  }
}
```

## Example: Backtesting Tool

### Tool Definition

```typescript
const backtestTool: MCPTool = {
  name: 'backtest_strategy',
  description: 'Backtest a trading strategy',
  inputSchema: {
    type: 'object',
    properties: {
      strategy: {
        type: 'object',
        properties: {
          entry: {
            type: 'object',
            description: 'Entry conditions',
          },
          exit: {
            type: 'object',
            description: 'Exit conditions',
          },
          universe: {
            type: 'object',
            description: 'Stock universe filters',
          },
        },
      },
      period: {
        type: 'object',
        properties: {
          start: { type: 'string' },
          end: { type: 'string' },
        },
      },
      capital: {
        type: 'number',
        description: 'Starting capital',
      },
    },
    required: ['strategy'],
  },
};
```

### Tool Implementation

```typescript
async function backtestStrategy(
  strategy: any,
  period: any,
  capital: number = 100000
): Promise<any> {
  const screener = new StockScreener();

  // Apply universe filters
  for (const [field, condition] of Object.entries(strategy.universe || {})) {
    const fieldObj = StockField[field];
    const { operator, value } = condition as any;

    switch (operator) {
      case 'greater':
        screener.where(fieldObj.gt(value));
        break;
      case 'less':
        screener.where(fieldObj.lt(value));
        break;
      // ... other operators
    }
  }

  // Get candidate stocks
  const candidates = await screener.get();

  // Simulate trades
  const trades = [];
  let currentCapital = capital;

  for (const stock of candidates.data) {
    // Check entry conditions
    const shouldEnter = evaluateConditions(stock, strategy.entry);

    if (shouldEnter) {
      // Simulate entry
      const entryPrice = stock.close;
      const shares = Math.floor(currentCapital * 0.1 / entryPrice); // 10% position

      // Check exit conditions (simplified)
      const exitPrice = entryPrice * 1.05; // 5% profit target
      const profit = (exitPrice - entryPrice) * shares;

      trades.push({
        symbol: stock.symbol,
        entry: entryPrice,
        exit: exitPrice,
        shares,
        profit,
      });

      currentCapital += profit;
    }
  }

  const totalProfit = currentCapital - capital;
  const returnPercent = (totalProfit / capital) * 100;

  return {
    performance: {
      startingCapital: capital,
      endingCapital: currentCapital,
      totalProfit,
      returnPercent,
    },
    trades: trades.length,
    winners: trades.filter(t => t.profit > 0).length,
    losers: trades.filter(t => t.profit < 0).length,
    tradeHistory: trades,
  };
}

function evaluateConditions(stock: any, conditions: any): boolean {
  for (const [field, condition] of Object.entries(conditions)) {
    const value = stock[field];
    const { operator, target } = condition as any;

    if (!checkCondition(value, operator, target)) {
      return false;
    }
  }

  return true;
}
```

## Example: Correlation Analyzer

### Tool Definition

```typescript
const correlationTool: MCPTool = {
  name: 'analyze_correlation',
  description: 'Analyze correlation between stocks or sectors',
  inputSchema: {
    type: 'object',
    properties: {
      symbols: {
        type: 'array',
        items: { type: 'string' },
        description: 'Symbols to analyze',
      },
      period: {
        type: 'string',
        enum: ['1W', '1M', '3M', '1Y'],
        description: 'Time period',
      },
    },
    required: ['symbols'],
  },
};
```

### Tool Implementation

```typescript
async function analyzeCorrelation(
  symbols: string[],
  period: string = '1M'
): Promise<any> {
  const priceData: Record<string, number[]> = {};

  // Fetch price data for each symbol
  for (const symbol of symbols) {
    const screener = new StockScreener();

    screener.where(StockField.NAME.eq(symbol));
    screener.select(StockField.PRICE, StockField.CHANGE_PERCENT);

    const results = await screener.get();
    // Note: Historical price data requires additional API implementation
    priceData[symbol] = results.data.map(row => row.price || 0);
  }

  // Calculate correlation matrix
  const correlations: Record<string, Record<string, number>> = {};

  for (let i = 0; i < symbols.length; i++) {
    for (let j = i + 1; j < symbols.length; j++) {
      const symbol1 = symbols[i];
      const symbol2 = symbols[j];

      const correlation = calculateCorrelation(
        priceData[symbol1],
        priceData[symbol2]
      );

      if (!correlations[symbol1]) correlations[symbol1] = {};
      if (!correlations[symbol2]) correlations[symbol2] = {};

      correlations[symbol1][symbol2] = correlation;
      correlations[symbol2][symbol1] = correlation;
    }
  }

  return {
    correlations,
    period,
    symbols,
  };
}

function calculateCorrelation(x: number[], y: number[]): number {
  const n = Math.min(x.length, y.length);

  const meanX = x.reduce((a, b) => a + b, 0) / n;
  const meanY = y.reduce((a, b) => a + b, 0) / n;

  let numerator = 0;
  let sumXSquared = 0;
  let sumYSquared = 0;

  for (let i = 0; i < n; i++) {
    const xDiff = x[i] - meanX;
    const yDiff = y[i] - meanY;

    numerator += xDiff * yDiff;
    sumXSquared += xDiff * xDiff;
    sumYSquared += yDiff * yDiff;
  }

  const denominator = Math.sqrt(sumXSquared * sumYSquared);

  return denominator === 0 ? 0 : numerator / denominator;
}
```

## Tool Testing

### Unit Tests

```typescript
import { describe, it, expect, vi } from 'vitest';

describe('Custom Tools', () => {
  it('should analyze portfolio', async () => {
    const symbols = ['AAPL', 'GOOGL', 'MSFT'];
    const metrics = ['valuation', 'growth'];

    const result = await analyzePortfolio(symbols, metrics);

    expect(result.portfolio).toHaveLength(3);
    expect(result.summary.totalStocks).toBe(3);
  });

  it('should compare sectors', async () => {
    const sectors = ['Technology', 'Healthcare'];
    const metric = 'market_cap';

    const result = await compareSectors(sectors, metric);

    expect(result.comparison).toHaveLength(2);
    expect(result.metric).toBe('market_cap');
  });
});
```

### Integration Tests

```typescript
describe('MCP Tool Integration', () => {
  it('should handle tool call', async () => {
    const request = {
      params: {
        name: 'analyze_portfolio',
        arguments: {
          symbols: ['AAPL'],
          metrics: ['valuation'],
        },
      },
    };

    const response = await handleToolCall(
      request.params.name,
      request.params.arguments
    );

    expect(response.content[0].type).toBe('text');
    expect(JSON.parse(response.content[0].text)).toHaveProperty('portfolio');
  });
});
```

## Best Practices

1. **Validate Inputs**: Always validate tool arguments
2. **Error Handling**: Provide clear error messages
3. **Documentation**: Document tool behavior and parameters
4. **Performance**: Cache results when appropriate
5. **Testing**: Write comprehensive tests
6. **Security**: Validate and sanitize user inputs

## Next Steps

- [MCP Server](mcp-server.md) - Server documentation
- [Claude Desktop](claude-desktop.md) - Integration guide
- [Examples](../examples/value-investing.md) - More examples
