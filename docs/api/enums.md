# Enums API Reference

All enumeration types in the library.

## FilterOperator

Filter operation types.

```typescript
enum FilterOperator {
  GREATER = 'greater',
  GREATER_OR_EQUAL = 'egreater',
  LESS = 'less',
  LESS_OR_EQUAL = 'eless',
  EQUAL = 'equal',
  NOT_EQUAL = 'nequal',
  IN_RANGE = 'in_range',
  NOT_IN_RANGE = 'not_in_range',
  IN = 'in',
  NOT_IN = 'not_in',
  MATCH = 'match',
  NOT_MATCH = 'nmatch',
  HAS = 'has',
  HAS_NONE_OF = 'has_none_of',
  ABOVE = 'above',
  BELOW = 'below',
  CROSSES = 'crosses',
  CROSSES_ABOVE = 'crosses_above',
  CROSSES_BELOW = 'crosses_below',
}
```

**Usage:**
```typescript
import { FilterOperator } from 'tradingview-screener';

const filter = new Filter('close', FilterOperator.GREATER, 100);
```

## Market

Market regions and exchanges.

```typescript
enum Market {
  AMERICA = 'america',
  UK = 'uk',
  AUSTRALIA = 'australia',
  CANADA = 'canada',
  GERMANY = 'germany',
  FRANCE = 'france',
  SPAIN = 'spain',
  ITALY = 'italy',
  POLAND = 'poland',
  TURKEY = 'turkey',
  BRAZIL = 'brazil',
  MEXICO = 'mexico',
  INDIA = 'india',
  JAPAN = 'japan',
  KOREA = 'korea',
  TAIWAN = 'taiwan',
  HONG_KONG = 'hongkong',
  SINGAPORE = 'singapore',
  SWEDEN = 'sweden',
  SWITZERLAND = 'switzerland',
  // ... 30+ more markets
}
```

**Usage:**
```typescript
import { Market } from 'tradingview-screener';

screener.setMarket(Market.AMERICA);
screener.setMarket(Market.UK);
```

## Country

ISO 3166-1 alpha-2 country codes.

```typescript
enum Country {
  US = 'US',
  GB = 'GB',
  DE = 'DE',
  FR = 'FR',
  JP = 'JP',
  CN = 'CN',
  IN = 'IN',
  CA = 'CA',
  AU = 'AU',
  BR = 'BR',
  // ... 150+ countries
}
```

**Usage:**
```typescript
import { Country } from 'tradingview-screener';

// Note: COUNTRY field is not available as a StockField constant
// Use raw field name in Filter if needed
const filter = new Filter('country', FilterOperator.IN, [Country.US, Country.GB]);
```

## Exchange

Stock exchanges worldwide.

```typescript
enum Exchange {
  NASDAQ = 'NASDAQ',
  NYSE = 'NYSE',
  AMEX = 'AMEX',
  LSE = 'LSE',
  TSE = 'TSE',
  HKEX = 'HKEX',
  SSE = 'SSE',
  SZSE = 'SZSE',
  NSE = 'NSE',
  BSE = 'BSE',
  ASX = 'ASX',
  TSX = 'TSX',
  XETRA = 'XETRA',
  EURONEXT = 'EURONEXT',
  // ... 100+ exchanges
}
```

**Usage:**
```typescript
import { Exchange } from 'tradingview-screener';

// Note: EXCHANGE field is not available as a StockField constant
// Use raw field name in Filter if needed
const filter = new Filter('exchange', FilterOperator.IN, [Exchange.NYSE, Exchange.NASDAQ]);
```

## Sector

Industry sectors (GICS classification).

```typescript
enum Sector {
  TECHNOLOGY = 'Technology',
  HEALTHCARE = 'Healthcare',
  FINANCIAL = 'Financial',
  CONSUMER_CYCLICAL = 'Consumer Cyclical',
  CONSUMER_DEFENSIVE = 'Consumer Defensive',
  INDUSTRIALS = 'Industrials',
  BASIC_MATERIALS = 'Basic Materials',
  ENERGY = 'Energy',
  UTILITIES = 'Utilities',
  REAL_ESTATE = 'Real Estate',
  COMMUNICATION_SERVICES = 'Communication Services',
}
```

**Usage:**
```typescript
import { Sector } from 'tradingview-screener';

// Note: SECTOR field is not available as a StockField constant
// Use raw field name in Filter if needed
const filter = new Filter('sector', FilterOperator.EQUAL, Sector.TECHNOLOGY);
```

## Industry

Detailed industry classifications.

