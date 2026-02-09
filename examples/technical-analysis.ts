/**
 * Technical Analysis Example - Find stocks with strong momentum
 */

import { StockScreener, StockField } from '../src/index.js';

async function main() {
  console.log('TradingView Screener - Technical Analysis Example\n');
  console.log('Searching for stocks with strong technical momentum...\n');

  const screener = new StockScreener();

  // Technical momentum criteria:
  // - RSI between 40-60 (not overbought/oversold)
  // - Price > $20 (avoid penny stocks)
  // - Volume > 500K (good liquidity)
  // - Market cap > $500M
  // - Positive price change

  screener
    .where(StockField.RSI.between(40, 60))
    .where(StockField.PRICE.gt(20))
    .where(StockField.VOLUME.gte(500_000))
    .where(StockField.MARKET_CAPITALIZATION.gte(500_000_000))
    .where(StockField.CHANGE_PERCENT.gt(0))
    .select(
      StockField.NAME,
      StockField.PRICE,
      StockField.CHANGE,
      StockField.CHANGE_PERCENT,
      StockField.VOLUME,
      StockField.RSI,
      StockField.ATR,
      StockField.MARKET_CAPITALIZATION
    )
    .sortBy(StockField.CHANGE_PERCENT, false) // Biggest gainers first
    .setRange(0, 30);

  console.log('Executing query...\n');
  const results = await screener.get();

  console.log(`Found ${results.totalCount} momentum stocks\n`);
  console.log('Top 30 Technical Momentum Stocks:');
  console.table(results.data);

  // Analyze momentum strength
  const strongMomentum = results.data.filter(row => row.change_abs > 3);
  const avgRSI = results.data.reduce((sum, row) => sum + (row.RSI || 0), 0) / results.data.length;

  console.log('\nMomentum Analysis:');
  console.log(`  Strong momentum (>3% gain): ${strongMomentum.length} stocks`);
  console.log(`  Average RSI: ${avgRSI.toFixed(2)}`);
  console.log(`  Average daily gain: ${(results.data.reduce((sum, row) => sum + (row.change_abs || 0), 0) / results.data.length).toFixed(2)}%`);

  // Demonstrate streaming (uncomment to enable)
  /*
  console.log('\n--- Starting live stream (Ctrl+C to stop) ---\n');

  for await (const data of screener.stream({ interval: 10000 })) {
    if (data) {
      const topStock = data.data[0];
      console.log(`[${new Date().toLocaleTimeString()}] Top: ${topStock.name} - ${topStock.close} (${topStock.change_abs}%)`);
    }
  }
  */
}

main().catch(console.error);
