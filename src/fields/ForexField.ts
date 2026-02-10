import { BaseField } from './BaseField.js';

/**
 * Forex field definitions - Complete field set from TradingView API
 * 
 * Total fields: 2,965
 * Source: https://github.com/deepentropy/tvscreener
 * 
 * Categories:
 * - Basic Information
 * - Price & Volume
 * - Technical Indicators
 * - Moving Averages
 * - Oscillators
 * - Volatility
 * - Momentum
 * - Candlestick Patterns
 * - Pivot Points
 * - Performance Metrics
 * - Volume Indicators
 * - Market Data
 */

export const ForexField = {
  // === Basic Information (34 fields) ===

  PERF_1M_MARKETCAP: new BaseField('PERF_1M_MARKETCAP', {
    label: 'Perf 1M Marketcap',
    fieldName: 'Perf.1M.MarketCap',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  PERF_1W_MARKETCAP: new BaseField('PERF_1W_MARKETCAP', {
    label: 'Perf 1W Marketcap',
    fieldName: 'Perf.1W.MarketCap',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  PERF_1Y_MARKETCAP: new BaseField('PERF_1Y_MARKETCAP', {
    label: 'Perf 1Y Marketcap',
    fieldName: 'Perf.1Y.MarketCap',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  PERF_3M_MARKETCAP: new BaseField('PERF_3M_MARKETCAP', {
    label: 'Perf 3M Marketcap',
    fieldName: 'Perf.3M.MarketCap',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  PERF_5Y_MARKETCAP: new BaseField('PERF_5Y_MARKETCAP', {
    label: 'Perf 5Y Marketcap',
    fieldName: 'Perf.5Y.MarketCap',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  PERF_6M_MARKETCAP: new BaseField('PERF_6M_MARKETCAP', {
    label: 'Perf 6M Marketcap',
    fieldName: 'Perf.6M.MarketCap',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  PERF_YTD_MARKETCAP: new BaseField('PERF_YTD_MARKETCAP', {
    label: 'Perf YTD Marketcap',
    fieldName: 'Perf.YTD.MarketCap',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  CRYPTOASSET_MINUS_INFO_DESCRIPTION: new BaseField('CRYPTOASSET_MINUS_INFO_DESCRIPTION', {
    label: 'Cryptoasset-Info Description',
    fieldName: 'cryptoasset-info.description',
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

  LOGOID: new BaseField('LOGOID', {
    label: 'Logoid',
    fieldName: 'logoid',
    format: 'text',
    interval: false,
    historical: false,
  }),

  MARKET: new BaseField('MARKET', {
    label: 'Market',
    fieldName: 'market',
    format: 'float',
    interval: false,
    historical: false,
  }),

  NAME: new BaseField('NAME', {
    label: 'Name',
    fieldName: 'name',
    format: 'text',
    interval: false,
    historical: false,
  }),

  POSTMARKET_CHANGE: new BaseField('POSTMARKET_CHANGE', {
    label: 'Postmarket Change',
    fieldName: 'postmarket_change',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  POSTMARKET_CHANGE_ABS: new BaseField('POSTMARKET_CHANGE_ABS', {
    label: 'Postmarket Change Abs',
    fieldName: 'postmarket_change_abs',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  PREMARKET_CHANGE: new BaseField('PREMARKET_CHANGE', {
    label: 'Premarket Change',
    fieldName: 'premarket_change',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  PREMARKET_CHANGE_ABS: new BaseField('PREMARKET_CHANGE_ABS', {
    label: 'Premarket Change Abs',
    fieldName: 'premarket_change_abs',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  PREMARKET_CHANGE_FROM_OPEN: new BaseField('PREMARKET_CHANGE_FROM_OPEN', {
    label: 'Premarket Change From Open',
    fieldName: 'premarket_change_from_open',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  PREMARKET_CHANGE_FROM_OPEN_ABS: new BaseField('PREMARKET_CHANGE_FROM_OPEN_ABS', {
    label: 'Premarket Change From Open Abs',
    fieldName: 'premarket_change_from_open_abs',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  PREMARKET_GAP: new BaseField('PREMARKET_GAP', {
    label: 'Premarket Gap',
    fieldName: 'premarket_gap',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SOURCE_MINUS_LOGOID: new BaseField('SOURCE_MINUS_LOGOID', {
    label: 'Source-Logoid',
    fieldName: 'source-logoid',
    format: 'text',
    interval: false,
    historical: false,
  }),

  SUBMARKET: new BaseField('SUBMARKET', {
    label: 'Submarket',
    fieldName: 'submarket',
    format: 'float',
    interval: false,
    historical: false,
  }),

  SUBTYPE: new BaseField('SUBTYPE', {
    label: 'Subtype',
    fieldName: 'subtype',
    format: 'text',
    interval: false,
    historical: false,
  }),

  TYPE: new BaseField('TYPE', {
    label: 'Type',
    fieldName: 'type',
    format: 'text',
    interval: false,
    historical: false,
  }),

  TYPESPECS: new BaseField('TYPESPECS', {
    label: 'Typespecs',
    fieldName: 'typespecs',
    format: 'text',
    interval: false,
    historical: false,
  }),

  UPDATE_MODE: new BaseField('UPDATE_MODE', {
    label: 'Update Mode',
    fieldName: 'update_mode',
    format: 'date',
    interval: false,
    historical: false,
  }),

  UPDATE_MODE_1: new BaseField('UPDATE_MODE_1', {
    label: 'Update Mode|1',
    fieldName: 'update_mode|1',
    format: 'date',
    interval: false,
    historical: false,
  }),

  UPDATE_MODE_120: new BaseField('UPDATE_MODE_120', {
    label: 'Update Mode|120',
    fieldName: 'update_mode|120',
    format: 'date',
    interval: false,
    historical: false,
  }),

  UPDATE_MODE_15: new BaseField('UPDATE_MODE_15', {
    label: 'Update Mode|15',
    fieldName: 'update_mode|15',
    format: 'date',
    interval: false,
    historical: false,
  }),

  UPDATE_MODE_1M: new BaseField('UPDATE_MODE_1M', {
    label: 'Update Mode|1M',
    fieldName: 'update_mode|1M',
    format: 'date',
    interval: false,
    historical: false,
  }),

  UPDATE_MODE_1W: new BaseField('UPDATE_MODE_1W', {
    label: 'Update Mode|1W',
    fieldName: 'update_mode|1W',
    format: 'date',
    interval: false,
    historical: false,
  }),

  UPDATE_MODE_240: new BaseField('UPDATE_MODE_240', {
    label: 'Update Mode|240',
    fieldName: 'update_mode|240',
    format: 'date',
    interval: false,
    historical: false,
  }),

  UPDATE_MODE_30: new BaseField('UPDATE_MODE_30', {
    label: 'Update Mode|30',
    fieldName: 'update_mode|30',
    format: 'date',
    interval: false,
    historical: false,
  }),

  UPDATE_MODE_5: new BaseField('UPDATE_MODE_5', {
    label: 'Update Mode|5',
    fieldName: 'update_mode|5',
    format: 'date',
    interval: false,
    historical: false,
  }),

  UPDATE_MODE_60: new BaseField('UPDATE_MODE_60', {
    label: 'Update Mode|60',
    fieldName: 'update_mode|60',
    format: 'date',
    interval: false,
    historical: false,
  }),

  // === Price & Volume (280 fields) ===

  CHAIKINMONEYFLOW: new BaseField('CHAIKINMONEYFLOW', {
    label: 'Chaikinmoneyflow',
    fieldName: 'ChaikinMoneyFlow',
    format: 'float',
    interval: true,
    historical: false,
  }),

  CHAIKINMONEYFLOW_1: new BaseField('CHAIKINMONEYFLOW_1', {
    label: 'Chaikinmoneyflow|1',
    fieldName: 'ChaikinMoneyFlow|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  CHAIKINMONEYFLOW_120: new BaseField('CHAIKINMONEYFLOW_120', {
    label: 'Chaikinmoneyflow|120',
    fieldName: 'ChaikinMoneyFlow|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  CHAIKINMONEYFLOW_15: new BaseField('CHAIKINMONEYFLOW_15', {
    label: 'Chaikinmoneyflow|15',
    fieldName: 'ChaikinMoneyFlow|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  CHAIKINMONEYFLOW_1M: new BaseField('CHAIKINMONEYFLOW_1M', {
    label: 'Chaikinmoneyflow|1M',
    fieldName: 'ChaikinMoneyFlow|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  CHAIKINMONEYFLOW_1W: new BaseField('CHAIKINMONEYFLOW_1W', {
    label: 'Chaikinmoneyflow|1W',
    fieldName: 'ChaikinMoneyFlow|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  CHAIKINMONEYFLOW_240: new BaseField('CHAIKINMONEYFLOW_240', {
    label: 'Chaikinmoneyflow|240',
    fieldName: 'ChaikinMoneyFlow|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  CHAIKINMONEYFLOW_30: new BaseField('CHAIKINMONEYFLOW_30', {
    label: 'Chaikinmoneyflow|30',
    fieldName: 'ChaikinMoneyFlow|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  CHAIKINMONEYFLOW_5: new BaseField('CHAIKINMONEYFLOW_5', {
    label: 'Chaikinmoneyflow|5',
    fieldName: 'ChaikinMoneyFlow|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  CHAIKINMONEYFLOW_60: new BaseField('CHAIKINMONEYFLOW_60', {
    label: 'Chaikinmoneyflow|60',
    fieldName: 'ChaikinMoneyFlow|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  DONCHIAN_CHANNELS_LOWER_BAND_20: new BaseField('DONCHIAN_CHANNELS_LOWER_BAND_20', {
    label: 'Donchian Channels Lower Band (20)',
    fieldName: 'DonchCh20.Lower',
    format: 'float',
    interval: true,
    historical: false,
  }),

  DONCHCH20_LOWER_1: new BaseField('DONCHCH20_LOWER_1', {
    label: 'Donchch20 Lower|1',
    fieldName: 'DonchCh20.Lower|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  DONCHCH20_LOWER_120: new BaseField('DONCHCH20_LOWER_120', {
    label: 'Donchch20 Lower|120',
    fieldName: 'DonchCh20.Lower|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  DONCHCH20_LOWER_15: new BaseField('DONCHCH20_LOWER_15', {
    label: 'Donchch20 Lower|15',
    fieldName: 'DonchCh20.Lower|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  DONCHCH20_LOWER_1M: new BaseField('DONCHCH20_LOWER_1M', {
    label: 'Donchch20 Lower|1M',
    fieldName: 'DonchCh20.Lower|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  DONCHCH20_LOWER_1W: new BaseField('DONCHCH20_LOWER_1W', {
    label: 'Donchch20 Lower|1W',
    fieldName: 'DonchCh20.Lower|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  DONCHCH20_LOWER_240: new BaseField('DONCHCH20_LOWER_240', {
    label: 'Donchch20 Lower|240',
    fieldName: 'DonchCh20.Lower|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  DONCHCH20_LOWER_30: new BaseField('DONCHCH20_LOWER_30', {
    label: 'Donchch20 Lower|30',
    fieldName: 'DonchCh20.Lower|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  DONCHCH20_LOWER_5: new BaseField('DONCHCH20_LOWER_5', {
    label: 'Donchch20 Lower|5',
    fieldName: 'DonchCh20.Lower|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  DONCHCH20_LOWER_60: new BaseField('DONCHCH20_LOWER_60', {
    label: 'Donchch20 Lower|60',
    fieldName: 'DonchCh20.Lower|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  MONTH_HIGH_1: new BaseField('MONTH_HIGH_1', {
    label: '1-Month High',
    fieldName: 'High.1M',
    format: 'float',
    interval: false,
    historical: false,
  }),

  HIGH_1M_DATE: new BaseField('HIGH_1M_DATE', {
    label: 'High 1M Date',
    fieldName: 'High.1M.Date',
    format: 'date',
    interval: true,
    historical: false,
  }),

  MONTH_HIGH_3: new BaseField('MONTH_HIGH_3', {
    label: '3-Month High',
    fieldName: 'High.3M',
    format: 'float',
    interval: false,
    historical: false,
  }),

  HIGH_3M_DATE: new BaseField('HIGH_3M_DATE', {
    label: 'High 3M Date',
    fieldName: 'High.3M.Date',
    format: 'date',
    interval: true,
    historical: false,
  }),

  HIGH_5D: new BaseField('HIGH_5D', {
    label: 'High 5D',
    fieldName: 'High.5D',
    format: 'float',
    interval: true,
    historical: false,
  }),

  MONTH_HIGH_6: new BaseField('MONTH_HIGH_6', {
    label: '6-Month High',
    fieldName: 'High.6M',
    format: 'float',
    interval: false,
    historical: false,
  }),

  HIGH_6M_DATE: new BaseField('HIGH_6M_DATE', {
    label: 'High 6M Date',
    fieldName: 'High.6M.Date',
    format: 'date',
    interval: true,
    historical: false,
  }),

  ALL_TIME_HIGH: new BaseField('ALL_TIME_HIGH', {
    label: 'All Time High',
    fieldName: 'High.All',
    format: 'float',
    interval: false,
    historical: false,
  }),

  HIGH_ALL_CALC: new BaseField('HIGH_ALL_CALC', {
    label: 'High All Calc',
    fieldName: 'High.All.Calc',
    format: 'float',
    interval: true,
    historical: false,
  }),

  HIGH_ALL_CALC_DATE: new BaseField('HIGH_ALL_CALC_DATE', {
    label: 'High All Calc Date',
    fieldName: 'High.All.Calc.Date',
    format: 'date',
    interval: true,
    historical: false,
  }),

  HIGH_ALL_DATE: new BaseField('HIGH_ALL_DATE', {
    label: 'High All Date',
    fieldName: 'High.All.Date',
    format: 'date',
    interval: true,
    historical: false,
  }),

  KELTNER_CHANNELS_LOWER_BAND_20: new BaseField('KELTNER_CHANNELS_LOWER_BAND_20', {
    label: 'Keltner Channels Lower Band (20)',
    fieldName: 'KltChnl.lower',
    format: 'float',
    interval: true,
    historical: false,
  }),

  KLTCHNL_LOWER_1: new BaseField('KLTCHNL_LOWER_1', {
    label: 'Kltchnl Lower|1',
    fieldName: 'KltChnl.lower|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  KLTCHNL_LOWER_120: new BaseField('KLTCHNL_LOWER_120', {
    label: 'Kltchnl Lower|120',
    fieldName: 'KltChnl.lower|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  KLTCHNL_LOWER_15: new BaseField('KLTCHNL_LOWER_15', {
    label: 'Kltchnl Lower|15',
    fieldName: 'KltChnl.lower|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  KLTCHNL_LOWER_1M: new BaseField('KLTCHNL_LOWER_1M', {
    label: 'Kltchnl Lower|1M',
    fieldName: 'KltChnl.lower|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  KLTCHNL_LOWER_1W: new BaseField('KLTCHNL_LOWER_1W', {
    label: 'Kltchnl Lower|1W',
    fieldName: 'KltChnl.lower|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  KLTCHNL_LOWER_240: new BaseField('KLTCHNL_LOWER_240', {
    label: 'Kltchnl Lower|240',
    fieldName: 'KltChnl.lower|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  KLTCHNL_LOWER_30: new BaseField('KLTCHNL_LOWER_30', {
    label: 'Kltchnl Lower|30',
    fieldName: 'KltChnl.lower|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  KLTCHNL_LOWER_5: new BaseField('KLTCHNL_LOWER_5', {
    label: 'Kltchnl Lower|5',
    fieldName: 'KltChnl.lower|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  KLTCHNL_LOWER_60: new BaseField('KLTCHNL_LOWER_60', {
    label: 'Kltchnl Lower|60',
    fieldName: 'KltChnl.lower|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  MONTH_LOW_1: new BaseField('MONTH_LOW_1', {
    label: '1-Month Low',
    fieldName: 'Low.1M',
    format: 'float',
    interval: false,
    historical: false,
  }),

  LOW_1M_DATE: new BaseField('LOW_1M_DATE', {
    label: 'Low 1M Date',
    fieldName: 'Low.1M.Date',
    format: 'date',
    interval: true,
    historical: false,
  }),

  MONTH_LOW_3: new BaseField('MONTH_LOW_3', {
    label: '3-Month Low',
    fieldName: 'Low.3M',
    format: 'float',
    interval: false,
    historical: false,
  }),

  LOW_3M_DATE: new BaseField('LOW_3M_DATE', {
    label: 'Low 3M Date',
    fieldName: 'Low.3M.Date',
    format: 'date',
    interval: true,
    historical: false,
  }),

  LOW_5D: new BaseField('LOW_5D', {
    label: 'Low 5D',
    fieldName: 'Low.5D',
    format: 'float',
    interval: true,
    historical: false,
  }),

  MONTH_LOW_6: new BaseField('MONTH_LOW_6', {
    label: '6-Month Low',
    fieldName: 'Low.6M',
    format: 'float',
    interval: false,
    historical: false,
  }),

  LOW_6M_DATE: new BaseField('LOW_6M_DATE', {
    label: 'Low 6M Date',
    fieldName: 'Low.6M.Date',
    format: 'date',
    interval: true,
    historical: false,
  }),

  LOW_AFTER_HIGH_ALL: new BaseField('LOW_AFTER_HIGH_ALL', {
    label: 'Low After High All',
    fieldName: 'Low.After.High.All',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ALL_TIME_LOW: new BaseField('ALL_TIME_LOW', {
    label: 'All Time Low',
    fieldName: 'Low.All',
    format: 'float',
    interval: false,
    historical: false,
  }),

  LOW_ALL_CALC: new BaseField('LOW_ALL_CALC', {
    label: 'Low All Calc',
    fieldName: 'Low.All.Calc',
    format: 'float',
    interval: true,
    historical: false,
  }),

  LOW_ALL_CALC_DATE: new BaseField('LOW_ALL_CALC_DATE', {
    label: 'Low All Calc Date',
    fieldName: 'Low.All.Calc.Date',
    format: 'date',
    interval: true,
    historical: false,
  }),

  LOW_ALL_DATE: new BaseField('LOW_ALL_DATE', {
    label: 'Low All Date',
    fieldName: 'Low.All.Date',
    format: 'date',
    interval: true,
    historical: false,
  }),

  MONEYFLOW: new BaseField('MONEYFLOW', {
    label: 'Moneyflow',
    fieldName: 'MoneyFlow',
    format: 'float',
    interval: true,
    historical: false,
  }),

  MONEYFLOW_1: new BaseField('MONEYFLOW_1', {
    label: 'Moneyflow|1',
    fieldName: 'MoneyFlow|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  MONEYFLOW_120: new BaseField('MONEYFLOW_120', {
    label: 'Moneyflow|120',
    fieldName: 'MoneyFlow|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  MONEYFLOW_15: new BaseField('MONEYFLOW_15', {
    label: 'Moneyflow|15',
    fieldName: 'MoneyFlow|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  MONEYFLOW_1M: new BaseField('MONEYFLOW_1M', {
    label: 'Moneyflow|1M',
    fieldName: 'MoneyFlow|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  MONEYFLOW_1W: new BaseField('MONEYFLOW_1W', {
    label: 'Moneyflow|1W',
    fieldName: 'MoneyFlow|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  MONEYFLOW_240: new BaseField('MONEYFLOW_240', {
    label: 'Moneyflow|240',
    fieldName: 'MoneyFlow|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  MONEYFLOW_30: new BaseField('MONEYFLOW_30', {
    label: 'Moneyflow|30',
    fieldName: 'MoneyFlow|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  MONEYFLOW_5: new BaseField('MONEYFLOW_5', {
    label: 'Moneyflow|5',
    fieldName: 'MoneyFlow|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  MONEYFLOW_60: new BaseField('MONEYFLOW_60', {
    label: 'Moneyflow|60',
    fieldName: 'MoneyFlow|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  OPEN_ALL_CALC: new BaseField('OPEN_ALL_CALC', {
    label: 'Open All Calc',
    fieldName: 'Open.All.Calc',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PERF_10Y: new BaseField('PERF_10Y', {
    label: 'Perf 10Y',
    fieldName: 'Perf.10Y',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  MONTHLY_PERFORMANCE: new BaseField('MONTHLY_PERFORMANCE', {
    label: 'Monthly Performance',
    fieldName: 'Perf.1M',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  MONTH_PERFORMANCE_3: new BaseField('MONTH_PERFORMANCE_3', {
    label: '3-Month Performance',
    fieldName: 'Perf.3M',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  PERF_3Y: new BaseField('PERF_3Y', {
    label: 'Perf 3Y',
    fieldName: 'Perf.3Y',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  PERF_5D: new BaseField('PERF_5D', {
    label: 'Perf 5D',
    fieldName: 'Perf.5D',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  Y_PERFORMANCE_5: new BaseField('Y_PERFORMANCE_5', {
    label: '5Y Performance',
    fieldName: 'Perf.5Y',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  MONTH_PERFORMANCE_6: new BaseField('MONTH_PERFORMANCE_6', {
    label: '6-Month Performance',
    fieldName: 'Perf.6M',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  ALL_TIME_PERFORMANCE: new BaseField('ALL_TIME_PERFORMANCE', {
    label: 'All Time Performance',
    fieldName: 'Perf.All',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  WEEKLY_PERFORMANCE: new BaseField('WEEKLY_PERFORMANCE', {
    label: 'Weekly Performance',
    fieldName: 'Perf.W',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  YEARLY_PERFORMANCE: new BaseField('YEARLY_PERFORMANCE', {
    label: 'Yearly Performance',
    fieldName: 'Perf.Y',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  YTD_PERFORMANCE: new BaseField('YTD_PERFORMANCE', {
    label: 'YTD Performance',
    fieldName: 'Perf.YTD',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  ALL_TIME_HIGH_2: new BaseField('ALL_TIME_HIGH_2', {
    label: 'All Time High',
    fieldName: 'all_time_high',
    format: 'date',
    interval: true,
    historical: false,
  }),

  ALL_TIME_HIGH_DAY: new BaseField('ALL_TIME_HIGH_DAY', {
    label: 'All Time High Day',
    fieldName: 'all_time_high_day',
    format: 'date',
    interval: true,
    historical: false,
  }),

  ALL_TIME_LOW_2: new BaseField('ALL_TIME_LOW_2', {
    label: 'All Time Low',
    fieldName: 'all_time_low',
    format: 'date',
    interval: true,
    historical: false,
  }),

  ALL_TIME_LOW_DAY: new BaseField('ALL_TIME_LOW_DAY', {
    label: 'All Time Low Day',
    fieldName: 'all_time_low_day',
    format: 'date',
    interval: true,
    historical: false,
  }),

  ALL_TIME_OPEN: new BaseField('ALL_TIME_OPEN', {
    label: 'All Time Open',
    fieldName: 'all_time_open',
    format: 'date',
    interval: true,
    historical: false,
  }),

  AUM_PERF_1M: new BaseField('AUM_PERF_1M', {
    label: 'Aum Perf 1M',
    fieldName: 'aum_perf.1M',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  AUM_PERF_1Y: new BaseField('AUM_PERF_1Y', {
    label: 'Aum Perf 1Y',
    fieldName: 'aum_perf.1Y',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  AUM_PERF_3M: new BaseField('AUM_PERF_3M', {
    label: 'Aum Perf 3M',
    fieldName: 'aum_perf.3M',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  AUM_PERF_3Y: new BaseField('AUM_PERF_3Y', {
    label: 'Aum Perf 3Y',
    fieldName: 'aum_perf.3Y',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  AUM_PERF_5Y: new BaseField('AUM_PERF_5Y', {
    label: 'Aum Perf 5Y',
    fieldName: 'aum_perf.5Y',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  AUM_PERF_YTD: new BaseField('AUM_PERF_YTD', {
    label: 'Aum Perf YTD',
    fieldName: 'aum_perf.YTD',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  CHANGE_PERCENT: new BaseField('CHANGE_PERCENT', {
    label: 'Change %',
    fieldName: 'change',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  CHANGE_1MIN_PERCENT: new BaseField('CHANGE_1MIN_PERCENT', {
    label: 'Change 1m, %',
    fieldName: 'change.1',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  CHANGE_15MIN_PERCENT: new BaseField('CHANGE_15MIN_PERCENT', {
    label: 'Change 15m, %',
    fieldName: 'change.15',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  CHANGE_1M_PERCENT: new BaseField('CHANGE_1M_PERCENT', {
    label: 'Change 1M, %',
    fieldName: 'change.1M',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  CHANGE_1W_PERCENT: new BaseField('CHANGE_1W_PERCENT', {
    label: 'Change 1W, %',
    fieldName: 'change.1W',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  CHANGE_4H_PERCENT: new BaseField('CHANGE_4H_PERCENT', {
    label: 'Change 4h, %',
    fieldName: 'change.240',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  CHANGE_5MIN_PERCENT: new BaseField('CHANGE_5MIN_PERCENT', {
    label: 'Change 5m, %',
    fieldName: 'change.5',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  CHANGE_1H_PERCENT: new BaseField('CHANGE_1H_PERCENT', {
    label: 'Change 1h, %',
    fieldName: 'change.60',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  CHANGE: new BaseField('CHANGE', {
    label: 'Change',
    fieldName: 'change_abs',
    format: 'float',
    interval: true,
    historical: false,
  }),

  CHANGE_1MIN: new BaseField('CHANGE_1MIN', {
    label: 'Change 1m',
    fieldName: 'change_abs.1',
    format: 'float',
    interval: false,
    historical: false,
  }),

  CHANGE_15MIN: new BaseField('CHANGE_15MIN', {
    label: 'Change 15m',
    fieldName: 'change_abs.15',
    format: 'float',
    interval: false,
    historical: false,
  }),

  CHANGE_1M: new BaseField('CHANGE_1M', {
    label: 'Change 1M',
    fieldName: 'change_abs.1M',
    format: 'float',
    interval: false,
    historical: false,
  }),

  CHANGE_1W: new BaseField('CHANGE_1W', {
    label: 'Change 1W',
    fieldName: 'change_abs.1W',
    format: 'float',
    interval: false,
    historical: false,
  }),

  CHANGE_4H: new BaseField('CHANGE_4H', {
    label: 'Change 4h',
    fieldName: 'change_abs.240',
    format: 'float',
    interval: false,
    historical: false,
  }),

  CHANGE_5MIN: new BaseField('CHANGE_5MIN', {
    label: 'Change 5m',
    fieldName: 'change_abs.5',
    format: 'float',
    interval: false,
    historical: false,
  }),

  CHANGE_1H: new BaseField('CHANGE_1H', {
    label: 'Change 1h',
    fieldName: 'change_abs.60',
    format: 'float',
    interval: false,
    historical: false,
  }),

  CHANGE_ABS_1: new BaseField('CHANGE_ABS_1', {
    label: 'Change Abs|1',
    fieldName: 'change_abs|1',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  CHANGE_ABS_120: new BaseField('CHANGE_ABS_120', {
    label: 'Change Abs|120',
    fieldName: 'change_abs|120',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  CHANGE_ABS_15: new BaseField('CHANGE_ABS_15', {
    label: 'Change Abs|15',
    fieldName: 'change_abs|15',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  CHANGE_ABS_1M: new BaseField('CHANGE_ABS_1M', {
    label: 'Change Abs|1M',
    fieldName: 'change_abs|1M',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  CHANGE_ABS_1W: new BaseField('CHANGE_ABS_1W', {
    label: 'Change Abs|1W',
    fieldName: 'change_abs|1W',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  CHANGE_ABS_240: new BaseField('CHANGE_ABS_240', {
    label: 'Change Abs|240',
    fieldName: 'change_abs|240',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  CHANGE_ABS_30: new BaseField('CHANGE_ABS_30', {
    label: 'Change Abs|30',
    fieldName: 'change_abs|30',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  CHANGE_ABS_5: new BaseField('CHANGE_ABS_5', {
    label: 'Change Abs|5',
    fieldName: 'change_abs|5',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  CHANGE_ABS_60: new BaseField('CHANGE_ABS_60', {
    label: 'Change Abs|60',
    fieldName: 'change_abs|60',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  CHANGE_FROM_OPEN_PERCENT: new BaseField('CHANGE_FROM_OPEN_PERCENT', {
    label: 'Change from Open %',
    fieldName: 'change_from_open',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  CHANGE_FROM_OPEN: new BaseField('CHANGE_FROM_OPEN', {
    label: 'Change from Open',
    fieldName: 'change_from_open_abs',
    format: 'float',
    interval: true,
    historical: false,
  }),

  CHANGE_FROM_OPEN_ABS_1: new BaseField('CHANGE_FROM_OPEN_ABS_1', {
    label: 'Change From Open Abs|1',
    fieldName: 'change_from_open_abs|1',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  CHANGE_FROM_OPEN_ABS_120: new BaseField('CHANGE_FROM_OPEN_ABS_120', {
    label: 'Change From Open Abs|120',
    fieldName: 'change_from_open_abs|120',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  CHANGE_FROM_OPEN_ABS_15: new BaseField('CHANGE_FROM_OPEN_ABS_15', {
    label: 'Change From Open Abs|15',
    fieldName: 'change_from_open_abs|15',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  CHANGE_FROM_OPEN_ABS_1M: new BaseField('CHANGE_FROM_OPEN_ABS_1M', {
    label: 'Change From Open Abs|1M',
    fieldName: 'change_from_open_abs|1M',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  CHANGE_FROM_OPEN_ABS_1W: new BaseField('CHANGE_FROM_OPEN_ABS_1W', {
    label: 'Change From Open Abs|1W',
    fieldName: 'change_from_open_abs|1W',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  CHANGE_FROM_OPEN_ABS_240: new BaseField('CHANGE_FROM_OPEN_ABS_240', {
    label: 'Change From Open Abs|240',
    fieldName: 'change_from_open_abs|240',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  CHANGE_FROM_OPEN_ABS_30: new BaseField('CHANGE_FROM_OPEN_ABS_30', {
    label: 'Change From Open Abs|30',
    fieldName: 'change_from_open_abs|30',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  CHANGE_FROM_OPEN_ABS_5: new BaseField('CHANGE_FROM_OPEN_ABS_5', {
    label: 'Change From Open Abs|5',
    fieldName: 'change_from_open_abs|5',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  CHANGE_FROM_OPEN_ABS_60: new BaseField('CHANGE_FROM_OPEN_ABS_60', {
    label: 'Change From Open Abs|60',
    fieldName: 'change_from_open_abs|60',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  CHANGE_FROM_OPEN_1: new BaseField('CHANGE_FROM_OPEN_1', {
    label: 'Change From Open|1',
    fieldName: 'change_from_open|1',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  CHANGE_FROM_OPEN_120: new BaseField('CHANGE_FROM_OPEN_120', {
    label: 'Change From Open|120',
    fieldName: 'change_from_open|120',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  CHANGE_FROM_OPEN_15: new BaseField('CHANGE_FROM_OPEN_15', {
    label: 'Change From Open|15',
    fieldName: 'change_from_open|15',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  CHANGE_FROM_OPEN_1M: new BaseField('CHANGE_FROM_OPEN_1M', {
    label: 'Change From Open|1M',
    fieldName: 'change_from_open|1M',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  CHANGE_FROM_OPEN_1W: new BaseField('CHANGE_FROM_OPEN_1W', {
    label: 'Change From Open|1W',
    fieldName: 'change_from_open|1W',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  CHANGE_FROM_OPEN_240: new BaseField('CHANGE_FROM_OPEN_240', {
    label: 'Change From Open|240',
    fieldName: 'change_from_open|240',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  CHANGE_FROM_OPEN_30: new BaseField('CHANGE_FROM_OPEN_30', {
    label: 'Change From Open|30',
    fieldName: 'change_from_open|30',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  CHANGE_FROM_OPEN_5: new BaseField('CHANGE_FROM_OPEN_5', {
    label: 'Change From Open|5',
    fieldName: 'change_from_open|5',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  CHANGE_FROM_OPEN_60: new BaseField('CHANGE_FROM_OPEN_60', {
    label: 'Change From Open|60',
    fieldName: 'change_from_open|60',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  CHANGE_1: new BaseField('CHANGE_1', {
    label: 'Change|1',
    fieldName: 'change|1',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  CHANGE_120: new BaseField('CHANGE_120', {
    label: 'Change|120',
    fieldName: 'change|120',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  CHANGE_15: new BaseField('CHANGE_15', {
    label: 'Change|15',
    fieldName: 'change|15',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  CHANGE_1M_2: new BaseField('CHANGE_1M_2', {
    label: 'Change|1M',
    fieldName: 'change|1M',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  CHANGE_1W_2: new BaseField('CHANGE_1W_2', {
    label: 'Change|1W',
    fieldName: 'change|1W',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  CHANGE_240: new BaseField('CHANGE_240', {
    label: 'Change|240',
    fieldName: 'change|240',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  CHANGE_30: new BaseField('CHANGE_30', {
    label: 'Change|30',
    fieldName: 'change|30',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  CHANGE_5: new BaseField('CHANGE_5', {
    label: 'Change|5',
    fieldName: 'change|5',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  CHANGE_60: new BaseField('CHANGE_60', {
    label: 'Change|60',
    fieldName: 'change|60',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  PRICE: new BaseField('PRICE', {
    label: 'Price',
    fieldName: 'close',
    format: 'float',
    interval: true,
    historical: false,
  }),

  CLOSE_1: new BaseField('CLOSE_1', {
    label: 'Close|1',
    fieldName: 'close|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  CLOSE_120: new BaseField('CLOSE_120', {
    label: 'Close|120',
    fieldName: 'close|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  CLOSE_15: new BaseField('CLOSE_15', {
    label: 'Close|15',
    fieldName: 'close|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  CLOSE_1M: new BaseField('CLOSE_1M', {
    label: 'Close|1M',
    fieldName: 'close|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  CLOSE_1W: new BaseField('CLOSE_1W', {
    label: 'Close|1W',
    fieldName: 'close|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  CLOSE_240: new BaseField('CLOSE_240', {
    label: 'Close|240',
    fieldName: 'close|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  CLOSE_30: new BaseField('CLOSE_30', {
    label: 'Close|30',
    fieldName: 'close|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  CLOSE_5: new BaseField('CLOSE_5', {
    label: 'Close|5',
    fieldName: 'close|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  CLOSE_60: new BaseField('CLOSE_60', {
    label: 'Close|60',
    fieldName: 'close|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EXCHANGE: new BaseField('EXCHANGE', {
    label: 'Exchange',
    fieldName: 'exchange',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  FUND_FLOWS_1M: new BaseField('FUND_FLOWS_1M', {
    label: 'Fund Flows 1M',
    fieldName: 'fund_flows.1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  FUND_FLOWS_1Y: new BaseField('FUND_FLOWS_1Y', {
    label: 'Fund Flows 1Y',
    fieldName: 'fund_flows.1Y',
    format: 'float',
    interval: true,
    historical: false,
  }),

  FUND_FLOWS_3M: new BaseField('FUND_FLOWS_3M', {
    label: 'Fund Flows 3M',
    fieldName: 'fund_flows.3M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  FUND_FLOWS_3Y: new BaseField('FUND_FLOWS_3Y', {
    label: 'Fund Flows 3Y',
    fieldName: 'fund_flows.3Y',
    format: 'float',
    interval: true,
    historical: false,
  }),

  FUND_FLOWS_5Y: new BaseField('FUND_FLOWS_5Y', {
    label: 'Fund Flows 5Y',
    fieldName: 'fund_flows.5Y',
    format: 'float',
    interval: true,
    historical: false,
  }),

  FUND_FLOWS_YTD: new BaseField('FUND_FLOWS_YTD', {
    label: 'Fund Flows YTD',
    fieldName: 'fund_flows.YTD',
    format: 'float',
    interval: true,
    historical: false,
  }),

  GAP_PERCENT: new BaseField('GAP_PERCENT', {
    label: 'Gap %',
    fieldName: 'gap',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  GAP_DOWN: new BaseField('GAP_DOWN', {
    label: 'Gap Down',
    fieldName: 'gap_down',
    format: 'float',
    interval: true,
    historical: false,
  }),

  GAP_DOWN_ABS: new BaseField('GAP_DOWN_ABS', {
    label: 'Gap Down Abs',
    fieldName: 'gap_down_abs',
    format: 'float',
    interval: true,
    historical: false,
  }),

  GAP_DOWN_ABS_1: new BaseField('GAP_DOWN_ABS_1', {
    label: 'Gap Down Abs|1',
    fieldName: 'gap_down_abs|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  GAP_DOWN_ABS_120: new BaseField('GAP_DOWN_ABS_120', {
    label: 'Gap Down Abs|120',
    fieldName: 'gap_down_abs|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  GAP_DOWN_ABS_15: new BaseField('GAP_DOWN_ABS_15', {
    label: 'Gap Down Abs|15',
    fieldName: 'gap_down_abs|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  GAP_DOWN_ABS_1M: new BaseField('GAP_DOWN_ABS_1M', {
    label: 'Gap Down Abs|1M',
    fieldName: 'gap_down_abs|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  GAP_DOWN_ABS_1W: new BaseField('GAP_DOWN_ABS_1W', {
    label: 'Gap Down Abs|1W',
    fieldName: 'gap_down_abs|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  GAP_DOWN_ABS_240: new BaseField('GAP_DOWN_ABS_240', {
    label: 'Gap Down Abs|240',
    fieldName: 'gap_down_abs|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  GAP_DOWN_ABS_30: new BaseField('GAP_DOWN_ABS_30', {
    label: 'Gap Down Abs|30',
    fieldName: 'gap_down_abs|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  GAP_DOWN_ABS_5: new BaseField('GAP_DOWN_ABS_5', {
    label: 'Gap Down Abs|5',
    fieldName: 'gap_down_abs|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  GAP_DOWN_ABS_60: new BaseField('GAP_DOWN_ABS_60', {
    label: 'Gap Down Abs|60',
    fieldName: 'gap_down_abs|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  GAP_DOWN_1: new BaseField('GAP_DOWN_1', {
    label: 'Gap Down|1',
    fieldName: 'gap_down|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  GAP_DOWN_120: new BaseField('GAP_DOWN_120', {
    label: 'Gap Down|120',
    fieldName: 'gap_down|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  GAP_DOWN_15: new BaseField('GAP_DOWN_15', {
    label: 'Gap Down|15',
    fieldName: 'gap_down|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  GAP_DOWN_1M: new BaseField('GAP_DOWN_1M', {
    label: 'Gap Down|1M',
    fieldName: 'gap_down|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  GAP_DOWN_1W: new BaseField('GAP_DOWN_1W', {
    label: 'Gap Down|1W',
    fieldName: 'gap_down|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  GAP_DOWN_240: new BaseField('GAP_DOWN_240', {
    label: 'Gap Down|240',
    fieldName: 'gap_down|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  GAP_DOWN_30: new BaseField('GAP_DOWN_30', {
    label: 'Gap Down|30',
    fieldName: 'gap_down|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  GAP_DOWN_5: new BaseField('GAP_DOWN_5', {
    label: 'Gap Down|5',
    fieldName: 'gap_down|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  GAP_DOWN_60: new BaseField('GAP_DOWN_60', {
    label: 'Gap Down|60',
    fieldName: 'gap_down|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  GAP_UP: new BaseField('GAP_UP', {
    label: 'Gap Up',
    fieldName: 'gap_up',
    format: 'float',
    interval: true,
    historical: false,
  }),

  GAP_UP_ABS: new BaseField('GAP_UP_ABS', {
    label: 'Gap Up Abs',
    fieldName: 'gap_up_abs',
    format: 'float',
    interval: true,
    historical: false,
  }),

  GAP_UP_ABS_1: new BaseField('GAP_UP_ABS_1', {
    label: 'Gap Up Abs|1',
    fieldName: 'gap_up_abs|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  GAP_UP_ABS_120: new BaseField('GAP_UP_ABS_120', {
    label: 'Gap Up Abs|120',
    fieldName: 'gap_up_abs|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  GAP_UP_ABS_15: new BaseField('GAP_UP_ABS_15', {
    label: 'Gap Up Abs|15',
    fieldName: 'gap_up_abs|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  GAP_UP_ABS_1M: new BaseField('GAP_UP_ABS_1M', {
    label: 'Gap Up Abs|1M',
    fieldName: 'gap_up_abs|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  GAP_UP_ABS_1W: new BaseField('GAP_UP_ABS_1W', {
    label: 'Gap Up Abs|1W',
    fieldName: 'gap_up_abs|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  GAP_UP_ABS_240: new BaseField('GAP_UP_ABS_240', {
    label: 'Gap Up Abs|240',
    fieldName: 'gap_up_abs|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  GAP_UP_ABS_30: new BaseField('GAP_UP_ABS_30', {
    label: 'Gap Up Abs|30',
    fieldName: 'gap_up_abs|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  GAP_UP_ABS_5: new BaseField('GAP_UP_ABS_5', {
    label: 'Gap Up Abs|5',
    fieldName: 'gap_up_abs|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  GAP_UP_ABS_60: new BaseField('GAP_UP_ABS_60', {
    label: 'Gap Up Abs|60',
    fieldName: 'gap_up_abs|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  GAP_UP_1: new BaseField('GAP_UP_1', {
    label: 'Gap Up|1',
    fieldName: 'gap_up|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  GAP_UP_120: new BaseField('GAP_UP_120', {
    label: 'Gap Up|120',
    fieldName: 'gap_up|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  GAP_UP_15: new BaseField('GAP_UP_15', {
    label: 'Gap Up|15',
    fieldName: 'gap_up|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  GAP_UP_1M: new BaseField('GAP_UP_1M', {
    label: 'Gap Up|1M',
    fieldName: 'gap_up|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  GAP_UP_1W: new BaseField('GAP_UP_1W', {
    label: 'Gap Up|1W',
    fieldName: 'gap_up|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  GAP_UP_240: new BaseField('GAP_UP_240', {
    label: 'Gap Up|240',
    fieldName: 'gap_up|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  GAP_UP_30: new BaseField('GAP_UP_30', {
    label: 'Gap Up|30',
    fieldName: 'gap_up|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  GAP_UP_5: new BaseField('GAP_UP_5', {
    label: 'Gap Up|5',
    fieldName: 'gap_up|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  GAP_UP_60: new BaseField('GAP_UP_60', {
    label: 'Gap Up|60',
    fieldName: 'gap_up|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  GAP_1: new BaseField('GAP_1', {
    label: 'Gap|1',
    fieldName: 'gap|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  GAP_120: new BaseField('GAP_120', {
    label: 'Gap|120',
    fieldName: 'gap|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  GAP_15: new BaseField('GAP_15', {
    label: 'Gap|15',
    fieldName: 'gap|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  GAP_1M: new BaseField('GAP_1M', {
    label: 'Gap|1M',
    fieldName: 'gap|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  GAP_1W: new BaseField('GAP_1W', {
    label: 'Gap|1W',
    fieldName: 'gap|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  GAP_240: new BaseField('GAP_240', {
    label: 'Gap|240',
    fieldName: 'gap|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  GAP_30: new BaseField('GAP_30', {
    label: 'Gap|30',
    fieldName: 'gap|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  GAP_5: new BaseField('GAP_5', {
    label: 'Gap|5',
    fieldName: 'gap|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  GAP_60: new BaseField('GAP_60', {
    label: 'Gap|60',
    fieldName: 'gap|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  HIGH: new BaseField('HIGH', {
    label: 'High',
    fieldName: 'high',
    format: 'float',
    interval: true,
    historical: false,
  }),

  HIGH_1: new BaseField('HIGH_1', {
    label: 'High|1',
    fieldName: 'high|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  HIGH_120: new BaseField('HIGH_120', {
    label: 'High|120',
    fieldName: 'high|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  HIGH_15: new BaseField('HIGH_15', {
    label: 'High|15',
    fieldName: 'high|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  HIGH_1M: new BaseField('HIGH_1M', {
    label: 'High|1M',
    fieldName: 'high|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  HIGH_1W: new BaseField('HIGH_1W', {
    label: 'High|1W',
    fieldName: 'high|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  HIGH_240: new BaseField('HIGH_240', {
    label: 'High|240',
    fieldName: 'high|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  HIGH_30: new BaseField('HIGH_30', {
    label: 'High|30',
    fieldName: 'high|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  HIGH_5: new BaseField('HIGH_5', {
    label: 'High|5',
    fieldName: 'high|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  HIGH_60: new BaseField('HIGH_60', {
    label: 'High|60',
    fieldName: 'high|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  LOW: new BaseField('LOW', {
    label: 'Low',
    fieldName: 'low',
    format: 'float',
    interval: true,
    historical: false,
  }),

  LOW_AFTER_HIGH_ALL_CHANGE: new BaseField('LOW_AFTER_HIGH_ALL_CHANGE', {
    label: 'Low After High All Change',
    fieldName: 'low_after_high_all_change',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  LOW_AFTER_HIGH_ALL_CHANGE_ABS: new BaseField('LOW_AFTER_HIGH_ALL_CHANGE_ABS', {
    label: 'Low After High All Change Abs',
    fieldName: 'low_after_high_all_change_abs',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  LOW_1: new BaseField('LOW_1', {
    label: 'Low|1',
    fieldName: 'low|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  LOW_120: new BaseField('LOW_120', {
    label: 'Low|120',
    fieldName: 'low|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  LOW_15: new BaseField('LOW_15', {
    label: 'Low|15',
    fieldName: 'low|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  LOW_1M: new BaseField('LOW_1M', {
    label: 'Low|1M',
    fieldName: 'low|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  LOW_1W: new BaseField('LOW_1W', {
    label: 'Low|1W',
    fieldName: 'low|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  LOW_240: new BaseField('LOW_240', {
    label: 'Low|240',
    fieldName: 'low|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  LOW_30: new BaseField('LOW_30', {
    label: 'Low|30',
    fieldName: 'low|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  LOW_5: new BaseField('LOW_5', {
    label: 'Low|5',
    fieldName: 'low|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  LOW_60: new BaseField('LOW_60', {
    label: 'Low|60',
    fieldName: 'low|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  NAV_PERF_1M: new BaseField('NAV_PERF_1M', {
    label: 'Nav Perf 1M',
    fieldName: 'nav_perf.1M',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  NAV_PERF_1Y: new BaseField('NAV_PERF_1Y', {
    label: 'Nav Perf 1Y',
    fieldName: 'nav_perf.1Y',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  NAV_PERF_3M: new BaseField('NAV_PERF_3M', {
    label: 'Nav Perf 3M',
    fieldName: 'nav_perf.3M',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  NAV_PERF_3Y: new BaseField('NAV_PERF_3Y', {
    label: 'Nav Perf 3Y',
    fieldName: 'nav_perf.3Y',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  NAV_PERF_5Y: new BaseField('NAV_PERF_5Y', {
    label: 'Nav Perf 5Y',
    fieldName: 'nav_perf.5Y',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  NAV_PERF_YTD: new BaseField('NAV_PERF_YTD', {
    label: 'Nav Perf YTD',
    fieldName: 'nav_perf.YTD',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  OPEN: new BaseField('OPEN', {
    label: 'Open',
    fieldName: 'open',
    format: 'float',
    interval: true,
    historical: false,
  }),

  OPEN_1: new BaseField('OPEN_1', {
    label: 'Open|1',
    fieldName: 'open|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  OPEN_120: new BaseField('OPEN_120', {
    label: 'Open|120',
    fieldName: 'open|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  OPEN_15: new BaseField('OPEN_15', {
    label: 'Open|15',
    fieldName: 'open|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  OPEN_1M: new BaseField('OPEN_1M', {
    label: 'Open|1M',
    fieldName: 'open|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  OPEN_1W: new BaseField('OPEN_1W', {
    label: 'Open|1W',
    fieldName: 'open|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  OPEN_240: new BaseField('OPEN_240', {
    label: 'Open|240',
    fieldName: 'open|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  OPEN_30: new BaseField('OPEN_30', {
    label: 'Open|30',
    fieldName: 'open|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  OPEN_5: new BaseField('OPEN_5', {
    label: 'Open|5',
    fieldName: 'open|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  OPEN_60: new BaseField('OPEN_60', {
    label: 'Open|60',
    fieldName: 'open|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  POST_CHANGE: new BaseField('POST_CHANGE', {
    label: 'Post Change',
    fieldName: 'post_change',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  POST_CHANGE_1: new BaseField('POST_CHANGE_1', {
    label: 'Post Change|1',
    fieldName: 'post_change|1',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  POST_CHANGE_120: new BaseField('POST_CHANGE_120', {
    label: 'Post Change|120',
    fieldName: 'post_change|120',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  POST_CHANGE_15: new BaseField('POST_CHANGE_15', {
    label: 'Post Change|15',
    fieldName: 'post_change|15',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  POST_CHANGE_1M: new BaseField('POST_CHANGE_1M', {
    label: 'Post Change|1M',
    fieldName: 'post_change|1M',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  POST_CHANGE_1W: new BaseField('POST_CHANGE_1W', {
    label: 'Post Change|1W',
    fieldName: 'post_change|1W',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  POST_CHANGE_240: new BaseField('POST_CHANGE_240', {
    label: 'Post Change|240',
    fieldName: 'post_change|240',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  POST_CHANGE_30: new BaseField('POST_CHANGE_30', {
    label: 'Post Change|30',
    fieldName: 'post_change|30',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  POST_CHANGE_5: new BaseField('POST_CHANGE_5', {
    label: 'Post Change|5',
    fieldName: 'post_change|5',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  POST_CHANGE_60: new BaseField('POST_CHANGE_60', {
    label: 'Post Change|60',
    fieldName: 'post_change|60',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  PRE_CHANGE: new BaseField('PRE_CHANGE', {
    label: 'Pre Change',
    fieldName: 'pre_change',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  PRE_CHANGE_ABS: new BaseField('PRE_CHANGE_ABS', {
    label: 'Pre Change Abs',
    fieldName: 'pre_change_abs',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  PRE_CHANGE_ABS_1: new BaseField('PRE_CHANGE_ABS_1', {
    label: 'Pre Change Abs|1',
    fieldName: 'pre_change_abs|1',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  PRE_CHANGE_ABS_120: new BaseField('PRE_CHANGE_ABS_120', {
    label: 'Pre Change Abs|120',
    fieldName: 'pre_change_abs|120',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  PRE_CHANGE_ABS_15: new BaseField('PRE_CHANGE_ABS_15', {
    label: 'Pre Change Abs|15',
    fieldName: 'pre_change_abs|15',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  PRE_CHANGE_ABS_1M: new BaseField('PRE_CHANGE_ABS_1M', {
    label: 'Pre Change Abs|1M',
    fieldName: 'pre_change_abs|1M',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  PRE_CHANGE_ABS_1W: new BaseField('PRE_CHANGE_ABS_1W', {
    label: 'Pre Change Abs|1W',
    fieldName: 'pre_change_abs|1W',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  PRE_CHANGE_ABS_240: new BaseField('PRE_CHANGE_ABS_240', {
    label: 'Pre Change Abs|240',
    fieldName: 'pre_change_abs|240',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  PRE_CHANGE_ABS_30: new BaseField('PRE_CHANGE_ABS_30', {
    label: 'Pre Change Abs|30',
    fieldName: 'pre_change_abs|30',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  PRE_CHANGE_ABS_5: new BaseField('PRE_CHANGE_ABS_5', {
    label: 'Pre Change Abs|5',
    fieldName: 'pre_change_abs|5',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  PRE_CHANGE_ABS_60: new BaseField('PRE_CHANGE_ABS_60', {
    label: 'Pre Change Abs|60',
    fieldName: 'pre_change_abs|60',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  PRE_CHANGE_1: new BaseField('PRE_CHANGE_1', {
    label: 'Pre Change|1',
    fieldName: 'pre_change|1',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  PRE_CHANGE_120: new BaseField('PRE_CHANGE_120', {
    label: 'Pre Change|120',
    fieldName: 'pre_change|120',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  PRE_CHANGE_15: new BaseField('PRE_CHANGE_15', {
    label: 'Pre Change|15',
    fieldName: 'pre_change|15',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  PRE_CHANGE_1M: new BaseField('PRE_CHANGE_1M', {
    label: 'Pre Change|1M',
    fieldName: 'pre_change|1M',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  PRE_CHANGE_1W: new BaseField('PRE_CHANGE_1W', {
    label: 'Pre Change|1W',
    fieldName: 'pre_change|1W',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  PRE_CHANGE_240: new BaseField('PRE_CHANGE_240', {
    label: 'Pre Change|240',
    fieldName: 'pre_change|240',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  PRE_CHANGE_30: new BaseField('PRE_CHANGE_30', {
    label: 'Pre Change|30',
    fieldName: 'pre_change|30',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  PRE_CHANGE_5: new BaseField('PRE_CHANGE_5', {
    label: 'Pre Change|5',
    fieldName: 'pre_change|5',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  PRE_CHANGE_60: new BaseField('PRE_CHANGE_60', {
    label: 'Pre Change|60',
    fieldName: 'pre_change|60',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  WEEK_HIGH_52: new BaseField('WEEK_HIGH_52', {
    label: '52 Week High',
    fieldName: 'price_52_week_high',
    format: 'float',
    interval: false,
    historical: false,
  }),

  PRICE_52_WEEK_HIGH_DATE: new BaseField('PRICE_52_WEEK_HIGH_DATE', {
    label: 'Price 52 Week High Date',
    fieldName: 'price_52_week_high_date',
    format: 'date',
    interval: true,
    historical: false,
  }),

  WEEK_LOW_52: new BaseField('WEEK_LOW_52', {
    label: '52 Week Low',
    fieldName: 'price_52_week_low',
    format: 'float',
    interval: false,
    historical: false,
  }),

  PRICE_52_WEEK_LOW_DATE: new BaseField('PRICE_52_WEEK_LOW_DATE', {
    label: 'Price 52 Week Low Date',
    fieldName: 'price_52_week_low_date',
    format: 'date',
    interval: true,
    historical: false,
  }),

  PRICESCALE: new BaseField('PRICESCALE', {
    label: 'Pricescale',
    fieldName: 'pricescale',
    format: 'float',
    interval: false,
    historical: false,
  }),

  // === Moving Averages (824 fields) ===

  CANDLE_HANGINGMAN: new BaseField('CANDLE_HANGINGMAN', {
    label: 'Candle.HangingMan',
    fieldName: 'Candle.HangingMan',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_HANGINGMAN_1: new BaseField('CANDLE_HANGINGMAN_1', {
    label: 'Candle Hangingman|1',
    fieldName: 'Candle.HangingMan|1',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_HANGINGMAN_120: new BaseField('CANDLE_HANGINGMAN_120', {
    label: 'Candle Hangingman|120',
    fieldName: 'Candle.HangingMan|120',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_HANGINGMAN_15: new BaseField('CANDLE_HANGINGMAN_15', {
    label: 'Candle Hangingman|15',
    fieldName: 'Candle.HangingMan|15',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_HANGINGMAN_1M: new BaseField('CANDLE_HANGINGMAN_1M', {
    label: 'Candle Hangingman|1M',
    fieldName: 'Candle.HangingMan|1M',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_HANGINGMAN_1W: new BaseField('CANDLE_HANGINGMAN_1W', {
    label: 'Candle Hangingman|1W',
    fieldName: 'Candle.HangingMan|1W',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_HANGINGMAN_240: new BaseField('CANDLE_HANGINGMAN_240', {
    label: 'Candle Hangingman|240',
    fieldName: 'Candle.HangingMan|240',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_HANGINGMAN_30: new BaseField('CANDLE_HANGINGMAN_30', {
    label: 'Candle Hangingman|30',
    fieldName: 'Candle.HangingMan|30',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_HANGINGMAN_5: new BaseField('CANDLE_HANGINGMAN_5', {
    label: 'Candle Hangingman|5',
    fieldName: 'Candle.HangingMan|5',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_HANGINGMAN_60: new BaseField('CANDLE_HANGINGMAN_60', {
    label: 'Candle Hangingman|60',
    fieldName: 'Candle.HangingMan|60',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  EXPONENTIAL_MOVING_AVERAGE_10: new BaseField('EXPONENTIAL_MOVING_AVERAGE_10', {
    label: 'Exponential Moving Average (10)',
    fieldName: 'EMA10',
    format: 'computed_recommendation',
    interval: true,
    historical: false,
  }),

  EXPONENTIAL_MOVING_AVERAGE_100: new BaseField('EXPONENTIAL_MOVING_AVERAGE_100', {
    label: 'Exponential Moving Average (100)',
    fieldName: 'EMA100',
    format: 'computed_recommendation',
    interval: true,
    historical: false,
  }),

  EMA100_1: new BaseField('EMA100_1', {
    label: 'Ema100|1',
    fieldName: 'EMA100|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA100_120: new BaseField('EMA100_120', {
    label: 'Ema100|120',
    fieldName: 'EMA100|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA100_15: new BaseField('EMA100_15', {
    label: 'Ema100|15',
    fieldName: 'EMA100|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA100_1M: new BaseField('EMA100_1M', {
    label: 'Ema100|1M',
    fieldName: 'EMA100|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA100_1W: new BaseField('EMA100_1W', {
    label: 'Ema100|1W',
    fieldName: 'EMA100|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA100_240: new BaseField('EMA100_240', {
    label: 'Ema100|240',
    fieldName: 'EMA100|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA100_30: new BaseField('EMA100_30', {
    label: 'Ema100|30',
    fieldName: 'EMA100|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA100_5: new BaseField('EMA100_5', {
    label: 'Ema100|5',
    fieldName: 'EMA100|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA100_60: new BaseField('EMA100_60', {
    label: 'Ema100|60',
    fieldName: 'EMA100|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA10_1: new BaseField('EMA10_1', {
    label: 'Ema10|1',
    fieldName: 'EMA10|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA10_120: new BaseField('EMA10_120', {
    label: 'Ema10|120',
    fieldName: 'EMA10|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA10_15: new BaseField('EMA10_15', {
    label: 'Ema10|15',
    fieldName: 'EMA10|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA10_1M: new BaseField('EMA10_1M', {
    label: 'Ema10|1M',
    fieldName: 'EMA10|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA10_1W: new BaseField('EMA10_1W', {
    label: 'Ema10|1W',
    fieldName: 'EMA10|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA10_240: new BaseField('EMA10_240', {
    label: 'Ema10|240',
    fieldName: 'EMA10|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA10_30: new BaseField('EMA10_30', {
    label: 'Ema10|30',
    fieldName: 'EMA10|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA10_5: new BaseField('EMA10_5', {
    label: 'Ema10|5',
    fieldName: 'EMA10|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA10_60: new BaseField('EMA10_60', {
    label: 'Ema10|60',
    fieldName: 'EMA10|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA12: new BaseField('EMA12', {
    label: 'Ema12',
    fieldName: 'EMA12',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA120: new BaseField('EMA120', {
    label: 'Ema120',
    fieldName: 'EMA120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA120_1: new BaseField('EMA120_1', {
    label: 'Ema120|1',
    fieldName: 'EMA120|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA120_120: new BaseField('EMA120_120', {
    label: 'Ema120|120',
    fieldName: 'EMA120|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA120_15: new BaseField('EMA120_15', {
    label: 'Ema120|15',
    fieldName: 'EMA120|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA120_1M: new BaseField('EMA120_1M', {
    label: 'Ema120|1M',
    fieldName: 'EMA120|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA120_1W: new BaseField('EMA120_1W', {
    label: 'Ema120|1W',
    fieldName: 'EMA120|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA120_240: new BaseField('EMA120_240', {
    label: 'Ema120|240',
    fieldName: 'EMA120|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA120_30: new BaseField('EMA120_30', {
    label: 'Ema120|30',
    fieldName: 'EMA120|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA120_5: new BaseField('EMA120_5', {
    label: 'Ema120|5',
    fieldName: 'EMA120|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA120_60: new BaseField('EMA120_60', {
    label: 'Ema120|60',
    fieldName: 'EMA120|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA12_1: new BaseField('EMA12_1', {
    label: 'Ema12|1',
    fieldName: 'EMA12|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA12_120: new BaseField('EMA12_120', {
    label: 'Ema12|120',
    fieldName: 'EMA12|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA12_15: new BaseField('EMA12_15', {
    label: 'Ema12|15',
    fieldName: 'EMA12|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA12_1M: new BaseField('EMA12_1M', {
    label: 'Ema12|1M',
    fieldName: 'EMA12|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA12_1W: new BaseField('EMA12_1W', {
    label: 'Ema12|1W',
    fieldName: 'EMA12|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA12_240: new BaseField('EMA12_240', {
    label: 'Ema12|240',
    fieldName: 'EMA12|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA12_30: new BaseField('EMA12_30', {
    label: 'Ema12|30',
    fieldName: 'EMA12|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA12_5: new BaseField('EMA12_5', {
    label: 'Ema12|5',
    fieldName: 'EMA12|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA12_60: new BaseField('EMA12_60', {
    label: 'Ema12|60',
    fieldName: 'EMA12|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA13: new BaseField('EMA13', {
    label: 'Ema13',
    fieldName: 'EMA13',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA13_1: new BaseField('EMA13_1', {
    label: 'Ema13|1',
    fieldName: 'EMA13|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA13_120: new BaseField('EMA13_120', {
    label: 'Ema13|120',
    fieldName: 'EMA13|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA13_15: new BaseField('EMA13_15', {
    label: 'Ema13|15',
    fieldName: 'EMA13|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA13_1M: new BaseField('EMA13_1M', {
    label: 'Ema13|1M',
    fieldName: 'EMA13|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA13_1W: new BaseField('EMA13_1W', {
    label: 'Ema13|1W',
    fieldName: 'EMA13|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA13_240: new BaseField('EMA13_240', {
    label: 'Ema13|240',
    fieldName: 'EMA13|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA13_30: new BaseField('EMA13_30', {
    label: 'Ema13|30',
    fieldName: 'EMA13|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA13_5: new BaseField('EMA13_5', {
    label: 'Ema13|5',
    fieldName: 'EMA13|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA13_60: new BaseField('EMA13_60', {
    label: 'Ema13|60',
    fieldName: 'EMA13|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA14: new BaseField('EMA14', {
    label: 'Ema14',
    fieldName: 'EMA14',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA144: new BaseField('EMA144', {
    label: 'Ema144',
    fieldName: 'EMA144',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA144_1: new BaseField('EMA144_1', {
    label: 'Ema144|1',
    fieldName: 'EMA144|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA144_120: new BaseField('EMA144_120', {
    label: 'Ema144|120',
    fieldName: 'EMA144|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA144_15: new BaseField('EMA144_15', {
    label: 'Ema144|15',
    fieldName: 'EMA144|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA144_1M: new BaseField('EMA144_1M', {
    label: 'Ema144|1M',
    fieldName: 'EMA144|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA144_1W: new BaseField('EMA144_1W', {
    label: 'Ema144|1W',
    fieldName: 'EMA144|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA144_240: new BaseField('EMA144_240', {
    label: 'Ema144|240',
    fieldName: 'EMA144|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA144_30: new BaseField('EMA144_30', {
    label: 'Ema144|30',
    fieldName: 'EMA144|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA144_5: new BaseField('EMA144_5', {
    label: 'Ema144|5',
    fieldName: 'EMA144|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA144_60: new BaseField('EMA144_60', {
    label: 'Ema144|60',
    fieldName: 'EMA144|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA14_1: new BaseField('EMA14_1', {
    label: 'Ema14|1',
    fieldName: 'EMA14|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA14_120: new BaseField('EMA14_120', {
    label: 'Ema14|120',
    fieldName: 'EMA14|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA14_15: new BaseField('EMA14_15', {
    label: 'Ema14|15',
    fieldName: 'EMA14|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA14_1M: new BaseField('EMA14_1M', {
    label: 'Ema14|1M',
    fieldName: 'EMA14|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA14_1W: new BaseField('EMA14_1W', {
    label: 'Ema14|1W',
    fieldName: 'EMA14|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA14_240: new BaseField('EMA14_240', {
    label: 'Ema14|240',
    fieldName: 'EMA14|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA14_30: new BaseField('EMA14_30', {
    label: 'Ema14|30',
    fieldName: 'EMA14|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA14_5: new BaseField('EMA14_5', {
    label: 'Ema14|5',
    fieldName: 'EMA14|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA14_60: new BaseField('EMA14_60', {
    label: 'Ema14|60',
    fieldName: 'EMA14|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA15: new BaseField('EMA15', {
    label: 'Ema15',
    fieldName: 'EMA15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA150: new BaseField('EMA150', {
    label: 'Ema150',
    fieldName: 'EMA150',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA150_1: new BaseField('EMA150_1', {
    label: 'Ema150|1',
    fieldName: 'EMA150|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA150_120: new BaseField('EMA150_120', {
    label: 'Ema150|120',
    fieldName: 'EMA150|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA150_15: new BaseField('EMA150_15', {
    label: 'Ema150|15',
    fieldName: 'EMA150|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA150_1M: new BaseField('EMA150_1M', {
    label: 'Ema150|1M',
    fieldName: 'EMA150|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA150_1W: new BaseField('EMA150_1W', {
    label: 'Ema150|1W',
    fieldName: 'EMA150|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA150_240: new BaseField('EMA150_240', {
    label: 'Ema150|240',
    fieldName: 'EMA150|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA150_30: new BaseField('EMA150_30', {
    label: 'Ema150|30',
    fieldName: 'EMA150|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA150_5: new BaseField('EMA150_5', {
    label: 'Ema150|5',
    fieldName: 'EMA150|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA150_60: new BaseField('EMA150_60', {
    label: 'Ema150|60',
    fieldName: 'EMA150|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA15_1: new BaseField('EMA15_1', {
    label: 'Ema15|1',
    fieldName: 'EMA15|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA15_120: new BaseField('EMA15_120', {
    label: 'Ema15|120',
    fieldName: 'EMA15|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA15_15: new BaseField('EMA15_15', {
    label: 'Ema15|15',
    fieldName: 'EMA15|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA15_1M: new BaseField('EMA15_1M', {
    label: 'Ema15|1M',
    fieldName: 'EMA15|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA15_1W: new BaseField('EMA15_1W', {
    label: 'Ema15|1W',
    fieldName: 'EMA15|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA15_240: new BaseField('EMA15_240', {
    label: 'Ema15|240',
    fieldName: 'EMA15|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA15_30: new BaseField('EMA15_30', {
    label: 'Ema15|30',
    fieldName: 'EMA15|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA15_5: new BaseField('EMA15_5', {
    label: 'Ema15|5',
    fieldName: 'EMA15|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA15_60: new BaseField('EMA15_60', {
    label: 'Ema15|60',
    fieldName: 'EMA15|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA2: new BaseField('EMA2', {
    label: 'Ema2',
    fieldName: 'EMA2',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EXPONENTIAL_MOVING_AVERAGE_20: new BaseField('EXPONENTIAL_MOVING_AVERAGE_20', {
    label: 'Exponential Moving Average (20)',
    fieldName: 'EMA20',
    format: 'computed_recommendation',
    interval: true,
    historical: false,
  }),

  EXPONENTIAL_MOVING_AVERAGE_200: new BaseField('EXPONENTIAL_MOVING_AVERAGE_200', {
    label: 'Exponential Moving Average (200)',
    fieldName: 'EMA200',
    format: 'computed_recommendation',
    interval: true,
    historical: false,
  }),

  EMA200_1: new BaseField('EMA200_1', {
    label: 'Ema200|1',
    fieldName: 'EMA200|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA200_120: new BaseField('EMA200_120', {
    label: 'Ema200|120',
    fieldName: 'EMA200|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA200_15: new BaseField('EMA200_15', {
    label: 'Ema200|15',
    fieldName: 'EMA200|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA200_1M: new BaseField('EMA200_1M', {
    label: 'Ema200|1M',
    fieldName: 'EMA200|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA200_1W: new BaseField('EMA200_1W', {
    label: 'Ema200|1W',
    fieldName: 'EMA200|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA200_240: new BaseField('EMA200_240', {
    label: 'Ema200|240',
    fieldName: 'EMA200|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA200_30: new BaseField('EMA200_30', {
    label: 'Ema200|30',
    fieldName: 'EMA200|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA200_5: new BaseField('EMA200_5', {
    label: 'Ema200|5',
    fieldName: 'EMA200|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA200_60: new BaseField('EMA200_60', {
    label: 'Ema200|60',
    fieldName: 'EMA200|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA20_1: new BaseField('EMA20_1', {
    label: 'Ema20|1',
    fieldName: 'EMA20|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA20_120: new BaseField('EMA20_120', {
    label: 'Ema20|120',
    fieldName: 'EMA20|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA20_15: new BaseField('EMA20_15', {
    label: 'Ema20|15',
    fieldName: 'EMA20|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA20_1M: new BaseField('EMA20_1M', {
    label: 'Ema20|1M',
    fieldName: 'EMA20|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA20_1W: new BaseField('EMA20_1W', {
    label: 'Ema20|1W',
    fieldName: 'EMA20|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA20_240: new BaseField('EMA20_240', {
    label: 'Ema20|240',
    fieldName: 'EMA20|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA20_30: new BaseField('EMA20_30', {
    label: 'Ema20|30',
    fieldName: 'EMA20|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA20_5: new BaseField('EMA20_5', {
    label: 'Ema20|5',
    fieldName: 'EMA20|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA20_60: new BaseField('EMA20_60', {
    label: 'Ema20|60',
    fieldName: 'EMA20|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA21: new BaseField('EMA21', {
    label: 'Ema21',
    fieldName: 'EMA21',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA21_1: new BaseField('EMA21_1', {
    label: 'Ema21|1',
    fieldName: 'EMA21|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA21_120: new BaseField('EMA21_120', {
    label: 'Ema21|120',
    fieldName: 'EMA21|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA21_15: new BaseField('EMA21_15', {
    label: 'Ema21|15',
    fieldName: 'EMA21|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA21_1M: new BaseField('EMA21_1M', {
    label: 'Ema21|1M',
    fieldName: 'EMA21|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA21_1W: new BaseField('EMA21_1W', {
    label: 'Ema21|1W',
    fieldName: 'EMA21|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA21_240: new BaseField('EMA21_240', {
    label: 'Ema21|240',
    fieldName: 'EMA21|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA21_30: new BaseField('EMA21_30', {
    label: 'Ema21|30',
    fieldName: 'EMA21|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA21_5: new BaseField('EMA21_5', {
    label: 'Ema21|5',
    fieldName: 'EMA21|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA21_60: new BaseField('EMA21_60', {
    label: 'Ema21|60',
    fieldName: 'EMA21|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA25: new BaseField('EMA25', {
    label: 'Ema25',
    fieldName: 'EMA25',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA250: new BaseField('EMA250', {
    label: 'Ema250',
    fieldName: 'EMA250',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA250_1: new BaseField('EMA250_1', {
    label: 'Ema250|1',
    fieldName: 'EMA250|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA250_120: new BaseField('EMA250_120', {
    label: 'Ema250|120',
    fieldName: 'EMA250|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA250_15: new BaseField('EMA250_15', {
    label: 'Ema250|15',
    fieldName: 'EMA250|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA250_1M: new BaseField('EMA250_1M', {
    label: 'Ema250|1M',
    fieldName: 'EMA250|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA250_1W: new BaseField('EMA250_1W', {
    label: 'Ema250|1W',
    fieldName: 'EMA250|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA250_240: new BaseField('EMA250_240', {
    label: 'Ema250|240',
    fieldName: 'EMA250|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA250_30: new BaseField('EMA250_30', {
    label: 'Ema250|30',
    fieldName: 'EMA250|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA250_5: new BaseField('EMA250_5', {
    label: 'Ema250|5',
    fieldName: 'EMA250|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA250_60: new BaseField('EMA250_60', {
    label: 'Ema250|60',
    fieldName: 'EMA250|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA25_1: new BaseField('EMA25_1', {
    label: 'Ema25|1',
    fieldName: 'EMA25|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA25_120: new BaseField('EMA25_120', {
    label: 'Ema25|120',
    fieldName: 'EMA25|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA25_15: new BaseField('EMA25_15', {
    label: 'Ema25|15',
    fieldName: 'EMA25|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA25_1M: new BaseField('EMA25_1M', {
    label: 'Ema25|1M',
    fieldName: 'EMA25|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA25_1W: new BaseField('EMA25_1W', {
    label: 'Ema25|1W',
    fieldName: 'EMA25|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA25_240: new BaseField('EMA25_240', {
    label: 'Ema25|240',
    fieldName: 'EMA25|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA25_30: new BaseField('EMA25_30', {
    label: 'Ema25|30',
    fieldName: 'EMA25|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA25_5: new BaseField('EMA25_5', {
    label: 'Ema25|5',
    fieldName: 'EMA25|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA25_60: new BaseField('EMA25_60', {
    label: 'Ema25|60',
    fieldName: 'EMA25|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA26: new BaseField('EMA26', {
    label: 'Ema26',
    fieldName: 'EMA26',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA26_1: new BaseField('EMA26_1', {
    label: 'Ema26|1',
    fieldName: 'EMA26|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA26_120: new BaseField('EMA26_120', {
    label: 'Ema26|120',
    fieldName: 'EMA26|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA26_15: new BaseField('EMA26_15', {
    label: 'Ema26|15',
    fieldName: 'EMA26|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA26_1M: new BaseField('EMA26_1M', {
    label: 'Ema26|1M',
    fieldName: 'EMA26|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA26_1W: new BaseField('EMA26_1W', {
    label: 'Ema26|1W',
    fieldName: 'EMA26|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA26_240: new BaseField('EMA26_240', {
    label: 'Ema26|240',
    fieldName: 'EMA26|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA26_30: new BaseField('EMA26_30', {
    label: 'Ema26|30',
    fieldName: 'EMA26|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA26_5: new BaseField('EMA26_5', {
    label: 'Ema26|5',
    fieldName: 'EMA26|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA26_60: new BaseField('EMA26_60', {
    label: 'Ema26|60',
    fieldName: 'EMA26|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA2_1: new BaseField('EMA2_1', {
    label: 'Ema2|1',
    fieldName: 'EMA2|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA2_120: new BaseField('EMA2_120', {
    label: 'Ema2|120',
    fieldName: 'EMA2|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA2_15: new BaseField('EMA2_15', {
    label: 'Ema2|15',
    fieldName: 'EMA2|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA2_1M: new BaseField('EMA2_1M', {
    label: 'Ema2|1M',
    fieldName: 'EMA2|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA2_1W: new BaseField('EMA2_1W', {
    label: 'Ema2|1W',
    fieldName: 'EMA2|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA2_240: new BaseField('EMA2_240', {
    label: 'Ema2|240',
    fieldName: 'EMA2|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA2_30: new BaseField('EMA2_30', {
    label: 'Ema2|30',
    fieldName: 'EMA2|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA2_5: new BaseField('EMA2_5', {
    label: 'Ema2|5',
    fieldName: 'EMA2|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA2_60: new BaseField('EMA2_60', {
    label: 'Ema2|60',
    fieldName: 'EMA2|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA3: new BaseField('EMA3', {
    label: 'Ema3',
    fieldName: 'EMA3',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EXPONENTIAL_MOVING_AVERAGE_30: new BaseField('EXPONENTIAL_MOVING_AVERAGE_30', {
    label: 'Exponential Moving Average (30)',
    fieldName: 'EMA30',
    format: 'computed_recommendation',
    interval: true,
    historical: false,
  }),

  EMA300: new BaseField('EMA300', {
    label: 'Ema300',
    fieldName: 'EMA300',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA300_1: new BaseField('EMA300_1', {
    label: 'Ema300|1',
    fieldName: 'EMA300|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA300_120: new BaseField('EMA300_120', {
    label: 'Ema300|120',
    fieldName: 'EMA300|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA300_15: new BaseField('EMA300_15', {
    label: 'Ema300|15',
    fieldName: 'EMA300|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA300_1M: new BaseField('EMA300_1M', {
    label: 'Ema300|1M',
    fieldName: 'EMA300|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA300_1W: new BaseField('EMA300_1W', {
    label: 'Ema300|1W',
    fieldName: 'EMA300|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA300_240: new BaseField('EMA300_240', {
    label: 'Ema300|240',
    fieldName: 'EMA300|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA300_30: new BaseField('EMA300_30', {
    label: 'Ema300|30',
    fieldName: 'EMA300|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA300_5: new BaseField('EMA300_5', {
    label: 'Ema300|5',
    fieldName: 'EMA300|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA300_60: new BaseField('EMA300_60', {
    label: 'Ema300|60',
    fieldName: 'EMA300|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA30_1: new BaseField('EMA30_1', {
    label: 'Ema30|1',
    fieldName: 'EMA30|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA30_120: new BaseField('EMA30_120', {
    label: 'Ema30|120',
    fieldName: 'EMA30|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA30_15: new BaseField('EMA30_15', {
    label: 'Ema30|15',
    fieldName: 'EMA30|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA30_1M: new BaseField('EMA30_1M', {
    label: 'Ema30|1M',
    fieldName: 'EMA30|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA30_1W: new BaseField('EMA30_1W', {
    label: 'Ema30|1W',
    fieldName: 'EMA30|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA30_240: new BaseField('EMA30_240', {
    label: 'Ema30|240',
    fieldName: 'EMA30|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA30_30: new BaseField('EMA30_30', {
    label: 'Ema30|30',
    fieldName: 'EMA30|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA30_5: new BaseField('EMA30_5', {
    label: 'Ema30|5',
    fieldName: 'EMA30|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA30_60: new BaseField('EMA30_60', {
    label: 'Ema30|60',
    fieldName: 'EMA30|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA34: new BaseField('EMA34', {
    label: 'Ema34',
    fieldName: 'EMA34',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA34_1: new BaseField('EMA34_1', {
    label: 'Ema34|1',
    fieldName: 'EMA34|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA34_120: new BaseField('EMA34_120', {
    label: 'Ema34|120',
    fieldName: 'EMA34|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA34_15: new BaseField('EMA34_15', {
    label: 'Ema34|15',
    fieldName: 'EMA34|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA34_1M: new BaseField('EMA34_1M', {
    label: 'Ema34|1M',
    fieldName: 'EMA34|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA34_1W: new BaseField('EMA34_1W', {
    label: 'Ema34|1W',
    fieldName: 'EMA34|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA34_240: new BaseField('EMA34_240', {
    label: 'Ema34|240',
    fieldName: 'EMA34|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA34_30: new BaseField('EMA34_30', {
    label: 'Ema34|30',
    fieldName: 'EMA34|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA34_5: new BaseField('EMA34_5', {
    label: 'Ema34|5',
    fieldName: 'EMA34|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA34_60: new BaseField('EMA34_60', {
    label: 'Ema34|60',
    fieldName: 'EMA34|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA3_1: new BaseField('EMA3_1', {
    label: 'Ema3|1',
    fieldName: 'EMA3|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA3_120: new BaseField('EMA3_120', {
    label: 'Ema3|120',
    fieldName: 'EMA3|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA3_15: new BaseField('EMA3_15', {
    label: 'Ema3|15',
    fieldName: 'EMA3|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA3_1M: new BaseField('EMA3_1M', {
    label: 'Ema3|1M',
    fieldName: 'EMA3|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA3_1W: new BaseField('EMA3_1W', {
    label: 'Ema3|1W',
    fieldName: 'EMA3|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA3_240: new BaseField('EMA3_240', {
    label: 'Ema3|240',
    fieldName: 'EMA3|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA3_30: new BaseField('EMA3_30', {
    label: 'Ema3|30',
    fieldName: 'EMA3|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA3_5: new BaseField('EMA3_5', {
    label: 'Ema3|5',
    fieldName: 'EMA3|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA3_60: new BaseField('EMA3_60', {
    label: 'Ema3|60',
    fieldName: 'EMA3|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA40: new BaseField('EMA40', {
    label: 'Ema40',
    fieldName: 'EMA40',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA40_1: new BaseField('EMA40_1', {
    label: 'Ema40|1',
    fieldName: 'EMA40|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA40_120: new BaseField('EMA40_120', {
    label: 'Ema40|120',
    fieldName: 'EMA40|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA40_15: new BaseField('EMA40_15', {
    label: 'Ema40|15',
    fieldName: 'EMA40|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA40_1M: new BaseField('EMA40_1M', {
    label: 'Ema40|1M',
    fieldName: 'EMA40|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA40_1W: new BaseField('EMA40_1W', {
    label: 'Ema40|1W',
    fieldName: 'EMA40|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA40_240: new BaseField('EMA40_240', {
    label: 'Ema40|240',
    fieldName: 'EMA40|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA40_30: new BaseField('EMA40_30', {
    label: 'Ema40|30',
    fieldName: 'EMA40|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA40_5: new BaseField('EMA40_5', {
    label: 'Ema40|5',
    fieldName: 'EMA40|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA40_60: new BaseField('EMA40_60', {
    label: 'Ema40|60',
    fieldName: 'EMA40|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EXPONENTIAL_MOVING_AVERAGE_5: new BaseField('EXPONENTIAL_MOVING_AVERAGE_5', {
    label: 'Exponential Moving Average (5)',
    fieldName: 'EMA5',
    format: 'computed_recommendation',
    interval: true,
    historical: false,
  }),

  EXPONENTIAL_MOVING_AVERAGE_50: new BaseField('EXPONENTIAL_MOVING_AVERAGE_50', {
    label: 'Exponential Moving Average (50)',
    fieldName: 'EMA50',
    format: 'computed_recommendation',
    interval: true,
    historical: false,
  }),

  EMA50_1: new BaseField('EMA50_1', {
    label: 'Ema50|1',
    fieldName: 'EMA50|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA50_120: new BaseField('EMA50_120', {
    label: 'Ema50|120',
    fieldName: 'EMA50|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA50_15: new BaseField('EMA50_15', {
    label: 'Ema50|15',
    fieldName: 'EMA50|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA50_1M: new BaseField('EMA50_1M', {
    label: 'Ema50|1M',
    fieldName: 'EMA50|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA50_1W: new BaseField('EMA50_1W', {
    label: 'Ema50|1W',
    fieldName: 'EMA50|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA50_240: new BaseField('EMA50_240', {
    label: 'Ema50|240',
    fieldName: 'EMA50|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA50_30: new BaseField('EMA50_30', {
    label: 'Ema50|30',
    fieldName: 'EMA50|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA50_5: new BaseField('EMA50_5', {
    label: 'Ema50|5',
    fieldName: 'EMA50|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA50_60: new BaseField('EMA50_60', {
    label: 'Ema50|60',
    fieldName: 'EMA50|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA55: new BaseField('EMA55', {
    label: 'Ema55',
    fieldName: 'EMA55',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA55_1: new BaseField('EMA55_1', {
    label: 'Ema55|1',
    fieldName: 'EMA55|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA55_120: new BaseField('EMA55_120', {
    label: 'Ema55|120',
    fieldName: 'EMA55|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA55_15: new BaseField('EMA55_15', {
    label: 'Ema55|15',
    fieldName: 'EMA55|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA55_1M: new BaseField('EMA55_1M', {
    label: 'Ema55|1M',
    fieldName: 'EMA55|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA55_1W: new BaseField('EMA55_1W', {
    label: 'Ema55|1W',
    fieldName: 'EMA55|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA55_240: new BaseField('EMA55_240', {
    label: 'Ema55|240',
    fieldName: 'EMA55|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA55_30: new BaseField('EMA55_30', {
    label: 'Ema55|30',
    fieldName: 'EMA55|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA55_5: new BaseField('EMA55_5', {
    label: 'Ema55|5',
    fieldName: 'EMA55|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA55_60: new BaseField('EMA55_60', {
    label: 'Ema55|60',
    fieldName: 'EMA55|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA5_1: new BaseField('EMA5_1', {
    label: 'Ema5|1',
    fieldName: 'EMA5|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA5_120: new BaseField('EMA5_120', {
    label: 'Ema5|120',
    fieldName: 'EMA5|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA5_15: new BaseField('EMA5_15', {
    label: 'Ema5|15',
    fieldName: 'EMA5|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA5_1M: new BaseField('EMA5_1M', {
    label: 'Ema5|1M',
    fieldName: 'EMA5|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA5_1W: new BaseField('EMA5_1W', {
    label: 'Ema5|1W',
    fieldName: 'EMA5|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA5_240: new BaseField('EMA5_240', {
    label: 'Ema5|240',
    fieldName: 'EMA5|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA5_30: new BaseField('EMA5_30', {
    label: 'Ema5|30',
    fieldName: 'EMA5|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA5_5: new BaseField('EMA5_5', {
    label: 'Ema5|5',
    fieldName: 'EMA5|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA5_60: new BaseField('EMA5_60', {
    label: 'Ema5|60',
    fieldName: 'EMA5|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA6: new BaseField('EMA6', {
    label: 'Ema6',
    fieldName: 'EMA6',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA60: new BaseField('EMA60', {
    label: 'Ema60',
    fieldName: 'EMA60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA60_1: new BaseField('EMA60_1', {
    label: 'Ema60|1',
    fieldName: 'EMA60|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA60_120: new BaseField('EMA60_120', {
    label: 'Ema60|120',
    fieldName: 'EMA60|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA60_15: new BaseField('EMA60_15', {
    label: 'Ema60|15',
    fieldName: 'EMA60|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA60_1M: new BaseField('EMA60_1M', {
    label: 'Ema60|1M',
    fieldName: 'EMA60|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA60_1W: new BaseField('EMA60_1W', {
    label: 'Ema60|1W',
    fieldName: 'EMA60|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA60_240: new BaseField('EMA60_240', {
    label: 'Ema60|240',
    fieldName: 'EMA60|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA60_30: new BaseField('EMA60_30', {
    label: 'Ema60|30',
    fieldName: 'EMA60|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA60_5: new BaseField('EMA60_5', {
    label: 'Ema60|5',
    fieldName: 'EMA60|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA60_60: new BaseField('EMA60_60', {
    label: 'Ema60|60',
    fieldName: 'EMA60|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA6_1: new BaseField('EMA6_1', {
    label: 'Ema6|1',
    fieldName: 'EMA6|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA6_120: new BaseField('EMA6_120', {
    label: 'Ema6|120',
    fieldName: 'EMA6|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA6_15: new BaseField('EMA6_15', {
    label: 'Ema6|15',
    fieldName: 'EMA6|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA6_1M: new BaseField('EMA6_1M', {
    label: 'Ema6|1M',
    fieldName: 'EMA6|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA6_1W: new BaseField('EMA6_1W', {
    label: 'Ema6|1W',
    fieldName: 'EMA6|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA6_240: new BaseField('EMA6_240', {
    label: 'Ema6|240',
    fieldName: 'EMA6|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA6_30: new BaseField('EMA6_30', {
    label: 'Ema6|30',
    fieldName: 'EMA6|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA6_5: new BaseField('EMA6_5', {
    label: 'Ema6|5',
    fieldName: 'EMA6|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA6_60: new BaseField('EMA6_60', {
    label: 'Ema6|60',
    fieldName: 'EMA6|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA7: new BaseField('EMA7', {
    label: 'Ema7',
    fieldName: 'EMA7',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA75: new BaseField('EMA75', {
    label: 'Ema75',
    fieldName: 'EMA75',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA75_1: new BaseField('EMA75_1', {
    label: 'Ema75|1',
    fieldName: 'EMA75|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA75_120: new BaseField('EMA75_120', {
    label: 'Ema75|120',
    fieldName: 'EMA75|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA75_15: new BaseField('EMA75_15', {
    label: 'Ema75|15',
    fieldName: 'EMA75|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA75_1M: new BaseField('EMA75_1M', {
    label: 'Ema75|1M',
    fieldName: 'EMA75|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA75_1W: new BaseField('EMA75_1W', {
    label: 'Ema75|1W',
    fieldName: 'EMA75|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA75_240: new BaseField('EMA75_240', {
    label: 'Ema75|240',
    fieldName: 'EMA75|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA75_30: new BaseField('EMA75_30', {
    label: 'Ema75|30',
    fieldName: 'EMA75|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA75_5: new BaseField('EMA75_5', {
    label: 'Ema75|5',
    fieldName: 'EMA75|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA75_60: new BaseField('EMA75_60', {
    label: 'Ema75|60',
    fieldName: 'EMA75|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA7_1: new BaseField('EMA7_1', {
    label: 'Ema7|1',
    fieldName: 'EMA7|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA7_120: new BaseField('EMA7_120', {
    label: 'Ema7|120',
    fieldName: 'EMA7|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA7_15: new BaseField('EMA7_15', {
    label: 'Ema7|15',
    fieldName: 'EMA7|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA7_1M: new BaseField('EMA7_1M', {
    label: 'Ema7|1M',
    fieldName: 'EMA7|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA7_1W: new BaseField('EMA7_1W', {
    label: 'Ema7|1W',
    fieldName: 'EMA7|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA7_240: new BaseField('EMA7_240', {
    label: 'Ema7|240',
    fieldName: 'EMA7|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA7_30: new BaseField('EMA7_30', {
    label: 'Ema7|30',
    fieldName: 'EMA7|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA7_5: new BaseField('EMA7_5', {
    label: 'Ema7|5',
    fieldName: 'EMA7|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA7_60: new BaseField('EMA7_60', {
    label: 'Ema7|60',
    fieldName: 'EMA7|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA8: new BaseField('EMA8', {
    label: 'Ema8',
    fieldName: 'EMA8',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA89: new BaseField('EMA89', {
    label: 'Ema89',
    fieldName: 'EMA89',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA89_1: new BaseField('EMA89_1', {
    label: 'Ema89|1',
    fieldName: 'EMA89|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA89_120: new BaseField('EMA89_120', {
    label: 'Ema89|120',
    fieldName: 'EMA89|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA89_15: new BaseField('EMA89_15', {
    label: 'Ema89|15',
    fieldName: 'EMA89|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA89_1M: new BaseField('EMA89_1M', {
    label: 'Ema89|1M',
    fieldName: 'EMA89|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA89_1W: new BaseField('EMA89_1W', {
    label: 'Ema89|1W',
    fieldName: 'EMA89|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA89_240: new BaseField('EMA89_240', {
    label: 'Ema89|240',
    fieldName: 'EMA89|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA89_30: new BaseField('EMA89_30', {
    label: 'Ema89|30',
    fieldName: 'EMA89|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA89_5: new BaseField('EMA89_5', {
    label: 'Ema89|5',
    fieldName: 'EMA89|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA89_60: new BaseField('EMA89_60', {
    label: 'Ema89|60',
    fieldName: 'EMA89|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA8_1: new BaseField('EMA8_1', {
    label: 'Ema8|1',
    fieldName: 'EMA8|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA8_120: new BaseField('EMA8_120', {
    label: 'Ema8|120',
    fieldName: 'EMA8|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA8_15: new BaseField('EMA8_15', {
    label: 'Ema8|15',
    fieldName: 'EMA8|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA8_1M: new BaseField('EMA8_1M', {
    label: 'Ema8|1M',
    fieldName: 'EMA8|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA8_1W: new BaseField('EMA8_1W', {
    label: 'Ema8|1W',
    fieldName: 'EMA8|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA8_240: new BaseField('EMA8_240', {
    label: 'Ema8|240',
    fieldName: 'EMA8|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA8_30: new BaseField('EMA8_30', {
    label: 'Ema8|30',
    fieldName: 'EMA8|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA8_5: new BaseField('EMA8_5', {
    label: 'Ema8|5',
    fieldName: 'EMA8|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA8_60: new BaseField('EMA8_60', {
    label: 'Ema8|60',
    fieldName: 'EMA8|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA9: new BaseField('EMA9', {
    label: 'Ema9',
    fieldName: 'EMA9',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA9_1: new BaseField('EMA9_1', {
    label: 'Ema9|1',
    fieldName: 'EMA9|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA9_120: new BaseField('EMA9_120', {
    label: 'Ema9|120',
    fieldName: 'EMA9|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA9_15: new BaseField('EMA9_15', {
    label: 'Ema9|15',
    fieldName: 'EMA9|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA9_1M: new BaseField('EMA9_1M', {
    label: 'Ema9|1M',
    fieldName: 'EMA9|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA9_1W: new BaseField('EMA9_1W', {
    label: 'Ema9|1W',
    fieldName: 'EMA9|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA9_240: new BaseField('EMA9_240', {
    label: 'Ema9|240',
    fieldName: 'EMA9|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA9_30: new BaseField('EMA9_30', {
    label: 'Ema9|30',
    fieldName: 'EMA9|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA9_5: new BaseField('EMA9_5', {
    label: 'Ema9|5',
    fieldName: 'EMA9|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  EMA9_60: new BaseField('EMA9_60', {
    label: 'Ema9|60',
    fieldName: 'EMA9|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  HULLMA20: new BaseField('HULLMA20', {
    label: 'Hullma20',
    fieldName: 'HullMA20',
    format: 'float',
    interval: true,
    historical: false,
  }),

  HULLMA200: new BaseField('HULLMA200', {
    label: 'Hullma200',
    fieldName: 'HullMA200',
    format: 'float',
    interval: true,
    historical: false,
  }),

  HULLMA200_1: new BaseField('HULLMA200_1', {
    label: 'Hullma200|1',
    fieldName: 'HullMA200|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  HULLMA200_120: new BaseField('HULLMA200_120', {
    label: 'Hullma200|120',
    fieldName: 'HullMA200|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  HULLMA200_15: new BaseField('HULLMA200_15', {
    label: 'Hullma200|15',
    fieldName: 'HullMA200|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  HULLMA200_1M: new BaseField('HULLMA200_1M', {
    label: 'Hullma200|1M',
    fieldName: 'HullMA200|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  HULLMA200_1W: new BaseField('HULLMA200_1W', {
    label: 'Hullma200|1W',
    fieldName: 'HullMA200|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  HULLMA200_240: new BaseField('HULLMA200_240', {
    label: 'Hullma200|240',
    fieldName: 'HullMA200|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  HULLMA200_30: new BaseField('HULLMA200_30', {
    label: 'Hullma200|30',
    fieldName: 'HullMA200|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  HULLMA200_5: new BaseField('HULLMA200_5', {
    label: 'Hullma200|5',
    fieldName: 'HullMA200|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  HULLMA200_60: new BaseField('HULLMA200_60', {
    label: 'Hullma200|60',
    fieldName: 'HullMA200|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  HULLMA20_1: new BaseField('HULLMA20_1', {
    label: 'Hullma20|1',
    fieldName: 'HullMA20|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  HULLMA20_120: new BaseField('HULLMA20_120', {
    label: 'Hullma20|120',
    fieldName: 'HullMA20|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  HULLMA20_15: new BaseField('HULLMA20_15', {
    label: 'Hullma20|15',
    fieldName: 'HullMA20|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  HULLMA20_1M: new BaseField('HULLMA20_1M', {
    label: 'Hullma20|1M',
    fieldName: 'HullMA20|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  HULLMA20_1W: new BaseField('HULLMA20_1W', {
    label: 'Hullma20|1W',
    fieldName: 'HullMA20|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  HULLMA20_240: new BaseField('HULLMA20_240', {
    label: 'Hullma20|240',
    fieldName: 'HullMA20|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  HULLMA20_30: new BaseField('HULLMA20_30', {
    label: 'Hullma20|30',
    fieldName: 'HullMA20|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  HULLMA20_5: new BaseField('HULLMA20_5', {
    label: 'Hullma20|5',
    fieldName: 'HullMA20|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  HULLMA20_60: new BaseField('HULLMA20_60', {
    label: 'Hullma20|60',
    fieldName: 'HullMA20|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  HULL_MOVING_AVERAGE_9: new BaseField('HULL_MOVING_AVERAGE_9', {
    label: 'Hull Moving Average (9)',
    fieldName: 'HullMA9',
    format: 'recommendation',
    interval: true,
    historical: false,
  }),

  HULLMA9_1: new BaseField('HULLMA9_1', {
    label: 'Hullma9|1',
    fieldName: 'HullMA9|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  HULLMA9_120: new BaseField('HULLMA9_120', {
    label: 'Hullma9|120',
    fieldName: 'HullMA9|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  HULLMA9_15: new BaseField('HULLMA9_15', {
    label: 'Hullma9|15',
    fieldName: 'HullMA9|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  HULLMA9_1M: new BaseField('HULLMA9_1M', {
    label: 'Hullma9|1M',
    fieldName: 'HullMA9|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  HULLMA9_1W: new BaseField('HULLMA9_1W', {
    label: 'Hullma9|1W',
    fieldName: 'HullMA9|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  HULLMA9_240: new BaseField('HULLMA9_240', {
    label: 'Hullma9|240',
    fieldName: 'HullMA9|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  HULLMA9_30: new BaseField('HULLMA9_30', {
    label: 'Hullma9|30',
    fieldName: 'HullMA9|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  HULLMA9_5: new BaseField('HULLMA9_5', {
    label: 'Hullma9|5',
    fieldName: 'HullMA9|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  HULLMA9_60: new BaseField('HULLMA9_60', {
    label: 'Hullma9|60',
    fieldName: 'HullMA9|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_BASE_LINE_9_26_52_26: new BaseField('ICHIMOKU_BASE_LINE_9_26_52_26', {
    label: 'Ichimoku Base Line (9, 26, 52, 26)',
    fieldName: 'Ichimoku.BLine',
    format: 'computed_recommendation',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_BLINE_20_60_120_30: new BaseField('ICHIMOKU_BLINE_20_60_120_30', {
    label: 'Ichimoku Bline 20 60 120 30',
    fieldName: 'Ichimoku.BLine_20_60_120_30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_BLINE_20_60_120_30_1: new BaseField('ICHIMOKU_BLINE_20_60_120_30_1', {
    label: 'Ichimoku Bline 20 60 120 30|1',
    fieldName: 'Ichimoku.BLine_20_60_120_30|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_BLINE_20_60_120_30_120: new BaseField('ICHIMOKU_BLINE_20_60_120_30_120', {
    label: 'Ichimoku Bline 20 60 120 30|120',
    fieldName: 'Ichimoku.BLine_20_60_120_30|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_BLINE_20_60_120_30_15: new BaseField('ICHIMOKU_BLINE_20_60_120_30_15', {
    label: 'Ichimoku Bline 20 60 120 30|15',
    fieldName: 'Ichimoku.BLine_20_60_120_30|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_BLINE_20_60_120_30_1M: new BaseField('ICHIMOKU_BLINE_20_60_120_30_1M', {
    label: 'Ichimoku Bline 20 60 120 30|1M',
    fieldName: 'Ichimoku.BLine_20_60_120_30|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_BLINE_20_60_120_30_1W: new BaseField('ICHIMOKU_BLINE_20_60_120_30_1W', {
    label: 'Ichimoku Bline 20 60 120 30|1W',
    fieldName: 'Ichimoku.BLine_20_60_120_30|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_BLINE_20_60_120_30_240: new BaseField('ICHIMOKU_BLINE_20_60_120_30_240', {
    label: 'Ichimoku Bline 20 60 120 30|240',
    fieldName: 'Ichimoku.BLine_20_60_120_30|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_BLINE_20_60_120_30_30: new BaseField('ICHIMOKU_BLINE_20_60_120_30_30', {
    label: 'Ichimoku Bline 20 60 120 30|30',
    fieldName: 'Ichimoku.BLine_20_60_120_30|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_BLINE_20_60_120_30_5: new BaseField('ICHIMOKU_BLINE_20_60_120_30_5', {
    label: 'Ichimoku Bline 20 60 120 30|5',
    fieldName: 'Ichimoku.BLine_20_60_120_30|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_BLINE_20_60_120_30_60: new BaseField('ICHIMOKU_BLINE_20_60_120_30_60', {
    label: 'Ichimoku Bline 20 60 120 30|60',
    fieldName: 'Ichimoku.BLine_20_60_120_30|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_BLINE_1: new BaseField('ICHIMOKU_BLINE_1', {
    label: 'Ichimoku Bline|1',
    fieldName: 'Ichimoku.BLine|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_BLINE_120: new BaseField('ICHIMOKU_BLINE_120', {
    label: 'Ichimoku Bline|120',
    fieldName: 'Ichimoku.BLine|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_BLINE_15: new BaseField('ICHIMOKU_BLINE_15', {
    label: 'Ichimoku Bline|15',
    fieldName: 'Ichimoku.BLine|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_BLINE_1M: new BaseField('ICHIMOKU_BLINE_1M', {
    label: 'Ichimoku Bline|1M',
    fieldName: 'Ichimoku.BLine|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_BLINE_1W: new BaseField('ICHIMOKU_BLINE_1W', {
    label: 'Ichimoku Bline|1W',
    fieldName: 'Ichimoku.BLine|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_BLINE_240: new BaseField('ICHIMOKU_BLINE_240', {
    label: 'Ichimoku Bline|240',
    fieldName: 'Ichimoku.BLine|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_BLINE_30: new BaseField('ICHIMOKU_BLINE_30', {
    label: 'Ichimoku Bline|30',
    fieldName: 'Ichimoku.BLine|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_BLINE_5: new BaseField('ICHIMOKU_BLINE_5', {
    label: 'Ichimoku Bline|5',
    fieldName: 'Ichimoku.BLine|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_BLINE_60: new BaseField('ICHIMOKU_BLINE_60', {
    label: 'Ichimoku Bline|60',
    fieldName: 'Ichimoku.BLine|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_CONVERSION_LINE_9_26_52_26: new BaseField('ICHIMOKU_CONVERSION_LINE_9_26_52_26', {
    label: 'Ichimoku Conversion Line (9, 26, 52, 26)',
    fieldName: 'Ichimoku.CLine',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_CLINE_20_60_120_30: new BaseField('ICHIMOKU_CLINE_20_60_120_30', {
    label: 'Ichimoku Cline 20 60 120 30',
    fieldName: 'Ichimoku.CLine_20_60_120_30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_CLINE_20_60_120_30_1: new BaseField('ICHIMOKU_CLINE_20_60_120_30_1', {
    label: 'Ichimoku Cline 20 60 120 30|1',
    fieldName: 'Ichimoku.CLine_20_60_120_30|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_CLINE_20_60_120_30_120: new BaseField('ICHIMOKU_CLINE_20_60_120_30_120', {
    label: 'Ichimoku Cline 20 60 120 30|120',
    fieldName: 'Ichimoku.CLine_20_60_120_30|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_CLINE_20_60_120_30_15: new BaseField('ICHIMOKU_CLINE_20_60_120_30_15', {
    label: 'Ichimoku Cline 20 60 120 30|15',
    fieldName: 'Ichimoku.CLine_20_60_120_30|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_CLINE_20_60_120_30_1M: new BaseField('ICHIMOKU_CLINE_20_60_120_30_1M', {
    label: 'Ichimoku Cline 20 60 120 30|1M',
    fieldName: 'Ichimoku.CLine_20_60_120_30|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_CLINE_20_60_120_30_1W: new BaseField('ICHIMOKU_CLINE_20_60_120_30_1W', {
    label: 'Ichimoku Cline 20 60 120 30|1W',
    fieldName: 'Ichimoku.CLine_20_60_120_30|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_CLINE_20_60_120_30_240: new BaseField('ICHIMOKU_CLINE_20_60_120_30_240', {
    label: 'Ichimoku Cline 20 60 120 30|240',
    fieldName: 'Ichimoku.CLine_20_60_120_30|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_CLINE_20_60_120_30_30: new BaseField('ICHIMOKU_CLINE_20_60_120_30_30', {
    label: 'Ichimoku Cline 20 60 120 30|30',
    fieldName: 'Ichimoku.CLine_20_60_120_30|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_CLINE_20_60_120_30_5: new BaseField('ICHIMOKU_CLINE_20_60_120_30_5', {
    label: 'Ichimoku Cline 20 60 120 30|5',
    fieldName: 'Ichimoku.CLine_20_60_120_30|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_CLINE_20_60_120_30_60: new BaseField('ICHIMOKU_CLINE_20_60_120_30_60', {
    label: 'Ichimoku Cline 20 60 120 30|60',
    fieldName: 'Ichimoku.CLine_20_60_120_30|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_CLINE_1: new BaseField('ICHIMOKU_CLINE_1', {
    label: 'Ichimoku Cline|1',
    fieldName: 'Ichimoku.CLine|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_CLINE_120: new BaseField('ICHIMOKU_CLINE_120', {
    label: 'Ichimoku Cline|120',
    fieldName: 'Ichimoku.CLine|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_CLINE_15: new BaseField('ICHIMOKU_CLINE_15', {
    label: 'Ichimoku Cline|15',
    fieldName: 'Ichimoku.CLine|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_CLINE_1M: new BaseField('ICHIMOKU_CLINE_1M', {
    label: 'Ichimoku Cline|1M',
    fieldName: 'Ichimoku.CLine|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_CLINE_1W: new BaseField('ICHIMOKU_CLINE_1W', {
    label: 'Ichimoku Cline|1W',
    fieldName: 'Ichimoku.CLine|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_CLINE_240: new BaseField('ICHIMOKU_CLINE_240', {
    label: 'Ichimoku Cline|240',
    fieldName: 'Ichimoku.CLine|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_CLINE_30: new BaseField('ICHIMOKU_CLINE_30', {
    label: 'Ichimoku Cline|30',
    fieldName: 'Ichimoku.CLine|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_CLINE_5: new BaseField('ICHIMOKU_CLINE_5', {
    label: 'Ichimoku Cline|5',
    fieldName: 'Ichimoku.CLine|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_CLINE_60: new BaseField('ICHIMOKU_CLINE_60', {
    label: 'Ichimoku Cline|60',
    fieldName: 'Ichimoku.CLine|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_LEADING_SPAN_A_9_26_52_26: new BaseField('ICHIMOKU_LEADING_SPAN_A_9_26_52_26', {
    label: 'Ichimoku Leading Span A (9, 26, 52, 26)',
    fieldName: 'Ichimoku.Lead1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_LEAD1_20_60_120_30: new BaseField('ICHIMOKU_LEAD1_20_60_120_30', {
    label: 'Ichimoku Lead1 20 60 120 30',
    fieldName: 'Ichimoku.Lead1_20_60_120_30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_LEAD1_20_60_120_30_1: new BaseField('ICHIMOKU_LEAD1_20_60_120_30_1', {
    label: 'Ichimoku Lead1 20 60 120 30|1',
    fieldName: 'Ichimoku.Lead1_20_60_120_30|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_LEAD1_20_60_120_30_120: new BaseField('ICHIMOKU_LEAD1_20_60_120_30_120', {
    label: 'Ichimoku Lead1 20 60 120 30|120',
    fieldName: 'Ichimoku.Lead1_20_60_120_30|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_LEAD1_20_60_120_30_15: new BaseField('ICHIMOKU_LEAD1_20_60_120_30_15', {
    label: 'Ichimoku Lead1 20 60 120 30|15',
    fieldName: 'Ichimoku.Lead1_20_60_120_30|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_LEAD1_20_60_120_30_1M: new BaseField('ICHIMOKU_LEAD1_20_60_120_30_1M', {
    label: 'Ichimoku Lead1 20 60 120 30|1M',
    fieldName: 'Ichimoku.Lead1_20_60_120_30|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_LEAD1_20_60_120_30_1W: new BaseField('ICHIMOKU_LEAD1_20_60_120_30_1W', {
    label: 'Ichimoku Lead1 20 60 120 30|1W',
    fieldName: 'Ichimoku.Lead1_20_60_120_30|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_LEAD1_20_60_120_30_240: new BaseField('ICHIMOKU_LEAD1_20_60_120_30_240', {
    label: 'Ichimoku Lead1 20 60 120 30|240',
    fieldName: 'Ichimoku.Lead1_20_60_120_30|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_LEAD1_20_60_120_30_30: new BaseField('ICHIMOKU_LEAD1_20_60_120_30_30', {
    label: 'Ichimoku Lead1 20 60 120 30|30',
    fieldName: 'Ichimoku.Lead1_20_60_120_30|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_LEAD1_20_60_120_30_5: new BaseField('ICHIMOKU_LEAD1_20_60_120_30_5', {
    label: 'Ichimoku Lead1 20 60 120 30|5',
    fieldName: 'Ichimoku.Lead1_20_60_120_30|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_LEAD1_20_60_120_30_60: new BaseField('ICHIMOKU_LEAD1_20_60_120_30_60', {
    label: 'Ichimoku Lead1 20 60 120 30|60',
    fieldName: 'Ichimoku.Lead1_20_60_120_30|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_LEAD1_1: new BaseField('ICHIMOKU_LEAD1_1', {
    label: 'Ichimoku Lead1|1',
    fieldName: 'Ichimoku.Lead1|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_LEAD1_120: new BaseField('ICHIMOKU_LEAD1_120', {
    label: 'Ichimoku Lead1|120',
    fieldName: 'Ichimoku.Lead1|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_LEAD1_15: new BaseField('ICHIMOKU_LEAD1_15', {
    label: 'Ichimoku Lead1|15',
    fieldName: 'Ichimoku.Lead1|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_LEAD1_1M: new BaseField('ICHIMOKU_LEAD1_1M', {
    label: 'Ichimoku Lead1|1M',
    fieldName: 'Ichimoku.Lead1|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_LEAD1_1W: new BaseField('ICHIMOKU_LEAD1_1W', {
    label: 'Ichimoku Lead1|1W',
    fieldName: 'Ichimoku.Lead1|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_LEAD1_240: new BaseField('ICHIMOKU_LEAD1_240', {
    label: 'Ichimoku Lead1|240',
    fieldName: 'Ichimoku.Lead1|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_LEAD1_30: new BaseField('ICHIMOKU_LEAD1_30', {
    label: 'Ichimoku Lead1|30',
    fieldName: 'Ichimoku.Lead1|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_LEAD1_5: new BaseField('ICHIMOKU_LEAD1_5', {
    label: 'Ichimoku Lead1|5',
    fieldName: 'Ichimoku.Lead1|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_LEAD1_60: new BaseField('ICHIMOKU_LEAD1_60', {
    label: 'Ichimoku Lead1|60',
    fieldName: 'Ichimoku.Lead1|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_LEADING_SPAN_B_9_26_52_26: new BaseField('ICHIMOKU_LEADING_SPAN_B_9_26_52_26', {
    label: 'Ichimoku Leading Span B (9, 26, 52, 26)',
    fieldName: 'Ichimoku.Lead2',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_LEAD2_20_60_120_30: new BaseField('ICHIMOKU_LEAD2_20_60_120_30', {
    label: 'Ichimoku Lead2 20 60 120 30',
    fieldName: 'Ichimoku.Lead2_20_60_120_30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_LEAD2_20_60_120_30_1: new BaseField('ICHIMOKU_LEAD2_20_60_120_30_1', {
    label: 'Ichimoku Lead2 20 60 120 30|1',
    fieldName: 'Ichimoku.Lead2_20_60_120_30|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_LEAD2_20_60_120_30_120: new BaseField('ICHIMOKU_LEAD2_20_60_120_30_120', {
    label: 'Ichimoku Lead2 20 60 120 30|120',
    fieldName: 'Ichimoku.Lead2_20_60_120_30|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_LEAD2_20_60_120_30_15: new BaseField('ICHIMOKU_LEAD2_20_60_120_30_15', {
    label: 'Ichimoku Lead2 20 60 120 30|15',
    fieldName: 'Ichimoku.Lead2_20_60_120_30|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_LEAD2_20_60_120_30_1M: new BaseField('ICHIMOKU_LEAD2_20_60_120_30_1M', {
    label: 'Ichimoku Lead2 20 60 120 30|1M',
    fieldName: 'Ichimoku.Lead2_20_60_120_30|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_LEAD2_20_60_120_30_1W: new BaseField('ICHIMOKU_LEAD2_20_60_120_30_1W', {
    label: 'Ichimoku Lead2 20 60 120 30|1W',
    fieldName: 'Ichimoku.Lead2_20_60_120_30|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_LEAD2_20_60_120_30_240: new BaseField('ICHIMOKU_LEAD2_20_60_120_30_240', {
    label: 'Ichimoku Lead2 20 60 120 30|240',
    fieldName: 'Ichimoku.Lead2_20_60_120_30|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_LEAD2_20_60_120_30_30: new BaseField('ICHIMOKU_LEAD2_20_60_120_30_30', {
    label: 'Ichimoku Lead2 20 60 120 30|30',
    fieldName: 'Ichimoku.Lead2_20_60_120_30|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_LEAD2_20_60_120_30_5: new BaseField('ICHIMOKU_LEAD2_20_60_120_30_5', {
    label: 'Ichimoku Lead2 20 60 120 30|5',
    fieldName: 'Ichimoku.Lead2_20_60_120_30|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_LEAD2_20_60_120_30_60: new BaseField('ICHIMOKU_LEAD2_20_60_120_30_60', {
    label: 'Ichimoku Lead2 20 60 120 30|60',
    fieldName: 'Ichimoku.Lead2_20_60_120_30|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_LEAD2_1: new BaseField('ICHIMOKU_LEAD2_1', {
    label: 'Ichimoku Lead2|1',
    fieldName: 'Ichimoku.Lead2|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_LEAD2_120: new BaseField('ICHIMOKU_LEAD2_120', {
    label: 'Ichimoku Lead2|120',
    fieldName: 'Ichimoku.Lead2|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_LEAD2_15: new BaseField('ICHIMOKU_LEAD2_15', {
    label: 'Ichimoku Lead2|15',
    fieldName: 'Ichimoku.Lead2|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_LEAD2_1M: new BaseField('ICHIMOKU_LEAD2_1M', {
    label: 'Ichimoku Lead2|1M',
    fieldName: 'Ichimoku.Lead2|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_LEAD2_1W: new BaseField('ICHIMOKU_LEAD2_1W', {
    label: 'Ichimoku Lead2|1W',
    fieldName: 'Ichimoku.Lead2|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_LEAD2_240: new BaseField('ICHIMOKU_LEAD2_240', {
    label: 'Ichimoku Lead2|240',
    fieldName: 'Ichimoku.Lead2|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_LEAD2_30: new BaseField('ICHIMOKU_LEAD2_30', {
    label: 'Ichimoku Lead2|30',
    fieldName: 'Ichimoku.Lead2|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_LEAD2_5: new BaseField('ICHIMOKU_LEAD2_5', {
    label: 'Ichimoku Lead2|5',
    fieldName: 'Ichimoku.Lead2|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_LEAD2_60: new BaseField('ICHIMOKU_LEAD2_60', {
    label: 'Ichimoku Lead2|60',
    fieldName: 'Ichimoku.Lead2|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  MACD_HIST: new BaseField('MACD_HIST', {
    label: 'MACD Hist',
    fieldName: 'MACD.hist',
    format: 'float',
    interval: true,
    historical: false,
  }),

  MACD_HIST_1: new BaseField('MACD_HIST_1', {
    label: 'MACD Hist|1',
    fieldName: 'MACD.hist|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  MACD_HIST_120: new BaseField('MACD_HIST_120', {
    label: 'MACD Hist|120',
    fieldName: 'MACD.hist|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  MACD_HIST_15: new BaseField('MACD_HIST_15', {
    label: 'MACD Hist|15',
    fieldName: 'MACD.hist|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  MACD_HIST_1M: new BaseField('MACD_HIST_1M', {
    label: 'MACD Hist|1M',
    fieldName: 'MACD.hist|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  MACD_HIST_1W: new BaseField('MACD_HIST_1W', {
    label: 'MACD Hist|1W',
    fieldName: 'MACD.hist|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  MACD_HIST_240: new BaseField('MACD_HIST_240', {
    label: 'MACD Hist|240',
    fieldName: 'MACD.hist|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  MACD_HIST_30: new BaseField('MACD_HIST_30', {
    label: 'MACD Hist|30',
    fieldName: 'MACD.hist|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  MACD_HIST_5: new BaseField('MACD_HIST_5', {
    label: 'MACD Hist|5',
    fieldName: 'MACD.hist|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  MACD_HIST_60: new BaseField('MACD_HIST_60', {
    label: 'MACD Hist|60',
    fieldName: 'MACD.hist|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  MACD_LEVEL_12_26: new BaseField('MACD_LEVEL_12_26', {
    label: 'MACD Level (12, 26)',
    fieldName: 'MACD.macd',
    format: 'computed_recommendation',
    interval: true,
    historical: false,
  }),

  MACD_MACD_1: new BaseField('MACD_MACD_1', {
    label: 'MACD MACD|1',
    fieldName: 'MACD.macd|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  MACD_MACD_120: new BaseField('MACD_MACD_120', {
    label: 'MACD MACD|120',
    fieldName: 'MACD.macd|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  MACD_MACD_15: new BaseField('MACD_MACD_15', {
    label: 'MACD MACD|15',
    fieldName: 'MACD.macd|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  MACD_MACD_1M: new BaseField('MACD_MACD_1M', {
    label: 'MACD MACD|1M',
    fieldName: 'MACD.macd|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  MACD_MACD_1W: new BaseField('MACD_MACD_1W', {
    label: 'MACD MACD|1W',
    fieldName: 'MACD.macd|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  MACD_MACD_240: new BaseField('MACD_MACD_240', {
    label: 'MACD MACD|240',
    fieldName: 'MACD.macd|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  MACD_MACD_30: new BaseField('MACD_MACD_30', {
    label: 'MACD MACD|30',
    fieldName: 'MACD.macd|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  MACD_MACD_5: new BaseField('MACD_MACD_5', {
    label: 'MACD MACD|5',
    fieldName: 'MACD.macd|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  MACD_MACD_60: new BaseField('MACD_MACD_60', {
    label: 'MACD MACD|60',
    fieldName: 'MACD.macd|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  MACD_SIGNAL_12_26: new BaseField('MACD_SIGNAL_12_26', {
    label: 'MACD Signal (12, 26)',
    fieldName: 'MACD.signal',
    format: 'float',
    interval: true,
    historical: false,
  }),

  MACD_SIGNAL_1: new BaseField('MACD_SIGNAL_1', {
    label: 'MACD Signal|1',
    fieldName: 'MACD.signal|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  MACD_SIGNAL_120: new BaseField('MACD_SIGNAL_120', {
    label: 'MACD Signal|120',
    fieldName: 'MACD.signal|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  MACD_SIGNAL_15: new BaseField('MACD_SIGNAL_15', {
    label: 'MACD Signal|15',
    fieldName: 'MACD.signal|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  MACD_SIGNAL_1M: new BaseField('MACD_SIGNAL_1M', {
    label: 'MACD Signal|1M',
    fieldName: 'MACD.signal|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  MACD_SIGNAL_1W: new BaseField('MACD_SIGNAL_1W', {
    label: 'MACD Signal|1W',
    fieldName: 'MACD.signal|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  MACD_SIGNAL_240: new BaseField('MACD_SIGNAL_240', {
    label: 'MACD Signal|240',
    fieldName: 'MACD.signal|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  MACD_SIGNAL_30: new BaseField('MACD_SIGNAL_30', {
    label: 'MACD Signal|30',
    fieldName: 'MACD.signal|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  MACD_SIGNAL_5: new BaseField('MACD_SIGNAL_5', {
    label: 'MACD Signal|5',
    fieldName: 'MACD.signal|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  MACD_SIGNAL_60: new BaseField('MACD_SIGNAL_60', {
    label: 'MACD Signal|60',
    fieldName: 'MACD.signal|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  REC_HULLMA9: new BaseField('REC_HULLMA9', {
    label: 'Rec Hullma9',
    fieldName: 'Rec.HullMA9',
    format: 'rating',
    interval: true,
    historical: false,
  }),

  REC_HULLMA9_1: new BaseField('REC_HULLMA9_1', {
    label: 'Rec Hullma9|1',
    fieldName: 'Rec.HullMA9|1',
    format: 'rating',
    interval: true,
    historical: false,
  }),

  REC_HULLMA9_120: new BaseField('REC_HULLMA9_120', {
    label: 'Rec Hullma9|120',
    fieldName: 'Rec.HullMA9|120',
    format: 'rating',
    interval: true,
    historical: false,
  }),

  REC_HULLMA9_15: new BaseField('REC_HULLMA9_15', {
    label: 'Rec Hullma9|15',
    fieldName: 'Rec.HullMA9|15',
    format: 'rating',
    interval: true,
    historical: false,
  }),

  REC_HULLMA9_1M: new BaseField('REC_HULLMA9_1M', {
    label: 'Rec Hullma9|1M',
    fieldName: 'Rec.HullMA9|1M',
    format: 'rating',
    interval: true,
    historical: false,
  }),

  REC_HULLMA9_1W: new BaseField('REC_HULLMA9_1W', {
    label: 'Rec Hullma9|1W',
    fieldName: 'Rec.HullMA9|1W',
    format: 'rating',
    interval: true,
    historical: false,
  }),

  REC_HULLMA9_240: new BaseField('REC_HULLMA9_240', {
    label: 'Rec Hullma9|240',
    fieldName: 'Rec.HullMA9|240',
    format: 'rating',
    interval: true,
    historical: false,
  }),

  REC_HULLMA9_30: new BaseField('REC_HULLMA9_30', {
    label: 'Rec Hullma9|30',
    fieldName: 'Rec.HullMA9|30',
    format: 'rating',
    interval: true,
    historical: false,
  }),

  REC_HULLMA9_5: new BaseField('REC_HULLMA9_5', {
    label: 'Rec Hullma9|5',
    fieldName: 'Rec.HullMA9|5',
    format: 'rating',
    interval: true,
    historical: false,
  }),

  REC_HULLMA9_60: new BaseField('REC_HULLMA9_60', {
    label: 'Rec Hullma9|60',
    fieldName: 'Rec.HullMA9|60',
    format: 'rating',
    interval: true,
    historical: false,
  }),

  REC_ICHIMOKU: new BaseField('REC_ICHIMOKU', {
    label: 'Rec Ichimoku',
    fieldName: 'Rec.Ichimoku',
    format: 'rating',
    interval: true,
    historical: false,
  }),

  REC_ICHIMOKU_1: new BaseField('REC_ICHIMOKU_1', {
    label: 'Rec Ichimoku|1',
    fieldName: 'Rec.Ichimoku|1',
    format: 'rating',
    interval: true,
    historical: false,
  }),

  REC_ICHIMOKU_120: new BaseField('REC_ICHIMOKU_120', {
    label: 'Rec Ichimoku|120',
    fieldName: 'Rec.Ichimoku|120',
    format: 'rating',
    interval: true,
    historical: false,
  }),

  REC_ICHIMOKU_15: new BaseField('REC_ICHIMOKU_15', {
    label: 'Rec Ichimoku|15',
    fieldName: 'Rec.Ichimoku|15',
    format: 'rating',
    interval: true,
    historical: false,
  }),

  REC_ICHIMOKU_1M: new BaseField('REC_ICHIMOKU_1M', {
    label: 'Rec Ichimoku|1M',
    fieldName: 'Rec.Ichimoku|1M',
    format: 'rating',
    interval: true,
    historical: false,
  }),

  REC_ICHIMOKU_1W: new BaseField('REC_ICHIMOKU_1W', {
    label: 'Rec Ichimoku|1W',
    fieldName: 'Rec.Ichimoku|1W',
    format: 'rating',
    interval: true,
    historical: false,
  }),

  REC_ICHIMOKU_240: new BaseField('REC_ICHIMOKU_240', {
    label: 'Rec Ichimoku|240',
    fieldName: 'Rec.Ichimoku|240',
    format: 'rating',
    interval: true,
    historical: false,
  }),

  REC_ICHIMOKU_30: new BaseField('REC_ICHIMOKU_30', {
    label: 'Rec Ichimoku|30',
    fieldName: 'Rec.Ichimoku|30',
    format: 'rating',
    interval: true,
    historical: false,
  }),

  REC_ICHIMOKU_5: new BaseField('REC_ICHIMOKU_5', {
    label: 'Rec Ichimoku|5',
    fieldName: 'Rec.Ichimoku|5',
    format: 'rating',
    interval: true,
    historical: false,
  }),

  REC_ICHIMOKU_60: new BaseField('REC_ICHIMOKU_60', {
    label: 'Rec Ichimoku|60',
    fieldName: 'Rec.Ichimoku|60',
    format: 'rating',
    interval: true,
    historical: false,
  }),

  REC_VWMA: new BaseField('REC_VWMA', {
    label: 'Rec VWMA',
    fieldName: 'Rec.VWMA',
    format: 'rating',
    interval: true,
    historical: false,
  }),

  REC_VWMA_1: new BaseField('REC_VWMA_1', {
    label: 'Rec VWMA|1',
    fieldName: 'Rec.VWMA|1',
    format: 'rating',
    interval: true,
    historical: false,
  }),

  REC_VWMA_120: new BaseField('REC_VWMA_120', {
    label: 'Rec VWMA|120',
    fieldName: 'Rec.VWMA|120',
    format: 'rating',
    interval: true,
    historical: false,
  }),

  REC_VWMA_15: new BaseField('REC_VWMA_15', {
    label: 'Rec VWMA|15',
    fieldName: 'Rec.VWMA|15',
    format: 'rating',
    interval: true,
    historical: false,
  }),

  REC_VWMA_1M: new BaseField('REC_VWMA_1M', {
    label: 'Rec VWMA|1M',
    fieldName: 'Rec.VWMA|1M',
    format: 'rating',
    interval: true,
    historical: false,
  }),

  REC_VWMA_1W: new BaseField('REC_VWMA_1W', {
    label: 'Rec VWMA|1W',
    fieldName: 'Rec.VWMA|1W',
    format: 'rating',
    interval: true,
    historical: false,
  }),

  REC_VWMA_240: new BaseField('REC_VWMA_240', {
    label: 'Rec VWMA|240',
    fieldName: 'Rec.VWMA|240',
    format: 'rating',
    interval: true,
    historical: false,
  }),

  REC_VWMA_30: new BaseField('REC_VWMA_30', {
    label: 'Rec VWMA|30',
    fieldName: 'Rec.VWMA|30',
    format: 'rating',
    interval: true,
    historical: false,
  }),

  REC_VWMA_5: new BaseField('REC_VWMA_5', {
    label: 'Rec VWMA|5',
    fieldName: 'Rec.VWMA|5',
    format: 'rating',
    interval: true,
    historical: false,
  }),

  REC_VWMA_60: new BaseField('REC_VWMA_60', {
    label: 'Rec VWMA|60',
    fieldName: 'Rec.VWMA|60',
    format: 'rating',
    interval: true,
    historical: false,
  }),

  MOVING_AVERAGES_RATING: new BaseField('MOVING_AVERAGES_RATING', {
    label: 'Moving Averages Rating',
    fieldName: 'Recommend.MA',
    format: 'text',
    interval: true,
    historical: false,
  }),

  RECOMMEND_MA_1: new BaseField('RECOMMEND_MA_1', {
    label: 'Recommend Ma|1',
    fieldName: 'Recommend.MA|1',
    format: 'rating',
    interval: true,
    historical: false,
  }),

  RECOMMEND_MA_120: new BaseField('RECOMMEND_MA_120', {
    label: 'Recommend Ma|120',
    fieldName: 'Recommend.MA|120',
    format: 'rating',
    interval: true,
    historical: false,
  }),

  RECOMMEND_MA_15: new BaseField('RECOMMEND_MA_15', {
    label: 'Recommend Ma|15',
    fieldName: 'Recommend.MA|15',
    format: 'rating',
    interval: true,
    historical: false,
  }),

  RECOMMEND_MA_1M: new BaseField('RECOMMEND_MA_1M', {
    label: 'Recommend Ma|1M',
    fieldName: 'Recommend.MA|1M',
    format: 'rating',
    interval: true,
    historical: false,
  }),

  RECOMMEND_MA_1W: new BaseField('RECOMMEND_MA_1W', {
    label: 'Recommend Ma|1W',
    fieldName: 'Recommend.MA|1W',
    format: 'rating',
    interval: true,
    historical: false,
  }),

  RECOMMEND_MA_240: new BaseField('RECOMMEND_MA_240', {
    label: 'Recommend Ma|240',
    fieldName: 'Recommend.MA|240',
    format: 'rating',
    interval: true,
    historical: false,
  }),

  RECOMMEND_MA_30: new BaseField('RECOMMEND_MA_30', {
    label: 'Recommend Ma|30',
    fieldName: 'Recommend.MA|30',
    format: 'rating',
    interval: true,
    historical: false,
  }),

  RECOMMEND_MA_5: new BaseField('RECOMMEND_MA_5', {
    label: 'Recommend Ma|5',
    fieldName: 'Recommend.MA|5',
    format: 'rating',
    interval: true,
    historical: false,
  }),

  RECOMMEND_MA_60: new BaseField('RECOMMEND_MA_60', {
    label: 'Recommend Ma|60',
    fieldName: 'Recommend.MA|60',
    format: 'rating',
    interval: true,
    historical: false,
  }),

  SIMPLE_MOVING_AVERAGE_10: new BaseField('SIMPLE_MOVING_AVERAGE_10', {
    label: 'Simple Moving Average (10)',
    fieldName: 'SMA10',
    format: 'computed_recommendation',
    interval: true,
    historical: false,
  }),

  SIMPLE_MOVING_AVERAGE_100: new BaseField('SIMPLE_MOVING_AVERAGE_100', {
    label: 'Simple Moving Average (100)',
    fieldName: 'SMA100',
    format: 'computed_recommendation',
    interval: true,
    historical: false,
  }),

  SMA100_1: new BaseField('SMA100_1', {
    label: 'Sma100|1',
    fieldName: 'SMA100|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA100_120: new BaseField('SMA100_120', {
    label: 'Sma100|120',
    fieldName: 'SMA100|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA100_15: new BaseField('SMA100_15', {
    label: 'Sma100|15',
    fieldName: 'SMA100|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA100_1M: new BaseField('SMA100_1M', {
    label: 'Sma100|1M',
    fieldName: 'SMA100|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA100_1W: new BaseField('SMA100_1W', {
    label: 'Sma100|1W',
    fieldName: 'SMA100|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA100_240: new BaseField('SMA100_240', {
    label: 'Sma100|240',
    fieldName: 'SMA100|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA100_30: new BaseField('SMA100_30', {
    label: 'Sma100|30',
    fieldName: 'SMA100|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA100_5: new BaseField('SMA100_5', {
    label: 'Sma100|5',
    fieldName: 'SMA100|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA100_60: new BaseField('SMA100_60', {
    label: 'Sma100|60',
    fieldName: 'SMA100|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA10_1: new BaseField('SMA10_1', {
    label: 'Sma10|1',
    fieldName: 'SMA10|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA10_120: new BaseField('SMA10_120', {
    label: 'Sma10|120',
    fieldName: 'SMA10|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA10_15: new BaseField('SMA10_15', {
    label: 'Sma10|15',
    fieldName: 'SMA10|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA10_1M: new BaseField('SMA10_1M', {
    label: 'Sma10|1M',
    fieldName: 'SMA10|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA10_1W: new BaseField('SMA10_1W', {
    label: 'Sma10|1W',
    fieldName: 'SMA10|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA10_240: new BaseField('SMA10_240', {
    label: 'Sma10|240',
    fieldName: 'SMA10|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA10_30: new BaseField('SMA10_30', {
    label: 'Sma10|30',
    fieldName: 'SMA10|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA10_5: new BaseField('SMA10_5', {
    label: 'Sma10|5',
    fieldName: 'SMA10|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA10_60: new BaseField('SMA10_60', {
    label: 'Sma10|60',
    fieldName: 'SMA10|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA12: new BaseField('SMA12', {
    label: 'Sma12',
    fieldName: 'SMA12',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA120: new BaseField('SMA120', {
    label: 'Sma120',
    fieldName: 'SMA120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA120_1: new BaseField('SMA120_1', {
    label: 'Sma120|1',
    fieldName: 'SMA120|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA120_120: new BaseField('SMA120_120', {
    label: 'Sma120|120',
    fieldName: 'SMA120|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA120_15: new BaseField('SMA120_15', {
    label: 'Sma120|15',
    fieldName: 'SMA120|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA120_1M: new BaseField('SMA120_1M', {
    label: 'Sma120|1M',
    fieldName: 'SMA120|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA120_1W: new BaseField('SMA120_1W', {
    label: 'Sma120|1W',
    fieldName: 'SMA120|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA120_240: new BaseField('SMA120_240', {
    label: 'Sma120|240',
    fieldName: 'SMA120|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA120_30: new BaseField('SMA120_30', {
    label: 'Sma120|30',
    fieldName: 'SMA120|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA120_5: new BaseField('SMA120_5', {
    label: 'Sma120|5',
    fieldName: 'SMA120|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA120_60: new BaseField('SMA120_60', {
    label: 'Sma120|60',
    fieldName: 'SMA120|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA12_1: new BaseField('SMA12_1', {
    label: 'Sma12|1',
    fieldName: 'SMA12|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA12_120: new BaseField('SMA12_120', {
    label: 'Sma12|120',
    fieldName: 'SMA12|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA12_15: new BaseField('SMA12_15', {
    label: 'Sma12|15',
    fieldName: 'SMA12|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA12_1M: new BaseField('SMA12_1M', {
    label: 'Sma12|1M',
    fieldName: 'SMA12|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA12_1W: new BaseField('SMA12_1W', {
    label: 'Sma12|1W',
    fieldName: 'SMA12|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA12_240: new BaseField('SMA12_240', {
    label: 'Sma12|240',
    fieldName: 'SMA12|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA12_30: new BaseField('SMA12_30', {
    label: 'Sma12|30',
    fieldName: 'SMA12|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA12_5: new BaseField('SMA12_5', {
    label: 'Sma12|5',
    fieldName: 'SMA12|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA12_60: new BaseField('SMA12_60', {
    label: 'Sma12|60',
    fieldName: 'SMA12|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA13: new BaseField('SMA13', {
    label: 'Sma13',
    fieldName: 'SMA13',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA13_1: new BaseField('SMA13_1', {
    label: 'Sma13|1',
    fieldName: 'SMA13|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA13_120: new BaseField('SMA13_120', {
    label: 'Sma13|120',
    fieldName: 'SMA13|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA13_15: new BaseField('SMA13_15', {
    label: 'Sma13|15',
    fieldName: 'SMA13|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA13_1M: new BaseField('SMA13_1M', {
    label: 'Sma13|1M',
    fieldName: 'SMA13|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA13_1W: new BaseField('SMA13_1W', {
    label: 'Sma13|1W',
    fieldName: 'SMA13|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA13_240: new BaseField('SMA13_240', {
    label: 'Sma13|240',
    fieldName: 'SMA13|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA13_30: new BaseField('SMA13_30', {
    label: 'Sma13|30',
    fieldName: 'SMA13|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA13_5: new BaseField('SMA13_5', {
    label: 'Sma13|5',
    fieldName: 'SMA13|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA13_60: new BaseField('SMA13_60', {
    label: 'Sma13|60',
    fieldName: 'SMA13|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA14: new BaseField('SMA14', {
    label: 'Sma14',
    fieldName: 'SMA14',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA144: new BaseField('SMA144', {
    label: 'Sma144',
    fieldName: 'SMA144',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA144_1: new BaseField('SMA144_1', {
    label: 'Sma144|1',
    fieldName: 'SMA144|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA144_120: new BaseField('SMA144_120', {
    label: 'Sma144|120',
    fieldName: 'SMA144|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA144_15: new BaseField('SMA144_15', {
    label: 'Sma144|15',
    fieldName: 'SMA144|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA144_1M: new BaseField('SMA144_1M', {
    label: 'Sma144|1M',
    fieldName: 'SMA144|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA144_1W: new BaseField('SMA144_1W', {
    label: 'Sma144|1W',
    fieldName: 'SMA144|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA144_240: new BaseField('SMA144_240', {
    label: 'Sma144|240',
    fieldName: 'SMA144|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA144_30: new BaseField('SMA144_30', {
    label: 'Sma144|30',
    fieldName: 'SMA144|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA144_5: new BaseField('SMA144_5', {
    label: 'Sma144|5',
    fieldName: 'SMA144|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA144_60: new BaseField('SMA144_60', {
    label: 'Sma144|60',
    fieldName: 'SMA144|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA14_1: new BaseField('SMA14_1', {
    label: 'Sma14|1',
    fieldName: 'SMA14|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA14_120: new BaseField('SMA14_120', {
    label: 'Sma14|120',
    fieldName: 'SMA14|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA14_15: new BaseField('SMA14_15', {
    label: 'Sma14|15',
    fieldName: 'SMA14|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA14_1M: new BaseField('SMA14_1M', {
    label: 'Sma14|1M',
    fieldName: 'SMA14|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA14_1W: new BaseField('SMA14_1W', {
    label: 'Sma14|1W',
    fieldName: 'SMA14|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA14_240: new BaseField('SMA14_240', {
    label: 'Sma14|240',
    fieldName: 'SMA14|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA14_30: new BaseField('SMA14_30', {
    label: 'Sma14|30',
    fieldName: 'SMA14|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA14_5: new BaseField('SMA14_5', {
    label: 'Sma14|5',
    fieldName: 'SMA14|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA14_60: new BaseField('SMA14_60', {
    label: 'Sma14|60',
    fieldName: 'SMA14|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA15: new BaseField('SMA15', {
    label: 'Sma15',
    fieldName: 'SMA15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA150: new BaseField('SMA150', {
    label: 'Sma150',
    fieldName: 'SMA150',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA150_1: new BaseField('SMA150_1', {
    label: 'Sma150|1',
    fieldName: 'SMA150|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA150_120: new BaseField('SMA150_120', {
    label: 'Sma150|120',
    fieldName: 'SMA150|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA150_15: new BaseField('SMA150_15', {
    label: 'Sma150|15',
    fieldName: 'SMA150|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA150_1M: new BaseField('SMA150_1M', {
    label: 'Sma150|1M',
    fieldName: 'SMA150|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA150_1W: new BaseField('SMA150_1W', {
    label: 'Sma150|1W',
    fieldName: 'SMA150|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA150_240: new BaseField('SMA150_240', {
    label: 'Sma150|240',
    fieldName: 'SMA150|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA150_30: new BaseField('SMA150_30', {
    label: 'Sma150|30',
    fieldName: 'SMA150|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA150_5: new BaseField('SMA150_5', {
    label: 'Sma150|5',
    fieldName: 'SMA150|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA150_60: new BaseField('SMA150_60', {
    label: 'Sma150|60',
    fieldName: 'SMA150|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA15_1: new BaseField('SMA15_1', {
    label: 'Sma15|1',
    fieldName: 'SMA15|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA15_120: new BaseField('SMA15_120', {
    label: 'Sma15|120',
    fieldName: 'SMA15|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA15_15: new BaseField('SMA15_15', {
    label: 'Sma15|15',
    fieldName: 'SMA15|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA15_1M: new BaseField('SMA15_1M', {
    label: 'Sma15|1M',
    fieldName: 'SMA15|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA15_1W: new BaseField('SMA15_1W', {
    label: 'Sma15|1W',
    fieldName: 'SMA15|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA15_240: new BaseField('SMA15_240', {
    label: 'Sma15|240',
    fieldName: 'SMA15|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA15_30: new BaseField('SMA15_30', {
    label: 'Sma15|30',
    fieldName: 'SMA15|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA15_5: new BaseField('SMA15_5', {
    label: 'Sma15|5',
    fieldName: 'SMA15|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA15_60: new BaseField('SMA15_60', {
    label: 'Sma15|60',
    fieldName: 'SMA15|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA2: new BaseField('SMA2', {
    label: 'Sma2',
    fieldName: 'SMA2',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SIMPLE_MOVING_AVERAGE_20: new BaseField('SIMPLE_MOVING_AVERAGE_20', {
    label: 'Simple Moving Average (20)',
    fieldName: 'SMA20',
    format: 'computed_recommendation',
    interval: true,
    historical: false,
  }),

  SIMPLE_MOVING_AVERAGE_200: new BaseField('SIMPLE_MOVING_AVERAGE_200', {
    label: 'Simple Moving Average (200)',
    fieldName: 'SMA200',
    format: 'computed_recommendation',
    interval: true,
    historical: false,
  }),

  SMA200_1: new BaseField('SMA200_1', {
    label: 'Sma200|1',
    fieldName: 'SMA200|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA200_120: new BaseField('SMA200_120', {
    label: 'Sma200|120',
    fieldName: 'SMA200|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA200_15: new BaseField('SMA200_15', {
    label: 'Sma200|15',
    fieldName: 'SMA200|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA200_1M: new BaseField('SMA200_1M', {
    label: 'Sma200|1M',
    fieldName: 'SMA200|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA200_1W: new BaseField('SMA200_1W', {
    label: 'Sma200|1W',
    fieldName: 'SMA200|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA200_240: new BaseField('SMA200_240', {
    label: 'Sma200|240',
    fieldName: 'SMA200|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA200_30: new BaseField('SMA200_30', {
    label: 'Sma200|30',
    fieldName: 'SMA200|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA200_5: new BaseField('SMA200_5', {
    label: 'Sma200|5',
    fieldName: 'SMA200|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA200_60: new BaseField('SMA200_60', {
    label: 'Sma200|60',
    fieldName: 'SMA200|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA20_1: new BaseField('SMA20_1', {
    label: 'Sma20|1',
    fieldName: 'SMA20|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA20_120: new BaseField('SMA20_120', {
    label: 'Sma20|120',
    fieldName: 'SMA20|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA20_15: new BaseField('SMA20_15', {
    label: 'Sma20|15',
    fieldName: 'SMA20|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA20_1M: new BaseField('SMA20_1M', {
    label: 'Sma20|1M',
    fieldName: 'SMA20|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA20_1W: new BaseField('SMA20_1W', {
    label: 'Sma20|1W',
    fieldName: 'SMA20|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA20_240: new BaseField('SMA20_240', {
    label: 'Sma20|240',
    fieldName: 'SMA20|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA20_30: new BaseField('SMA20_30', {
    label: 'Sma20|30',
    fieldName: 'SMA20|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA20_5: new BaseField('SMA20_5', {
    label: 'Sma20|5',
    fieldName: 'SMA20|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA20_60: new BaseField('SMA20_60', {
    label: 'Sma20|60',
    fieldName: 'SMA20|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA21: new BaseField('SMA21', {
    label: 'Sma21',
    fieldName: 'SMA21',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA21_1: new BaseField('SMA21_1', {
    label: 'Sma21|1',
    fieldName: 'SMA21|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA21_120: new BaseField('SMA21_120', {
    label: 'Sma21|120',
    fieldName: 'SMA21|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA21_15: new BaseField('SMA21_15', {
    label: 'Sma21|15',
    fieldName: 'SMA21|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA21_1M: new BaseField('SMA21_1M', {
    label: 'Sma21|1M',
    fieldName: 'SMA21|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA21_1W: new BaseField('SMA21_1W', {
    label: 'Sma21|1W',
    fieldName: 'SMA21|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA21_240: new BaseField('SMA21_240', {
    label: 'Sma21|240',
    fieldName: 'SMA21|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA21_30: new BaseField('SMA21_30', {
    label: 'Sma21|30',
    fieldName: 'SMA21|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA21_5: new BaseField('SMA21_5', {
    label: 'Sma21|5',
    fieldName: 'SMA21|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA21_60: new BaseField('SMA21_60', {
    label: 'Sma21|60',
    fieldName: 'SMA21|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA25: new BaseField('SMA25', {
    label: 'Sma25',
    fieldName: 'SMA25',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA250: new BaseField('SMA250', {
    label: 'Sma250',
    fieldName: 'SMA250',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA250_1: new BaseField('SMA250_1', {
    label: 'Sma250|1',
    fieldName: 'SMA250|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA250_120: new BaseField('SMA250_120', {
    label: 'Sma250|120',
    fieldName: 'SMA250|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA250_15: new BaseField('SMA250_15', {
    label: 'Sma250|15',
    fieldName: 'SMA250|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA250_1M: new BaseField('SMA250_1M', {
    label: 'Sma250|1M',
    fieldName: 'SMA250|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA250_1W: new BaseField('SMA250_1W', {
    label: 'Sma250|1W',
    fieldName: 'SMA250|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA250_240: new BaseField('SMA250_240', {
    label: 'Sma250|240',
    fieldName: 'SMA250|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA250_30: new BaseField('SMA250_30', {
    label: 'Sma250|30',
    fieldName: 'SMA250|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA250_5: new BaseField('SMA250_5', {
    label: 'Sma250|5',
    fieldName: 'SMA250|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA250_60: new BaseField('SMA250_60', {
    label: 'Sma250|60',
    fieldName: 'SMA250|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA25_1: new BaseField('SMA25_1', {
    label: 'Sma25|1',
    fieldName: 'SMA25|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA25_120: new BaseField('SMA25_120', {
    label: 'Sma25|120',
    fieldName: 'SMA25|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA25_15: new BaseField('SMA25_15', {
    label: 'Sma25|15',
    fieldName: 'SMA25|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA25_1M: new BaseField('SMA25_1M', {
    label: 'Sma25|1M',
    fieldName: 'SMA25|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA25_1W: new BaseField('SMA25_1W', {
    label: 'Sma25|1W',
    fieldName: 'SMA25|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA25_240: new BaseField('SMA25_240', {
    label: 'Sma25|240',
    fieldName: 'SMA25|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA25_30: new BaseField('SMA25_30', {
    label: 'Sma25|30',
    fieldName: 'SMA25|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA25_5: new BaseField('SMA25_5', {
    label: 'Sma25|5',
    fieldName: 'SMA25|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA25_60: new BaseField('SMA25_60', {
    label: 'Sma25|60',
    fieldName: 'SMA25|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA26: new BaseField('SMA26', {
    label: 'Sma26',
    fieldName: 'SMA26',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA26_1: new BaseField('SMA26_1', {
    label: 'Sma26|1',
    fieldName: 'SMA26|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA26_120: new BaseField('SMA26_120', {
    label: 'Sma26|120',
    fieldName: 'SMA26|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA26_15: new BaseField('SMA26_15', {
    label: 'Sma26|15',
    fieldName: 'SMA26|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA26_1M: new BaseField('SMA26_1M', {
    label: 'Sma26|1M',
    fieldName: 'SMA26|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA26_1W: new BaseField('SMA26_1W', {
    label: 'Sma26|1W',
    fieldName: 'SMA26|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA26_240: new BaseField('SMA26_240', {
    label: 'Sma26|240',
    fieldName: 'SMA26|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA26_30: new BaseField('SMA26_30', {
    label: 'Sma26|30',
    fieldName: 'SMA26|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA26_5: new BaseField('SMA26_5', {
    label: 'Sma26|5',
    fieldName: 'SMA26|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA26_60: new BaseField('SMA26_60', {
    label: 'Sma26|60',
    fieldName: 'SMA26|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA2_1: new BaseField('SMA2_1', {
    label: 'Sma2|1',
    fieldName: 'SMA2|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA2_120: new BaseField('SMA2_120', {
    label: 'Sma2|120',
    fieldName: 'SMA2|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA2_15: new BaseField('SMA2_15', {
    label: 'Sma2|15',
    fieldName: 'SMA2|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA2_1M: new BaseField('SMA2_1M', {
    label: 'Sma2|1M',
    fieldName: 'SMA2|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA2_1W: new BaseField('SMA2_1W', {
    label: 'Sma2|1W',
    fieldName: 'SMA2|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA2_240: new BaseField('SMA2_240', {
    label: 'Sma2|240',
    fieldName: 'SMA2|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA2_30: new BaseField('SMA2_30', {
    label: 'Sma2|30',
    fieldName: 'SMA2|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA2_5: new BaseField('SMA2_5', {
    label: 'Sma2|5',
    fieldName: 'SMA2|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA2_60: new BaseField('SMA2_60', {
    label: 'Sma2|60',
    fieldName: 'SMA2|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA3: new BaseField('SMA3', {
    label: 'Sma3',
    fieldName: 'SMA3',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SIMPLE_MOVING_AVERAGE_30: new BaseField('SIMPLE_MOVING_AVERAGE_30', {
    label: 'Simple Moving Average (30)',
    fieldName: 'SMA30',
    format: 'computed_recommendation',
    interval: true,
    historical: false,
  }),

  SMA300: new BaseField('SMA300', {
    label: 'Sma300',
    fieldName: 'SMA300',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA300_1: new BaseField('SMA300_1', {
    label: 'Sma300|1',
    fieldName: 'SMA300|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA300_120: new BaseField('SMA300_120', {
    label: 'Sma300|120',
    fieldName: 'SMA300|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA300_15: new BaseField('SMA300_15', {
    label: 'Sma300|15',
    fieldName: 'SMA300|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA300_1M: new BaseField('SMA300_1M', {
    label: 'Sma300|1M',
    fieldName: 'SMA300|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA300_1W: new BaseField('SMA300_1W', {
    label: 'Sma300|1W',
    fieldName: 'SMA300|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA300_240: new BaseField('SMA300_240', {
    label: 'Sma300|240',
    fieldName: 'SMA300|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA300_30: new BaseField('SMA300_30', {
    label: 'Sma300|30',
    fieldName: 'SMA300|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA300_5: new BaseField('SMA300_5', {
    label: 'Sma300|5',
    fieldName: 'SMA300|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA300_60: new BaseField('SMA300_60', {
    label: 'Sma300|60',
    fieldName: 'SMA300|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA30_1: new BaseField('SMA30_1', {
    label: 'Sma30|1',
    fieldName: 'SMA30|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA30_120: new BaseField('SMA30_120', {
    label: 'Sma30|120',
    fieldName: 'SMA30|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA30_15: new BaseField('SMA30_15', {
    label: 'Sma30|15',
    fieldName: 'SMA30|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA30_1M: new BaseField('SMA30_1M', {
    label: 'Sma30|1M',
    fieldName: 'SMA30|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA30_1W: new BaseField('SMA30_1W', {
    label: 'Sma30|1W',
    fieldName: 'SMA30|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA30_240: new BaseField('SMA30_240', {
    label: 'Sma30|240',
    fieldName: 'SMA30|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA30_30: new BaseField('SMA30_30', {
    label: 'Sma30|30',
    fieldName: 'SMA30|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA30_5: new BaseField('SMA30_5', {
    label: 'Sma30|5',
    fieldName: 'SMA30|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA30_60: new BaseField('SMA30_60', {
    label: 'Sma30|60',
    fieldName: 'SMA30|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA34: new BaseField('SMA34', {
    label: 'Sma34',
    fieldName: 'SMA34',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA34_1: new BaseField('SMA34_1', {
    label: 'Sma34|1',
    fieldName: 'SMA34|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA34_120: new BaseField('SMA34_120', {
    label: 'Sma34|120',
    fieldName: 'SMA34|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA34_15: new BaseField('SMA34_15', {
    label: 'Sma34|15',
    fieldName: 'SMA34|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA34_1M: new BaseField('SMA34_1M', {
    label: 'Sma34|1M',
    fieldName: 'SMA34|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA34_1W: new BaseField('SMA34_1W', {
    label: 'Sma34|1W',
    fieldName: 'SMA34|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA34_240: new BaseField('SMA34_240', {
    label: 'Sma34|240',
    fieldName: 'SMA34|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA34_30: new BaseField('SMA34_30', {
    label: 'Sma34|30',
    fieldName: 'SMA34|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA34_5: new BaseField('SMA34_5', {
    label: 'Sma34|5',
    fieldName: 'SMA34|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA34_60: new BaseField('SMA34_60', {
    label: 'Sma34|60',
    fieldName: 'SMA34|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA3_1: new BaseField('SMA3_1', {
    label: 'Sma3|1',
    fieldName: 'SMA3|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA3_120: new BaseField('SMA3_120', {
    label: 'Sma3|120',
    fieldName: 'SMA3|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA3_15: new BaseField('SMA3_15', {
    label: 'Sma3|15',
    fieldName: 'SMA3|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA3_1M: new BaseField('SMA3_1M', {
    label: 'Sma3|1M',
    fieldName: 'SMA3|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA3_1W: new BaseField('SMA3_1W', {
    label: 'Sma3|1W',
    fieldName: 'SMA3|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA3_240: new BaseField('SMA3_240', {
    label: 'Sma3|240',
    fieldName: 'SMA3|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA3_30: new BaseField('SMA3_30', {
    label: 'Sma3|30',
    fieldName: 'SMA3|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA3_5: new BaseField('SMA3_5', {
    label: 'Sma3|5',
    fieldName: 'SMA3|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA3_60: new BaseField('SMA3_60', {
    label: 'Sma3|60',
    fieldName: 'SMA3|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA40: new BaseField('SMA40', {
    label: 'Sma40',
    fieldName: 'SMA40',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA40_1: new BaseField('SMA40_1', {
    label: 'Sma40|1',
    fieldName: 'SMA40|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA40_120: new BaseField('SMA40_120', {
    label: 'Sma40|120',
    fieldName: 'SMA40|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA40_15: new BaseField('SMA40_15', {
    label: 'Sma40|15',
    fieldName: 'SMA40|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA40_1M: new BaseField('SMA40_1M', {
    label: 'Sma40|1M',
    fieldName: 'SMA40|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA40_1W: new BaseField('SMA40_1W', {
    label: 'Sma40|1W',
    fieldName: 'SMA40|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA40_240: new BaseField('SMA40_240', {
    label: 'Sma40|240',
    fieldName: 'SMA40|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA40_30: new BaseField('SMA40_30', {
    label: 'Sma40|30',
    fieldName: 'SMA40|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA40_5: new BaseField('SMA40_5', {
    label: 'Sma40|5',
    fieldName: 'SMA40|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA40_60: new BaseField('SMA40_60', {
    label: 'Sma40|60',
    fieldName: 'SMA40|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SIMPLE_MOVING_AVERAGE_5: new BaseField('SIMPLE_MOVING_AVERAGE_5', {
    label: 'Simple Moving Average (5)',
    fieldName: 'SMA5',
    format: 'computed_recommendation',
    interval: true,
    historical: false,
  }),

  SIMPLE_MOVING_AVERAGE_50: new BaseField('SIMPLE_MOVING_AVERAGE_50', {
    label: 'Simple Moving Average (50)',
    fieldName: 'SMA50',
    format: 'computed_recommendation',
    interval: true,
    historical: false,
  }),

  SMA50_1: new BaseField('SMA50_1', {
    label: 'Sma50|1',
    fieldName: 'SMA50|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA50_120: new BaseField('SMA50_120', {
    label: 'Sma50|120',
    fieldName: 'SMA50|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA50_15: new BaseField('SMA50_15', {
    label: 'Sma50|15',
    fieldName: 'SMA50|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA50_1M: new BaseField('SMA50_1M', {
    label: 'Sma50|1M',
    fieldName: 'SMA50|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA50_1W: new BaseField('SMA50_1W', {
    label: 'Sma50|1W',
    fieldName: 'SMA50|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA50_240: new BaseField('SMA50_240', {
    label: 'Sma50|240',
    fieldName: 'SMA50|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA50_30: new BaseField('SMA50_30', {
    label: 'Sma50|30',
    fieldName: 'SMA50|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA50_5: new BaseField('SMA50_5', {
    label: 'Sma50|5',
    fieldName: 'SMA50|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA50_60: new BaseField('SMA50_60', {
    label: 'Sma50|60',
    fieldName: 'SMA50|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA55: new BaseField('SMA55', {
    label: 'Sma55',
    fieldName: 'SMA55',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA55_1: new BaseField('SMA55_1', {
    label: 'Sma55|1',
    fieldName: 'SMA55|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA55_120: new BaseField('SMA55_120', {
    label: 'Sma55|120',
    fieldName: 'SMA55|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA55_15: new BaseField('SMA55_15', {
    label: 'Sma55|15',
    fieldName: 'SMA55|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA55_1M: new BaseField('SMA55_1M', {
    label: 'Sma55|1M',
    fieldName: 'SMA55|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA55_1W: new BaseField('SMA55_1W', {
    label: 'Sma55|1W',
    fieldName: 'SMA55|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA55_240: new BaseField('SMA55_240', {
    label: 'Sma55|240',
    fieldName: 'SMA55|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA55_30: new BaseField('SMA55_30', {
    label: 'Sma55|30',
    fieldName: 'SMA55|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA55_5: new BaseField('SMA55_5', {
    label: 'Sma55|5',
    fieldName: 'SMA55|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA55_60: new BaseField('SMA55_60', {
    label: 'Sma55|60',
    fieldName: 'SMA55|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA5_1: new BaseField('SMA5_1', {
    label: 'Sma5|1',
    fieldName: 'SMA5|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA5_120: new BaseField('SMA5_120', {
    label: 'Sma5|120',
    fieldName: 'SMA5|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA5_15: new BaseField('SMA5_15', {
    label: 'Sma5|15',
    fieldName: 'SMA5|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA5_1M: new BaseField('SMA5_1M', {
    label: 'Sma5|1M',
    fieldName: 'SMA5|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA5_1W: new BaseField('SMA5_1W', {
    label: 'Sma5|1W',
    fieldName: 'SMA5|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA5_240: new BaseField('SMA5_240', {
    label: 'Sma5|240',
    fieldName: 'SMA5|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA5_30: new BaseField('SMA5_30', {
    label: 'Sma5|30',
    fieldName: 'SMA5|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA5_5: new BaseField('SMA5_5', {
    label: 'Sma5|5',
    fieldName: 'SMA5|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA5_60: new BaseField('SMA5_60', {
    label: 'Sma5|60',
    fieldName: 'SMA5|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA6: new BaseField('SMA6', {
    label: 'Sma6',
    fieldName: 'SMA6',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA60: new BaseField('SMA60', {
    label: 'Sma60',
    fieldName: 'SMA60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA60_1: new BaseField('SMA60_1', {
    label: 'Sma60|1',
    fieldName: 'SMA60|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA60_120: new BaseField('SMA60_120', {
    label: 'Sma60|120',
    fieldName: 'SMA60|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA60_15: new BaseField('SMA60_15', {
    label: 'Sma60|15',
    fieldName: 'SMA60|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA60_1M: new BaseField('SMA60_1M', {
    label: 'Sma60|1M',
    fieldName: 'SMA60|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA60_1W: new BaseField('SMA60_1W', {
    label: 'Sma60|1W',
    fieldName: 'SMA60|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA60_240: new BaseField('SMA60_240', {
    label: 'Sma60|240',
    fieldName: 'SMA60|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA60_30: new BaseField('SMA60_30', {
    label: 'Sma60|30',
    fieldName: 'SMA60|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA60_5: new BaseField('SMA60_5', {
    label: 'Sma60|5',
    fieldName: 'SMA60|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA60_60: new BaseField('SMA60_60', {
    label: 'Sma60|60',
    fieldName: 'SMA60|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA6_1: new BaseField('SMA6_1', {
    label: 'Sma6|1',
    fieldName: 'SMA6|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA6_120: new BaseField('SMA6_120', {
    label: 'Sma6|120',
    fieldName: 'SMA6|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA6_15: new BaseField('SMA6_15', {
    label: 'Sma6|15',
    fieldName: 'SMA6|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA6_1M: new BaseField('SMA6_1M', {
    label: 'Sma6|1M',
    fieldName: 'SMA6|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA6_1W: new BaseField('SMA6_1W', {
    label: 'Sma6|1W',
    fieldName: 'SMA6|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA6_240: new BaseField('SMA6_240', {
    label: 'Sma6|240',
    fieldName: 'SMA6|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA6_30: new BaseField('SMA6_30', {
    label: 'Sma6|30',
    fieldName: 'SMA6|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA6_5: new BaseField('SMA6_5', {
    label: 'Sma6|5',
    fieldName: 'SMA6|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA6_60: new BaseField('SMA6_60', {
    label: 'Sma6|60',
    fieldName: 'SMA6|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA7: new BaseField('SMA7', {
    label: 'Sma7',
    fieldName: 'SMA7',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA75: new BaseField('SMA75', {
    label: 'Sma75',
    fieldName: 'SMA75',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA75_1: new BaseField('SMA75_1', {
    label: 'Sma75|1',
    fieldName: 'SMA75|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA75_120: new BaseField('SMA75_120', {
    label: 'Sma75|120',
    fieldName: 'SMA75|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA75_15: new BaseField('SMA75_15', {
    label: 'Sma75|15',
    fieldName: 'SMA75|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA75_1M: new BaseField('SMA75_1M', {
    label: 'Sma75|1M',
    fieldName: 'SMA75|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA75_1W: new BaseField('SMA75_1W', {
    label: 'Sma75|1W',
    fieldName: 'SMA75|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA75_240: new BaseField('SMA75_240', {
    label: 'Sma75|240',
    fieldName: 'SMA75|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA75_30: new BaseField('SMA75_30', {
    label: 'Sma75|30',
    fieldName: 'SMA75|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA75_5: new BaseField('SMA75_5', {
    label: 'Sma75|5',
    fieldName: 'SMA75|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA75_60: new BaseField('SMA75_60', {
    label: 'Sma75|60',
    fieldName: 'SMA75|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA7_1: new BaseField('SMA7_1', {
    label: 'Sma7|1',
    fieldName: 'SMA7|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA7_120: new BaseField('SMA7_120', {
    label: 'Sma7|120',
    fieldName: 'SMA7|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA7_15: new BaseField('SMA7_15', {
    label: 'Sma7|15',
    fieldName: 'SMA7|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA7_1M: new BaseField('SMA7_1M', {
    label: 'Sma7|1M',
    fieldName: 'SMA7|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA7_1W: new BaseField('SMA7_1W', {
    label: 'Sma7|1W',
    fieldName: 'SMA7|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA7_240: new BaseField('SMA7_240', {
    label: 'Sma7|240',
    fieldName: 'SMA7|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA7_30: new BaseField('SMA7_30', {
    label: 'Sma7|30',
    fieldName: 'SMA7|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA7_5: new BaseField('SMA7_5', {
    label: 'Sma7|5',
    fieldName: 'SMA7|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA7_60: new BaseField('SMA7_60', {
    label: 'Sma7|60',
    fieldName: 'SMA7|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA8: new BaseField('SMA8', {
    label: 'Sma8',
    fieldName: 'SMA8',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA89: new BaseField('SMA89', {
    label: 'Sma89',
    fieldName: 'SMA89',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA89_1: new BaseField('SMA89_1', {
    label: 'Sma89|1',
    fieldName: 'SMA89|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA89_120: new BaseField('SMA89_120', {
    label: 'Sma89|120',
    fieldName: 'SMA89|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA89_15: new BaseField('SMA89_15', {
    label: 'Sma89|15',
    fieldName: 'SMA89|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA89_1M: new BaseField('SMA89_1M', {
    label: 'Sma89|1M',
    fieldName: 'SMA89|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA89_1W: new BaseField('SMA89_1W', {
    label: 'Sma89|1W',
    fieldName: 'SMA89|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA89_240: new BaseField('SMA89_240', {
    label: 'Sma89|240',
    fieldName: 'SMA89|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA89_30: new BaseField('SMA89_30', {
    label: 'Sma89|30',
    fieldName: 'SMA89|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA89_5: new BaseField('SMA89_5', {
    label: 'Sma89|5',
    fieldName: 'SMA89|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA89_60: new BaseField('SMA89_60', {
    label: 'Sma89|60',
    fieldName: 'SMA89|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA8_1: new BaseField('SMA8_1', {
    label: 'Sma8|1',
    fieldName: 'SMA8|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA8_120: new BaseField('SMA8_120', {
    label: 'Sma8|120',
    fieldName: 'SMA8|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA8_15: new BaseField('SMA8_15', {
    label: 'Sma8|15',
    fieldName: 'SMA8|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA8_1M: new BaseField('SMA8_1M', {
    label: 'Sma8|1M',
    fieldName: 'SMA8|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA8_1W: new BaseField('SMA8_1W', {
    label: 'Sma8|1W',
    fieldName: 'SMA8|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA8_240: new BaseField('SMA8_240', {
    label: 'Sma8|240',
    fieldName: 'SMA8|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA8_30: new BaseField('SMA8_30', {
    label: 'Sma8|30',
    fieldName: 'SMA8|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA8_5: new BaseField('SMA8_5', {
    label: 'Sma8|5',
    fieldName: 'SMA8|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA8_60: new BaseField('SMA8_60', {
    label: 'Sma8|60',
    fieldName: 'SMA8|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA9: new BaseField('SMA9', {
    label: 'Sma9',
    fieldName: 'SMA9',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA9_1: new BaseField('SMA9_1', {
    label: 'Sma9|1',
    fieldName: 'SMA9|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA9_120: new BaseField('SMA9_120', {
    label: 'Sma9|120',
    fieldName: 'SMA9|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA9_15: new BaseField('SMA9_15', {
    label: 'Sma9|15',
    fieldName: 'SMA9|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA9_1M: new BaseField('SMA9_1M', {
    label: 'Sma9|1M',
    fieldName: 'SMA9|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA9_1W: new BaseField('SMA9_1W', {
    label: 'Sma9|1W',
    fieldName: 'SMA9|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA9_240: new BaseField('SMA9_240', {
    label: 'Sma9|240',
    fieldName: 'SMA9|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA9_30: new BaseField('SMA9_30', {
    label: 'Sma9|30',
    fieldName: 'SMA9|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA9_5: new BaseField('SMA9_5', {
    label: 'Sma9|5',
    fieldName: 'SMA9|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  SMA9_60: new BaseField('SMA9_60', {
    label: 'Sma9|60',
    fieldName: 'SMA9|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  VOLUME_WEIGHTED_MOVING_AVERAGE_20: new BaseField('VOLUME_WEIGHTED_MOVING_AVERAGE_20', {
    label: 'Volume Weighted Moving Average (20)',
    fieldName: 'VWMA',
    format: 'missing',
    interval: true,
    historical: false,
  }),

  VWMA_1: new BaseField('VWMA_1', {
    label: 'VWMA|1',
    fieldName: 'VWMA|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  VWMA_120: new BaseField('VWMA_120', {
    label: 'VWMA|120',
    fieldName: 'VWMA|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  VWMA_15: new BaseField('VWMA_15', {
    label: 'VWMA|15',
    fieldName: 'VWMA|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  VWMA_1M: new BaseField('VWMA_1M', {
    label: 'VWMA|1M',
    fieldName: 'VWMA|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  VWMA_1W: new BaseField('VWMA_1W', {
    label: 'VWMA|1W',
    fieldName: 'VWMA|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  VWMA_240: new BaseField('VWMA_240', {
    label: 'VWMA|240',
    fieldName: 'VWMA|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  VWMA_30: new BaseField('VWMA_30', {
    label: 'VWMA|30',
    fieldName: 'VWMA|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  VWMA_5: new BaseField('VWMA_5', {
    label: 'VWMA|5',
    fieldName: 'VWMA|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  VWMA_60: new BaseField('VWMA_60', {
    label: 'VWMA|60',
    fieldName: 'VWMA|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  DAYS_TO_MATURITY: new BaseField('DAYS_TO_MATURITY', {
    label: 'Days To Maturity',
    fieldName: 'days_to_maturity',
    format: 'float',
    interval: false,
    historical: false,
  }),

  IS_PRIMARY: new BaseField('IS_PRIMARY', {
    label: 'Is Primary',
    fieldName: 'is_primary',
    format: 'float',
    interval: false,
    historical: false,
  }),

  IS_SYMBOL_PRIMARY_LISTING: new BaseField('IS_SYMBOL_PRIMARY_LISTING', {
    label: 'Is Symbol Primary Listing',
    fieldName: 'is_symbol_primary_listing',
    format: 'float',
    interval: false,
    historical: false,
  }),

  MATURITY_DATE: new BaseField('MATURITY_DATE', {
    label: 'Maturity Date',
    fieldName: 'maturity_date',
    format: 'date',
    interval: false,
    historical: false,
  }),

  // === Oscillators (480 fields) ===

  COMMODITY_CHANNEL_INDEX_20: new BaseField('COMMODITY_CHANNEL_INDEX_20', {
    label: 'Commodity Channel Index (20)',
    fieldName: 'CCI20',
    format: 'computed_recommendation',
    interval: true,
    historical: true,
  }),

  CCI20_1: new BaseField('CCI20_1', {
    label: 'Cci20[1]',
    fieldName: 'CCI20[1]',
    format: 'float',
    interval: true,
    historical: true,
  }),

  CCI20_1_1: new BaseField('CCI20_1_1', {
    label: 'Cci20[1]|1',
    fieldName: 'CCI20[1]|1',
    format: 'float',
    interval: true,
    historical: true,
  }),

  CCI20_1_120: new BaseField('CCI20_1_120', {
    label: 'Cci20[1]|120',
    fieldName: 'CCI20[1]|120',
    format: 'float',
    interval: true,
    historical: true,
  }),

  CCI20_1_15: new BaseField('CCI20_1_15', {
    label: 'Cci20[1]|15',
    fieldName: 'CCI20[1]|15',
    format: 'float',
    interval: true,
    historical: true,
  }),

  CCI20_1_1M: new BaseField('CCI20_1_1M', {
    label: 'Cci20[1]|1M',
    fieldName: 'CCI20[1]|1M',
    format: 'float',
    interval: true,
    historical: true,
  }),

  CCI20_1_1W: new BaseField('CCI20_1_1W', {
    label: 'Cci20[1]|1W',
    fieldName: 'CCI20[1]|1W',
    format: 'float',
    interval: true,
    historical: true,
  }),

  CCI20_1_240: new BaseField('CCI20_1_240', {
    label: 'Cci20[1]|240',
    fieldName: 'CCI20[1]|240',
    format: 'float',
    interval: true,
    historical: true,
  }),

  CCI20_1_30: new BaseField('CCI20_1_30', {
    label: 'Cci20[1]|30',
    fieldName: 'CCI20[1]|30',
    format: 'float',
    interval: true,
    historical: true,
  }),

  CCI20_1_5: new BaseField('CCI20_1_5', {
    label: 'Cci20[1]|5',
    fieldName: 'CCI20[1]|5',
    format: 'float',
    interval: true,
    historical: true,
  }),

  CCI20_1_60: new BaseField('CCI20_1_60', {
    label: 'Cci20[1]|60',
    fieldName: 'CCI20[1]|60',
    format: 'float',
    interval: true,
    historical: true,
  }),

  CCI20_1_2: new BaseField('CCI20_1_2', {
    label: 'Cci20|1',
    fieldName: 'CCI20|1',
    format: 'float',
    interval: true,
    historical: true,
  }),

  CCI20_120: new BaseField('CCI20_120', {
    label: 'Cci20|120',
    fieldName: 'CCI20|120',
    format: 'float',
    interval: true,
    historical: true,
  }),

  CCI20_15: new BaseField('CCI20_15', {
    label: 'Cci20|15',
    fieldName: 'CCI20|15',
    format: 'float',
    interval: true,
    historical: true,
  }),

  CCI20_1M: new BaseField('CCI20_1M', {
    label: 'Cci20|1M',
    fieldName: 'CCI20|1M',
    format: 'float',
    interval: true,
    historical: true,
  }),

  CCI20_1W: new BaseField('CCI20_1W', {
    label: 'Cci20|1W',
    fieldName: 'CCI20|1W',
    format: 'float',
    interval: true,
    historical: true,
  }),

  CCI20_240: new BaseField('CCI20_240', {
    label: 'Cci20|240',
    fieldName: 'CCI20|240',
    format: 'float',
    interval: true,
    historical: true,
  }),

  CCI20_30: new BaseField('CCI20_30', {
    label: 'Cci20|30',
    fieldName: 'CCI20|30',
    format: 'float',
    interval: true,
    historical: true,
  }),

  CCI20_5: new BaseField('CCI20_5', {
    label: 'Cci20|5',
    fieldName: 'CCI20|5',
    format: 'float',
    interval: true,
    historical: true,
  }),

  CCI20_60: new BaseField('CCI20_60', {
    label: 'Cci20|60',
    fieldName: 'CCI20|60',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RATE_OF_CHANGE_9: new BaseField('RATE_OF_CHANGE_9', {
    label: 'Rate Of Change (9)',
    fieldName: 'ROC',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ROC_1: new BaseField('ROC_1', {
    label: 'Roc|1',
    fieldName: 'ROC|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ROC_120: new BaseField('ROC_120', {
    label: 'Roc|120',
    fieldName: 'ROC|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ROC_15: new BaseField('ROC_15', {
    label: 'Roc|15',
    fieldName: 'ROC|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ROC_1M: new BaseField('ROC_1M', {
    label: 'Roc|1M',
    fieldName: 'ROC|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ROC_1W: new BaseField('ROC_1W', {
    label: 'Roc|1W',
    fieldName: 'ROC|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ROC_240: new BaseField('ROC_240', {
    label: 'Roc|240',
    fieldName: 'ROC|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ROC_30: new BaseField('ROC_30', {
    label: 'Roc|30',
    fieldName: 'ROC|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ROC_5: new BaseField('ROC_5', {
    label: 'Roc|5',
    fieldName: 'ROC|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ROC_60: new BaseField('ROC_60', {
    label: 'Roc|60',
    fieldName: 'ROC|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  RELATIVE_STRENGTH_INDEX_14: new BaseField('RELATIVE_STRENGTH_INDEX_14', {
    label: 'Relative Strength Index (14)',
    fieldName: 'RSI',
    format: 'computed_recommendation',
    interval: true,
    historical: true,
  }),

  RSI10: new BaseField('RSI10', {
    label: 'Rsi10',
    fieldName: 'RSI10',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI10_1: new BaseField('RSI10_1', {
    label: 'Rsi10[1]',
    fieldName: 'RSI10[1]',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI10_1_1: new BaseField('RSI10_1_1', {
    label: 'Rsi10[1]|1',
    fieldName: 'RSI10[1]|1',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI10_1_120: new BaseField('RSI10_1_120', {
    label: 'Rsi10[1]|120',
    fieldName: 'RSI10[1]|120',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI10_1_15: new BaseField('RSI10_1_15', {
    label: 'Rsi10[1]|15',
    fieldName: 'RSI10[1]|15',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI10_1_1M: new BaseField('RSI10_1_1M', {
    label: 'Rsi10[1]|1M',
    fieldName: 'RSI10[1]|1M',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI10_1_1W: new BaseField('RSI10_1_1W', {
    label: 'Rsi10[1]|1W',
    fieldName: 'RSI10[1]|1W',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI10_1_240: new BaseField('RSI10_1_240', {
    label: 'Rsi10[1]|240',
    fieldName: 'RSI10[1]|240',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI10_1_30: new BaseField('RSI10_1_30', {
    label: 'Rsi10[1]|30',
    fieldName: 'RSI10[1]|30',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI10_1_5: new BaseField('RSI10_1_5', {
    label: 'Rsi10[1]|5',
    fieldName: 'RSI10[1]|5',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI10_1_60: new BaseField('RSI10_1_60', {
    label: 'Rsi10[1]|60',
    fieldName: 'RSI10[1]|60',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI10_1_2: new BaseField('RSI10_1_2', {
    label: 'Rsi10|1',
    fieldName: 'RSI10|1',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI10_120: new BaseField('RSI10_120', {
    label: 'Rsi10|120',
    fieldName: 'RSI10|120',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI10_15: new BaseField('RSI10_15', {
    label: 'Rsi10|15',
    fieldName: 'RSI10|15',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI10_1M: new BaseField('RSI10_1M', {
    label: 'Rsi10|1M',
    fieldName: 'RSI10|1M',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI10_1W: new BaseField('RSI10_1W', {
    label: 'Rsi10|1W',
    fieldName: 'RSI10|1W',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI10_240: new BaseField('RSI10_240', {
    label: 'Rsi10|240',
    fieldName: 'RSI10|240',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI10_30: new BaseField('RSI10_30', {
    label: 'Rsi10|30',
    fieldName: 'RSI10|30',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI10_5: new BaseField('RSI10_5', {
    label: 'Rsi10|5',
    fieldName: 'RSI10|5',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI10_60: new BaseField('RSI10_60', {
    label: 'Rsi10|60',
    fieldName: 'RSI10|60',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI2: new BaseField('RSI2', {
    label: 'Rsi2',
    fieldName: 'RSI2',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI20: new BaseField('RSI20', {
    label: 'Rsi20',
    fieldName: 'RSI20',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI20_1: new BaseField('RSI20_1', {
    label: 'Rsi20[1]',
    fieldName: 'RSI20[1]',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI20_1_1: new BaseField('RSI20_1_1', {
    label: 'Rsi20[1]|1',
    fieldName: 'RSI20[1]|1',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI20_1_120: new BaseField('RSI20_1_120', {
    label: 'Rsi20[1]|120',
    fieldName: 'RSI20[1]|120',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI20_1_15: new BaseField('RSI20_1_15', {
    label: 'Rsi20[1]|15',
    fieldName: 'RSI20[1]|15',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI20_1_1M: new BaseField('RSI20_1_1M', {
    label: 'Rsi20[1]|1M',
    fieldName: 'RSI20[1]|1M',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI20_1_1W: new BaseField('RSI20_1_1W', {
    label: 'Rsi20[1]|1W',
    fieldName: 'RSI20[1]|1W',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI20_1_240: new BaseField('RSI20_1_240', {
    label: 'Rsi20[1]|240',
    fieldName: 'RSI20[1]|240',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI20_1_30: new BaseField('RSI20_1_30', {
    label: 'Rsi20[1]|30',
    fieldName: 'RSI20[1]|30',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI20_1_5: new BaseField('RSI20_1_5', {
    label: 'Rsi20[1]|5',
    fieldName: 'RSI20[1]|5',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI20_1_60: new BaseField('RSI20_1_60', {
    label: 'Rsi20[1]|60',
    fieldName: 'RSI20[1]|60',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI20_1_2: new BaseField('RSI20_1_2', {
    label: 'Rsi20|1',
    fieldName: 'RSI20|1',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI20_120: new BaseField('RSI20_120', {
    label: 'Rsi20|120',
    fieldName: 'RSI20|120',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI20_15: new BaseField('RSI20_15', {
    label: 'Rsi20|15',
    fieldName: 'RSI20|15',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI20_1M: new BaseField('RSI20_1M', {
    label: 'Rsi20|1M',
    fieldName: 'RSI20|1M',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI20_1W: new BaseField('RSI20_1W', {
    label: 'Rsi20|1W',
    fieldName: 'RSI20|1W',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI20_240: new BaseField('RSI20_240', {
    label: 'Rsi20|240',
    fieldName: 'RSI20|240',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI20_30: new BaseField('RSI20_30', {
    label: 'Rsi20|30',
    fieldName: 'RSI20|30',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI20_5: new BaseField('RSI20_5', {
    label: 'Rsi20|5',
    fieldName: 'RSI20|5',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI20_60: new BaseField('RSI20_60', {
    label: 'Rsi20|60',
    fieldName: 'RSI20|60',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI21: new BaseField('RSI21', {
    label: 'Rsi21',
    fieldName: 'RSI21',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI21_1: new BaseField('RSI21_1', {
    label: 'Rsi21[1]',
    fieldName: 'RSI21[1]',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI21_1_1: new BaseField('RSI21_1_1', {
    label: 'Rsi21[1]|1',
    fieldName: 'RSI21[1]|1',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI21_1_120: new BaseField('RSI21_1_120', {
    label: 'Rsi21[1]|120',
    fieldName: 'RSI21[1]|120',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI21_1_15: new BaseField('RSI21_1_15', {
    label: 'Rsi21[1]|15',
    fieldName: 'RSI21[1]|15',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI21_1_1M: new BaseField('RSI21_1_1M', {
    label: 'Rsi21[1]|1M',
    fieldName: 'RSI21[1]|1M',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI21_1_1W: new BaseField('RSI21_1_1W', {
    label: 'Rsi21[1]|1W',
    fieldName: 'RSI21[1]|1W',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI21_1_240: new BaseField('RSI21_1_240', {
    label: 'Rsi21[1]|240',
    fieldName: 'RSI21[1]|240',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI21_1_30: new BaseField('RSI21_1_30', {
    label: 'Rsi21[1]|30',
    fieldName: 'RSI21[1]|30',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI21_1_5: new BaseField('RSI21_1_5', {
    label: 'Rsi21[1]|5',
    fieldName: 'RSI21[1]|5',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI21_1_60: new BaseField('RSI21_1_60', {
    label: 'Rsi21[1]|60',
    fieldName: 'RSI21[1]|60',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI21_1_2: new BaseField('RSI21_1_2', {
    label: 'Rsi21|1',
    fieldName: 'RSI21|1',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI21_120: new BaseField('RSI21_120', {
    label: 'Rsi21|120',
    fieldName: 'RSI21|120',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI21_15: new BaseField('RSI21_15', {
    label: 'Rsi21|15',
    fieldName: 'RSI21|15',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI21_1M: new BaseField('RSI21_1M', {
    label: 'Rsi21|1M',
    fieldName: 'RSI21|1M',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI21_1W: new BaseField('RSI21_1W', {
    label: 'Rsi21|1W',
    fieldName: 'RSI21|1W',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI21_240: new BaseField('RSI21_240', {
    label: 'Rsi21|240',
    fieldName: 'RSI21|240',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI21_30: new BaseField('RSI21_30', {
    label: 'Rsi21|30',
    fieldName: 'RSI21|30',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI21_5: new BaseField('RSI21_5', {
    label: 'Rsi21|5',
    fieldName: 'RSI21|5',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI21_60: new BaseField('RSI21_60', {
    label: 'Rsi21|60',
    fieldName: 'RSI21|60',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI2_1: new BaseField('RSI2_1', {
    label: 'Rsi2[1]',
    fieldName: 'RSI2[1]',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI2_1_1: new BaseField('RSI2_1_1', {
    label: 'Rsi2[1]|1',
    fieldName: 'RSI2[1]|1',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI2_1_120: new BaseField('RSI2_1_120', {
    label: 'Rsi2[1]|120',
    fieldName: 'RSI2[1]|120',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI2_1_15: new BaseField('RSI2_1_15', {
    label: 'Rsi2[1]|15',
    fieldName: 'RSI2[1]|15',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI2_1_1M: new BaseField('RSI2_1_1M', {
    label: 'Rsi2[1]|1M',
    fieldName: 'RSI2[1]|1M',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI2_1_1W: new BaseField('RSI2_1_1W', {
    label: 'Rsi2[1]|1W',
    fieldName: 'RSI2[1]|1W',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI2_1_240: new BaseField('RSI2_1_240', {
    label: 'Rsi2[1]|240',
    fieldName: 'RSI2[1]|240',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI2_1_30: new BaseField('RSI2_1_30', {
    label: 'Rsi2[1]|30',
    fieldName: 'RSI2[1]|30',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI2_1_5: new BaseField('RSI2_1_5', {
    label: 'Rsi2[1]|5',
    fieldName: 'RSI2[1]|5',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI2_1_60: new BaseField('RSI2_1_60', {
    label: 'Rsi2[1]|60',
    fieldName: 'RSI2[1]|60',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI2_1_2: new BaseField('RSI2_1_2', {
    label: 'Rsi2|1',
    fieldName: 'RSI2|1',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI2_120: new BaseField('RSI2_120', {
    label: 'Rsi2|120',
    fieldName: 'RSI2|120',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI2_15: new BaseField('RSI2_15', {
    label: 'Rsi2|15',
    fieldName: 'RSI2|15',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI2_1M: new BaseField('RSI2_1M', {
    label: 'Rsi2|1M',
    fieldName: 'RSI2|1M',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI2_1W: new BaseField('RSI2_1W', {
    label: 'Rsi2|1W',
    fieldName: 'RSI2|1W',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI2_240: new BaseField('RSI2_240', {
    label: 'Rsi2|240',
    fieldName: 'RSI2|240',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI2_30: new BaseField('RSI2_30', {
    label: 'Rsi2|30',
    fieldName: 'RSI2|30',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI2_5: new BaseField('RSI2_5', {
    label: 'Rsi2|5',
    fieldName: 'RSI2|5',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI2_60: new BaseField('RSI2_60', {
    label: 'Rsi2|60',
    fieldName: 'RSI2|60',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI3: new BaseField('RSI3', {
    label: 'Rsi3',
    fieldName: 'RSI3',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI30: new BaseField('RSI30', {
    label: 'Rsi30',
    fieldName: 'RSI30',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI30_1: new BaseField('RSI30_1', {
    label: 'Rsi30[1]',
    fieldName: 'RSI30[1]',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI30_1_1: new BaseField('RSI30_1_1', {
    label: 'Rsi30[1]|1',
    fieldName: 'RSI30[1]|1',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI30_1_120: new BaseField('RSI30_1_120', {
    label: 'Rsi30[1]|120',
    fieldName: 'RSI30[1]|120',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI30_1_15: new BaseField('RSI30_1_15', {
    label: 'Rsi30[1]|15',
    fieldName: 'RSI30[1]|15',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI30_1_1M: new BaseField('RSI30_1_1M', {
    label: 'Rsi30[1]|1M',
    fieldName: 'RSI30[1]|1M',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI30_1_1W: new BaseField('RSI30_1_1W', {
    label: 'Rsi30[1]|1W',
    fieldName: 'RSI30[1]|1W',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI30_1_240: new BaseField('RSI30_1_240', {
    label: 'Rsi30[1]|240',
    fieldName: 'RSI30[1]|240',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI30_1_30: new BaseField('RSI30_1_30', {
    label: 'Rsi30[1]|30',
    fieldName: 'RSI30[1]|30',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI30_1_5: new BaseField('RSI30_1_5', {
    label: 'Rsi30[1]|5',
    fieldName: 'RSI30[1]|5',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI30_1_60: new BaseField('RSI30_1_60', {
    label: 'Rsi30[1]|60',
    fieldName: 'RSI30[1]|60',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI30_1_2: new BaseField('RSI30_1_2', {
    label: 'Rsi30|1',
    fieldName: 'RSI30|1',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI30_120: new BaseField('RSI30_120', {
    label: 'Rsi30|120',
    fieldName: 'RSI30|120',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI30_15: new BaseField('RSI30_15', {
    label: 'Rsi30|15',
    fieldName: 'RSI30|15',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI30_1M: new BaseField('RSI30_1M', {
    label: 'Rsi30|1M',
    fieldName: 'RSI30|1M',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI30_1W: new BaseField('RSI30_1W', {
    label: 'Rsi30|1W',
    fieldName: 'RSI30|1W',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI30_240: new BaseField('RSI30_240', {
    label: 'Rsi30|240',
    fieldName: 'RSI30|240',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI30_30: new BaseField('RSI30_30', {
    label: 'Rsi30|30',
    fieldName: 'RSI30|30',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI30_5: new BaseField('RSI30_5', {
    label: 'Rsi30|5',
    fieldName: 'RSI30|5',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI30_60: new BaseField('RSI30_60', {
    label: 'Rsi30|60',
    fieldName: 'RSI30|60',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI3_1: new BaseField('RSI3_1', {
    label: 'Rsi3[1]',
    fieldName: 'RSI3[1]',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI3_1_1: new BaseField('RSI3_1_1', {
    label: 'Rsi3[1]|1',
    fieldName: 'RSI3[1]|1',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI3_1_120: new BaseField('RSI3_1_120', {
    label: 'Rsi3[1]|120',
    fieldName: 'RSI3[1]|120',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI3_1_15: new BaseField('RSI3_1_15', {
    label: 'Rsi3[1]|15',
    fieldName: 'RSI3[1]|15',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI3_1_1M: new BaseField('RSI3_1_1M', {
    label: 'Rsi3[1]|1M',
    fieldName: 'RSI3[1]|1M',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI3_1_1W: new BaseField('RSI3_1_1W', {
    label: 'Rsi3[1]|1W',
    fieldName: 'RSI3[1]|1W',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI3_1_240: new BaseField('RSI3_1_240', {
    label: 'Rsi3[1]|240',
    fieldName: 'RSI3[1]|240',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI3_1_30: new BaseField('RSI3_1_30', {
    label: 'Rsi3[1]|30',
    fieldName: 'RSI3[1]|30',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI3_1_5: new BaseField('RSI3_1_5', {
    label: 'Rsi3[1]|5',
    fieldName: 'RSI3[1]|5',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI3_1_60: new BaseField('RSI3_1_60', {
    label: 'Rsi3[1]|60',
    fieldName: 'RSI3[1]|60',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI3_1_2: new BaseField('RSI3_1_2', {
    label: 'Rsi3|1',
    fieldName: 'RSI3|1',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI3_120: new BaseField('RSI3_120', {
    label: 'Rsi3|120',
    fieldName: 'RSI3|120',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI3_15: new BaseField('RSI3_15', {
    label: 'Rsi3|15',
    fieldName: 'RSI3|15',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI3_1M: new BaseField('RSI3_1M', {
    label: 'Rsi3|1M',
    fieldName: 'RSI3|1M',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI3_1W: new BaseField('RSI3_1W', {
    label: 'Rsi3|1W',
    fieldName: 'RSI3|1W',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI3_240: new BaseField('RSI3_240', {
    label: 'Rsi3|240',
    fieldName: 'RSI3|240',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI3_30: new BaseField('RSI3_30', {
    label: 'Rsi3|30',
    fieldName: 'RSI3|30',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI3_5: new BaseField('RSI3_5', {
    label: 'Rsi3|5',
    fieldName: 'RSI3|5',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI3_60: new BaseField('RSI3_60', {
    label: 'Rsi3|60',
    fieldName: 'RSI3|60',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI4: new BaseField('RSI4', {
    label: 'Rsi4',
    fieldName: 'RSI4',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI4_1: new BaseField('RSI4_1', {
    label: 'Rsi4[1]',
    fieldName: 'RSI4[1]',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI4_1_1: new BaseField('RSI4_1_1', {
    label: 'Rsi4[1]|1',
    fieldName: 'RSI4[1]|1',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI4_1_120: new BaseField('RSI4_1_120', {
    label: 'Rsi4[1]|120',
    fieldName: 'RSI4[1]|120',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI4_1_15: new BaseField('RSI4_1_15', {
    label: 'Rsi4[1]|15',
    fieldName: 'RSI4[1]|15',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI4_1_1M: new BaseField('RSI4_1_1M', {
    label: 'Rsi4[1]|1M',
    fieldName: 'RSI4[1]|1M',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI4_1_1W: new BaseField('RSI4_1_1W', {
    label: 'Rsi4[1]|1W',
    fieldName: 'RSI4[1]|1W',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI4_1_240: new BaseField('RSI4_1_240', {
    label: 'Rsi4[1]|240',
    fieldName: 'RSI4[1]|240',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI4_1_30: new BaseField('RSI4_1_30', {
    label: 'Rsi4[1]|30',
    fieldName: 'RSI4[1]|30',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI4_1_5: new BaseField('RSI4_1_5', {
    label: 'Rsi4[1]|5',
    fieldName: 'RSI4[1]|5',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI4_1_60: new BaseField('RSI4_1_60', {
    label: 'Rsi4[1]|60',
    fieldName: 'RSI4[1]|60',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI4_1_2: new BaseField('RSI4_1_2', {
    label: 'Rsi4|1',
    fieldName: 'RSI4|1',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI4_120: new BaseField('RSI4_120', {
    label: 'Rsi4|120',
    fieldName: 'RSI4|120',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI4_15: new BaseField('RSI4_15', {
    label: 'Rsi4|15',
    fieldName: 'RSI4|15',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI4_1M: new BaseField('RSI4_1M', {
    label: 'Rsi4|1M',
    fieldName: 'RSI4|1M',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI4_1W: new BaseField('RSI4_1W', {
    label: 'Rsi4|1W',
    fieldName: 'RSI4|1W',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI4_240: new BaseField('RSI4_240', {
    label: 'Rsi4|240',
    fieldName: 'RSI4|240',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI4_30: new BaseField('RSI4_30', {
    label: 'Rsi4|30',
    fieldName: 'RSI4|30',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI4_5: new BaseField('RSI4_5', {
    label: 'Rsi4|5',
    fieldName: 'RSI4|5',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI4_60: new BaseField('RSI4_60', {
    label: 'Rsi4|60',
    fieldName: 'RSI4|60',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI5: new BaseField('RSI5', {
    label: 'Rsi5',
    fieldName: 'RSI5',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI5_1: new BaseField('RSI5_1', {
    label: 'Rsi5[1]',
    fieldName: 'RSI5[1]',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI5_1_1: new BaseField('RSI5_1_1', {
    label: 'Rsi5[1]|1',
    fieldName: 'RSI5[1]|1',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI5_1_120: new BaseField('RSI5_1_120', {
    label: 'Rsi5[1]|120',
    fieldName: 'RSI5[1]|120',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI5_1_15: new BaseField('RSI5_1_15', {
    label: 'Rsi5[1]|15',
    fieldName: 'RSI5[1]|15',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI5_1_1M: new BaseField('RSI5_1_1M', {
    label: 'Rsi5[1]|1M',
    fieldName: 'RSI5[1]|1M',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI5_1_1W: new BaseField('RSI5_1_1W', {
    label: 'Rsi5[1]|1W',
    fieldName: 'RSI5[1]|1W',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI5_1_240: new BaseField('RSI5_1_240', {
    label: 'Rsi5[1]|240',
    fieldName: 'RSI5[1]|240',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI5_1_30: new BaseField('RSI5_1_30', {
    label: 'Rsi5[1]|30',
    fieldName: 'RSI5[1]|30',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI5_1_5: new BaseField('RSI5_1_5', {
    label: 'Rsi5[1]|5',
    fieldName: 'RSI5[1]|5',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI5_1_60: new BaseField('RSI5_1_60', {
    label: 'Rsi5[1]|60',
    fieldName: 'RSI5[1]|60',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI5_1_2: new BaseField('RSI5_1_2', {
    label: 'Rsi5|1',
    fieldName: 'RSI5|1',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI5_120: new BaseField('RSI5_120', {
    label: 'Rsi5|120',
    fieldName: 'RSI5|120',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI5_15: new BaseField('RSI5_15', {
    label: 'Rsi5|15',
    fieldName: 'RSI5|15',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI5_1M: new BaseField('RSI5_1M', {
    label: 'Rsi5|1M',
    fieldName: 'RSI5|1M',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI5_1W: new BaseField('RSI5_1W', {
    label: 'Rsi5|1W',
    fieldName: 'RSI5|1W',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI5_240: new BaseField('RSI5_240', {
    label: 'Rsi5|240',
    fieldName: 'RSI5|240',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI5_30: new BaseField('RSI5_30', {
    label: 'Rsi5|30',
    fieldName: 'RSI5|30',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI5_5: new BaseField('RSI5_5', {
    label: 'Rsi5|5',
    fieldName: 'RSI5|5',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI5_60: new BaseField('RSI5_60', {
    label: 'Rsi5|60',
    fieldName: 'RSI5|60',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RELATIVE_STRENGTH_INDEX_7: new BaseField('RELATIVE_STRENGTH_INDEX_7', {
    label: 'Relative Strength Index (7)',
    fieldName: 'RSI7',
    format: 'computed_recommendation',
    interval: true,
    historical: true,
  }),

  RSI7_1: new BaseField('RSI7_1', {
    label: 'Rsi7[1]',
    fieldName: 'RSI7[1]',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI7_1_1: new BaseField('RSI7_1_1', {
    label: 'Rsi7[1]|1',
    fieldName: 'RSI7[1]|1',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI7_1_120: new BaseField('RSI7_1_120', {
    label: 'Rsi7[1]|120',
    fieldName: 'RSI7[1]|120',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI7_1_15: new BaseField('RSI7_1_15', {
    label: 'Rsi7[1]|15',
    fieldName: 'RSI7[1]|15',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI7_1_1M: new BaseField('RSI7_1_1M', {
    label: 'Rsi7[1]|1M',
    fieldName: 'RSI7[1]|1M',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI7_1_1W: new BaseField('RSI7_1_1W', {
    label: 'Rsi7[1]|1W',
    fieldName: 'RSI7[1]|1W',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI7_1_240: new BaseField('RSI7_1_240', {
    label: 'Rsi7[1]|240',
    fieldName: 'RSI7[1]|240',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI7_1_30: new BaseField('RSI7_1_30', {
    label: 'Rsi7[1]|30',
    fieldName: 'RSI7[1]|30',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI7_1_5: new BaseField('RSI7_1_5', {
    label: 'Rsi7[1]|5',
    fieldName: 'RSI7[1]|5',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI7_1_60: new BaseField('RSI7_1_60', {
    label: 'Rsi7[1]|60',
    fieldName: 'RSI7[1]|60',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI7_1_2: new BaseField('RSI7_1_2', {
    label: 'Rsi7|1',
    fieldName: 'RSI7|1',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI7_120: new BaseField('RSI7_120', {
    label: 'Rsi7|120',
    fieldName: 'RSI7|120',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI7_15: new BaseField('RSI7_15', {
    label: 'Rsi7|15',
    fieldName: 'RSI7|15',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI7_1M: new BaseField('RSI7_1M', {
    label: 'Rsi7|1M',
    fieldName: 'RSI7|1M',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI7_1W: new BaseField('RSI7_1W', {
    label: 'Rsi7|1W',
    fieldName: 'RSI7|1W',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI7_240: new BaseField('RSI7_240', {
    label: 'Rsi7|240',
    fieldName: 'RSI7|240',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI7_30: new BaseField('RSI7_30', {
    label: 'Rsi7|30',
    fieldName: 'RSI7|30',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI7_5: new BaseField('RSI7_5', {
    label: 'Rsi7|5',
    fieldName: 'RSI7|5',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI7_60: new BaseField('RSI7_60', {
    label: 'Rsi7|60',
    fieldName: 'RSI7|60',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI9: new BaseField('RSI9', {
    label: 'Rsi9',
    fieldName: 'RSI9',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI9_1: new BaseField('RSI9_1', {
    label: 'Rsi9[1]',
    fieldName: 'RSI9[1]',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI9_1_1: new BaseField('RSI9_1_1', {
    label: 'Rsi9[1]|1',
    fieldName: 'RSI9[1]|1',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI9_1_120: new BaseField('RSI9_1_120', {
    label: 'Rsi9[1]|120',
    fieldName: 'RSI9[1]|120',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI9_1_15: new BaseField('RSI9_1_15', {
    label: 'Rsi9[1]|15',
    fieldName: 'RSI9[1]|15',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI9_1_1M: new BaseField('RSI9_1_1M', {
    label: 'Rsi9[1]|1M',
    fieldName: 'RSI9[1]|1M',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI9_1_1W: new BaseField('RSI9_1_1W', {
    label: 'Rsi9[1]|1W',
    fieldName: 'RSI9[1]|1W',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI9_1_240: new BaseField('RSI9_1_240', {
    label: 'Rsi9[1]|240',
    fieldName: 'RSI9[1]|240',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI9_1_30: new BaseField('RSI9_1_30', {
    label: 'Rsi9[1]|30',
    fieldName: 'RSI9[1]|30',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI9_1_5: new BaseField('RSI9_1_5', {
    label: 'Rsi9[1]|5',
    fieldName: 'RSI9[1]|5',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI9_1_60: new BaseField('RSI9_1_60', {
    label: 'Rsi9[1]|60',
    fieldName: 'RSI9[1]|60',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI9_1_2: new BaseField('RSI9_1_2', {
    label: 'Rsi9|1',
    fieldName: 'RSI9|1',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI9_120: new BaseField('RSI9_120', {
    label: 'Rsi9|120',
    fieldName: 'RSI9|120',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI9_15: new BaseField('RSI9_15', {
    label: 'Rsi9|15',
    fieldName: 'RSI9|15',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI9_1M: new BaseField('RSI9_1M', {
    label: 'Rsi9|1M',
    fieldName: 'RSI9|1M',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI9_1W: new BaseField('RSI9_1W', {
    label: 'Rsi9|1W',
    fieldName: 'RSI9|1W',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI9_240: new BaseField('RSI9_240', {
    label: 'Rsi9|240',
    fieldName: 'RSI9|240',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI9_30: new BaseField('RSI9_30', {
    label: 'Rsi9|30',
    fieldName: 'RSI9|30',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI9_5: new BaseField('RSI9_5', {
    label: 'Rsi9|5',
    fieldName: 'RSI9|5',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI9_60: new BaseField('RSI9_60', {
    label: 'Rsi9|60',
    fieldName: 'RSI9|60',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI_1: new BaseField('RSI_1', {
    label: 'RSI[1]',
    fieldName: 'RSI[1]',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI_1_1: new BaseField('RSI_1_1', {
    label: 'RSI[1]|1',
    fieldName: 'RSI[1]|1',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI_1_120: new BaseField('RSI_1_120', {
    label: 'RSI[1]|120',
    fieldName: 'RSI[1]|120',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI_1_15: new BaseField('RSI_1_15', {
    label: 'RSI[1]|15',
    fieldName: 'RSI[1]|15',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI_1_1M: new BaseField('RSI_1_1M', {
    label: 'RSI[1]|1M',
    fieldName: 'RSI[1]|1M',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI_1_1W: new BaseField('RSI_1_1W', {
    label: 'RSI[1]|1W',
    fieldName: 'RSI[1]|1W',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI_1_240: new BaseField('RSI_1_240', {
    label: 'RSI[1]|240',
    fieldName: 'RSI[1]|240',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI_1_30: new BaseField('RSI_1_30', {
    label: 'RSI[1]|30',
    fieldName: 'RSI[1]|30',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI_1_5: new BaseField('RSI_1_5', {
    label: 'RSI[1]|5',
    fieldName: 'RSI[1]|5',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI_1_60: new BaseField('RSI_1_60', {
    label: 'RSI[1]|60',
    fieldName: 'RSI[1]|60',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI_1_2: new BaseField('RSI_1_2', {
    label: 'RSI|1',
    fieldName: 'RSI|1',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI_120: new BaseField('RSI_120', {
    label: 'RSI|120',
    fieldName: 'RSI|120',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI_15: new BaseField('RSI_15', {
    label: 'RSI|15',
    fieldName: 'RSI|15',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI_1M: new BaseField('RSI_1M', {
    label: 'RSI|1M',
    fieldName: 'RSI|1M',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI_1W: new BaseField('RSI_1W', {
    label: 'RSI|1W',
    fieldName: 'RSI|1W',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI_240: new BaseField('RSI_240', {
    label: 'RSI|240',
    fieldName: 'RSI|240',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI_30: new BaseField('RSI_30', {
    label: 'RSI|30',
    fieldName: 'RSI|30',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI_5: new BaseField('RSI_5', {
    label: 'RSI|5',
    fieldName: 'RSI|5',
    format: 'float',
    interval: true,
    historical: true,
  }),

  RSI_60: new BaseField('RSI_60', {
    label: 'RSI|60',
    fieldName: 'RSI|60',
    format: 'float',
    interval: true,
    historical: true,
  }),

  REC_STOCH_RSI: new BaseField('REC_STOCH_RSI', {
    label: 'Rec Stoch RSI',
    fieldName: 'Rec.Stoch.RSI',
    format: 'rating',
    interval: true,
    historical: true,
  }),

  REC_STOCH_RSI_1: new BaseField('REC_STOCH_RSI_1', {
    label: 'Rec Stoch RSI|1',
    fieldName: 'Rec.Stoch.RSI|1',
    format: 'rating',
    interval: true,
    historical: true,
  }),

  REC_STOCH_RSI_120: new BaseField('REC_STOCH_RSI_120', {
    label: 'Rec Stoch RSI|120',
    fieldName: 'Rec.Stoch.RSI|120',
    format: 'rating',
    interval: true,
    historical: true,
  }),

  REC_STOCH_RSI_15: new BaseField('REC_STOCH_RSI_15', {
    label: 'Rec Stoch RSI|15',
    fieldName: 'Rec.Stoch.RSI|15',
    format: 'rating',
    interval: true,
    historical: true,
  }),

  REC_STOCH_RSI_1M: new BaseField('REC_STOCH_RSI_1M', {
    label: 'Rec Stoch RSI|1M',
    fieldName: 'Rec.Stoch.RSI|1M',
    format: 'rating',
    interval: true,
    historical: true,
  }),

  REC_STOCH_RSI_1W: new BaseField('REC_STOCH_RSI_1W', {
    label: 'Rec Stoch RSI|1W',
    fieldName: 'Rec.Stoch.RSI|1W',
    format: 'rating',
    interval: true,
    historical: true,
  }),

  REC_STOCH_RSI_240: new BaseField('REC_STOCH_RSI_240', {
    label: 'Rec Stoch RSI|240',
    fieldName: 'Rec.Stoch.RSI|240',
    format: 'rating',
    interval: true,
    historical: true,
  }),

  REC_STOCH_RSI_30: new BaseField('REC_STOCH_RSI_30', {
    label: 'Rec Stoch RSI|30',
    fieldName: 'Rec.Stoch.RSI|30',
    format: 'rating',
    interval: true,
    historical: true,
  }),

  REC_STOCH_RSI_5: new BaseField('REC_STOCH_RSI_5', {
    label: 'Rec Stoch RSI|5',
    fieldName: 'Rec.Stoch.RSI|5',
    format: 'rating',
    interval: true,
    historical: true,
  }),

  REC_STOCH_RSI_60: new BaseField('REC_STOCH_RSI_60', {
    label: 'Rec Stoch RSI|60',
    fieldName: 'Rec.Stoch.RSI|60',
    format: 'rating',
    interval: true,
    historical: true,
  }),

  STOCHASTIC_PERCENTD_14_3_3: new BaseField('STOCHASTIC_PERCENTD_14_3_3', {
    label: 'Stochastic %D (14, 3, 3)',
    fieldName: 'Stoch.D',
    format: 'round',
    interval: true,
    historical: true,
  }),

  STOCH_D_1: new BaseField('STOCH_D_1', {
    label: 'Stoch D[1]',
    fieldName: 'Stoch.D[1]',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_D_1_1: new BaseField('STOCH_D_1_1', {
    label: 'Stoch D[1]|1',
    fieldName: 'Stoch.D[1]|1',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_D_1_120: new BaseField('STOCH_D_1_120', {
    label: 'Stoch D[1]|120',
    fieldName: 'Stoch.D[1]|120',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_D_1_15: new BaseField('STOCH_D_1_15', {
    label: 'Stoch D[1]|15',
    fieldName: 'Stoch.D[1]|15',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_D_1_1M: new BaseField('STOCH_D_1_1M', {
    label: 'Stoch D[1]|1M',
    fieldName: 'Stoch.D[1]|1M',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_D_1_1W: new BaseField('STOCH_D_1_1W', {
    label: 'Stoch D[1]|1W',
    fieldName: 'Stoch.D[1]|1W',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_D_1_240: new BaseField('STOCH_D_1_240', {
    label: 'Stoch D[1]|240',
    fieldName: 'Stoch.D[1]|240',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_D_1_30: new BaseField('STOCH_D_1_30', {
    label: 'Stoch D[1]|30',
    fieldName: 'Stoch.D[1]|30',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_D_1_5: new BaseField('STOCH_D_1_5', {
    label: 'Stoch D[1]|5',
    fieldName: 'Stoch.D[1]|5',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_D_1_60: new BaseField('STOCH_D_1_60', {
    label: 'Stoch D[1]|60',
    fieldName: 'Stoch.D[1]|60',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_D_14_1_3: new BaseField('STOCH_D_14_1_3', {
    label: 'Stoch D 14 1 3',
    fieldName: 'Stoch.D_14_1_3',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_D_14_1_3_1: new BaseField('STOCH_D_14_1_3_1', {
    label: 'Stoch D 14 1 3[1]',
    fieldName: 'Stoch.D_14_1_3[1]',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_D_14_1_3_1_1: new BaseField('STOCH_D_14_1_3_1_1', {
    label: 'Stoch D 14 1 3[1]|1',
    fieldName: 'Stoch.D_14_1_3[1]|1',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_D_14_1_3_1_120: new BaseField('STOCH_D_14_1_3_1_120', {
    label: 'Stoch D 14 1 3[1]|120',
    fieldName: 'Stoch.D_14_1_3[1]|120',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_D_14_1_3_1_15: new BaseField('STOCH_D_14_1_3_1_15', {
    label: 'Stoch D 14 1 3[1]|15',
    fieldName: 'Stoch.D_14_1_3[1]|15',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_D_14_1_3_1_1M: new BaseField('STOCH_D_14_1_3_1_1M', {
    label: 'Stoch D 14 1 3[1]|1M',
    fieldName: 'Stoch.D_14_1_3[1]|1M',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_D_14_1_3_1_1W: new BaseField('STOCH_D_14_1_3_1_1W', {
    label: 'Stoch D 14 1 3[1]|1W',
    fieldName: 'Stoch.D_14_1_3[1]|1W',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_D_14_1_3_1_240: new BaseField('STOCH_D_14_1_3_1_240', {
    label: 'Stoch D 14 1 3[1]|240',
    fieldName: 'Stoch.D_14_1_3[1]|240',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_D_14_1_3_1_30: new BaseField('STOCH_D_14_1_3_1_30', {
    label: 'Stoch D 14 1 3[1]|30',
    fieldName: 'Stoch.D_14_1_3[1]|30',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_D_14_1_3_1_5: new BaseField('STOCH_D_14_1_3_1_5', {
    label: 'Stoch D 14 1 3[1]|5',
    fieldName: 'Stoch.D_14_1_3[1]|5',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_D_14_1_3_1_60: new BaseField('STOCH_D_14_1_3_1_60', {
    label: 'Stoch D 14 1 3[1]|60',
    fieldName: 'Stoch.D_14_1_3[1]|60',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_D_14_1_3_1_2: new BaseField('STOCH_D_14_1_3_1_2', {
    label: 'Stoch D 14 1 3|1',
    fieldName: 'Stoch.D_14_1_3|1',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_D_14_1_3_120: new BaseField('STOCH_D_14_1_3_120', {
    label: 'Stoch D 14 1 3|120',
    fieldName: 'Stoch.D_14_1_3|120',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_D_14_1_3_15: new BaseField('STOCH_D_14_1_3_15', {
    label: 'Stoch D 14 1 3|15',
    fieldName: 'Stoch.D_14_1_3|15',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_D_14_1_3_1M: new BaseField('STOCH_D_14_1_3_1M', {
    label: 'Stoch D 14 1 3|1M',
    fieldName: 'Stoch.D_14_1_3|1M',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_D_14_1_3_1W: new BaseField('STOCH_D_14_1_3_1W', {
    label: 'Stoch D 14 1 3|1W',
    fieldName: 'Stoch.D_14_1_3|1W',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_D_14_1_3_240: new BaseField('STOCH_D_14_1_3_240', {
    label: 'Stoch D 14 1 3|240',
    fieldName: 'Stoch.D_14_1_3|240',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_D_14_1_3_30: new BaseField('STOCH_D_14_1_3_30', {
    label: 'Stoch D 14 1 3|30',
    fieldName: 'Stoch.D_14_1_3|30',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_D_14_1_3_5: new BaseField('STOCH_D_14_1_3_5', {
    label: 'Stoch D 14 1 3|5',
    fieldName: 'Stoch.D_14_1_3|5',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_D_14_1_3_60: new BaseField('STOCH_D_14_1_3_60', {
    label: 'Stoch D 14 1 3|60',
    fieldName: 'Stoch.D_14_1_3|60',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_D_5_3_3: new BaseField('STOCH_D_5_3_3', {
    label: 'Stoch D 5 3 3',
    fieldName: 'Stoch.D_5_3_3',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_D_5_3_3_1: new BaseField('STOCH_D_5_3_3_1', {
    label: 'Stoch D 5 3 3[1]',
    fieldName: 'Stoch.D_5_3_3[1]',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_D_5_3_3_1_1: new BaseField('STOCH_D_5_3_3_1_1', {
    label: 'Stoch D 5 3 3[1]|1',
    fieldName: 'Stoch.D_5_3_3[1]|1',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_D_5_3_3_1_120: new BaseField('STOCH_D_5_3_3_1_120', {
    label: 'Stoch D 5 3 3[1]|120',
    fieldName: 'Stoch.D_5_3_3[1]|120',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_D_5_3_3_1_15: new BaseField('STOCH_D_5_3_3_1_15', {
    label: 'Stoch D 5 3 3[1]|15',
    fieldName: 'Stoch.D_5_3_3[1]|15',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_D_5_3_3_1_1M: new BaseField('STOCH_D_5_3_3_1_1M', {
    label: 'Stoch D 5 3 3[1]|1M',
    fieldName: 'Stoch.D_5_3_3[1]|1M',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_D_5_3_3_1_1W: new BaseField('STOCH_D_5_3_3_1_1W', {
    label: 'Stoch D 5 3 3[1]|1W',
    fieldName: 'Stoch.D_5_3_3[1]|1W',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_D_5_3_3_1_240: new BaseField('STOCH_D_5_3_3_1_240', {
    label: 'Stoch D 5 3 3[1]|240',
    fieldName: 'Stoch.D_5_3_3[1]|240',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_D_5_3_3_1_30: new BaseField('STOCH_D_5_3_3_1_30', {
    label: 'Stoch D 5 3 3[1]|30',
    fieldName: 'Stoch.D_5_3_3[1]|30',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_D_5_3_3_1_5: new BaseField('STOCH_D_5_3_3_1_5', {
    label: 'Stoch D 5 3 3[1]|5',
    fieldName: 'Stoch.D_5_3_3[1]|5',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_D_5_3_3_1_60: new BaseField('STOCH_D_5_3_3_1_60', {
    label: 'Stoch D 5 3 3[1]|60',
    fieldName: 'Stoch.D_5_3_3[1]|60',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_D_5_3_3_1_2: new BaseField('STOCH_D_5_3_3_1_2', {
    label: 'Stoch D 5 3 3|1',
    fieldName: 'Stoch.D_5_3_3|1',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_D_5_3_3_120: new BaseField('STOCH_D_5_3_3_120', {
    label: 'Stoch D 5 3 3|120',
    fieldName: 'Stoch.D_5_3_3|120',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_D_5_3_3_15: new BaseField('STOCH_D_5_3_3_15', {
    label: 'Stoch D 5 3 3|15',
    fieldName: 'Stoch.D_5_3_3|15',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_D_5_3_3_1M: new BaseField('STOCH_D_5_3_3_1M', {
    label: 'Stoch D 5 3 3|1M',
    fieldName: 'Stoch.D_5_3_3|1M',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_D_5_3_3_1W: new BaseField('STOCH_D_5_3_3_1W', {
    label: 'Stoch D 5 3 3|1W',
    fieldName: 'Stoch.D_5_3_3|1W',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_D_5_3_3_240: new BaseField('STOCH_D_5_3_3_240', {
    label: 'Stoch D 5 3 3|240',
    fieldName: 'Stoch.D_5_3_3|240',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_D_5_3_3_30: new BaseField('STOCH_D_5_3_3_30', {
    label: 'Stoch D 5 3 3|30',
    fieldName: 'Stoch.D_5_3_3|30',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_D_5_3_3_5: new BaseField('STOCH_D_5_3_3_5', {
    label: 'Stoch D 5 3 3|5',
    fieldName: 'Stoch.D_5_3_3|5',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_D_5_3_3_60: new BaseField('STOCH_D_5_3_3_60', {
    label: 'Stoch D 5 3 3|60',
    fieldName: 'Stoch.D_5_3_3|60',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_D_6_3_3: new BaseField('STOCH_D_6_3_3', {
    label: 'Stoch D 6 3 3',
    fieldName: 'Stoch.D_6_3_3',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_D_6_3_3_1: new BaseField('STOCH_D_6_3_3_1', {
    label: 'Stoch D 6 3 3[1]',
    fieldName: 'Stoch.D_6_3_3[1]',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_D_6_3_3_1_1: new BaseField('STOCH_D_6_3_3_1_1', {
    label: 'Stoch D 6 3 3[1]|1',
    fieldName: 'Stoch.D_6_3_3[1]|1',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_D_6_3_3_1_120: new BaseField('STOCH_D_6_3_3_1_120', {
    label: 'Stoch D 6 3 3[1]|120',
    fieldName: 'Stoch.D_6_3_3[1]|120',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_D_6_3_3_1_15: new BaseField('STOCH_D_6_3_3_1_15', {
    label: 'Stoch D 6 3 3[1]|15',
    fieldName: 'Stoch.D_6_3_3[1]|15',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_D_6_3_3_1_1M: new BaseField('STOCH_D_6_3_3_1_1M', {
    label: 'Stoch D 6 3 3[1]|1M',
    fieldName: 'Stoch.D_6_3_3[1]|1M',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_D_6_3_3_1_1W: new BaseField('STOCH_D_6_3_3_1_1W', {
    label: 'Stoch D 6 3 3[1]|1W',
    fieldName: 'Stoch.D_6_3_3[1]|1W',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_D_6_3_3_1_240: new BaseField('STOCH_D_6_3_3_1_240', {
    label: 'Stoch D 6 3 3[1]|240',
    fieldName: 'Stoch.D_6_3_3[1]|240',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_D_6_3_3_1_30: new BaseField('STOCH_D_6_3_3_1_30', {
    label: 'Stoch D 6 3 3[1]|30',
    fieldName: 'Stoch.D_6_3_3[1]|30',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_D_6_3_3_1_5: new BaseField('STOCH_D_6_3_3_1_5', {
    label: 'Stoch D 6 3 3[1]|5',
    fieldName: 'Stoch.D_6_3_3[1]|5',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_D_6_3_3_1_60: new BaseField('STOCH_D_6_3_3_1_60', {
    label: 'Stoch D 6 3 3[1]|60',
    fieldName: 'Stoch.D_6_3_3[1]|60',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_D_6_3_3_1_2: new BaseField('STOCH_D_6_3_3_1_2', {
    label: 'Stoch D 6 3 3|1',
    fieldName: 'Stoch.D_6_3_3|1',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_D_6_3_3_120: new BaseField('STOCH_D_6_3_3_120', {
    label: 'Stoch D 6 3 3|120',
    fieldName: 'Stoch.D_6_3_3|120',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_D_6_3_3_15: new BaseField('STOCH_D_6_3_3_15', {
    label: 'Stoch D 6 3 3|15',
    fieldName: 'Stoch.D_6_3_3|15',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_D_6_3_3_1M: new BaseField('STOCH_D_6_3_3_1M', {
    label: 'Stoch D 6 3 3|1M',
    fieldName: 'Stoch.D_6_3_3|1M',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_D_6_3_3_1W: new BaseField('STOCH_D_6_3_3_1W', {
    label: 'Stoch D 6 3 3|1W',
    fieldName: 'Stoch.D_6_3_3|1W',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_D_6_3_3_240: new BaseField('STOCH_D_6_3_3_240', {
    label: 'Stoch D 6 3 3|240',
    fieldName: 'Stoch.D_6_3_3|240',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_D_6_3_3_30: new BaseField('STOCH_D_6_3_3_30', {
    label: 'Stoch D 6 3 3|30',
    fieldName: 'Stoch.D_6_3_3|30',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_D_6_3_3_5: new BaseField('STOCH_D_6_3_3_5', {
    label: 'Stoch D 6 3 3|5',
    fieldName: 'Stoch.D_6_3_3|5',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_D_6_3_3_60: new BaseField('STOCH_D_6_3_3_60', {
    label: 'Stoch D 6 3 3|60',
    fieldName: 'Stoch.D_6_3_3|60',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_D_8_3_3: new BaseField('STOCH_D_8_3_3', {
    label: 'Stoch D 8 3 3',
    fieldName: 'Stoch.D_8_3_3',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_D_8_3_3_1: new BaseField('STOCH_D_8_3_3_1', {
    label: 'Stoch D 8 3 3[1]',
    fieldName: 'Stoch.D_8_3_3[1]',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_D_8_3_3_1_1: new BaseField('STOCH_D_8_3_3_1_1', {
    label: 'Stoch D 8 3 3[1]|1',
    fieldName: 'Stoch.D_8_3_3[1]|1',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_D_8_3_3_1_120: new BaseField('STOCH_D_8_3_3_1_120', {
    label: 'Stoch D 8 3 3[1]|120',
    fieldName: 'Stoch.D_8_3_3[1]|120',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_D_8_3_3_1_15: new BaseField('STOCH_D_8_3_3_1_15', {
    label: 'Stoch D 8 3 3[1]|15',
    fieldName: 'Stoch.D_8_3_3[1]|15',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_D_8_3_3_1_1M: new BaseField('STOCH_D_8_3_3_1_1M', {
    label: 'Stoch D 8 3 3[1]|1M',
    fieldName: 'Stoch.D_8_3_3[1]|1M',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_D_8_3_3_1_1W: new BaseField('STOCH_D_8_3_3_1_1W', {
    label: 'Stoch D 8 3 3[1]|1W',
    fieldName: 'Stoch.D_8_3_3[1]|1W',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_D_8_3_3_1_240: new BaseField('STOCH_D_8_3_3_1_240', {
    label: 'Stoch D 8 3 3[1]|240',
    fieldName: 'Stoch.D_8_3_3[1]|240',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_D_8_3_3_1_30: new BaseField('STOCH_D_8_3_3_1_30', {
    label: 'Stoch D 8 3 3[1]|30',
    fieldName: 'Stoch.D_8_3_3[1]|30',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_D_8_3_3_1_5: new BaseField('STOCH_D_8_3_3_1_5', {
    label: 'Stoch D 8 3 3[1]|5',
    fieldName: 'Stoch.D_8_3_3[1]|5',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_D_8_3_3_1_60: new BaseField('STOCH_D_8_3_3_1_60', {
    label: 'Stoch D 8 3 3[1]|60',
    fieldName: 'Stoch.D_8_3_3[1]|60',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_D_8_3_3_1_2: new BaseField('STOCH_D_8_3_3_1_2', {
    label: 'Stoch D 8 3 3|1',
    fieldName: 'Stoch.D_8_3_3|1',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_D_8_3_3_120: new BaseField('STOCH_D_8_3_3_120', {
    label: 'Stoch D 8 3 3|120',
    fieldName: 'Stoch.D_8_3_3|120',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_D_8_3_3_15: new BaseField('STOCH_D_8_3_3_15', {
    label: 'Stoch D 8 3 3|15',
    fieldName: 'Stoch.D_8_3_3|15',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_D_8_3_3_1M: new BaseField('STOCH_D_8_3_3_1M', {
    label: 'Stoch D 8 3 3|1M',
    fieldName: 'Stoch.D_8_3_3|1M',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_D_8_3_3_1W: new BaseField('STOCH_D_8_3_3_1W', {
    label: 'Stoch D 8 3 3|1W',
    fieldName: 'Stoch.D_8_3_3|1W',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_D_8_3_3_240: new BaseField('STOCH_D_8_3_3_240', {
    label: 'Stoch D 8 3 3|240',
    fieldName: 'Stoch.D_8_3_3|240',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_D_8_3_3_30: new BaseField('STOCH_D_8_3_3_30', {
    label: 'Stoch D 8 3 3|30',
    fieldName: 'Stoch.D_8_3_3|30',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_D_8_3_3_5: new BaseField('STOCH_D_8_3_3_5', {
    label: 'Stoch D 8 3 3|5',
    fieldName: 'Stoch.D_8_3_3|5',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_D_8_3_3_60: new BaseField('STOCH_D_8_3_3_60', {
    label: 'Stoch D 8 3 3|60',
    fieldName: 'Stoch.D_8_3_3|60',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_D_1_2: new BaseField('STOCH_D_1_2', {
    label: 'Stoch D|1',
    fieldName: 'Stoch.D|1',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_D_120: new BaseField('STOCH_D_120', {
    label: 'Stoch D|120',
    fieldName: 'Stoch.D|120',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_D_15: new BaseField('STOCH_D_15', {
    label: 'Stoch D|15',
    fieldName: 'Stoch.D|15',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_D_1M: new BaseField('STOCH_D_1M', {
    label: 'Stoch D|1M',
    fieldName: 'Stoch.D|1M',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_D_1W: new BaseField('STOCH_D_1W', {
    label: 'Stoch D|1W',
    fieldName: 'Stoch.D|1W',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_D_240: new BaseField('STOCH_D_240', {
    label: 'Stoch D|240',
    fieldName: 'Stoch.D|240',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_D_30: new BaseField('STOCH_D_30', {
    label: 'Stoch D|30',
    fieldName: 'Stoch.D|30',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_D_5: new BaseField('STOCH_D_5', {
    label: 'Stoch D|5',
    fieldName: 'Stoch.D|5',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_D_60: new BaseField('STOCH_D_60', {
    label: 'Stoch D|60',
    fieldName: 'Stoch.D|60',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCHASTIC_PERCENTK_14_3_3: new BaseField('STOCHASTIC_PERCENTK_14_3_3', {
    label: 'Stochastic %K (14, 3, 3)',
    fieldName: 'Stoch.K',
    format: 'computed_recommendation',
    interval: true,
    historical: true,
  }),

  STOCH_K_1: new BaseField('STOCH_K_1', {
    label: 'Stoch K[1]',
    fieldName: 'Stoch.K[1]',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_K_1_1: new BaseField('STOCH_K_1_1', {
    label: 'Stoch K[1]|1',
    fieldName: 'Stoch.K[1]|1',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_K_1_120: new BaseField('STOCH_K_1_120', {
    label: 'Stoch K[1]|120',
    fieldName: 'Stoch.K[1]|120',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_K_1_15: new BaseField('STOCH_K_1_15', {
    label: 'Stoch K[1]|15',
    fieldName: 'Stoch.K[1]|15',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_K_1_1M: new BaseField('STOCH_K_1_1M', {
    label: 'Stoch K[1]|1M',
    fieldName: 'Stoch.K[1]|1M',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_K_1_1W: new BaseField('STOCH_K_1_1W', {
    label: 'Stoch K[1]|1W',
    fieldName: 'Stoch.K[1]|1W',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_K_1_240: new BaseField('STOCH_K_1_240', {
    label: 'Stoch K[1]|240',
    fieldName: 'Stoch.K[1]|240',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_K_1_30: new BaseField('STOCH_K_1_30', {
    label: 'Stoch K[1]|30',
    fieldName: 'Stoch.K[1]|30',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_K_1_5: new BaseField('STOCH_K_1_5', {
    label: 'Stoch K[1]|5',
    fieldName: 'Stoch.K[1]|5',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_K_1_60: new BaseField('STOCH_K_1_60', {
    label: 'Stoch K[1]|60',
    fieldName: 'Stoch.K[1]|60',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_K_14_1_3: new BaseField('STOCH_K_14_1_3', {
    label: 'Stoch K 14 1 3',
    fieldName: 'Stoch.K_14_1_3',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_K_14_1_3_1: new BaseField('STOCH_K_14_1_3_1', {
    label: 'Stoch K 14 1 3[1]',
    fieldName: 'Stoch.K_14_1_3[1]',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_K_14_1_3_1_1: new BaseField('STOCH_K_14_1_3_1_1', {
    label: 'Stoch K 14 1 3[1]|1',
    fieldName: 'Stoch.K_14_1_3[1]|1',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_K_14_1_3_1_120: new BaseField('STOCH_K_14_1_3_1_120', {
    label: 'Stoch K 14 1 3[1]|120',
    fieldName: 'Stoch.K_14_1_3[1]|120',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_K_14_1_3_1_15: new BaseField('STOCH_K_14_1_3_1_15', {
    label: 'Stoch K 14 1 3[1]|15',
    fieldName: 'Stoch.K_14_1_3[1]|15',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_K_14_1_3_1_1M: new BaseField('STOCH_K_14_1_3_1_1M', {
    label: 'Stoch K 14 1 3[1]|1M',
    fieldName: 'Stoch.K_14_1_3[1]|1M',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_K_14_1_3_1_1W: new BaseField('STOCH_K_14_1_3_1_1W', {
    label: 'Stoch K 14 1 3[1]|1W',
    fieldName: 'Stoch.K_14_1_3[1]|1W',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_K_14_1_3_1_240: new BaseField('STOCH_K_14_1_3_1_240', {
    label: 'Stoch K 14 1 3[1]|240',
    fieldName: 'Stoch.K_14_1_3[1]|240',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_K_14_1_3_1_30: new BaseField('STOCH_K_14_1_3_1_30', {
    label: 'Stoch K 14 1 3[1]|30',
    fieldName: 'Stoch.K_14_1_3[1]|30',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_K_14_1_3_1_5: new BaseField('STOCH_K_14_1_3_1_5', {
    label: 'Stoch K 14 1 3[1]|5',
    fieldName: 'Stoch.K_14_1_3[1]|5',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_K_14_1_3_1_60: new BaseField('STOCH_K_14_1_3_1_60', {
    label: 'Stoch K 14 1 3[1]|60',
    fieldName: 'Stoch.K_14_1_3[1]|60',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_K_14_1_3_1_2: new BaseField('STOCH_K_14_1_3_1_2', {
    label: 'Stoch K 14 1 3|1',
    fieldName: 'Stoch.K_14_1_3|1',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_K_14_1_3_120: new BaseField('STOCH_K_14_1_3_120', {
    label: 'Stoch K 14 1 3|120',
    fieldName: 'Stoch.K_14_1_3|120',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_K_14_1_3_15: new BaseField('STOCH_K_14_1_3_15', {
    label: 'Stoch K 14 1 3|15',
    fieldName: 'Stoch.K_14_1_3|15',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_K_14_1_3_1M: new BaseField('STOCH_K_14_1_3_1M', {
    label: 'Stoch K 14 1 3|1M',
    fieldName: 'Stoch.K_14_1_3|1M',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_K_14_1_3_1W: new BaseField('STOCH_K_14_1_3_1W', {
    label: 'Stoch K 14 1 3|1W',
    fieldName: 'Stoch.K_14_1_3|1W',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_K_14_1_3_240: new BaseField('STOCH_K_14_1_3_240', {
    label: 'Stoch K 14 1 3|240',
    fieldName: 'Stoch.K_14_1_3|240',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_K_14_1_3_30: new BaseField('STOCH_K_14_1_3_30', {
    label: 'Stoch K 14 1 3|30',
    fieldName: 'Stoch.K_14_1_3|30',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_K_14_1_3_5: new BaseField('STOCH_K_14_1_3_5', {
    label: 'Stoch K 14 1 3|5',
    fieldName: 'Stoch.K_14_1_3|5',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_K_14_1_3_60: new BaseField('STOCH_K_14_1_3_60', {
    label: 'Stoch K 14 1 3|60',
    fieldName: 'Stoch.K_14_1_3|60',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_K_5_3_3: new BaseField('STOCH_K_5_3_3', {
    label: 'Stoch K 5 3 3',
    fieldName: 'Stoch.K_5_3_3',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_K_5_3_3_1: new BaseField('STOCH_K_5_3_3_1', {
    label: 'Stoch K 5 3 3[1]',
    fieldName: 'Stoch.K_5_3_3[1]',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_K_5_3_3_1_1: new BaseField('STOCH_K_5_3_3_1_1', {
    label: 'Stoch K 5 3 3[1]|1',
    fieldName: 'Stoch.K_5_3_3[1]|1',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_K_5_3_3_1_120: new BaseField('STOCH_K_5_3_3_1_120', {
    label: 'Stoch K 5 3 3[1]|120',
    fieldName: 'Stoch.K_5_3_3[1]|120',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_K_5_3_3_1_15: new BaseField('STOCH_K_5_3_3_1_15', {
    label: 'Stoch K 5 3 3[1]|15',
    fieldName: 'Stoch.K_5_3_3[1]|15',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_K_5_3_3_1_1M: new BaseField('STOCH_K_5_3_3_1_1M', {
    label: 'Stoch K 5 3 3[1]|1M',
    fieldName: 'Stoch.K_5_3_3[1]|1M',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_K_5_3_3_1_1W: new BaseField('STOCH_K_5_3_3_1_1W', {
    label: 'Stoch K 5 3 3[1]|1W',
    fieldName: 'Stoch.K_5_3_3[1]|1W',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_K_5_3_3_1_240: new BaseField('STOCH_K_5_3_3_1_240', {
    label: 'Stoch K 5 3 3[1]|240',
    fieldName: 'Stoch.K_5_3_3[1]|240',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_K_5_3_3_1_30: new BaseField('STOCH_K_5_3_3_1_30', {
    label: 'Stoch K 5 3 3[1]|30',
    fieldName: 'Stoch.K_5_3_3[1]|30',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_K_5_3_3_1_5: new BaseField('STOCH_K_5_3_3_1_5', {
    label: 'Stoch K 5 3 3[1]|5',
    fieldName: 'Stoch.K_5_3_3[1]|5',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_K_5_3_3_1_60: new BaseField('STOCH_K_5_3_3_1_60', {
    label: 'Stoch K 5 3 3[1]|60',
    fieldName: 'Stoch.K_5_3_3[1]|60',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_K_5_3_3_1_2: new BaseField('STOCH_K_5_3_3_1_2', {
    label: 'Stoch K 5 3 3|1',
    fieldName: 'Stoch.K_5_3_3|1',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_K_5_3_3_120: new BaseField('STOCH_K_5_3_3_120', {
    label: 'Stoch K 5 3 3|120',
    fieldName: 'Stoch.K_5_3_3|120',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_K_5_3_3_15: new BaseField('STOCH_K_5_3_3_15', {
    label: 'Stoch K 5 3 3|15',
    fieldName: 'Stoch.K_5_3_3|15',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_K_5_3_3_1M: new BaseField('STOCH_K_5_3_3_1M', {
    label: 'Stoch K 5 3 3|1M',
    fieldName: 'Stoch.K_5_3_3|1M',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_K_5_3_3_1W: new BaseField('STOCH_K_5_3_3_1W', {
    label: 'Stoch K 5 3 3|1W',
    fieldName: 'Stoch.K_5_3_3|1W',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_K_5_3_3_240: new BaseField('STOCH_K_5_3_3_240', {
    label: 'Stoch K 5 3 3|240',
    fieldName: 'Stoch.K_5_3_3|240',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_K_5_3_3_30: new BaseField('STOCH_K_5_3_3_30', {
    label: 'Stoch K 5 3 3|30',
    fieldName: 'Stoch.K_5_3_3|30',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_K_5_3_3_5: new BaseField('STOCH_K_5_3_3_5', {
    label: 'Stoch K 5 3 3|5',
    fieldName: 'Stoch.K_5_3_3|5',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_K_5_3_3_60: new BaseField('STOCH_K_5_3_3_60', {
    label: 'Stoch K 5 3 3|60',
    fieldName: 'Stoch.K_5_3_3|60',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_K_6_3_3: new BaseField('STOCH_K_6_3_3', {
    label: 'Stoch K 6 3 3',
    fieldName: 'Stoch.K_6_3_3',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_K_6_3_3_1: new BaseField('STOCH_K_6_3_3_1', {
    label: 'Stoch K 6 3 3[1]',
    fieldName: 'Stoch.K_6_3_3[1]',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_K_6_3_3_1_1: new BaseField('STOCH_K_6_3_3_1_1', {
    label: 'Stoch K 6 3 3[1]|1',
    fieldName: 'Stoch.K_6_3_3[1]|1',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_K_6_3_3_1_120: new BaseField('STOCH_K_6_3_3_1_120', {
    label: 'Stoch K 6 3 3[1]|120',
    fieldName: 'Stoch.K_6_3_3[1]|120',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_K_6_3_3_1_15: new BaseField('STOCH_K_6_3_3_1_15', {
    label: 'Stoch K 6 3 3[1]|15',
    fieldName: 'Stoch.K_6_3_3[1]|15',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_K_6_3_3_1_1M: new BaseField('STOCH_K_6_3_3_1_1M', {
    label: 'Stoch K 6 3 3[1]|1M',
    fieldName: 'Stoch.K_6_3_3[1]|1M',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_K_6_3_3_1_1W: new BaseField('STOCH_K_6_3_3_1_1W', {
    label: 'Stoch K 6 3 3[1]|1W',
    fieldName: 'Stoch.K_6_3_3[1]|1W',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_K_6_3_3_1_240: new BaseField('STOCH_K_6_3_3_1_240', {
    label: 'Stoch K 6 3 3[1]|240',
    fieldName: 'Stoch.K_6_3_3[1]|240',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_K_6_3_3_1_30: new BaseField('STOCH_K_6_3_3_1_30', {
    label: 'Stoch K 6 3 3[1]|30',
    fieldName: 'Stoch.K_6_3_3[1]|30',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_K_6_3_3_1_5: new BaseField('STOCH_K_6_3_3_1_5', {
    label: 'Stoch K 6 3 3[1]|5',
    fieldName: 'Stoch.K_6_3_3[1]|5',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_K_6_3_3_1_60: new BaseField('STOCH_K_6_3_3_1_60', {
    label: 'Stoch K 6 3 3[1]|60',
    fieldName: 'Stoch.K_6_3_3[1]|60',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_K_6_3_3_1_2: new BaseField('STOCH_K_6_3_3_1_2', {
    label: 'Stoch K 6 3 3|1',
    fieldName: 'Stoch.K_6_3_3|1',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_K_6_3_3_120: new BaseField('STOCH_K_6_3_3_120', {
    label: 'Stoch K 6 3 3|120',
    fieldName: 'Stoch.K_6_3_3|120',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_K_6_3_3_15: new BaseField('STOCH_K_6_3_3_15', {
    label: 'Stoch K 6 3 3|15',
    fieldName: 'Stoch.K_6_3_3|15',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_K_6_3_3_1M: new BaseField('STOCH_K_6_3_3_1M', {
    label: 'Stoch K 6 3 3|1M',
    fieldName: 'Stoch.K_6_3_3|1M',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_K_6_3_3_1W: new BaseField('STOCH_K_6_3_3_1W', {
    label: 'Stoch K 6 3 3|1W',
    fieldName: 'Stoch.K_6_3_3|1W',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_K_6_3_3_240: new BaseField('STOCH_K_6_3_3_240', {
    label: 'Stoch K 6 3 3|240',
    fieldName: 'Stoch.K_6_3_3|240',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_K_6_3_3_30: new BaseField('STOCH_K_6_3_3_30', {
    label: 'Stoch K 6 3 3|30',
    fieldName: 'Stoch.K_6_3_3|30',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_K_6_3_3_5: new BaseField('STOCH_K_6_3_3_5', {
    label: 'Stoch K 6 3 3|5',
    fieldName: 'Stoch.K_6_3_3|5',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_K_6_3_3_60: new BaseField('STOCH_K_6_3_3_60', {
    label: 'Stoch K 6 3 3|60',
    fieldName: 'Stoch.K_6_3_3|60',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_K_8_3_3: new BaseField('STOCH_K_8_3_3', {
    label: 'Stoch K 8 3 3',
    fieldName: 'Stoch.K_8_3_3',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_K_8_3_3_1: new BaseField('STOCH_K_8_3_3_1', {
    label: 'Stoch K 8 3 3[1]',
    fieldName: 'Stoch.K_8_3_3[1]',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_K_8_3_3_1_1: new BaseField('STOCH_K_8_3_3_1_1', {
    label: 'Stoch K 8 3 3[1]|1',
    fieldName: 'Stoch.K_8_3_3[1]|1',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_K_8_3_3_1_120: new BaseField('STOCH_K_8_3_3_1_120', {
    label: 'Stoch K 8 3 3[1]|120',
    fieldName: 'Stoch.K_8_3_3[1]|120',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_K_8_3_3_1_15: new BaseField('STOCH_K_8_3_3_1_15', {
    label: 'Stoch K 8 3 3[1]|15',
    fieldName: 'Stoch.K_8_3_3[1]|15',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_K_8_3_3_1_1M: new BaseField('STOCH_K_8_3_3_1_1M', {
    label: 'Stoch K 8 3 3[1]|1M',
    fieldName: 'Stoch.K_8_3_3[1]|1M',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_K_8_3_3_1_1W: new BaseField('STOCH_K_8_3_3_1_1W', {
    label: 'Stoch K 8 3 3[1]|1W',
    fieldName: 'Stoch.K_8_3_3[1]|1W',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_K_8_3_3_1_240: new BaseField('STOCH_K_8_3_3_1_240', {
    label: 'Stoch K 8 3 3[1]|240',
    fieldName: 'Stoch.K_8_3_3[1]|240',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_K_8_3_3_1_30: new BaseField('STOCH_K_8_3_3_1_30', {
    label: 'Stoch K 8 3 3[1]|30',
    fieldName: 'Stoch.K_8_3_3[1]|30',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_K_8_3_3_1_5: new BaseField('STOCH_K_8_3_3_1_5', {
    label: 'Stoch K 8 3 3[1]|5',
    fieldName: 'Stoch.K_8_3_3[1]|5',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_K_8_3_3_1_60: new BaseField('STOCH_K_8_3_3_1_60', {
    label: 'Stoch K 8 3 3[1]|60',
    fieldName: 'Stoch.K_8_3_3[1]|60',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_K_8_3_3_1_2: new BaseField('STOCH_K_8_3_3_1_2', {
    label: 'Stoch K 8 3 3|1',
    fieldName: 'Stoch.K_8_3_3|1',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_K_8_3_3_120: new BaseField('STOCH_K_8_3_3_120', {
    label: 'Stoch K 8 3 3|120',
    fieldName: 'Stoch.K_8_3_3|120',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_K_8_3_3_15: new BaseField('STOCH_K_8_3_3_15', {
    label: 'Stoch K 8 3 3|15',
    fieldName: 'Stoch.K_8_3_3|15',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_K_8_3_3_1M: new BaseField('STOCH_K_8_3_3_1M', {
    label: 'Stoch K 8 3 3|1M',
    fieldName: 'Stoch.K_8_3_3|1M',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_K_8_3_3_1W: new BaseField('STOCH_K_8_3_3_1W', {
    label: 'Stoch K 8 3 3|1W',
    fieldName: 'Stoch.K_8_3_3|1W',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_K_8_3_3_240: new BaseField('STOCH_K_8_3_3_240', {
    label: 'Stoch K 8 3 3|240',
    fieldName: 'Stoch.K_8_3_3|240',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_K_8_3_3_30: new BaseField('STOCH_K_8_3_3_30', {
    label: 'Stoch K 8 3 3|30',
    fieldName: 'Stoch.K_8_3_3|30',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_K_8_3_3_5: new BaseField('STOCH_K_8_3_3_5', {
    label: 'Stoch K 8 3 3|5',
    fieldName: 'Stoch.K_8_3_3|5',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_K_8_3_3_60: new BaseField('STOCH_K_8_3_3_60', {
    label: 'Stoch K 8 3 3|60',
    fieldName: 'Stoch.K_8_3_3|60',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_K_1_2: new BaseField('STOCH_K_1_2', {
    label: 'Stoch K|1',
    fieldName: 'Stoch.K|1',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_K_120: new BaseField('STOCH_K_120', {
    label: 'Stoch K|120',
    fieldName: 'Stoch.K|120',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_K_15: new BaseField('STOCH_K_15', {
    label: 'Stoch K|15',
    fieldName: 'Stoch.K|15',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_K_1M: new BaseField('STOCH_K_1M', {
    label: 'Stoch K|1M',
    fieldName: 'Stoch.K|1M',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_K_1W: new BaseField('STOCH_K_1W', {
    label: 'Stoch K|1W',
    fieldName: 'Stoch.K|1W',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_K_240: new BaseField('STOCH_K_240', {
    label: 'Stoch K|240',
    fieldName: 'Stoch.K|240',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_K_30: new BaseField('STOCH_K_30', {
    label: 'Stoch K|30',
    fieldName: 'Stoch.K|30',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_K_5: new BaseField('STOCH_K_5', {
    label: 'Stoch K|5',
    fieldName: 'Stoch.K|5',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_K_60: new BaseField('STOCH_K_60', {
    label: 'Stoch K|60',
    fieldName: 'Stoch.K|60',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCHASTIC_RSI_SLOW_3_3_14_14: new BaseField('STOCHASTIC_RSI_SLOW_3_3_14_14', {
    label: 'Stochastic RSI Slow (3, 3, 14, 14)',
    fieldName: 'Stoch.RSI.D',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_RSI_D_1: new BaseField('STOCH_RSI_D_1', {
    label: 'Stoch RSI D|1',
    fieldName: 'Stoch.RSI.D|1',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_RSI_D_120: new BaseField('STOCH_RSI_D_120', {
    label: 'Stoch RSI D|120',
    fieldName: 'Stoch.RSI.D|120',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_RSI_D_15: new BaseField('STOCH_RSI_D_15', {
    label: 'Stoch RSI D|15',
    fieldName: 'Stoch.RSI.D|15',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_RSI_D_1M: new BaseField('STOCH_RSI_D_1M', {
    label: 'Stoch RSI D|1M',
    fieldName: 'Stoch.RSI.D|1M',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_RSI_D_1W: new BaseField('STOCH_RSI_D_1W', {
    label: 'Stoch RSI D|1W',
    fieldName: 'Stoch.RSI.D|1W',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_RSI_D_240: new BaseField('STOCH_RSI_D_240', {
    label: 'Stoch RSI D|240',
    fieldName: 'Stoch.RSI.D|240',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_RSI_D_30: new BaseField('STOCH_RSI_D_30', {
    label: 'Stoch RSI D|30',
    fieldName: 'Stoch.RSI.D|30',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_RSI_D_5: new BaseField('STOCH_RSI_D_5', {
    label: 'Stoch RSI D|5',
    fieldName: 'Stoch.RSI.D|5',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_RSI_D_60: new BaseField('STOCH_RSI_D_60', {
    label: 'Stoch RSI D|60',
    fieldName: 'Stoch.RSI.D|60',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCHASTIC_RSI_FAST_3_3_14_14: new BaseField('STOCHASTIC_RSI_FAST_3_3_14_14', {
    label: 'Stochastic RSI Fast (3, 3, 14, 14)',
    fieldName: 'Stoch.RSI.K',
    format: 'computed_recommendation',
    interval: true,
    historical: false,
  }),

  STOCH_RSI_K_1: new BaseField('STOCH_RSI_K_1', {
    label: 'Stoch RSI K|1',
    fieldName: 'Stoch.RSI.K|1',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_RSI_K_120: new BaseField('STOCH_RSI_K_120', {
    label: 'Stoch RSI K|120',
    fieldName: 'Stoch.RSI.K|120',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_RSI_K_15: new BaseField('STOCH_RSI_K_15', {
    label: 'Stoch RSI K|15',
    fieldName: 'Stoch.RSI.K|15',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_RSI_K_1M: new BaseField('STOCH_RSI_K_1M', {
    label: 'Stoch RSI K|1M',
    fieldName: 'Stoch.RSI.K|1M',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_RSI_K_1W: new BaseField('STOCH_RSI_K_1W', {
    label: 'Stoch RSI K|1W',
    fieldName: 'Stoch.RSI.K|1W',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_RSI_K_240: new BaseField('STOCH_RSI_K_240', {
    label: 'Stoch RSI K|240',
    fieldName: 'Stoch.RSI.K|240',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_RSI_K_30: new BaseField('STOCH_RSI_K_30', {
    label: 'Stoch RSI K|30',
    fieldName: 'Stoch.RSI.K|30',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_RSI_K_5: new BaseField('STOCH_RSI_K_5', {
    label: 'Stoch RSI K|5',
    fieldName: 'Stoch.RSI.K|5',
    format: 'float',
    interval: true,
    historical: true,
  }),

  STOCH_RSI_K_60: new BaseField('STOCH_RSI_K_60', {
    label: 'Stoch RSI K|60',
    fieldName: 'Stoch.RSI.K|60',
    format: 'float',
    interval: true,
    historical: true,
  }),

  // === Volatility (113 fields) ===

  AVERAGE_TRUE_RANGE_14: new BaseField('AVERAGE_TRUE_RANGE_14', {
    label: 'Average True Range (14)',
    fieldName: 'ATR',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ATRP: new BaseField('ATRP', {
    label: 'Atrp',
    fieldName: 'ATRP',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ATRP_1: new BaseField('ATRP_1', {
    label: 'Atrp|1',
    fieldName: 'ATRP|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ATRP_120: new BaseField('ATRP_120', {
    label: 'Atrp|120',
    fieldName: 'ATRP|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ATRP_15: new BaseField('ATRP_15', {
    label: 'Atrp|15',
    fieldName: 'ATRP|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ATRP_1M: new BaseField('ATRP_1M', {
    label: 'Atrp|1M',
    fieldName: 'ATRP|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ATRP_1W: new BaseField('ATRP_1W', {
    label: 'Atrp|1W',
    fieldName: 'ATRP|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ATRP_240: new BaseField('ATRP_240', {
    label: 'Atrp|240',
    fieldName: 'ATRP|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ATRP_30: new BaseField('ATRP_30', {
    label: 'Atrp|30',
    fieldName: 'ATRP|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ATRP_5: new BaseField('ATRP_5', {
    label: 'Atrp|5',
    fieldName: 'ATRP|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ATRP_60: new BaseField('ATRP_60', {
    label: 'Atrp|60',
    fieldName: 'ATRP|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ATR_1: new BaseField('ATR_1', {
    label: 'ATR|1',
    fieldName: 'ATR|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ATR_120: new BaseField('ATR_120', {
    label: 'ATR|120',
    fieldName: 'ATR|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ATR_15: new BaseField('ATR_15', {
    label: 'ATR|15',
    fieldName: 'ATR|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ATR_1M: new BaseField('ATR_1M', {
    label: 'ATR|1M',
    fieldName: 'ATR|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ATR_1W: new BaseField('ATR_1W', {
    label: 'ATR|1W',
    fieldName: 'ATR|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ATR_240: new BaseField('ATR_240', {
    label: 'ATR|240',
    fieldName: 'ATR|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ATR_30: new BaseField('ATR_30', {
    label: 'ATR|30',
    fieldName: 'ATR|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ATR_5: new BaseField('ATR_5', {
    label: 'ATR|5',
    fieldName: 'ATR|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ATR_60: new BaseField('ATR_60', {
    label: 'ATR|60',
    fieldName: 'ATR|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  BB_BASIS: new BaseField('BB_BASIS', {
    label: 'Bb Basis',
    fieldName: 'BB.basis',
    format: 'float',
    interval: true,
    historical: false,
  }),

  BB_BASIS_50: new BaseField('BB_BASIS_50', {
    label: 'Bb Basis 50',
    fieldName: 'BB.basis_50',
    format: 'float',
    interval: true,
    historical: false,
  }),

  BB_BASIS_50_1: new BaseField('BB_BASIS_50_1', {
    label: 'Bb Basis 50|1',
    fieldName: 'BB.basis_50|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  BB_BASIS_50_120: new BaseField('BB_BASIS_50_120', {
    label: 'Bb Basis 50|120',
    fieldName: 'BB.basis_50|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  BB_BASIS_50_15: new BaseField('BB_BASIS_50_15', {
    label: 'Bb Basis 50|15',
    fieldName: 'BB.basis_50|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  BB_BASIS_50_1M: new BaseField('BB_BASIS_50_1M', {
    label: 'Bb Basis 50|1M',
    fieldName: 'BB.basis_50|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  BB_BASIS_50_1W: new BaseField('BB_BASIS_50_1W', {
    label: 'Bb Basis 50|1W',
    fieldName: 'BB.basis_50|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  BB_BASIS_50_240: new BaseField('BB_BASIS_50_240', {
    label: 'Bb Basis 50|240',
    fieldName: 'BB.basis_50|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  BB_BASIS_50_30: new BaseField('BB_BASIS_50_30', {
    label: 'Bb Basis 50|30',
    fieldName: 'BB.basis_50|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  BB_BASIS_50_5: new BaseField('BB_BASIS_50_5', {
    label: 'Bb Basis 50|5',
    fieldName: 'BB.basis_50|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  BB_BASIS_50_60: new BaseField('BB_BASIS_50_60', {
    label: 'Bb Basis 50|60',
    fieldName: 'BB.basis_50|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  BB_BASIS_1: new BaseField('BB_BASIS_1', {
    label: 'Bb Basis|1',
    fieldName: 'BB.basis|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  BB_BASIS_120: new BaseField('BB_BASIS_120', {
    label: 'Bb Basis|120',
    fieldName: 'BB.basis|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  BB_BASIS_15: new BaseField('BB_BASIS_15', {
    label: 'Bb Basis|15',
    fieldName: 'BB.basis|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  BB_BASIS_1M: new BaseField('BB_BASIS_1M', {
    label: 'Bb Basis|1M',
    fieldName: 'BB.basis|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  BB_BASIS_1W: new BaseField('BB_BASIS_1W', {
    label: 'Bb Basis|1W',
    fieldName: 'BB.basis|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  BB_BASIS_240: new BaseField('BB_BASIS_240', {
    label: 'Bb Basis|240',
    fieldName: 'BB.basis|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  BB_BASIS_30: new BaseField('BB_BASIS_30', {
    label: 'Bb Basis|30',
    fieldName: 'BB.basis|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  BB_BASIS_5: new BaseField('BB_BASIS_5', {
    label: 'Bb Basis|5',
    fieldName: 'BB.basis|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  BB_BASIS_60: new BaseField('BB_BASIS_60', {
    label: 'Bb Basis|60',
    fieldName: 'BB.basis|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  BOLLINGER_LOWER_BAND_20: new BaseField('BOLLINGER_LOWER_BAND_20', {
    label: 'Bollinger Lower Band (20)',
    fieldName: 'BB.lower',
    format: 'computed_recommendation',
    interval: true,
    historical: false,
  }),

  BB_LOWER_50: new BaseField('BB_LOWER_50', {
    label: 'Bb Lower 50',
    fieldName: 'BB.lower_50',
    format: 'float',
    interval: true,
    historical: false,
  }),

  BB_LOWER_50_1: new BaseField('BB_LOWER_50_1', {
    label: 'Bb Lower 50|1',
    fieldName: 'BB.lower_50|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  BB_LOWER_50_120: new BaseField('BB_LOWER_50_120', {
    label: 'Bb Lower 50|120',
    fieldName: 'BB.lower_50|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  BB_LOWER_50_15: new BaseField('BB_LOWER_50_15', {
    label: 'Bb Lower 50|15',
    fieldName: 'BB.lower_50|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  BB_LOWER_50_1M: new BaseField('BB_LOWER_50_1M', {
    label: 'Bb Lower 50|1M',
    fieldName: 'BB.lower_50|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  BB_LOWER_50_1W: new BaseField('BB_LOWER_50_1W', {
    label: 'Bb Lower 50|1W',
    fieldName: 'BB.lower_50|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  BB_LOWER_50_240: new BaseField('BB_LOWER_50_240', {
    label: 'Bb Lower 50|240',
    fieldName: 'BB.lower_50|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  BB_LOWER_50_30: new BaseField('BB_LOWER_50_30', {
    label: 'Bb Lower 50|30',
    fieldName: 'BB.lower_50|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  BB_LOWER_50_5: new BaseField('BB_LOWER_50_5', {
    label: 'Bb Lower 50|5',
    fieldName: 'BB.lower_50|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  BB_LOWER_50_60: new BaseField('BB_LOWER_50_60', {
    label: 'Bb Lower 50|60',
    fieldName: 'BB.lower_50|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  BB_LOWER_1: new BaseField('BB_LOWER_1', {
    label: 'Bb Lower|1',
    fieldName: 'BB.lower|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  BB_LOWER_120: new BaseField('BB_LOWER_120', {
    label: 'Bb Lower|120',
    fieldName: 'BB.lower|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  BB_LOWER_15: new BaseField('BB_LOWER_15', {
    label: 'Bb Lower|15',
    fieldName: 'BB.lower|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  BB_LOWER_1M: new BaseField('BB_LOWER_1M', {
    label: 'Bb Lower|1M',
    fieldName: 'BB.lower|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  BB_LOWER_1W: new BaseField('BB_LOWER_1W', {
    label: 'Bb Lower|1W',
    fieldName: 'BB.lower|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  BB_LOWER_240: new BaseField('BB_LOWER_240', {
    label: 'Bb Lower|240',
    fieldName: 'BB.lower|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  BB_LOWER_30: new BaseField('BB_LOWER_30', {
    label: 'Bb Lower|30',
    fieldName: 'BB.lower|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  BB_LOWER_5: new BaseField('BB_LOWER_5', {
    label: 'Bb Lower|5',
    fieldName: 'BB.lower|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  BB_LOWER_60: new BaseField('BB_LOWER_60', {
    label: 'Bb Lower|60',
    fieldName: 'BB.lower|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  BOLLINGER_UPPER_BAND_20: new BaseField('BOLLINGER_UPPER_BAND_20', {
    label: 'Bollinger Upper Band (20)',
    fieldName: 'BB.upper',
    format: 'computed_recommendation',
    interval: true,
    historical: false,
  }),

  BB_UPPER_50: new BaseField('BB_UPPER_50', {
    label: 'Bb Upper 50',
    fieldName: 'BB.upper_50',
    format: 'float',
    interval: true,
    historical: false,
  }),

  BB_UPPER_50_1: new BaseField('BB_UPPER_50_1', {
    label: 'Bb Upper 50|1',
    fieldName: 'BB.upper_50|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  BB_UPPER_50_120: new BaseField('BB_UPPER_50_120', {
    label: 'Bb Upper 50|120',
    fieldName: 'BB.upper_50|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  BB_UPPER_50_15: new BaseField('BB_UPPER_50_15', {
    label: 'Bb Upper 50|15',
    fieldName: 'BB.upper_50|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  BB_UPPER_50_1M: new BaseField('BB_UPPER_50_1M', {
    label: 'Bb Upper 50|1M',
    fieldName: 'BB.upper_50|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  BB_UPPER_50_1W: new BaseField('BB_UPPER_50_1W', {
    label: 'Bb Upper 50|1W',
    fieldName: 'BB.upper_50|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  BB_UPPER_50_240: new BaseField('BB_UPPER_50_240', {
    label: 'Bb Upper 50|240',
    fieldName: 'BB.upper_50|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  BB_UPPER_50_30: new BaseField('BB_UPPER_50_30', {
    label: 'Bb Upper 50|30',
    fieldName: 'BB.upper_50|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  BB_UPPER_50_5: new BaseField('BB_UPPER_50_5', {
    label: 'Bb Upper 50|5',
    fieldName: 'BB.upper_50|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  BB_UPPER_50_60: new BaseField('BB_UPPER_50_60', {
    label: 'Bb Upper 50|60',
    fieldName: 'BB.upper_50|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  BB_UPPER_1: new BaseField('BB_UPPER_1', {
    label: 'Bb Upper|1',
    fieldName: 'BB.upper|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  BB_UPPER_120: new BaseField('BB_UPPER_120', {
    label: 'Bb Upper|120',
    fieldName: 'BB.upper|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  BB_UPPER_15: new BaseField('BB_UPPER_15', {
    label: 'Bb Upper|15',
    fieldName: 'BB.upper|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  BB_UPPER_1M: new BaseField('BB_UPPER_1M', {
    label: 'Bb Upper|1M',
    fieldName: 'BB.upper|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  BB_UPPER_1W: new BaseField('BB_UPPER_1W', {
    label: 'Bb Upper|1W',
    fieldName: 'BB.upper|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  BB_UPPER_240: new BaseField('BB_UPPER_240', {
    label: 'Bb Upper|240',
    fieldName: 'BB.upper|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  BB_UPPER_30: new BaseField('BB_UPPER_30', {
    label: 'Bb Upper|30',
    fieldName: 'BB.upper|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  BB_UPPER_5: new BaseField('BB_UPPER_5', {
    label: 'Bb Upper|5',
    fieldName: 'BB.upper|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  BB_UPPER_60: new BaseField('BB_UPPER_60', {
    label: 'Bb Upper|60',
    fieldName: 'BB.upper|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  BULL_BEAR_POWER: new BaseField('BULL_BEAR_POWER', {
    label: 'Bull Bear Power',
    fieldName: 'BBPower',
    format: 'recommendation',
    interval: true,
    historical: false,
  }),

  BBPOWER_1: new BaseField('BBPOWER_1', {
    label: 'Bbpower|1',
    fieldName: 'BBPower|1',
    format: 'float',
    interval: false,
    historical: false,
  }),

  BBPOWER_120: new BaseField('BBPOWER_120', {
    label: 'Bbpower|120',
    fieldName: 'BBPower|120',
    format: 'float',
    interval: false,
    historical: false,
  }),

  BBPOWER_15: new BaseField('BBPOWER_15', {
    label: 'Bbpower|15',
    fieldName: 'BBPower|15',
    format: 'float',
    interval: false,
    historical: false,
  }),

  BBPOWER_1M: new BaseField('BBPOWER_1M', {
    label: 'Bbpower|1M',
    fieldName: 'BBPower|1M',
    format: 'float',
    interval: false,
    historical: false,
  }),

  BBPOWER_1W: new BaseField('BBPOWER_1W', {
    label: 'Bbpower|1W',
    fieldName: 'BBPower|1W',
    format: 'float',
    interval: false,
    historical: false,
  }),

  BBPOWER_240: new BaseField('BBPOWER_240', {
    label: 'Bbpower|240',
    fieldName: 'BBPower|240',
    format: 'float',
    interval: false,
    historical: false,
  }),

  BBPOWER_30: new BaseField('BBPOWER_30', {
    label: 'Bbpower|30',
    fieldName: 'BBPower|30',
    format: 'float',
    interval: false,
    historical: false,
  }),

  BBPOWER_5: new BaseField('BBPOWER_5', {
    label: 'Bbpower|5',
    fieldName: 'BBPower|5',
    format: 'float',
    interval: false,
    historical: false,
  }),

  BBPOWER_60: new BaseField('BBPOWER_60', {
    label: 'Bbpower|60',
    fieldName: 'BBPower|60',
    format: 'float',
    interval: false,
    historical: false,
  }),

  CANDLE_3BLACKCROWS: new BaseField('CANDLE_3BLACKCROWS', {
    label: 'Candle.3BlackCrows',
    fieldName: 'Candle.3BlackCrows',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_3BLACKCROWS_1: new BaseField('CANDLE_3BLACKCROWS_1', {
    label: 'Candle 3Blackcrows|1',
    fieldName: 'Candle.3BlackCrows|1',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_3BLACKCROWS_120: new BaseField('CANDLE_3BLACKCROWS_120', {
    label: 'Candle 3Blackcrows|120',
    fieldName: 'Candle.3BlackCrows|120',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_3BLACKCROWS_15: new BaseField('CANDLE_3BLACKCROWS_15', {
    label: 'Candle 3Blackcrows|15',
    fieldName: 'Candle.3BlackCrows|15',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_3BLACKCROWS_1M: new BaseField('CANDLE_3BLACKCROWS_1M', {
    label: 'Candle 3Blackcrows|1M',
    fieldName: 'Candle.3BlackCrows|1M',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_3BLACKCROWS_1W: new BaseField('CANDLE_3BLACKCROWS_1W', {
    label: 'Candle 3Blackcrows|1W',
    fieldName: 'Candle.3BlackCrows|1W',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_3BLACKCROWS_240: new BaseField('CANDLE_3BLACKCROWS_240', {
    label: 'Candle 3Blackcrows|240',
    fieldName: 'Candle.3BlackCrows|240',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_3BLACKCROWS_30: new BaseField('CANDLE_3BLACKCROWS_30', {
    label: 'Candle 3Blackcrows|30',
    fieldName: 'Candle.3BlackCrows|30',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_3BLACKCROWS_5: new BaseField('CANDLE_3BLACKCROWS_5', {
    label: 'Candle 3Blackcrows|5',
    fieldName: 'Candle.3BlackCrows|5',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_3BLACKCROWS_60: new BaseField('CANDLE_3BLACKCROWS_60', {
    label: 'Candle 3Blackcrows|60',
    fieldName: 'Candle.3BlackCrows|60',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  REC_BBPOWER: new BaseField('REC_BBPOWER', {
    label: 'Rec Bbpower',
    fieldName: 'Rec.BBPower',
    format: 'rating',
    interval: false,
    historical: false,
  }),

  REC_BBPOWER_1: new BaseField('REC_BBPOWER_1', {
    label: 'Rec Bbpower|1',
    fieldName: 'Rec.BBPower|1',
    format: 'rating',
    interval: false,
    historical: false,
  }),

  REC_BBPOWER_120: new BaseField('REC_BBPOWER_120', {
    label: 'Rec Bbpower|120',
    fieldName: 'Rec.BBPower|120',
    format: 'rating',
    interval: false,
    historical: false,
  }),

  REC_BBPOWER_15: new BaseField('REC_BBPOWER_15', {
    label: 'Rec Bbpower|15',
    fieldName: 'Rec.BBPower|15',
    format: 'rating',
    interval: false,
    historical: false,
  }),

  REC_BBPOWER_1M: new BaseField('REC_BBPOWER_1M', {
    label: 'Rec Bbpower|1M',
    fieldName: 'Rec.BBPower|1M',
    format: 'rating',
    interval: false,
    historical: false,
  }),

  REC_BBPOWER_1W: new BaseField('REC_BBPOWER_1W', {
    label: 'Rec Bbpower|1W',
    fieldName: 'Rec.BBPower|1W',
    format: 'rating',
    interval: false,
    historical: false,
  }),

  REC_BBPOWER_240: new BaseField('REC_BBPOWER_240', {
    label: 'Rec Bbpower|240',
    fieldName: 'Rec.BBPower|240',
    format: 'rating',
    interval: false,
    historical: false,
  }),

  REC_BBPOWER_30: new BaseField('REC_BBPOWER_30', {
    label: 'Rec Bbpower|30',
    fieldName: 'Rec.BBPower|30',
    format: 'rating',
    interval: false,
    historical: false,
  }),

  REC_BBPOWER_5: new BaseField('REC_BBPOWER_5', {
    label: 'Rec Bbpower|5',
    fieldName: 'Rec.BBPower|5',
    format: 'rating',
    interval: false,
    historical: false,
  }),

  REC_BBPOWER_60: new BaseField('REC_BBPOWER_60', {
    label: 'Rec Bbpower|60',
    fieldName: 'Rec.BBPower|60',
    format: 'rating',
    interval: false,
    historical: false,
  }),

  VOLATILITY: new BaseField('VOLATILITY', {
    label: 'Volatility',
    fieldName: 'Volatility.D',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  VOLATILITY_MONTH: new BaseField('VOLATILITY_MONTH', {
    label: 'Volatility Month',
    fieldName: 'Volatility.M',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  VOLATILITY_WEEK: new BaseField('VOLATILITY_WEEK', {
    label: 'Volatility Week',
    fieldName: 'Volatility.W',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  // === Momentum (290 fields) ===

  AVERAGE_DIRECTIONAL_INDEX_14: new BaseField('AVERAGE_DIRECTIONAL_INDEX_14', {
    label: 'Average Directional Index (14)',
    fieldName: 'ADX',
    format: 'computed_recommendation',
    interval: true,
    historical: false,
  }),

  POSITIVE_DIRECTIONAL_INDICATOR_14: new BaseField('POSITIVE_DIRECTIONAL_INDICATOR_14', {
    label: 'Positive Directional Indicator (14)',
    fieldName: 'ADX+DI',
    format: 'round',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_1: new BaseField('ADX_PLUS_DI_1', {
    label: 'ADX+Di[1]',
    fieldName: 'ADX+DI[1]',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_1_1: new BaseField('ADX_PLUS_DI_1_1', {
    label: 'ADX+Di[1]|1',
    fieldName: 'ADX+DI[1]|1',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_1_120: new BaseField('ADX_PLUS_DI_1_120', {
    label: 'ADX+Di[1]|120',
    fieldName: 'ADX+DI[1]|120',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_1_15: new BaseField('ADX_PLUS_DI_1_15', {
    label: 'ADX+Di[1]|15',
    fieldName: 'ADX+DI[1]|15',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_1_1M: new BaseField('ADX_PLUS_DI_1_1M', {
    label: 'ADX+Di[1]|1M',
    fieldName: 'ADX+DI[1]|1M',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_1_1W: new BaseField('ADX_PLUS_DI_1_1W', {
    label: 'ADX+Di[1]|1W',
    fieldName: 'ADX+DI[1]|1W',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_1_240: new BaseField('ADX_PLUS_DI_1_240', {
    label: 'ADX+Di[1]|240',
    fieldName: 'ADX+DI[1]|240',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_1_30: new BaseField('ADX_PLUS_DI_1_30', {
    label: 'ADX+Di[1]|30',
    fieldName: 'ADX+DI[1]|30',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_1_5: new BaseField('ADX_PLUS_DI_1_5', {
    label: 'ADX+Di[1]|5',
    fieldName: 'ADX+DI[1]|5',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_1_60: new BaseField('ADX_PLUS_DI_1_60', {
    label: 'ADX+Di[1]|60',
    fieldName: 'ADX+DI[1]|60',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_100: new BaseField('ADX_PLUS_DI_100', {
    label: 'ADX+Di 100',
    fieldName: 'ADX+DI_100',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_100_1: new BaseField('ADX_PLUS_DI_100_1', {
    label: 'ADX+Di 100[1]',
    fieldName: 'ADX+DI_100[1]',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_100_1_1: new BaseField('ADX_PLUS_DI_100_1_1', {
    label: 'ADX+Di 100[1]|1',
    fieldName: 'ADX+DI_100[1]|1',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_100_1_120: new BaseField('ADX_PLUS_DI_100_1_120', {
    label: 'ADX+Di 100[1]|120',
    fieldName: 'ADX+DI_100[1]|120',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_100_1_15: new BaseField('ADX_PLUS_DI_100_1_15', {
    label: 'ADX+Di 100[1]|15',
    fieldName: 'ADX+DI_100[1]|15',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_100_1_1M: new BaseField('ADX_PLUS_DI_100_1_1M', {
    label: 'ADX+Di 100[1]|1M',
    fieldName: 'ADX+DI_100[1]|1M',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_100_1_1W: new BaseField('ADX_PLUS_DI_100_1_1W', {
    label: 'ADX+Di 100[1]|1W',
    fieldName: 'ADX+DI_100[1]|1W',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_100_1_240: new BaseField('ADX_PLUS_DI_100_1_240', {
    label: 'ADX+Di 100[1]|240',
    fieldName: 'ADX+DI_100[1]|240',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_100_1_30: new BaseField('ADX_PLUS_DI_100_1_30', {
    label: 'ADX+Di 100[1]|30',
    fieldName: 'ADX+DI_100[1]|30',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_100_1_5: new BaseField('ADX_PLUS_DI_100_1_5', {
    label: 'ADX+Di 100[1]|5',
    fieldName: 'ADX+DI_100[1]|5',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_100_1_60: new BaseField('ADX_PLUS_DI_100_1_60', {
    label: 'ADX+Di 100[1]|60',
    fieldName: 'ADX+DI_100[1]|60',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_100_1_2: new BaseField('ADX_PLUS_DI_100_1_2', {
    label: 'ADX+Di 100|1',
    fieldName: 'ADX+DI_100|1',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_100_120: new BaseField('ADX_PLUS_DI_100_120', {
    label: 'ADX+Di 100|120',
    fieldName: 'ADX+DI_100|120',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_100_15: new BaseField('ADX_PLUS_DI_100_15', {
    label: 'ADX+Di 100|15',
    fieldName: 'ADX+DI_100|15',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_100_1M: new BaseField('ADX_PLUS_DI_100_1M', {
    label: 'ADX+Di 100|1M',
    fieldName: 'ADX+DI_100|1M',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_100_1W: new BaseField('ADX_PLUS_DI_100_1W', {
    label: 'ADX+Di 100|1W',
    fieldName: 'ADX+DI_100|1W',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_100_240: new BaseField('ADX_PLUS_DI_100_240', {
    label: 'ADX+Di 100|240',
    fieldName: 'ADX+DI_100|240',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_100_30: new BaseField('ADX_PLUS_DI_100_30', {
    label: 'ADX+Di 100|30',
    fieldName: 'ADX+DI_100|30',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_100_5: new BaseField('ADX_PLUS_DI_100_5', {
    label: 'ADX+Di 100|5',
    fieldName: 'ADX+DI_100|5',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_100_60: new BaseField('ADX_PLUS_DI_100_60', {
    label: 'ADX+Di 100|60',
    fieldName: 'ADX+DI_100|60',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_20: new BaseField('ADX_PLUS_DI_20', {
    label: 'ADX+Di 20',
    fieldName: 'ADX+DI_20',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_20_1: new BaseField('ADX_PLUS_DI_20_1', {
    label: 'ADX+Di 20[1]',
    fieldName: 'ADX+DI_20[1]',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_20_1_1: new BaseField('ADX_PLUS_DI_20_1_1', {
    label: 'ADX+Di 20[1]|1',
    fieldName: 'ADX+DI_20[1]|1',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_20_1_120: new BaseField('ADX_PLUS_DI_20_1_120', {
    label: 'ADX+Di 20[1]|120',
    fieldName: 'ADX+DI_20[1]|120',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_20_1_15: new BaseField('ADX_PLUS_DI_20_1_15', {
    label: 'ADX+Di 20[1]|15',
    fieldName: 'ADX+DI_20[1]|15',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_20_1_1M: new BaseField('ADX_PLUS_DI_20_1_1M', {
    label: 'ADX+Di 20[1]|1M',
    fieldName: 'ADX+DI_20[1]|1M',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_20_1_1W: new BaseField('ADX_PLUS_DI_20_1_1W', {
    label: 'ADX+Di 20[1]|1W',
    fieldName: 'ADX+DI_20[1]|1W',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_20_1_240: new BaseField('ADX_PLUS_DI_20_1_240', {
    label: 'ADX+Di 20[1]|240',
    fieldName: 'ADX+DI_20[1]|240',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_20_1_30: new BaseField('ADX_PLUS_DI_20_1_30', {
    label: 'ADX+Di 20[1]|30',
    fieldName: 'ADX+DI_20[1]|30',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_20_1_5: new BaseField('ADX_PLUS_DI_20_1_5', {
    label: 'ADX+Di 20[1]|5',
    fieldName: 'ADX+DI_20[1]|5',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_20_1_60: new BaseField('ADX_PLUS_DI_20_1_60', {
    label: 'ADX+Di 20[1]|60',
    fieldName: 'ADX+DI_20[1]|60',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_20_1_2: new BaseField('ADX_PLUS_DI_20_1_2', {
    label: 'ADX+Di 20|1',
    fieldName: 'ADX+DI_20|1',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_20_120: new BaseField('ADX_PLUS_DI_20_120', {
    label: 'ADX+Di 20|120',
    fieldName: 'ADX+DI_20|120',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_20_15: new BaseField('ADX_PLUS_DI_20_15', {
    label: 'ADX+Di 20|15',
    fieldName: 'ADX+DI_20|15',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_20_1M: new BaseField('ADX_PLUS_DI_20_1M', {
    label: 'ADX+Di 20|1M',
    fieldName: 'ADX+DI_20|1M',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_20_1W: new BaseField('ADX_PLUS_DI_20_1W', {
    label: 'ADX+Di 20|1W',
    fieldName: 'ADX+DI_20|1W',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_20_240: new BaseField('ADX_PLUS_DI_20_240', {
    label: 'ADX+Di 20|240',
    fieldName: 'ADX+DI_20|240',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_20_30: new BaseField('ADX_PLUS_DI_20_30', {
    label: 'ADX+Di 20|30',
    fieldName: 'ADX+DI_20|30',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_20_5: new BaseField('ADX_PLUS_DI_20_5', {
    label: 'ADX+Di 20|5',
    fieldName: 'ADX+DI_20|5',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_20_60: new BaseField('ADX_PLUS_DI_20_60', {
    label: 'ADX+Di 20|60',
    fieldName: 'ADX+DI_20|60',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_50: new BaseField('ADX_PLUS_DI_50', {
    label: 'ADX+Di 50',
    fieldName: 'ADX+DI_50',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_50_1: new BaseField('ADX_PLUS_DI_50_1', {
    label: 'ADX+Di 50[1]',
    fieldName: 'ADX+DI_50[1]',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_50_1_1: new BaseField('ADX_PLUS_DI_50_1_1', {
    label: 'ADX+Di 50[1]|1',
    fieldName: 'ADX+DI_50[1]|1',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_50_1_120: new BaseField('ADX_PLUS_DI_50_1_120', {
    label: 'ADX+Di 50[1]|120',
    fieldName: 'ADX+DI_50[1]|120',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_50_1_15: new BaseField('ADX_PLUS_DI_50_1_15', {
    label: 'ADX+Di 50[1]|15',
    fieldName: 'ADX+DI_50[1]|15',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_50_1_1M: new BaseField('ADX_PLUS_DI_50_1_1M', {
    label: 'ADX+Di 50[1]|1M',
    fieldName: 'ADX+DI_50[1]|1M',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_50_1_1W: new BaseField('ADX_PLUS_DI_50_1_1W', {
    label: 'ADX+Di 50[1]|1W',
    fieldName: 'ADX+DI_50[1]|1W',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_50_1_240: new BaseField('ADX_PLUS_DI_50_1_240', {
    label: 'ADX+Di 50[1]|240',
    fieldName: 'ADX+DI_50[1]|240',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_50_1_30: new BaseField('ADX_PLUS_DI_50_1_30', {
    label: 'ADX+Di 50[1]|30',
    fieldName: 'ADX+DI_50[1]|30',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_50_1_5: new BaseField('ADX_PLUS_DI_50_1_5', {
    label: 'ADX+Di 50[1]|5',
    fieldName: 'ADX+DI_50[1]|5',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_50_1_60: new BaseField('ADX_PLUS_DI_50_1_60', {
    label: 'ADX+Di 50[1]|60',
    fieldName: 'ADX+DI_50[1]|60',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_50_1_2: new BaseField('ADX_PLUS_DI_50_1_2', {
    label: 'ADX+Di 50|1',
    fieldName: 'ADX+DI_50|1',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_50_120: new BaseField('ADX_PLUS_DI_50_120', {
    label: 'ADX+Di 50|120',
    fieldName: 'ADX+DI_50|120',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_50_15: new BaseField('ADX_PLUS_DI_50_15', {
    label: 'ADX+Di 50|15',
    fieldName: 'ADX+DI_50|15',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_50_1M: new BaseField('ADX_PLUS_DI_50_1M', {
    label: 'ADX+Di 50|1M',
    fieldName: 'ADX+DI_50|1M',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_50_1W: new BaseField('ADX_PLUS_DI_50_1W', {
    label: 'ADX+Di 50|1W',
    fieldName: 'ADX+DI_50|1W',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_50_240: new BaseField('ADX_PLUS_DI_50_240', {
    label: 'ADX+Di 50|240',
    fieldName: 'ADX+DI_50|240',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_50_30: new BaseField('ADX_PLUS_DI_50_30', {
    label: 'ADX+Di 50|30',
    fieldName: 'ADX+DI_50|30',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_50_5: new BaseField('ADX_PLUS_DI_50_5', {
    label: 'ADX+Di 50|5',
    fieldName: 'ADX+DI_50|5',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_50_60: new BaseField('ADX_PLUS_DI_50_60', {
    label: 'ADX+Di 50|60',
    fieldName: 'ADX+DI_50|60',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_9: new BaseField('ADX_PLUS_DI_9', {
    label: 'ADX+Di 9',
    fieldName: 'ADX+DI_9',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_9_1: new BaseField('ADX_PLUS_DI_9_1', {
    label: 'ADX+Di 9[1]',
    fieldName: 'ADX+DI_9[1]',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_9_1_1: new BaseField('ADX_PLUS_DI_9_1_1', {
    label: 'ADX+Di 9[1]|1',
    fieldName: 'ADX+DI_9[1]|1',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_9_1_120: new BaseField('ADX_PLUS_DI_9_1_120', {
    label: 'ADX+Di 9[1]|120',
    fieldName: 'ADX+DI_9[1]|120',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_9_1_15: new BaseField('ADX_PLUS_DI_9_1_15', {
    label: 'ADX+Di 9[1]|15',
    fieldName: 'ADX+DI_9[1]|15',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_9_1_1M: new BaseField('ADX_PLUS_DI_9_1_1M', {
    label: 'ADX+Di 9[1]|1M',
    fieldName: 'ADX+DI_9[1]|1M',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_9_1_1W: new BaseField('ADX_PLUS_DI_9_1_1W', {
    label: 'ADX+Di 9[1]|1W',
    fieldName: 'ADX+DI_9[1]|1W',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_9_1_240: new BaseField('ADX_PLUS_DI_9_1_240', {
    label: 'ADX+Di 9[1]|240',
    fieldName: 'ADX+DI_9[1]|240',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_9_1_30: new BaseField('ADX_PLUS_DI_9_1_30', {
    label: 'ADX+Di 9[1]|30',
    fieldName: 'ADX+DI_9[1]|30',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_9_1_5: new BaseField('ADX_PLUS_DI_9_1_5', {
    label: 'ADX+Di 9[1]|5',
    fieldName: 'ADX+DI_9[1]|5',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_9_1_60: new BaseField('ADX_PLUS_DI_9_1_60', {
    label: 'ADX+Di 9[1]|60',
    fieldName: 'ADX+DI_9[1]|60',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_9_1_2: new BaseField('ADX_PLUS_DI_9_1_2', {
    label: 'ADX+Di 9|1',
    fieldName: 'ADX+DI_9|1',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_9_120: new BaseField('ADX_PLUS_DI_9_120', {
    label: 'ADX+Di 9|120',
    fieldName: 'ADX+DI_9|120',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_9_15: new BaseField('ADX_PLUS_DI_9_15', {
    label: 'ADX+Di 9|15',
    fieldName: 'ADX+DI_9|15',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_9_1M: new BaseField('ADX_PLUS_DI_9_1M', {
    label: 'ADX+Di 9|1M',
    fieldName: 'ADX+DI_9|1M',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_9_1W: new BaseField('ADX_PLUS_DI_9_1W', {
    label: 'ADX+Di 9|1W',
    fieldName: 'ADX+DI_9|1W',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_9_240: new BaseField('ADX_PLUS_DI_9_240', {
    label: 'ADX+Di 9|240',
    fieldName: 'ADX+DI_9|240',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_9_30: new BaseField('ADX_PLUS_DI_9_30', {
    label: 'ADX+Di 9|30',
    fieldName: 'ADX+DI_9|30',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_9_5: new BaseField('ADX_PLUS_DI_9_5', {
    label: 'ADX+Di 9|5',
    fieldName: 'ADX+DI_9|5',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_9_60: new BaseField('ADX_PLUS_DI_9_60', {
    label: 'ADX+Di 9|60',
    fieldName: 'ADX+DI_9|60',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_1_2: new BaseField('ADX_PLUS_DI_1_2', {
    label: 'ADX+Di|1',
    fieldName: 'ADX+DI|1',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_120: new BaseField('ADX_PLUS_DI_120', {
    label: 'ADX+Di|120',
    fieldName: 'ADX+DI|120',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_15: new BaseField('ADX_PLUS_DI_15', {
    label: 'ADX+Di|15',
    fieldName: 'ADX+DI|15',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_1M: new BaseField('ADX_PLUS_DI_1M', {
    label: 'ADX+Di|1M',
    fieldName: 'ADX+DI|1M',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_1W: new BaseField('ADX_PLUS_DI_1W', {
    label: 'ADX+Di|1W',
    fieldName: 'ADX+DI|1W',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_240: new BaseField('ADX_PLUS_DI_240', {
    label: 'ADX+Di|240',
    fieldName: 'ADX+DI|240',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_30: new BaseField('ADX_PLUS_DI_30', {
    label: 'ADX+Di|30',
    fieldName: 'ADX+DI|30',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_5: new BaseField('ADX_PLUS_DI_5', {
    label: 'ADX+Di|5',
    fieldName: 'ADX+DI|5',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_PLUS_DI_60: new BaseField('ADX_PLUS_DI_60', {
    label: 'ADX+Di|60',
    fieldName: 'ADX+DI|60',
    format: 'float',
    interval: true,
    historical: true,
  }),

  NEGATIVE_DIRECTIONAL_INDICATOR_14: new BaseField('NEGATIVE_DIRECTIONAL_INDICATOR_14', {
    label: 'Negative Directional Indicator (14)',
    fieldName: 'ADX-DI',
    format: 'round',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_1: new BaseField('ADX_MINUS_DI_1', {
    label: 'ADX-Di[1]',
    fieldName: 'ADX-DI[1]',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_1_1: new BaseField('ADX_MINUS_DI_1_1', {
    label: 'ADX-Di[1]|1',
    fieldName: 'ADX-DI[1]|1',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_1_120: new BaseField('ADX_MINUS_DI_1_120', {
    label: 'ADX-Di[1]|120',
    fieldName: 'ADX-DI[1]|120',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_1_15: new BaseField('ADX_MINUS_DI_1_15', {
    label: 'ADX-Di[1]|15',
    fieldName: 'ADX-DI[1]|15',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_1_1M: new BaseField('ADX_MINUS_DI_1_1M', {
    label: 'ADX-Di[1]|1M',
    fieldName: 'ADX-DI[1]|1M',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_1_1W: new BaseField('ADX_MINUS_DI_1_1W', {
    label: 'ADX-Di[1]|1W',
    fieldName: 'ADX-DI[1]|1W',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_1_240: new BaseField('ADX_MINUS_DI_1_240', {
    label: 'ADX-Di[1]|240',
    fieldName: 'ADX-DI[1]|240',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_1_30: new BaseField('ADX_MINUS_DI_1_30', {
    label: 'ADX-Di[1]|30',
    fieldName: 'ADX-DI[1]|30',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_1_5: new BaseField('ADX_MINUS_DI_1_5', {
    label: 'ADX-Di[1]|5',
    fieldName: 'ADX-DI[1]|5',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_1_60: new BaseField('ADX_MINUS_DI_1_60', {
    label: 'ADX-Di[1]|60',
    fieldName: 'ADX-DI[1]|60',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_100: new BaseField('ADX_MINUS_DI_100', {
    label: 'ADX-Di 100',
    fieldName: 'ADX-DI_100',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_100_1: new BaseField('ADX_MINUS_DI_100_1', {
    label: 'ADX-Di 100[1]',
    fieldName: 'ADX-DI_100[1]',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_100_1_1: new BaseField('ADX_MINUS_DI_100_1_1', {
    label: 'ADX-Di 100[1]|1',
    fieldName: 'ADX-DI_100[1]|1',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_100_1_120: new BaseField('ADX_MINUS_DI_100_1_120', {
    label: 'ADX-Di 100[1]|120',
    fieldName: 'ADX-DI_100[1]|120',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_100_1_15: new BaseField('ADX_MINUS_DI_100_1_15', {
    label: 'ADX-Di 100[1]|15',
    fieldName: 'ADX-DI_100[1]|15',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_100_1_1M: new BaseField('ADX_MINUS_DI_100_1_1M', {
    label: 'ADX-Di 100[1]|1M',
    fieldName: 'ADX-DI_100[1]|1M',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_100_1_1W: new BaseField('ADX_MINUS_DI_100_1_1W', {
    label: 'ADX-Di 100[1]|1W',
    fieldName: 'ADX-DI_100[1]|1W',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_100_1_240: new BaseField('ADX_MINUS_DI_100_1_240', {
    label: 'ADX-Di 100[1]|240',
    fieldName: 'ADX-DI_100[1]|240',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_100_1_30: new BaseField('ADX_MINUS_DI_100_1_30', {
    label: 'ADX-Di 100[1]|30',
    fieldName: 'ADX-DI_100[1]|30',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_100_1_5: new BaseField('ADX_MINUS_DI_100_1_5', {
    label: 'ADX-Di 100[1]|5',
    fieldName: 'ADX-DI_100[1]|5',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_100_1_60: new BaseField('ADX_MINUS_DI_100_1_60', {
    label: 'ADX-Di 100[1]|60',
    fieldName: 'ADX-DI_100[1]|60',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_100_1_2: new BaseField('ADX_MINUS_DI_100_1_2', {
    label: 'ADX-Di 100|1',
    fieldName: 'ADX-DI_100|1',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_100_120: new BaseField('ADX_MINUS_DI_100_120', {
    label: 'ADX-Di 100|120',
    fieldName: 'ADX-DI_100|120',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_100_15: new BaseField('ADX_MINUS_DI_100_15', {
    label: 'ADX-Di 100|15',
    fieldName: 'ADX-DI_100|15',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_100_1M: new BaseField('ADX_MINUS_DI_100_1M', {
    label: 'ADX-Di 100|1M',
    fieldName: 'ADX-DI_100|1M',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_100_1W: new BaseField('ADX_MINUS_DI_100_1W', {
    label: 'ADX-Di 100|1W',
    fieldName: 'ADX-DI_100|1W',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_100_240: new BaseField('ADX_MINUS_DI_100_240', {
    label: 'ADX-Di 100|240',
    fieldName: 'ADX-DI_100|240',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_100_30: new BaseField('ADX_MINUS_DI_100_30', {
    label: 'ADX-Di 100|30',
    fieldName: 'ADX-DI_100|30',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_100_5: new BaseField('ADX_MINUS_DI_100_5', {
    label: 'ADX-Di 100|5',
    fieldName: 'ADX-DI_100|5',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_100_60: new BaseField('ADX_MINUS_DI_100_60', {
    label: 'ADX-Di 100|60',
    fieldName: 'ADX-DI_100|60',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_20: new BaseField('ADX_MINUS_DI_20', {
    label: 'ADX-Di 20',
    fieldName: 'ADX-DI_20',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_20_1: new BaseField('ADX_MINUS_DI_20_1', {
    label: 'ADX-Di 20[1]',
    fieldName: 'ADX-DI_20[1]',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_20_1_1: new BaseField('ADX_MINUS_DI_20_1_1', {
    label: 'ADX-Di 20[1]|1',
    fieldName: 'ADX-DI_20[1]|1',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_20_1_120: new BaseField('ADX_MINUS_DI_20_1_120', {
    label: 'ADX-Di 20[1]|120',
    fieldName: 'ADX-DI_20[1]|120',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_20_1_15: new BaseField('ADX_MINUS_DI_20_1_15', {
    label: 'ADX-Di 20[1]|15',
    fieldName: 'ADX-DI_20[1]|15',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_20_1_1M: new BaseField('ADX_MINUS_DI_20_1_1M', {
    label: 'ADX-Di 20[1]|1M',
    fieldName: 'ADX-DI_20[1]|1M',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_20_1_1W: new BaseField('ADX_MINUS_DI_20_1_1W', {
    label: 'ADX-Di 20[1]|1W',
    fieldName: 'ADX-DI_20[1]|1W',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_20_1_240: new BaseField('ADX_MINUS_DI_20_1_240', {
    label: 'ADX-Di 20[1]|240',
    fieldName: 'ADX-DI_20[1]|240',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_20_1_30: new BaseField('ADX_MINUS_DI_20_1_30', {
    label: 'ADX-Di 20[1]|30',
    fieldName: 'ADX-DI_20[1]|30',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_20_1_5: new BaseField('ADX_MINUS_DI_20_1_5', {
    label: 'ADX-Di 20[1]|5',
    fieldName: 'ADX-DI_20[1]|5',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_20_1_60: new BaseField('ADX_MINUS_DI_20_1_60', {
    label: 'ADX-Di 20[1]|60',
    fieldName: 'ADX-DI_20[1]|60',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_20_1_2: new BaseField('ADX_MINUS_DI_20_1_2', {
    label: 'ADX-Di 20|1',
    fieldName: 'ADX-DI_20|1',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_20_120: new BaseField('ADX_MINUS_DI_20_120', {
    label: 'ADX-Di 20|120',
    fieldName: 'ADX-DI_20|120',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_20_15: new BaseField('ADX_MINUS_DI_20_15', {
    label: 'ADX-Di 20|15',
    fieldName: 'ADX-DI_20|15',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_20_1M: new BaseField('ADX_MINUS_DI_20_1M', {
    label: 'ADX-Di 20|1M',
    fieldName: 'ADX-DI_20|1M',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_20_1W: new BaseField('ADX_MINUS_DI_20_1W', {
    label: 'ADX-Di 20|1W',
    fieldName: 'ADX-DI_20|1W',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_20_240: new BaseField('ADX_MINUS_DI_20_240', {
    label: 'ADX-Di 20|240',
    fieldName: 'ADX-DI_20|240',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_20_30: new BaseField('ADX_MINUS_DI_20_30', {
    label: 'ADX-Di 20|30',
    fieldName: 'ADX-DI_20|30',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_20_5: new BaseField('ADX_MINUS_DI_20_5', {
    label: 'ADX-Di 20|5',
    fieldName: 'ADX-DI_20|5',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_20_60: new BaseField('ADX_MINUS_DI_20_60', {
    label: 'ADX-Di 20|60',
    fieldName: 'ADX-DI_20|60',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_50: new BaseField('ADX_MINUS_DI_50', {
    label: 'ADX-Di 50',
    fieldName: 'ADX-DI_50',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_50_1: new BaseField('ADX_MINUS_DI_50_1', {
    label: 'ADX-Di 50[1]',
    fieldName: 'ADX-DI_50[1]',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_50_1_1: new BaseField('ADX_MINUS_DI_50_1_1', {
    label: 'ADX-Di 50[1]|1',
    fieldName: 'ADX-DI_50[1]|1',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_50_1_120: new BaseField('ADX_MINUS_DI_50_1_120', {
    label: 'ADX-Di 50[1]|120',
    fieldName: 'ADX-DI_50[1]|120',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_50_1_15: new BaseField('ADX_MINUS_DI_50_1_15', {
    label: 'ADX-Di 50[1]|15',
    fieldName: 'ADX-DI_50[1]|15',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_50_1_1M: new BaseField('ADX_MINUS_DI_50_1_1M', {
    label: 'ADX-Di 50[1]|1M',
    fieldName: 'ADX-DI_50[1]|1M',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_50_1_1W: new BaseField('ADX_MINUS_DI_50_1_1W', {
    label: 'ADX-Di 50[1]|1W',
    fieldName: 'ADX-DI_50[1]|1W',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_50_1_240: new BaseField('ADX_MINUS_DI_50_1_240', {
    label: 'ADX-Di 50[1]|240',
    fieldName: 'ADX-DI_50[1]|240',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_50_1_30: new BaseField('ADX_MINUS_DI_50_1_30', {
    label: 'ADX-Di 50[1]|30',
    fieldName: 'ADX-DI_50[1]|30',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_50_1_5: new BaseField('ADX_MINUS_DI_50_1_5', {
    label: 'ADX-Di 50[1]|5',
    fieldName: 'ADX-DI_50[1]|5',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_50_1_60: new BaseField('ADX_MINUS_DI_50_1_60', {
    label: 'ADX-Di 50[1]|60',
    fieldName: 'ADX-DI_50[1]|60',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_50_1_2: new BaseField('ADX_MINUS_DI_50_1_2', {
    label: 'ADX-Di 50|1',
    fieldName: 'ADX-DI_50|1',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_50_120: new BaseField('ADX_MINUS_DI_50_120', {
    label: 'ADX-Di 50|120',
    fieldName: 'ADX-DI_50|120',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_50_15: new BaseField('ADX_MINUS_DI_50_15', {
    label: 'ADX-Di 50|15',
    fieldName: 'ADX-DI_50|15',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_50_1M: new BaseField('ADX_MINUS_DI_50_1M', {
    label: 'ADX-Di 50|1M',
    fieldName: 'ADX-DI_50|1M',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_50_1W: new BaseField('ADX_MINUS_DI_50_1W', {
    label: 'ADX-Di 50|1W',
    fieldName: 'ADX-DI_50|1W',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_50_240: new BaseField('ADX_MINUS_DI_50_240', {
    label: 'ADX-Di 50|240',
    fieldName: 'ADX-DI_50|240',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_50_30: new BaseField('ADX_MINUS_DI_50_30', {
    label: 'ADX-Di 50|30',
    fieldName: 'ADX-DI_50|30',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_50_5: new BaseField('ADX_MINUS_DI_50_5', {
    label: 'ADX-Di 50|5',
    fieldName: 'ADX-DI_50|5',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_50_60: new BaseField('ADX_MINUS_DI_50_60', {
    label: 'ADX-Di 50|60',
    fieldName: 'ADX-DI_50|60',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_9: new BaseField('ADX_MINUS_DI_9', {
    label: 'ADX-Di 9',
    fieldName: 'ADX-DI_9',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_9_1: new BaseField('ADX_MINUS_DI_9_1', {
    label: 'ADX-Di 9[1]',
    fieldName: 'ADX-DI_9[1]',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_9_1_1: new BaseField('ADX_MINUS_DI_9_1_1', {
    label: 'ADX-Di 9[1]|1',
    fieldName: 'ADX-DI_9[1]|1',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_9_1_120: new BaseField('ADX_MINUS_DI_9_1_120', {
    label: 'ADX-Di 9[1]|120',
    fieldName: 'ADX-DI_9[1]|120',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_9_1_15: new BaseField('ADX_MINUS_DI_9_1_15', {
    label: 'ADX-Di 9[1]|15',
    fieldName: 'ADX-DI_9[1]|15',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_9_1_1M: new BaseField('ADX_MINUS_DI_9_1_1M', {
    label: 'ADX-Di 9[1]|1M',
    fieldName: 'ADX-DI_9[1]|1M',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_9_1_1W: new BaseField('ADX_MINUS_DI_9_1_1W', {
    label: 'ADX-Di 9[1]|1W',
    fieldName: 'ADX-DI_9[1]|1W',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_9_1_240: new BaseField('ADX_MINUS_DI_9_1_240', {
    label: 'ADX-Di 9[1]|240',
    fieldName: 'ADX-DI_9[1]|240',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_9_1_30: new BaseField('ADX_MINUS_DI_9_1_30', {
    label: 'ADX-Di 9[1]|30',
    fieldName: 'ADX-DI_9[1]|30',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_9_1_5: new BaseField('ADX_MINUS_DI_9_1_5', {
    label: 'ADX-Di 9[1]|5',
    fieldName: 'ADX-DI_9[1]|5',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_9_1_60: new BaseField('ADX_MINUS_DI_9_1_60', {
    label: 'ADX-Di 9[1]|60',
    fieldName: 'ADX-DI_9[1]|60',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_9_1_2: new BaseField('ADX_MINUS_DI_9_1_2', {
    label: 'ADX-Di 9|1',
    fieldName: 'ADX-DI_9|1',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_9_120: new BaseField('ADX_MINUS_DI_9_120', {
    label: 'ADX-Di 9|120',
    fieldName: 'ADX-DI_9|120',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_9_15: new BaseField('ADX_MINUS_DI_9_15', {
    label: 'ADX-Di 9|15',
    fieldName: 'ADX-DI_9|15',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_9_1M: new BaseField('ADX_MINUS_DI_9_1M', {
    label: 'ADX-Di 9|1M',
    fieldName: 'ADX-DI_9|1M',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_9_1W: new BaseField('ADX_MINUS_DI_9_1W', {
    label: 'ADX-Di 9|1W',
    fieldName: 'ADX-DI_9|1W',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_9_240: new BaseField('ADX_MINUS_DI_9_240', {
    label: 'ADX-Di 9|240',
    fieldName: 'ADX-DI_9|240',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_9_30: new BaseField('ADX_MINUS_DI_9_30', {
    label: 'ADX-Di 9|30',
    fieldName: 'ADX-DI_9|30',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_9_5: new BaseField('ADX_MINUS_DI_9_5', {
    label: 'ADX-Di 9|5',
    fieldName: 'ADX-DI_9|5',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_9_60: new BaseField('ADX_MINUS_DI_9_60', {
    label: 'ADX-Di 9|60',
    fieldName: 'ADX-DI_9|60',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_1_2: new BaseField('ADX_MINUS_DI_1_2', {
    label: 'ADX-Di|1',
    fieldName: 'ADX-DI|1',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_120: new BaseField('ADX_MINUS_DI_120', {
    label: 'ADX-Di|120',
    fieldName: 'ADX-DI|120',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_15: new BaseField('ADX_MINUS_DI_15', {
    label: 'ADX-Di|15',
    fieldName: 'ADX-DI|15',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_1M: new BaseField('ADX_MINUS_DI_1M', {
    label: 'ADX-Di|1M',
    fieldName: 'ADX-DI|1M',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_1W: new BaseField('ADX_MINUS_DI_1W', {
    label: 'ADX-Di|1W',
    fieldName: 'ADX-DI|1W',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_240: new BaseField('ADX_MINUS_DI_240', {
    label: 'ADX-Di|240',
    fieldName: 'ADX-DI|240',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_30: new BaseField('ADX_MINUS_DI_30', {
    label: 'ADX-Di|30',
    fieldName: 'ADX-DI|30',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_5: new BaseField('ADX_MINUS_DI_5', {
    label: 'ADX-Di|5',
    fieldName: 'ADX-DI|5',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_MINUS_DI_60: new BaseField('ADX_MINUS_DI_60', {
    label: 'ADX-Di|60',
    fieldName: 'ADX-DI|60',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ADX_100: new BaseField('ADX_100', {
    label: 'ADX 100',
    fieldName: 'ADX_100',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ADX_100_1: new BaseField('ADX_100_1', {
    label: 'ADX 100|1',
    fieldName: 'ADX_100|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ADX_100_120: new BaseField('ADX_100_120', {
    label: 'ADX 100|120',
    fieldName: 'ADX_100|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ADX_100_15: new BaseField('ADX_100_15', {
    label: 'ADX 100|15',
    fieldName: 'ADX_100|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ADX_100_1M: new BaseField('ADX_100_1M', {
    label: 'ADX 100|1M',
    fieldName: 'ADX_100|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ADX_100_1W: new BaseField('ADX_100_1W', {
    label: 'ADX 100|1W',
    fieldName: 'ADX_100|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ADX_100_240: new BaseField('ADX_100_240', {
    label: 'ADX 100|240',
    fieldName: 'ADX_100|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ADX_100_30: new BaseField('ADX_100_30', {
    label: 'ADX 100|30',
    fieldName: 'ADX_100|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ADX_100_5: new BaseField('ADX_100_5', {
    label: 'ADX 100|5',
    fieldName: 'ADX_100|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ADX_100_60: new BaseField('ADX_100_60', {
    label: 'ADX 100|60',
    fieldName: 'ADX_100|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ADX_20: new BaseField('ADX_20', {
    label: 'ADX 20',
    fieldName: 'ADX_20',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ADX_20_1: new BaseField('ADX_20_1', {
    label: 'ADX 20|1',
    fieldName: 'ADX_20|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ADX_20_120: new BaseField('ADX_20_120', {
    label: 'ADX 20|120',
    fieldName: 'ADX_20|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ADX_20_15: new BaseField('ADX_20_15', {
    label: 'ADX 20|15',
    fieldName: 'ADX_20|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ADX_20_1M: new BaseField('ADX_20_1M', {
    label: 'ADX 20|1M',
    fieldName: 'ADX_20|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ADX_20_1W: new BaseField('ADX_20_1W', {
    label: 'ADX 20|1W',
    fieldName: 'ADX_20|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ADX_20_240: new BaseField('ADX_20_240', {
    label: 'ADX 20|240',
    fieldName: 'ADX_20|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ADX_20_30: new BaseField('ADX_20_30', {
    label: 'ADX 20|30',
    fieldName: 'ADX_20|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ADX_20_5: new BaseField('ADX_20_5', {
    label: 'ADX 20|5',
    fieldName: 'ADX_20|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ADX_20_60: new BaseField('ADX_20_60', {
    label: 'ADX 20|60',
    fieldName: 'ADX_20|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ADX_50: new BaseField('ADX_50', {
    label: 'ADX 50',
    fieldName: 'ADX_50',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ADX_50_1: new BaseField('ADX_50_1', {
    label: 'ADX 50|1',
    fieldName: 'ADX_50|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ADX_50_120: new BaseField('ADX_50_120', {
    label: 'ADX 50|120',
    fieldName: 'ADX_50|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ADX_50_15: new BaseField('ADX_50_15', {
    label: 'ADX 50|15',
    fieldName: 'ADX_50|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ADX_50_1M: new BaseField('ADX_50_1M', {
    label: 'ADX 50|1M',
    fieldName: 'ADX_50|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ADX_50_1W: new BaseField('ADX_50_1W', {
    label: 'ADX 50|1W',
    fieldName: 'ADX_50|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ADX_50_240: new BaseField('ADX_50_240', {
    label: 'ADX 50|240',
    fieldName: 'ADX_50|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ADX_50_30: new BaseField('ADX_50_30', {
    label: 'ADX 50|30',
    fieldName: 'ADX_50|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ADX_50_5: new BaseField('ADX_50_5', {
    label: 'ADX 50|5',
    fieldName: 'ADX_50|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ADX_50_60: new BaseField('ADX_50_60', {
    label: 'ADX 50|60',
    fieldName: 'ADX_50|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ADX_9: new BaseField('ADX_9', {
    label: 'ADX 9',
    fieldName: 'ADX_9',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ADX_9_1: new BaseField('ADX_9_1', {
    label: 'ADX 9|1',
    fieldName: 'ADX_9|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ADX_9_120: new BaseField('ADX_9_120', {
    label: 'ADX 9|120',
    fieldName: 'ADX_9|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ADX_9_15: new BaseField('ADX_9_15', {
    label: 'ADX 9|15',
    fieldName: 'ADX_9|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ADX_9_1M: new BaseField('ADX_9_1M', {
    label: 'ADX 9|1M',
    fieldName: 'ADX_9|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ADX_9_1W: new BaseField('ADX_9_1W', {
    label: 'ADX 9|1W',
    fieldName: 'ADX_9|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ADX_9_240: new BaseField('ADX_9_240', {
    label: 'ADX 9|240',
    fieldName: 'ADX_9|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ADX_9_30: new BaseField('ADX_9_30', {
    label: 'ADX 9|30',
    fieldName: 'ADX_9|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ADX_9_5: new BaseField('ADX_9_5', {
    label: 'ADX 9|5',
    fieldName: 'ADX_9|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ADX_9_60: new BaseField('ADX_9_60', {
    label: 'ADX 9|60',
    fieldName: 'ADX_9|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ADX_1: new BaseField('ADX_1', {
    label: 'ADX|1',
    fieldName: 'ADX|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ADX_120: new BaseField('ADX_120', {
    label: 'ADX|120',
    fieldName: 'ADX|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ADX_15: new BaseField('ADX_15', {
    label: 'ADX|15',
    fieldName: 'ADX|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ADX_1M: new BaseField('ADX_1M', {
    label: 'ADX|1M',
    fieldName: 'ADX|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ADX_1W: new BaseField('ADX_1W', {
    label: 'ADX|1W',
    fieldName: 'ADX|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ADX_240: new BaseField('ADX_240', {
    label: 'ADX|240',
    fieldName: 'ADX|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ADX_30: new BaseField('ADX_30', {
    label: 'ADX|30',
    fieldName: 'ADX|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ADX_5: new BaseField('ADX_5', {
    label: 'ADX|5',
    fieldName: 'ADX|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ADX_60: new BaseField('ADX_60', {
    label: 'ADX|60',
    fieldName: 'ADX|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  AROON_DOWN_14: new BaseField('AROON_DOWN_14', {
    label: 'Aroon Down (14)',
    fieldName: 'Aroon.Down',
    format: 'round',
    interval: true,
    historical: false,
  }),

  AROON_DOWN_1: new BaseField('AROON_DOWN_1', {
    label: 'Aroon Down|1',
    fieldName: 'Aroon.Down|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  AROON_DOWN_120: new BaseField('AROON_DOWN_120', {
    label: 'Aroon Down|120',
    fieldName: 'Aroon.Down|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  AROON_DOWN_15: new BaseField('AROON_DOWN_15', {
    label: 'Aroon Down|15',
    fieldName: 'Aroon.Down|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  AROON_DOWN_1M: new BaseField('AROON_DOWN_1M', {
    label: 'Aroon Down|1M',
    fieldName: 'Aroon.Down|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  AROON_DOWN_1W: new BaseField('AROON_DOWN_1W', {
    label: 'Aroon Down|1W',
    fieldName: 'Aroon.Down|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  AROON_DOWN_240: new BaseField('AROON_DOWN_240', {
    label: 'Aroon Down|240',
    fieldName: 'Aroon.Down|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  AROON_DOWN_30: new BaseField('AROON_DOWN_30', {
    label: 'Aroon Down|30',
    fieldName: 'Aroon.Down|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  AROON_DOWN_5: new BaseField('AROON_DOWN_5', {
    label: 'Aroon Down|5',
    fieldName: 'Aroon.Down|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  AROON_DOWN_60: new BaseField('AROON_DOWN_60', {
    label: 'Aroon Down|60',
    fieldName: 'Aroon.Down|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  AROON_UP_14: new BaseField('AROON_UP_14', {
    label: 'Aroon Up (14)',
    fieldName: 'Aroon.Up',
    format: 'round',
    interval: true,
    historical: false,
  }),

  AROON_UP_1: new BaseField('AROON_UP_1', {
    label: 'Aroon Up|1',
    fieldName: 'Aroon.Up|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  AROON_UP_120: new BaseField('AROON_UP_120', {
    label: 'Aroon Up|120',
    fieldName: 'Aroon.Up|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  AROON_UP_15: new BaseField('AROON_UP_15', {
    label: 'Aroon Up|15',
    fieldName: 'Aroon.Up|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  AROON_UP_1M: new BaseField('AROON_UP_1M', {
    label: 'Aroon Up|1M',
    fieldName: 'Aroon.Up|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  AROON_UP_1W: new BaseField('AROON_UP_1W', {
    label: 'Aroon Up|1W',
    fieldName: 'Aroon.Up|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  AROON_UP_240: new BaseField('AROON_UP_240', {
    label: 'Aroon Up|240',
    fieldName: 'Aroon.Up|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  AROON_UP_30: new BaseField('AROON_UP_30', {
    label: 'Aroon Up|30',
    fieldName: 'Aroon.Up|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  AROON_UP_5: new BaseField('AROON_UP_5', {
    label: 'Aroon Up|5',
    fieldName: 'Aroon.Up|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  AROON_UP_60: new BaseField('AROON_UP_60', {
    label: 'Aroon Up|60',
    fieldName: 'Aroon.Up|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  REC_UO: new BaseField('REC_UO', {
    label: 'Rec UO',
    fieldName: 'Rec.UO',
    format: 'rating',
    interval: true,
    historical: true,
  }),

  REC_UO_1: new BaseField('REC_UO_1', {
    label: 'Rec UO|1',
    fieldName: 'Rec.UO|1',
    format: 'rating',
    interval: true,
    historical: true,
  }),

  REC_UO_120: new BaseField('REC_UO_120', {
    label: 'Rec UO|120',
    fieldName: 'Rec.UO|120',
    format: 'rating',
    interval: true,
    historical: true,
  }),

  REC_UO_15: new BaseField('REC_UO_15', {
    label: 'Rec UO|15',
    fieldName: 'Rec.UO|15',
    format: 'rating',
    interval: true,
    historical: true,
  }),

  REC_UO_1M: new BaseField('REC_UO_1M', {
    label: 'Rec UO|1M',
    fieldName: 'Rec.UO|1M',
    format: 'rating',
    interval: true,
    historical: true,
  }),

  REC_UO_1W: new BaseField('REC_UO_1W', {
    label: 'Rec UO|1W',
    fieldName: 'Rec.UO|1W',
    format: 'rating',
    interval: true,
    historical: true,
  }),

  REC_UO_240: new BaseField('REC_UO_240', {
    label: 'Rec UO|240',
    fieldName: 'Rec.UO|240',
    format: 'rating',
    interval: true,
    historical: true,
  }),

  REC_UO_30: new BaseField('REC_UO_30', {
    label: 'Rec UO|30',
    fieldName: 'Rec.UO|30',
    format: 'rating',
    interval: true,
    historical: true,
  }),

  REC_UO_5: new BaseField('REC_UO_5', {
    label: 'Rec UO|5',
    fieldName: 'Rec.UO|5',
    format: 'rating',
    interval: true,
    historical: true,
  }),

  REC_UO_60: new BaseField('REC_UO_60', {
    label: 'Rec UO|60',
    fieldName: 'Rec.UO|60',
    format: 'rating',
    interval: true,
    historical: true,
  }),

  ULTIMATE_OSCILLATOR_7_14_28: new BaseField('ULTIMATE_OSCILLATOR_7_14_28', {
    label: 'Ultimate Oscillator (7, 14, 28)',
    fieldName: 'UO',
    format: 'recommendation',
    interval: true,
    historical: false,
  }),

  UO_1: new BaseField('UO_1', {
    label: 'UO|1',
    fieldName: 'UO|1',
    format: 'float',
    interval: true,
    historical: true,
  }),

  UO_120: new BaseField('UO_120', {
    label: 'UO|120',
    fieldName: 'UO|120',
    format: 'float',
    interval: true,
    historical: true,
  }),

  UO_15: new BaseField('UO_15', {
    label: 'UO|15',
    fieldName: 'UO|15',
    format: 'float',
    interval: true,
    historical: true,
  }),

  UO_1M: new BaseField('UO_1M', {
    label: 'UO|1M',
    fieldName: 'UO|1M',
    format: 'float',
    interval: true,
    historical: true,
  }),

  UO_1W: new BaseField('UO_1W', {
    label: 'UO|1W',
    fieldName: 'UO|1W',
    format: 'float',
    interval: true,
    historical: true,
  }),

  UO_240: new BaseField('UO_240', {
    label: 'UO|240',
    fieldName: 'UO|240',
    format: 'float',
    interval: true,
    historical: true,
  }),

  UO_30: new BaseField('UO_30', {
    label: 'UO|30',
    fieldName: 'UO|30',
    format: 'float',
    interval: true,
    historical: true,
  }),

  UO_5: new BaseField('UO_5', {
    label: 'UO|5',
    fieldName: 'UO|5',
    format: 'float',
    interval: true,
    historical: true,
  }),

  UO_60: new BaseField('UO_60', {
    label: 'UO|60',
    fieldName: 'UO|60',
    format: 'float',
    interval: true,
    historical: true,
  }),

  // === Candlestick Patterns (151 fields) ===

  CANDLE_DOJI: new BaseField('CANDLE_DOJI', {
    label: 'Candle.Doji',
    fieldName: 'Candle.Doji',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_DOJI_DRAGONFLY: new BaseField('CANDLE_DOJI_DRAGONFLY', {
    label: 'Candle.Doji.Dragonfly',
    fieldName: 'Candle.Doji.Dragonfly',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_DOJI_DRAGONFLY_1: new BaseField('CANDLE_DOJI_DRAGONFLY_1', {
    label: 'Candle Doji Dragonfly|1',
    fieldName: 'Candle.Doji.Dragonfly|1',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_DOJI_DRAGONFLY_120: new BaseField('CANDLE_DOJI_DRAGONFLY_120', {
    label: 'Candle Doji Dragonfly|120',
    fieldName: 'Candle.Doji.Dragonfly|120',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_DOJI_DRAGONFLY_15: new BaseField('CANDLE_DOJI_DRAGONFLY_15', {
    label: 'Candle Doji Dragonfly|15',
    fieldName: 'Candle.Doji.Dragonfly|15',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_DOJI_DRAGONFLY_1M: new BaseField('CANDLE_DOJI_DRAGONFLY_1M', {
    label: 'Candle Doji Dragonfly|1M',
    fieldName: 'Candle.Doji.Dragonfly|1M',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_DOJI_DRAGONFLY_1W: new BaseField('CANDLE_DOJI_DRAGONFLY_1W', {
    label: 'Candle Doji Dragonfly|1W',
    fieldName: 'Candle.Doji.Dragonfly|1W',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_DOJI_DRAGONFLY_240: new BaseField('CANDLE_DOJI_DRAGONFLY_240', {
    label: 'Candle Doji Dragonfly|240',
    fieldName: 'Candle.Doji.Dragonfly|240',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_DOJI_DRAGONFLY_30: new BaseField('CANDLE_DOJI_DRAGONFLY_30', {
    label: 'Candle Doji Dragonfly|30',
    fieldName: 'Candle.Doji.Dragonfly|30',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_DOJI_DRAGONFLY_5: new BaseField('CANDLE_DOJI_DRAGONFLY_5', {
    label: 'Candle Doji Dragonfly|5',
    fieldName: 'Candle.Doji.Dragonfly|5',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_DOJI_DRAGONFLY_60: new BaseField('CANDLE_DOJI_DRAGONFLY_60', {
    label: 'Candle Doji Dragonfly|60',
    fieldName: 'Candle.Doji.Dragonfly|60',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_DOJI_GRAVESTONE: new BaseField('CANDLE_DOJI_GRAVESTONE', {
    label: 'Candle.Doji.Gravestone',
    fieldName: 'Candle.Doji.Gravestone',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_DOJI_GRAVESTONE_1: new BaseField('CANDLE_DOJI_GRAVESTONE_1', {
    label: 'Candle Doji Gravestone|1',
    fieldName: 'Candle.Doji.Gravestone|1',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_DOJI_GRAVESTONE_120: new BaseField('CANDLE_DOJI_GRAVESTONE_120', {
    label: 'Candle Doji Gravestone|120',
    fieldName: 'Candle.Doji.Gravestone|120',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_DOJI_GRAVESTONE_15: new BaseField('CANDLE_DOJI_GRAVESTONE_15', {
    label: 'Candle Doji Gravestone|15',
    fieldName: 'Candle.Doji.Gravestone|15',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_DOJI_GRAVESTONE_1M: new BaseField('CANDLE_DOJI_GRAVESTONE_1M', {
    label: 'Candle Doji Gravestone|1M',
    fieldName: 'Candle.Doji.Gravestone|1M',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_DOJI_GRAVESTONE_1W: new BaseField('CANDLE_DOJI_GRAVESTONE_1W', {
    label: 'Candle Doji Gravestone|1W',
    fieldName: 'Candle.Doji.Gravestone|1W',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_DOJI_GRAVESTONE_240: new BaseField('CANDLE_DOJI_GRAVESTONE_240', {
    label: 'Candle Doji Gravestone|240',
    fieldName: 'Candle.Doji.Gravestone|240',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_DOJI_GRAVESTONE_30: new BaseField('CANDLE_DOJI_GRAVESTONE_30', {
    label: 'Candle Doji Gravestone|30',
    fieldName: 'Candle.Doji.Gravestone|30',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_DOJI_GRAVESTONE_5: new BaseField('CANDLE_DOJI_GRAVESTONE_5', {
    label: 'Candle Doji Gravestone|5',
    fieldName: 'Candle.Doji.Gravestone|5',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_DOJI_GRAVESTONE_60: new BaseField('CANDLE_DOJI_GRAVESTONE_60', {
    label: 'Candle Doji Gravestone|60',
    fieldName: 'Candle.Doji.Gravestone|60',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_DOJI_1: new BaseField('CANDLE_DOJI_1', {
    label: 'Candle Doji|1',
    fieldName: 'Candle.Doji|1',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_DOJI_120: new BaseField('CANDLE_DOJI_120', {
    label: 'Candle Doji|120',
    fieldName: 'Candle.Doji|120',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_DOJI_15: new BaseField('CANDLE_DOJI_15', {
    label: 'Candle Doji|15',
    fieldName: 'Candle.Doji|15',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_DOJI_1M: new BaseField('CANDLE_DOJI_1M', {
    label: 'Candle Doji|1M',
    fieldName: 'Candle.Doji|1M',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_DOJI_1W: new BaseField('CANDLE_DOJI_1W', {
    label: 'Candle Doji|1W',
    fieldName: 'Candle.Doji|1W',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_DOJI_240: new BaseField('CANDLE_DOJI_240', {
    label: 'Candle Doji|240',
    fieldName: 'Candle.Doji|240',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_DOJI_30: new BaseField('CANDLE_DOJI_30', {
    label: 'Candle Doji|30',
    fieldName: 'Candle.Doji|30',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_DOJI_5: new BaseField('CANDLE_DOJI_5', {
    label: 'Candle Doji|5',
    fieldName: 'Candle.Doji|5',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_DOJI_60: new BaseField('CANDLE_DOJI_60', {
    label: 'Candle Doji|60',
    fieldName: 'Candle.Doji|60',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_ENGULFING_BEARISH: new BaseField('CANDLE_ENGULFING_BEARISH', {
    label: 'Candle.Engulfing.Bearish',
    fieldName: 'Candle.Engulfing.Bearish',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_ENGULFING_BEARISH_1: new BaseField('CANDLE_ENGULFING_BEARISH_1', {
    label: 'Candle Engulfing Bearish|1',
    fieldName: 'Candle.Engulfing.Bearish|1',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_ENGULFING_BEARISH_120: new BaseField('CANDLE_ENGULFING_BEARISH_120', {
    label: 'Candle Engulfing Bearish|120',
    fieldName: 'Candle.Engulfing.Bearish|120',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_ENGULFING_BEARISH_15: new BaseField('CANDLE_ENGULFING_BEARISH_15', {
    label: 'Candle Engulfing Bearish|15',
    fieldName: 'Candle.Engulfing.Bearish|15',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_ENGULFING_BEARISH_1M: new BaseField('CANDLE_ENGULFING_BEARISH_1M', {
    label: 'Candle Engulfing Bearish|1M',
    fieldName: 'Candle.Engulfing.Bearish|1M',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_ENGULFING_BEARISH_1W: new BaseField('CANDLE_ENGULFING_BEARISH_1W', {
    label: 'Candle Engulfing Bearish|1W',
    fieldName: 'Candle.Engulfing.Bearish|1W',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_ENGULFING_BEARISH_240: new BaseField('CANDLE_ENGULFING_BEARISH_240', {
    label: 'Candle Engulfing Bearish|240',
    fieldName: 'Candle.Engulfing.Bearish|240',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_ENGULFING_BEARISH_30: new BaseField('CANDLE_ENGULFING_BEARISH_30', {
    label: 'Candle Engulfing Bearish|30',
    fieldName: 'Candle.Engulfing.Bearish|30',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_ENGULFING_BEARISH_5: new BaseField('CANDLE_ENGULFING_BEARISH_5', {
    label: 'Candle Engulfing Bearish|5',
    fieldName: 'Candle.Engulfing.Bearish|5',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_ENGULFING_BEARISH_60: new BaseField('CANDLE_ENGULFING_BEARISH_60', {
    label: 'Candle Engulfing Bearish|60',
    fieldName: 'Candle.Engulfing.Bearish|60',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_ENGULFING_BULLISH: new BaseField('CANDLE_ENGULFING_BULLISH', {
    label: 'Candle.Engulfing.Bullish',
    fieldName: 'Candle.Engulfing.Bullish',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_ENGULFING_BULLISH_1: new BaseField('CANDLE_ENGULFING_BULLISH_1', {
    label: 'Candle Engulfing Bullish|1',
    fieldName: 'Candle.Engulfing.Bullish|1',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_ENGULFING_BULLISH_120: new BaseField('CANDLE_ENGULFING_BULLISH_120', {
    label: 'Candle Engulfing Bullish|120',
    fieldName: 'Candle.Engulfing.Bullish|120',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_ENGULFING_BULLISH_15: new BaseField('CANDLE_ENGULFING_BULLISH_15', {
    label: 'Candle Engulfing Bullish|15',
    fieldName: 'Candle.Engulfing.Bullish|15',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_ENGULFING_BULLISH_1M: new BaseField('CANDLE_ENGULFING_BULLISH_1M', {
    label: 'Candle Engulfing Bullish|1M',
    fieldName: 'Candle.Engulfing.Bullish|1M',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_ENGULFING_BULLISH_1W: new BaseField('CANDLE_ENGULFING_BULLISH_1W', {
    label: 'Candle Engulfing Bullish|1W',
    fieldName: 'Candle.Engulfing.Bullish|1W',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_ENGULFING_BULLISH_240: new BaseField('CANDLE_ENGULFING_BULLISH_240', {
    label: 'Candle Engulfing Bullish|240',
    fieldName: 'Candle.Engulfing.Bullish|240',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_ENGULFING_BULLISH_30: new BaseField('CANDLE_ENGULFING_BULLISH_30', {
    label: 'Candle Engulfing Bullish|30',
    fieldName: 'Candle.Engulfing.Bullish|30',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_ENGULFING_BULLISH_5: new BaseField('CANDLE_ENGULFING_BULLISH_5', {
    label: 'Candle Engulfing Bullish|5',
    fieldName: 'Candle.Engulfing.Bullish|5',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_ENGULFING_BULLISH_60: new BaseField('CANDLE_ENGULFING_BULLISH_60', {
    label: 'Candle Engulfing Bullish|60',
    fieldName: 'Candle.Engulfing.Bullish|60',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_HAMMER: new BaseField('CANDLE_HAMMER', {
    label: 'Candle.Hammer',
    fieldName: 'Candle.Hammer',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_HAMMER_1: new BaseField('CANDLE_HAMMER_1', {
    label: 'Candle Hammer|1',
    fieldName: 'Candle.Hammer|1',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_HAMMER_120: new BaseField('CANDLE_HAMMER_120', {
    label: 'Candle Hammer|120',
    fieldName: 'Candle.Hammer|120',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_HAMMER_15: new BaseField('CANDLE_HAMMER_15', {
    label: 'Candle Hammer|15',
    fieldName: 'Candle.Hammer|15',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_HAMMER_1M: new BaseField('CANDLE_HAMMER_1M', {
    label: 'Candle Hammer|1M',
    fieldName: 'Candle.Hammer|1M',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_HAMMER_1W: new BaseField('CANDLE_HAMMER_1W', {
    label: 'Candle Hammer|1W',
    fieldName: 'Candle.Hammer|1W',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_HAMMER_240: new BaseField('CANDLE_HAMMER_240', {
    label: 'Candle Hammer|240',
    fieldName: 'Candle.Hammer|240',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_HAMMER_30: new BaseField('CANDLE_HAMMER_30', {
    label: 'Candle Hammer|30',
    fieldName: 'Candle.Hammer|30',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_HAMMER_5: new BaseField('CANDLE_HAMMER_5', {
    label: 'Candle Hammer|5',
    fieldName: 'Candle.Hammer|5',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_HAMMER_60: new BaseField('CANDLE_HAMMER_60', {
    label: 'Candle Hammer|60',
    fieldName: 'Candle.Hammer|60',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_HARAMI_BEARISH: new BaseField('CANDLE_HARAMI_BEARISH', {
    label: 'Candle.Harami.Bearish',
    fieldName: 'Candle.Harami.Bearish',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_HARAMI_BEARISH_1: new BaseField('CANDLE_HARAMI_BEARISH_1', {
    label: 'Candle Harami Bearish|1',
    fieldName: 'Candle.Harami.Bearish|1',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_HARAMI_BEARISH_120: new BaseField('CANDLE_HARAMI_BEARISH_120', {
    label: 'Candle Harami Bearish|120',
    fieldName: 'Candle.Harami.Bearish|120',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_HARAMI_BEARISH_15: new BaseField('CANDLE_HARAMI_BEARISH_15', {
    label: 'Candle Harami Bearish|15',
    fieldName: 'Candle.Harami.Bearish|15',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_HARAMI_BEARISH_1M: new BaseField('CANDLE_HARAMI_BEARISH_1M', {
    label: 'Candle Harami Bearish|1M',
    fieldName: 'Candle.Harami.Bearish|1M',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_HARAMI_BEARISH_1W: new BaseField('CANDLE_HARAMI_BEARISH_1W', {
    label: 'Candle Harami Bearish|1W',
    fieldName: 'Candle.Harami.Bearish|1W',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_HARAMI_BEARISH_240: new BaseField('CANDLE_HARAMI_BEARISH_240', {
    label: 'Candle Harami Bearish|240',
    fieldName: 'Candle.Harami.Bearish|240',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_HARAMI_BEARISH_30: new BaseField('CANDLE_HARAMI_BEARISH_30', {
    label: 'Candle Harami Bearish|30',
    fieldName: 'Candle.Harami.Bearish|30',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_HARAMI_BEARISH_5: new BaseField('CANDLE_HARAMI_BEARISH_5', {
    label: 'Candle Harami Bearish|5',
    fieldName: 'Candle.Harami.Bearish|5',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_HARAMI_BEARISH_60: new BaseField('CANDLE_HARAMI_BEARISH_60', {
    label: 'Candle Harami Bearish|60',
    fieldName: 'Candle.Harami.Bearish|60',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_HARAMI_BULLISH: new BaseField('CANDLE_HARAMI_BULLISH', {
    label: 'Candle.Harami.Bullish',
    fieldName: 'Candle.Harami.Bullish',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_HARAMI_BULLISH_1: new BaseField('CANDLE_HARAMI_BULLISH_1', {
    label: 'Candle Harami Bullish|1',
    fieldName: 'Candle.Harami.Bullish|1',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_HARAMI_BULLISH_120: new BaseField('CANDLE_HARAMI_BULLISH_120', {
    label: 'Candle Harami Bullish|120',
    fieldName: 'Candle.Harami.Bullish|120',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_HARAMI_BULLISH_15: new BaseField('CANDLE_HARAMI_BULLISH_15', {
    label: 'Candle Harami Bullish|15',
    fieldName: 'Candle.Harami.Bullish|15',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_HARAMI_BULLISH_1M: new BaseField('CANDLE_HARAMI_BULLISH_1M', {
    label: 'Candle Harami Bullish|1M',
    fieldName: 'Candle.Harami.Bullish|1M',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_HARAMI_BULLISH_1W: new BaseField('CANDLE_HARAMI_BULLISH_1W', {
    label: 'Candle Harami Bullish|1W',
    fieldName: 'Candle.Harami.Bullish|1W',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_HARAMI_BULLISH_240: new BaseField('CANDLE_HARAMI_BULLISH_240', {
    label: 'Candle Harami Bullish|240',
    fieldName: 'Candle.Harami.Bullish|240',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_HARAMI_BULLISH_30: new BaseField('CANDLE_HARAMI_BULLISH_30', {
    label: 'Candle Harami Bullish|30',
    fieldName: 'Candle.Harami.Bullish|30',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_HARAMI_BULLISH_5: new BaseField('CANDLE_HARAMI_BULLISH_5', {
    label: 'Candle Harami Bullish|5',
    fieldName: 'Candle.Harami.Bullish|5',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_HARAMI_BULLISH_60: new BaseField('CANDLE_HARAMI_BULLISH_60', {
    label: 'Candle Harami Bullish|60',
    fieldName: 'Candle.Harami.Bullish|60',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_INVERTEDHAMMER: new BaseField('CANDLE_INVERTEDHAMMER', {
    label: 'Candle.InvertedHammer',
    fieldName: 'Candle.InvertedHammer',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_INVERTEDHAMMER_1: new BaseField('CANDLE_INVERTEDHAMMER_1', {
    label: 'Candle Invertedhammer|1',
    fieldName: 'Candle.InvertedHammer|1',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_INVERTEDHAMMER_120: new BaseField('CANDLE_INVERTEDHAMMER_120', {
    label: 'Candle Invertedhammer|120',
    fieldName: 'Candle.InvertedHammer|120',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_INVERTEDHAMMER_15: new BaseField('CANDLE_INVERTEDHAMMER_15', {
    label: 'Candle Invertedhammer|15',
    fieldName: 'Candle.InvertedHammer|15',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_INVERTEDHAMMER_1M: new BaseField('CANDLE_INVERTEDHAMMER_1M', {
    label: 'Candle Invertedhammer|1M',
    fieldName: 'Candle.InvertedHammer|1M',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_INVERTEDHAMMER_1W: new BaseField('CANDLE_INVERTEDHAMMER_1W', {
    label: 'Candle Invertedhammer|1W',
    fieldName: 'Candle.InvertedHammer|1W',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_INVERTEDHAMMER_240: new BaseField('CANDLE_INVERTEDHAMMER_240', {
    label: 'Candle Invertedhammer|240',
    fieldName: 'Candle.InvertedHammer|240',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_INVERTEDHAMMER_30: new BaseField('CANDLE_INVERTEDHAMMER_30', {
    label: 'Candle Invertedhammer|30',
    fieldName: 'Candle.InvertedHammer|30',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_INVERTEDHAMMER_5: new BaseField('CANDLE_INVERTEDHAMMER_5', {
    label: 'Candle Invertedhammer|5',
    fieldName: 'Candle.InvertedHammer|5',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_INVERTEDHAMMER_60: new BaseField('CANDLE_INVERTEDHAMMER_60', {
    label: 'Candle Invertedhammer|60',
    fieldName: 'Candle.InvertedHammer|60',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_KICKING_BEARISH: new BaseField('CANDLE_KICKING_BEARISH', {
    label: 'Candle.Kicking.Bearish',
    fieldName: 'Candle.Kicking.Bearish',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_KICKING_BEARISH_1: new BaseField('CANDLE_KICKING_BEARISH_1', {
    label: 'Candle Kicking Bearish|1',
    fieldName: 'Candle.Kicking.Bearish|1',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_KICKING_BEARISH_120: new BaseField('CANDLE_KICKING_BEARISH_120', {
    label: 'Candle Kicking Bearish|120',
    fieldName: 'Candle.Kicking.Bearish|120',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_KICKING_BEARISH_15: new BaseField('CANDLE_KICKING_BEARISH_15', {
    label: 'Candle Kicking Bearish|15',
    fieldName: 'Candle.Kicking.Bearish|15',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_KICKING_BEARISH_1M: new BaseField('CANDLE_KICKING_BEARISH_1M', {
    label: 'Candle Kicking Bearish|1M',
    fieldName: 'Candle.Kicking.Bearish|1M',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_KICKING_BEARISH_1W: new BaseField('CANDLE_KICKING_BEARISH_1W', {
    label: 'Candle Kicking Bearish|1W',
    fieldName: 'Candle.Kicking.Bearish|1W',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_KICKING_BEARISH_240: new BaseField('CANDLE_KICKING_BEARISH_240', {
    label: 'Candle Kicking Bearish|240',
    fieldName: 'Candle.Kicking.Bearish|240',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_KICKING_BEARISH_30: new BaseField('CANDLE_KICKING_BEARISH_30', {
    label: 'Candle Kicking Bearish|30',
    fieldName: 'Candle.Kicking.Bearish|30',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_KICKING_BEARISH_5: new BaseField('CANDLE_KICKING_BEARISH_5', {
    label: 'Candle Kicking Bearish|5',
    fieldName: 'Candle.Kicking.Bearish|5',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_KICKING_BEARISH_60: new BaseField('CANDLE_KICKING_BEARISH_60', {
    label: 'Candle Kicking Bearish|60',
    fieldName: 'Candle.Kicking.Bearish|60',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_KICKING_BULLISH: new BaseField('CANDLE_KICKING_BULLISH', {
    label: 'Candle.Kicking.Bullish',
    fieldName: 'Candle.Kicking.Bullish',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_KICKING_BULLISH_1: new BaseField('CANDLE_KICKING_BULLISH_1', {
    label: 'Candle Kicking Bullish|1',
    fieldName: 'Candle.Kicking.Bullish|1',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_KICKING_BULLISH_120: new BaseField('CANDLE_KICKING_BULLISH_120', {
    label: 'Candle Kicking Bullish|120',
    fieldName: 'Candle.Kicking.Bullish|120',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_KICKING_BULLISH_15: new BaseField('CANDLE_KICKING_BULLISH_15', {
    label: 'Candle Kicking Bullish|15',
    fieldName: 'Candle.Kicking.Bullish|15',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_KICKING_BULLISH_1M: new BaseField('CANDLE_KICKING_BULLISH_1M', {
    label: 'Candle Kicking Bullish|1M',
    fieldName: 'Candle.Kicking.Bullish|1M',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_KICKING_BULLISH_1W: new BaseField('CANDLE_KICKING_BULLISH_1W', {
    label: 'Candle Kicking Bullish|1W',
    fieldName: 'Candle.Kicking.Bullish|1W',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_KICKING_BULLISH_240: new BaseField('CANDLE_KICKING_BULLISH_240', {
    label: 'Candle Kicking Bullish|240',
    fieldName: 'Candle.Kicking.Bullish|240',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_KICKING_BULLISH_30: new BaseField('CANDLE_KICKING_BULLISH_30', {
    label: 'Candle Kicking Bullish|30',
    fieldName: 'Candle.Kicking.Bullish|30',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_KICKING_BULLISH_5: new BaseField('CANDLE_KICKING_BULLISH_5', {
    label: 'Candle Kicking Bullish|5',
    fieldName: 'Candle.Kicking.Bullish|5',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_KICKING_BULLISH_60: new BaseField('CANDLE_KICKING_BULLISH_60', {
    label: 'Candle Kicking Bullish|60',
    fieldName: 'Candle.Kicking.Bullish|60',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_MARUBOZU_BLACK: new BaseField('CANDLE_MARUBOZU_BLACK', {
    label: 'Candle.Marubozu.Black',
    fieldName: 'Candle.Marubozu.Black',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_MARUBOZU_BLACK_1: new BaseField('CANDLE_MARUBOZU_BLACK_1', {
    label: 'Candle Marubozu Black|1',
    fieldName: 'Candle.Marubozu.Black|1',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_MARUBOZU_BLACK_120: new BaseField('CANDLE_MARUBOZU_BLACK_120', {
    label: 'Candle Marubozu Black|120',
    fieldName: 'Candle.Marubozu.Black|120',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_MARUBOZU_BLACK_15: new BaseField('CANDLE_MARUBOZU_BLACK_15', {
    label: 'Candle Marubozu Black|15',
    fieldName: 'Candle.Marubozu.Black|15',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_MARUBOZU_BLACK_1M: new BaseField('CANDLE_MARUBOZU_BLACK_1M', {
    label: 'Candle Marubozu Black|1M',
    fieldName: 'Candle.Marubozu.Black|1M',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_MARUBOZU_BLACK_1W: new BaseField('CANDLE_MARUBOZU_BLACK_1W', {
    label: 'Candle Marubozu Black|1W',
    fieldName: 'Candle.Marubozu.Black|1W',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_MARUBOZU_BLACK_240: new BaseField('CANDLE_MARUBOZU_BLACK_240', {
    label: 'Candle Marubozu Black|240',
    fieldName: 'Candle.Marubozu.Black|240',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_MARUBOZU_BLACK_30: new BaseField('CANDLE_MARUBOZU_BLACK_30', {
    label: 'Candle Marubozu Black|30',
    fieldName: 'Candle.Marubozu.Black|30',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_MARUBOZU_BLACK_5: new BaseField('CANDLE_MARUBOZU_BLACK_5', {
    label: 'Candle Marubozu Black|5',
    fieldName: 'Candle.Marubozu.Black|5',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_MARUBOZU_BLACK_60: new BaseField('CANDLE_MARUBOZU_BLACK_60', {
    label: 'Candle Marubozu Black|60',
    fieldName: 'Candle.Marubozu.Black|60',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_MARUBOZU_WHITE: new BaseField('CANDLE_MARUBOZU_WHITE', {
    label: 'Candle.Marubozu.White',
    fieldName: 'Candle.Marubozu.White',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_MARUBOZU_WHITE_1: new BaseField('CANDLE_MARUBOZU_WHITE_1', {
    label: 'Candle Marubozu White|1',
    fieldName: 'Candle.Marubozu.White|1',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_MARUBOZU_WHITE_120: new BaseField('CANDLE_MARUBOZU_WHITE_120', {
    label: 'Candle Marubozu White|120',
    fieldName: 'Candle.Marubozu.White|120',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_MARUBOZU_WHITE_15: new BaseField('CANDLE_MARUBOZU_WHITE_15', {
    label: 'Candle Marubozu White|15',
    fieldName: 'Candle.Marubozu.White|15',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_MARUBOZU_WHITE_1M: new BaseField('CANDLE_MARUBOZU_WHITE_1M', {
    label: 'Candle Marubozu White|1M',
    fieldName: 'Candle.Marubozu.White|1M',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_MARUBOZU_WHITE_1W: new BaseField('CANDLE_MARUBOZU_WHITE_1W', {
    label: 'Candle Marubozu White|1W',
    fieldName: 'Candle.Marubozu.White|1W',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_MARUBOZU_WHITE_240: new BaseField('CANDLE_MARUBOZU_WHITE_240', {
    label: 'Candle Marubozu White|240',
    fieldName: 'Candle.Marubozu.White|240',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_MARUBOZU_WHITE_30: new BaseField('CANDLE_MARUBOZU_WHITE_30', {
    label: 'Candle Marubozu White|30',
    fieldName: 'Candle.Marubozu.White|30',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_MARUBOZU_WHITE_5: new BaseField('CANDLE_MARUBOZU_WHITE_5', {
    label: 'Candle Marubozu White|5',
    fieldName: 'Candle.Marubozu.White|5',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_MARUBOZU_WHITE_60: new BaseField('CANDLE_MARUBOZU_WHITE_60', {
    label: 'Candle Marubozu White|60',
    fieldName: 'Candle.Marubozu.White|60',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_TRISTAR_BEARISH: new BaseField('CANDLE_TRISTAR_BEARISH', {
    label: 'Candle.TriStar.Bearish',
    fieldName: 'Candle.TriStar.Bearish',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_TRISTAR_BEARISH_1: new BaseField('CANDLE_TRISTAR_BEARISH_1', {
    label: 'Candle Tristar Bearish|1',
    fieldName: 'Candle.TriStar.Bearish|1',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_TRISTAR_BEARISH_120: new BaseField('CANDLE_TRISTAR_BEARISH_120', {
    label: 'Candle Tristar Bearish|120',
    fieldName: 'Candle.TriStar.Bearish|120',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_TRISTAR_BEARISH_15: new BaseField('CANDLE_TRISTAR_BEARISH_15', {
    label: 'Candle Tristar Bearish|15',
    fieldName: 'Candle.TriStar.Bearish|15',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_TRISTAR_BEARISH_1M: new BaseField('CANDLE_TRISTAR_BEARISH_1M', {
    label: 'Candle Tristar Bearish|1M',
    fieldName: 'Candle.TriStar.Bearish|1M',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_TRISTAR_BEARISH_1W: new BaseField('CANDLE_TRISTAR_BEARISH_1W', {
    label: 'Candle Tristar Bearish|1W',
    fieldName: 'Candle.TriStar.Bearish|1W',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_TRISTAR_BEARISH_240: new BaseField('CANDLE_TRISTAR_BEARISH_240', {
    label: 'Candle Tristar Bearish|240',
    fieldName: 'Candle.TriStar.Bearish|240',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_TRISTAR_BEARISH_30: new BaseField('CANDLE_TRISTAR_BEARISH_30', {
    label: 'Candle Tristar Bearish|30',
    fieldName: 'Candle.TriStar.Bearish|30',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_TRISTAR_BEARISH_5: new BaseField('CANDLE_TRISTAR_BEARISH_5', {
    label: 'Candle Tristar Bearish|5',
    fieldName: 'Candle.TriStar.Bearish|5',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_TRISTAR_BEARISH_60: new BaseField('CANDLE_TRISTAR_BEARISH_60', {
    label: 'Candle Tristar Bearish|60',
    fieldName: 'Candle.TriStar.Bearish|60',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_TRISTAR_BULLISH: new BaseField('CANDLE_TRISTAR_BULLISH', {
    label: 'Candle.TriStar.Bullish',
    fieldName: 'Candle.TriStar.Bullish',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_TRISTAR_BULLISH_1: new BaseField('CANDLE_TRISTAR_BULLISH_1', {
    label: 'Candle Tristar Bullish|1',
    fieldName: 'Candle.TriStar.Bullish|1',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_TRISTAR_BULLISH_120: new BaseField('CANDLE_TRISTAR_BULLISH_120', {
    label: 'Candle Tristar Bullish|120',
    fieldName: 'Candle.TriStar.Bullish|120',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_TRISTAR_BULLISH_15: new BaseField('CANDLE_TRISTAR_BULLISH_15', {
    label: 'Candle Tristar Bullish|15',
    fieldName: 'Candle.TriStar.Bullish|15',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_TRISTAR_BULLISH_1M: new BaseField('CANDLE_TRISTAR_BULLISH_1M', {
    label: 'Candle Tristar Bullish|1M',
    fieldName: 'Candle.TriStar.Bullish|1M',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_TRISTAR_BULLISH_1W: new BaseField('CANDLE_TRISTAR_BULLISH_1W', {
    label: 'Candle Tristar Bullish|1W',
    fieldName: 'Candle.TriStar.Bullish|1W',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_TRISTAR_BULLISH_240: new BaseField('CANDLE_TRISTAR_BULLISH_240', {
    label: 'Candle Tristar Bullish|240',
    fieldName: 'Candle.TriStar.Bullish|240',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_TRISTAR_BULLISH_30: new BaseField('CANDLE_TRISTAR_BULLISH_30', {
    label: 'Candle Tristar Bullish|30',
    fieldName: 'Candle.TriStar.Bullish|30',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_TRISTAR_BULLISH_5: new BaseField('CANDLE_TRISTAR_BULLISH_5', {
    label: 'Candle Tristar Bullish|5',
    fieldName: 'Candle.TriStar.Bullish|5',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_TRISTAR_BULLISH_60: new BaseField('CANDLE_TRISTAR_BULLISH_60', {
    label: 'Candle Tristar Bullish|60',
    fieldName: 'Candle.TriStar.Bullish|60',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  PATTERN: new BaseField('PATTERN', {
    label: 'Pattern',
    fieldName: 'candlestick',
    format: 'missing',
    interval: true,
    historical: false,
  }),

  // === Pivot Points (310 fields) ===

  PIVOT_CAMARILLA_P: new BaseField('PIVOT_CAMARILLA_P', {
    label: 'Pivot Camarilla P',
    fieldName: 'Pivot.M.Camarilla.Middle',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_MIDDLE_1: new BaseField('PIVOT_M_CAMARILLA_MIDDLE_1', {
    label: 'Pivot M Camarilla Middle|1',
    fieldName: 'Pivot.M.Camarilla.Middle|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_MIDDLE_120: new BaseField('PIVOT_M_CAMARILLA_MIDDLE_120', {
    label: 'Pivot M Camarilla Middle|120',
    fieldName: 'Pivot.M.Camarilla.Middle|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_MIDDLE_15: new BaseField('PIVOT_M_CAMARILLA_MIDDLE_15', {
    label: 'Pivot M Camarilla Middle|15',
    fieldName: 'Pivot.M.Camarilla.Middle|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_MIDDLE_1M: new BaseField('PIVOT_M_CAMARILLA_MIDDLE_1M', {
    label: 'Pivot M Camarilla Middle|1M',
    fieldName: 'Pivot.M.Camarilla.Middle|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_MIDDLE_1W: new BaseField('PIVOT_M_CAMARILLA_MIDDLE_1W', {
    label: 'Pivot M Camarilla Middle|1W',
    fieldName: 'Pivot.M.Camarilla.Middle|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_MIDDLE_240: new BaseField('PIVOT_M_CAMARILLA_MIDDLE_240', {
    label: 'Pivot M Camarilla Middle|240',
    fieldName: 'Pivot.M.Camarilla.Middle|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_MIDDLE_30: new BaseField('PIVOT_M_CAMARILLA_MIDDLE_30', {
    label: 'Pivot M Camarilla Middle|30',
    fieldName: 'Pivot.M.Camarilla.Middle|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_MIDDLE_5: new BaseField('PIVOT_M_CAMARILLA_MIDDLE_5', {
    label: 'Pivot M Camarilla Middle|5',
    fieldName: 'Pivot.M.Camarilla.Middle|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_MIDDLE_60: new BaseField('PIVOT_M_CAMARILLA_MIDDLE_60', {
    label: 'Pivot M Camarilla Middle|60',
    fieldName: 'Pivot.M.Camarilla.Middle|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_CAMARILLA_R1: new BaseField('PIVOT_CAMARILLA_R1', {
    label: 'Pivot Camarilla R1',
    fieldName: 'Pivot.M.Camarilla.R1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_R1_1: new BaseField('PIVOT_M_CAMARILLA_R1_1', {
    label: 'Pivot M Camarilla R1|1',
    fieldName: 'Pivot.M.Camarilla.R1|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_R1_120: new BaseField('PIVOT_M_CAMARILLA_R1_120', {
    label: 'Pivot M Camarilla R1|120',
    fieldName: 'Pivot.M.Camarilla.R1|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_R1_15: new BaseField('PIVOT_M_CAMARILLA_R1_15', {
    label: 'Pivot M Camarilla R1|15',
    fieldName: 'Pivot.M.Camarilla.R1|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_R1_1M: new BaseField('PIVOT_M_CAMARILLA_R1_1M', {
    label: 'Pivot M Camarilla R1|1M',
    fieldName: 'Pivot.M.Camarilla.R1|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_R1_1W: new BaseField('PIVOT_M_CAMARILLA_R1_1W', {
    label: 'Pivot M Camarilla R1|1W',
    fieldName: 'Pivot.M.Camarilla.R1|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_R1_240: new BaseField('PIVOT_M_CAMARILLA_R1_240', {
    label: 'Pivot M Camarilla R1|240',
    fieldName: 'Pivot.M.Camarilla.R1|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_R1_30: new BaseField('PIVOT_M_CAMARILLA_R1_30', {
    label: 'Pivot M Camarilla R1|30',
    fieldName: 'Pivot.M.Camarilla.R1|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_R1_5: new BaseField('PIVOT_M_CAMARILLA_R1_5', {
    label: 'Pivot M Camarilla R1|5',
    fieldName: 'Pivot.M.Camarilla.R1|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_R1_60: new BaseField('PIVOT_M_CAMARILLA_R1_60', {
    label: 'Pivot M Camarilla R1|60',
    fieldName: 'Pivot.M.Camarilla.R1|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_CAMARILLA_R2: new BaseField('PIVOT_CAMARILLA_R2', {
    label: 'Pivot Camarilla R2',
    fieldName: 'Pivot.M.Camarilla.R2',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_R2_1: new BaseField('PIVOT_M_CAMARILLA_R2_1', {
    label: 'Pivot M Camarilla R2|1',
    fieldName: 'Pivot.M.Camarilla.R2|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_R2_120: new BaseField('PIVOT_M_CAMARILLA_R2_120', {
    label: 'Pivot M Camarilla R2|120',
    fieldName: 'Pivot.M.Camarilla.R2|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_R2_15: new BaseField('PIVOT_M_CAMARILLA_R2_15', {
    label: 'Pivot M Camarilla R2|15',
    fieldName: 'Pivot.M.Camarilla.R2|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_R2_1M: new BaseField('PIVOT_M_CAMARILLA_R2_1M', {
    label: 'Pivot M Camarilla R2|1M',
    fieldName: 'Pivot.M.Camarilla.R2|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_R2_1W: new BaseField('PIVOT_M_CAMARILLA_R2_1W', {
    label: 'Pivot M Camarilla R2|1W',
    fieldName: 'Pivot.M.Camarilla.R2|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_R2_240: new BaseField('PIVOT_M_CAMARILLA_R2_240', {
    label: 'Pivot M Camarilla R2|240',
    fieldName: 'Pivot.M.Camarilla.R2|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_R2_30: new BaseField('PIVOT_M_CAMARILLA_R2_30', {
    label: 'Pivot M Camarilla R2|30',
    fieldName: 'Pivot.M.Camarilla.R2|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_R2_5: new BaseField('PIVOT_M_CAMARILLA_R2_5', {
    label: 'Pivot M Camarilla R2|5',
    fieldName: 'Pivot.M.Camarilla.R2|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_R2_60: new BaseField('PIVOT_M_CAMARILLA_R2_60', {
    label: 'Pivot M Camarilla R2|60',
    fieldName: 'Pivot.M.Camarilla.R2|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_CAMARILLA_R3: new BaseField('PIVOT_CAMARILLA_R3', {
    label: 'Pivot Camarilla R3',
    fieldName: 'Pivot.M.Camarilla.R3',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_R3_1: new BaseField('PIVOT_M_CAMARILLA_R3_1', {
    label: 'Pivot M Camarilla R3|1',
    fieldName: 'Pivot.M.Camarilla.R3|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_R3_120: new BaseField('PIVOT_M_CAMARILLA_R3_120', {
    label: 'Pivot M Camarilla R3|120',
    fieldName: 'Pivot.M.Camarilla.R3|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_R3_15: new BaseField('PIVOT_M_CAMARILLA_R3_15', {
    label: 'Pivot M Camarilla R3|15',
    fieldName: 'Pivot.M.Camarilla.R3|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_R3_1M: new BaseField('PIVOT_M_CAMARILLA_R3_1M', {
    label: 'Pivot M Camarilla R3|1M',
    fieldName: 'Pivot.M.Camarilla.R3|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_R3_1W: new BaseField('PIVOT_M_CAMARILLA_R3_1W', {
    label: 'Pivot M Camarilla R3|1W',
    fieldName: 'Pivot.M.Camarilla.R3|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_R3_240: new BaseField('PIVOT_M_CAMARILLA_R3_240', {
    label: 'Pivot M Camarilla R3|240',
    fieldName: 'Pivot.M.Camarilla.R3|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_R3_30: new BaseField('PIVOT_M_CAMARILLA_R3_30', {
    label: 'Pivot M Camarilla R3|30',
    fieldName: 'Pivot.M.Camarilla.R3|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_R3_5: new BaseField('PIVOT_M_CAMARILLA_R3_5', {
    label: 'Pivot M Camarilla R3|5',
    fieldName: 'Pivot.M.Camarilla.R3|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_R3_60: new BaseField('PIVOT_M_CAMARILLA_R3_60', {
    label: 'Pivot M Camarilla R3|60',
    fieldName: 'Pivot.M.Camarilla.R3|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_CAMARILLA_S1: new BaseField('PIVOT_CAMARILLA_S1', {
    label: 'Pivot Camarilla S1',
    fieldName: 'Pivot.M.Camarilla.S1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_S1_1: new BaseField('PIVOT_M_CAMARILLA_S1_1', {
    label: 'Pivot M Camarilla S1|1',
    fieldName: 'Pivot.M.Camarilla.S1|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_S1_120: new BaseField('PIVOT_M_CAMARILLA_S1_120', {
    label: 'Pivot M Camarilla S1|120',
    fieldName: 'Pivot.M.Camarilla.S1|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_S1_15: new BaseField('PIVOT_M_CAMARILLA_S1_15', {
    label: 'Pivot M Camarilla S1|15',
    fieldName: 'Pivot.M.Camarilla.S1|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_S1_1M: new BaseField('PIVOT_M_CAMARILLA_S1_1M', {
    label: 'Pivot M Camarilla S1|1M',
    fieldName: 'Pivot.M.Camarilla.S1|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_S1_1W: new BaseField('PIVOT_M_CAMARILLA_S1_1W', {
    label: 'Pivot M Camarilla S1|1W',
    fieldName: 'Pivot.M.Camarilla.S1|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_S1_240: new BaseField('PIVOT_M_CAMARILLA_S1_240', {
    label: 'Pivot M Camarilla S1|240',
    fieldName: 'Pivot.M.Camarilla.S1|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_S1_30: new BaseField('PIVOT_M_CAMARILLA_S1_30', {
    label: 'Pivot M Camarilla S1|30',
    fieldName: 'Pivot.M.Camarilla.S1|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_S1_5: new BaseField('PIVOT_M_CAMARILLA_S1_5', {
    label: 'Pivot M Camarilla S1|5',
    fieldName: 'Pivot.M.Camarilla.S1|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_S1_60: new BaseField('PIVOT_M_CAMARILLA_S1_60', {
    label: 'Pivot M Camarilla S1|60',
    fieldName: 'Pivot.M.Camarilla.S1|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_CAMARILLA_S2: new BaseField('PIVOT_CAMARILLA_S2', {
    label: 'Pivot Camarilla S2',
    fieldName: 'Pivot.M.Camarilla.S2',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_S2_1: new BaseField('PIVOT_M_CAMARILLA_S2_1', {
    label: 'Pivot M Camarilla S2|1',
    fieldName: 'Pivot.M.Camarilla.S2|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_S2_120: new BaseField('PIVOT_M_CAMARILLA_S2_120', {
    label: 'Pivot M Camarilla S2|120',
    fieldName: 'Pivot.M.Camarilla.S2|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_S2_15: new BaseField('PIVOT_M_CAMARILLA_S2_15', {
    label: 'Pivot M Camarilla S2|15',
    fieldName: 'Pivot.M.Camarilla.S2|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_S2_1M: new BaseField('PIVOT_M_CAMARILLA_S2_1M', {
    label: 'Pivot M Camarilla S2|1M',
    fieldName: 'Pivot.M.Camarilla.S2|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_S2_1W: new BaseField('PIVOT_M_CAMARILLA_S2_1W', {
    label: 'Pivot M Camarilla S2|1W',
    fieldName: 'Pivot.M.Camarilla.S2|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_S2_240: new BaseField('PIVOT_M_CAMARILLA_S2_240', {
    label: 'Pivot M Camarilla S2|240',
    fieldName: 'Pivot.M.Camarilla.S2|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_S2_30: new BaseField('PIVOT_M_CAMARILLA_S2_30', {
    label: 'Pivot M Camarilla S2|30',
    fieldName: 'Pivot.M.Camarilla.S2|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_S2_5: new BaseField('PIVOT_M_CAMARILLA_S2_5', {
    label: 'Pivot M Camarilla S2|5',
    fieldName: 'Pivot.M.Camarilla.S2|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_S2_60: new BaseField('PIVOT_M_CAMARILLA_S2_60', {
    label: 'Pivot M Camarilla S2|60',
    fieldName: 'Pivot.M.Camarilla.S2|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_CAMARILLA_S3: new BaseField('PIVOT_CAMARILLA_S3', {
    label: 'Pivot Camarilla S3',
    fieldName: 'Pivot.M.Camarilla.S3',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_S3_1: new BaseField('PIVOT_M_CAMARILLA_S3_1', {
    label: 'Pivot M Camarilla S3|1',
    fieldName: 'Pivot.M.Camarilla.S3|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_S3_120: new BaseField('PIVOT_M_CAMARILLA_S3_120', {
    label: 'Pivot M Camarilla S3|120',
    fieldName: 'Pivot.M.Camarilla.S3|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_S3_15: new BaseField('PIVOT_M_CAMARILLA_S3_15', {
    label: 'Pivot M Camarilla S3|15',
    fieldName: 'Pivot.M.Camarilla.S3|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_S3_1M: new BaseField('PIVOT_M_CAMARILLA_S3_1M', {
    label: 'Pivot M Camarilla S3|1M',
    fieldName: 'Pivot.M.Camarilla.S3|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_S3_1W: new BaseField('PIVOT_M_CAMARILLA_S3_1W', {
    label: 'Pivot M Camarilla S3|1W',
    fieldName: 'Pivot.M.Camarilla.S3|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_S3_240: new BaseField('PIVOT_M_CAMARILLA_S3_240', {
    label: 'Pivot M Camarilla S3|240',
    fieldName: 'Pivot.M.Camarilla.S3|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_S3_30: new BaseField('PIVOT_M_CAMARILLA_S3_30', {
    label: 'Pivot M Camarilla S3|30',
    fieldName: 'Pivot.M.Camarilla.S3|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_S3_5: new BaseField('PIVOT_M_CAMARILLA_S3_5', {
    label: 'Pivot M Camarilla S3|5',
    fieldName: 'Pivot.M.Camarilla.S3|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_S3_60: new BaseField('PIVOT_M_CAMARILLA_S3_60', {
    label: 'Pivot M Camarilla S3|60',
    fieldName: 'Pivot.M.Camarilla.S3|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_CLASSIC_P: new BaseField('PIVOT_CLASSIC_P', {
    label: 'Pivot Classic P',
    fieldName: 'Pivot.M.Classic.Middle',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_MIDDLE_1: new BaseField('PIVOT_M_CLASSIC_MIDDLE_1', {
    label: 'Pivot M Classic Middle|1',
    fieldName: 'Pivot.M.Classic.Middle|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_MIDDLE_120: new BaseField('PIVOT_M_CLASSIC_MIDDLE_120', {
    label: 'Pivot M Classic Middle|120',
    fieldName: 'Pivot.M.Classic.Middle|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_MIDDLE_15: new BaseField('PIVOT_M_CLASSIC_MIDDLE_15', {
    label: 'Pivot M Classic Middle|15',
    fieldName: 'Pivot.M.Classic.Middle|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_MIDDLE_1M: new BaseField('PIVOT_M_CLASSIC_MIDDLE_1M', {
    label: 'Pivot M Classic Middle|1M',
    fieldName: 'Pivot.M.Classic.Middle|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_MIDDLE_1W: new BaseField('PIVOT_M_CLASSIC_MIDDLE_1W', {
    label: 'Pivot M Classic Middle|1W',
    fieldName: 'Pivot.M.Classic.Middle|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_MIDDLE_240: new BaseField('PIVOT_M_CLASSIC_MIDDLE_240', {
    label: 'Pivot M Classic Middle|240',
    fieldName: 'Pivot.M.Classic.Middle|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_MIDDLE_30: new BaseField('PIVOT_M_CLASSIC_MIDDLE_30', {
    label: 'Pivot M Classic Middle|30',
    fieldName: 'Pivot.M.Classic.Middle|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_MIDDLE_5: new BaseField('PIVOT_M_CLASSIC_MIDDLE_5', {
    label: 'Pivot M Classic Middle|5',
    fieldName: 'Pivot.M.Classic.Middle|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_MIDDLE_60: new BaseField('PIVOT_M_CLASSIC_MIDDLE_60', {
    label: 'Pivot M Classic Middle|60',
    fieldName: 'Pivot.M.Classic.Middle|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_CLASSIC_R1: new BaseField('PIVOT_CLASSIC_R1', {
    label: 'Pivot Classic R1',
    fieldName: 'Pivot.M.Classic.R1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_R1_1: new BaseField('PIVOT_M_CLASSIC_R1_1', {
    label: 'Pivot M Classic R1|1',
    fieldName: 'Pivot.M.Classic.R1|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_R1_120: new BaseField('PIVOT_M_CLASSIC_R1_120', {
    label: 'Pivot M Classic R1|120',
    fieldName: 'Pivot.M.Classic.R1|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_R1_15: new BaseField('PIVOT_M_CLASSIC_R1_15', {
    label: 'Pivot M Classic R1|15',
    fieldName: 'Pivot.M.Classic.R1|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_R1_1M: new BaseField('PIVOT_M_CLASSIC_R1_1M', {
    label: 'Pivot M Classic R1|1M',
    fieldName: 'Pivot.M.Classic.R1|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_R1_1W: new BaseField('PIVOT_M_CLASSIC_R1_1W', {
    label: 'Pivot M Classic R1|1W',
    fieldName: 'Pivot.M.Classic.R1|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_R1_240: new BaseField('PIVOT_M_CLASSIC_R1_240', {
    label: 'Pivot M Classic R1|240',
    fieldName: 'Pivot.M.Classic.R1|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_R1_30: new BaseField('PIVOT_M_CLASSIC_R1_30', {
    label: 'Pivot M Classic R1|30',
    fieldName: 'Pivot.M.Classic.R1|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_R1_5: new BaseField('PIVOT_M_CLASSIC_R1_5', {
    label: 'Pivot M Classic R1|5',
    fieldName: 'Pivot.M.Classic.R1|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_R1_60: new BaseField('PIVOT_M_CLASSIC_R1_60', {
    label: 'Pivot M Classic R1|60',
    fieldName: 'Pivot.M.Classic.R1|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_CLASSIC_R2: new BaseField('PIVOT_CLASSIC_R2', {
    label: 'Pivot Classic R2',
    fieldName: 'Pivot.M.Classic.R2',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_R2_1: new BaseField('PIVOT_M_CLASSIC_R2_1', {
    label: 'Pivot M Classic R2|1',
    fieldName: 'Pivot.M.Classic.R2|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_R2_120: new BaseField('PIVOT_M_CLASSIC_R2_120', {
    label: 'Pivot M Classic R2|120',
    fieldName: 'Pivot.M.Classic.R2|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_R2_15: new BaseField('PIVOT_M_CLASSIC_R2_15', {
    label: 'Pivot M Classic R2|15',
    fieldName: 'Pivot.M.Classic.R2|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_R2_1M: new BaseField('PIVOT_M_CLASSIC_R2_1M', {
    label: 'Pivot M Classic R2|1M',
    fieldName: 'Pivot.M.Classic.R2|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_R2_1W: new BaseField('PIVOT_M_CLASSIC_R2_1W', {
    label: 'Pivot M Classic R2|1W',
    fieldName: 'Pivot.M.Classic.R2|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_R2_240: new BaseField('PIVOT_M_CLASSIC_R2_240', {
    label: 'Pivot M Classic R2|240',
    fieldName: 'Pivot.M.Classic.R2|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_R2_30: new BaseField('PIVOT_M_CLASSIC_R2_30', {
    label: 'Pivot M Classic R2|30',
    fieldName: 'Pivot.M.Classic.R2|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_R2_5: new BaseField('PIVOT_M_CLASSIC_R2_5', {
    label: 'Pivot M Classic R2|5',
    fieldName: 'Pivot.M.Classic.R2|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_R2_60: new BaseField('PIVOT_M_CLASSIC_R2_60', {
    label: 'Pivot M Classic R2|60',
    fieldName: 'Pivot.M.Classic.R2|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_CLASSIC_R3: new BaseField('PIVOT_CLASSIC_R3', {
    label: 'Pivot Classic R3',
    fieldName: 'Pivot.M.Classic.R3',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_R3_1: new BaseField('PIVOT_M_CLASSIC_R3_1', {
    label: 'Pivot M Classic R3|1',
    fieldName: 'Pivot.M.Classic.R3|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_R3_120: new BaseField('PIVOT_M_CLASSIC_R3_120', {
    label: 'Pivot M Classic R3|120',
    fieldName: 'Pivot.M.Classic.R3|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_R3_15: new BaseField('PIVOT_M_CLASSIC_R3_15', {
    label: 'Pivot M Classic R3|15',
    fieldName: 'Pivot.M.Classic.R3|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_R3_1M: new BaseField('PIVOT_M_CLASSIC_R3_1M', {
    label: 'Pivot M Classic R3|1M',
    fieldName: 'Pivot.M.Classic.R3|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_R3_1W: new BaseField('PIVOT_M_CLASSIC_R3_1W', {
    label: 'Pivot M Classic R3|1W',
    fieldName: 'Pivot.M.Classic.R3|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_R3_240: new BaseField('PIVOT_M_CLASSIC_R3_240', {
    label: 'Pivot M Classic R3|240',
    fieldName: 'Pivot.M.Classic.R3|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_R3_30: new BaseField('PIVOT_M_CLASSIC_R3_30', {
    label: 'Pivot M Classic R3|30',
    fieldName: 'Pivot.M.Classic.R3|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_R3_5: new BaseField('PIVOT_M_CLASSIC_R3_5', {
    label: 'Pivot M Classic R3|5',
    fieldName: 'Pivot.M.Classic.R3|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_R3_60: new BaseField('PIVOT_M_CLASSIC_R3_60', {
    label: 'Pivot M Classic R3|60',
    fieldName: 'Pivot.M.Classic.R3|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_CLASSIC_S1: new BaseField('PIVOT_CLASSIC_S1', {
    label: 'Pivot Classic S1',
    fieldName: 'Pivot.M.Classic.S1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_S1_1: new BaseField('PIVOT_M_CLASSIC_S1_1', {
    label: 'Pivot M Classic S1|1',
    fieldName: 'Pivot.M.Classic.S1|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_S1_120: new BaseField('PIVOT_M_CLASSIC_S1_120', {
    label: 'Pivot M Classic S1|120',
    fieldName: 'Pivot.M.Classic.S1|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_S1_15: new BaseField('PIVOT_M_CLASSIC_S1_15', {
    label: 'Pivot M Classic S1|15',
    fieldName: 'Pivot.M.Classic.S1|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_S1_1M: new BaseField('PIVOT_M_CLASSIC_S1_1M', {
    label: 'Pivot M Classic S1|1M',
    fieldName: 'Pivot.M.Classic.S1|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_S1_1W: new BaseField('PIVOT_M_CLASSIC_S1_1W', {
    label: 'Pivot M Classic S1|1W',
    fieldName: 'Pivot.M.Classic.S1|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_S1_240: new BaseField('PIVOT_M_CLASSIC_S1_240', {
    label: 'Pivot M Classic S1|240',
    fieldName: 'Pivot.M.Classic.S1|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_S1_30: new BaseField('PIVOT_M_CLASSIC_S1_30', {
    label: 'Pivot M Classic S1|30',
    fieldName: 'Pivot.M.Classic.S1|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_S1_5: new BaseField('PIVOT_M_CLASSIC_S1_5', {
    label: 'Pivot M Classic S1|5',
    fieldName: 'Pivot.M.Classic.S1|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_S1_60: new BaseField('PIVOT_M_CLASSIC_S1_60', {
    label: 'Pivot M Classic S1|60',
    fieldName: 'Pivot.M.Classic.S1|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_CLASSIC_S2: new BaseField('PIVOT_CLASSIC_S2', {
    label: 'Pivot Classic S2',
    fieldName: 'Pivot.M.Classic.S2',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_S2_1: new BaseField('PIVOT_M_CLASSIC_S2_1', {
    label: 'Pivot M Classic S2|1',
    fieldName: 'Pivot.M.Classic.S2|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_S2_120: new BaseField('PIVOT_M_CLASSIC_S2_120', {
    label: 'Pivot M Classic S2|120',
    fieldName: 'Pivot.M.Classic.S2|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_S2_15: new BaseField('PIVOT_M_CLASSIC_S2_15', {
    label: 'Pivot M Classic S2|15',
    fieldName: 'Pivot.M.Classic.S2|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_S2_1M: new BaseField('PIVOT_M_CLASSIC_S2_1M', {
    label: 'Pivot M Classic S2|1M',
    fieldName: 'Pivot.M.Classic.S2|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_S2_1W: new BaseField('PIVOT_M_CLASSIC_S2_1W', {
    label: 'Pivot M Classic S2|1W',
    fieldName: 'Pivot.M.Classic.S2|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_S2_240: new BaseField('PIVOT_M_CLASSIC_S2_240', {
    label: 'Pivot M Classic S2|240',
    fieldName: 'Pivot.M.Classic.S2|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_S2_30: new BaseField('PIVOT_M_CLASSIC_S2_30', {
    label: 'Pivot M Classic S2|30',
    fieldName: 'Pivot.M.Classic.S2|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_S2_5: new BaseField('PIVOT_M_CLASSIC_S2_5', {
    label: 'Pivot M Classic S2|5',
    fieldName: 'Pivot.M.Classic.S2|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_S2_60: new BaseField('PIVOT_M_CLASSIC_S2_60', {
    label: 'Pivot M Classic S2|60',
    fieldName: 'Pivot.M.Classic.S2|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_CLASSIC_S3: new BaseField('PIVOT_CLASSIC_S3', {
    label: 'Pivot Classic S3',
    fieldName: 'Pivot.M.Classic.S3',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_S3_1: new BaseField('PIVOT_M_CLASSIC_S3_1', {
    label: 'Pivot M Classic S3|1',
    fieldName: 'Pivot.M.Classic.S3|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_S3_120: new BaseField('PIVOT_M_CLASSIC_S3_120', {
    label: 'Pivot M Classic S3|120',
    fieldName: 'Pivot.M.Classic.S3|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_S3_15: new BaseField('PIVOT_M_CLASSIC_S3_15', {
    label: 'Pivot M Classic S3|15',
    fieldName: 'Pivot.M.Classic.S3|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_S3_1M: new BaseField('PIVOT_M_CLASSIC_S3_1M', {
    label: 'Pivot M Classic S3|1M',
    fieldName: 'Pivot.M.Classic.S3|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_S3_1W: new BaseField('PIVOT_M_CLASSIC_S3_1W', {
    label: 'Pivot M Classic S3|1W',
    fieldName: 'Pivot.M.Classic.S3|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_S3_240: new BaseField('PIVOT_M_CLASSIC_S3_240', {
    label: 'Pivot M Classic S3|240',
    fieldName: 'Pivot.M.Classic.S3|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_S3_30: new BaseField('PIVOT_M_CLASSIC_S3_30', {
    label: 'Pivot M Classic S3|30',
    fieldName: 'Pivot.M.Classic.S3|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_S3_5: new BaseField('PIVOT_M_CLASSIC_S3_5', {
    label: 'Pivot M Classic S3|5',
    fieldName: 'Pivot.M.Classic.S3|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_S3_60: new BaseField('PIVOT_M_CLASSIC_S3_60', {
    label: 'Pivot M Classic S3|60',
    fieldName: 'Pivot.M.Classic.S3|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_DM_P: new BaseField('PIVOT_DM_P', {
    label: 'Pivot DM P',
    fieldName: 'Pivot.M.Demark.Middle',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_DEMARK_MIDDLE_1: new BaseField('PIVOT_M_DEMARK_MIDDLE_1', {
    label: 'Pivot M Demark Middle|1',
    fieldName: 'Pivot.M.Demark.Middle|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_DEMARK_MIDDLE_120: new BaseField('PIVOT_M_DEMARK_MIDDLE_120', {
    label: 'Pivot M Demark Middle|120',
    fieldName: 'Pivot.M.Demark.Middle|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_DEMARK_MIDDLE_15: new BaseField('PIVOT_M_DEMARK_MIDDLE_15', {
    label: 'Pivot M Demark Middle|15',
    fieldName: 'Pivot.M.Demark.Middle|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_DEMARK_MIDDLE_1M: new BaseField('PIVOT_M_DEMARK_MIDDLE_1M', {
    label: 'Pivot M Demark Middle|1M',
    fieldName: 'Pivot.M.Demark.Middle|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_DEMARK_MIDDLE_1W: new BaseField('PIVOT_M_DEMARK_MIDDLE_1W', {
    label: 'Pivot M Demark Middle|1W',
    fieldName: 'Pivot.M.Demark.Middle|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_DEMARK_MIDDLE_240: new BaseField('PIVOT_M_DEMARK_MIDDLE_240', {
    label: 'Pivot M Demark Middle|240',
    fieldName: 'Pivot.M.Demark.Middle|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_DEMARK_MIDDLE_30: new BaseField('PIVOT_M_DEMARK_MIDDLE_30', {
    label: 'Pivot M Demark Middle|30',
    fieldName: 'Pivot.M.Demark.Middle|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_DEMARK_MIDDLE_5: new BaseField('PIVOT_M_DEMARK_MIDDLE_5', {
    label: 'Pivot M Demark Middle|5',
    fieldName: 'Pivot.M.Demark.Middle|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_DEMARK_MIDDLE_60: new BaseField('PIVOT_M_DEMARK_MIDDLE_60', {
    label: 'Pivot M Demark Middle|60',
    fieldName: 'Pivot.M.Demark.Middle|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_DM_R1: new BaseField('PIVOT_DM_R1', {
    label: 'Pivot DM R1',
    fieldName: 'Pivot.M.Demark.R1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_DEMARK_R1_1: new BaseField('PIVOT_M_DEMARK_R1_1', {
    label: 'Pivot M Demark R1|1',
    fieldName: 'Pivot.M.Demark.R1|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_DEMARK_R1_120: new BaseField('PIVOT_M_DEMARK_R1_120', {
    label: 'Pivot M Demark R1|120',
    fieldName: 'Pivot.M.Demark.R1|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_DEMARK_R1_15: new BaseField('PIVOT_M_DEMARK_R1_15', {
    label: 'Pivot M Demark R1|15',
    fieldName: 'Pivot.M.Demark.R1|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_DEMARK_R1_1M: new BaseField('PIVOT_M_DEMARK_R1_1M', {
    label: 'Pivot M Demark R1|1M',
    fieldName: 'Pivot.M.Demark.R1|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_DEMARK_R1_1W: new BaseField('PIVOT_M_DEMARK_R1_1W', {
    label: 'Pivot M Demark R1|1W',
    fieldName: 'Pivot.M.Demark.R1|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_DEMARK_R1_240: new BaseField('PIVOT_M_DEMARK_R1_240', {
    label: 'Pivot M Demark R1|240',
    fieldName: 'Pivot.M.Demark.R1|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_DEMARK_R1_30: new BaseField('PIVOT_M_DEMARK_R1_30', {
    label: 'Pivot M Demark R1|30',
    fieldName: 'Pivot.M.Demark.R1|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_DEMARK_R1_5: new BaseField('PIVOT_M_DEMARK_R1_5', {
    label: 'Pivot M Demark R1|5',
    fieldName: 'Pivot.M.Demark.R1|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_DEMARK_R1_60: new BaseField('PIVOT_M_DEMARK_R1_60', {
    label: 'Pivot M Demark R1|60',
    fieldName: 'Pivot.M.Demark.R1|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_DM_S1: new BaseField('PIVOT_DM_S1', {
    label: 'Pivot DM S1',
    fieldName: 'Pivot.M.Demark.S1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_DEMARK_S1_1: new BaseField('PIVOT_M_DEMARK_S1_1', {
    label: 'Pivot M Demark S1|1',
    fieldName: 'Pivot.M.Demark.S1|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_DEMARK_S1_120: new BaseField('PIVOT_M_DEMARK_S1_120', {
    label: 'Pivot M Demark S1|120',
    fieldName: 'Pivot.M.Demark.S1|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_DEMARK_S1_15: new BaseField('PIVOT_M_DEMARK_S1_15', {
    label: 'Pivot M Demark S1|15',
    fieldName: 'Pivot.M.Demark.S1|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_DEMARK_S1_1M: new BaseField('PIVOT_M_DEMARK_S1_1M', {
    label: 'Pivot M Demark S1|1M',
    fieldName: 'Pivot.M.Demark.S1|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_DEMARK_S1_1W: new BaseField('PIVOT_M_DEMARK_S1_1W', {
    label: 'Pivot M Demark S1|1W',
    fieldName: 'Pivot.M.Demark.S1|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_DEMARK_S1_240: new BaseField('PIVOT_M_DEMARK_S1_240', {
    label: 'Pivot M Demark S1|240',
    fieldName: 'Pivot.M.Demark.S1|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_DEMARK_S1_30: new BaseField('PIVOT_M_DEMARK_S1_30', {
    label: 'Pivot M Demark S1|30',
    fieldName: 'Pivot.M.Demark.S1|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_DEMARK_S1_5: new BaseField('PIVOT_M_DEMARK_S1_5', {
    label: 'Pivot M Demark S1|5',
    fieldName: 'Pivot.M.Demark.S1|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_DEMARK_S1_60: new BaseField('PIVOT_M_DEMARK_S1_60', {
    label: 'Pivot M Demark S1|60',
    fieldName: 'Pivot.M.Demark.S1|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_FIBONACCI_P: new BaseField('PIVOT_FIBONACCI_P', {
    label: 'Pivot Fibonacci P',
    fieldName: 'Pivot.M.Fibonacci.Middle',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_FIBONACCI_MIDDLE_1: new BaseField('PIVOT_M_FIBONACCI_MIDDLE_1', {
    label: 'Pivot M Fibonacci Middle|1',
    fieldName: 'Pivot.M.Fibonacci.Middle|1',
    format: 'float',
    interval: true,
    historical: true,
  }),

  PIVOT_M_FIBONACCI_MIDDLE_120: new BaseField('PIVOT_M_FIBONACCI_MIDDLE_120', {
    label: 'Pivot M Fibonacci Middle|120',
    fieldName: 'Pivot.M.Fibonacci.Middle|120',
    format: 'float',
    interval: true,
    historical: true,
  }),

  PIVOT_M_FIBONACCI_MIDDLE_15: new BaseField('PIVOT_M_FIBONACCI_MIDDLE_15', {
    label: 'Pivot M Fibonacci Middle|15',
    fieldName: 'Pivot.M.Fibonacci.Middle|15',
    format: 'float',
    interval: true,
    historical: true,
  }),

  PIVOT_M_FIBONACCI_MIDDLE_1M: new BaseField('PIVOT_M_FIBONACCI_MIDDLE_1M', {
    label: 'Pivot M Fibonacci Middle|1M',
    fieldName: 'Pivot.M.Fibonacci.Middle|1M',
    format: 'float',
    interval: true,
    historical: true,
  }),

  PIVOT_M_FIBONACCI_MIDDLE_1W: new BaseField('PIVOT_M_FIBONACCI_MIDDLE_1W', {
    label: 'Pivot M Fibonacci Middle|1W',
    fieldName: 'Pivot.M.Fibonacci.Middle|1W',
    format: 'float',
    interval: true,
    historical: true,
  }),

  PIVOT_M_FIBONACCI_MIDDLE_240: new BaseField('PIVOT_M_FIBONACCI_MIDDLE_240', {
    label: 'Pivot M Fibonacci Middle|240',
    fieldName: 'Pivot.M.Fibonacci.Middle|240',
    format: 'float',
    interval: true,
    historical: true,
  }),

  PIVOT_M_FIBONACCI_MIDDLE_30: new BaseField('PIVOT_M_FIBONACCI_MIDDLE_30', {
    label: 'Pivot M Fibonacci Middle|30',
    fieldName: 'Pivot.M.Fibonacci.Middle|30',
    format: 'float',
    interval: true,
    historical: true,
  }),

  PIVOT_M_FIBONACCI_MIDDLE_5: new BaseField('PIVOT_M_FIBONACCI_MIDDLE_5', {
    label: 'Pivot M Fibonacci Middle|5',
    fieldName: 'Pivot.M.Fibonacci.Middle|5',
    format: 'float',
    interval: true,
    historical: true,
  }),

  PIVOT_M_FIBONACCI_MIDDLE_60: new BaseField('PIVOT_M_FIBONACCI_MIDDLE_60', {
    label: 'Pivot M Fibonacci Middle|60',
    fieldName: 'Pivot.M.Fibonacci.Middle|60',
    format: 'float',
    interval: true,
    historical: true,
  }),

  PIVOT_FIBONACCI_R1: new BaseField('PIVOT_FIBONACCI_R1', {
    label: 'Pivot Fibonacci R1',
    fieldName: 'Pivot.M.Fibonacci.R1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_FIBONACCI_R1_1: new BaseField('PIVOT_M_FIBONACCI_R1_1', {
    label: 'Pivot M Fibonacci R1|1',
    fieldName: 'Pivot.M.Fibonacci.R1|1',
    format: 'float',
    interval: true,
    historical: true,
  }),

  PIVOT_M_FIBONACCI_R1_120: new BaseField('PIVOT_M_FIBONACCI_R1_120', {
    label: 'Pivot M Fibonacci R1|120',
    fieldName: 'Pivot.M.Fibonacci.R1|120',
    format: 'float',
    interval: true,
    historical: true,
  }),

  PIVOT_M_FIBONACCI_R1_15: new BaseField('PIVOT_M_FIBONACCI_R1_15', {
    label: 'Pivot M Fibonacci R1|15',
    fieldName: 'Pivot.M.Fibonacci.R1|15',
    format: 'float',
    interval: true,
    historical: true,
  }),

  PIVOT_M_FIBONACCI_R1_1M: new BaseField('PIVOT_M_FIBONACCI_R1_1M', {
    label: 'Pivot M Fibonacci R1|1M',
    fieldName: 'Pivot.M.Fibonacci.R1|1M',
    format: 'float',
    interval: true,
    historical: true,
  }),

  PIVOT_M_FIBONACCI_R1_1W: new BaseField('PIVOT_M_FIBONACCI_R1_1W', {
    label: 'Pivot M Fibonacci R1|1W',
    fieldName: 'Pivot.M.Fibonacci.R1|1W',
    format: 'float',
    interval: true,
    historical: true,
  }),

  PIVOT_M_FIBONACCI_R1_240: new BaseField('PIVOT_M_FIBONACCI_R1_240', {
    label: 'Pivot M Fibonacci R1|240',
    fieldName: 'Pivot.M.Fibonacci.R1|240',
    format: 'float',
    interval: true,
    historical: true,
  }),

  PIVOT_M_FIBONACCI_R1_30: new BaseField('PIVOT_M_FIBONACCI_R1_30', {
    label: 'Pivot M Fibonacci R1|30',
    fieldName: 'Pivot.M.Fibonacci.R1|30',
    format: 'float',
    interval: true,
    historical: true,
  }),

  PIVOT_M_FIBONACCI_R1_5: new BaseField('PIVOT_M_FIBONACCI_R1_5', {
    label: 'Pivot M Fibonacci R1|5',
    fieldName: 'Pivot.M.Fibonacci.R1|5',
    format: 'float',
    interval: true,
    historical: true,
  }),

  PIVOT_M_FIBONACCI_R1_60: new BaseField('PIVOT_M_FIBONACCI_R1_60', {
    label: 'Pivot M Fibonacci R1|60',
    fieldName: 'Pivot.M.Fibonacci.R1|60',
    format: 'float',
    interval: true,
    historical: true,
  }),

  PIVOT_FIBONACCI_R2: new BaseField('PIVOT_FIBONACCI_R2', {
    label: 'Pivot Fibonacci R2',
    fieldName: 'Pivot.M.Fibonacci.R2',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_FIBONACCI_R2_1: new BaseField('PIVOT_M_FIBONACCI_R2_1', {
    label: 'Pivot M Fibonacci R2|1',
    fieldName: 'Pivot.M.Fibonacci.R2|1',
    format: 'float',
    interval: true,
    historical: true,
  }),

  PIVOT_M_FIBONACCI_R2_120: new BaseField('PIVOT_M_FIBONACCI_R2_120', {
    label: 'Pivot M Fibonacci R2|120',
    fieldName: 'Pivot.M.Fibonacci.R2|120',
    format: 'float',
    interval: true,
    historical: true,
  }),

  PIVOT_M_FIBONACCI_R2_15: new BaseField('PIVOT_M_FIBONACCI_R2_15', {
    label: 'Pivot M Fibonacci R2|15',
    fieldName: 'Pivot.M.Fibonacci.R2|15',
    format: 'float',
    interval: true,
    historical: true,
  }),

  PIVOT_M_FIBONACCI_R2_1M: new BaseField('PIVOT_M_FIBONACCI_R2_1M', {
    label: 'Pivot M Fibonacci R2|1M',
    fieldName: 'Pivot.M.Fibonacci.R2|1M',
    format: 'float',
    interval: true,
    historical: true,
  }),

  PIVOT_M_FIBONACCI_R2_1W: new BaseField('PIVOT_M_FIBONACCI_R2_1W', {
    label: 'Pivot M Fibonacci R2|1W',
    fieldName: 'Pivot.M.Fibonacci.R2|1W',
    format: 'float',
    interval: true,
    historical: true,
  }),

  PIVOT_M_FIBONACCI_R2_240: new BaseField('PIVOT_M_FIBONACCI_R2_240', {
    label: 'Pivot M Fibonacci R2|240',
    fieldName: 'Pivot.M.Fibonacci.R2|240',
    format: 'float',
    interval: true,
    historical: true,
  }),

  PIVOT_M_FIBONACCI_R2_30: new BaseField('PIVOT_M_FIBONACCI_R2_30', {
    label: 'Pivot M Fibonacci R2|30',
    fieldName: 'Pivot.M.Fibonacci.R2|30',
    format: 'float',
    interval: true,
    historical: true,
  }),

  PIVOT_M_FIBONACCI_R2_5: new BaseField('PIVOT_M_FIBONACCI_R2_5', {
    label: 'Pivot M Fibonacci R2|5',
    fieldName: 'Pivot.M.Fibonacci.R2|5',
    format: 'float',
    interval: true,
    historical: true,
  }),

  PIVOT_M_FIBONACCI_R2_60: new BaseField('PIVOT_M_FIBONACCI_R2_60', {
    label: 'Pivot M Fibonacci R2|60',
    fieldName: 'Pivot.M.Fibonacci.R2|60',
    format: 'float',
    interval: true,
    historical: true,
  }),

  PIVOT_FIBONACCI_R3: new BaseField('PIVOT_FIBONACCI_R3', {
    label: 'Pivot Fibonacci R3',
    fieldName: 'Pivot.M.Fibonacci.R3',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_FIBONACCI_R3_1: new BaseField('PIVOT_M_FIBONACCI_R3_1', {
    label: 'Pivot M Fibonacci R3|1',
    fieldName: 'Pivot.M.Fibonacci.R3|1',
    format: 'float',
    interval: true,
    historical: true,
  }),

  PIVOT_M_FIBONACCI_R3_120: new BaseField('PIVOT_M_FIBONACCI_R3_120', {
    label: 'Pivot M Fibonacci R3|120',
    fieldName: 'Pivot.M.Fibonacci.R3|120',
    format: 'float',
    interval: true,
    historical: true,
  }),

  PIVOT_M_FIBONACCI_R3_15: new BaseField('PIVOT_M_FIBONACCI_R3_15', {
    label: 'Pivot M Fibonacci R3|15',
    fieldName: 'Pivot.M.Fibonacci.R3|15',
    format: 'float',
    interval: true,
    historical: true,
  }),

  PIVOT_M_FIBONACCI_R3_1M: new BaseField('PIVOT_M_FIBONACCI_R3_1M', {
    label: 'Pivot M Fibonacci R3|1M',
    fieldName: 'Pivot.M.Fibonacci.R3|1M',
    format: 'float',
    interval: true,
    historical: true,
  }),

  PIVOT_M_FIBONACCI_R3_1W: new BaseField('PIVOT_M_FIBONACCI_R3_1W', {
    label: 'Pivot M Fibonacci R3|1W',
    fieldName: 'Pivot.M.Fibonacci.R3|1W',
    format: 'float',
    interval: true,
    historical: true,
  }),

  PIVOT_M_FIBONACCI_R3_240: new BaseField('PIVOT_M_FIBONACCI_R3_240', {
    label: 'Pivot M Fibonacci R3|240',
    fieldName: 'Pivot.M.Fibonacci.R3|240',
    format: 'float',
    interval: true,
    historical: true,
  }),

  PIVOT_M_FIBONACCI_R3_30: new BaseField('PIVOT_M_FIBONACCI_R3_30', {
    label: 'Pivot M Fibonacci R3|30',
    fieldName: 'Pivot.M.Fibonacci.R3|30',
    format: 'float',
    interval: true,
    historical: true,
  }),

  PIVOT_M_FIBONACCI_R3_5: new BaseField('PIVOT_M_FIBONACCI_R3_5', {
    label: 'Pivot M Fibonacci R3|5',
    fieldName: 'Pivot.M.Fibonacci.R3|5',
    format: 'float',
    interval: true,
    historical: true,
  }),

  PIVOT_M_FIBONACCI_R3_60: new BaseField('PIVOT_M_FIBONACCI_R3_60', {
    label: 'Pivot M Fibonacci R3|60',
    fieldName: 'Pivot.M.Fibonacci.R3|60',
    format: 'float',
    interval: true,
    historical: true,
  }),

  PIVOT_FIBONACCI_S1: new BaseField('PIVOT_FIBONACCI_S1', {
    label: 'Pivot Fibonacci S1',
    fieldName: 'Pivot.M.Fibonacci.S1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_FIBONACCI_S1_1: new BaseField('PIVOT_M_FIBONACCI_S1_1', {
    label: 'Pivot M Fibonacci S1|1',
    fieldName: 'Pivot.M.Fibonacci.S1|1',
    format: 'float',
    interval: true,
    historical: true,
  }),

  PIVOT_M_FIBONACCI_S1_120: new BaseField('PIVOT_M_FIBONACCI_S1_120', {
    label: 'Pivot M Fibonacci S1|120',
    fieldName: 'Pivot.M.Fibonacci.S1|120',
    format: 'float',
    interval: true,
    historical: true,
  }),

  PIVOT_M_FIBONACCI_S1_15: new BaseField('PIVOT_M_FIBONACCI_S1_15', {
    label: 'Pivot M Fibonacci S1|15',
    fieldName: 'Pivot.M.Fibonacci.S1|15',
    format: 'float',
    interval: true,
    historical: true,
  }),

  PIVOT_M_FIBONACCI_S1_1M: new BaseField('PIVOT_M_FIBONACCI_S1_1M', {
    label: 'Pivot M Fibonacci S1|1M',
    fieldName: 'Pivot.M.Fibonacci.S1|1M',
    format: 'float',
    interval: true,
    historical: true,
  }),

  PIVOT_M_FIBONACCI_S1_1W: new BaseField('PIVOT_M_FIBONACCI_S1_1W', {
    label: 'Pivot M Fibonacci S1|1W',
    fieldName: 'Pivot.M.Fibonacci.S1|1W',
    format: 'float',
    interval: true,
    historical: true,
  }),

  PIVOT_M_FIBONACCI_S1_240: new BaseField('PIVOT_M_FIBONACCI_S1_240', {
    label: 'Pivot M Fibonacci S1|240',
    fieldName: 'Pivot.M.Fibonacci.S1|240',
    format: 'float',
    interval: true,
    historical: true,
  }),

  PIVOT_M_FIBONACCI_S1_30: new BaseField('PIVOT_M_FIBONACCI_S1_30', {
    label: 'Pivot M Fibonacci S1|30',
    fieldName: 'Pivot.M.Fibonacci.S1|30',
    format: 'float',
    interval: true,
    historical: true,
  }),

  PIVOT_M_FIBONACCI_S1_5: new BaseField('PIVOT_M_FIBONACCI_S1_5', {
    label: 'Pivot M Fibonacci S1|5',
    fieldName: 'Pivot.M.Fibonacci.S1|5',
    format: 'float',
    interval: true,
    historical: true,
  }),

  PIVOT_M_FIBONACCI_S1_60: new BaseField('PIVOT_M_FIBONACCI_S1_60', {
    label: 'Pivot M Fibonacci S1|60',
    fieldName: 'Pivot.M.Fibonacci.S1|60',
    format: 'float',
    interval: true,
    historical: true,
  }),

  PIVOT_FIBONACCI_S2: new BaseField('PIVOT_FIBONACCI_S2', {
    label: 'Pivot Fibonacci S2',
    fieldName: 'Pivot.M.Fibonacci.S2',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_FIBONACCI_S2_1: new BaseField('PIVOT_M_FIBONACCI_S2_1', {
    label: 'Pivot M Fibonacci S2|1',
    fieldName: 'Pivot.M.Fibonacci.S2|1',
    format: 'float',
    interval: true,
    historical: true,
  }),

  PIVOT_M_FIBONACCI_S2_120: new BaseField('PIVOT_M_FIBONACCI_S2_120', {
    label: 'Pivot M Fibonacci S2|120',
    fieldName: 'Pivot.M.Fibonacci.S2|120',
    format: 'float',
    interval: true,
    historical: true,
  }),

  PIVOT_M_FIBONACCI_S2_15: new BaseField('PIVOT_M_FIBONACCI_S2_15', {
    label: 'Pivot M Fibonacci S2|15',
    fieldName: 'Pivot.M.Fibonacci.S2|15',
    format: 'float',
    interval: true,
    historical: true,
  }),

  PIVOT_M_FIBONACCI_S2_1M: new BaseField('PIVOT_M_FIBONACCI_S2_1M', {
    label: 'Pivot M Fibonacci S2|1M',
    fieldName: 'Pivot.M.Fibonacci.S2|1M',
    format: 'float',
    interval: true,
    historical: true,
  }),

  PIVOT_M_FIBONACCI_S2_1W: new BaseField('PIVOT_M_FIBONACCI_S2_1W', {
    label: 'Pivot M Fibonacci S2|1W',
    fieldName: 'Pivot.M.Fibonacci.S2|1W',
    format: 'float',
    interval: true,
    historical: true,
  }),

  PIVOT_M_FIBONACCI_S2_240: new BaseField('PIVOT_M_FIBONACCI_S2_240', {
    label: 'Pivot M Fibonacci S2|240',
    fieldName: 'Pivot.M.Fibonacci.S2|240',
    format: 'float',
    interval: true,
    historical: true,
  }),

  PIVOT_M_FIBONACCI_S2_30: new BaseField('PIVOT_M_FIBONACCI_S2_30', {
    label: 'Pivot M Fibonacci S2|30',
    fieldName: 'Pivot.M.Fibonacci.S2|30',
    format: 'float',
    interval: true,
    historical: true,
  }),

  PIVOT_M_FIBONACCI_S2_5: new BaseField('PIVOT_M_FIBONACCI_S2_5', {
    label: 'Pivot M Fibonacci S2|5',
    fieldName: 'Pivot.M.Fibonacci.S2|5',
    format: 'float',
    interval: true,
    historical: true,
  }),

  PIVOT_M_FIBONACCI_S2_60: new BaseField('PIVOT_M_FIBONACCI_S2_60', {
    label: 'Pivot M Fibonacci S2|60',
    fieldName: 'Pivot.M.Fibonacci.S2|60',
    format: 'float',
    interval: true,
    historical: true,
  }),

  PIVOT_FIBONACCI_S3: new BaseField('PIVOT_FIBONACCI_S3', {
    label: 'Pivot Fibonacci S3',
    fieldName: 'Pivot.M.Fibonacci.S3',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_FIBONACCI_S3_1: new BaseField('PIVOT_M_FIBONACCI_S3_1', {
    label: 'Pivot M Fibonacci S3|1',
    fieldName: 'Pivot.M.Fibonacci.S3|1',
    format: 'float',
    interval: true,
    historical: true,
  }),

  PIVOT_M_FIBONACCI_S3_120: new BaseField('PIVOT_M_FIBONACCI_S3_120', {
    label: 'Pivot M Fibonacci S3|120',
    fieldName: 'Pivot.M.Fibonacci.S3|120',
    format: 'float',
    interval: true,
    historical: true,
  }),

  PIVOT_M_FIBONACCI_S3_15: new BaseField('PIVOT_M_FIBONACCI_S3_15', {
    label: 'Pivot M Fibonacci S3|15',
    fieldName: 'Pivot.M.Fibonacci.S3|15',
    format: 'float',
    interval: true,
    historical: true,
  }),

  PIVOT_M_FIBONACCI_S3_1M: new BaseField('PIVOT_M_FIBONACCI_S3_1M', {
    label: 'Pivot M Fibonacci S3|1M',
    fieldName: 'Pivot.M.Fibonacci.S3|1M',
    format: 'float',
    interval: true,
    historical: true,
  }),

  PIVOT_M_FIBONACCI_S3_1W: new BaseField('PIVOT_M_FIBONACCI_S3_1W', {
    label: 'Pivot M Fibonacci S3|1W',
    fieldName: 'Pivot.M.Fibonacci.S3|1W',
    format: 'float',
    interval: true,
    historical: true,
  }),

  PIVOT_M_FIBONACCI_S3_240: new BaseField('PIVOT_M_FIBONACCI_S3_240', {
    label: 'Pivot M Fibonacci S3|240',
    fieldName: 'Pivot.M.Fibonacci.S3|240',
    format: 'float',
    interval: true,
    historical: true,
  }),

  PIVOT_M_FIBONACCI_S3_30: new BaseField('PIVOT_M_FIBONACCI_S3_30', {
    label: 'Pivot M Fibonacci S3|30',
    fieldName: 'Pivot.M.Fibonacci.S3|30',
    format: 'float',
    interval: true,
    historical: true,
  }),

  PIVOT_M_FIBONACCI_S3_5: new BaseField('PIVOT_M_FIBONACCI_S3_5', {
    label: 'Pivot M Fibonacci S3|5',
    fieldName: 'Pivot.M.Fibonacci.S3|5',
    format: 'float',
    interval: true,
    historical: true,
  }),

  PIVOT_M_FIBONACCI_S3_60: new BaseField('PIVOT_M_FIBONACCI_S3_60', {
    label: 'Pivot M Fibonacci S3|60',
    fieldName: 'Pivot.M.Fibonacci.S3|60',
    format: 'float',
    interval: true,
    historical: true,
  }),

  PIVOT_WOODIE_P: new BaseField('PIVOT_WOODIE_P', {
    label: 'Pivot Woodie P',
    fieldName: 'Pivot.M.Woodie.Middle',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_MIDDLE_1: new BaseField('PIVOT_M_WOODIE_MIDDLE_1', {
    label: 'Pivot M Woodie Middle|1',
    fieldName: 'Pivot.M.Woodie.Middle|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_MIDDLE_120: new BaseField('PIVOT_M_WOODIE_MIDDLE_120', {
    label: 'Pivot M Woodie Middle|120',
    fieldName: 'Pivot.M.Woodie.Middle|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_MIDDLE_15: new BaseField('PIVOT_M_WOODIE_MIDDLE_15', {
    label: 'Pivot M Woodie Middle|15',
    fieldName: 'Pivot.M.Woodie.Middle|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_MIDDLE_1M: new BaseField('PIVOT_M_WOODIE_MIDDLE_1M', {
    label: 'Pivot M Woodie Middle|1M',
    fieldName: 'Pivot.M.Woodie.Middle|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_MIDDLE_1W: new BaseField('PIVOT_M_WOODIE_MIDDLE_1W', {
    label: 'Pivot M Woodie Middle|1W',
    fieldName: 'Pivot.M.Woodie.Middle|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_MIDDLE_240: new BaseField('PIVOT_M_WOODIE_MIDDLE_240', {
    label: 'Pivot M Woodie Middle|240',
    fieldName: 'Pivot.M.Woodie.Middle|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_MIDDLE_30: new BaseField('PIVOT_M_WOODIE_MIDDLE_30', {
    label: 'Pivot M Woodie Middle|30',
    fieldName: 'Pivot.M.Woodie.Middle|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_MIDDLE_5: new BaseField('PIVOT_M_WOODIE_MIDDLE_5', {
    label: 'Pivot M Woodie Middle|5',
    fieldName: 'Pivot.M.Woodie.Middle|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_MIDDLE_60: new BaseField('PIVOT_M_WOODIE_MIDDLE_60', {
    label: 'Pivot M Woodie Middle|60',
    fieldName: 'Pivot.M.Woodie.Middle|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_WOODIE_R1: new BaseField('PIVOT_WOODIE_R1', {
    label: 'Pivot Woodie R1',
    fieldName: 'Pivot.M.Woodie.R1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_R1_1: new BaseField('PIVOT_M_WOODIE_R1_1', {
    label: 'Pivot M Woodie R1|1',
    fieldName: 'Pivot.M.Woodie.R1|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_R1_120: new BaseField('PIVOT_M_WOODIE_R1_120', {
    label: 'Pivot M Woodie R1|120',
    fieldName: 'Pivot.M.Woodie.R1|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_R1_15: new BaseField('PIVOT_M_WOODIE_R1_15', {
    label: 'Pivot M Woodie R1|15',
    fieldName: 'Pivot.M.Woodie.R1|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_R1_1M: new BaseField('PIVOT_M_WOODIE_R1_1M', {
    label: 'Pivot M Woodie R1|1M',
    fieldName: 'Pivot.M.Woodie.R1|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_R1_1W: new BaseField('PIVOT_M_WOODIE_R1_1W', {
    label: 'Pivot M Woodie R1|1W',
    fieldName: 'Pivot.M.Woodie.R1|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_R1_240: new BaseField('PIVOT_M_WOODIE_R1_240', {
    label: 'Pivot M Woodie R1|240',
    fieldName: 'Pivot.M.Woodie.R1|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_R1_30: new BaseField('PIVOT_M_WOODIE_R1_30', {
    label: 'Pivot M Woodie R1|30',
    fieldName: 'Pivot.M.Woodie.R1|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_R1_5: new BaseField('PIVOT_M_WOODIE_R1_5', {
    label: 'Pivot M Woodie R1|5',
    fieldName: 'Pivot.M.Woodie.R1|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_R1_60: new BaseField('PIVOT_M_WOODIE_R1_60', {
    label: 'Pivot M Woodie R1|60',
    fieldName: 'Pivot.M.Woodie.R1|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_WOODIE_R2: new BaseField('PIVOT_WOODIE_R2', {
    label: 'Pivot Woodie R2',
    fieldName: 'Pivot.M.Woodie.R2',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_R2_1: new BaseField('PIVOT_M_WOODIE_R2_1', {
    label: 'Pivot M Woodie R2|1',
    fieldName: 'Pivot.M.Woodie.R2|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_R2_120: new BaseField('PIVOT_M_WOODIE_R2_120', {
    label: 'Pivot M Woodie R2|120',
    fieldName: 'Pivot.M.Woodie.R2|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_R2_15: new BaseField('PIVOT_M_WOODIE_R2_15', {
    label: 'Pivot M Woodie R2|15',
    fieldName: 'Pivot.M.Woodie.R2|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_R2_1M: new BaseField('PIVOT_M_WOODIE_R2_1M', {
    label: 'Pivot M Woodie R2|1M',
    fieldName: 'Pivot.M.Woodie.R2|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_R2_1W: new BaseField('PIVOT_M_WOODIE_R2_1W', {
    label: 'Pivot M Woodie R2|1W',
    fieldName: 'Pivot.M.Woodie.R2|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_R2_240: new BaseField('PIVOT_M_WOODIE_R2_240', {
    label: 'Pivot M Woodie R2|240',
    fieldName: 'Pivot.M.Woodie.R2|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_R2_30: new BaseField('PIVOT_M_WOODIE_R2_30', {
    label: 'Pivot M Woodie R2|30',
    fieldName: 'Pivot.M.Woodie.R2|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_R2_5: new BaseField('PIVOT_M_WOODIE_R2_5', {
    label: 'Pivot M Woodie R2|5',
    fieldName: 'Pivot.M.Woodie.R2|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_R2_60: new BaseField('PIVOT_M_WOODIE_R2_60', {
    label: 'Pivot M Woodie R2|60',
    fieldName: 'Pivot.M.Woodie.R2|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_WOODIE_R3: new BaseField('PIVOT_WOODIE_R3', {
    label: 'Pivot Woodie R3',
    fieldName: 'Pivot.M.Woodie.R3',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_R3_1: new BaseField('PIVOT_M_WOODIE_R3_1', {
    label: 'Pivot M Woodie R3|1',
    fieldName: 'Pivot.M.Woodie.R3|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_R3_120: new BaseField('PIVOT_M_WOODIE_R3_120', {
    label: 'Pivot M Woodie R3|120',
    fieldName: 'Pivot.M.Woodie.R3|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_R3_15: new BaseField('PIVOT_M_WOODIE_R3_15', {
    label: 'Pivot M Woodie R3|15',
    fieldName: 'Pivot.M.Woodie.R3|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_R3_1M: new BaseField('PIVOT_M_WOODIE_R3_1M', {
    label: 'Pivot M Woodie R3|1M',
    fieldName: 'Pivot.M.Woodie.R3|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_R3_1W: new BaseField('PIVOT_M_WOODIE_R3_1W', {
    label: 'Pivot M Woodie R3|1W',
    fieldName: 'Pivot.M.Woodie.R3|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_R3_240: new BaseField('PIVOT_M_WOODIE_R3_240', {
    label: 'Pivot M Woodie R3|240',
    fieldName: 'Pivot.M.Woodie.R3|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_R3_30: new BaseField('PIVOT_M_WOODIE_R3_30', {
    label: 'Pivot M Woodie R3|30',
    fieldName: 'Pivot.M.Woodie.R3|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_R3_5: new BaseField('PIVOT_M_WOODIE_R3_5', {
    label: 'Pivot M Woodie R3|5',
    fieldName: 'Pivot.M.Woodie.R3|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_R3_60: new BaseField('PIVOT_M_WOODIE_R3_60', {
    label: 'Pivot M Woodie R3|60',
    fieldName: 'Pivot.M.Woodie.R3|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_WOODIE_S1: new BaseField('PIVOT_WOODIE_S1', {
    label: 'Pivot Woodie S1',
    fieldName: 'Pivot.M.Woodie.S1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_S1_1: new BaseField('PIVOT_M_WOODIE_S1_1', {
    label: 'Pivot M Woodie S1|1',
    fieldName: 'Pivot.M.Woodie.S1|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_S1_120: new BaseField('PIVOT_M_WOODIE_S1_120', {
    label: 'Pivot M Woodie S1|120',
    fieldName: 'Pivot.M.Woodie.S1|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_S1_15: new BaseField('PIVOT_M_WOODIE_S1_15', {
    label: 'Pivot M Woodie S1|15',
    fieldName: 'Pivot.M.Woodie.S1|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_S1_1M: new BaseField('PIVOT_M_WOODIE_S1_1M', {
    label: 'Pivot M Woodie S1|1M',
    fieldName: 'Pivot.M.Woodie.S1|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_S1_1W: new BaseField('PIVOT_M_WOODIE_S1_1W', {
    label: 'Pivot M Woodie S1|1W',
    fieldName: 'Pivot.M.Woodie.S1|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_S1_240: new BaseField('PIVOT_M_WOODIE_S1_240', {
    label: 'Pivot M Woodie S1|240',
    fieldName: 'Pivot.M.Woodie.S1|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_S1_30: new BaseField('PIVOT_M_WOODIE_S1_30', {
    label: 'Pivot M Woodie S1|30',
    fieldName: 'Pivot.M.Woodie.S1|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_S1_5: new BaseField('PIVOT_M_WOODIE_S1_5', {
    label: 'Pivot M Woodie S1|5',
    fieldName: 'Pivot.M.Woodie.S1|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_S1_60: new BaseField('PIVOT_M_WOODIE_S1_60', {
    label: 'Pivot M Woodie S1|60',
    fieldName: 'Pivot.M.Woodie.S1|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_WOODIE_S2: new BaseField('PIVOT_WOODIE_S2', {
    label: 'Pivot Woodie S2',
    fieldName: 'Pivot.M.Woodie.S2',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_S2_1: new BaseField('PIVOT_M_WOODIE_S2_1', {
    label: 'Pivot M Woodie S2|1',
    fieldName: 'Pivot.M.Woodie.S2|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_S2_120: new BaseField('PIVOT_M_WOODIE_S2_120', {
    label: 'Pivot M Woodie S2|120',
    fieldName: 'Pivot.M.Woodie.S2|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_S2_15: new BaseField('PIVOT_M_WOODIE_S2_15', {
    label: 'Pivot M Woodie S2|15',
    fieldName: 'Pivot.M.Woodie.S2|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_S2_1M: new BaseField('PIVOT_M_WOODIE_S2_1M', {
    label: 'Pivot M Woodie S2|1M',
    fieldName: 'Pivot.M.Woodie.S2|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_S2_1W: new BaseField('PIVOT_M_WOODIE_S2_1W', {
    label: 'Pivot M Woodie S2|1W',
    fieldName: 'Pivot.M.Woodie.S2|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_S2_240: new BaseField('PIVOT_M_WOODIE_S2_240', {
    label: 'Pivot M Woodie S2|240',
    fieldName: 'Pivot.M.Woodie.S2|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_S2_30: new BaseField('PIVOT_M_WOODIE_S2_30', {
    label: 'Pivot M Woodie S2|30',
    fieldName: 'Pivot.M.Woodie.S2|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_S2_5: new BaseField('PIVOT_M_WOODIE_S2_5', {
    label: 'Pivot M Woodie S2|5',
    fieldName: 'Pivot.M.Woodie.S2|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_S2_60: new BaseField('PIVOT_M_WOODIE_S2_60', {
    label: 'Pivot M Woodie S2|60',
    fieldName: 'Pivot.M.Woodie.S2|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_WOODIE_S3: new BaseField('PIVOT_WOODIE_S3', {
    label: 'Pivot Woodie S3',
    fieldName: 'Pivot.M.Woodie.S3',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_S3_1: new BaseField('PIVOT_M_WOODIE_S3_1', {
    label: 'Pivot M Woodie S3|1',
    fieldName: 'Pivot.M.Woodie.S3|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_S3_120: new BaseField('PIVOT_M_WOODIE_S3_120', {
    label: 'Pivot M Woodie S3|120',
    fieldName: 'Pivot.M.Woodie.S3|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_S3_15: new BaseField('PIVOT_M_WOODIE_S3_15', {
    label: 'Pivot M Woodie S3|15',
    fieldName: 'Pivot.M.Woodie.S3|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_S3_1M: new BaseField('PIVOT_M_WOODIE_S3_1M', {
    label: 'Pivot M Woodie S3|1M',
    fieldName: 'Pivot.M.Woodie.S3|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_S3_1W: new BaseField('PIVOT_M_WOODIE_S3_1W', {
    label: 'Pivot M Woodie S3|1W',
    fieldName: 'Pivot.M.Woodie.S3|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_S3_240: new BaseField('PIVOT_M_WOODIE_S3_240', {
    label: 'Pivot M Woodie S3|240',
    fieldName: 'Pivot.M.Woodie.S3|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_S3_30: new BaseField('PIVOT_M_WOODIE_S3_30', {
    label: 'Pivot M Woodie S3|30',
    fieldName: 'Pivot.M.Woodie.S3|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_S3_5: new BaseField('PIVOT_M_WOODIE_S3_5', {
    label: 'Pivot M Woodie S3|5',
    fieldName: 'Pivot.M.Woodie.S3|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_S3_60: new BaseField('PIVOT_M_WOODIE_S3_60', {
    label: 'Pivot M Woodie S3|60',
    fieldName: 'Pivot.M.Woodie.S3|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  // === Volume Indicators (146 fields) ===

  AVERAGE_DAY_RANGE_14: new BaseField('AVERAGE_DAY_RANGE_14', {
    label: 'Average Day Range (14)',
    fieldName: 'ADR',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ADRP: new BaseField('ADRP', {
    label: 'Adrp',
    fieldName: 'ADRP',
    format: 'float',
    interval: false,
    historical: false,
  }),

  ADRP_1: new BaseField('ADRP_1', {
    label: 'Adrp|1',
    fieldName: 'ADRP|1',
    format: 'float',
    interval: false,
    historical: false,
  }),

  ADRP_120: new BaseField('ADRP_120', {
    label: 'Adrp|120',
    fieldName: 'ADRP|120',
    format: 'float',
    interval: false,
    historical: false,
  }),

  ADRP_15: new BaseField('ADRP_15', {
    label: 'Adrp|15',
    fieldName: 'ADRP|15',
    format: 'float',
    interval: false,
    historical: false,
  }),

  ADRP_1M: new BaseField('ADRP_1M', {
    label: 'Adrp|1M',
    fieldName: 'ADRP|1M',
    format: 'float',
    interval: false,
    historical: false,
  }),

  ADRP_1W: new BaseField('ADRP_1W', {
    label: 'Adrp|1W',
    fieldName: 'ADRP|1W',
    format: 'float',
    interval: false,
    historical: false,
  }),

  ADRP_240: new BaseField('ADRP_240', {
    label: 'Adrp|240',
    fieldName: 'ADRP|240',
    format: 'float',
    interval: false,
    historical: false,
  }),

  ADRP_30: new BaseField('ADRP_30', {
    label: 'Adrp|30',
    fieldName: 'ADRP|30',
    format: 'float',
    interval: false,
    historical: false,
  }),

  ADRP_5: new BaseField('ADRP_5', {
    label: 'Adrp|5',
    fieldName: 'ADRP|5',
    format: 'float',
    interval: false,
    historical: false,
  }),

  ADRP_60: new BaseField('ADRP_60', {
    label: 'Adrp|60',
    fieldName: 'ADRP|60',
    format: 'float',
    interval: false,
    historical: false,
  }),

  ADR_1: new BaseField('ADR_1', {
    label: 'Adr|1',
    fieldName: 'ADR|1',
    format: 'float',
    interval: false,
    historical: false,
  }),

  ADR_120: new BaseField('ADR_120', {
    label: 'Adr|120',
    fieldName: 'ADR|120',
    format: 'float',
    interval: false,
    historical: false,
  }),

  ADR_15: new BaseField('ADR_15', {
    label: 'Adr|15',
    fieldName: 'ADR|15',
    format: 'float',
    interval: false,
    historical: false,
  }),

  ADR_1M: new BaseField('ADR_1M', {
    label: 'Adr|1M',
    fieldName: 'ADR|1M',
    format: 'float',
    interval: false,
    historical: false,
  }),

  ADR_1W: new BaseField('ADR_1W', {
    label: 'Adr|1W',
    fieldName: 'ADR|1W',
    format: 'float',
    interval: false,
    historical: false,
  }),

  ADR_240: new BaseField('ADR_240', {
    label: 'Adr|240',
    fieldName: 'ADR|240',
    format: 'float',
    interval: false,
    historical: false,
  }),

  ADR_30: new BaseField('ADR_30', {
    label: 'Adr|30',
    fieldName: 'ADR|30',
    format: 'float',
    interval: false,
    historical: false,
  }),

  ADR_5: new BaseField('ADR_5', {
    label: 'Adr|5',
    fieldName: 'ADR|5',
    format: 'float',
    interval: false,
    historical: false,
  }),

  ADR_60: new BaseField('ADR_60', {
    label: 'Adr|60',
    fieldName: 'ADR|60',
    format: 'float',
    interval: false,
    historical: false,
  }),

  AVGVALUE_TRADED_10D: new BaseField('AVGVALUE_TRADED_10D', {
    label: 'Avgvalue Traded 10D',
    fieldName: 'AvgValue.Traded_10d',
    format: 'float',
    interval: false,
    historical: false,
  }),

  AVGVALUE_TRADED_30D: new BaseField('AVGVALUE_TRADED_30D', {
    label: 'Avgvalue Traded 30D',
    fieldName: 'AvgValue.Traded_30d',
    format: 'float',
    interval: false,
    historical: false,
  }),

  AVGVALUE_TRADED_60D: new BaseField('AVGVALUE_TRADED_60D', {
    label: 'Avgvalue Traded 60D',
    fieldName: 'AvgValue.Traded_60d',
    format: 'float',
    interval: false,
    historical: false,
  }),

  AVGVALUE_TRADED_90D: new BaseField('AVGVALUE_TRADED_90D', {
    label: 'Avgvalue Traded 90D',
    fieldName: 'AvgValue.Traded_90d',
    format: 'float',
    interval: false,
    historical: false,
  }),

  CANDLE_LONGSHADOW_LOWER: new BaseField('CANDLE_LONGSHADOW_LOWER', {
    label: 'Candle.LongShadow.Lower',
    fieldName: 'Candle.LongShadow.Lower',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_LONGSHADOW_LOWER_1: new BaseField('CANDLE_LONGSHADOW_LOWER_1', {
    label: 'Candle Longshadow Lower|1',
    fieldName: 'Candle.LongShadow.Lower|1',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_LONGSHADOW_LOWER_120: new BaseField('CANDLE_LONGSHADOW_LOWER_120', {
    label: 'Candle Longshadow Lower|120',
    fieldName: 'Candle.LongShadow.Lower|120',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_LONGSHADOW_LOWER_15: new BaseField('CANDLE_LONGSHADOW_LOWER_15', {
    label: 'Candle Longshadow Lower|15',
    fieldName: 'Candle.LongShadow.Lower|15',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_LONGSHADOW_LOWER_1M: new BaseField('CANDLE_LONGSHADOW_LOWER_1M', {
    label: 'Candle Longshadow Lower|1M',
    fieldName: 'Candle.LongShadow.Lower|1M',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_LONGSHADOW_LOWER_1W: new BaseField('CANDLE_LONGSHADOW_LOWER_1W', {
    label: 'Candle Longshadow Lower|1W',
    fieldName: 'Candle.LongShadow.Lower|1W',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_LONGSHADOW_LOWER_240: new BaseField('CANDLE_LONGSHADOW_LOWER_240', {
    label: 'Candle Longshadow Lower|240',
    fieldName: 'Candle.LongShadow.Lower|240',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_LONGSHADOW_LOWER_30: new BaseField('CANDLE_LONGSHADOW_LOWER_30', {
    label: 'Candle Longshadow Lower|30',
    fieldName: 'Candle.LongShadow.Lower|30',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_LONGSHADOW_LOWER_5: new BaseField('CANDLE_LONGSHADOW_LOWER_5', {
    label: 'Candle Longshadow Lower|5',
    fieldName: 'Candle.LongShadow.Lower|5',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_LONGSHADOW_LOWER_60: new BaseField('CANDLE_LONGSHADOW_LOWER_60', {
    label: 'Candle Longshadow Lower|60',
    fieldName: 'Candle.LongShadow.Lower|60',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_LONGSHADOW_UPPER: new BaseField('CANDLE_LONGSHADOW_UPPER', {
    label: 'Candle.LongShadow.Upper',
    fieldName: 'Candle.LongShadow.Upper',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_LONGSHADOW_UPPER_1: new BaseField('CANDLE_LONGSHADOW_UPPER_1', {
    label: 'Candle Longshadow Upper|1',
    fieldName: 'Candle.LongShadow.Upper|1',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_LONGSHADOW_UPPER_120: new BaseField('CANDLE_LONGSHADOW_UPPER_120', {
    label: 'Candle Longshadow Upper|120',
    fieldName: 'Candle.LongShadow.Upper|120',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_LONGSHADOW_UPPER_15: new BaseField('CANDLE_LONGSHADOW_UPPER_15', {
    label: 'Candle Longshadow Upper|15',
    fieldName: 'Candle.LongShadow.Upper|15',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_LONGSHADOW_UPPER_1M: new BaseField('CANDLE_LONGSHADOW_UPPER_1M', {
    label: 'Candle Longshadow Upper|1M',
    fieldName: 'Candle.LongShadow.Upper|1M',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_LONGSHADOW_UPPER_1W: new BaseField('CANDLE_LONGSHADOW_UPPER_1W', {
    label: 'Candle Longshadow Upper|1W',
    fieldName: 'Candle.LongShadow.Upper|1W',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_LONGSHADOW_UPPER_240: new BaseField('CANDLE_LONGSHADOW_UPPER_240', {
    label: 'Candle Longshadow Upper|240',
    fieldName: 'Candle.LongShadow.Upper|240',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_LONGSHADOW_UPPER_30: new BaseField('CANDLE_LONGSHADOW_UPPER_30', {
    label: 'Candle Longshadow Upper|30',
    fieldName: 'Candle.LongShadow.Upper|30',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_LONGSHADOW_UPPER_5: new BaseField('CANDLE_LONGSHADOW_UPPER_5', {
    label: 'Candle Longshadow Upper|5',
    fieldName: 'Candle.LongShadow.Upper|5',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_LONGSHADOW_UPPER_60: new BaseField('CANDLE_LONGSHADOW_UPPER_60', {
    label: 'Candle Longshadow Upper|60',
    fieldName: 'Candle.LongShadow.Upper|60',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  VOLUME_WEIGHTED_AVERAGE_PRICE: new BaseField('VOLUME_WEIGHTED_AVERAGE_PRICE', {
    label: 'Volume Weighted Average Price',
    fieldName: 'VWAP',
    format: 'missing',
    interval: true,
    historical: false,
  }),

  VWAP_1: new BaseField('VWAP_1', {
    label: 'VWAP|1',
    fieldName: 'VWAP|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  VWAP_120: new BaseField('VWAP_120', {
    label: 'VWAP|120',
    fieldName: 'VWAP|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  VWAP_15: new BaseField('VWAP_15', {
    label: 'VWAP|15',
    fieldName: 'VWAP|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  VWAP_1M: new BaseField('VWAP_1M', {
    label: 'VWAP|1M',
    fieldName: 'VWAP|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  VWAP_1W: new BaseField('VWAP_1W', {
    label: 'VWAP|1W',
    fieldName: 'VWAP|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  VWAP_240: new BaseField('VWAP_240', {
    label: 'VWAP|240',
    fieldName: 'VWAP|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  VWAP_30: new BaseField('VWAP_30', {
    label: 'VWAP|30',
    fieldName: 'VWAP|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  VWAP_5: new BaseField('VWAP_5', {
    label: 'VWAP|5',
    fieldName: 'VWAP|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  VWAP_60: new BaseField('VWAP_60', {
    label: 'VWAP|60',
    fieldName: 'VWAP|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  VALUE_TRADED: new BaseField('VALUE_TRADED', {
    label: 'Value Traded',
    fieldName: 'Value.Traded',
    format: 'float',
    interval: false,
    historical: false,
  }),

  VALUE_TRADED_1: new BaseField('VALUE_TRADED_1', {
    label: 'Value Traded|1',
    fieldName: 'Value.Traded|1',
    format: 'float',
    interval: false,
    historical: false,
  }),

  VALUE_TRADED_120: new BaseField('VALUE_TRADED_120', {
    label: 'Value Traded|120',
    fieldName: 'Value.Traded|120',
    format: 'float',
    interval: false,
    historical: false,
  }),

  VALUE_TRADED_15: new BaseField('VALUE_TRADED_15', {
    label: 'Value Traded|15',
    fieldName: 'Value.Traded|15',
    format: 'float',
    interval: false,
    historical: false,
  }),

  VALUE_TRADED_1M: new BaseField('VALUE_TRADED_1M', {
    label: 'Value Traded|1M',
    fieldName: 'Value.Traded|1M',
    format: 'float',
    interval: false,
    historical: false,
  }),

  VALUE_TRADED_1W: new BaseField('VALUE_TRADED_1W', {
    label: 'Value Traded|1W',
    fieldName: 'Value.Traded|1W',
    format: 'float',
    interval: false,
    historical: false,
  }),

  VALUE_TRADED_240: new BaseField('VALUE_TRADED_240', {
    label: 'Value Traded|240',
    fieldName: 'Value.Traded|240',
    format: 'float',
    interval: false,
    historical: false,
  }),

  VALUE_TRADED_30: new BaseField('VALUE_TRADED_30', {
    label: 'Value Traded|30',
    fieldName: 'Value.Traded|30',
    format: 'float',
    interval: false,
    historical: false,
  }),

  VALUE_TRADED_5: new BaseField('VALUE_TRADED_5', {
    label: 'Value Traded|5',
    fieldName: 'Value.Traded|5',
    format: 'float',
    interval: false,
    historical: false,
  }),

  VALUE_TRADED_60: new BaseField('VALUE_TRADED_60', {
    label: 'Value Traded|60',
    fieldName: 'Value.Traded|60',
    format: 'float',
    interval: false,
    historical: false,
  }),

  AVERAGE_VOLUME_10D_CALC: new BaseField('AVERAGE_VOLUME_10D_CALC', {
    label: 'Average Volume 10D Calc',
    fieldName: 'average_volume_10d_calc',
    format: 'number_group',
    interval: false,
    historical: false,
  }),

  AVERAGE_VOLUME_10D_CALC_1: new BaseField('AVERAGE_VOLUME_10D_CALC_1', {
    label: 'Average Volume 10D Calc|1',
    fieldName: 'average_volume_10d_calc|1',
    format: 'number_group',
    interval: false,
    historical: false,
  }),

  AVERAGE_VOLUME_10D_CALC_120: new BaseField('AVERAGE_VOLUME_10D_CALC_120', {
    label: 'Average Volume 10D Calc|120',
    fieldName: 'average_volume_10d_calc|120',
    format: 'number_group',
    interval: false,
    historical: false,
  }),

  AVERAGE_VOLUME_10D_CALC_15: new BaseField('AVERAGE_VOLUME_10D_CALC_15', {
    label: 'Average Volume 10D Calc|15',
    fieldName: 'average_volume_10d_calc|15',
    format: 'number_group',
    interval: false,
    historical: false,
  }),

  AVERAGE_VOLUME_10D_CALC_1M: new BaseField('AVERAGE_VOLUME_10D_CALC_1M', {
    label: 'Average Volume 10D Calc|1M',
    fieldName: 'average_volume_10d_calc|1M',
    format: 'number_group',
    interval: false,
    historical: false,
  }),

  AVERAGE_VOLUME_10D_CALC_1W: new BaseField('AVERAGE_VOLUME_10D_CALC_1W', {
    label: 'Average Volume 10D Calc|1W',
    fieldName: 'average_volume_10d_calc|1W',
    format: 'number_group',
    interval: false,
    historical: false,
  }),

  AVERAGE_VOLUME_10D_CALC_240: new BaseField('AVERAGE_VOLUME_10D_CALC_240', {
    label: 'Average Volume 10D Calc|240',
    fieldName: 'average_volume_10d_calc|240',
    format: 'number_group',
    interval: false,
    historical: false,
  }),

  AVERAGE_VOLUME_10D_CALC_30: new BaseField('AVERAGE_VOLUME_10D_CALC_30', {
    label: 'Average Volume 10D Calc|30',
    fieldName: 'average_volume_10d_calc|30',
    format: 'number_group',
    interval: false,
    historical: false,
  }),

  AVERAGE_VOLUME_10D_CALC_5: new BaseField('AVERAGE_VOLUME_10D_CALC_5', {
    label: 'Average Volume 10D Calc|5',
    fieldName: 'average_volume_10d_calc|5',
    format: 'number_group',
    interval: false,
    historical: false,
  }),

  AVERAGE_VOLUME_10D_CALC_60: new BaseField('AVERAGE_VOLUME_10D_CALC_60', {
    label: 'Average Volume 10D Calc|60',
    fieldName: 'average_volume_10d_calc|60',
    format: 'number_group',
    interval: false,
    historical: false,
  }),

  AVERAGE_VOLUME_30D_CALC: new BaseField('AVERAGE_VOLUME_30D_CALC', {
    label: 'Average Volume 30D Calc',
    fieldName: 'average_volume_30d_calc',
    format: 'number_group',
    interval: false,
    historical: false,
  }),

  AVERAGE_VOLUME_30D_CALC_1: new BaseField('AVERAGE_VOLUME_30D_CALC_1', {
    label: 'Average Volume 30D Calc|1',
    fieldName: 'average_volume_30d_calc|1',
    format: 'number_group',
    interval: false,
    historical: false,
  }),

  AVERAGE_VOLUME_30D_CALC_120: new BaseField('AVERAGE_VOLUME_30D_CALC_120', {
    label: 'Average Volume 30D Calc|120',
    fieldName: 'average_volume_30d_calc|120',
    format: 'number_group',
    interval: false,
    historical: false,
  }),

  AVERAGE_VOLUME_30D_CALC_15: new BaseField('AVERAGE_VOLUME_30D_CALC_15', {
    label: 'Average Volume 30D Calc|15',
    fieldName: 'average_volume_30d_calc|15',
    format: 'number_group',
    interval: false,
    historical: false,
  }),

  AVERAGE_VOLUME_30D_CALC_1M: new BaseField('AVERAGE_VOLUME_30D_CALC_1M', {
    label: 'Average Volume 30D Calc|1M',
    fieldName: 'average_volume_30d_calc|1M',
    format: 'number_group',
    interval: false,
    historical: false,
  }),

  AVERAGE_VOLUME_30D_CALC_1W: new BaseField('AVERAGE_VOLUME_30D_CALC_1W', {
    label: 'Average Volume 30D Calc|1W',
    fieldName: 'average_volume_30d_calc|1W',
    format: 'number_group',
    interval: false,
    historical: false,
  }),

  AVERAGE_VOLUME_30D_CALC_240: new BaseField('AVERAGE_VOLUME_30D_CALC_240', {
    label: 'Average Volume 30D Calc|240',
    fieldName: 'average_volume_30d_calc|240',
    format: 'number_group',
    interval: false,
    historical: false,
  }),

  AVERAGE_VOLUME_30D_CALC_30: new BaseField('AVERAGE_VOLUME_30D_CALC_30', {
    label: 'Average Volume 30D Calc|30',
    fieldName: 'average_volume_30d_calc|30',
    format: 'number_group',
    interval: false,
    historical: false,
  }),

  AVERAGE_VOLUME_30D_CALC_5: new BaseField('AVERAGE_VOLUME_30D_CALC_5', {
    label: 'Average Volume 30D Calc|5',
    fieldName: 'average_volume_30d_calc|5',
    format: 'number_group',
    interval: false,
    historical: false,
  }),

  AVERAGE_VOLUME_30D_CALC_60: new BaseField('AVERAGE_VOLUME_30D_CALC_60', {
    label: 'Average Volume 30D Calc|60',
    fieldName: 'average_volume_30d_calc|60',
    format: 'number_group',
    interval: false,
    historical: false,
  }),

  AVERAGE_VOLUME_60D_CALC: new BaseField('AVERAGE_VOLUME_60D_CALC', {
    label: 'Average Volume 60D Calc',
    fieldName: 'average_volume_60d_calc',
    format: 'number_group',
    interval: false,
    historical: false,
  }),

  AVERAGE_VOLUME_60D_CALC_1: new BaseField('AVERAGE_VOLUME_60D_CALC_1', {
    label: 'Average Volume 60D Calc|1',
    fieldName: 'average_volume_60d_calc|1',
    format: 'number_group',
    interval: false,
    historical: false,
  }),

  AVERAGE_VOLUME_60D_CALC_120: new BaseField('AVERAGE_VOLUME_60D_CALC_120', {
    label: 'Average Volume 60D Calc|120',
    fieldName: 'average_volume_60d_calc|120',
    format: 'number_group',
    interval: false,
    historical: false,
  }),

  AVERAGE_VOLUME_60D_CALC_15: new BaseField('AVERAGE_VOLUME_60D_CALC_15', {
    label: 'Average Volume 60D Calc|15',
    fieldName: 'average_volume_60d_calc|15',
    format: 'number_group',
    interval: false,
    historical: false,
  }),

  AVERAGE_VOLUME_60D_CALC_1M: new BaseField('AVERAGE_VOLUME_60D_CALC_1M', {
    label: 'Average Volume 60D Calc|1M',
    fieldName: 'average_volume_60d_calc|1M',
    format: 'number_group',
    interval: false,
    historical: false,
  }),

  AVERAGE_VOLUME_60D_CALC_1W: new BaseField('AVERAGE_VOLUME_60D_CALC_1W', {
    label: 'Average Volume 60D Calc|1W',
    fieldName: 'average_volume_60d_calc|1W',
    format: 'number_group',
    interval: false,
    historical: false,
  }),

  AVERAGE_VOLUME_60D_CALC_240: new BaseField('AVERAGE_VOLUME_60D_CALC_240', {
    label: 'Average Volume 60D Calc|240',
    fieldName: 'average_volume_60d_calc|240',
    format: 'number_group',
    interval: false,
    historical: false,
  }),

  AVERAGE_VOLUME_60D_CALC_30: new BaseField('AVERAGE_VOLUME_60D_CALC_30', {
    label: 'Average Volume 60D Calc|30',
    fieldName: 'average_volume_60d_calc|30',
    format: 'number_group',
    interval: false,
    historical: false,
  }),

  AVERAGE_VOLUME_60D_CALC_5: new BaseField('AVERAGE_VOLUME_60D_CALC_5', {
    label: 'Average Volume 60D Calc|5',
    fieldName: 'average_volume_60d_calc|5',
    format: 'number_group',
    interval: false,
    historical: false,
  }),

  AVERAGE_VOLUME_60D_CALC_60: new BaseField('AVERAGE_VOLUME_60D_CALC_60', {
    label: 'Average Volume 60D Calc|60',
    fieldName: 'average_volume_60d_calc|60',
    format: 'number_group',
    interval: false,
    historical: false,
  }),

  AVERAGE_VOLUME_90D_CALC: new BaseField('AVERAGE_VOLUME_90D_CALC', {
    label: 'Average Volume 90D Calc',
    fieldName: 'average_volume_90d_calc',
    format: 'number_group',
    interval: false,
    historical: false,
  }),

  AVERAGE_VOLUME_90D_CALC_1: new BaseField('AVERAGE_VOLUME_90D_CALC_1', {
    label: 'Average Volume 90D Calc|1',
    fieldName: 'average_volume_90d_calc|1',
    format: 'number_group',
    interval: false,
    historical: false,
  }),

  AVERAGE_VOLUME_90D_CALC_120: new BaseField('AVERAGE_VOLUME_90D_CALC_120', {
    label: 'Average Volume 90D Calc|120',
    fieldName: 'average_volume_90d_calc|120',
    format: 'number_group',
    interval: false,
    historical: false,
  }),

  AVERAGE_VOLUME_90D_CALC_15: new BaseField('AVERAGE_VOLUME_90D_CALC_15', {
    label: 'Average Volume 90D Calc|15',
    fieldName: 'average_volume_90d_calc|15',
    format: 'number_group',
    interval: false,
    historical: false,
  }),

  AVERAGE_VOLUME_90D_CALC_1M: new BaseField('AVERAGE_VOLUME_90D_CALC_1M', {
    label: 'Average Volume 90D Calc|1M',
    fieldName: 'average_volume_90d_calc|1M',
    format: 'number_group',
    interval: false,
    historical: false,
  }),

  AVERAGE_VOLUME_90D_CALC_1W: new BaseField('AVERAGE_VOLUME_90D_CALC_1W', {
    label: 'Average Volume 90D Calc|1W',
    fieldName: 'average_volume_90d_calc|1W',
    format: 'number_group',
    interval: false,
    historical: false,
  }),

  AVERAGE_VOLUME_90D_CALC_240: new BaseField('AVERAGE_VOLUME_90D_CALC_240', {
    label: 'Average Volume 90D Calc|240',
    fieldName: 'average_volume_90d_calc|240',
    format: 'number_group',
    interval: false,
    historical: false,
  }),

  AVERAGE_VOLUME_90D_CALC_30: new BaseField('AVERAGE_VOLUME_90D_CALC_30', {
    label: 'Average Volume 90D Calc|30',
    fieldName: 'average_volume_90d_calc|30',
    format: 'number_group',
    interval: false,
    historical: false,
  }),

  AVERAGE_VOLUME_90D_CALC_5: new BaseField('AVERAGE_VOLUME_90D_CALC_5', {
    label: 'Average Volume 90D Calc|5',
    fieldName: 'average_volume_90d_calc|5',
    format: 'number_group',
    interval: false,
    historical: false,
  }),

  AVERAGE_VOLUME_90D_CALC_60: new BaseField('AVERAGE_VOLUME_90D_CALC_60', {
    label: 'Average Volume 90D Calc|60',
    fieldName: 'average_volume_90d_calc|60',
    format: 'number_group',
    interval: false,
    historical: false,
  }),

  BID_ASK_SPREAD_PCT: new BaseField('BID_ASK_SPREAD_PCT', {
    label: 'Bid Ask Spread Pct',
    fieldName: 'bid_ask_spread_pct',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  RELATIVE_VOLUME_10D_CALC: new BaseField('RELATIVE_VOLUME_10D_CALC', {
    label: 'Relative Volume 10D Calc',
    fieldName: 'relative_volume_10d_calc',
    format: 'number_group',
    interval: false,
    historical: false,
  }),

  RELATIVE_VOLUME_10D_CALC_1: new BaseField('RELATIVE_VOLUME_10D_CALC_1', {
    label: 'Relative Volume 10D Calc|1',
    fieldName: 'relative_volume_10d_calc|1',
    format: 'number_group',
    interval: false,
    historical: false,
  }),

  RELATIVE_VOLUME_10D_CALC_120: new BaseField('RELATIVE_VOLUME_10D_CALC_120', {
    label: 'Relative Volume 10D Calc|120',
    fieldName: 'relative_volume_10d_calc|120',
    format: 'number_group',
    interval: false,
    historical: false,
  }),

  RELATIVE_VOLUME_10D_CALC_15: new BaseField('RELATIVE_VOLUME_10D_CALC_15', {
    label: 'Relative Volume 10D Calc|15',
    fieldName: 'relative_volume_10d_calc|15',
    format: 'number_group',
    interval: false,
    historical: false,
  }),

  RELATIVE_VOLUME_10D_CALC_1M: new BaseField('RELATIVE_VOLUME_10D_CALC_1M', {
    label: 'Relative Volume 10D Calc|1M',
    fieldName: 'relative_volume_10d_calc|1M',
    format: 'number_group',
    interval: false,
    historical: false,
  }),

  RELATIVE_VOLUME_10D_CALC_1W: new BaseField('RELATIVE_VOLUME_10D_CALC_1W', {
    label: 'Relative Volume 10D Calc|1W',
    fieldName: 'relative_volume_10d_calc|1W',
    format: 'number_group',
    interval: false,
    historical: false,
  }),

  RELATIVE_VOLUME_10D_CALC_240: new BaseField('RELATIVE_VOLUME_10D_CALC_240', {
    label: 'Relative Volume 10D Calc|240',
    fieldName: 'relative_volume_10d_calc|240',
    format: 'number_group',
    interval: false,
    historical: false,
  }),

  RELATIVE_VOLUME_10D_CALC_30: new BaseField('RELATIVE_VOLUME_10D_CALC_30', {
    label: 'Relative Volume 10D Calc|30',
    fieldName: 'relative_volume_10d_calc|30',
    format: 'number_group',
    interval: false,
    historical: false,
  }),

  RELATIVE_VOLUME_10D_CALC_5: new BaseField('RELATIVE_VOLUME_10D_CALC_5', {
    label: 'Relative Volume 10D Calc|5',
    fieldName: 'relative_volume_10d_calc|5',
    format: 'number_group',
    interval: false,
    historical: false,
  }),

  RELATIVE_VOLUME_10D_CALC_60: new BaseField('RELATIVE_VOLUME_10D_CALC_60', {
    label: 'Relative Volume 10D Calc|60',
    fieldName: 'relative_volume_10d_calc|60',
    format: 'number_group',
    interval: false,
    historical: false,
  }),

  RELATIVE_VOLUME_INTRADAY_5: new BaseField('RELATIVE_VOLUME_INTRADAY_5', {
    label: 'Relative Volume Intraday|5',
    fieldName: 'relative_volume_intraday|5',
    format: 'number_group',
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

  VOLUME_CHANGE: new BaseField('VOLUME_CHANGE', {
    label: 'Volume Change',
    fieldName: 'volume_change',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  VOLUME_CHANGE_ABS: new BaseField('VOLUME_CHANGE_ABS', {
    label: 'Volume Change Abs',
    fieldName: 'volume_change_abs',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  VOLUME_CHANGE_ABS_1: new BaseField('VOLUME_CHANGE_ABS_1', {
    label: 'Volume Change Abs|1',
    fieldName: 'volume_change_abs|1',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  VOLUME_CHANGE_ABS_120: new BaseField('VOLUME_CHANGE_ABS_120', {
    label: 'Volume Change Abs|120',
    fieldName: 'volume_change_abs|120',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  VOLUME_CHANGE_ABS_15: new BaseField('VOLUME_CHANGE_ABS_15', {
    label: 'Volume Change Abs|15',
    fieldName: 'volume_change_abs|15',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  VOLUME_CHANGE_ABS_1M: new BaseField('VOLUME_CHANGE_ABS_1M', {
    label: 'Volume Change Abs|1M',
    fieldName: 'volume_change_abs|1M',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  VOLUME_CHANGE_ABS_1W: new BaseField('VOLUME_CHANGE_ABS_1W', {
    label: 'Volume Change Abs|1W',
    fieldName: 'volume_change_abs|1W',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  VOLUME_CHANGE_ABS_240: new BaseField('VOLUME_CHANGE_ABS_240', {
    label: 'Volume Change Abs|240',
    fieldName: 'volume_change_abs|240',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  VOLUME_CHANGE_ABS_30: new BaseField('VOLUME_CHANGE_ABS_30', {
    label: 'Volume Change Abs|30',
    fieldName: 'volume_change_abs|30',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  VOLUME_CHANGE_ABS_5: new BaseField('VOLUME_CHANGE_ABS_5', {
    label: 'Volume Change Abs|5',
    fieldName: 'volume_change_abs|5',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  VOLUME_CHANGE_ABS_60: new BaseField('VOLUME_CHANGE_ABS_60', {
    label: 'Volume Change Abs|60',
    fieldName: 'volume_change_abs|60',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  VOLUME_CHANGE_1: new BaseField('VOLUME_CHANGE_1', {
    label: 'Volume Change|1',
    fieldName: 'volume_change|1',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  VOLUME_CHANGE_120: new BaseField('VOLUME_CHANGE_120', {
    label: 'Volume Change|120',
    fieldName: 'volume_change|120',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  VOLUME_CHANGE_15: new BaseField('VOLUME_CHANGE_15', {
    label: 'Volume Change|15',
    fieldName: 'volume_change|15',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  VOLUME_CHANGE_1M: new BaseField('VOLUME_CHANGE_1M', {
    label: 'Volume Change|1M',
    fieldName: 'volume_change|1M',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  VOLUME_CHANGE_1W: new BaseField('VOLUME_CHANGE_1W', {
    label: 'Volume Change|1W',
    fieldName: 'volume_change|1W',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  VOLUME_CHANGE_240: new BaseField('VOLUME_CHANGE_240', {
    label: 'Volume Change|240',
    fieldName: 'volume_change|240',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  VOLUME_CHANGE_30: new BaseField('VOLUME_CHANGE_30', {
    label: 'Volume Change|30',
    fieldName: 'volume_change|30',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  VOLUME_CHANGE_5: new BaseField('VOLUME_CHANGE_5', {
    label: 'Volume Change|5',
    fieldName: 'volume_change|5',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  VOLUME_CHANGE_60: new BaseField('VOLUME_CHANGE_60', {
    label: 'Volume Change|60',
    fieldName: 'volume_change|60',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  VOLUME_1: new BaseField('VOLUME_1', {
    label: 'Volume|1',
    fieldName: 'volume|1',
    format: 'number_group',
    interval: false,
    historical: false,
  }),

  VOLUME_120: new BaseField('VOLUME_120', {
    label: 'Volume|120',
    fieldName: 'volume|120',
    format: 'number_group',
    interval: false,
    historical: false,
  }),

  VOLUME_15: new BaseField('VOLUME_15', {
    label: 'Volume|15',
    fieldName: 'volume|15',
    format: 'number_group',
    interval: false,
    historical: false,
  }),

  VOLUME_1M: new BaseField('VOLUME_1M', {
    label: 'Volume|1M',
    fieldName: 'volume|1M',
    format: 'number_group',
    interval: false,
    historical: false,
  }),

  VOLUME_1W: new BaseField('VOLUME_1W', {
    label: 'Volume|1W',
    fieldName: 'volume|1W',
    format: 'number_group',
    interval: false,
    historical: false,
  }),

  VOLUME_240: new BaseField('VOLUME_240', {
    label: 'Volume|240',
    fieldName: 'volume|240',
    format: 'number_group',
    interval: false,
    historical: false,
  }),

  VOLUME_30: new BaseField('VOLUME_30', {
    label: 'Volume|30',
    fieldName: 'volume|30',
    format: 'number_group',
    interval: false,
    historical: false,
  }),

  VOLUME_5: new BaseField('VOLUME_5', {
    label: 'Volume|5',
    fieldName: 'volume|5',
    format: 'number_group',
    interval: false,
    historical: false,
  }),

  VOLUME_60: new BaseField('VOLUME_60', {
    label: 'Volume|60',
    fieldName: 'volume|60',
    format: 'number_group',
    interval: false,
    historical: false,
  }),

  // === Market Data (20 fields) ===

  TECHNICAL_RATING: new BaseField('TECHNICAL_RATING', {
    label: 'Technical Rating',
    fieldName: 'Recommend.All',
    format: 'rating',
    interval: true,
    historical: false,
  }),

  RECOMMEND_ALL_1: new BaseField('RECOMMEND_ALL_1', {
    label: 'Recommend All|1',
    fieldName: 'Recommend.All|1',
    format: 'rating',
    interval: true,
    historical: false,
  }),

  RECOMMEND_ALL_120: new BaseField('RECOMMEND_ALL_120', {
    label: 'Recommend All|120',
    fieldName: 'Recommend.All|120',
    format: 'rating',
    interval: true,
    historical: false,
  }),

  RECOMMEND_ALL_15: new BaseField('RECOMMEND_ALL_15', {
    label: 'Recommend All|15',
    fieldName: 'Recommend.All|15',
    format: 'rating',
    interval: true,
    historical: false,
  }),

  RECOMMEND_ALL_1M: new BaseField('RECOMMEND_ALL_1M', {
    label: 'Recommend All|1M',
    fieldName: 'Recommend.All|1M',
    format: 'rating',
    interval: true,
    historical: false,
  }),

  RECOMMEND_ALL_1W: new BaseField('RECOMMEND_ALL_1W', {
    label: 'Recommend All|1W',
    fieldName: 'Recommend.All|1W',
    format: 'rating',
    interval: true,
    historical: false,
  }),

  RECOMMEND_ALL_240: new BaseField('RECOMMEND_ALL_240', {
    label: 'Recommend All|240',
    fieldName: 'Recommend.All|240',
    format: 'rating',
    interval: true,
    historical: false,
  }),

  RECOMMEND_ALL_30: new BaseField('RECOMMEND_ALL_30', {
    label: 'Recommend All|30',
    fieldName: 'Recommend.All|30',
    format: 'rating',
    interval: true,
    historical: false,
  }),

  RECOMMEND_ALL_5: new BaseField('RECOMMEND_ALL_5', {
    label: 'Recommend All|5',
    fieldName: 'Recommend.All|5',
    format: 'rating',
    interval: true,
    historical: false,
  }),

  RECOMMEND_ALL_60: new BaseField('RECOMMEND_ALL_60', {
    label: 'Recommend All|60',
    fieldName: 'Recommend.All|60',
    format: 'rating',
    interval: true,
    historical: false,
  }),

  OSCILLATORS_RATING: new BaseField('OSCILLATORS_RATING', {
    label: 'Oscillators Rating',
    fieldName: 'Recommend.Other',
    format: 'text',
    interval: true,
    historical: false,
  }),

  RECOMMEND_OTHER_1: new BaseField('RECOMMEND_OTHER_1', {
    label: 'Recommend Other|1',
    fieldName: 'Recommend.Other|1',
    format: 'rating',
    interval: true,
    historical: false,
  }),

  RECOMMEND_OTHER_120: new BaseField('RECOMMEND_OTHER_120', {
    label: 'Recommend Other|120',
    fieldName: 'Recommend.Other|120',
    format: 'rating',
    interval: true,
    historical: false,
  }),

  RECOMMEND_OTHER_15: new BaseField('RECOMMEND_OTHER_15', {
    label: 'Recommend Other|15',
    fieldName: 'Recommend.Other|15',
    format: 'rating',
    interval: true,
    historical: false,
  }),

  RECOMMEND_OTHER_1M: new BaseField('RECOMMEND_OTHER_1M', {
    label: 'Recommend Other|1M',
    fieldName: 'Recommend.Other|1M',
    format: 'rating',
    interval: true,
    historical: false,
  }),

  RECOMMEND_OTHER_1W: new BaseField('RECOMMEND_OTHER_1W', {
    label: 'Recommend Other|1W',
    fieldName: 'Recommend.Other|1W',
    format: 'rating',
    interval: true,
    historical: false,
  }),

  RECOMMEND_OTHER_240: new BaseField('RECOMMEND_OTHER_240', {
    label: 'Recommend Other|240',
    fieldName: 'Recommend.Other|240',
    format: 'rating',
    interval: true,
    historical: false,
  }),

  RECOMMEND_OTHER_30: new BaseField('RECOMMEND_OTHER_30', {
    label: 'Recommend Other|30',
    fieldName: 'Recommend.Other|30',
    format: 'rating',
    interval: true,
    historical: false,
  }),

  RECOMMEND_OTHER_5: new BaseField('RECOMMEND_OTHER_5', {
    label: 'Recommend Other|5',
    fieldName: 'Recommend.Other|5',
    format: 'rating',
    interval: true,
    historical: false,
  }),

  RECOMMEND_OTHER_60: new BaseField('RECOMMEND_OTHER_60', {
    label: 'Recommend Other|60',
    fieldName: 'Recommend.Other|60',
    format: 'rating',
    interval: true,
    historical: false,
  }),

  // === Other (317 fields) ===

  AWESOME_OSCILLATOR: new BaseField('AWESOME_OSCILLATOR', {
    label: 'Awesome Oscillator',
    fieldName: 'AO',
    format: 'computed_recommendation',
    interval: true,
    historical: true,
  }),

  AO_1: new BaseField('AO_1', {
    label: 'AO[1]',
    fieldName: 'AO[1]',
    format: 'float',
    interval: true,
    historical: true,
  }),

  AO_1_1: new BaseField('AO_1_1', {
    label: 'AO[1]|1',
    fieldName: 'AO[1]|1',
    format: 'float',
    interval: true,
    historical: true,
  }),

  AO_1_120: new BaseField('AO_1_120', {
    label: 'AO[1]|120',
    fieldName: 'AO[1]|120',
    format: 'float',
    interval: true,
    historical: true,
  }),

  AO_1_15: new BaseField('AO_1_15', {
    label: 'AO[1]|15',
    fieldName: 'AO[1]|15',
    format: 'float',
    interval: true,
    historical: true,
  }),

  AO_1_1M: new BaseField('AO_1_1M', {
    label: 'AO[1]|1M',
    fieldName: 'AO[1]|1M',
    format: 'float',
    interval: true,
    historical: true,
  }),

  AO_1_1W: new BaseField('AO_1_1W', {
    label: 'AO[1]|1W',
    fieldName: 'AO[1]|1W',
    format: 'float',
    interval: true,
    historical: true,
  }),

  AO_1_240: new BaseField('AO_1_240', {
    label: 'AO[1]|240',
    fieldName: 'AO[1]|240',
    format: 'float',
    interval: true,
    historical: true,
  }),

  AO_1_30: new BaseField('AO_1_30', {
    label: 'AO[1]|30',
    fieldName: 'AO[1]|30',
    format: 'float',
    interval: true,
    historical: true,
  }),

  AO_1_5: new BaseField('AO_1_5', {
    label: 'AO[1]|5',
    fieldName: 'AO[1]|5',
    format: 'float',
    interval: true,
    historical: true,
  }),

  AO_1_60: new BaseField('AO_1_60', {
    label: 'AO[1]|60',
    fieldName: 'AO[1]|60',
    format: 'float',
    interval: true,
    historical: true,
  }),

  AO_2: new BaseField('AO_2', {
    label: 'AO[2]',
    fieldName: 'AO[2]',
    format: 'float',
    interval: true,
    historical: true,
  }),

  AO_2_1: new BaseField('AO_2_1', {
    label: 'AO[2]|1',
    fieldName: 'AO[2]|1',
    format: 'float',
    interval: true,
    historical: true,
  }),

  AO_2_120: new BaseField('AO_2_120', {
    label: 'AO[2]|120',
    fieldName: 'AO[2]|120',
    format: 'float',
    interval: true,
    historical: true,
  }),

  AO_2_15: new BaseField('AO_2_15', {
    label: 'AO[2]|15',
    fieldName: 'AO[2]|15',
    format: 'float',
    interval: true,
    historical: true,
  }),

  AO_2_1M: new BaseField('AO_2_1M', {
    label: 'AO[2]|1M',
    fieldName: 'AO[2]|1M',
    format: 'float',
    interval: true,
    historical: true,
  }),

  AO_2_1W: new BaseField('AO_2_1W', {
    label: 'AO[2]|1W',
    fieldName: 'AO[2]|1W',
    format: 'float',
    interval: true,
    historical: true,
  }),

  AO_2_240: new BaseField('AO_2_240', {
    label: 'AO[2]|240',
    fieldName: 'AO[2]|240',
    format: 'float',
    interval: true,
    historical: true,
  }),

  AO_2_30: new BaseField('AO_2_30', {
    label: 'AO[2]|30',
    fieldName: 'AO[2]|30',
    format: 'float',
    interval: true,
    historical: true,
  }),

  AO_2_5: new BaseField('AO_2_5', {
    label: 'AO[2]|5',
    fieldName: 'AO[2]|5',
    format: 'float',
    interval: true,
    historical: true,
  }),

  AO_2_60: new BaseField('AO_2_60', {
    label: 'AO[2]|60',
    fieldName: 'AO[2]|60',
    format: 'float',
    interval: true,
    historical: true,
  }),

  AO_1_2: new BaseField('AO_1_2', {
    label: 'AO|1',
    fieldName: 'AO|1',
    format: 'float',
    interval: true,
    historical: true,
  }),

  AO_120: new BaseField('AO_120', {
    label: 'AO|120',
    fieldName: 'AO|120',
    format: 'float',
    interval: true,
    historical: true,
  }),

  AO_15: new BaseField('AO_15', {
    label: 'AO|15',
    fieldName: 'AO|15',
    format: 'float',
    interval: true,
    historical: true,
  }),

  AO_1M: new BaseField('AO_1M', {
    label: 'AO|1M',
    fieldName: 'AO|1M',
    format: 'float',
    interval: true,
    historical: true,
  }),

  AO_1W: new BaseField('AO_1W', {
    label: 'AO|1W',
    fieldName: 'AO|1W',
    format: 'float',
    interval: true,
    historical: true,
  }),

  AO_240: new BaseField('AO_240', {
    label: 'AO|240',
    fieldName: 'AO|240',
    format: 'float',
    interval: true,
    historical: true,
  }),

  AO_30: new BaseField('AO_30', {
    label: 'AO|30',
    fieldName: 'AO|30',
    format: 'float',
    interval: true,
    historical: true,
  }),

  AO_5: new BaseField('AO_5', {
    label: 'AO|5',
    fieldName: 'AO|5',
    format: 'float',
    interval: true,
    historical: true,
  }),

  AO_60: new BaseField('AO_60', {
    label: 'AO|60',
    fieldName: 'AO|60',
    format: 'float',
    interval: true,
    historical: true,
  }),

  CANDLE_3WHITESOLDIERS: new BaseField('CANDLE_3WHITESOLDIERS', {
    label: 'Candle.3WhiteSoldiers',
    fieldName: 'Candle.3WhiteSoldiers',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_3WHITESOLDIERS_1: new BaseField('CANDLE_3WHITESOLDIERS_1', {
    label: 'Candle 3Whitesoldiers|1',
    fieldName: 'Candle.3WhiteSoldiers|1',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_3WHITESOLDIERS_120: new BaseField('CANDLE_3WHITESOLDIERS_120', {
    label: 'Candle 3Whitesoldiers|120',
    fieldName: 'Candle.3WhiteSoldiers|120',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_3WHITESOLDIERS_15: new BaseField('CANDLE_3WHITESOLDIERS_15', {
    label: 'Candle 3Whitesoldiers|15',
    fieldName: 'Candle.3WhiteSoldiers|15',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_3WHITESOLDIERS_1M: new BaseField('CANDLE_3WHITESOLDIERS_1M', {
    label: 'Candle 3Whitesoldiers|1M',
    fieldName: 'Candle.3WhiteSoldiers|1M',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_3WHITESOLDIERS_1W: new BaseField('CANDLE_3WHITESOLDIERS_1W', {
    label: 'Candle 3Whitesoldiers|1W',
    fieldName: 'Candle.3WhiteSoldiers|1W',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_3WHITESOLDIERS_240: new BaseField('CANDLE_3WHITESOLDIERS_240', {
    label: 'Candle 3Whitesoldiers|240',
    fieldName: 'Candle.3WhiteSoldiers|240',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_3WHITESOLDIERS_30: new BaseField('CANDLE_3WHITESOLDIERS_30', {
    label: 'Candle 3Whitesoldiers|30',
    fieldName: 'Candle.3WhiteSoldiers|30',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_3WHITESOLDIERS_5: new BaseField('CANDLE_3WHITESOLDIERS_5', {
    label: 'Candle 3Whitesoldiers|5',
    fieldName: 'Candle.3WhiteSoldiers|5',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_3WHITESOLDIERS_60: new BaseField('CANDLE_3WHITESOLDIERS_60', {
    label: 'Candle 3Whitesoldiers|60',
    fieldName: 'Candle.3WhiteSoldiers|60',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_ABANDONEDBABY_BEARISH: new BaseField('CANDLE_ABANDONEDBABY_BEARISH', {
    label: 'Candle.AbandonedBaby.Bearish',
    fieldName: 'Candle.AbandonedBaby.Bearish',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_ABANDONEDBABY_BEARISH_1: new BaseField('CANDLE_ABANDONEDBABY_BEARISH_1', {
    label: 'Candle Abandonedbaby Bearish|1',
    fieldName: 'Candle.AbandonedBaby.Bearish|1',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_ABANDONEDBABY_BEARISH_120: new BaseField('CANDLE_ABANDONEDBABY_BEARISH_120', {
    label: 'Candle Abandonedbaby Bearish|120',
    fieldName: 'Candle.AbandonedBaby.Bearish|120',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_ABANDONEDBABY_BEARISH_15: new BaseField('CANDLE_ABANDONEDBABY_BEARISH_15', {
    label: 'Candle Abandonedbaby Bearish|15',
    fieldName: 'Candle.AbandonedBaby.Bearish|15',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_ABANDONEDBABY_BEARISH_1M: new BaseField('CANDLE_ABANDONEDBABY_BEARISH_1M', {
    label: 'Candle Abandonedbaby Bearish|1M',
    fieldName: 'Candle.AbandonedBaby.Bearish|1M',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_ABANDONEDBABY_BEARISH_1W: new BaseField('CANDLE_ABANDONEDBABY_BEARISH_1W', {
    label: 'Candle Abandonedbaby Bearish|1W',
    fieldName: 'Candle.AbandonedBaby.Bearish|1W',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_ABANDONEDBABY_BEARISH_240: new BaseField('CANDLE_ABANDONEDBABY_BEARISH_240', {
    label: 'Candle Abandonedbaby Bearish|240',
    fieldName: 'Candle.AbandonedBaby.Bearish|240',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_ABANDONEDBABY_BEARISH_30: new BaseField('CANDLE_ABANDONEDBABY_BEARISH_30', {
    label: 'Candle Abandonedbaby Bearish|30',
    fieldName: 'Candle.AbandonedBaby.Bearish|30',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_ABANDONEDBABY_BEARISH_5: new BaseField('CANDLE_ABANDONEDBABY_BEARISH_5', {
    label: 'Candle Abandonedbaby Bearish|5',
    fieldName: 'Candle.AbandonedBaby.Bearish|5',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_ABANDONEDBABY_BEARISH_60: new BaseField('CANDLE_ABANDONEDBABY_BEARISH_60', {
    label: 'Candle Abandonedbaby Bearish|60',
    fieldName: 'Candle.AbandonedBaby.Bearish|60',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_ABANDONEDBABY_BULLISH: new BaseField('CANDLE_ABANDONEDBABY_BULLISH', {
    label: 'Candle.AbandonedBaby.Bullish',
    fieldName: 'Candle.AbandonedBaby.Bullish',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_ABANDONEDBABY_BULLISH_1: new BaseField('CANDLE_ABANDONEDBABY_BULLISH_1', {
    label: 'Candle Abandonedbaby Bullish|1',
    fieldName: 'Candle.AbandonedBaby.Bullish|1',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_ABANDONEDBABY_BULLISH_120: new BaseField('CANDLE_ABANDONEDBABY_BULLISH_120', {
    label: 'Candle Abandonedbaby Bullish|120',
    fieldName: 'Candle.AbandonedBaby.Bullish|120',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_ABANDONEDBABY_BULLISH_15: new BaseField('CANDLE_ABANDONEDBABY_BULLISH_15', {
    label: 'Candle Abandonedbaby Bullish|15',
    fieldName: 'Candle.AbandonedBaby.Bullish|15',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_ABANDONEDBABY_BULLISH_1M: new BaseField('CANDLE_ABANDONEDBABY_BULLISH_1M', {
    label: 'Candle Abandonedbaby Bullish|1M',
    fieldName: 'Candle.AbandonedBaby.Bullish|1M',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_ABANDONEDBABY_BULLISH_1W: new BaseField('CANDLE_ABANDONEDBABY_BULLISH_1W', {
    label: 'Candle Abandonedbaby Bullish|1W',
    fieldName: 'Candle.AbandonedBaby.Bullish|1W',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_ABANDONEDBABY_BULLISH_240: new BaseField('CANDLE_ABANDONEDBABY_BULLISH_240', {
    label: 'Candle Abandonedbaby Bullish|240',
    fieldName: 'Candle.AbandonedBaby.Bullish|240',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_ABANDONEDBABY_BULLISH_30: new BaseField('CANDLE_ABANDONEDBABY_BULLISH_30', {
    label: 'Candle Abandonedbaby Bullish|30',
    fieldName: 'Candle.AbandonedBaby.Bullish|30',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_ABANDONEDBABY_BULLISH_5: new BaseField('CANDLE_ABANDONEDBABY_BULLISH_5', {
    label: 'Candle Abandonedbaby Bullish|5',
    fieldName: 'Candle.AbandonedBaby.Bullish|5',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_ABANDONEDBABY_BULLISH_60: new BaseField('CANDLE_ABANDONEDBABY_BULLISH_60', {
    label: 'Candle Abandonedbaby Bullish|60',
    fieldName: 'Candle.AbandonedBaby.Bullish|60',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_EVENINGSTAR: new BaseField('CANDLE_EVENINGSTAR', {
    label: 'Candle.EveningStar',
    fieldName: 'Candle.EveningStar',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_EVENINGSTAR_1: new BaseField('CANDLE_EVENINGSTAR_1', {
    label: 'Candle Eveningstar|1',
    fieldName: 'Candle.EveningStar|1',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_EVENINGSTAR_120: new BaseField('CANDLE_EVENINGSTAR_120', {
    label: 'Candle Eveningstar|120',
    fieldName: 'Candle.EveningStar|120',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_EVENINGSTAR_15: new BaseField('CANDLE_EVENINGSTAR_15', {
    label: 'Candle Eveningstar|15',
    fieldName: 'Candle.EveningStar|15',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_EVENINGSTAR_1M: new BaseField('CANDLE_EVENINGSTAR_1M', {
    label: 'Candle Eveningstar|1M',
    fieldName: 'Candle.EveningStar|1M',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_EVENINGSTAR_1W: new BaseField('CANDLE_EVENINGSTAR_1W', {
    label: 'Candle Eveningstar|1W',
    fieldName: 'Candle.EveningStar|1W',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_EVENINGSTAR_240: new BaseField('CANDLE_EVENINGSTAR_240', {
    label: 'Candle Eveningstar|240',
    fieldName: 'Candle.EveningStar|240',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_EVENINGSTAR_30: new BaseField('CANDLE_EVENINGSTAR_30', {
    label: 'Candle Eveningstar|30',
    fieldName: 'Candle.EveningStar|30',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_EVENINGSTAR_5: new BaseField('CANDLE_EVENINGSTAR_5', {
    label: 'Candle Eveningstar|5',
    fieldName: 'Candle.EveningStar|5',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_EVENINGSTAR_60: new BaseField('CANDLE_EVENINGSTAR_60', {
    label: 'Candle Eveningstar|60',
    fieldName: 'Candle.EveningStar|60',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_MORNINGSTAR: new BaseField('CANDLE_MORNINGSTAR', {
    label: 'Candle.MorningStar',
    fieldName: 'Candle.MorningStar',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_MORNINGSTAR_1: new BaseField('CANDLE_MORNINGSTAR_1', {
    label: 'Candle Morningstar|1',
    fieldName: 'Candle.MorningStar|1',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_MORNINGSTAR_120: new BaseField('CANDLE_MORNINGSTAR_120', {
    label: 'Candle Morningstar|120',
    fieldName: 'Candle.MorningStar|120',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_MORNINGSTAR_15: new BaseField('CANDLE_MORNINGSTAR_15', {
    label: 'Candle Morningstar|15',
    fieldName: 'Candle.MorningStar|15',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_MORNINGSTAR_1M: new BaseField('CANDLE_MORNINGSTAR_1M', {
    label: 'Candle Morningstar|1M',
    fieldName: 'Candle.MorningStar|1M',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_MORNINGSTAR_1W: new BaseField('CANDLE_MORNINGSTAR_1W', {
    label: 'Candle Morningstar|1W',
    fieldName: 'Candle.MorningStar|1W',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_MORNINGSTAR_240: new BaseField('CANDLE_MORNINGSTAR_240', {
    label: 'Candle Morningstar|240',
    fieldName: 'Candle.MorningStar|240',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_MORNINGSTAR_30: new BaseField('CANDLE_MORNINGSTAR_30', {
    label: 'Candle Morningstar|30',
    fieldName: 'Candle.MorningStar|30',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_MORNINGSTAR_5: new BaseField('CANDLE_MORNINGSTAR_5', {
    label: 'Candle Morningstar|5',
    fieldName: 'Candle.MorningStar|5',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_MORNINGSTAR_60: new BaseField('CANDLE_MORNINGSTAR_60', {
    label: 'Candle Morningstar|60',
    fieldName: 'Candle.MorningStar|60',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_SHOOTINGSTAR: new BaseField('CANDLE_SHOOTINGSTAR', {
    label: 'Candle.ShootingStar',
    fieldName: 'Candle.ShootingStar',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_SHOOTINGSTAR_1: new BaseField('CANDLE_SHOOTINGSTAR_1', {
    label: 'Candle Shootingstar|1',
    fieldName: 'Candle.ShootingStar|1',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_SHOOTINGSTAR_120: new BaseField('CANDLE_SHOOTINGSTAR_120', {
    label: 'Candle Shootingstar|120',
    fieldName: 'Candle.ShootingStar|120',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_SHOOTINGSTAR_15: new BaseField('CANDLE_SHOOTINGSTAR_15', {
    label: 'Candle Shootingstar|15',
    fieldName: 'Candle.ShootingStar|15',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_SHOOTINGSTAR_1M: new BaseField('CANDLE_SHOOTINGSTAR_1M', {
    label: 'Candle Shootingstar|1M',
    fieldName: 'Candle.ShootingStar|1M',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_SHOOTINGSTAR_1W: new BaseField('CANDLE_SHOOTINGSTAR_1W', {
    label: 'Candle Shootingstar|1W',
    fieldName: 'Candle.ShootingStar|1W',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_SHOOTINGSTAR_240: new BaseField('CANDLE_SHOOTINGSTAR_240', {
    label: 'Candle Shootingstar|240',
    fieldName: 'Candle.ShootingStar|240',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_SHOOTINGSTAR_30: new BaseField('CANDLE_SHOOTINGSTAR_30', {
    label: 'Candle Shootingstar|30',
    fieldName: 'Candle.ShootingStar|30',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_SHOOTINGSTAR_5: new BaseField('CANDLE_SHOOTINGSTAR_5', {
    label: 'Candle Shootingstar|5',
    fieldName: 'Candle.ShootingStar|5',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_SHOOTINGSTAR_60: new BaseField('CANDLE_SHOOTINGSTAR_60', {
    label: 'Candle Shootingstar|60',
    fieldName: 'Candle.ShootingStar|60',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_SPINNINGTOP_BLACK: new BaseField('CANDLE_SPINNINGTOP_BLACK', {
    label: 'Candle.SpinningTop.Black',
    fieldName: 'Candle.SpinningTop.Black',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_SPINNINGTOP_BLACK_1: new BaseField('CANDLE_SPINNINGTOP_BLACK_1', {
    label: 'Candle Spinningtop Black|1',
    fieldName: 'Candle.SpinningTop.Black|1',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_SPINNINGTOP_BLACK_120: new BaseField('CANDLE_SPINNINGTOP_BLACK_120', {
    label: 'Candle Spinningtop Black|120',
    fieldName: 'Candle.SpinningTop.Black|120',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_SPINNINGTOP_BLACK_15: new BaseField('CANDLE_SPINNINGTOP_BLACK_15', {
    label: 'Candle Spinningtop Black|15',
    fieldName: 'Candle.SpinningTop.Black|15',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_SPINNINGTOP_BLACK_1M: new BaseField('CANDLE_SPINNINGTOP_BLACK_1M', {
    label: 'Candle Spinningtop Black|1M',
    fieldName: 'Candle.SpinningTop.Black|1M',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_SPINNINGTOP_BLACK_1W: new BaseField('CANDLE_SPINNINGTOP_BLACK_1W', {
    label: 'Candle Spinningtop Black|1W',
    fieldName: 'Candle.SpinningTop.Black|1W',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_SPINNINGTOP_BLACK_240: new BaseField('CANDLE_SPINNINGTOP_BLACK_240', {
    label: 'Candle Spinningtop Black|240',
    fieldName: 'Candle.SpinningTop.Black|240',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_SPINNINGTOP_BLACK_30: new BaseField('CANDLE_SPINNINGTOP_BLACK_30', {
    label: 'Candle Spinningtop Black|30',
    fieldName: 'Candle.SpinningTop.Black|30',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_SPINNINGTOP_BLACK_5: new BaseField('CANDLE_SPINNINGTOP_BLACK_5', {
    label: 'Candle Spinningtop Black|5',
    fieldName: 'Candle.SpinningTop.Black|5',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_SPINNINGTOP_BLACK_60: new BaseField('CANDLE_SPINNINGTOP_BLACK_60', {
    label: 'Candle Spinningtop Black|60',
    fieldName: 'Candle.SpinningTop.Black|60',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_SPINNINGTOP_WHITE: new BaseField('CANDLE_SPINNINGTOP_WHITE', {
    label: 'Candle.SpinningTop.White',
    fieldName: 'Candle.SpinningTop.White',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_SPINNINGTOP_WHITE_1: new BaseField('CANDLE_SPINNINGTOP_WHITE_1', {
    label: 'Candle Spinningtop White|1',
    fieldName: 'Candle.SpinningTop.White|1',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_SPINNINGTOP_WHITE_120: new BaseField('CANDLE_SPINNINGTOP_WHITE_120', {
    label: 'Candle Spinningtop White|120',
    fieldName: 'Candle.SpinningTop.White|120',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_SPINNINGTOP_WHITE_15: new BaseField('CANDLE_SPINNINGTOP_WHITE_15', {
    label: 'Candle Spinningtop White|15',
    fieldName: 'Candle.SpinningTop.White|15',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_SPINNINGTOP_WHITE_1M: new BaseField('CANDLE_SPINNINGTOP_WHITE_1M', {
    label: 'Candle Spinningtop White|1M',
    fieldName: 'Candle.SpinningTop.White|1M',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_SPINNINGTOP_WHITE_1W: new BaseField('CANDLE_SPINNINGTOP_WHITE_1W', {
    label: 'Candle Spinningtop White|1W',
    fieldName: 'Candle.SpinningTop.White|1W',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_SPINNINGTOP_WHITE_240: new BaseField('CANDLE_SPINNINGTOP_WHITE_240', {
    label: 'Candle Spinningtop White|240',
    fieldName: 'Candle.SpinningTop.White|240',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_SPINNINGTOP_WHITE_30: new BaseField('CANDLE_SPINNINGTOP_WHITE_30', {
    label: 'Candle Spinningtop White|30',
    fieldName: 'Candle.SpinningTop.White|30',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_SPINNINGTOP_WHITE_5: new BaseField('CANDLE_SPINNINGTOP_WHITE_5', {
    label: 'Candle Spinningtop White|5',
    fieldName: 'Candle.SpinningTop.White|5',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_SPINNINGTOP_WHITE_60: new BaseField('CANDLE_SPINNINGTOP_WHITE_60', {
    label: 'Candle Spinningtop White|60',
    fieldName: 'Candle.SpinningTop.White|60',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  DONCHCH20_MIDDLE: new BaseField('DONCHCH20_MIDDLE', {
    label: 'Donchch20 Middle',
    fieldName: 'DonchCh20.Middle',
    format: 'float',
    interval: true,
    historical: false,
  }),

  DONCHCH20_MIDDLE_1: new BaseField('DONCHCH20_MIDDLE_1', {
    label: 'Donchch20 Middle|1',
    fieldName: 'DonchCh20.Middle|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  DONCHCH20_MIDDLE_120: new BaseField('DONCHCH20_MIDDLE_120', {
    label: 'Donchch20 Middle|120',
    fieldName: 'DonchCh20.Middle|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  DONCHCH20_MIDDLE_15: new BaseField('DONCHCH20_MIDDLE_15', {
    label: 'Donchch20 Middle|15',
    fieldName: 'DonchCh20.Middle|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  DONCHCH20_MIDDLE_1M: new BaseField('DONCHCH20_MIDDLE_1M', {
    label: 'Donchch20 Middle|1M',
    fieldName: 'DonchCh20.Middle|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  DONCHCH20_MIDDLE_1W: new BaseField('DONCHCH20_MIDDLE_1W', {
    label: 'Donchch20 Middle|1W',
    fieldName: 'DonchCh20.Middle|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  DONCHCH20_MIDDLE_240: new BaseField('DONCHCH20_MIDDLE_240', {
    label: 'Donchch20 Middle|240',
    fieldName: 'DonchCh20.Middle|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  DONCHCH20_MIDDLE_30: new BaseField('DONCHCH20_MIDDLE_30', {
    label: 'Donchch20 Middle|30',
    fieldName: 'DonchCh20.Middle|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  DONCHCH20_MIDDLE_5: new BaseField('DONCHCH20_MIDDLE_5', {
    label: 'Donchch20 Middle|5',
    fieldName: 'DonchCh20.Middle|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  DONCHCH20_MIDDLE_60: new BaseField('DONCHCH20_MIDDLE_60', {
    label: 'Donchch20 Middle|60',
    fieldName: 'DonchCh20.Middle|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  DONCHIAN_CHANNELS_UPPER_BAND_20: new BaseField('DONCHIAN_CHANNELS_UPPER_BAND_20', {
    label: 'Donchian Channels Upper Band (20)',
    fieldName: 'DonchCh20.Upper',
    format: 'float',
    interval: true,
    historical: false,
  }),

  DONCHCH20_UPPER_1: new BaseField('DONCHCH20_UPPER_1', {
    label: 'Donchch20 Upper|1',
    fieldName: 'DonchCh20.Upper|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  DONCHCH20_UPPER_120: new BaseField('DONCHCH20_UPPER_120', {
    label: 'Donchch20 Upper|120',
    fieldName: 'DonchCh20.Upper|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  DONCHCH20_UPPER_15: new BaseField('DONCHCH20_UPPER_15', {
    label: 'Donchch20 Upper|15',
    fieldName: 'DonchCh20.Upper|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  DONCHCH20_UPPER_1M: new BaseField('DONCHCH20_UPPER_1M', {
    label: 'Donchch20 Upper|1M',
    fieldName: 'DonchCh20.Upper|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  DONCHCH20_UPPER_1W: new BaseField('DONCHCH20_UPPER_1W', {
    label: 'Donchch20 Upper|1W',
    fieldName: 'DonchCh20.Upper|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  DONCHCH20_UPPER_240: new BaseField('DONCHCH20_UPPER_240', {
    label: 'Donchch20 Upper|240',
    fieldName: 'DonchCh20.Upper|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  DONCHCH20_UPPER_30: new BaseField('DONCHCH20_UPPER_30', {
    label: 'Donchch20 Upper|30',
    fieldName: 'DonchCh20.Upper|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  DONCHCH20_UPPER_5: new BaseField('DONCHCH20_UPPER_5', {
    label: 'Donchch20 Upper|5',
    fieldName: 'DonchCh20.Upper|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  DONCHCH20_UPPER_60: new BaseField('DONCHCH20_UPPER_60', {
    label: 'Donchch20 Upper|60',
    fieldName: 'DonchCh20.Upper|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  KLTCHNL_BASIS: new BaseField('KLTCHNL_BASIS', {
    label: 'Kltchnl Basis',
    fieldName: 'KltChnl.basis',
    format: 'float',
    interval: true,
    historical: false,
  }),

  KLTCHNL_BASIS_1: new BaseField('KLTCHNL_BASIS_1', {
    label: 'Kltchnl Basis|1',
    fieldName: 'KltChnl.basis|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  KLTCHNL_BASIS_120: new BaseField('KLTCHNL_BASIS_120', {
    label: 'Kltchnl Basis|120',
    fieldName: 'KltChnl.basis|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  KLTCHNL_BASIS_15: new BaseField('KLTCHNL_BASIS_15', {
    label: 'Kltchnl Basis|15',
    fieldName: 'KltChnl.basis|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  KLTCHNL_BASIS_1M: new BaseField('KLTCHNL_BASIS_1M', {
    label: 'Kltchnl Basis|1M',
    fieldName: 'KltChnl.basis|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  KLTCHNL_BASIS_1W: new BaseField('KLTCHNL_BASIS_1W', {
    label: 'Kltchnl Basis|1W',
    fieldName: 'KltChnl.basis|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  KLTCHNL_BASIS_240: new BaseField('KLTCHNL_BASIS_240', {
    label: 'Kltchnl Basis|240',
    fieldName: 'KltChnl.basis|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  KLTCHNL_BASIS_30: new BaseField('KLTCHNL_BASIS_30', {
    label: 'Kltchnl Basis|30',
    fieldName: 'KltChnl.basis|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  KLTCHNL_BASIS_5: new BaseField('KLTCHNL_BASIS_5', {
    label: 'Kltchnl Basis|5',
    fieldName: 'KltChnl.basis|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  KLTCHNL_BASIS_60: new BaseField('KLTCHNL_BASIS_60', {
    label: 'Kltchnl Basis|60',
    fieldName: 'KltChnl.basis|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  KELTNER_CHANNELS_UPPER_BAND_20: new BaseField('KELTNER_CHANNELS_UPPER_BAND_20', {
    label: 'Keltner Channels Upper Band (20)',
    fieldName: 'KltChnl.upper',
    format: 'float',
    interval: true,
    historical: false,
  }),

  KLTCHNL_UPPER_1: new BaseField('KLTCHNL_UPPER_1', {
    label: 'Kltchnl Upper|1',
    fieldName: 'KltChnl.upper|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  KLTCHNL_UPPER_120: new BaseField('KLTCHNL_UPPER_120', {
    label: 'Kltchnl Upper|120',
    fieldName: 'KltChnl.upper|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  KLTCHNL_UPPER_15: new BaseField('KLTCHNL_UPPER_15', {
    label: 'Kltchnl Upper|15',
    fieldName: 'KltChnl.upper|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  KLTCHNL_UPPER_1M: new BaseField('KLTCHNL_UPPER_1M', {
    label: 'Kltchnl Upper|1M',
    fieldName: 'KltChnl.upper|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  KLTCHNL_UPPER_1W: new BaseField('KLTCHNL_UPPER_1W', {
    label: 'Kltchnl Upper|1W',
    fieldName: 'KltChnl.upper|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  KLTCHNL_UPPER_240: new BaseField('KLTCHNL_UPPER_240', {
    label: 'Kltchnl Upper|240',
    fieldName: 'KltChnl.upper|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  KLTCHNL_UPPER_30: new BaseField('KLTCHNL_UPPER_30', {
    label: 'Kltchnl Upper|30',
    fieldName: 'KltChnl.upper|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  KLTCHNL_UPPER_5: new BaseField('KLTCHNL_UPPER_5', {
    label: 'Kltchnl Upper|5',
    fieldName: 'KltChnl.upper|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  KLTCHNL_UPPER_60: new BaseField('KLTCHNL_UPPER_60', {
    label: 'Kltchnl Upper|60',
    fieldName: 'KltChnl.upper|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  MOMENTUM_10: new BaseField('MOMENTUM_10', {
    label: 'Momentum (10)',
    fieldName: 'Mom',
    format: 'computed_recommendation',
    interval: true,
    historical: true,
  }),

  MOM_1: new BaseField('MOM_1', {
    label: 'Mom[1]',
    fieldName: 'Mom[1]',
    format: 'float',
    interval: true,
    historical: true,
  }),

  MOM_1_1: new BaseField('MOM_1_1', {
    label: 'Mom[1]|1',
    fieldName: 'Mom[1]|1',
    format: 'float',
    interval: true,
    historical: true,
  }),

  MOM_1_120: new BaseField('MOM_1_120', {
    label: 'Mom[1]|120',
    fieldName: 'Mom[1]|120',
    format: 'float',
    interval: true,
    historical: true,
  }),

  MOM_1_15: new BaseField('MOM_1_15', {
    label: 'Mom[1]|15',
    fieldName: 'Mom[1]|15',
    format: 'float',
    interval: true,
    historical: true,
  }),

  MOM_1_1M: new BaseField('MOM_1_1M', {
    label: 'Mom[1]|1M',
    fieldName: 'Mom[1]|1M',
    format: 'float',
    interval: true,
    historical: true,
  }),

  MOM_1_1W: new BaseField('MOM_1_1W', {
    label: 'Mom[1]|1W',
    fieldName: 'Mom[1]|1W',
    format: 'float',
    interval: true,
    historical: true,
  }),

  MOM_1_240: new BaseField('MOM_1_240', {
    label: 'Mom[1]|240',
    fieldName: 'Mom[1]|240',
    format: 'float',
    interval: true,
    historical: true,
  }),

  MOM_1_30: new BaseField('MOM_1_30', {
    label: 'Mom[1]|30',
    fieldName: 'Mom[1]|30',
    format: 'float',
    interval: true,
    historical: true,
  }),

  MOM_1_5: new BaseField('MOM_1_5', {
    label: 'Mom[1]|5',
    fieldName: 'Mom[1]|5',
    format: 'float',
    interval: true,
    historical: true,
  }),

  MOM_1_60: new BaseField('MOM_1_60', {
    label: 'Mom[1]|60',
    fieldName: 'Mom[1]|60',
    format: 'float',
    interval: true,
    historical: true,
  }),

  MOM_14: new BaseField('MOM_14', {
    label: 'Mom 14',
    fieldName: 'Mom_14',
    format: 'float',
    interval: true,
    historical: true,
  }),

  MOM_14_1: new BaseField('MOM_14_1', {
    label: 'Mom 14[1]',
    fieldName: 'Mom_14[1]',
    format: 'float',
    interval: true,
    historical: true,
  }),

  MOM_14_1_1: new BaseField('MOM_14_1_1', {
    label: 'Mom 14[1]|1',
    fieldName: 'Mom_14[1]|1',
    format: 'float',
    interval: true,
    historical: true,
  }),

  MOM_14_1_120: new BaseField('MOM_14_1_120', {
    label: 'Mom 14[1]|120',
    fieldName: 'Mom_14[1]|120',
    format: 'float',
    interval: true,
    historical: true,
  }),

  MOM_14_1_15: new BaseField('MOM_14_1_15', {
    label: 'Mom 14[1]|15',
    fieldName: 'Mom_14[1]|15',
    format: 'float',
    interval: true,
    historical: true,
  }),

  MOM_14_1_1M: new BaseField('MOM_14_1_1M', {
    label: 'Mom 14[1]|1M',
    fieldName: 'Mom_14[1]|1M',
    format: 'float',
    interval: true,
    historical: true,
  }),

  MOM_14_1_1W: new BaseField('MOM_14_1_1W', {
    label: 'Mom 14[1]|1W',
    fieldName: 'Mom_14[1]|1W',
    format: 'float',
    interval: true,
    historical: true,
  }),

  MOM_14_1_240: new BaseField('MOM_14_1_240', {
    label: 'Mom 14[1]|240',
    fieldName: 'Mom_14[1]|240',
    format: 'float',
    interval: true,
    historical: true,
  }),

  MOM_14_1_30: new BaseField('MOM_14_1_30', {
    label: 'Mom 14[1]|30',
    fieldName: 'Mom_14[1]|30',
    format: 'float',
    interval: true,
    historical: true,
  }),

  MOM_14_1_5: new BaseField('MOM_14_1_5', {
    label: 'Mom 14[1]|5',
    fieldName: 'Mom_14[1]|5',
    format: 'float',
    interval: true,
    historical: true,
  }),

  MOM_14_1_60: new BaseField('MOM_14_1_60', {
    label: 'Mom 14[1]|60',
    fieldName: 'Mom_14[1]|60',
    format: 'float',
    interval: true,
    historical: true,
  }),

  MOM_14_1_2: new BaseField('MOM_14_1_2', {
    label: 'Mom 14|1',
    fieldName: 'Mom_14|1',
    format: 'float',
    interval: true,
    historical: true,
  }),

  MOM_14_120: new BaseField('MOM_14_120', {
    label: 'Mom 14|120',
    fieldName: 'Mom_14|120',
    format: 'float',
    interval: true,
    historical: true,
  }),

  MOM_14_15: new BaseField('MOM_14_15', {
    label: 'Mom 14|15',
    fieldName: 'Mom_14|15',
    format: 'float',
    interval: true,
    historical: true,
  }),

  MOM_14_1M: new BaseField('MOM_14_1M', {
    label: 'Mom 14|1M',
    fieldName: 'Mom_14|1M',
    format: 'float',
    interval: true,
    historical: true,
  }),

  MOM_14_1W: new BaseField('MOM_14_1W', {
    label: 'Mom 14|1W',
    fieldName: 'Mom_14|1W',
    format: 'float',
    interval: true,
    historical: true,
  }),

  MOM_14_240: new BaseField('MOM_14_240', {
    label: 'Mom 14|240',
    fieldName: 'Mom_14|240',
    format: 'float',
    interval: true,
    historical: true,
  }),

  MOM_14_30: new BaseField('MOM_14_30', {
    label: 'Mom 14|30',
    fieldName: 'Mom_14|30',
    format: 'float',
    interval: true,
    historical: true,
  }),

  MOM_14_5: new BaseField('MOM_14_5', {
    label: 'Mom 14|5',
    fieldName: 'Mom_14|5',
    format: 'float',
    interval: true,
    historical: true,
  }),

  MOM_14_60: new BaseField('MOM_14_60', {
    label: 'Mom 14|60',
    fieldName: 'Mom_14|60',
    format: 'float',
    interval: true,
    historical: true,
  }),

  MOM_1_2: new BaseField('MOM_1_2', {
    label: 'Mom|1',
    fieldName: 'Mom|1',
    format: 'float',
    interval: true,
    historical: true,
  }),

  MOM_120: new BaseField('MOM_120', {
    label: 'Mom|120',
    fieldName: 'Mom|120',
    format: 'float',
    interval: true,
    historical: true,
  }),

  MOM_15: new BaseField('MOM_15', {
    label: 'Mom|15',
    fieldName: 'Mom|15',
    format: 'float',
    interval: true,
    historical: true,
  }),

  MOM_1M: new BaseField('MOM_1M', {
    label: 'Mom|1M',
    fieldName: 'Mom|1M',
    format: 'float',
    interval: true,
    historical: true,
  }),

  MOM_1W: new BaseField('MOM_1W', {
    label: 'Mom|1W',
    fieldName: 'Mom|1W',
    format: 'float',
    interval: true,
    historical: true,
  }),

  MOM_240: new BaseField('MOM_240', {
    label: 'Mom|240',
    fieldName: 'Mom|240',
    format: 'float',
    interval: true,
    historical: true,
  }),

  MOM_30: new BaseField('MOM_30', {
    label: 'Mom|30',
    fieldName: 'Mom|30',
    format: 'float',
    interval: true,
    historical: true,
  }),

  MOM_5: new BaseField('MOM_5', {
    label: 'Mom|5',
    fieldName: 'Mom|5',
    format: 'float',
    interval: true,
    historical: true,
  }),

  MOM_60: new BaseField('MOM_60', {
    label: 'Mom|60',
    fieldName: 'Mom|60',
    format: 'float',
    interval: true,
    historical: true,
  }),

  PARABOLIC_SAR: new BaseField('PARABOLIC_SAR', {
    label: 'Parabolic SAR',
    fieldName: 'P.SAR',
    format: 'computed_recommendation',
    interval: true,
    historical: false,
  }),

  P_SAR_1: new BaseField('P_SAR_1', {
    label: 'P Sar|1',
    fieldName: 'P.SAR|1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  P_SAR_120: new BaseField('P_SAR_120', {
    label: 'P Sar|120',
    fieldName: 'P.SAR|120',
    format: 'float',
    interval: true,
    historical: false,
  }),

  P_SAR_15: new BaseField('P_SAR_15', {
    label: 'P Sar|15',
    fieldName: 'P.SAR|15',
    format: 'float',
    interval: true,
    historical: false,
  }),

  P_SAR_1M: new BaseField('P_SAR_1M', {
    label: 'P Sar|1M',
    fieldName: 'P.SAR|1M',
    format: 'float',
    interval: true,
    historical: false,
  }),

  P_SAR_1W: new BaseField('P_SAR_1W', {
    label: 'P Sar|1W',
    fieldName: 'P.SAR|1W',
    format: 'float',
    interval: true,
    historical: false,
  }),

  P_SAR_240: new BaseField('P_SAR_240', {
    label: 'P Sar|240',
    fieldName: 'P.SAR|240',
    format: 'float',
    interval: true,
    historical: false,
  }),

  P_SAR_30: new BaseField('P_SAR_30', {
    label: 'P Sar|30',
    fieldName: 'P.SAR|30',
    format: 'float',
    interval: true,
    historical: false,
  }),

  P_SAR_5: new BaseField('P_SAR_5', {
    label: 'P Sar|5',
    fieldName: 'P.SAR|5',
    format: 'float',
    interval: true,
    historical: false,
  }),

  P_SAR_60: new BaseField('P_SAR_60', {
    label: 'P Sar|60',
    fieldName: 'P.SAR|60',
    format: 'float',
    interval: true,
    historical: false,
  }),

  REC_WR: new BaseField('REC_WR', {
    label: 'Rec Wr',
    fieldName: 'Rec.WR',
    format: 'rating',
    interval: false,
    historical: false,
  }),

  REC_WR_1: new BaseField('REC_WR_1', {
    label: 'Rec Wr|1',
    fieldName: 'Rec.WR|1',
    format: 'rating',
    interval: false,
    historical: false,
  }),

  REC_WR_120: new BaseField('REC_WR_120', {
    label: 'Rec Wr|120',
    fieldName: 'Rec.WR|120',
    format: 'rating',
    interval: false,
    historical: false,
  }),

  REC_WR_15: new BaseField('REC_WR_15', {
    label: 'Rec Wr|15',
    fieldName: 'Rec.WR|15',
    format: 'rating',
    interval: false,
    historical: false,
  }),

  REC_WR_1M: new BaseField('REC_WR_1M', {
    label: 'Rec Wr|1M',
    fieldName: 'Rec.WR|1M',
    format: 'rating',
    interval: false,
    historical: false,
  }),

  REC_WR_1W: new BaseField('REC_WR_1W', {
    label: 'Rec Wr|1W',
    fieldName: 'Rec.WR|1W',
    format: 'rating',
    interval: false,
    historical: false,
  }),

  REC_WR_240: new BaseField('REC_WR_240', {
    label: 'Rec Wr|240',
    fieldName: 'Rec.WR|240',
    format: 'rating',
    interval: false,
    historical: false,
  }),

  REC_WR_30: new BaseField('REC_WR_30', {
    label: 'Rec Wr|30',
    fieldName: 'Rec.WR|30',
    format: 'rating',
    interval: false,
    historical: false,
  }),

  REC_WR_5: new BaseField('REC_WR_5', {
    label: 'Rec Wr|5',
    fieldName: 'Rec.WR|5',
    format: 'rating',
    interval: false,
    historical: false,
  }),

  REC_WR_60: new BaseField('REC_WR_60', {
    label: 'Rec Wr|60',
    fieldName: 'Rec.WR|60',
    format: 'rating',
    interval: false,
    historical: false,
  }),

  WILLIAMS_PERCENT_RANGE_14: new BaseField('WILLIAMS_PERCENT_RANGE_14', {
    label: 'Williams Percent Range (14)',
    fieldName: 'W.R',
    format: 'computed_recommendation',
    interval: true,
    historical: false,
  }),

  W_R_1: new BaseField('W_R_1', {
    label: 'W R|1',
    fieldName: 'W.R|1',
    format: 'float',
    interval: true,
    historical: true,
  }),

  W_R_120: new BaseField('W_R_120', {
    label: 'W R|120',
    fieldName: 'W.R|120',
    format: 'float',
    interval: true,
    historical: true,
  }),

  W_R_15: new BaseField('W_R_15', {
    label: 'W R|15',
    fieldName: 'W.R|15',
    format: 'float',
    interval: true,
    historical: true,
  }),

  W_R_1M: new BaseField('W_R_1M', {
    label: 'W R|1M',
    fieldName: 'W.R|1M',
    format: 'float',
    interval: true,
    historical: true,
  }),

  W_R_1W: new BaseField('W_R_1W', {
    label: 'W R|1W',
    fieldName: 'W.R|1W',
    format: 'float',
    interval: true,
    historical: true,
  }),

  W_R_240: new BaseField('W_R_240', {
    label: 'W R|240',
    fieldName: 'W.R|240',
    format: 'float',
    interval: true,
    historical: true,
  }),

  W_R_30: new BaseField('W_R_30', {
    label: 'W R|30',
    fieldName: 'W.R|30',
    format: 'float',
    interval: true,
    historical: true,
  }),

  W_R_5: new BaseField('W_R_5', {
    label: 'W R|5',
    fieldName: 'W.R|5',
    format: 'float',
    interval: true,
    historical: true,
  }),

  W_R_60: new BaseField('W_R_60', {
    label: 'W R|60',
    fieldName: 'W.R|60',
    format: 'float',
    interval: true,
    historical: true,
  }),

  ACTIVE_SYMBOL: new BaseField('ACTIVE_SYMBOL', {
    label: 'Active Symbol',
    fieldName: 'active_symbol',
    format: 'float',
    interval: false,
    historical: false,
  }),

  ASK: new BaseField('ASK', {
    label: 'Ask',
    fieldName: 'ask',
    format: 'float',
    interval: false,
    historical: false,
  }),

  BARS_COUNT: new BaseField('BARS_COUNT', {
    label: 'Bars Count',
    fieldName: 'bars_count',
    format: 'float',
    interval: false,
    historical: false,
  }),

  BARS_COUNT_1: new BaseField('BARS_COUNT_1', {
    label: 'Bars Count|1',
    fieldName: 'bars_count|1',
    format: 'float',
    interval: false,
    historical: false,
  }),

  BARS_COUNT_120: new BaseField('BARS_COUNT_120', {
    label: 'Bars Count|120',
    fieldName: 'bars_count|120',
    format: 'float',
    interval: false,
    historical: false,
  }),

  BARS_COUNT_15: new BaseField('BARS_COUNT_15', {
    label: 'Bars Count|15',
    fieldName: 'bars_count|15',
    format: 'float',
    interval: false,
    historical: false,
  }),

  BARS_COUNT_1M: new BaseField('BARS_COUNT_1M', {
    label: 'Bars Count|1M',
    fieldName: 'bars_count|1M',
    format: 'float',
    interval: false,
    historical: false,
  }),

  BARS_COUNT_1W: new BaseField('BARS_COUNT_1W', {
    label: 'Bars Count|1W',
    fieldName: 'bars_count|1W',
    format: 'float',
    interval: false,
    historical: false,
  }),

  BARS_COUNT_240: new BaseField('BARS_COUNT_240', {
    label: 'Bars Count|240',
    fieldName: 'bars_count|240',
    format: 'float',
    interval: false,
    historical: false,
  }),

  BARS_COUNT_30: new BaseField('BARS_COUNT_30', {
    label: 'Bars Count|30',
    fieldName: 'bars_count|30',
    format: 'float',
    interval: false,
    historical: false,
  }),

  BARS_COUNT_5: new BaseField('BARS_COUNT_5', {
    label: 'Bars Count|5',
    fieldName: 'bars_count|5',
    format: 'float',
    interval: false,
    historical: false,
  }),

  BARS_COUNT_60: new BaseField('BARS_COUNT_60', {
    label: 'Bars Count|60',
    fieldName: 'bars_count|60',
    format: 'float',
    interval: false,
    historical: false,
  }),

  BASE_CURRENCY_KIND: new BaseField('BASE_CURRENCY_KIND', {
    label: 'Base Currency Kind',
    fieldName: 'base_currency_kind',
    format: 'text',
    interval: false,
    historical: false,
  }),

  BID: new BaseField('BID', {
    label: 'Bid',
    fieldName: 'bid',
    format: 'float',
    interval: false,
    historical: false,
  }),

  REGION: new BaseField('REGION', {
    label: 'Region',
    fieldName: 'country',
    format: 'text',
    interval: false,
    historical: false,
  }),

  COUNTRY2: new BaseField('COUNTRY2', {
    label: 'Country2',
    fieldName: 'country2',
    format: 'text',
    interval: false,
    historical: false,
  }),

  COUNTRY_CODE: new BaseField('COUNTRY_CODE', {
    label: 'Country Code',
    fieldName: 'country_code',
    format: 'text',
    interval: false,
    historical: false,
  }),

  COUPON: new BaseField('COUPON', {
    label: 'Coupon',
    fieldName: 'coupon',
    format: 'float',
    interval: false,
    historical: false,
  }),

  CRYPTOASSET_MINUS_INFO_ID: new BaseField('CRYPTOASSET_MINUS_INFO_ID', {
    label: 'Cryptoasset-Info Id',
    fieldName: 'cryptoasset-info.id',
    format: 'float',
    interval: false,
    historical: false,
  }),

  CURRENCY: new BaseField('CURRENCY', {
    label: 'Currency',
    fieldName: 'currency',
    format: 'text',
    interval: false,
    historical: false,
  }),

  CURRENCY_ID: new BaseField('CURRENCY_ID', {
    label: 'Currency Id',
    fieldName: 'currency_id',
    format: 'text',
    interval: false,
    historical: false,
  }),

  CURRENCY_KIND: new BaseField('CURRENCY_KIND', {
    label: 'Currency Kind',
    fieldName: 'currency_kind',
    format: 'text',
    interval: false,
    historical: false,
  }),

  CURRENT_SESSION: new BaseField('CURRENT_SESSION', {
    label: 'Current Session',
    fieldName: 'current_session',
    format: 'float',
    interval: false,
    historical: false,
  }),

  EXPIRATION: new BaseField('EXPIRATION', {
    label: 'Expiration',
    fieldName: 'expiration',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  FIRST_BAR_TIME: new BaseField('FIRST_BAR_TIME', {
    label: 'First Bar Time',
    fieldName: 'first_bar_time',
    format: 'date',
    interval: false,
    historical: false,
  }),

  FOREX_EXOTIC_PRIORITY: new BaseField('FOREX_EXOTIC_PRIORITY', {
    label: 'Forex Exotic Priority',
    fieldName: 'forex_exotic_priority',
    format: 'float',
    interval: false,
    historical: false,
  }),

  FOREX_MINOR_PRIORITY: new BaseField('FOREX_MINOR_PRIORITY', {
    label: 'Forex Minor Priority',
    fieldName: 'forex_minor_priority',
    format: 'float',
    interval: false,
    historical: false,
  }),

  FOREX_PRIORITY: new BaseField('FOREX_PRIORITY', {
    label: 'Forex Priority',
    fieldName: 'forex_priority',
    format: 'float',
    interval: false,
    historical: false,
  }),

  FRACTIONAL: new BaseField('FRACTIONAL', {
    label: 'Fractional',
    fieldName: 'fractional',
    format: 'float',
    interval: false,
    historical: false,
  }),

  FUNDAMENTAL_CURRENCY_CODE: new BaseField('FUNDAMENTAL_CURRENCY_CODE', {
    label: 'Fundamental Currency Code',
    fieldName: 'fundamental_currency_code',
    format: 'text',
    interval: false,
    historical: false,
  }),

  INDEX_PRIORITY: new BaseField('INDEX_PRIORITY', {
    label: 'Index Priority',
    fieldName: 'index_priority',
    format: 'float',
    interval: false,
    historical: false,
  }),

  INDEXES: new BaseField('INDEXES', {
    label: 'Indexes',
    fieldName: 'indexes',
    format: 'float',
    interval: false,
    historical: false,
  }),

  INDICATORS_BARS_COUNT: new BaseField('INDICATORS_BARS_COUNT', {
    label: 'Indicators Bars Count',
    fieldName: 'indicators_bars_count',
    format: 'float',
    interval: false,
    historical: false,
  }),

  INDICATORS_BARS_COUNT_1: new BaseField('INDICATORS_BARS_COUNT_1', {
    label: 'Indicators Bars Count|1',
    fieldName: 'indicators_bars_count|1',
    format: 'float',
    interval: false,
    historical: false,
  }),

  INDICATORS_BARS_COUNT_120: new BaseField('INDICATORS_BARS_COUNT_120', {
    label: 'Indicators Bars Count|120',
    fieldName: 'indicators_bars_count|120',
    format: 'float',
    interval: false,
    historical: false,
  }),

  INDICATORS_BARS_COUNT_15: new BaseField('INDICATORS_BARS_COUNT_15', {
    label: 'Indicators Bars Count|15',
    fieldName: 'indicators_bars_count|15',
    format: 'float',
    interval: false,
    historical: false,
  }),

  INDICATORS_BARS_COUNT_1M: new BaseField('INDICATORS_BARS_COUNT_1M', {
    label: 'Indicators Bars Count|1M',
    fieldName: 'indicators_bars_count|1M',
    format: 'float',
    interval: false,
    historical: false,
  }),

  INDICATORS_BARS_COUNT_1W: new BaseField('INDICATORS_BARS_COUNT_1W', {
    label: 'Indicators Bars Count|1W',
    fieldName: 'indicators_bars_count|1W',
    format: 'float',
    interval: false,
    historical: false,
  }),

  INDICATORS_BARS_COUNT_240: new BaseField('INDICATORS_BARS_COUNT_240', {
    label: 'Indicators Bars Count|240',
    fieldName: 'indicators_bars_count|240',
    format: 'float',
    interval: false,
    historical: false,
  }),

  INDICATORS_BARS_COUNT_30: new BaseField('INDICATORS_BARS_COUNT_30', {
    label: 'Indicators Bars Count|30',
    fieldName: 'indicators_bars_count|30',
    format: 'float',
    interval: false,
    historical: false,
  }),

  INDICATORS_BARS_COUNT_5: new BaseField('INDICATORS_BARS_COUNT_5', {
    label: 'Indicators Bars Count|5',
    fieldName: 'indicators_bars_count|5',
    format: 'float',
    interval: false,
    historical: false,
  }),

  INDICATORS_BARS_COUNT_60: new BaseField('INDICATORS_BARS_COUNT_60', {
    label: 'Indicators Bars Count|60',
    fieldName: 'indicators_bars_count|60',
    format: 'float',
    interval: false,
    historical: false,
  }),

  IS_BLACKLISTED: new BaseField('IS_BLACKLISTED', {
    label: 'Is Blacklisted',
    fieldName: 'is_blacklisted',
    format: 'float',
    interval: false,
    historical: false,
  }),

  IS_SHARIAH_COMPLIANT: new BaseField('IS_SHARIAH_COMPLIANT', {
    label: 'Is Shariah Compliant',
    fieldName: 'is_shariah_compliant',
    format: 'float',
    interval: false,
    historical: false,
  }),

  KIND: new BaseField('KIND', {
    label: 'Kind',
    fieldName: 'kind',
    format: 'float',
    interval: false,
    historical: false,
  }),

  KIND_MINUS_DELAY: new BaseField('KIND_MINUS_DELAY', {
    label: 'Kind-Delay',
    fieldName: 'kind-delay',
    format: 'float',
    interval: false,
    historical: false,
  }),

  LAST_BAR_UPDATE_TIME: new BaseField('LAST_BAR_UPDATE_TIME', {
    label: 'Last Bar Update Time',
    fieldName: 'last_bar_update_time',
    format: 'date',
    interval: false,
    historical: false,
  }),

  LAST_BAR_UPDATE_TIME_1: new BaseField('LAST_BAR_UPDATE_TIME_1', {
    label: 'Last Bar Update Time|1',
    fieldName: 'last_bar_update_time|1',
    format: 'date',
    interval: false,
    historical: false,
  }),

  LAST_BAR_UPDATE_TIME_120: new BaseField('LAST_BAR_UPDATE_TIME_120', {
    label: 'Last Bar Update Time|120',
    fieldName: 'last_bar_update_time|120',
    format: 'date',
    interval: false,
    historical: false,
  }),

  LAST_BAR_UPDATE_TIME_15: new BaseField('LAST_BAR_UPDATE_TIME_15', {
    label: 'Last Bar Update Time|15',
    fieldName: 'last_bar_update_time|15',
    format: 'date',
    interval: false,
    historical: false,
  }),

  LAST_BAR_UPDATE_TIME_1M: new BaseField('LAST_BAR_UPDATE_TIME_1M', {
    label: 'Last Bar Update Time|1M',
    fieldName: 'last_bar_update_time|1M',
    format: 'date',
    interval: false,
    historical: false,
  }),

  LAST_BAR_UPDATE_TIME_1W: new BaseField('LAST_BAR_UPDATE_TIME_1W', {
    label: 'Last Bar Update Time|1W',
    fieldName: 'last_bar_update_time|1W',
    format: 'date',
    interval: false,
    historical: false,
  }),

  LAST_BAR_UPDATE_TIME_240: new BaseField('LAST_BAR_UPDATE_TIME_240', {
    label: 'Last Bar Update Time|240',
    fieldName: 'last_bar_update_time|240',
    format: 'date',
    interval: false,
    historical: false,
  }),

  LAST_BAR_UPDATE_TIME_30: new BaseField('LAST_BAR_UPDATE_TIME_30', {
    label: 'Last Bar Update Time|30',
    fieldName: 'last_bar_update_time|30',
    format: 'date',
    interval: false,
    historical: false,
  }),

  LAST_BAR_UPDATE_TIME_5: new BaseField('LAST_BAR_UPDATE_TIME_5', {
    label: 'Last Bar Update Time|5',
    fieldName: 'last_bar_update_time|5',
    format: 'date',
    interval: false,
    historical: false,
  }),

  LAST_BAR_UPDATE_TIME_60: new BaseField('LAST_BAR_UPDATE_TIME_60', {
    label: 'Last Bar Update Time|60',
    fieldName: 'last_bar_update_time|60',
    format: 'date',
    interval: false,
    historical: false,
  }),

  MINMOV: new BaseField('MINMOV', {
    label: 'Minmov',
    fieldName: 'minmov',
    format: 'float',
    interval: false,
    historical: false,
  }),

  MINMOVE2: new BaseField('MINMOVE2', {
    label: 'Minmove2',
    fieldName: 'minmove2',
    format: 'float',
    interval: false,
    historical: false,
  }),

  NAV_DISCOUNT_PREMIUM: new BaseField('NAV_DISCOUNT_PREMIUM', {
    label: 'Nav Discount Premium',
    fieldName: 'nav_discount_premium',
    format: 'float',
    interval: false,
    historical: false,
  }),

  NAV_TOTAL_RETURN_1M: new BaseField('NAV_TOTAL_RETURN_1M', {
    label: 'Nav Total Return 1M',
    fieldName: 'nav_total_return.1M',
    format: 'float',
    interval: false,
    historical: false,
  }),

  NAV_TOTAL_RETURN_1Y: new BaseField('NAV_TOTAL_RETURN_1Y', {
    label: 'Nav Total Return 1Y',
    fieldName: 'nav_total_return.1Y',
    format: 'float',
    interval: false,
    historical: false,
  }),

  NAV_TOTAL_RETURN_3M: new BaseField('NAV_TOTAL_RETURN_3M', {
    label: 'Nav Total Return 3M',
    fieldName: 'nav_total_return.3M',
    format: 'float',
    interval: false,
    historical: false,
  }),

  NAV_TOTAL_RETURN_3Y: new BaseField('NAV_TOTAL_RETURN_3Y', {
    label: 'Nav Total Return 3Y',
    fieldName: 'nav_total_return.3Y',
    format: 'float',
    interval: false,
    historical: false,
  }),

  NAV_TOTAL_RETURN_5Y: new BaseField('NAV_TOTAL_RETURN_5Y', {
    label: 'Nav Total Return 5Y',
    fieldName: 'nav_total_return.5Y',
    format: 'float',
    interval: false,
    historical: false,
  }),

  NAV_TOTAL_RETURN_6M: new BaseField('NAV_TOTAL_RETURN_6M', {
    label: 'Nav Total Return 6M',
    fieldName: 'nav_total_return.6M',
    format: 'float',
    interval: false,
    historical: false,
  }),

  NAV_TOTAL_RETURN_YTD: new BaseField('NAV_TOTAL_RETURN_YTD', {
    label: 'Nav Total Return YTD',
    fieldName: 'nav_total_return.YTD',
    format: 'float',
    interval: false,
    historical: false,
  }),

  POPULARITY_RANK: new BaseField('POPULARITY_RANK', {
    label: 'Popularity Rank',
    fieldName: 'popularity_rank',
    format: 'float',
    interval: false,
    historical: false,
  }),

  PROVIDER_MINUS_ID: new BaseField('PROVIDER_MINUS_ID', {
    label: 'Provider-Id',
    fieldName: 'provider-id',
    format: 'float',
    interval: false,
    historical: false,
  }),

  RATES_CF: new BaseField('RATES_CF', {
    label: 'Rates Cf',
    fieldName: 'rates_cf',
    format: 'float',
    interval: false,
    historical: false,
  }),

  RATES_CURRENT: new BaseField('RATES_CURRENT', {
    label: 'Rates Current',
    fieldName: 'rates_current',
    format: 'float',
    interval: false,
    historical: false,
  }),

  RATES_DIVIDEND_RECENT: new BaseField('RATES_DIVIDEND_RECENT', {
    label: 'Rates Dividend Recent',
    fieldName: 'rates_dividend_recent',
    format: 'float',
    interval: false,
    historical: false,
  }),

  RATES_DIVIDEND_UPCOMING: new BaseField('RATES_DIVIDEND_UPCOMING', {
    label: 'Rates Dividend Upcoming',
    fieldName: 'rates_dividend_upcoming',
    format: 'float',
    interval: false,
    historical: false,
  }),

  RATES_EARNINGS_FQ: new BaseField('RATES_EARNINGS_FQ', {
    label: 'Rates Earnings FQ',
    fieldName: 'rates_earnings_fq',
    format: 'float',
    interval: false,
    historical: false,
  }),

  RATES_EARNINGS_NEXT_FQ: new BaseField('RATES_EARNINGS_NEXT_FQ', {
    label: 'Rates Earnings Next FQ',
    fieldName: 'rates_earnings_next_fq',
    format: 'float',
    interval: false,
    historical: false,
  }),

  RATES_FH: new BaseField('RATES_FH', {
    label: 'Rates FH',
    fieldName: 'rates_fh',
    format: 'float',
    interval: false,
    historical: false,
  }),

  RATES_FQ: new BaseField('RATES_FQ', {
    label: 'Rates FQ',
    fieldName: 'rates_fq',
    format: 'float',
    interval: false,
    historical: false,
  }),

  RATES_FY: new BaseField('RATES_FY', {
    label: 'Rates FY',
    fieldName: 'rates_fy',
    format: 'float',
    interval: false,
    historical: false,
  }),

  RATES_MC: new BaseField('RATES_MC', {
    label: 'Rates Mc',
    fieldName: 'rates_mc',
    format: 'float',
    interval: false,
    historical: false,
  }),

  RATES_PT: new BaseField('RATES_PT', {
    label: 'Rates Pt',
    fieldName: 'rates_pt',
    format: 'float',
    interval: false,
    historical: false,
  }),

  RATES_TIME_SERIES: new BaseField('RATES_TIME_SERIES', {
    label: 'Rates Time Series',
    fieldName: 'rates_time_series',
    format: 'date',
    interval: false,
    historical: false,
  }),

  RATES_TTM: new BaseField('RATES_TTM', {
    label: 'Rates TTM',
    fieldName: 'rates_ttm',
    format: 'float',
    interval: false,
    historical: false,
  }),

  RTC: new BaseField('RTC', {
    label: 'Rtc',
    fieldName: 'rtc',
    format: 'float',
    interval: false,
    historical: false,
  }),

  GROUP: new BaseField('GROUP', {
    label: 'Group',
    fieldName: 'sector',
    format: 'text',
    interval: false,
    historical: false,
  }),

  SYMBOL: new BaseField('SYMBOL', {
    label: 'Symbol',
    fieldName: 'symbol',
    format: 'float',
    interval: false,
    historical: false,
  }),

  TIME: new BaseField('TIME', {
    label: 'Time',
    fieldName: 'time',
    format: 'date',
    interval: false,
    historical: false,
  }),

  TIME_BUSINESS_DAY: new BaseField('TIME_BUSINESS_DAY', {
    label: 'Time Business Day',
    fieldName: 'time_business_day',
    format: 'date',
    interval: false,
    historical: false,
  }),

  TIME_1: new BaseField('TIME_1', {
    label: 'Time|1',
    fieldName: 'time|1',
    format: 'date',
    interval: false,
    historical: false,
  }),

  TIME_120: new BaseField('TIME_120', {
    label: 'Time|120',
    fieldName: 'time|120',
    format: 'date',
    interval: false,
    historical: false,
  }),

  TIME_15: new BaseField('TIME_15', {
    label: 'Time|15',
    fieldName: 'time|15',
    format: 'date',
    interval: false,
    historical: false,
  }),

  TIME_1M: new BaseField('TIME_1M', {
    label: 'Time|1M',
    fieldName: 'time|1M',
    format: 'date',
    interval: false,
    historical: false,
  }),

  TIME_1W: new BaseField('TIME_1W', {
    label: 'Time|1W',
    fieldName: 'time|1W',
    format: 'date',
    interval: false,
    historical: false,
  }),

  TIME_240: new BaseField('TIME_240', {
    label: 'Time|240',
    fieldName: 'time|240',
    format: 'date',
    interval: false,
    historical: false,
  }),

  TIME_30: new BaseField('TIME_30', {
    label: 'Time|30',
    fieldName: 'time|30',
    format: 'date',
    interval: false,
    historical: false,
  }),

  TIME_5: new BaseField('TIME_5', {
    label: 'Time|5',
    fieldName: 'time|5',
    format: 'date',
    interval: false,
    historical: false,
  }),

  TIME_60: new BaseField('TIME_60', {
    label: 'Time|60',
    fieldName: 'time|60',
    format: 'date',
    interval: false,
    historical: false,
  }),

  UPDATE_MINUS_TIME: new BaseField('UPDATE_MINUS_TIME', {
    label: 'Update-Time',
    fieldName: 'update-time',
    format: 'date',
    interval: false,
    historical: false,
  }),

  UPDATE_TIME: new BaseField('UPDATE_TIME', {
    label: 'Update Time',
    fieldName: 'update_time',
    format: 'date',
    interval: false,
    historical: false,
  }),
} as const;

export type ForexFieldValue = typeof ForexField[keyof typeof ForexField];