```typescript
enum Industry {
  // Technology
  SOFTWARE_APPLICATION = 'Software—Application',
  SOFTWARE_INFRASTRUCTURE = 'Software—Infrastructure',
  SEMICONDUCTORS = 'Semiconductors',
  HARDWARE = 'Computer Hardware',
  ELECTRONICS = 'Electronics & Computer Distribution',

  // Healthcare
  BIOTECHNOLOGY = 'Biotechnology',
  DRUG_MANUFACTURERS = 'Drug Manufacturers—General',
  MEDICAL_DEVICES = 'Medical Devices',
  HEALTHCARE_PLANS = 'Healthcare Plans',
  DIAGNOSTICS = 'Diagnostics & Research',

  // Financial
  BANKS_REGIONAL = 'Banks—Regional',
  BANKS_DIVERSIFIED = 'Banks—Diversified',
  INSURANCE = 'Insurance—Life',
  CAPITAL_MARKETS = 'Capital Markets',
  CREDIT_SERVICES = 'Credit Services',

  // ... 100+ industries
}
```

**Usage:**
```typescript
import { Industry } from 'tradingview-screener';

// Note: INDUSTRY field is not available as a StockField constant
// Use raw field name in Filter if needed
const filter = new Filter('industry', FilterOperator.EQUAL, Industry.SOFTWARE_APPLICATION);
```

## IndexSymbol

Major market indices.

```typescript
enum IndexSymbol {
  SP500 = 'SP:SPX',
  NASDAQ = 'NASDAQ:NDX',
  DOW_JONES = 'DJ:DJI',
  RUSSELL_2000 = 'RUSSELL:RUT',
  FTSE_100 = 'FTSE:UKX',
  DAX = 'XETR:DAX',
  NIKKEI_225 = 'TSE:NIK',
  HANG_SENG = 'HSI:HSI',
  // ... more indices
}
```

**Usage:**
```typescript
import { IndexSymbol } from 'tradingview-screener';

screener.setIndex(IndexSymbol.SP500);
screener.setIndex(IndexSymbol.NASDAQ);
```

## SymbolType

Asset/symbol types.

```typescript
enum SymbolType {
  STOCK = 'stock',
  DR = 'dr',                      // Depositary Receipt
  FUND = 'fund',
  BOND = 'bond',
  STRUCTURED = 'structured',
  WARRANT = 'warrant',
  RIGHT = 'right',
  CRYPTO = 'crypto',
  FOREX = 'forex',
  FUTURES = 'futures',
  CFD = 'cfd',
  INDEX = 'index',
  COMMODITY = 'commodity',
  ECONOMIC = 'economic',
}
```

**Usage:**
```typescript
import { SymbolType } from 'tradingview-screener';

// Include specific types
screener.setSymbolTypes([SymbolType.STOCK, SymbolType.DR]);

// Note: TYPE field is not available as a StockField constant
// Use raw field name in Filter if needed
const filter = new Filter('type', FilterOperator.EQUAL, SymbolType.STOCK);
```

## Rating

Analyst recommendation ratings.

```typescript
enum Rating {
  STRONG_BUY = 'Strong Buy',
  BUY = 'Buy',
  HOLD = 'Hold',
  SELL = 'Sell',
  STRONG_SELL = 'Strong Sell',
}
```

**Usage:**
```typescript
import { Rating } from 'tradingview-screener';

// Note: RECOMMENDATION_ANALYST field is not available as a StockField constant
// Use raw field name in Filter if needed
const filter = new Filter('Recommend.All', FilterOperator.EQUAL, Rating.STRONG_BUY);
```

## Complete Enum Reference

### Importing Enums

```typescript
import {
  FilterOperator,
  Market,
  Country,
  Exchange,
  Sector,
  Industry,
  IndexSymbol,
  SymbolType,
  Rating,
} from 'tradingview-screener';
```

### Using Enums

```typescript
// Market selection
screener.setMarket(Market.AMERICA);

// Valid StockField constants (21 available):
// NAME, DESCRIPTION, PRICE, CHANGE, CHANGE_PERCENT, VOLUME,
// MARKET_CAPITALIZATION, PRICE_TO_EARNINGS_RATIO_TTM, PRICE_EARNINGS_GROWTH_TTM,
// PRICE_SALES_CURRENT, PRICE_TO_BOOK_MRQ, ENTERPRISE_VALUE_EBITDA_TTM,
// DIVIDEND_YIELD_FWD, DIVIDENDS_YIELD_FY, DPS_COMMON_STOCK_PRIM_ISSUE_TTM,
// EARNINGS_PER_SHARE_DILUTED_TTM, REVENUE_TTM, REVENUE_TTM_YOY_GROWTH,
// NET_INCOME_TTM, RSI, ATR

// Example with valid StockField constants
screener.where(StockField.PRICE.greater(100));
screener.where(StockField.MARKET_CAPITALIZATION.greater(1000000000));
screener.where(StockField.PRICE_TO_EARNINGS_RATIO_TTM.inRange(10, 20));

// Index filtering
screener.setIndex(IndexSymbol.SP500);

// Symbol type
screener.setSymbolTypes([SymbolType.STOCK]);

// For other fields (country, exchange, sector, industry, rating),
// use raw field names with Filter class directly
```

