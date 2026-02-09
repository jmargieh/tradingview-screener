/**
 * Symbol types for filtering
 */
export const SymbolType = {
  STOCK: 'stock',
  FUND: 'fund',
  DR: 'dr',
  BOND: 'bond',
  WARRANT: 'warrant',
  STRUCTURED: 'structured',
  RIGHT: 'right',
  CRYPTO: 'crypto',
  INDEX: 'index',
  ECONOMIC: 'economic',
  FOREX: 'forex',
  FUTURES: 'futures',
  SPREAD: 'spread',
  SWAP: 'swap',
} as const;

export type SymbolTypeValue = typeof SymbolType[keyof typeof SymbolType];
