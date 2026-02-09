/**
 * Terminal beautification utilities
 * Simple ANSI color codes for terminal output
 */

// ANSI color codes
const RESET = '\x1b[0m';
const RED = '\x1b[31m';
const GREEN = '\x1b[32m';
const YELLOW = '\x1b[33m';
const GRAY = '\x1b[90m';
const BOLD = '\x1b[1m';

/**
 * Check if colors should be enabled
 */
export function supportsColor(): boolean {
  if (typeof process === 'undefined') return false;
  if (process.env.NO_COLOR) return false;
  if (process.env.FORCE_COLOR) return true;

  return process.stdout && process.stdout.isTTY;
}

/**
 * Colorize text
 */
function colorize(text: string, color: string): string {
  if (!supportsColor()) return text;
  return `${color}${text}${RESET}`;
}

/**
 * Format positive/negative numbers with color
 */
export function colorizeNumber(value: number | null | undefined, formatted: string): string {
  if (value === null || value === undefined || isNaN(value)) {
    return formatted;
  }

  if (value > 0) {
    return colorize(formatted, GREEN);
  } else if (value < 0) {
    return colorize(formatted, RED);
  }

  return formatted;
}

/**
 * Format percent with color
 */
export function colorizePercent(value: number | null | undefined, formatted: string): string {
  return colorizeNumber(value, formatted);
}

/**
 * Format rating with color
 */
export function colorizeRating(rating: string | null | undefined): string {
  if (!rating) return '—';

  const lower = rating.toLowerCase();

  if (lower.includes('strong buy') || lower.includes('buy')) {
    return colorize(rating, GREEN);
  } else if (lower.includes('sell')) {
    return colorize(rating, RED);
  } else if (lower.includes('neutral') || lower.includes('hold')) {
    return colorize(rating, YELLOW);
  }

  return rating;
}

/**
 * Format recommendation with color
 */
export function colorizeRecommendation(value: number | null | undefined, formatted: string): string {
  if (value === null || value === undefined || isNaN(value)) {
    return formatted;
  }

  // TradingView uses scale: 1 (Strong Sell) to 5 (Strong Buy)
  if (value >= 4) {
    return colorize(formatted, GREEN); // Buy/Strong Buy
  } else if (value <= 2) {
    return colorize(formatted, RED); // Sell/Strong Sell
  } else {
    return colorize(formatted, YELLOW); // Neutral
  }
}

/**
 * Bold text
 */
export function bold(text: string): string {
  if (!supportsColor()) return text;
  return `${BOLD}${text}${RESET}`;
}

/**
 * Gray text (for less important info)
 */
export function gray(text: string): string {
  return colorize(text, GRAY);
}

/**
 * Format value with appropriate styling
 */
export function beautifyValue(value: any, format: string): string {
  if (value === null || value === undefined) {
    return gray('—');
  }

  switch (format) {
    case 'percent':
      return colorizePercent(value, `${value.toFixed(2)}%`);
    case 'rating':
      return colorizeRating(value);
    case 'recommendation':
    case 'computed_recommendation':
      return colorizeRecommendation(value, value.toString());
    default:
      return value.toString();
  }
}
