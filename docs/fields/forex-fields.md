# Forex Fields Reference

Complete reference for all 2,965 foreign exchange fields available in the ForexScreener.

## Overview

The ForexField enum provides **2,965 total fields** with full parity to the Python `tvscreener` library. These fields cover comprehensive technical analysis, price metrics, volume indicators, and market data for currency pairs.

### Key Capabilities

- **2,662 fields** support time intervals (86%, 1m, 5m, 15m, 30m, 1h, 4h, 1D, 1W, 1M)
- **829 fields** support historical data via `.withHistory()` (28%)
- **11 data formats**: float, percent, bool, rating, text, currency, date, and more

### Import

```typescript
import { ForexScreener, ForexField } from 'tradingview-screener';
```

---

## Field Categories

### 1. Basic Information (34 Fields)

Currency pair metadata and identification.

```typescript
ForexField.NAME                      // Pair name (e.g., "EUR/USD")
ForexField.DESCRIPTION              // Full description
ForexField.LOGOID                   // Logo identifier
ForexField.TYPESPECS                // Type specifications
ForexField.EXCHANGE                 // Exchange information
```

**Performance Metrics**
```typescript
ForexField.PERF_1W_MARKETCAP        // 1-week performance
ForexField.PERF_1M_MARKETCAP        // 1-month performance
ForexField.PERF_3M_MARKETCAP        // 3-month performance
ForexField.PERF_6M_MARKETCAP        // 6-month performance
ForexField.PERF_1Y_MARKETCAP        // 1-year performance
ForexField.PERF_5Y_MARKETCAP        // 5-year performance
ForexField.PERF_YTD_MARKETCAP       // Year-to-date performance
```

---

### 2. Price & Volume (280 Fields)

Core OHLCV data, exchange rates, and performance metrics.

#### Basic Price Data

```typescript
ForexField.PRICE                    // Current exchange rate (close)
ForexField.OPEN                     // Open price
ForexField.HIGH                     // High price
ForexField.LOW                      // Low price
ForexField.VOLUME                   // Trading volume
```

#### Price Changes

```typescript
ForexField.CHANGE_PERCENT           // Change %
ForexField.CHANGE                   // Absolute change
ForexField.CHANGE_1MIN_PERCENT      // 1-minute change %
ForexField.CHANGE_5MIN_PERCENT      // 5-minute change %
ForexField.CHANGE_15MIN_PERCENT     // 15-minute change %
ForexField.CHANGE_1H_PERCENT        // 1-hour change %
ForexField.CHANGE_4H_PERCENT        // 4-hour change %
```

#### Performance Metrics

```typescript
ForexField.WEEKLY_PERFORMANCE       // Weekly performance
ForexField.MONTHLY_PERFORMANCE      // Monthly performance
ForexField.MONTH_PERFORMANCE_3      // 3-month performance
ForexField.MONTH_PERFORMANCE_6      // 6-month performance
ForexField.YEARLY_PERFORMANCE       // Yearly performance
ForexField.Y_PERFORMANCE_5          // 5-year performance
ForexField.YTD_PERFORMANCE          // Year-to-date performance
ForexField.ALL_TIME_PERFORMANCE     // All-time performance
```

#### Historical Extremes

```typescript
ForexField.ALL_TIME_HIGH_2          // All-time high date
ForexField.ALL_TIME_HIGH_DAY        // Day of all-time high
ForexField.ALL_TIME_LOW_2           // All-time low date
ForexField.ALL_TIME_LOW_DAY         // Day of all-time low
ForexField.ALL_TIME_OPEN            // All-time open date
```

#### Gap Analysis

```typescript
ForexField.GAP_PERCENT              // Gap percentage
ForexField.GAP_DOWN                 // Gap down value
ForexField.GAP_DOWN_ABS             // Absolute gap down

// Gap down metrics with intervals (1, 5, 15, 30, 60, 120, 240 minutes, 1W, 1M)
ForexField.GAP_DOWN_ABS_1           // 1-minute gap down
ForexField.GAP_DOWN_ABS_5           // 5-minute gap down
ForexField.GAP_DOWN_ABS_15          // 15-minute gap down
ForexField.GAP_DOWN_ABS_30          // 30-minute gap down
ForexField.GAP_DOWN_ABS_60          // 60-minute gap down
ForexField.GAP_DOWN_ABS_120         // 2-hour gap down
ForexField.GAP_DOWN_ABS_240         // 4-hour gap down
ForexField.GAP_DOWN_ABS_1W          // Weekly gap down
ForexField.GAP_DOWN_ABS_1M          // Monthly gap down
```

---

### 3. Moving Averages (824 Fields)

Simple, exponential, volume-weighted, and Hull moving averages across multiple periods and timeframes.

#### Simple Moving Average (SMA)

Common periods with interval support:

