import type { FilterDict } from '../types/index.js';

/**
 * Internal representation of a filter condition
 */
export class Filter {
  constructor(
    public readonly left: string,
    public readonly operation: string,
    public readonly right?: any
  ) {}

  /**
   * Convert filter to dictionary format for API payload
   */
  toDict(): FilterDict {
    const dict: FilterDict = {
      left: this.left,
      operation: this.operation,
    };

    if (this.right !== undefined) {
      dict.right = this.right;
    }

    return dict;
  }

  /**
   * Create filter from dictionary
   */
  static fromDict(dict: FilterDict): Filter {
    return new Filter(dict.left, dict.operation, dict.right);
  }
}
