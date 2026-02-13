/**
 * MCP Server for TradingView Screener
 * Model Context Protocol integration for Claude
 */

import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  ListToolsRequestSchema,
  CallToolRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';

// Import screeners
import {
  StockScreener,
  CryptoScreener,
  ForexScreener,
  BondScreener,
  FuturesScreener,
  CoinScreener,
  BaseScreener,
} from '../index.js';
import { StockField } from '../fields/StockField.js';
import { CryptoField } from '../fields/CryptoField.js';
import { ForexField } from '../fields/ForexField.js';
import { BondField } from '../fields/BondField.js';
import { FuturesField } from '../fields/FuturesField.js';
import { CoinField } from '../fields/CoinField.js';
import { BaseField } from '../fields/BaseField.js';
import { formatValue } from '../utils/formatters.js';

/**
 * Type aliases for field maps
 */
type FieldMap = Record<string, BaseField>;

/**
 * Helper function to get screener and field map for a given asset type
 */
function getScreenerAndFields(assetType: string): { screener: BaseScreener; fields: FieldMap } {
  switch (assetType.toLowerCase()) {
    case 'stock':
      return { screener: new StockScreener(), fields: StockField as any };
    case 'crypto':
      return { screener: new CryptoScreener(), fields: CryptoField as any };
    case 'forex':
      return { screener: new ForexScreener(), fields: ForexField as any };
    case 'bond':
      return { screener: new BondScreener(), fields: BondField as any };
    case 'futures':
      return { screener: new FuturesScreener(), fields: FuturesField as any };
    case 'coin':
      return { screener: new CoinScreener(), fields: CoinField as any };
    default:
      throw new Error(`Unknown asset type: ${assetType}`);
  }
}

/**
 * Format results as a markdown table
 */
function formatAsMarkdownTable(results: any[], fields: BaseField[]): string {
  if (results.length === 0) {
    return 'No results found.';
  }

  const headers = fields.map(f => f.label);
  const rows = results.map(row => {
    return fields.map(field => {
      const value = row[field.fieldName];
      return formatValue(value, field.format);
    });
  });

  let markdown = '| ' + headers.join(' | ') + ' |\n';
  markdown += '| ' + headers.map(() => '---').join(' | ') + ' |\n';

  for (const row of rows) {
    markdown += '| ' + row.join(' | ') + ' |\n';
  }

  return markdown;
}

/**
 * Find similar field names using fuzzy matching
 */
function findSimilarFields(fieldMap: FieldMap, searchTerm: string, limit: number = 3): BaseField[] {
  // Use existing BaseField.search functionality
  return BaseField.search(fieldMap, searchTerm).slice(0, limit);
}

/**
 * Apply filter to screener based on operator and value
 */
function applyFilter(screener: BaseScreener, field: BaseField, op: string, value: any): void {
  switch (op) {
    case '>=':
    case 'gte':
      screener.where(field.gte(value));
      break;
    case '>':
    case 'gt':
      screener.where(field.gt(value));
      break;
    case '<=':
    case 'lte':
      screener.where(field.lte(value));
      break;
    case '<':
    case 'lt':
      screener.where(field.lt(value));
      break;
    case '==':
    case 'eq':
      screener.where(field.eq(value));
      break;
    case '!=':
    case 'ne':
      screener.where(field.ne(value));
      break;
    case 'match':
      screener.where(field.match(value));
      break;
    case 'in_range':
    case 'between':
      if (Array.isArray(value) && value.length === 2) {
        screener.where(field.between(value[0], value[1]));
      }
      break;
    default:
      throw new Error(`Unknown operator: ${op}`);
  }
}

/**
 * Create and configure MCP server
 */
