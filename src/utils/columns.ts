import type { BaseField } from '../fields/BaseField.js';
import { FieldWithInterval } from '../fields/FieldWithInterval.js';
import { FieldWithHistory } from '../fields/FieldWithHistory.js';

/**
 * Build column list for API request from field list
 */
export function getColumnsToRequest(fields: BaseField[]): string[] {
  const columns = new Set<string>();

  for (const field of fields) {
    if (field instanceof FieldWithInterval) {
      // Add field with interval suffix
      columns.add(field.fieldName);
    } else if (field instanceof FieldWithHistory) {
      // Add field with history index
      columns.add(field.fieldName);
    } else {
      // Regular field
      columns.add(field.fieldName);

      // Add recommendation columns if needed
      if (field.format === 'recommendation') {
        // TradingView returns recommendation as multiple columns
        columns.add(field.fieldName);
      } else if (field.format === 'computed_recommendation') {
        // Computed recommendations need base columns
        columns.add(field.fieldName);
      }
    }
  }

  return Array.from(columns);
}

/**
 * Extract field names from column list (removing intervals/history)
 */
export function extractFieldNames(columns: string[]): string[] {
  return columns.map(col => {
    // Remove interval suffix: "close|1D" -> "close"
    if (col.includes('|')) {
      return col.split('|')[0];
    }
    // Remove history index: "close[1]" -> "close"
    if (col.includes('[')) {
      return col.split('[')[0];
    }
    return col;
  });
}

/**
 * Parse interval from field name
 */
export function parseInterval(fieldName: string): string | null {
  if (fieldName.includes('|')) {
    const parts = fieldName.split('|');
    const interval = parts[1];
    return interval !== undefined ? interval : null;
  }
  return null;
}

/**
 * Parse history index from field name
 */
export function parseHistoryIndex(fieldName: string): number | null {
  if (fieldName.includes('[') && fieldName.includes(']')) {
    const match = fieldName.match(/\[(\d+)\]/);
    if (match && match[1]) {
      return parseInt(match[1], 10);
    }
  }
  return null;
}