```typescript
ForexField.SIMPLE_MOVING_AVERAGE_10  // SMA(10)
ForexField.SIMPLE_MOVING_AVERAGE_20  // SMA(20)
ForexField.SIMPLE_MOVING_AVERAGE_30  // SMA(30)
ForexField.SIMPLE_MOVING_AVERAGE_50  // SMA(50)
ForexField.SIMPLE_MOVING_AVERAGE_100 // SMA(100)
ForexField.SIMPLE_MOVING_AVERAGE_200 // SMA(200)

// With interval notation (example for SMA20)
ForexField.SMA20_1                   // SMA(20) on 1-minute chart
ForexField.SMA20_5                   // SMA(20) on 5-minute chart
ForexField.SMA20_15                  // SMA(20) on 15-minute chart
ForexField.SMA20_30                  // SMA(20) on 30-minute chart
ForexField.SMA20_60                  // SMA(20) on 1-hour chart
ForexField.SMA20_120                 // SMA(20) on 2-hour chart
ForexField.SMA20_240                 // SMA(20) on 4-hour chart
ForexField.SMA20_1W                  // SMA(20) on weekly chart
ForexField.SMA20_1M                  // SMA(20) on monthly chart
```

**Available SMA Periods**: 5, 10, 20, 21, 25, 30, 50, 100, 200, 250

#### Exponential Moving Average (EMA)

```typescript
ForexField.EXPONENTIAL_MOVING_AVERAGE_10   // EMA(10)
ForexField.EXPONENTIAL_MOVING_AVERAGE_20   // EMA(20)
ForexField.EXPONENTIAL_MOVING_AVERAGE_30   // EMA(30)
ForexField.EXPONENTIAL_MOVING_AVERAGE_50   // EMA(50)
ForexField.EXPONENTIAL_MOVING_AVERAGE_100  // EMA(100)
ForexField.EXPONENTIAL_MOVING_AVERAGE_200  // EMA(200)

// With interval notation (example for EMA9)
ForexField.EMA9                      // EMA(9) default
ForexField.EMA9_1                    // EMA(9) on 1-minute chart
ForexField.EMA9_5                    // EMA(9) on 5-minute chart
ForexField.EMA9_15                   // EMA(9) on 15-minute chart
ForexField.EMA9_30                   // EMA(9) on 30-minute chart
ForexField.EMA9_60                   // EMA(9) on 1-hour chart
ForexField.EMA9_120                  // EMA(9) on 2-hour chart
ForexField.EMA9_240                  // EMA(9) on 4-hour chart
ForexField.EMA9_1W                   // EMA(9) on weekly chart
ForexField.EMA9_1M                   // EMA(9) on monthly chart
```

**Available EMA Periods**: 5, 8, 9, 10, 20, 21, 30, 50, 100, 200

#### Volume-Weighted Moving Average (VWMA)

```typescript
ForexField.VWMA                      // VWMA default
ForexField.VWMA_1                    // VWMA on 1-minute chart
ForexField.VWMA_5                    // VWMA on 5-minute chart
ForexField.VWMA_15                   // VWMA on 15-minute chart
ForexField.VWMA_30                   // VWMA on 30-minute chart
ForexField.VWMA_60                   // VWMA on 1-hour chart
ForexField.VWMA_120                  // VWMA on 2-hour chart
ForexField.VWMA_240                  // VWMA on 4-hour chart
ForexField.VWMA_1W                   // VWMA on weekly chart
ForexField.VWMA_1M                   // VWMA on monthly chart
```

#### Hull Moving Average (HullMA)

```typescript
ForexField.HULLMA20                  // Hull MA(20)
ForexField.HULLMA200                 // Hull MA(200)

// With interval notation (example for HullMA200)
ForexField.HULLMA200_1               // Hull MA(200) on 1-minute
ForexField.HULLMA200_5               // Hull MA(200) on 5-minute
ForexField.HULLMA200_15              // Hull MA(200) on 15-minute
ForexField.HULLMA200_30              // Hull MA(200) on 30-minute
ForexField.HULLMA200_60              // Hull MA(200) on 1-hour
ForexField.HULLMA200_120             // Hull MA(200) on 2-hour
ForexField.HULLMA200_240             // Hull MA(200) on 4-hour
ForexField.HULLMA200_1W              // Hull MA(200) on weekly
ForexField.HULLMA200_1M              // Hull MA(200) on monthly
```

---

### 4. Oscillators (480 Fields)

Momentum oscillators and overbought/oversold indicators with historical data support.

#### Relative Strength Index (RSI)

```typescript
// Standard RSI periods
ForexField.RSI                       // RSI(14) - default
ForexField.RSI7                      // RSI(7)
ForexField.RSI2                      // RSI(2)
ForexField.RSI3                      // RSI(3)
ForexField.RSI30                     // RSI(30)

// Historical RSI values (supports .withHistory())
ForexField.RSI30_1                   // RSI(30)[1] - previous bar
ForexField.RSI30_1_1                 // RSI(30)[1] on 1-minute
ForexField.RSI30_1_5                 // RSI(30)[1] on 5-minute
ForexField.RSI30_1_15                // RSI(30)[1] on 15-minute
ForexField.RSI30_1_30                // RSI(30)[1] on 30-minute
ForexField.RSI30_1_60                // RSI(30)[1] on 1-hour
ForexField.RSI30_1_120               // RSI(30)[1] on 2-hour
ForexField.RSI30_1_240               // RSI(30)[1] on 4-hour
ForexField.RSI30_1_1W                // RSI(30)[1] on weekly
ForexField.RSI30_1_1M                // RSI(30)[1] on monthly
```

**All RSI fields support:**
- Time intervals (1, 5, 15, 30, 60, 120, 240 minutes, 1W, 1M)
- Historical data (previous bar values)

