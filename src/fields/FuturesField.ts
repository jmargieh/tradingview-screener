import { BaseField } from './BaseField.js';

/**
 * FuturesField contains all available fields for futures screening on TradingView.
 * 
 * This file includes 393 fields discovered from TradingView API, including:
 * - Price data (Open, High, Low, Close)
 * - Technical indicators (ADX, RSI, MACD, etc.)
 * - Moving averages (EMA, SMA, various periods)
 * - Candlestick patterns (Doji, Hammer, Engulfing, etc.)
 * - Pivot points (Camarilla, Classic, Demark, Fibonacci, Woodie)
 * - Performance metrics
 * - Volume indicators
 * - Multiple timeframes: |1, |5, |15, |30, |60, |120, |240, |1D, |1W, |1M
 * 
 * Format types:
 * - float: Numeric values
 * - percent: Percentage values
 * - bool: True/false values
 * - date: Date/timestamp values
 * - text: Text/string values
 * - rating: Rating values
 * - number_group: Grouped numeric values
 * 
 * @see https://github.com/deepentropy/tvscreener/blob/main/tvscreener/field/futures.py
 */
export const FuturesField = {
  ADR: new BaseField('ADR', {
    label: 'Adr',
    fieldName: 'ADR',
    format: 'float',
    interval: false,
    historical: false,
  }),

  ADRP: new BaseField('ADRP', {
    label: 'Adrp',
    fieldName: 'ADRP',
    format: 'float',
    interval: false,
    historical: false,
  }),

  ADX: new BaseField('ADX', {
    label: 'ADX',
    fieldName: 'ADX',
    format: 'float',
    interval: false,
    historical: false,
  }),

  ADX_PLUS_DI: new BaseField('ADX_PLUS_DI', {
    label: 'ADX+Di',
    fieldName: 'ADX+DI',
    format: 'float',
    interval: false,
    historical: false,
  }),

  ADX_PLUS_DI_1: new BaseField('ADX_PLUS_DI_1', {
    label: 'ADX+Di[1]',
    fieldName: 'ADX+DI[1]',
    format: 'float',
    interval: false,
    historical: false,
  }),

  ADX_PLUS_DI_100: new BaseField('ADX_PLUS_DI_100', {
    label: 'ADX+Di 100',
    fieldName: 'ADX+DI_100',
    format: 'float',
    interval: false,
    historical: false,
  }),

  ADX_PLUS_DI_100_1: new BaseField('ADX_PLUS_DI_100_1', {
    label: 'ADX+Di 100[1]',
    fieldName: 'ADX+DI_100[1]',
    format: 'float',
    interval: false,
    historical: false,
  }),

  ADX_PLUS_DI_20: new BaseField('ADX_PLUS_DI_20', {
    label: 'ADX+Di 20',
    fieldName: 'ADX+DI_20',
    format: 'float',
    interval: false,
    historical: false,
  }),

  ADX_PLUS_DI_20_1: new BaseField('ADX_PLUS_DI_20_1', {
    label: 'ADX+Di 20[1]',
    fieldName: 'ADX+DI_20[1]',
    format: 'float',
    interval: false,
    historical: false,
  }),

  ADX_PLUS_DI_50: new BaseField('ADX_PLUS_DI_50', {
    label: 'ADX+Di 50',
    fieldName: 'ADX+DI_50',
    format: 'float',
    interval: false,
    historical: false,
  }),

  ADX_PLUS_DI_50_1: new BaseField('ADX_PLUS_DI_50_1', {
    label: 'ADX+Di 50[1]',
    fieldName: 'ADX+DI_50[1]',
    format: 'float',
    interval: false,
    historical: false,
  }),

  ADX_PLUS_DI_9: new BaseField('ADX_PLUS_DI_9', {
    label: 'ADX+Di 9',
    fieldName: 'ADX+DI_9',
    format: 'float',
    interval: false,
    historical: false,
  }),

  ADX_PLUS_DI_9_1: new BaseField('ADX_PLUS_DI_9_1', {
    label: 'ADX+Di 9[1]',
    fieldName: 'ADX+DI_9[1]',
    format: 'float',
    interval: false,
    historical: false,
  }),

  ADX_MINUS_DI: new BaseField('ADX_MINUS_DI', {
    label: 'ADX-Di',
    fieldName: 'ADX-DI',
    format: 'float',
    interval: false,
    historical: false,
  }),

  ADX_MINUS_DI_1: new BaseField('ADX_MINUS_DI_1', {
    label: 'ADX-Di[1]',
    fieldName: 'ADX-DI[1]',
    format: 'float',
    interval: false,
    historical: false,
  }),

  ADX_MINUS_DI_100: new BaseField('ADX_MINUS_DI_100', {
    label: 'ADX-Di 100',
    fieldName: 'ADX-DI_100',
    format: 'float',
    interval: false,
    historical: false,
  }),

  ADX_MINUS_DI_100_1: new BaseField('ADX_MINUS_DI_100_1', {
    label: 'ADX-Di 100[1]',
    fieldName: 'ADX-DI_100[1]',
    format: 'float',
    interval: false,
    historical: false,
  }),

  ADX_MINUS_DI_20: new BaseField('ADX_MINUS_DI_20', {
    label: 'ADX-Di 20',
    fieldName: 'ADX-DI_20',
    format: 'float',
    interval: false,
    historical: false,
  }),

  ADX_MINUS_DI_20_1: new BaseField('ADX_MINUS_DI_20_1', {
    label: 'ADX-Di 20[1]',
    fieldName: 'ADX-DI_20[1]',
    format: 'float',
    interval: false,
    historical: false,
  }),

  ADX_MINUS_DI_50: new BaseField('ADX_MINUS_DI_50', {
    label: 'ADX-Di 50',
    fieldName: 'ADX-DI_50',
    format: 'float',
    interval: false,
    historical: false,
  }),

  ADX_MINUS_DI_50_1: new BaseField('ADX_MINUS_DI_50_1', {
    label: 'ADX-Di 50[1]',
    fieldName: 'ADX-DI_50[1]',
    format: 'float',
    interval: false,
    historical: false,
  }),

  ADX_MINUS_DI_9: new BaseField('ADX_MINUS_DI_9', {
    label: 'ADX-Di 9',
    fieldName: 'ADX-DI_9',
    format: 'float',
    interval: false,
    historical: false,
  }),

  ADX_MINUS_DI_9_1: new BaseField('ADX_MINUS_DI_9_1', {
    label: 'ADX-Di 9[1]',
    fieldName: 'ADX-DI_9[1]',
    format: 'float',
    interval: false,
    historical: false,
  }),

  ADX_100: new BaseField('ADX_100', {
    label: 'ADX 100',
    fieldName: 'ADX_100',
    format: 'float',
    interval: false,
    historical: false,
  }),

  ADX_20: new BaseField('ADX_20', {
    label: 'ADX 20',
    fieldName: 'ADX_20',
    format: 'float',
    interval: false,
    historical: false,
  }),

  ADX_50: new BaseField('ADX_50', {
    label: 'ADX 50',
    fieldName: 'ADX_50',
    format: 'float',
    interval: false,
    historical: false,
  }),

  ADX_9: new BaseField('ADX_9', {
    label: 'ADX 9',
    fieldName: 'ADX_9',
    format: 'float',
    interval: false,
    historical: false,
  }),

  AO: new BaseField('AO', {
    label: 'AO',
    fieldName: 'AO',
    format: 'float',
    interval: false,
    historical: false,
  }),

  AO_1: new BaseField('AO_1', {
    label: 'AO[1]',
    fieldName: 'AO[1]',
    format: 'float',
    interval: false,
    historical: false,
  }),

  AO_2: new BaseField('AO_2', {
    label: 'AO[2]',
    fieldName: 'AO[2]',
    format: 'float',
    interval: false,
    historical: false,
  }),

  ATR: new BaseField('ATR', {
    label: 'ATR',
    fieldName: 'ATR',
    format: 'float',
    interval: false,
    historical: false,
  }),

  ATRP: new BaseField('ATRP', {
    label: 'Atrp',
    fieldName: 'ATRP',
    format: 'float',
    interval: false,
    historical: false,
  }),

  AROON_DOWN: new BaseField('AROON_DOWN', {
    label: 'Aroon Down',
    fieldName: 'Aroon.Down',
    format: 'float',
    interval: false,
    historical: false,
  }),

  AROON_UP: new BaseField('AROON_UP', {
    label: 'Aroon Up',
    fieldName: 'Aroon.Up',
    format: 'float',
    interval: false,
    historical: false,
  }),

  BB_BASIS: new BaseField('BB_BASIS', {
    label: 'Bb Basis',
    fieldName: 'BB.basis',
    format: 'float',
    interval: false,
    historical: false,
  }),

  BB_BASIS_50: new BaseField('BB_BASIS_50', {
    label: 'Bb Basis 50',
    fieldName: 'BB.basis_50',
    format: 'float',
    interval: false,
    historical: false,
  }),

  BB_LOWER: new BaseField('BB_LOWER', {
    label: 'Bb Lower',
    fieldName: 'BB.lower',
    format: 'float',
    interval: false,
    historical: false,
  }),

  BB_LOWER_50: new BaseField('BB_LOWER_50', {
    label: 'Bb Lower 50',
    fieldName: 'BB.lower_50',
    format: 'float',
    interval: false,
    historical: false,
  }),

  BB_UPPER: new BaseField('BB_UPPER', {
    label: 'Bb Upper',
    fieldName: 'BB.upper',
    format: 'float',
    interval: false,
    historical: false,
  }),

  BB_UPPER_50: new BaseField('BB_UPPER_50', {
    label: 'Bb Upper 50',
    fieldName: 'BB.upper_50',
    format: 'float',
    interval: false,
    historical: false,
  }),

  BBPOWER: new BaseField('BBPOWER', {
    label: 'Bbpower',
    fieldName: 'BBPower',
    format: 'float',
    interval: false,
    historical: false,
  }),

  CCI20: new BaseField('CCI20', {
    label: 'Cci20',
    fieldName: 'CCI20',
    format: 'float',
    interval: false,
    historical: false,
  }),

  CCI20_1: new BaseField('CCI20_1', {
    label: 'Cci20[1]',
    fieldName: 'CCI20[1]',
    format: 'float',
    interval: false,
    historical: false,
  }),

  CANDLE_3BLACKCROWS: new BaseField('CANDLE_3BLACKCROWS', {
    label: 'Candle 3Blackcrows',
    fieldName: 'Candle.3BlackCrows',
    format: 'bool',
    interval: false,
    historical: false,
  }),

  CANDLE_3WHITESOLDIERS: new BaseField('CANDLE_3WHITESOLDIERS', {
    label: 'Candle 3Whitesoldiers',
    fieldName: 'Candle.3WhiteSoldiers',
    format: 'bool',
    interval: false,
    historical: false,
  }),

  CANDLE_ABANDONEDBABY_BEARISH: new BaseField('CANDLE_ABANDONEDBABY_BEARISH', {
    label: 'Candle Abandonedbaby Bearish',
    fieldName: 'Candle.AbandonedBaby.Bearish',
    format: 'bool',
    interval: false,
    historical: false,
  }),

  CANDLE_ABANDONEDBABY_BULLISH: new BaseField('CANDLE_ABANDONEDBABY_BULLISH', {
    label: 'Candle Abandonedbaby Bullish',
    fieldName: 'Candle.AbandonedBaby.Bullish',
    format: 'bool',
    interval: false,
    historical: false,
  }),

  CANDLE_DOJI: new BaseField('CANDLE_DOJI', {
    label: 'Candle Doji',
    fieldName: 'Candle.Doji',
    format: 'bool',
    interval: false,
    historical: false,
  }),

  CANDLE_DOJI_DRAGONFLY: new BaseField('CANDLE_DOJI_DRAGONFLY', {
    label: 'Candle Doji Dragonfly',
    fieldName: 'Candle.Doji.Dragonfly',
    format: 'bool',
    interval: false,
    historical: false,
  }),

  CANDLE_DOJI_GRAVESTONE: new BaseField('CANDLE_DOJI_GRAVESTONE', {
    label: 'Candle Doji Gravestone',
    fieldName: 'Candle.Doji.Gravestone',
    format: 'bool',
    interval: false,
    historical: false,
  }),

  CANDLE_ENGULFING_BEARISH: new BaseField('CANDLE_ENGULFING_BEARISH', {
    label: 'Candle Engulfing Bearish',
    fieldName: 'Candle.Engulfing.Bearish',
    format: 'bool',
    interval: false,
    historical: false,
  }),

  CANDLE_ENGULFING_BULLISH: new BaseField('CANDLE_ENGULFING_BULLISH', {
    label: 'Candle Engulfing Bullish',
    fieldName: 'Candle.Engulfing.Bullish',
    format: 'bool',
    interval: false,
    historical: false,
  }),

  CANDLE_EVENINGSTAR: new BaseField('CANDLE_EVENINGSTAR', {
    label: 'Candle Eveningstar',
    fieldName: 'Candle.EveningStar',
    format: 'bool',
    interval: false,
    historical: false,
  }),

  CANDLE_HAMMER: new BaseField('CANDLE_HAMMER', {
    label: 'Candle Hammer',
    fieldName: 'Candle.Hammer',
    format: 'bool',
    interval: false,
    historical: false,
  }),

  CANDLE_HANGINGMAN: new BaseField('CANDLE_HANGINGMAN', {
    label: 'Candle Hangingman',
    fieldName: 'Candle.HangingMan',
    format: 'bool',
    interval: false,
    historical: false,
  }),

  CANDLE_HARAMI_BEARISH: new BaseField('CANDLE_HARAMI_BEARISH', {
    label: 'Candle Harami Bearish',
    fieldName: 'Candle.Harami.Bearish',
    format: 'bool',
    interval: false,
    historical: false,
  }),

  CANDLE_HARAMI_BULLISH: new BaseField('CANDLE_HARAMI_BULLISH', {
    label: 'Candle Harami Bullish',
    fieldName: 'Candle.Harami.Bullish',
    format: 'bool',
    interval: false,
    historical: false,
  }),

  CANDLE_INVERTEDHAMMER: new BaseField('CANDLE_INVERTEDHAMMER', {
    label: 'Candle Invertedhammer',
    fieldName: 'Candle.InvertedHammer',
    format: 'bool',
    interval: false,
    historical: false,
  }),

  CANDLE_KICKING_BEARISH: new BaseField('CANDLE_KICKING_BEARISH', {
    label: 'Candle Kicking Bearish',
    fieldName: 'Candle.Kicking.Bearish',
    format: 'bool',
    interval: false,
    historical: false,
  }),

  CANDLE_KICKING_BULLISH: new BaseField('CANDLE_KICKING_BULLISH', {
    label: 'Candle Kicking Bullish',
    fieldName: 'Candle.Kicking.Bullish',
    format: 'bool',
    interval: false,
    historical: false,
  }),

  CANDLE_LONGSHADOW_LOWER: new BaseField('CANDLE_LONGSHADOW_LOWER', {
    label: 'Candle Longshadow Lower',
    fieldName: 'Candle.LongShadow.Lower',
    format: 'bool',
    interval: false,
    historical: false,
  }),

  CANDLE_LONGSHADOW_UPPER: new BaseField('CANDLE_LONGSHADOW_UPPER', {
    label: 'Candle Longshadow Upper',
    fieldName: 'Candle.LongShadow.Upper',
    format: 'bool',
    interval: false,
    historical: false,
  }),

  CANDLE_MARUBOZU_BLACK: new BaseField('CANDLE_MARUBOZU_BLACK', {
    label: 'Candle Marubozu Black',
    fieldName: 'Candle.Marubozu.Black',
    format: 'bool',
    interval: false,
    historical: false,
  }),

  CANDLE_MARUBOZU_WHITE: new BaseField('CANDLE_MARUBOZU_WHITE', {
    label: 'Candle Marubozu White',
    fieldName: 'Candle.Marubozu.White',
    format: 'bool',
    interval: false,
    historical: false,
  }),

  CANDLE_MORNINGSTAR: new BaseField('CANDLE_MORNINGSTAR', {
    label: 'Candle Morningstar',
    fieldName: 'Candle.MorningStar',
    format: 'bool',
    interval: false,
    historical: false,
  }),

  CANDLE_SHOOTINGSTAR: new BaseField('CANDLE_SHOOTINGSTAR', {
    label: 'Candle Shootingstar',
    fieldName: 'Candle.ShootingStar',
    format: 'bool',
    interval: false,
    historical: false,
  }),

  CANDLE_SPINNINGTOP_BLACK: new BaseField('CANDLE_SPINNINGTOP_BLACK', {
    label: 'Candle Spinningtop Black',
    fieldName: 'Candle.SpinningTop.Black',
    format: 'bool',
    interval: false,
    historical: false,
  }),

  CANDLE_SPINNINGTOP_WHITE: new BaseField('CANDLE_SPINNINGTOP_WHITE', {
    label: 'Candle Spinningtop White',
    fieldName: 'Candle.SpinningTop.White',
    format: 'bool',
    interval: false,
    historical: false,
  }),

  CANDLE_TRISTAR_BEARISH: new BaseField('CANDLE_TRISTAR_BEARISH', {
    label: 'Candle Tristar Bearish',
    fieldName: 'Candle.TriStar.Bearish',
    format: 'bool',
    interval: false,
    historical: false,
  }),

  CANDLE_TRISTAR_BULLISH: new BaseField('CANDLE_TRISTAR_BULLISH', {
    label: 'Candle Tristar Bullish',
    fieldName: 'Candle.TriStar.Bullish',
    format: 'bool',
    interval: false,
    historical: false,
  }),

  CHAIKINMONEYFLOW: new BaseField('CHAIKINMONEYFLOW', {
    label: 'Chaikinmoneyflow',
    fieldName: 'ChaikinMoneyFlow',
    format: 'float',
    interval: false,
    historical: false,
  }),

  DONCHCH20_LOWER: new BaseField('DONCHCH20_LOWER', {
    label: 'Donchch20 Lower',
    fieldName: 'DonchCh20.Lower',
    format: 'float',
    interval: false,
    historical: false,
  }),

  DONCHCH20_MIDDLE: new BaseField('DONCHCH20_MIDDLE', {
    label: 'Donchch20 Middle',
    fieldName: 'DonchCh20.Middle',
    format: 'float',
    interval: false,
    historical: false,
  }),

  DONCHCH20_UPPER: new BaseField('DONCHCH20_UPPER', {
    label: 'Donchch20 Upper',
    fieldName: 'DonchCh20.Upper',
    format: 'float',
    interval: false,
    historical: false,
  }),

  EMA10: new BaseField('EMA10', {
    label: 'Ema10',
    fieldName: 'EMA10',
    format: 'float',
    interval: false,
    historical: false,
  }),

  EMA100: new BaseField('EMA100', {
    label: 'Ema100',
    fieldName: 'EMA100',
    format: 'float',
    interval: false,
    historical: false,
  }),

  EMA12: new BaseField('EMA12', {
    label: 'Ema12',
    fieldName: 'EMA12',
    format: 'float',
    interval: false,
    historical: false,
  }),

  EMA120: new BaseField('EMA120', {
    label: 'Ema120',
    fieldName: 'EMA120',
    format: 'float',
    interval: false,
    historical: false,
  }),

  EMA13: new BaseField('EMA13', {
    label: 'Ema13',
    fieldName: 'EMA13',
    format: 'float',
    interval: false,
    historical: false,
  }),

  EMA14: new BaseField('EMA14', {
    label: 'Ema14',
    fieldName: 'EMA14',
    format: 'float',
    interval: false,
    historical: false,
  }),

  EMA144: new BaseField('EMA144', {
    label: 'Ema144',
    fieldName: 'EMA144',
    format: 'float',
    interval: false,
    historical: false,
  }),

  EMA15: new BaseField('EMA15', {
    label: 'Ema15',
    fieldName: 'EMA15',
    format: 'float',
    interval: false,
    historical: false,
  }),

  EMA150: new BaseField('EMA150', {
    label: 'Ema150',
    fieldName: 'EMA150',
    format: 'float',
    interval: false,
    historical: false,
  }),

  EMA2: new BaseField('EMA2', {
    label: 'Ema2',
    fieldName: 'EMA2',
    format: 'float',
    interval: false,
    historical: false,
  }),

  EMA20: new BaseField('EMA20', {
    label: 'Ema20',
    fieldName: 'EMA20',
    format: 'float',
    interval: false,
    historical: false,
  }),

  EMA200: new BaseField('EMA200', {
    label: 'Ema200',
    fieldName: 'EMA200',
    format: 'float',
    interval: false,
    historical: false,
  }),

  EMA21: new BaseField('EMA21', {
    label: 'Ema21',
    fieldName: 'EMA21',
    format: 'float',
    interval: false,
    historical: false,
  }),

  EMA25: new BaseField('EMA25', {
    label: 'Ema25',
    fieldName: 'EMA25',
    format: 'float',
    interval: false,
    historical: false,
  }),

  EMA250: new BaseField('EMA250', {
    label: 'Ema250',
    fieldName: 'EMA250',
    format: 'float',
    interval: false,
    historical: false,
  }),

  EMA26: new BaseField('EMA26', {
    label: 'Ema26',
    fieldName: 'EMA26',
    format: 'float',
    interval: false,
    historical: false,
  }),

  EMA3: new BaseField('EMA3', {
    label: 'Ema3',
    fieldName: 'EMA3',
    format: 'float',
    interval: false,
    historical: false,
  }),

  EMA30: new BaseField('EMA30', {
    label: 'Ema30',
    fieldName: 'EMA30',
    format: 'float',
    interval: false,
    historical: false,
  }),

  EMA300: new BaseField('EMA300', {
    label: 'Ema300',
    fieldName: 'EMA300',
    format: 'float',
    interval: false,
    historical: false,
  }),

  EMA34: new BaseField('EMA34', {
    label: 'Ema34',
    fieldName: 'EMA34',
    format: 'float',
    interval: false,
    historical: false,
  }),

  EMA40: new BaseField('EMA40', {
    label: 'Ema40',
    fieldName: 'EMA40',
    format: 'float',
    interval: false,
    historical: false,
  }),

  EMA5: new BaseField('EMA5', {
    label: 'Ema5',
    fieldName: 'EMA5',
    format: 'float',
    interval: false,
    historical: false,
  }),

  EMA50: new BaseField('EMA50', {
    label: 'Ema50',
    fieldName: 'EMA50',
    format: 'float',
    interval: false,
    historical: false,
  }),

  EMA55: new BaseField('EMA55', {
    label: 'Ema55',
    fieldName: 'EMA55',
    format: 'float',
    interval: false,
    historical: false,
  }),

  EMA6: new BaseField('EMA6', {
    label: 'Ema6',
    fieldName: 'EMA6',
    format: 'float',
    interval: false,
    historical: false,
  }),

  EMA60: new BaseField('EMA60', {
    label: 'Ema60',
    fieldName: 'EMA60',
    format: 'float',
    interval: false,
    historical: false,
  }),

  EMA7: new BaseField('EMA7', {
    label: 'Ema7',
    fieldName: 'EMA7',
    format: 'float',
    interval: false,
    historical: false,
  }),

  EMA75: new BaseField('EMA75', {
    label: 'Ema75',
    fieldName: 'EMA75',
    format: 'float',
    interval: false,
    historical: false,
  }),

  EMA8: new BaseField('EMA8', {
    label: 'Ema8',
    fieldName: 'EMA8',
    format: 'float',
    interval: false,
    historical: false,
  }),

  EMA89: new BaseField('EMA89', {
    label: 'Ema89',
    fieldName: 'EMA89',
    format: 'float',
    interval: false,
    historical: false,
  }),

  EMA9: new BaseField('EMA9', {
    label: 'Ema9',
    fieldName: 'EMA9',
    format: 'float',
    interval: false,
    historical: false,
  }),

  HIGH_1M: new BaseField('HIGH_1M', {
    label: 'High 1M',
    fieldName: 'High.1M',
    format: 'float',
    interval: false,
    historical: false,
  }),

  HIGH_1M_DATE: new BaseField('HIGH_1M_DATE', {
    label: 'High 1M Date',
    fieldName: 'High.1M.Date',
    format: 'date',
    interval: false,
    historical: false,
  }),

  HIGH_3M: new BaseField('HIGH_3M', {
    label: 'High 3M',
    fieldName: 'High.3M',
    format: 'float',
    interval: false,
    historical: false,
  }),

  HIGH_3M_DATE: new BaseField('HIGH_3M_DATE', {
    label: 'High 3M Date',
    fieldName: 'High.3M.Date',
    format: 'date',
    interval: false,
    historical: false,
  }),

  HIGH_5D: new BaseField('HIGH_5D', {
    label: 'High 5D',
    fieldName: 'High.5D',
    format: 'float',
    interval: false,
    historical: false,
  }),

  HIGH_6M: new BaseField('HIGH_6M', {
    label: 'High 6M',
    fieldName: 'High.6M',
    format: 'float',
    interval: false,
    historical: false,
  }),

  HIGH_6M_DATE: new BaseField('HIGH_6M_DATE', {
    label: 'High 6M Date',
    fieldName: 'High.6M.Date',
    format: 'date',
    interval: false,
    historical: false,
  }),

  HIGH_ALL: new BaseField('HIGH_ALL', {
    label: 'High All',
    fieldName: 'High.All',
    format: 'float',
    interval: false,
    historical: false,
  }),

  HIGH_ALL_CALC: new BaseField('HIGH_ALL_CALC', {
    label: 'High All Calc',
    fieldName: 'High.All.Calc',
    format: 'float',
    interval: false,
    historical: false,
  }),

  HIGH_ALL_CALC_DATE: new BaseField('HIGH_ALL_CALC_DATE', {
    label: 'High All Calc Date',
    fieldName: 'High.All.Calc.Date',
    format: 'date',
    interval: false,
    historical: false,
  }),

  HIGH_ALL_DATE: new BaseField('HIGH_ALL_DATE', {
    label: 'High All Date',
    fieldName: 'High.All.Date',
    format: 'date',
    interval: false,
    historical: false,
  }),

  HULLMA20: new BaseField('HULLMA20', {
    label: 'Hullma20',
    fieldName: 'HullMA20',
    format: 'float',
    interval: false,
    historical: false,
  }),

  HULLMA200: new BaseField('HULLMA200', {
    label: 'Hullma200',
    fieldName: 'HullMA200',
    format: 'float',
    interval: false,
    historical: false,
  }),

  HULLMA9: new BaseField('HULLMA9', {
    label: 'Hullma9',
    fieldName: 'HullMA9',
    format: 'float',
    interval: false,
    historical: false,
  }),

  ICHIMOKU_BLINE: new BaseField('ICHIMOKU_BLINE', {
    label: 'Ichimoku Bline',
    fieldName: 'Ichimoku.BLine',
    format: 'float',
    interval: false,
    historical: false,
  }),

  ICHIMOKU_BLINE_20_60_120_30: new BaseField('ICHIMOKU_BLINE_20_60_120_30', {
    label: 'Ichimoku Bline 20 60 120 30',
    fieldName: 'Ichimoku.BLine_20_60_120_30',
    format: 'float',
    interval: false,
    historical: false,
  }),

  ICHIMOKU_CLINE: new BaseField('ICHIMOKU_CLINE', {
    label: 'Ichimoku Cline',
    fieldName: 'Ichimoku.CLine',
    format: 'float',
    interval: false,
    historical: false,
  }),

  ICHIMOKU_CLINE_20_60_120_30: new BaseField('ICHIMOKU_CLINE_20_60_120_30', {
    label: 'Ichimoku Cline 20 60 120 30',
    fieldName: 'Ichimoku.CLine_20_60_120_30',
    format: 'float',
    interval: false,
    historical: false,
  }),

  ICHIMOKU_LEAD1: new BaseField('ICHIMOKU_LEAD1', {
    label: 'Ichimoku Lead1',
    fieldName: 'Ichimoku.Lead1',
    format: 'float',
    interval: false,
    historical: false,
  }),

  ICHIMOKU_LEAD1_20_60_120_30: new BaseField('ICHIMOKU_LEAD1_20_60_120_30', {
    label: 'Ichimoku Lead1 20 60 120 30',
    fieldName: 'Ichimoku.Lead1_20_60_120_30',
    format: 'float',
    interval: false,
    historical: false,
  }),

  ICHIMOKU_LEAD2: new BaseField('ICHIMOKU_LEAD2', {
    label: 'Ichimoku Lead2',
    fieldName: 'Ichimoku.Lead2',
    format: 'float',
    interval: false,
    historical: false,
  }),

  ICHIMOKU_LEAD2_20_60_120_30: new BaseField('ICHIMOKU_LEAD2_20_60_120_30', {
    label: 'Ichimoku Lead2 20 60 120 30',
    fieldName: 'Ichimoku.Lead2_20_60_120_30',
    format: 'float',
    interval: false,
    historical: false,
  }),

  KLTCHNL_BASIS: new BaseField('KLTCHNL_BASIS', {
    label: 'Kltchnl Basis',
    fieldName: 'KltChnl.basis',
    format: 'float',
    interval: false,
    historical: false,
  }),

  KLTCHNL_LOWER: new BaseField('KLTCHNL_LOWER', {
    label: 'Kltchnl Lower',
    fieldName: 'KltChnl.lower',
    format: 'float',
    interval: false,
    historical: false,
  }),

  KLTCHNL_UPPER: new BaseField('KLTCHNL_UPPER', {
    label: 'Kltchnl Upper',
    fieldName: 'KltChnl.upper',
    format: 'float',
    interval: false,
    historical: false,
  }),

  LOW_1M: new BaseField('LOW_1M', {
    label: 'Low 1M',
    fieldName: 'Low.1M',
    format: 'float',
    interval: false,
    historical: false,
  }),

  LOW_1M_DATE: new BaseField('LOW_1M_DATE', {
    label: 'Low 1M Date',
    fieldName: 'Low.1M.Date',
    format: 'date',
    interval: false,
    historical: false,
  }),

  LOW_3M: new BaseField('LOW_3M', {
    label: 'Low 3M',
    fieldName: 'Low.3M',
    format: 'float',
    interval: false,
    historical: false,
  }),

  LOW_3M_DATE: new BaseField('LOW_3M_DATE', {
    label: 'Low 3M Date',
    fieldName: 'Low.3M.Date',
    format: 'date',
    interval: false,
    historical: false,
  }),

  LOW_5D: new BaseField('LOW_5D', {
    label: 'Low 5D',
    fieldName: 'Low.5D',
    format: 'float',
    interval: false,
    historical: false,
  }),

  LOW_6M: new BaseField('LOW_6M', {
    label: 'Low 6M',
    fieldName: 'Low.6M',
    format: 'float',
    interval: false,
    historical: false,
  }),

  LOW_6M_DATE: new BaseField('LOW_6M_DATE', {
    label: 'Low 6M Date',
    fieldName: 'Low.6M.Date',
    format: 'date',
    interval: false,
    historical: false,
  }),

  LOW_AFTER_HIGH_ALL: new BaseField('LOW_AFTER_HIGH_ALL', {
    label: 'Low After High All',
    fieldName: 'Low.After.High.All',
    format: 'float',
    interval: false,
    historical: false,
  }),

  LOW_ALL: new BaseField('LOW_ALL', {
    label: 'Low All',
    fieldName: 'Low.All',
    format: 'float',
    interval: false,
    historical: false,
  }),

  LOW_ALL_CALC: new BaseField('LOW_ALL_CALC', {
    label: 'Low All Calc',
    fieldName: 'Low.All.Calc',
    format: 'float',
    interval: false,
    historical: false,
  }),

  LOW_ALL_CALC_DATE: new BaseField('LOW_ALL_CALC_DATE', {
    label: 'Low All Calc Date',
    fieldName: 'Low.All.Calc.Date',
    format: 'date',
    interval: false,
    historical: false,
  }),

  LOW_ALL_DATE: new BaseField('LOW_ALL_DATE', {
    label: 'Low All Date',
    fieldName: 'Low.All.Date',
    format: 'date',
    interval: false,
    historical: false,
  }),

  MACD_HIST: new BaseField('MACD_HIST', {
    label: 'MACD Hist',
    fieldName: 'MACD.hist',
    format: 'float',
    interval: false,
    historical: false,
  }),

  MACD_MACD: new BaseField('MACD_MACD', {
    label: 'MACD MACD',
    fieldName: 'MACD.macd',
    format: 'float',
    interval: false,
    historical: false,
  }),

  MACD_SIGNAL: new BaseField('MACD_SIGNAL', {
    label: 'MACD Signal',
    fieldName: 'MACD.signal',
    format: 'float',
    interval: false,
    historical: false,
  }),

  MOM: new BaseField('MOM', {
    label: 'Mom',
    fieldName: 'Mom',
    format: 'float',
    interval: false,
    historical: false,
  }),

  MOM_1: new BaseField('MOM_1', {
    label: 'Mom[1]',
    fieldName: 'Mom[1]',
    format: 'float',
    interval: false,
    historical: false,
  }),

  MOM_14: new BaseField('MOM_14', {
    label: 'Mom 14',
    fieldName: 'Mom_14',
    format: 'float',
    interval: false,
    historical: false,
  }),

  MOM_14_1: new BaseField('MOM_14_1', {
    label: 'Mom 14[1]',
    fieldName: 'Mom_14[1]',
    format: 'float',
    interval: false,
    historical: false,
  }),

  MONEYFLOW: new BaseField('MONEYFLOW', {
    label: 'Moneyflow',
    fieldName: 'MoneyFlow',
    format: 'float',
    interval: false,
    historical: false,
  }),

  OPEN_ALL_CALC: new BaseField('OPEN_ALL_CALC', {
    label: 'Open All Calc',
    fieldName: 'Open.All.Calc',
    format: 'float',
    interval: false,
    historical: false,
  }),

  P_SAR: new BaseField('P_SAR', {
    label: 'P Sar',
    fieldName: 'P.SAR',
    format: 'float',
    interval: false,
    historical: false,
  }),

  PERF_10Y: new BaseField('PERF_10Y', {
    label: 'Perf 10Y',
    fieldName: 'Perf.10Y',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  PERF_1M: new BaseField('PERF_1M', {
    label: 'Perf 1M',
    fieldName: 'Perf.1M',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  PERF_3M: new BaseField('PERF_3M', {
    label: 'Perf 3M',
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

  PERF_5Y: new BaseField('PERF_5Y', {
    label: 'Perf 5Y',
    fieldName: 'Perf.5Y',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  PERF_6M: new BaseField('PERF_6M', {
    label: 'Perf 6M',
    fieldName: 'Perf.6M',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  PERF_ALL: new BaseField('PERF_ALL', {
    label: 'Perf All',
    fieldName: 'Perf.All',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  PERF_W: new BaseField('PERF_W', {
    label: 'Perf W',
    fieldName: 'Perf.W',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  PERF_Y: new BaseField('PERF_Y', {
    label: 'Perf Y',
    fieldName: 'Perf.Y',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  PERF_YTD: new BaseField('PERF_YTD', {
    label: 'Perf YTD',
    fieldName: 'Perf.YTD',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_MIDDLE: new BaseField('PIVOT_M_CAMARILLA_MIDDLE', {
    label: 'Pivot M Camarilla Middle',
    fieldName: 'Pivot.M.Camarilla.Middle',
    format: 'float',
    interval: false,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_R1: new BaseField('PIVOT_M_CAMARILLA_R1', {
    label: 'Pivot M Camarilla R1',
    fieldName: 'Pivot.M.Camarilla.R1',
    format: 'float',
    interval: false,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_R2: new BaseField('PIVOT_M_CAMARILLA_R2', {
    label: 'Pivot M Camarilla R2',
    fieldName: 'Pivot.M.Camarilla.R2',
    format: 'float',
    interval: false,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_R3: new BaseField('PIVOT_M_CAMARILLA_R3', {
    label: 'Pivot M Camarilla R3',
    fieldName: 'Pivot.M.Camarilla.R3',
    format: 'float',
    interval: false,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_S1: new BaseField('PIVOT_M_CAMARILLA_S1', {
    label: 'Pivot M Camarilla S1',
    fieldName: 'Pivot.M.Camarilla.S1',
    format: 'float',
    interval: false,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_S2: new BaseField('PIVOT_M_CAMARILLA_S2', {
    label: 'Pivot M Camarilla S2',
    fieldName: 'Pivot.M.Camarilla.S2',
    format: 'float',
    interval: false,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_S3: new BaseField('PIVOT_M_CAMARILLA_S3', {
    label: 'Pivot M Camarilla S3',
    fieldName: 'Pivot.M.Camarilla.S3',
    format: 'float',
    interval: false,
    historical: false,
  }),

  PIVOT_M_CLASSIC_MIDDLE: new BaseField('PIVOT_M_CLASSIC_MIDDLE', {
    label: 'Pivot M Classic Middle',
    fieldName: 'Pivot.M.Classic.Middle',
    format: 'float',
    interval: false,
    historical: false,
  }),

  PIVOT_M_CLASSIC_R1: new BaseField('PIVOT_M_CLASSIC_R1', {
    label: 'Pivot M Classic R1',
    fieldName: 'Pivot.M.Classic.R1',
    format: 'float',
    interval: false,
    historical: false,
  }),

  PIVOT_M_CLASSIC_R2: new BaseField('PIVOT_M_CLASSIC_R2', {
    label: 'Pivot M Classic R2',
    fieldName: 'Pivot.M.Classic.R2',
    format: 'float',
    interval: false,
    historical: false,
  }),

  PIVOT_M_CLASSIC_R3: new BaseField('PIVOT_M_CLASSIC_R3', {
    label: 'Pivot M Classic R3',
    fieldName: 'Pivot.M.Classic.R3',
    format: 'float',
    interval: false,
    historical: false,
  }),

  PIVOT_M_CLASSIC_S1: new BaseField('PIVOT_M_CLASSIC_S1', {
    label: 'Pivot M Classic S1',
    fieldName: 'Pivot.M.Classic.S1',
    format: 'float',
    interval: false,
    historical: false,
  }),

  PIVOT_M_CLASSIC_S2: new BaseField('PIVOT_M_CLASSIC_S2', {
    label: 'Pivot M Classic S2',
    fieldName: 'Pivot.M.Classic.S2',
    format: 'float',
    interval: false,
    historical: false,
  }),

  PIVOT_M_CLASSIC_S3: new BaseField('PIVOT_M_CLASSIC_S3', {
    label: 'Pivot M Classic S3',
    fieldName: 'Pivot.M.Classic.S3',
    format: 'float',
    interval: false,
    historical: false,
  }),

  PIVOT_M_DEMARK_MIDDLE: new BaseField('PIVOT_M_DEMARK_MIDDLE', {
    label: 'Pivot M Demark Middle',
    fieldName: 'Pivot.M.Demark.Middle',
    format: 'float',
    interval: false,
    historical: false,
  }),

  PIVOT_M_DEMARK_R1: new BaseField('PIVOT_M_DEMARK_R1', {
    label: 'Pivot M Demark R1',
    fieldName: 'Pivot.M.Demark.R1',
    format: 'float',
    interval: false,
    historical: false,
  }),

  PIVOT_M_DEMARK_S1: new BaseField('PIVOT_M_DEMARK_S1', {
    label: 'Pivot M Demark S1',
    fieldName: 'Pivot.M.Demark.S1',
    format: 'float',
    interval: false,
    historical: false,
  }),

  PIVOT_M_FIBONACCI_MIDDLE: new BaseField('PIVOT_M_FIBONACCI_MIDDLE', {
    label: 'Pivot M Fibonacci Middle',
    fieldName: 'Pivot.M.Fibonacci.Middle',
    format: 'float',
    interval: false,
    historical: false,
  }),

  PIVOT_M_FIBONACCI_R1: new BaseField('PIVOT_M_FIBONACCI_R1', {
    label: 'Pivot M Fibonacci R1',
    fieldName: 'Pivot.M.Fibonacci.R1',
    format: 'float',
    interval: false,
    historical: false,
  }),

  PIVOT_M_FIBONACCI_R2: new BaseField('PIVOT_M_FIBONACCI_R2', {
    label: 'Pivot M Fibonacci R2',
    fieldName: 'Pivot.M.Fibonacci.R2',
    format: 'float',
    interval: false,
    historical: false,
  }),

  PIVOT_M_FIBONACCI_R3: new BaseField('PIVOT_M_FIBONACCI_R3', {
    label: 'Pivot M Fibonacci R3',
    fieldName: 'Pivot.M.Fibonacci.R3',
    format: 'float',
    interval: false,
    historical: false,
  }),

  PIVOT_M_FIBONACCI_S1: new BaseField('PIVOT_M_FIBONACCI_S1', {
    label: 'Pivot M Fibonacci S1',
    fieldName: 'Pivot.M.Fibonacci.S1',
    format: 'float',
    interval: false,
    historical: false,
  }),

  PIVOT_M_FIBONACCI_S2: new BaseField('PIVOT_M_FIBONACCI_S2', {
    label: 'Pivot M Fibonacci S2',
    fieldName: 'Pivot.M.Fibonacci.S2',
    format: 'float',
    interval: false,
    historical: false,
  }),

  PIVOT_M_FIBONACCI_S3: new BaseField('PIVOT_M_FIBONACCI_S3', {
    label: 'Pivot M Fibonacci S3',
    fieldName: 'Pivot.M.Fibonacci.S3',
    format: 'float',
    interval: false,
    historical: false,
  }),

  PIVOT_M_WOODIE_MIDDLE: new BaseField('PIVOT_M_WOODIE_MIDDLE', {
    label: 'Pivot M Woodie Middle',
    fieldName: 'Pivot.M.Woodie.Middle',
    format: 'float',
    interval: false,
    historical: false,
  }),

  PIVOT_M_WOODIE_R1: new BaseField('PIVOT_M_WOODIE_R1', {
    label: 'Pivot M Woodie R1',
    fieldName: 'Pivot.M.Woodie.R1',
    format: 'float',
    interval: false,
    historical: false,
  }),

  PIVOT_M_WOODIE_R2: new BaseField('PIVOT_M_WOODIE_R2', {
    label: 'Pivot M Woodie R2',
    fieldName: 'Pivot.M.Woodie.R2',
    format: 'float',
    interval: false,
    historical: false,
  }),

  PIVOT_M_WOODIE_R3: new BaseField('PIVOT_M_WOODIE_R3', {
    label: 'Pivot M Woodie R3',
    fieldName: 'Pivot.M.Woodie.R3',
    format: 'float',
    interval: false,
    historical: false,
  }),

  PIVOT_M_WOODIE_S1: new BaseField('PIVOT_M_WOODIE_S1', {
    label: 'Pivot M Woodie S1',
    fieldName: 'Pivot.M.Woodie.S1',
    format: 'float',
    interval: false,
    historical: false,
  }),

  PIVOT_M_WOODIE_S2: new BaseField('PIVOT_M_WOODIE_S2', {
    label: 'Pivot M Woodie S2',
    fieldName: 'Pivot.M.Woodie.S2',
    format: 'float',
    interval: false,
    historical: false,
  }),

  PIVOT_M_WOODIE_S3: new BaseField('PIVOT_M_WOODIE_S3', {
    label: 'Pivot M Woodie S3',
    fieldName: 'Pivot.M.Woodie.S3',
    format: 'float',
    interval: false,
    historical: false,
  }),

  ROC: new BaseField('ROC', {
    label: 'Roc',
    fieldName: 'ROC',
    format: 'float',
    interval: false,
    historical: false,
  }),

  RSI: new BaseField('RSI', {
    label: 'RSI',
    fieldName: 'RSI',
    format: 'float',
    interval: false,
    historical: false,
  }),

  RSI10: new BaseField('RSI10', {
    label: 'Rsi10',
    fieldName: 'RSI10',
    format: 'float',
    interval: false,
    historical: false,
  }),

  RSI10_1: new BaseField('RSI10_1', {
    label: 'Rsi10[1]',
    fieldName: 'RSI10[1]',
    format: 'float',
    interval: false,
    historical: false,
  }),

  RSI2: new BaseField('RSI2', {
    label: 'Rsi2',
    fieldName: 'RSI2',
    format: 'float',
    interval: false,
    historical: false,
  }),

  RSI20: new BaseField('RSI20', {
    label: 'Rsi20',
    fieldName: 'RSI20',
    format: 'float',
    interval: false,
    historical: false,
  }),

  RSI20_1: new BaseField('RSI20_1', {
    label: 'Rsi20[1]',
    fieldName: 'RSI20[1]',
    format: 'float',
    interval: false,
    historical: false,
  }),

  RSI21: new BaseField('RSI21', {
    label: 'Rsi21',
    fieldName: 'RSI21',
    format: 'float',
    interval: false,
    historical: false,
  }),

  RSI21_1: new BaseField('RSI21_1', {
    label: 'Rsi21[1]',
    fieldName: 'RSI21[1]',
    format: 'float',
    interval: false,
    historical: false,
  }),

  RSI2_1: new BaseField('RSI2_1', {
    label: 'Rsi2[1]',
    fieldName: 'RSI2[1]',
    format: 'float',
    interval: false,
    historical: false,
  }),

  RSI3: new BaseField('RSI3', {
    label: 'Rsi3',
    fieldName: 'RSI3',
    format: 'float',
    interval: false,
    historical: false,
  }),

  RSI30: new BaseField('RSI30', {
    label: 'Rsi30',
    fieldName: 'RSI30',
    format: 'float',
    interval: false,
    historical: false,
  }),

  RSI30_1: new BaseField('RSI30_1', {
    label: 'Rsi30[1]',
    fieldName: 'RSI30[1]',
    format: 'float',
    interval: false,
    historical: false,
  }),

  RSI3_1: new BaseField('RSI3_1', {
    label: 'Rsi3[1]',
    fieldName: 'RSI3[1]',
    format: 'float',
    interval: false,
    historical: false,
  }),

  RSI4: new BaseField('RSI4', {
    label: 'Rsi4',
    fieldName: 'RSI4',
    format: 'float',
    interval: false,
    historical: false,
  }),

  RSI4_1: new BaseField('RSI4_1', {
    label: 'Rsi4[1]',
    fieldName: 'RSI4[1]',
    format: 'float',
    interval: false,
    historical: false,
  }),

  RSI5: new BaseField('RSI5', {
    label: 'Rsi5',
    fieldName: 'RSI5',
    format: 'float',
    interval: false,
    historical: false,
  }),

  RSI5_1: new BaseField('RSI5_1', {
    label: 'Rsi5[1]',
    fieldName: 'RSI5[1]',
    format: 'float',
    interval: false,
    historical: false,
  }),

  RSI7: new BaseField('RSI7', {
    label: 'Rsi7',
    fieldName: 'RSI7',
    format: 'float',
    interval: false,
    historical: false,
  }),

  RSI7_1: new BaseField('RSI7_1', {
    label: 'Rsi7[1]',
    fieldName: 'RSI7[1]',
    format: 'float',
    interval: false,
    historical: false,
  }),

  RSI9: new BaseField('RSI9', {
    label: 'Rsi9',
    fieldName: 'RSI9',
    format: 'float',
    interval: false,
    historical: false,
  }),

  RSI9_1: new BaseField('RSI9_1', {
    label: 'Rsi9[1]',
    fieldName: 'RSI9[1]',
    format: 'float',
    interval: false,
    historical: false,
  }),

  RSI_1: new BaseField('RSI_1', {
    label: 'RSI[1]',
    fieldName: 'RSI[1]',
    format: 'float',
    interval: false,
    historical: false,
  }),

  REC_BBPOWER: new BaseField('REC_BBPOWER', {
    label: 'Rec Bbpower',
    fieldName: 'Rec.BBPower',
    format: 'rating',
    interval: false,
    historical: false,
  }),

  REC_HULLMA9: new BaseField('REC_HULLMA9', {
    label: 'Rec Hullma9',
    fieldName: 'Rec.HullMA9',
    format: 'rating',
    interval: false,
    historical: false,
  }),

  REC_ICHIMOKU: new BaseField('REC_ICHIMOKU', {
    label: 'Rec Ichimoku',
    fieldName: 'Rec.Ichimoku',
    format: 'rating',
    interval: false,
    historical: false,
  }),

  REC_STOCH_RSI: new BaseField('REC_STOCH_RSI', {
    label: 'Rec Stoch RSI',
    fieldName: 'Rec.Stoch.RSI',
    format: 'rating',
    interval: false,
    historical: false,
  }),

  REC_UO: new BaseField('REC_UO', {
    label: 'Rec UO',
    fieldName: 'Rec.UO',
    format: 'rating',
    interval: false,
    historical: false,
  }),

  REC_VWMA: new BaseField('REC_VWMA', {
    label: 'Rec VWMA',
    fieldName: 'Rec.VWMA',
    format: 'rating',
    interval: false,
    historical: false,
  }),

  REC_WR: new BaseField('REC_WR', {
    label: 'Rec Wr',
    fieldName: 'Rec.WR',
    format: 'rating',
    interval: false,
    historical: false,
  }),

  RECOMMEND_ALL: new BaseField('RECOMMEND_ALL', {
    label: 'Recommend All',
    fieldName: 'Recommend.All',
    format: 'rating',
    interval: false,
    historical: false,
  }),

  RECOMMEND_MA: new BaseField('RECOMMEND_MA', {
    label: 'Recommend Ma',
    fieldName: 'Recommend.MA',
    format: 'rating',
    interval: false,
    historical: false,
  }),

  RECOMMEND_OTHER: new BaseField('RECOMMEND_OTHER', {
    label: 'Recommend Other',
    fieldName: 'Recommend.Other',
    format: 'rating',
    interval: false,
    historical: false,
  }),

  SMA10: new BaseField('SMA10', {
    label: 'Sma10',
    fieldName: 'SMA10',
    format: 'float',
    interval: false,
    historical: false,
  }),

  SMA100: new BaseField('SMA100', {
    label: 'Sma100',
    fieldName: 'SMA100',
    format: 'float',
    interval: false,
    historical: false,
  }),

  SMA12: new BaseField('SMA12', {
    label: 'Sma12',
    fieldName: 'SMA12',
    format: 'float',
    interval: false,
    historical: false,
  }),

  SMA120: new BaseField('SMA120', {
    label: 'Sma120',
    fieldName: 'SMA120',
    format: 'float',
    interval: false,
    historical: false,
  }),

  SMA13: new BaseField('SMA13', {
    label: 'Sma13',
    fieldName: 'SMA13',
    format: 'float',
    interval: false,
    historical: false,
  }),

  SMA14: new BaseField('SMA14', {
    label: 'Sma14',
    fieldName: 'SMA14',
    format: 'float',
    interval: false,
    historical: false,
  }),

  SMA144: new BaseField('SMA144', {
    label: 'Sma144',
    fieldName: 'SMA144',
    format: 'float',
    interval: false,
    historical: false,
  }),

  SMA15: new BaseField('SMA15', {
    label: 'Sma15',
    fieldName: 'SMA15',
    format: 'float',
    interval: false,
    historical: false,
  }),

  SMA150: new BaseField('SMA150', {
    label: 'Sma150',
    fieldName: 'SMA150',
    format: 'float',
    interval: false,
    historical: false,
  }),

  SMA2: new BaseField('SMA2', {
    label: 'Sma2',
    fieldName: 'SMA2',
    format: 'float',
    interval: false,
    historical: false,
  }),

  SMA20: new BaseField('SMA20', {
    label: 'Sma20',
    fieldName: 'SMA20',
    format: 'float',
    interval: false,
    historical: false,
  }),

  SMA200: new BaseField('SMA200', {
    label: 'Sma200',
    fieldName: 'SMA200',
    format: 'float',
    interval: false,
    historical: false,
  }),

  SMA21: new BaseField('SMA21', {
    label: 'Sma21',
    fieldName: 'SMA21',
    format: 'float',
    interval: false,
    historical: false,
  }),

  SMA25: new BaseField('SMA25', {
    label: 'Sma25',
    fieldName: 'SMA25',
    format: 'float',
    interval: false,
    historical: false,
  }),

  SMA250: new BaseField('SMA250', {
    label: 'Sma250',
    fieldName: 'SMA250',
    format: 'float',
    interval: false,
    historical: false,
  }),

  SMA26: new BaseField('SMA26', {
    label: 'Sma26',
    fieldName: 'SMA26',
    format: 'float',
    interval: false,
    historical: false,
  }),

  SMA3: new BaseField('SMA3', {
    label: 'Sma3',
    fieldName: 'SMA3',
    format: 'float',
    interval: false,
    historical: false,
  }),

  SMA30: new BaseField('SMA30', {
    label: 'Sma30',
    fieldName: 'SMA30',
    format: 'float',
    interval: false,
    historical: false,
  }),

  SMA300: new BaseField('SMA300', {
    label: 'Sma300',
    fieldName: 'SMA300',
    format: 'float',
    interval: false,
    historical: false,
  }),

  SMA34: new BaseField('SMA34', {
    label: 'Sma34',
    fieldName: 'SMA34',
    format: 'float',
    interval: false,
    historical: false,
  }),

  SMA40: new BaseField('SMA40', {
    label: 'Sma40',
    fieldName: 'SMA40',
    format: 'float',
    interval: false,
    historical: false,
  }),

  SMA5: new BaseField('SMA5', {
    label: 'Sma5',
    fieldName: 'SMA5',
    format: 'float',
    interval: false,
    historical: false,
  }),

  SMA50: new BaseField('SMA50', {
    label: 'Sma50',
    fieldName: 'SMA50',
    format: 'float',
    interval: false,
    historical: false,
  }),

  SMA55: new BaseField('SMA55', {
    label: 'Sma55',
    fieldName: 'SMA55',
    format: 'float',
    interval: false,
    historical: false,
  }),

  SMA6: new BaseField('SMA6', {
    label: 'Sma6',
    fieldName: 'SMA6',
    format: 'float',
    interval: false,
    historical: false,
  }),

  SMA60: new BaseField('SMA60', {
    label: 'Sma60',
    fieldName: 'SMA60',
    format: 'float',
    interval: false,
    historical: false,
  }),

  SMA7: new BaseField('SMA7', {
    label: 'Sma7',
    fieldName: 'SMA7',
    format: 'float',
    interval: false,
    historical: false,
  }),

  SMA75: new BaseField('SMA75', {
    label: 'Sma75',
    fieldName: 'SMA75',
    format: 'float',
    interval: false,
    historical: false,
  }),

  SMA8: new BaseField('SMA8', {
    label: 'Sma8',
    fieldName: 'SMA8',
    format: 'float',
    interval: false,
    historical: false,
  }),

  SMA89: new BaseField('SMA89', {
    label: 'Sma89',
    fieldName: 'SMA89',
    format: 'float',
    interval: false,
    historical: false,
  }),

  SMA9: new BaseField('SMA9', {
    label: 'Sma9',
    fieldName: 'SMA9',
    format: 'float',
    interval: false,
    historical: false,
  }),

  STOCH_D: new BaseField('STOCH_D', {
    label: 'Stoch D',
    fieldName: 'Stoch.D',
    format: 'float',
    interval: false,
    historical: false,
  }),

  STOCH_D_1: new BaseField('STOCH_D_1', {
    label: 'Stoch D[1]',
    fieldName: 'Stoch.D[1]',
    format: 'float',
    interval: false,
    historical: false,
  }),

  STOCH_D_14_1_3: new BaseField('STOCH_D_14_1_3', {
    label: 'Stoch D 14 1 3',
    fieldName: 'Stoch.D_14_1_3',
    format: 'float',
    interval: false,
    historical: false,
  }),

  STOCH_D_14_1_3_1: new BaseField('STOCH_D_14_1_3_1', {
    label: 'Stoch D 14 1 3[1]',
    fieldName: 'Stoch.D_14_1_3[1]',
    format: 'float',
    interval: false,
    historical: false,
  }),

  STOCH_D_5_3_3: new BaseField('STOCH_D_5_3_3', {
    label: 'Stoch D 5 3 3',
    fieldName: 'Stoch.D_5_3_3',
    format: 'float',
    interval: false,
    historical: false,
  }),

  STOCH_D_5_3_3_1: new BaseField('STOCH_D_5_3_3_1', {
    label: 'Stoch D 5 3 3[1]',
    fieldName: 'Stoch.D_5_3_3[1]',
    format: 'float',
    interval: false,
    historical: false,
  }),

  STOCH_D_6_3_3: new BaseField('STOCH_D_6_3_3', {
    label: 'Stoch D 6 3 3',
    fieldName: 'Stoch.D_6_3_3',
    format: 'float',
    interval: false,
    historical: false,
  }),

  STOCH_D_6_3_3_1: new BaseField('STOCH_D_6_3_3_1', {
    label: 'Stoch D 6 3 3[1]',
    fieldName: 'Stoch.D_6_3_3[1]',
    format: 'float',
    interval: false,
    historical: false,
  }),

  STOCH_D_8_3_3: new BaseField('STOCH_D_8_3_3', {
    label: 'Stoch D 8 3 3',
    fieldName: 'Stoch.D_8_3_3',
    format: 'float',
    interval: false,
    historical: false,
  }),

  STOCH_D_8_3_3_1: new BaseField('STOCH_D_8_3_3_1', {
    label: 'Stoch D 8 3 3[1]',
    fieldName: 'Stoch.D_8_3_3[1]',
    format: 'float',
    interval: false,
    historical: false,
  }),

  STOCH_K: new BaseField('STOCH_K', {
    label: 'Stoch K',
    fieldName: 'Stoch.K',
    format: 'float',
    interval: false,
    historical: false,
  }),

  STOCH_K_1: new BaseField('STOCH_K_1', {
    label: 'Stoch K[1]',
    fieldName: 'Stoch.K[1]',
    format: 'float',
    interval: false,
    historical: false,
  }),

  STOCH_K_14_1_3: new BaseField('STOCH_K_14_1_3', {
    label: 'Stoch K 14 1 3',
    fieldName: 'Stoch.K_14_1_3',
    format: 'float',
    interval: false,
    historical: false,
  }),

  STOCH_K_14_1_3_1: new BaseField('STOCH_K_14_1_3_1', {
    label: 'Stoch K 14 1 3[1]',
    fieldName: 'Stoch.K_14_1_3[1]',
    format: 'float',
    interval: false,
    historical: false,
  }),

  STOCH_K_5_3_3: new BaseField('STOCH_K_5_3_3', {
    label: 'Stoch K 5 3 3',
    fieldName: 'Stoch.K_5_3_3',
    format: 'float',
    interval: false,
    historical: false,
  }),

  STOCH_K_5_3_3_1: new BaseField('STOCH_K_5_3_3_1', {
    label: 'Stoch K 5 3 3[1]',
    fieldName: 'Stoch.K_5_3_3[1]',
    format: 'float',
    interval: false,
    historical: false,
  }),

  STOCH_K_6_3_3: new BaseField('STOCH_K_6_3_3', {
    label: 'Stoch K 6 3 3',
    fieldName: 'Stoch.K_6_3_3',
    format: 'float',
    interval: false,
    historical: false,
  }),

  STOCH_K_6_3_3_1: new BaseField('STOCH_K_6_3_3_1', {
    label: 'Stoch K 6 3 3[1]',
    fieldName: 'Stoch.K_6_3_3[1]',
    format: 'float',
    interval: false,
    historical: false,
  }),

  STOCH_K_8_3_3: new BaseField('STOCH_K_8_3_3', {
    label: 'Stoch K 8 3 3',
    fieldName: 'Stoch.K_8_3_3',
    format: 'float',
    interval: false,
    historical: false,
  }),

  STOCH_K_8_3_3_1: new BaseField('STOCH_K_8_3_3_1', {
    label: 'Stoch K 8 3 3[1]',
    fieldName: 'Stoch.K_8_3_3[1]',
    format: 'float',
    interval: false,
    historical: false,
  }),

  STOCH_RSI_D: new BaseField('STOCH_RSI_D', {
    label: 'Stoch RSI D',
    fieldName: 'Stoch.RSI.D',
    format: 'float',
    interval: false,
    historical: false,
  }),

  STOCH_RSI_K: new BaseField('STOCH_RSI_K', {
    label: 'Stoch RSI K',
    fieldName: 'Stoch.RSI.K',
    format: 'float',
    interval: false,
    historical: false,
  }),

  UO: new BaseField('UO', {
    label: 'UO',
    fieldName: 'UO',
    format: 'float',
    interval: false,
    historical: false,
  }),

  VWAP: new BaseField('VWAP', {
    label: 'VWAP',
    fieldName: 'VWAP',
    format: 'float',
    interval: false,
    historical: false,
  }),

  VWMA: new BaseField('VWMA', {
    label: 'VWMA',
    fieldName: 'VWMA',
    format: 'float',
    interval: false,
    historical: false,
  }),

  VALUE_TRADED: new BaseField('VALUE_TRADED', {
    label: 'Value Traded',
    fieldName: 'Value.Traded',
    format: 'float',
    interval: false,
    historical: false,
  }),

  VOLATILITY_D: new BaseField('VOLATILITY_D', {
    label: 'Volatility D',
    fieldName: 'Volatility.D',
    format: 'float',
    interval: false,
    historical: false,
  }),

  VOLATILITY_M: new BaseField('VOLATILITY_M', {
    label: 'Volatility M',
    fieldName: 'Volatility.M',
    format: 'float',
    interval: false,
    historical: false,
  }),

  VOLATILITY_W: new BaseField('VOLATILITY_W', {
    label: 'Volatility W',
    fieldName: 'Volatility.W',
    format: 'float',
    interval: false,
    historical: false,
  }),

  W_R: new BaseField('W_R', {
    label: 'W R',
    fieldName: 'W.R',
    format: 'float',
    interval: false,
    historical: false,
  }),

  ACTIVE_SYMBOL: new BaseField('ACTIVE_SYMBOL', {
    label: 'Active Symbol',
    fieldName: 'active_symbol',
    format: 'float',
    interval: false,
    historical: false,
  }),

  ALL_TIME_HIGH: new BaseField('ALL_TIME_HIGH', {
    label: 'All Time High',
    fieldName: 'all_time_high',
    format: 'date',
    interval: false,
    historical: false,
  }),

  ALL_TIME_HIGH_DAY: new BaseField('ALL_TIME_HIGH_DAY', {
    label: 'All Time High Day',
    fieldName: 'all_time_high_day',
    format: 'date',
    interval: false,
    historical: false,
  }),

  ALL_TIME_LOW: new BaseField('ALL_TIME_LOW', {
    label: 'All Time Low',
    fieldName: 'all_time_low',
    format: 'date',
    interval: false,
    historical: false,
  }),

  ALL_TIME_LOW_DAY: new BaseField('ALL_TIME_LOW_DAY', {
    label: 'All Time Low Day',
    fieldName: 'all_time_low_day',
    format: 'date',
    interval: false,
    historical: false,
  }),

  ALL_TIME_OPEN: new BaseField('ALL_TIME_OPEN', {
    label: 'All Time Open',
    fieldName: 'all_time_open',
    format: 'date',
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

  AVERAGE_VOLUME_30D_CALC: new BaseField('AVERAGE_VOLUME_30D_CALC', {
    label: 'Average Volume 30D Calc',
    fieldName: 'average_volume_30d_calc',
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

  AVERAGE_VOLUME_90D_CALC: new BaseField('AVERAGE_VOLUME_90D_CALC', {
    label: 'Average Volume 90D Calc',
    fieldName: 'average_volume_90d_calc',
    format: 'number_group',
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

  BASE_CURRENCY_KIND: new BaseField('BASE_CURRENCY_KIND', {
    label: 'Base Currency Kind',
    fieldName: 'base_currency_kind',
    format: 'text',
    interval: false,
    historical: false,
  }),

  CHANGE: new BaseField('CHANGE', {
    label: 'Change',
    fieldName: 'change',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  CHANGE_ABS: new BaseField('CHANGE_ABS', {
    label: 'Change Abs',
    fieldName: 'change_abs',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  CHANGE_FROM_OPEN: new BaseField('CHANGE_FROM_OPEN', {
    label: 'Change From Open',
    fieldName: 'change_from_open',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  CHANGE_FROM_OPEN_ABS: new BaseField('CHANGE_FROM_OPEN_ABS', {
    label: 'Change From Open Abs',
    fieldName: 'change_from_open_abs',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  CLOSE: new BaseField('CLOSE', {
    label: 'Close',
    fieldName: 'close',
    format: 'float',
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

  CRYPTOASSET_MINUS_INFO_DESCRIPTION: new BaseField('CRYPTOASSET_MINUS_INFO_DESCRIPTION', {
    label: 'Cryptoasset-Info Description',
    fieldName: 'cryptoasset-info.description',
    format: 'text',
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

  DAYS_TO_MATURITY: new BaseField('DAYS_TO_MATURITY', {
    label: 'Days To Maturity',
    fieldName: 'days_to_maturity',
    format: 'float',
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

  EXCHANGE: new BaseField('EXCHANGE', {
    label: 'Exchange',
    fieldName: 'exchange',
    format: 'percent',
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

  GAP: new BaseField('GAP', {
    label: 'Gap',
    fieldName: 'gap',
    format: 'float',
    interval: false,
    historical: false,
  }),

  GAP_DOWN: new BaseField('GAP_DOWN', {
    label: 'Gap Down',
    fieldName: 'gap_down',
    format: 'float',
    interval: false,
    historical: false,
  }),

  GAP_DOWN_ABS: new BaseField('GAP_DOWN_ABS', {
    label: 'Gap Down Abs',
    fieldName: 'gap_down_abs',
    format: 'float',
    interval: false,
    historical: false,
  }),

  GAP_UP: new BaseField('GAP_UP', {
    label: 'Gap Up',
    fieldName: 'gap_up',
    format: 'float',
    interval: false,
    historical: false,
  }),

  GAP_UP_ABS: new BaseField('GAP_UP_ABS', {
    label: 'Gap Up Abs',
    fieldName: 'gap_up_abs',
    format: 'float',
    interval: false,
    historical: false,
  }),

  HIGH: new BaseField('HIGH', {
    label: 'High',
    fieldName: 'high',
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

  IS_BLACKLISTED: new BaseField('IS_BLACKLISTED', {
    label: 'Is Blacklisted',
    fieldName: 'is_blacklisted',
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

  IS_SHARIAH_COMPLIANT: new BaseField('IS_SHARIAH_COMPLIANT', {
    label: 'Is Shariah Compliant',
    fieldName: 'is_shariah_compliant',
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

  LOGOID: new BaseField('LOGOID', {
    label: 'Logoid',
    fieldName: 'logoid',
    format: 'text',
    interval: false,
    historical: false,
  }),

  LOW: new BaseField('LOW', {
    label: 'Low',
    fieldName: 'low',
    format: 'float',
    interval: false,
    historical: false,
  }),

  LOW_AFTER_HIGH_ALL_CHANGE: new BaseField('LOW_AFTER_HIGH_ALL_CHANGE', {
    label: 'Low After High All Change',
    fieldName: 'low_after_high_all_change',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  LOW_AFTER_HIGH_ALL_CHANGE_ABS: new BaseField('LOW_AFTER_HIGH_ALL_CHANGE_ABS', {
    label: 'Low After High All Change Abs',
    fieldName: 'low_after_high_all_change_abs',
    format: 'percent',
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

  MATURITY_DATE: new BaseField('MATURITY_DATE', {
    label: 'Maturity Date',
    fieldName: 'maturity_date',
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

  NAME: new BaseField('NAME', {
    label: 'Name',
    fieldName: 'name',
    format: 'text',
    interval: false,
    historical: false,
  }),

  OPEN: new BaseField('OPEN', {
    label: 'Open',
    fieldName: 'open',
    format: 'float',
    interval: false,
    historical: false,
  }),

  OPEN_INTEREST: new BaseField('OPEN_INTEREST', {
    label: 'Open Interest',
    fieldName: 'open_interest',
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

  POST_CHANGE: new BaseField('POST_CHANGE', {
    label: 'Post Change',
    fieldName: 'post_change',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  POSTMARKET_CHANGE: new BaseField('POSTMARKET_CHANGE', {
    label: 'Postmarket Change',
    fieldName: 'postmarket_change',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  POSTMARKET_CHANGE_ABS: new BaseField('POSTMARKET_CHANGE_ABS', {
    label: 'Postmarket Change Abs',
    fieldName: 'postmarket_change_abs',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  PRE_CHANGE: new BaseField('PRE_CHANGE', {
    label: 'Pre Change',
    fieldName: 'pre_change',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  PRE_CHANGE_ABS: new BaseField('PRE_CHANGE_ABS', {
    label: 'Pre Change Abs',
    fieldName: 'pre_change_abs',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  PREMARKET_CHANGE: new BaseField('PREMARKET_CHANGE', {
    label: 'Premarket Change',
    fieldName: 'premarket_change',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  PREMARKET_CHANGE_ABS: new BaseField('PREMARKET_CHANGE_ABS', {
    label: 'Premarket Change Abs',
    fieldName: 'premarket_change_abs',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  PREMARKET_CHANGE_FROM_OPEN: new BaseField('PREMARKET_CHANGE_FROM_OPEN', {
    label: 'Premarket Change From Open',
    fieldName: 'premarket_change_from_open',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  PREMARKET_CHANGE_FROM_OPEN_ABS: new BaseField('PREMARKET_CHANGE_FROM_OPEN_ABS', {
    label: 'Premarket Change From Open Abs',
    fieldName: 'premarket_change_from_open_abs',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  PREMARKET_GAP: new BaseField('PREMARKET_GAP', {
    label: 'Premarket Gap',
    fieldName: 'premarket_gap',
    format: 'float',
    interval: false,
    historical: false,
  }),

  PRICE_52_WEEK_HIGH: new BaseField('PRICE_52_WEEK_HIGH', {
    label: 'Price 52 Week High',
    fieldName: 'price_52_week_high',
    format: 'float',
    interval: false,
    historical: false,
  }),

  PRICE_52_WEEK_HIGH_DATE: new BaseField('PRICE_52_WEEK_HIGH_DATE', {
    label: 'Price 52 Week High Date',
    fieldName: 'price_52_week_high_date',
    format: 'date',
    interval: false,
    historical: false,
  }),

  PRICE_52_WEEK_LOW: new BaseField('PRICE_52_WEEK_LOW', {
    label: 'Price 52 Week Low',
    fieldName: 'price_52_week_low',
    format: 'float',
    interval: false,
    historical: false,
  }),

  PRICE_52_WEEK_LOW_DATE: new BaseField('PRICE_52_WEEK_LOW_DATE', {
    label: 'Price 52 Week Low Date',
    fieldName: 'price_52_week_low_date',
    format: 'date',
    interval: false,
    historical: false,
  }),

  PRICESCALE: new BaseField('PRICESCALE', {
    label: 'Pricescale',
    fieldName: 'pricescale',
    format: 'float',
    interval: false,
    historical: false,
  }),

  PRODUCT: new BaseField('PRODUCT', {
    label: 'Product',
    fieldName: 'product',
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

  RELATIVE_VOLUME_10D_CALC: new BaseField('RELATIVE_VOLUME_10D_CALC', {
    label: 'Relative Volume 10D Calc',
    fieldName: 'relative_volume_10d_calc',
    format: 'number_group',
    interval: false,
    historical: false,
  }),

  SECTOR: new BaseField('SECTOR', {
    label: 'Sector',
    fieldName: 'sector',
    format: 'text',
    interval: false,
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

  UPDATE_MINUS_TIME: new BaseField('UPDATE_MINUS_TIME', {
    label: 'Update-Time',
    fieldName: 'update-time',
    format: 'date',
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

  UPDATE_TIME: new BaseField('UPDATE_TIME', {
    label: 'Update Time',
    fieldName: 'update_time',
    format: 'date',
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
    interval: false,
    historical: false,
  }),

  VOLUME_CHANGE_ABS: new BaseField('VOLUME_CHANGE_ABS', {
    label: 'Volume Change Abs',
    fieldName: 'volume_change_abs',
    format: 'percent',
    interval: false,
    historical: false,
  }),

} as const;

export type FuturesFieldValue = typeof FuturesField[keyof typeof FuturesField];
