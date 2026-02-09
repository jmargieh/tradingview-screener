/**
 * Format utilities for numbers and values
 */

/**
 * Convert number to abbreviated format (K, M, B, T)
 */
export function millify(num: number | null | undefined): string {
  if (num === null || num === undefined || isNaN(num)) {
    return '—';
  }

  const absNum = Math.abs(num);
  const sign = num < 0 ? '-' : '';

  if (absNum >= 1e12) {
    return sign + (absNum / 1e12).toFixed(2) + 'T';
  }
  if (absNum >= 1e9) {
    return sign + (absNum / 1e9).toFixed(2) + 'B';
  }
  if (absNum >= 1e6) {
    return sign + (absNum / 1e6).toFixed(2) + 'M';
  }
  if (absNum >= 1e3) {
    return sign + (absNum / 1e3).toFixed(2) + 'K';
  }

  return sign + absNum.toFixed(2);
}

/**
 * Format number with thousand separators
 */
export function formatNumberGroup(num: number | null | undefined): string {
  if (num === null || num === undefined || isNaN(num)) {
    return '—';
  }

  return num.toLocaleString('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });
}

/**
 * Format number as currency
 */
export function formatCurrency(num: number | null | undefined): string {
  if (num === null || num === undefined || isNaN(num)) {
    return '—';
  }

  return num.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

/**
 * Format number as percentage
 */
export function formatPercent(num: number | null | undefined): string {
  if (num === null || num === undefined || isNaN(num)) {
    return '—';
  }

  return num.toFixed(2) + '%';
}

/**
 * Format float number
 */
export function formatFloat(num: number | null | undefined): string {
  if (num === null || num === undefined || isNaN(num)) {
    return '—';
  }

  return num.toFixed(2);
}

/**
 * Round number to integer
 */
export function formatRound(num: number | null | undefined): string {
  if (num === null || num === undefined || isNaN(num)) {
    return '—';
  }

  return Math.round(num).toString();
}

/**
 * Format boolean value
 */
export function formatBoolean(value: boolean | null | undefined): string {
  if (value === null || value === undefined) {
    return '—';
  }

  return value ? 'Yes' : 'No';
}

/**
 * Format date
 */
export function formatDate(timestamp: number | string | null | undefined): string {
  if (timestamp === null || timestamp === undefined) {
    return '—';
  }

  try {
    const date = new Date(timestamp);
    if (isNaN(date.getTime())) {
      return '—';
    }

    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  } catch {
    return '—';
  }
}

/**
 * Format value based on field format type
 */
export function formatValue(value: any, format: string): string {
  switch (format) {
    case 'currency':
      return formatCurrency(value);
    case 'percent':
      return formatPercent(value);
    case 'float':
      return formatFloat(value);
    case 'round':
      return formatRound(value);
    case 'number_group':
      return formatNumberGroup(value);
    case 'bool':
      return formatBoolean(value);
    case 'date':
      return formatDate(value);
    case 'text':
    case 'rating':
    case 'recommendation':
    case 'computed_recommendation':
      return value?.toString() || '—';
    default:
      return value?.toString() || '—';
  }
}