#### Stochastic Oscillator

```typescript
ForexField.STOCH_K                   // Stochastic %K
ForexField.STOCH_D                   // Stochastic %D
ForexField.STOCH_K_1                 // Stochastic %K[1] previous bar
ForexField.STOCH_D_1                 // Stochastic %D[1] previous bar

// With intervals
ForexField.STOCH_K_1_1               // %K[1] on 1-minute
ForexField.STOCH_K_1_5               // %K[1] on 5-minute
ForexField.STOCH_K_1_15              // %K[1] on 15-minute
ForexField.STOCH_K_1_30              // %K[1] on 30-minute
ForexField.STOCH_K_1_60              // %K[1] on 1-hour
ForexField.STOCH_K_1_120             // %K[1] on 2-hour
ForexField.STOCH_K_1_240             // %K[1] on 4-hour
ForexField.STOCH_K_1_1W              // %K[1] on weekly
ForexField.STOCH_K_1_1M              // %K[1] on monthly
```

#### MACD (Moving Average Convergence Divergence)

```typescript
ForexField.MACD_MACD                 // MACD line
ForexField.MACD_SIGNAL               // MACD signal line
ForexField.MACD_MACD_1               // MACD[1] previous bar
ForexField.MACD_SIGNAL_1             // Signal[1] previous bar

// With intervals
ForexField.MACD_MACD_1_1             // MACD[1] on 1-minute
ForexField.MACD_MACD_1_5             // MACD[1] on 5-minute
ForexField.MACD_MACD_1_15            // MACD[1] on 15-minute
ForexField.MACD_MACD_1_30            // MACD[1] on 30-minute
ForexField.MACD_MACD_1_60            // MACD[1] on 1-hour
ForexField.MACD_MACD_1_120           // MACD[1] on 2-hour
ForexField.MACD_MACD_1_240           // MACD[1] on 4-hour
ForexField.MACD_MACD_1_1W            // MACD[1] on weekly
ForexField.MACD_MACD_1_1M            // MACD[1] on monthly
```

#### Commodity Channel Index (CCI)

```typescript
ForexField.CCI20                     // CCI(20)
ForexField.CCI20_1                   // CCI(20)[1] previous bar

// With intervals
ForexField.CCI20_1_1                 // CCI(20)[1] on 1-minute
ForexField.CCI20_1_5                 // CCI(20)[1] on 5-minute
ForexField.CCI20_1_15                // CCI(20)[1] on 15-minute
ForexField.CCI20_1_30                // CCI(20)[1] on 30-minute
ForexField.CCI20_1_60                // CCI(20)[1] on 1-hour
ForexField.CCI20_1_120               // CCI(20)[1] on 2-hour
ForexField.CCI20_1_240               // CCI(20)[1] on 4-hour
ForexField.CCI20_1_1W                // CCI(20)[1] on weekly
ForexField.CCI20_1_1M                // CCI(20)[1] on monthly
```

---

### 5. Volatility (113 Fields)

Volatility and price range indicators.

#### Average True Range (ATR)

```typescript
ForexField.AVERAGE_TRUE_RANGE_14     // ATR(14)
ForexField.ATRP                      // ATR Percentage

// With intervals
ForexField.ATR_1                     // ATR on 1-minute
ForexField.ATR_5                     // ATR on 5-minute
ForexField.ATR_15                    // ATR on 15-minute
ForexField.ATR_30                    // ATR on 30-minute
ForexField.ATR_60                    // ATR on 1-hour
ForexField.ATR_120                   // ATR on 2-hour
ForexField.ATR_240                   // ATR on 4-hour
ForexField.ATR_1W                    // ATR on weekly
ForexField.ATR_1M                    // ATR on monthly

// ATRP with intervals
ForexField.ATRP_1                    // ATRP on 1-minute
ForexField.ATRP_5                    // ATRP on 5-minute
ForexField.ATRP_15                   // ATRP on 15-minute
ForexField.ATRP_30                   // ATRP on 30-minute
ForexField.ATRP_60                   // ATRP on 1-hour
ForexField.ATRP_120                  // ATRP on 2-hour
ForexField.ATRP_240                  // ATRP on 4-hour
ForexField.ATRP_1W                   // ATRP on weekly
ForexField.ATRP_1M                   // ATRP on monthly
```

#### Bollinger Bands

```typescript
ForexField.BB_LOWER                  // Bollinger Lower Band
ForexField.BB_UPPER                  // Bollinger Upper Band

// With intervals
ForexField.BB_LOWER_1                // BB Lower on 1-minute
ForexField.BB_LOWER_5                // BB Lower on 5-minute
ForexField.BB_LOWER_15               // BB Lower on 15-minute
ForexField.BB_LOWER_30               // BB Lower on 30-minute
ForexField.BB_LOWER_60               // BB Lower on 1-hour
ForexField.BB_LOWER_120              // BB Lower on 2-hour
ForexField.BB_LOWER_240              // BB Lower on 4-hour
ForexField.BB_LOWER_1W               // BB Lower on weekly
ForexField.BB_LOWER_1M               // BB Lower on monthly
```

#### Volatility Index

