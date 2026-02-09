import { BaseField } from '../fields/BaseField.js';
import { Filter } from './Filter.js';

/**
 * Represents a field comparison condition that can be used in where() clauses
 */
export class FieldCondition {
  constructor(
    public readonly field: BaseField,
    public readonly operation: string,
    public readonly value: any
  ) {
    this.validateCondition();
  }

  /**
   * Validate that the condition is valid
   */
  private validateCondition(): void {
    // Check for field-to-field comparisons (not supported)
    if (this.value instanceof BaseField) {
      throw new Error(
        'Field-to-field comparisons are not supported. ' +
        'You can only compare a field to a constant value.'
      );
    }

    // Additional validation can be added here
  }

  /**
   * Convert to Filter object for internal use
   */
  toFilter(): Filter {
    return new Filter(this.field.fieldName, this.operation, this.value);
  }

  /**
   * String representation for debugging
   */
  toString(): string {
    return `${this.field.name} ${this.operation} ${JSON.stringify(this.value)}`;
  }
}
