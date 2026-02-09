#!/usr/bin/env node

/**
 * MCP Server for TradingView Screener
 * Model Context Protocol integration for Claude
 */

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  ListToolsRequestSchema,
  CallToolRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';

// Import screeners
import { StockScreener, CryptoScreener } from '../index.js';
import { StockField } from '../fields/StockField.js';
import { CryptoField } from '../fields/CryptoField.js';

/**
 * Create and configure MCP server
 */
async function main() {
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

  // Register list tools handler
  server.setRequestHandler(ListToolsRequestSchema, async () => ({
    tools: [
      {
        name: 'search_stocks',
        description: 'Search stocks with filters',
        inputSchema: {
          type: 'object',
          properties: {
            minPrice: { type: 'number', description: 'Minimum price' },
            maxPrice: { type: 'number', description: 'Maximum price' },
            minVolume: { type: 'number', description: 'Minimum volume' },
            minMarketCap: { type: 'number', description: 'Minimum market cap' },
            maxMarketCap: { type: 'number', description: 'Maximum market cap' },
            limit: { type: 'number', description: 'Number of results', default: 20 },
          },
        },
      },
      {
        name: 'search_crypto',
        description: 'Search cryptocurrencies with filters',
        inputSchema: {
          type: 'object',
          properties: {
            minPrice: { type: 'number', description: 'Minimum price' },
            minVolume24h: { type: 'number', description: 'Minimum 24h volume' },
            minMarketCap: { type: 'number', description: 'Minimum market cap' },
            limit: { type: 'number', description: 'Number of results', default: 20 },
          },
        },
      },
    ],
  }));

  // Register call tool handler
  server.setRequestHandler(CallToolRequestSchema, async (request) => {
    const { name, arguments: args } = request.params;

    try {
      if (name === 'search_stocks') {
        const screener = new StockScreener();

        if (args?.minPrice) screener.where(StockField.PRICE.gte(args.minPrice as number));
        if (args?.maxPrice) screener.where(StockField.PRICE.lte(args.maxPrice as number));
        if (args?.minVolume) screener.where(StockField.VOLUME.gte(args.minVolume as number));
        if (args?.minMarketCap) {
          screener.where(StockField.MARKET_CAPITALIZATION.gte(args.minMarketCap as number));
        }
        if (args?.maxMarketCap) {
          screener.where(StockField.MARKET_CAPITALIZATION.lte(args.maxMarketCap as number));
        }

        screener
          .select(
            StockField.NAME,
            StockField.PRICE,
            StockField.CHANGE_PERCENT,
            StockField.VOLUME,
            StockField.MARKET_CAPITALIZATION
          )
          .setRange(0, (args?.limit as number) || 20);

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

      if (name === 'search_crypto') {
        const screener = new CryptoScreener();

        if (args?.minPrice) screener.where(CryptoField.PRICE.gte(args.minPrice as number));
        if (args?.minVolume24h) {
          screener.where(CryptoField.VOLUME_24H_IN_USD.gte(args.minVolume24h as number));
        }
        if (args?.minMarketCap) {
          screener.where(CryptoField.MARKET_CAP.gte(args.minMarketCap as number));
        }

        screener
          .select(
            CryptoField.NAME,
            CryptoField.PRICE,
            CryptoField.CHANGE_PERCENT,
            CryptoField.VOLUME_24H_IN_USD,
            CryptoField.MARKET_CAP
          )
          .setRange(0, (args?.limit as number) || 20);

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
            text: `Error: ${error instanceof Error ? error.message : String(error)}`,
          },
        ],
        isError: true,
      };
    }
  });

  // Start server
  const transport = new StdioServerTransport();
  await server.connect(transport);

  console.error('TradingView Screener MCP server running');
}

main().catch((error) => {
  console.error('Server error:', error);
  process.exit(1);
});