```typescript
ForexField.VOLATILITY_D              // Daily volatility
ForexField.VOLATILITY_M              // Monthly volatility
ForexField.VOLATILITY_W              // Weekly volatility
```

---

### 6. Momentum (290 Fields)

Momentum indicators and rate of change measurements.

#### Momentum Indicator

```typescript
ForexField.MOM                       // Momentum
ForexField.MOM_1                     // Momentum on 1-minute
ForexField.MOM_5                     // Momentum on 5-minute
ForexField.MOM_15                    // Momentum on 15-minute
ForexField.MOM_30                    // Momentum on 30-minute
ForexField.MOM_60                    // Momentum on 1-hour
ForexField.MOM_120                   // Momentum on 2-hour
ForexField.MOM_240                   // Momentum on 4-hour
ForexField.MOM_1W                    // Momentum on weekly
ForexField.MOM_1M                    // Momentum on monthly
```

#### Average Directional Index (ADX)

```typescript
ForexField.ADX                       // ADX indicator
ForexField.ADX_PLUS_DI               // +DI line
ForexField.ADX_MINUS_DI              // -DI line

// With intervals
ForexField.ADX_1                     // ADX on 1-minute
ForexField.ADX_5                     // ADX on 5-minute
ForexField.ADX_15                    // ADX on 15-minute
ForexField.ADX_30                    // ADX on 30-minute
ForexField.ADX_60                    // ADX on 1-hour
ForexField.ADX_120                   // ADX on 2-hour
ForexField.ADX_240                   // ADX on 4-hour
ForexField.ADX_1W                    // ADX on weekly
ForexField.ADX_1M                    // ADX on monthly
```

#### Ultimate Oscillator

```typescript
ForexField.UO                        // Ultimate Oscillator
ForexField.UO_1                      // UO on 1-minute
ForexField.UO_5                      // UO on 5-minute
ForexField.UO_15                     // UO on 15-minute
ForexField.UO_30                     // UO on 30-minute
ForexField.UO_60                     // UO on 1-hour
ForexField.UO_120                    // UO on 2-hour
ForexField.UO_240                    // UO on 4-hour
ForexField.UO_1W                     // UO on weekly
ForexField.UO_1M                     // UO on monthly
```

---

### 7. Candlestick Patterns (151 Fields)

Boolean indicators for Japanese candlestick pattern recognition.

#### Doji Patterns

```typescript
ForexField.CANDLE_DOJI               // Standard Doji
ForexField.CANDLE_DOJI_DRAGONFLY     // Dragonfly Doji (bullish)
ForexField.CANDLE_DOJI_GRAVESTONE    // Gravestone Doji (bearish)

// With intervals
ForexField.CANDLE_DOJI_DRAGONFLY_1   // Dragonfly on 1-minute
ForexField.CANDLE_DOJI_DRAGONFLY_5   // Dragonfly on 5-minute
ForexField.CANDLE_DOJI_DRAGONFLY_15  // Dragonfly on 15-minute
ForexField.CANDLE_DOJI_DRAGONFLY_30  // Dragonfly on 30-minute
ForexField.CANDLE_DOJI_DRAGONFLY_60  // Dragonfly on 1-hour
ForexField.CANDLE_DOJI_DRAGONFLY_120 // Dragonfly on 2-hour
ForexField.CANDLE_DOJI_DRAGONFLY_240 // Dragonfly on 4-hour
ForexField.CANDLE_DOJI_DRAGONFLY_1W  // Dragonfly on weekly
ForexField.CANDLE_DOJI_DRAGONFLY_1M  // Dragonfly on monthly
```

#### Engulfing Patterns

```typescript
ForexField.CANDLE_ENGULFING_BEARISH  // Bearish Engulfing
ForexField.CANDLE_ENGULFING_BULLISH  // Bullish Engulfing

// With intervals
ForexField.CANDLE_ENGULFING_BULLISH_1   // Bullish Engulfing on 1-minute
ForexField.CANDLE_ENGULFING_BULLISH_5   // Bullish Engulfing on 5-minute
ForexField.CANDLE_ENGULFING_BULLISH_15  // Bullish Engulfing on 15-minute
ForexField.CANDLE_ENGULFING_BULLISH_30  // Bullish Engulfing on 30-minute
ForexField.CANDLE_ENGULFING_BULLISH_60  // Bullish Engulfing on 1-hour
ForexField.CANDLE_ENGULFING_BULLISH_120 // Bullish Engulfing on 2-hour
ForexField.CANDLE_ENGULFING_BULLISH_240 // Bullish Engulfing on 4-hour
ForexField.CANDLE_ENGULFING_BULLISH_1W  // Bullish Engulfing on weekly
ForexField.CANDLE_ENGULFING_BULLISH_1M  // Bullish Engulfing on monthly
```

#### Hammer Patterns

```typescript
ForexField.CANDLE_HAMMER             // Hammer (bullish)
ForexField.CANDLE_INVERTED_HAMMER    // Inverted Hammer (bullish)
ForexField.CANDLE_SHOOTING_STAR      // Shooting Star (bearish)
ForexField.CANDLE_HANGING_MAN        // Hanging Man (bearish)
```

**All candlestick patterns:**
- Return boolean values (true/false)
- Support time intervals (1, 5, 15, 30, 60, 120, 240 minutes, 1W, 1M)
- Can be filtered using `.eq(true)` or `.eq(false)`

