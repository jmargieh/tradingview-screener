import axios, { AxiosError } from 'axios';
import { MalformedRequestException } from '../exceptions/MalformedRequestException.js';
import type { ApiResponse } from '../types/index.js';

/**
 * Request headers for TradingView API
 */
const REQUEST_HEADERS = {
  'Content-Type': 'application/json',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  'Origin': 'https://www.tradingview.com',
  'Referer': 'https://www.tradingview.com/',
};

/**
 * Make a POST request to TradingView API
 */
export async function post(url: string, payload: any): Promise<ApiResponse> {
  try {
    const response = await axios.post(url, payload, {
      headers: REQUEST_HEADERS,
      timeout: 30000,
      validateStatus: (status) => status < 500, // Don't throw on 4xx errors
    });

    // Check for error responses
    if (response.status >= 400) {
      throw new MalformedRequestException(
        response.status,
        response.data?.message || response.statusText || 'Unknown error',
        url,
        JSON.stringify(payload, null, 2)
      );
    }

    return response.data;
  } catch (error) {
    if (error instanceof MalformedRequestException) {
      throw error;
    }

    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      throw new MalformedRequestException(
        axiosError.response?.status || 500,
        axiosError.message,
        url,
        JSON.stringify(payload, null, 2)
      );
    }

    throw error;
  }
}

/**
 * Sleep for a specified duration
 */
export function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}
