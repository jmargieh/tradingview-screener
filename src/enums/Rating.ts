/**
 * Rating values for analyst ratings
 */
export const Rating = {
  STRONG_BUY: 'Strong Buy',
  BUY: 'Buy',
  NEUTRAL: 'Neutral',
  SELL: 'Sell',
  STRONG_SELL: 'Strong Sell',
} as const;

export type RatingValue = typeof Rating[keyof typeof Rating];
