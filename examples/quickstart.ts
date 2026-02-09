/**
 * Quickstart example for TradingView Screener API
 */

import { StockScreener, StockField } from '../src/index.js';

async function main() {
  console.log('TradingView Screener - Quickstart Example\n');

  // Create a stock screener
  const screener = new StockScreener();

  // Build a query: Large cap stocks with good volume
  screener
    .where(StockField.MARKET_CAPITALIZATION.between(1e9, 100e9))
    .where(StockField.PRICE.gt(10))
    .where(StockField.VOLUME.gte(1_000_000))
    .select(
      StockField.NAME,
      StockField.PRICE,
      StockField.CHANGE_PERCENT,
      StockField.VOLUME,
      StockField.MARKET_CAPITALIZATION
    )
    .sortBy(StockField.MARKET_CAPITALIZATION, false)
    .setRange(0, 20);

  // Execute query
  console.log('Fetching data...\n');
  const results = await screener.get();

  console.log(`Found ${results.totalCount} stocks\n`);
  console.log('Top 20 Results:');
  console.table(results.data);
}

main().catch(console.error);
