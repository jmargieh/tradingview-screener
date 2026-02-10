import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { CryptoScreener } from '../../src/screeners/CryptoScreener.js';
import { CryptoField } from '../../src/fields/CryptoField.js';
import * as http from '../../src/utils/http.js';

describe('CryptoScreener Integration', () => {
  let mockPost: any;

  beforeEach(() => {
    mockPost = vi.spyOn(http, 'post');
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should use correct endpoint', async () => {
    const mockResponse = {
      data: [],
      totalCount: 0,
    };

    mockPost.mockResolvedValue(mockResponse);

    const screener = new CryptoScreener();
    screener.select(CryptoField.NAME);

    await screener.get();

    const [url] = mockPost.mock.calls[0];
    expect(url).toBe('https://scanner.tradingview.com/crypto/scan');
  });

  it('should fetch and transform crypto data', async () => {
    const mockResponse = {
      data: [
        {
          s: 'BINANCE:BTCUSDT',
          d: ['Bitcoin', 50000, 2.5, 1000000000, 950000000000],
        },
        {
          s: 'BINANCE:ETHUSDT',
          d: ['Ethereum', 3000, 3.2, 500000000, 360000000000],
        },
      ],
      totalCount: 2,
    };

    mockPost.mockResolvedValue(mockResponse);

    const screener = new CryptoScreener();
    screener
      .where(CryptoField.MARKET_CAP.gt(1e9))
      .select(
        CryptoField.NAME,
        CryptoField.PRICE,
        CryptoField.CHANGE_PERCENT,
        CryptoField.VOLUME_24H_IN_USD,
        CryptoField.MARKET_CAP
      );

    const results = await screener.get();

    expect(results.totalCount).toBe(2);
    expect(results.data).toHaveLength(2);
    expect(results.data[0].symbol).toBe('BINANCE:BTCUSDT');
    expect(results.data[1].symbol).toBe('BINANCE:ETHUSDT');
  });

  it('should send correct crypto filter payload', async () => {
    const mockResponse = {
      data: [],
      totalCount: 0,
    };

    mockPost.mockResolvedValue(mockResponse);

    const screener = new CryptoScreener();
    screener
      .where(CryptoField.PRICE.gt(1000))
      .where(CryptoField.VOLUME_24H_IN_USD.gte(100000000))
      .select(CryptoField.NAME, CryptoField.PRICE);

    await screener.get();

    const [, payload] = mockPost.mock.calls[0];

    expect(payload.filter).toHaveLength(2);
    expect(payload.filter[0].left).toBe('close');
    expect(payload.filter[0].operation).toBe('greater');
    expect(payload.filter[1].left).toBe('24h_vol|5');
    expect(payload.filter[1].operation).toBe('egreater');
  });

  it('should support crypto market cap filtering', async () => {
    const mockResponse = {
      data: [],
      totalCount: 0,
    };

    mockPost.mockResolvedValue(mockResponse);

    const screener = new CryptoScreener();
    screener
      .where(CryptoField.MARKET_CAP.between(1e9, 100e9))
      .select(CryptoField.NAME);

    await screener.get();

    const [, payload] = mockPost.mock.calls[0];

    expect(payload.filter[0].left).toBe('market_cap');
    expect(payload.filter[0].operation).toBe('in_range');
    expect(payload.filter[0].right).toEqual([1e9, 100e9]);
  });

  it('should use default crypto sort', async () => {
    const mockResponse = {
      data: [],
      totalCount: 0,
    };

    mockPost.mockResolvedValue(mockResponse);

    const screener = new CryptoScreener();
    screener.select(CryptoField.NAME);

    await screener.get();

    const [, payload] = mockPost.mock.calls[0];

    expect(payload.sort).toBeDefined();
    expect(payload.sort.sortBy).toBe('24h_vol|5');
    expect(payload.sort.sortOrder).toBe('desc');
  });

  it('should allow custom sorting', async () => {
    const mockResponse = {
      data: [],
      totalCount: 0,
    };

    mockPost.mockResolvedValue(mockResponse);

    const screener = new CryptoScreener();
    screener
      .select(CryptoField.NAME)
      .sortBy(CryptoField.MARKET_CAP, false);

    await screener.get();

    const [, payload] = mockPost.mock.calls[0];

    expect(payload.sort.sortBy).toBe('market_cap');
    expect(payload.sort.sortOrder).toBe('desc');
  });
});
