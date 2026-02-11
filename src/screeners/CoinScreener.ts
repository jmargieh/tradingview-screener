import { BaseScreener } from './BaseScreener.js';
import { CoinField } from '../fields/CoinField.js';
import { BaseField } from '../fields/BaseField.js';

export class CoinScreener extends BaseScreener {
  protected fieldType = BaseField;
  protected url = 'https://scanner.tradingview.com/coin/scan';
  protected defaultFields: BaseField[] = [
    CoinField.NAME,
    CoinField.CLOSE,
  ];

  override selectAll(): this {
    this.specificFields = Object.values(CoinField);
    return this;
  }
}
