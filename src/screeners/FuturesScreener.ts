import { BaseScreener } from './BaseScreener.js';
import { FuturesField } from '../fields/FuturesField.js';
import { BaseField } from '../fields/BaseField.js';

export class FuturesScreener extends BaseScreener {
  protected fieldType = BaseField;
  protected url = 'https://scanner.tradingview.com/futures/scan';
  protected defaultFields: BaseField[] = [
    FuturesField.NAME,
    FuturesField.CLOSE,
  ];

  override selectAll(): this {
    this.specificFields = Object.values(FuturesField);
    return this;
  }
}