---

### 8. Pivot Points (310 Fields)

Support and resistance levels using Camarilla pivot point calculations.

#### Camarilla Pivot Points

```typescript
// Pivot levels
ForexField.PIVOT_CAMARILLA_P         // Pivot point
ForexField.PIVOT_CAMARILLA_R1        // Resistance 1
ForexField.PIVOT_CAMARILLA_R2        // Resistance 2
ForexField.PIVOT_CAMARILLA_R3        // Resistance 3
ForexField.PIVOT_CAMARILLA_S1        // Support 1
ForexField.PIVOT_CAMARILLA_S2        // Support 2
ForexField.PIVOT_CAMARILLA_S3        // Support 3

// With intervals (example for R1)
ForexField.PIVOT_M_CAMARILLA_R1_1    // R1 on 1-minute
ForexField.PIVOT_M_CAMARILLA_R1_5    // R1 on 5-minute
ForexField.PIVOT_M_CAMARILLA_R1_15   // R1 on 15-minute
ForexField.PIVOT_M_CAMARILLA_R1_30   // R1 on 30-minute
ForexField.PIVOT_M_CAMARILLA_R1_60   // R1 on 1-hour
ForexField.PIVOT_M_CAMARILLA_R1_120  // R1 on 2-hour
ForexField.PIVOT_M_CAMARILLA_R1_240  // R1 on 4-hour
ForexField.PIVOT_M_CAMARILLA_R1_1W   // R1 on weekly
ForexField.PIVOT_M_CAMARILLA_R1_1M   // R1 on monthly
```

**All pivot point fields:**
- Float values representing price levels
- Support all time intervals
- Useful for support/resistance trading strategies

---

### 9. Volume Indicators (146 Fields)

Volume-based technical indicators and analysis.

#### On-Balance Volume (OBV)

```typescript
ForexField.MONEY_FLOW                // Money Flow (OBV)
ForexField.MONEY_FLOW_1              // OBV on 1-minute
ForexField.MONEY_FLOW_5              // OBV on 5-minute
ForexField.MONEY_FLOW_15             // OBV on 15-minute
ForexField.MONEY_FLOW_30             // OBV on 30-minute
ForexField.MONEY_FLOW_60             // OBV on 1-hour
ForexField.MONEY_FLOW_120            // OBV on 2-hour
ForexField.MONEY_FLOW_240            // OBV on 4-hour
ForexField.MONEY_FLOW_1W             // OBV on weekly
ForexField.MONEY_FLOW_1M             // OBV on monthly
```

#### Volume-Weighted Average Price (VWAP)

```typescript
ForexField.VWAP                      // VWAP
ForexField.VWAP_1                    // VWAP on 1-minute
ForexField.VWAP_5                    // VWAP on 5-minute
ForexField.VWAP_15                   // VWAP on 15-minute
ForexField.VWAP_30                   // VWAP on 30-minute
ForexField.VWAP_60                   // VWAP on 1-hour
ForexField.VWAP_120                  // VWAP on 2-hour
ForexField.VWAP_240                  // VWAP on 4-hour
ForexField.VWAP_1W                   // VWAP on weekly
ForexField.VWAP_1M                   // VWAP on monthly
```

---

### 10. Market Data (20 Fields)

Real-time market status and trading information.

```typescript
ForexField.IS_PRIMARY                // Is primary pair
ForexField.PREMARKET_CLOSE           // Pre-market close price
ForexField.PREMARKET_HIGH            // Pre-market high
ForexField.PREMARKET_LOW             // Pre-market low
ForexField.PREMARKET_OPEN            // Pre-market open
ForexField.PREMARKET_VOLUME          // Pre-market volume
ForexField.PREMARKET_CHANGE          // Pre-market change
ForexField.PREMARKET_CHANGE_PERCENT  // Pre-market change %
ForexField.PREMARKET_TIME            // Pre-market timestamp
ForexField.POSTMARKET_CLOSE          // Post-market close
ForexField.POSTMARKET_HIGH           // Post-market high
ForexField.POSTMARKET_LOW            // Post-market low
ForexField.POSTMARKET_OPEN           // Post-market open
ForexField.POSTMARKET_VOLUME         // Post-market volume
ForexField.POSTMARKET_CHANGE         // Post-market change
ForexField.POSTMARKET_CHANGE_PERCENT // Post-market change %
ForexField.POSTMARKET_TIME           // Post-market timestamp
```

---

### 11. Other (317 Fields)

Recommendations, ratings, and specialized indicators.

#### Technical Recommendations

```typescript
ForexField.RECOMMENDATION_SUMMARY    // Overall recommendation
ForexField.TECHNICAL_RATING          // Technical analysis rating
ForexField.RECOMMEND_ALL             // All timeframes rating
ForexField.RECOMMEND_MA              // Moving Average rating
ForexField.RECOMMEND_OTHER           // Other indicators rating
```

#### Fund Flows

```typescript
ForexField.FUND_FLOWS_1M             // 1-month fund flows
ForexField.FUND_FLOWS_3M             // 3-month fund flows
ForexField.FUND_FLOWS_1Y             // 1-year fund flows
ForexField.FUND_FLOWS_3Y             // 3-year fund flows
ForexField.FUND_FLOWS_5Y             // 5-year fund flows
ForexField.FUND_FLOWS_YTD            // YTD fund flows
```