## Enum Value Lists

### Get All Values

```typescript
// Get all sector values
const allSectors = Object.values(Sector);
console.log(allSectors);
// ['Technology', 'Healthcare', 'Financial', ...]

// Get all countries
const allCountries = Object.values(Country);
console.log(allCountries);
// ['US', 'GB', 'DE', ...]

// Get all exchanges
const allExchanges = Object.values(Exchange);
console.log(allExchanges);
// ['NASDAQ', 'NYSE', 'LSE', ...]
```

### Enum Keys

```typescript
// Get enum keys
const sectorKeys = Object.keys(Sector);
console.log(sectorKeys);
// ['TECHNOLOGY', 'HEALTHCARE', 'FINANCIAL', ...]

// Check if value exists
const hasTech = 'Technology' in Sector;
const hasFinance = Object.values(Sector).includes('Financial');
```

## Common Patterns

### Using Valid StockField Constants

```typescript
// Price filtering
screener.where(StockField.PRICE.greater(100));

// Market cap filtering
screener.where(StockField.MARKET_CAPITALIZATION.greater(1000000000));

// P/E ratio filtering
screener.where(StockField.PRICE_TO_EARNINGS_RATIO_TTM.inRange(10, 20));

// Volume filtering
screener.where(StockField.VOLUME.greater(1000000));

// RSI filtering
screener.where(StockField.RSI.less(30));
```

### Sector Whitelist (using raw field name)

```typescript
const preferredSectors = [
  Sector.TECHNOLOGY,
  Sector.HEALTHCARE,
  Sector.CONSUMER_CYCLICAL,
];

// Note: Use raw field name since SECTOR is not a valid StockField constant
const filter = new Filter('sector', FilterOperator.IN, preferredSectors);
screener.where(filter);
```

### Country Blacklist (using raw field name)

```typescript
const excludedCountries = [
  Country.CN,
  Country.RU,
  Country.BY,
];

// Note: Use raw field name since COUNTRY is not a valid StockField constant
const filter = new Filter('country', FilterOperator.NOT_IN, excludedCountries);
screener.where(filter);
```

### Major Exchanges (using raw field name)

```typescript
const majorExchanges = [
  Exchange.NYSE,
  Exchange.NASDAQ,
  Exchange.LSE,
  Exchange.TSE,
];

// Note: Use raw field name since EXCHANGE is not a valid StockField constant
const filter = new Filter('exchange', FilterOperator.IN, majorExchanges);
screener.where(filter);
```

### High-Tech Industries (using raw field name)

```typescript
const techIndustries = [
  Industry.SOFTWARE_APPLICATION,
  Industry.SOFTWARE_INFRASTRUCTURE,
  Industry.SEMICONDUCTORS,
  Industry.HARDWARE,
];

// Note: Use raw field name since INDUSTRY is not a valid StockField constant
const filter = new Filter('industry', FilterOperator.IN, techIndustries);
screener.where(filter);
```

## Type Safety

### Compile-Time Checking

```typescript
// ✓ Valid: Using valid StockField constants
screener.where(StockField.PRICE.greater(100));
screener.where(StockField.MARKET_CAPITALIZATION.greater(1000000000));

// ✗ Invalid: SECTOR is not a valid StockField constant
// screener.where(StockField.SECTOR.eq(Sector.TECHNOLOGY));  // Error!

// ✓ Valid: Use raw field name with Filter for non-StockField fields
const filter = new Filter('sector', FilterOperator.EQUAL, Sector.TECHNOLOGY);
screener.where(filter);

// ✓ Valid: Auto-completion available for valid StockFields
screener.where(StockField.  // IDE shows 21 valid constants
```

### Runtime Validation

```typescript
function validateSector(sector: string): sector is Sector {
  return Object.values(Sector).includes(sector as Sector);
}

// Usage
const userInput = 'Technology';
if (validateSector(userInput)) {
  // Use raw field name since SECTOR is not a valid StockField constant
  const filter = new Filter('sector', FilterOperator.EQUAL, userInput as Sector);
  screener.where(filter);
} else {
  console.error('Invalid sector');
}
```

## Best Practices

1. **Use Enums**: Prefer enums over string literals for type safety
2. **Import Explicitly**: Import only the enums you need
3. **Validate Input**: Check user input against enum values
4. **Leverage IDE**: Use auto-completion for enum values
5. **Group Related**: Use arrays of enum values for common patterns

## Next Steps

- [BaseField API](base-field.md) - Field class reference
- [Filter API](filter.md) - Filter system
- [BaseScreener](base-screener.md) - Screener class