async function main() {
  const mcpServer = new McpServer(
    {
      name: 'tradingview-screener',
      version: '2.0.0',
    },
    {
      capabilities: {
        tools: {},
      },
    }
  );

  // Access the underlying Server instance for advanced request handling
  const server = mcpServer.server;

  // Register list tools handler
  server.setRequestHandler(ListToolsRequestSchema, async () => ({
    tools: [
      {
        name: 'discover_fields',
        description: 'Search 3500+ available fields/indicators by keyword. Use this BEFORE custom_query to find valid field names. Field names differ between asset types (stock, crypto, coin, etc.). Searches both field names and descriptions for matches.',
        inputSchema: {
          type: 'object',
          properties: {
            search_term: {
              type: 'string',
              description: 'Keyword to search (e.g., "rsi", "volume", "earnings", "dividend", "macd")',
            },
            asset_type: {
              type: 'string',
              enum: ['stock', 'crypto', 'forex', 'bond', 'futures', 'coin'],
              default: 'stock',
              description: 'Asset type to search fields for',
            },
            limit: {
              type: 'number',
              default: 20,
              description: 'Maximum number of results',
            },
          },
          required: ['search_term'],
        },
      },
      {
        name: 'list_field_types',
        description: 'List available field categories with sample fields to guide discovery',
        inputSchema: {
          type: 'object',
          properties: {
            asset_type: {
              type: 'string',
              enum: ['stock', 'crypto', 'forex', 'bond', 'futures', 'coin'],
              default: 'stock',
              description: 'Asset type',
            },
          },
        },
      },
      {
        name: 'custom_query',
        description: 'Advanced query with any fields and custom filters. Most flexible tool for complex screening. IMPORTANT: Field names are CASE-SENSITIVE and vary by asset type. Different asset types have different available fields: Stock/Crypto/Forex use CHANGE_PERCENT (Coin uses CHANGE), Stock uses MARKET_CAPITALIZATION (Crypto/Coin use MARKET_CAP), Crypto uses VOLUME_24H_IN_USD (Coin uses N24H_VOL_5). Always use discover_fields first to find valid field names for your asset type.',
        inputSchema: {
          type: 'object',
          properties: {
            asset_type: {
              type: 'string',
              enum: ['stock', 'crypto', 'forex', 'bond', 'futures', 'coin'],
              default: 'stock',
              description: 'Asset type',
            },
            fields: {
              type: 'string',
              description: 'Comma-separated field names to display (e.g., "NAME,PRICE,RSI,MACD_LEVEL_12_26"). Use discover_fields to find available fields.',
            },
            filters: {
              type: 'string',
              description: 'JSON array of filter conditions. Each filter: {"field": "FIELD_NAME", "op": ">=", "value": 100}. Operators: >=, >, <=, <, ==, !=, match, in_range',
            },
            sort_by: {
              type: 'string',
              description: 'Field name to sort by',
            },
            ascending: {
              type: 'boolean',
              default: false,
              description: 'Sort direction',
            },
            limit: {
              type: 'number',
              default: 25,
              description: 'Maximum results (max: 100)',
            },
          },
        },
      },
      {
        name: 'search_stocks',
        description: 'Screen stocks with common filters (simplified interface)',
        inputSchema: {
          type: 'object',
          properties: {
            min_price: {
              type: 'number',
              description: 'Minimum price in USD',
            },
            max_price: {
              type: 'number',
              description: 'Maximum price in USD',
            },
            min_market_cap_billions: {
              type: 'number',
              description: 'Minimum market cap in billions USD',
            },
            max_market_cap_billions: {
              type: 'number',
              description: 'Maximum market cap in billions USD',
            },
            sectors: {
              type: 'string',
              description: 'Comma-separated sectors (use list_sectors to see available sectors)',
            },
            sort_by: {
              type: 'string',
              enum: ['market_cap', 'price', 'volume', 'change'],
              default: 'market_cap',
              description: 'Sort field',
            },
            limit: {
              type: 'number',
              default: 25,
              description: 'Maximum results (max: 100)',
            },
          },
        },
      },
      {
        name: 'search_crypto',
        description: 'Screen cryptocurrencies',
        inputSchema: {
          type: 'object',
          properties: {
            min_volume_millions: {
              type: 'number',
              description: 'Minimum 24h volume in millions USD',
            },
            min_market_cap_billions: {
              type: 'number',
              description: 'Minimum market cap in billions USD',
            },
            limit: {
              type: 'number',
              default: 25,
              description: 'Maximum results (max: 100)',
            },
          },
        },
      },
      {
        name: 'search_forex',
        description: 'Screen forex currency pairs',
        inputSchema: {
          type: 'object',
          properties: {
            limit: {
              type: 'number',
              default: 25,
              description: 'Maximum results (max: 100)',
            },
          },
        },
      },
      {
        name: 'get_top_movers',
        description: 'Get top gaining or losing assets',
        inputSchema: {
          type: 'object',
          properties: {
            asset_type: {
              type: 'string',
              enum: ['stock', 'crypto'],
              default: 'stock',
              description: 'Asset type',
            },
            direction: {
              type: 'string',
              enum: ['gainers', 'losers'],
              default: 'gainers',
              description: 'Get top gainers or losers',
            },
            limit: {
              type: 'number',
              default: 10,
              description: 'Number of results (max: 50)',
            },
          },
        },
      },
      {
        name: 'list_sectors',
        description: 'List available stock sectors for filtering',
        inputSchema: {
          type: 'object',
          properties: {},
        },
      },
      {
        name: 'list_filter_operators',
        description: 'List available filter operators for custom_query with examples',
        inputSchema: {
          type: 'object',
          properties: {},
        },
      },
    ],
  }));

  // Register call tool handler
  server.setRequestHandler(CallToolRequestSchema, async (request) => {
    const { name, arguments: args } = request.params;

    try {
      // Tool: discover_fields
      if (name === 'discover_fields') {
        const searchTerm = (args?.search_term as string) || '';
        const assetType = (args?.asset_type as string) || 'stock';
        const limit = Math.min((args?.limit as number) || 20, 100);

        const { fields } = getScreenerAndFields(assetType);
        const results = BaseField.search(fields, searchTerm).slice(0, limit);

        let output = `Found ${results.length} fields matching "${searchTerm}" for ${assetType}:\n\n`;
        for (const field of results) {
          const isTechnical = field.name.includes('INDICATOR') ||
            field.label.toLowerCase().includes('rsi') ||
            field.label.toLowerCase().includes('macd') ||
            field.label.toLowerCase().includes('moving average');
          const marker = isTechnical ? '📊 ' : '';
          output += `${marker}**${field.name}** - ${field.label} (${field.format})\n`;
        }

        return {
          content: [{ type: 'text', text: output }],
        };
      }

      // Tool: list_field_types
      if (name === 'list_field_types') {
        const assetType = (args?.asset_type as string) || 'stock';
        const { fields } = getScreenerAndFields(assetType);

        const categories = {
          'Technical Indicators': BaseField.technicals(fields),
          'Currency/Price Fields': BaseField.byFormat(fields, 'currency'),
          'Percentage Fields': BaseField.byFormat(fields, 'percent'),
          'Volume/Number Fields': BaseField.byFormat(fields, 'number_group'),
          'Recommendations': BaseField.recommendations(fields),
        };

        let output = `Field categories for ${assetType}:\n\n`;
        for (const [category, categoryFields] of Object.entries(categories)) {
          output += `**${category}** (${categoryFields.length} fields)\n`;
          const samples = categoryFields.slice(0, 5);
          for (const field of samples) {
            output += `  - ${field.name}: ${field.label}\n`;
          }
          if (categoryFields.length > 5) {
            output += `  ... and ${categoryFields.length - 5} more\n`;
          }
          output += '\n';
        }

        return {
          content: [{ type: 'text', text: output }],
        };
      }

      // Tool: custom_query
      if (name === 'custom_query') {
        const assetType = (args?.asset_type as string) || 'stock';
        const fieldsStr = args?.fields as string | undefined;
        const filtersStr = args?.filters as string | undefined;
        const sortBy = args?.sort_by as string | undefined;
        const ascending = (args?.ascending as boolean) ?? false;
        const limit = Math.min((args?.limit as number) || 25, 100);

        const { screener, fields: fieldMap } = getScreenerAndFields(assetType);

        // Parse and apply filters
        if (filtersStr) {
          const filters = JSON.parse(filtersStr);
          for (const filter of filters) {
            const field = fieldMap[filter.field];
            if (!field) {
              const suggestions = findSimilarFields(fieldMap, filter.field);
              const suggestionText = suggestions.length > 0
                ? `\n\nDid you mean one of these?\n${suggestions.map(f => `  - ${f.name}: ${f.label}`).join('\n')}`
                : '';

              throw new Error(
                `Unknown field '${filter.field}' for asset type '${assetType}'.${suggestionText}\n\n` +
                `Use discover_fields(asset_type="${assetType}", search_term="<keyword>") to search available fields.`
              );
            }
            applyFilter(screener, field, filter.op, filter.value);
          }
        }

        // Parse and select fields
        let selectedFields: BaseField[];
        if (fieldsStr) {
          const fieldNames = fieldsStr.split(',').map(f => f.trim());
          selectedFields = fieldNames.map(name => {
            const field = fieldMap[name];
            if (!field) {
              const suggestions = findSimilarFields(fieldMap, name);
              const suggestionText = suggestions.length > 0
                ? `\n\nDid you mean one of these?\n${suggestions.map(f => `  - ${f.name}: ${f.label}`).join('\n')}`
                : '';

              throw new Error(
                `Unknown field '${name}' for asset type '${assetType}'.${suggestionText}\n\n` +
                `Use discover_fields(asset_type="${assetType}", search_term="<keyword>") to search available fields.`
              );
            }
            return field;
          });
          screener.select(...selectedFields);
        } else {
          // Use fallback fields that work across asset types
          const changeField = fieldMap.CHANGE_PERCENT || fieldMap.CHANGE;
          const priceField = fieldMap.PRICE || fieldMap.CLOSE;
          selectedFields = [fieldMap.NAME, priceField, changeField].filter(f => f !== undefined);

          if (selectedFields.length === 0) {
            throw new Error(`Asset type '${assetType}' has no compatible default fields`);
          }
          screener.select(...selectedFields);
        }

        // Apply sorting
        if (sortBy) {
          const sortField = fieldMap[sortBy];
          if (!sortField) {
            const suggestions = findSimilarFields(fieldMap, sortBy);
            const suggestionText = suggestions.length > 0
              ? `\n\nDid you mean one of these?\n${suggestions.map(f => `  - ${f.name}: ${f.label}`).join('\n')}`
              : '';

            throw new Error(
              `Unknown sort field '${sortBy}' for asset type '${assetType}'.${suggestionText}\n\n` +
              `Use discover_fields(asset_type="${assetType}", search_term="<keyword>") to search available fields.`
            );
          }
          screener.sortBy(sortField, ascending);
        }

        screener.setRange(0, limit);
        const results = await screener.get();

        const markdown = formatAsMarkdownTable(results.data, selectedFields);
        return {
          content: [{ type: 'text', text: `${markdown}\n\nTotal: ${results.totalCount} results` }],
        };
      }

      // Tool: search_stocks
      if (name === 'search_stocks') {
        const screener = new StockScreener();

        if (args?.min_price) {
          screener.where(StockField.PRICE.gte(args.min_price as number));
        }
        if (args?.max_price) {
          screener.where(StockField.PRICE.lte(args.max_price as number));
        }
        if (args?.min_market_cap_billions) {
          screener.where(StockField.MARKET_CAPITALIZATION.gte((args.min_market_cap_billions as number) * 1e9));
        }
        if (args?.max_market_cap_billions) {
          screener.where(StockField.MARKET_CAPITALIZATION.lte((args.max_market_cap_billions as number) * 1e9));
        }

        const sortBy = (args?.sort_by as string) || 'market_cap';
        const sortFieldMap: Record<string, BaseField> = {
          market_cap: StockField.MARKET_CAPITALIZATION,
          price: StockField.PRICE,
          volume: StockField.VOLUME,
          change: StockField.CHANGE_PERCENT,
        };

        const selectedFields = [
          StockField.NAME,
          StockField.PRICE,
          StockField.CHANGE_PERCENT,
          StockField.VOLUME,
          StockField.MARKET_CAPITALIZATION,
        ];

        screener
          .select(...selectedFields)
          .sortBy(sortFieldMap[sortBy], false)
          .setRange(0, Math.min((args?.limit as number) || 25, 100));

        const results = await screener.get();
        const markdown = formatAsMarkdownTable(results.data, selectedFields);

        return {
          content: [{ type: 'text', text: `${markdown}\n\nTotal: ${results.totalCount} stocks` }],
        };
      }

      // Tool: search_crypto
      if (name === 'search_crypto') {
        const screener = new CryptoScreener();

        if (args?.min_volume_millions) {
          screener.where(CryptoField.VOLUME_24H_IN_USD.gte((args.min_volume_millions as number) * 1e6));
        }
        if (args?.min_market_cap_billions) {
          screener.where(CryptoField.MARKET_CAP.gte((args.min_market_cap_billions as number) * 1e9));
        }

        const selectedFields = [
          CryptoField.NAME,
          CryptoField.PRICE,
          CryptoField.CHANGE_PERCENT,
          CryptoField.VOLUME_24H_IN_USD,
          CryptoField.MARKET_CAP,
        ];

        screener
          .select(...selectedFields)
          .sortBy(CryptoField.MARKET_CAP, false)
          .setRange(0, Math.min((args?.limit as number) || 25, 100));

        const results = await screener.get();
        const markdown = formatAsMarkdownTable(results.data, selectedFields);

        return {
          content: [{ type: 'text', text: `${markdown}\n\nTotal: ${results.totalCount} cryptocurrencies` }],
        };
      }

      // Tool: search_forex
      if (name === 'search_forex') {
        const screener = new ForexScreener();

        const selectedFields = [
          ForexField.NAME,
          ForexField.PRICE,
          ForexField.CHANGE_PERCENT,
        ];

        screener
          .select(...selectedFields)
          .sortBy(ForexField.CHANGE_PERCENT, false)
          .setRange(0, Math.min((args?.limit as number) || 25, 100));

        const results = await screener.get();
        const markdown = formatAsMarkdownTable(results.data, selectedFields);

        return {
          content: [{ type: 'text', text: `${markdown}\n\nTotal: ${results.totalCount} forex pairs` }],
        };
      }

      // Tool: get_top_movers
      if (name === 'get_top_movers') {
        const assetType = (args?.asset_type as string) || 'stock';
        const direction = (args?.direction as string) || 'gainers';
        const limit = Math.min((args?.limit as number) || 10, 50);

        const { screener, fields: fieldMap } = getScreenerAndFields(assetType);

        // Use fallback for change field (coin uses CHANGE instead of CHANGE_PERCENT)
        const changeField = fieldMap.CHANGE_PERCENT || fieldMap.CHANGE;
        if (!changeField) {
          throw new Error(`Asset type '${assetType}' does not support change percentage tracking`);
        }
        screener.sortBy(changeField, direction === 'losers');

        // Use fallback for price field
        const priceField = fieldMap.PRICE || fieldMap.CLOSE;
        const selectedFields = [
          fieldMap.NAME,
          priceField,
          changeField,
        ].filter(f => f !== undefined);

        screener.select(...selectedFields).setRange(0, limit);

        const results = await screener.get();
        const markdown = formatAsMarkdownTable(results.data, selectedFields);

        return {
          content: [{ type: 'text', text: `Top ${direction} (${assetType}):\n\n${markdown}` }],
        };
      }

      // Tool: list_sectors
      if (name === 'list_sectors') {
        const sectors = [
          'Technology',
          'Healthcare',
          'Financial',
          'Consumer Cyclical',
          'Consumer Defensive',
          'Industrials',
          'Energy',
          'Basic Materials',
          'Communication Services',
          'Utilities',
          'Real Estate',
        ];

        return {
          content: [{
            type: 'text',
            text: `Available stock sectors:\n\n${sectors.map(s => `- ${s}`).join('\n')}`,
          }],
        };
      }

      // Tool: list_filter_operators
      if (name === 'list_filter_operators') {
        const operators = [
          { op: '>=', desc: 'Greater than or equal', example: '{"field": "PRICE", "op": ">=", "value": 100}' },
          { op: '>', desc: 'Greater than', example: '{"field": "VOLUME", "op": ">", "value": 1000000}' },
          { op: '<=', desc: 'Less than or equal', example: '{"field": "PRICE", "op": "<=", "value": 50}' },
          { op: '<', desc: 'Less than', example: '{"field": "MARKET_CAPITALIZATION", "op": "<", "value": 1000000000}' },
          { op: '==', desc: 'Equal', example: '{"field": "NAME", "op": "==", "value": "Apple"}' },
          { op: '!=', desc: 'Not equal', example: '{"field": "NAME", "op": "!=", "value": "Tesla"}' },
          { op: 'match', desc: 'Text match (regex)', example: '{"field": "NAME", "op": "match", "value": "^A"}' },
          { op: 'in_range', desc: 'Between values (inclusive)', example: '{"field": "PRICE", "op": "in_range", "value": [10, 50]}' },
        ];

        let output = 'Available filter operators for custom_query:\n\n';
        for (const { op, desc, example } of operators) {
          output += `**${op}** - ${desc}\n`;
          output += `Example: \`${example}\`\n\n`;
        }

        return {
          content: [{ type: 'text', text: output }],
        };
      }

      throw new Error(`Unknown tool: ${name}`);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);

      // Add helpful context for field-related errors
      const enhancedMessage = errorMessage.includes('Unknown field')
        ? errorMessage + '\n\nTip: Field names vary by asset type. Use discover_fields to search available fields.'
        : errorMessage;

      return {
        content: [
          {
            type: 'text',
            text: `Error: ${enhancedMessage}`,
          },
        ],
        isError: true,
      };
    }
  });

  // Start server
  const transport = new StdioServerTransport();
  await mcpServer.connect(transport);

  console.error('TradingView Screener MCP server running');
}

main().catch((error) => {
  console.error('Server error:', error);
  process.exit(1);
});