---

## Time Intervals

### Overview

**2,662 out of 2,965 fields (89.8%)** support time interval notation, allowing you to query indicators on different timeframes.

### Supported Intervals

```typescript
'1'    // 1 minute
'5'    // 5 minutes
'15'   // 15 minutes
'30'   // 30 minutes
'60'   // 1 hour (60 minutes)
'120'  // 2 hours (120 minutes)
'240'  // 4 hours (240 minutes)
'1W'   // 1 week
'1M'   // 1 month
```

### Using Intervals

Import and use the `FieldWithInterval` class:

```typescript
import { ForexScreener, ForexField, FieldWithInterval } from 'tradingview-screener';

// Create RSI on 1-hour chart
const rsi1h = new FieldWithInterval(ForexField.RSI, '60');

// Create EMA(20) on 4-hour chart
const ema20_4h = new FieldWithInterval(
  ForexField.EXPONENTIAL_MOVING_AVERAGE_20,
  '240'
);

// Use in query
const screener = new ForexScreener();
screener
  .where(rsi1h.lt(30))           // Oversold on 1h
  .where(ema20_4h.gt(ForexField.PRICE))  // Price below EMA on 4h
  .select(ForexField.NAME, rsi1h, ema20_4h);
```

### Pre-defined Interval Fields

Many fields have pre-defined interval variants:

```typescript
// Instead of: new FieldWithInterval(ForexField.RSI, '60')
// Use: ForexField.RSI_60

ForexField.RSI_1                     // RSI on 1-minute
ForexField.RSI_5                     // RSI on 5-minute
ForexField.RSI_15                    // RSI on 15-minute
ForexField.RSI_30                    // RSI on 30-minute
ForexField.RSI_60                    // RSI on 1-hour
ForexField.RSI_120                   // RSI on 2-hour
ForexField.RSI_240                   // RSI on 4-hour
ForexField.RSI_1W                    // RSI on weekly
ForexField.RSI_1M                    // RSI on monthly
```

### Interval Notation in Field Names

Fields with intervals append `|{interval}` to the API field name:

```typescript
ForexField.SMA20             // fieldName: "SMA20"
ForexField.SMA20_60          // fieldName: "SMA20|60"
ForexField.EMA9_1W           // fieldName: "EMA9|1W"
ForexField.RSI_240           // fieldName: "RSI|240"
```

---

## Historical Data

### Overview

**829 out of 2,965 fields (28%)** support historical data access using `.withHistory()`, allowing you to compare current values with previous bar values.

### Supported Fields

Historical data is primarily available for:
- **Oscillators**: RSI, Stochastic, MACD, CCI, etc.
- **Some Moving Averages**: Selected MA variants
- **Price/Volume**: Certain OHLCV fields

### Using Historical Data

Import and use the `FieldWithHistory` class:

```typescript
import { ForexScreener, ForexField, FieldWithHistory } from 'tradingview-screener';

// Create RSI from 1 bar ago
const rsiPrevious = new FieldWithHistory(ForexField.RSI, 1);

// Create MACD from 2 bars ago
const macdPrevious = new FieldWithHistory(ForexField.MACD_MACD, 2);

// Use in query
const screener = new ForexScreener();
screener
  .where(ForexField.RSI.gt(50))      // Current RSI > 50
  .where(rsiPrevious.lt(50))         // Previous RSI < 50 (crossover)
  .select(ForexField.NAME, ForexField.RSI, rsiPrevious);
```

### Pre-defined Historical Fields

Many oscillator fields have pre-defined historical variants:

```typescript
// Instead of: new FieldWithHistory(ForexField.RSI30, 1)
// Use: ForexField.RSI30_1

ForexField.RSI30                     // Current RSI(30)
ForexField.RSI30_1                   // RSI(30) [1 bar ago]

ForexField.STOCH_K                   // Current Stochastic %K
ForexField.STOCH_K_1                 // Stochastic %K [1 bar ago]

ForexField.MACD_MACD                 // Current MACD
ForexField.MACD_MACD_1               // MACD [1 bar ago]
```

### Historical Notation in Field Names

Historical fields append `[{index}]` to the API field name:

```typescript
ForexField.RSI                       // fieldName: "RSI"
ForexField.RSI30_1                   // fieldName: "RSI30[1]"
ForexField.STOCH_K_1                 // fieldName: "Stoch.K[1]"
ForexField.MACD_MACD_1               // fieldName: "MACD.macd[1]"
```

### Combining Intervals and History

Some fields support both intervals AND historical data:

```typescript
// RSI(30) from 1 bar ago on 1-hour chart
ForexField.RSI30_1_60                // fieldName: "RSI30[1]|60"

// Stochastic %K from 1 bar ago on 4-hour chart
ForexField.STOCH_K_1_240             // fieldName: "Stoch.K[1]|240"

// MACD from 1 bar ago on daily chart
ForexField.MACD_MACD_1_1W            // fieldName: "MACD.macd[1]|1W"
```

---

## Usage Examples

### Example 1: Basic Forex Query

Find major forex pairs with positive daily change:

