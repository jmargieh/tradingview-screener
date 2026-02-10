import { BaseField } from './BaseField.js';

/**
 * Stock field definitions
 * NOTE: This file should be generated from field data.
 * For now, it contains a minimal set of common fields.
 */

// Common stock fields (placeholder - will be generated)
export const StockField = {
  NAME: new BaseField('NAME', {
    label: 'Name',
    fieldName: 'name',
    format: 'text',
    interval: false,
    historical: false,
  }),

  DESCRIPTION: new BaseField('DESCRIPTION', {
    label: 'Description',
    fieldName: 'description',
    format: 'text',
    interval: false,
    historical: false,
  }),

  PRICE: new BaseField('PRICE', {
    label: 'Price',
    fieldName: 'close',
    format: 'currency',
    interval: true,
    historical: false,
  }),

  CHANGE: new BaseField('CHANGE', {
    label: 'Change',
    fieldName: 'change',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  CHANGE_PERCENT: new BaseField('CHANGE_PERCENT', {
    label: 'Change %',
    fieldName: 'change_abs',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  VOLUME: new BaseField('VOLUME', {
    label: 'Volume',
    fieldName: 'volume',
    format: 'number_group',
    interval: false,
    historical: false,
  }),

  MARKET_CAPITALIZATION: new BaseField('MARKET_CAPITALIZATION', {
    label: 'Market Cap',
    fieldName: 'market_cap_basic',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  PRICE_TO_EARNINGS_RATIO_TTM: new BaseField('PRICE_TO_EARNINGS_RATIO_TTM', {
    label: 'P/E Ratio (TTM)',
    fieldName: 'price_earnings_ttm',
    format: 'float',
    interval: false,
    historical: false,
  }),

  PRICE_EARNINGS_GROWTH_TTM: new BaseField('PRICE_EARNINGS_GROWTH_TTM', {
    label: 'PEG Ratio (TTM)',
    fieldName: 'price_earnings_growth_ttm',
    format: 'round',
    interval: false,
    historical: false,
  }),

  PRICE_SALES_CURRENT: new BaseField('PRICE_SALES_CURRENT', {
    label: 'Price Sales Current',
    fieldName: 'price_sales_current',
    format: 'round',
    interval: false,
    historical: false,
  }),

  PRICE_TO_BOOK_MRQ: new BaseField('PRICE_TO_BOOK_MRQ', {
    label: 'P/B Ratio',
    fieldName: 'price_book_fq',
    format: 'float',
    interval: false,
    historical: false,
  }),

  ENTERPRISE_VALUE_EBITDA_TTM: new BaseField('ENTERPRISE_VALUE_EBITDA_TTM', {
    label: 'EV/EBITDA',
    fieldName: 'enterprise_value_ebitda_ttm',
    format: 'float',
    interval: false,
    historical: false,
  }),

  DIVIDEND_YIELD_FWD: new BaseField('DIVIDEND_YIELD_FWD', {
    label: 'Dividend Yield (Forward)',
    fieldName: 'dividend_yield_forward',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  DIVIDENDS_YIELD_FY: new BaseField('DIVIDENDS_YIELD_FY', {
    label: 'Dividends Yield FY',
    fieldName: 'dividends_yield_fy',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  DPS_COMMON_STOCK_PRIM_ISSUE_TTM: new BaseField('DPS_COMMON_STOCK_PRIM_ISSUE_TTM', {
    label: 'Dividend Per Share TTM',
    fieldName: 'dps_common_stock_prim_issue_ttm',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  EARNINGS_PER_SHARE_DILUTED_TTM: new BaseField('EARNINGS_PER_SHARE_DILUTED_TTM', {
    label: 'EPS Diluted (TTM)',
    fieldName: 'earnings_per_share_diluted_ttm',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  REVENUE_TTM: new BaseField('REVENUE_TTM', {
    label: 'Revenue (TTM)',
    fieldName: 'total_revenue_ttm',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  REVENUE_TTM_YOY_GROWTH: new BaseField('REVENUE_TTM_YOY_GROWTH', {
    label: 'Revenue (TTM YoY Growth)',
    fieldName: 'total_revenue_yoy_growth_ttm',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  NET_INCOME_TTM: new BaseField('NET_INCOME_TTM', {
    label: 'Net Income (TTM)',
    fieldName: 'net_income_ttm',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  // Technical indicators
  RSI: new BaseField('RSI', {
    label: 'RSI',
    fieldName: 'RSI',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ATR: new BaseField('ATR', {
    label: 'ATR',
    fieldName: 'ATR',
    format: 'float',
    interval: true,
    historical: false,
  }),

  // Add more fields here...
} as const;

export type StockFieldValue = typeof StockField[keyof typeof StockField];
