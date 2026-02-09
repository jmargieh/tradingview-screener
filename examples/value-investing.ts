/**
 * Value Investing Example - Find undervalued stocks
 */

import { StockScreener, StockField } from '../src/index.js';

async function main() {
  console.log('TradingView Screener - Value Investing Example\n');
  console.log('Searching for undervalued stocks with strong fundamentals...\n');

  const screener = new StockScreener();

  // Value investing criteria:
  // - P/E ratio < 15 (not too expensive)
  // - P/B ratio < 3 (trading below book value multiple)
  // - Market cap > $1B (established companies)
  // - Dividend yield > 2% (income generation)
  // - Positive earnings

  screener
    .where(StockField.PRICE_TO_EARNINGS_RATIO_TTM.lt(15))
    .where(StockField.PRICE_TO_BOOK_MRQ.lt(3))
    .where(StockField.MARKET_CAPITALIZATION.gte(1e9))
    .where(StockField.DIVIDEND_YIELD_FWD.gte(2))
    .where(StockField.EARNINGS_PER_SHARE_DILUTED_TTM.gt(0))
    .select(
      StockField.NAME,
      StockField.PRICE,
      StockField.MARKET_CAPITALIZATION,
      StockField.PRICE_TO_EARNINGS_RATIO_TTM,
      StockField.PRICE_TO_BOOK_MRQ,
      StockField.DIVIDEND_YIELD_FWD,
      StockField.EARNINGS_PER_SHARE_DILUTED_TTM,
      StockField.REVENUE_TTM,
      StockField.NET_INCOME_TTM
    )
    .sortBy(StockField.PRICE_TO_EARNINGS_RATIO_TTM, true) // Lowest P/E first
    .setRange(0, 25);

  console.log('Executing query...\n');
  const results = await screener.get();

  console.log(`Found ${results.totalCount} value stocks\n`);
  console.log('Top 25 Value Opportunities:');
  console.table(results.data);

  // Calculate average metrics
  const avgPE = results.data.reduce((sum, row) => sum + (row.price_earnings_ttm || 0), 0) / results.data.length;
  const avgPB = results.data.reduce((sum, row) => sum + (row.price_book_fq || 0), 0) / results.data.length;
  const avgDivYield = results.data.reduce((sum, row) => sum + (row.dividend_yield_forward || 0), 0) / results.data.length;

  console.log('\nAverage Metrics:');
  console.log(`  P/E Ratio: ${avgPE.toFixed(2)}`);
  console.log(`  P/B Ratio: ${avgPB.toFixed(2)}`);
  console.log(`  Dividend Yield: ${avgDivYield.toFixed(2)}%`);
}

main().catch(console.error);