```typescript
import { ForexScreener, ForexField } from 'tradingview-screener';

const screener = new ForexScreener();

screener
  .where(ForexField.CHANGE_PERCENT.gt(0))
  .select(
    ForexField.NAME,
    ForexField.PRICE,
    ForexField.CHANGE_PERCENT,
    ForexField.VOLUME
  )
  .sortBy(ForexField.CHANGE_PERCENT, false);

const results = await screener.get();
console.table(results.data);
```

### Example 2: Multi-Timeframe Moving Average

Find pairs where price is above both daily and weekly EMA(20):

```typescript
import { ForexScreener, ForexField, FieldWithInterval } from 'tradingview-screener';

const ema20Daily = ForexField.EXPONENTIAL_MOVING_AVERAGE_20;
const ema20Weekly = new FieldWithInterval(
  ForexField.EXPONENTIAL_MOVING_AVERAGE_20,
  '1W'
);

const screener = new ForexScreener();

screener
  .where(ForexField.PRICE.gt(ema20Daily))   // Price > Daily EMA(20)
  .where(ForexField.PRICE.gt(ema20Weekly))  // Price > Weekly EMA(20)
  .select(
    ForexField.NAME,
    ForexField.PRICE,
    ema20Daily,
    ema20Weekly
  );

const results = await screener.get();
```

### Example 3: RSI Oversold with Momentum

Find oversold pairs with positive momentum change:

```typescript
import { ForexScreener, ForexField, FieldWithHistory } from 'tradingview-screener';

const rsiPrevious = new FieldWithHistory(ForexField.RSI, 1);

const screener = new ForexScreener();

screener
  .where(ForexField.RSI.lt(30))              // Oversold
  .where(ForexField.RSI.gt(rsiPrevious))     // RSI increasing
  .where(ForexField.CHANGE_PERCENT.gt(0))    // Positive change
  .select(
    ForexField.NAME,
    ForexField.PRICE,
    ForexField.RSI,
    rsiPrevious,
    ForexField.CHANGE_PERCENT
  )
  .sortBy(ForexField.RSI);

const results = await screener.get();
```

### Example 4: Bollinger Bands Breakout

Find pairs breaking above upper Bollinger Band:

```typescript
import { ForexScreener, ForexField } from 'tradingview-screener';

const screener = new ForexScreener();

screener
  .where(ForexField.PRICE.gt(ForexField.BB_UPPER))
  .where(ForexField.VOLUME.gt(1000000))
  .select(
    ForexField.NAME,
    ForexField.PRICE,
    ForexField.BB_UPPER,
    ForexField.BB_LOWER,
    ForexField.VOLUME
  );

const results = await screener.get();
```

### Example 5: Candlestick Pattern Detection

Find pairs with bullish engulfing pattern on 4-hour chart:

```typescript
import { ForexScreener, ForexField } from 'tradingview-screener';

const screener = new ForexScreener();

screener
  .where(ForexField.CANDLE_ENGULFING_BULLISH_240.eq(true))
  .where(ForexField.RSI.lt(50))              // RSI not overbought
  .select(
    ForexField.NAME,
    ForexField.PRICE,
    ForexField.CHANGE_PERCENT,
    ForexField.RSI,
    ForexField.CANDLE_ENGULFING_BULLISH_240
  );

const results = await screener.get();
```

### Example 6: MACD Crossover

Find pairs where MACD crosses above signal line:

```typescript
import { ForexScreener, ForexField, FieldWithHistory } from 'tradingview-screener';

const macdPrevious = new FieldWithHistory(ForexField.MACD_MACD, 1);
const signalPrevious = new FieldWithHistory(ForexField.MACD_SIGNAL, 1);

const screener = new ForexScreener();

screener
  // Current: MACD > Signal
  .where(ForexField.MACD_MACD.gt(ForexField.MACD_SIGNAL))
  // Previous: MACD < Signal (crossover occurred)
  .where(macdPrevious.lt(signalPrevious))
  .select(
    ForexField.NAME,
    ForexField.PRICE,
    ForexField.MACD_MACD,
    ForexField.MACD_SIGNAL
  );

const results = await screener.get();
```

### Example 7: Volatility Filter

Find pairs with high volatility using ATR:

```typescript
import { ForexScreener, ForexField } from 'tradingview-screener';

const screener = new ForexScreener();

screener
  .where(ForexField.ATRP.gt(2.0))            // ATR% > 2%
  .where(ForexField.VOLUME.gt(500000))       // Adequate liquidity
  .select(
    ForexField.NAME,
    ForexField.PRICE,
    ForexField.ATRP,
    ForexField.AVERAGE_TRUE_RANGE_14,
    ForexField.VOLUME
  )
  .sortBy(ForexField.ATRP, false);

const results = await screener.get();
```

### Example 8: Support/Resistance Trading

Find pairs near Camarilla pivot support levels:

```typescript
import { ForexScreener, ForexField } from 'tradingview-screener';

const screener = new ForexScreener();

screener
  // Price within 0.1% of S1 support
  .where(ForexField.PRICE.between(
    ForexField.PIVOT_CAMARILLA_S1 * 0.999,
    ForexField.PIVOT_CAMARILLA_S1 * 1.001
  ))
  .where(ForexField.RSI.lt(40))              // Oversold condition
  .select(
    ForexField.NAME,
    ForexField.PRICE,
    ForexField.PIVOT_CAMARILLA_S1,
    ForexField.PIVOT_CAMARILLA_R1,
    ForexField.RSI
  );

const results = await screener.get();
```

