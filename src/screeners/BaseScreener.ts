import { BaseField } from '../fields/BaseField.js';
import { FieldCondition } from '../filters/FieldCondition.js';
import { Filter } from '../filters/Filter.js';
import type {
  QueryPayload,
  ScreenerResult,
  StreamOptions,
  SortConfig,
  SymbolsConfig,
} from '../types/index.js';
import { post, sleep } from '../utils/http.js';
import { getColumnsToRequest } from '../utils/columns.js';
import { FieldWithInterval } from '../fields/FieldWithInterval.js';
import { FieldWithHistory } from '../fields/FieldWithHistory.js';

/**
 * Base screener class for querying TradingView screeners
 */
export abstract class BaseScreener<TField extends typeof BaseField = any> {
  protected filters: Filter[] = [];
  protected sort: SortConfig | null = null;
  protected range: [number, number] = [0, 150];
  protected options: Record<string, any> = { lang: 'en' };
  protected symbols: SymbolsConfig | null = null;
  protected specificFields: BaseField[] | null = null;

  /**
   * Subclasses should override this to enable field type validation
   */
  protected abstract fieldType: TField | null;

  /**
   * API endpoint URL
   */
  protected abstract url: string;

  /**
   * Default fields to retrieve if none specified
   */
  protected abstract defaultFields: BaseField[];

  /**
   * Validate that a field belongs to this screener's field type
   */
  protected validateFieldType(field: BaseField): void {
    if (!this.fieldType) return;

    // Handle FieldWithInterval and FieldWithHistory - check their underlying field
    if (field instanceof FieldWithInterval || field instanceof FieldWithHistory) {
      const underlyingField = field.baseField;
      // Check if underlying field's constructor matches the expected field type
      if (underlyingField.constructor.name !== this.fieldType.name) {
        throw new TypeError(
          `Invalid field type: expected ${this.fieldType.name}, ` +
          `got ${underlyingField.constructor.name}. ` +
          `Use ${this.fieldType.name} fields with ${this.constructor.name}.`
        );
      }
      return;
    }

    // Validate regular field type
    if (field.constructor.name !== this.fieldType.name) {
      throw new TypeError(
        `Invalid field type: expected ${this.fieldType.name}, ` +
        `got ${field.constructor.name}. ` +
        `Use ${this.fieldType.name} fields with ${this.constructor.name}.`
      );
    }
  }

  /**
   * Add a filter condition (fluent method)
   */
  where(condition: FieldCondition): this {
    this.validateFieldType(condition.field);
    this.filters.push(condition.toFilter());
    return this;
  }

  /**
   * Set fields to retrieve (fluent method)
   */
  select(...fields: BaseField[]): this {
    for (const field of fields) {
      this.validateFieldType(field);
    }
    this.specificFields = fields;
    return this;
  }

  /**
   * Select all available fields for this screener type
   */
  selectAll(): this {
    throw new Error('selectAll() must be implemented with specific field enum');
  }

  /**
   * Set sort field and order
   */
  sortBy(field: BaseField, ascending: boolean = true): this {
    this.validateFieldType(field);
    this.sort = {
      sortBy: field.fieldName,
      sortOrder: ascending ? 'asc' : 'desc',
    };
    return this;
  }

  /**
   * Set result range
   */
  setRange(from: number = 0, to: number = 150): this {
    this.range = [from, to];
    return this;
  }

  /**
   * Set index constituents filter
   */
  setIndex(...indexSymbols: string[]): this {
    if (indexSymbols.length === 0) {
      return this;
    }

    if (!this.symbols) {
      this.symbols = { symbolset: indexSymbols } as any;
    } else {
      (this.symbols as any).symbolset = indexSymbols;
    }

    return this;
  }

  /**
   * Add an option to the request
   */
  protected addOption(key: string, value: any): void {
    this.options[key] = value;
  }

  /**
   * Build the API request payload
   */
  protected buildPayload(columns: string[]): QueryPayload {
    return {
      filter: this.filters.map(f => f.toDict()),
      options: this.options,
      symbols: this.symbols || { query: { types: [] }, tickers: [] },
      sort: this.sort || undefined,
      range: this.range,
      columns,
    };
  }

  /**
   * Get the screener data from TradingView
   */
  async get(printRequest: boolean = false): Promise<ScreenerResult> {
    // Determine which fields to request
    const fieldsToRequest = this.specificFields || this.defaultFields;

    // Build columns list
    const columns = getColumnsToRequest(fieldsToRequest);

    // Build payload
    const payload = this.buildPayload(columns);

    if (printRequest) {
      console.log(`Request: ${this.url}`);
      console.log('Payload:');
      console.log(JSON.stringify(payload, null, 2));
    }

    // Make API request
    const response = await post(this.url, payload);

    // Transform response data
    const data = response.data.map((item: any) => {
      const row: any = {
        symbol: item.s,
      };

      // Map data values to field names
      item.d.forEach((value: any, index: number) => {
        const columnName = columns[index];
        if (columnName) {
          row[columnName] = value;
        }
      });

      return row;
    });

    return {
      data,
      totalCount: response.totalCount,
    };
  }

  /**
   * Stream screener data at regular intervals
   */
  async *stream(options?: StreamOptions): AsyncGenerator<ScreenerResult | null> {
    const interval = Math.max(options?.interval || 5000, 1000); // Min 1 second
    let iteration = 0;

    while (!options?.maxIterations || iteration < options.maxIterations) {
      try {
        const data = await this.get();
        yield data;
      } catch (error) {
        console.error('Stream error:', error);
        yield null;
      }

      iteration++;
      if (!options?.maxIterations || iteration < options.maxIterations) {
        await sleep(interval);
      }
    }
  }
}