---

## Format Distribution

Understanding field data types for proper filtering and display.

| Format                  | Count | Percentage | Description                           |
|-------------------------|-------|------------|---------------------------------------|
| `float`                 | 2,283 | 77.0%      | Floating-point numbers                |
| `bool`                  | 270   | 9.1%       | Boolean true/false values             |
| `percent`               | 140   | 4.7%       | Percentage values                     |
| `rating`                | 98    | 3.3%       | Rating values (e.g., Strong Buy)      |
| `number_group`          | 61    | 2.1%       | Grouped numeric values                |
| `date`                  | 53    | 1.8%       | Date/timestamp values                 |
| `computed_recommendation` | 28  | 0.9%       | Computed recommendation values        |
| `text`                  | 19    | 0.6%       | Text strings                          |
| `round`                 | 7     | 0.2%       | Rounded numbers                       |
| `recommendation`        | 3     | 0.1%       | Recommendation values                 |
| `missing`               | 3     | 0.1%       | Missing/null handling                 |

### Using Formats in Filters

```typescript
// Float fields - use numeric comparisons
ForexField.PRICE.gt(1.5)
ForexField.RSI.between(30, 70)

// Boolean fields - use equality
ForexField.CANDLE_DOJI.eq(true)
ForexField.IS_PRIMARY.eq(false)

// Percent fields - use decimal values
ForexField.CHANGE_PERCENT.gt(0.5)      // > 0.5%
ForexField.ATRP.between(1.0, 3.0)      // 1% to 3%

// Text fields - use match/regex
ForexField.NAME.match('EUR')
ForexField.DESCRIPTION.match('USD')

// Date fields - use date comparisons
ForexField.ALL_TIME_HIGH_2.gt('2024-01-01')
```

---

## Field Capabilities Summary

| Category                | Fields | Interval Support | Historical Support |
|------------------------|--------|------------------|-------------------|
| Basic Information      | 34     | 6 fields         | 0 fields          |
| Price & Volume         | 280    | 256 fields       | 15 fields         |
| Moving Averages        | 824    | 824 fields       | 0 fields          |
| Oscillators            | 480    | 480 fields       | 480 fields        |
| Volatility             | 113    | 113 fields       | 0 fields          |
| Momentum               | 290    | 290 fields       | 98 fields         |
| Candlestick Patterns   | 151    | 151 fields       | 0 fields          |
| Pivot Points           | 310    | 310 fields       | 0 fields          |
| Volume Indicators      | 146    | 146 fields       | 146 fields        |
| Market Data            | 20     | 6 fields         | 0 fields          |
| Other                  | 317    | 80 fields        | 90 fields         |
| **Total**              | **2,965** | **2,662 (89.8%)** | **829 (28%)** |

---

## Best Practices

### 1. Check Field Capabilities

Before using intervals or historical data:

```typescript
// Check interval support
if (ForexField.RSI.supportsInterval) {
  const rsi1h = new FieldWithInterval(ForexField.RSI, '60');
}

// Check historical support
if (ForexField.RSI.supportsHistory) {
  const rsiPrev = new FieldWithHistory(ForexField.RSI, 1);
}
```

### 2. Use Pre-defined Variants

When available, use pre-defined interval/historical field variants:

```typescript
// Good: Use pre-defined
ForexField.RSI_60

// Also works: Create manually
new FieldWithInterval(ForexField.RSI, '60')
```

### 3. Combine Multiple Timeframes

Multi-timeframe analysis provides better signals:

```typescript
// Trend on daily, entry on 1-hour
const screener = new ForexScreener();
screener
  .where(ForexField.PRICE.gt(ForexField.EMA9_1W))    // Weekly uptrend
  .where(ForexField.RSI_60.lt(30))                   // Hourly oversold
  .where(ForexField.RSI_60.gt(ForexField.RSI30_1_60)); // RSI turning up
```

### 4. Filter by Data Format

Use appropriate operators for each format type:

```typescript
// Float: numeric operations
ForexField.PRICE.gt(1.0)

// Boolean: equality only
ForexField.CANDLE_DOJI.eq(true)

// Percent: use decimal notation
ForexField.CHANGE_PERCENT.gt(0.5)  // 0.5%

// Text: use match/regex
ForexField.NAME.match('EUR')
```

### 5. Limit Result Sets

Always limit results for better performance:

```typescript
screener
  .setRange(0, 50)           // First 50 results
  .sortBy(ForexField.VOLUME, false);  // Highest volume first
```

---

## Related Documentation

- [Field Modifiers](modifiers.md) - Intervals and historical data in detail
- [Forex Screener](../screeners/forex.md) - Forex-specific screening guide
- [Filter Operations](../filtering/operations.md) - All comparison operators
- [Field Search](search.md) - Finding fields programmatically
- [Basic Usage](../basic-usage.md) - Getting started guide

---

## Source

This field set provides complete parity with the Python `tvscreener` library. All 2,965 fields are sourced from TradingView's official API.

**Source Repository**: [github.com/deepentropy/tvscreener](https://github.com/deepentropy/tvscreener)
