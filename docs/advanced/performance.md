# Performance Tips

Optimization techniques for faster queries and better resource usage.

## Overview

Optimize screener performance through smart filtering, efficient pagination, and proper resource management.

## Query Optimization

### 1. Most Restrictive Filters First

Apply the most restrictive filters early to reduce dataset size:

```typescript
// Good: Most restrictive first
screener
  .where(StockField.MARKET_CAPITALIZATION.gt(100e9))  // Very restrictive
  .where(StockField.VOLUME.gte(1_000_000))            // Moderately restrictive
  .where(StockField.PRICE.gt(10));                    // Less restrictive

// Less efficient
screener
  .where(StockField.PRICE.gt(10))                     // Matches many stocks
  .where(StockField.VOLUME.gte(1_000_000))
  .where(StockField.MARKET_CAPITALIZATION.gt(100e9)); // Applied last
```

### 2. Use Specific Value Ranges

Narrow ranges reduce result sets:

```typescript
// Good: Specific range
screener.where(StockField.MARKET_CAPITALIZATION.between(1e9, 10e9));

// Less efficient: Very broad
screener.where(StockField.MARKET_CAPITALIZATION.gt(0));
```

### 3. Combine Filters Wisely

```typescript
// Efficient: Combined conditions
screener
  .where(StockField.MARKET_CAPITALIZATION.gt(1e9))
  .where(StockField.VOLUME.gte(100_000))
  .where(StockField.PRICE.between(10, 500));

// Inefficient: Too many overlapping conditions
screener
  .where(StockField.PRICE.gt(0))
  .where(StockField.PRICE.gt(5))
  .where(StockField.PRICE.gt(10))  // Just use this one
  .where(StockField.PRICE.lt(1000))
  .where(StockField.PRICE.lt(500)); // Just use this one
```

## Field Selection

### Select Only Needed Fields

```typescript
// Good: Select specific fields
screener.select(
  StockField.NAME,
  StockField.PRICE,
  StockField.VOLUME
);

// Inefficient: Select all fields
screener.selectAll(); // Returns 15+ fields
```

### Avoid Unused Fields

```typescript
// Good: Only fields you use
screener
  .select(StockField.NAME, StockField.PRICE)
  .sortBy(StockField.PRICE, true);

// Wasteful: Selecting fields not used
screener
  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.VOLUME,
    StockField.MARKET_CAPITALIZATION,
    StockField.DIVIDEND_YIELD_FWD  // Not used anywhere
  )
  .sortBy(StockField.PRICE, true);
```

## Pagination Strategies

### Optimal Page Size

```typescript
// Too small: Many requests
screener.setRange(0, 10);  // 10 results per page

// Good: Balanced
screener.setRange(0, 50);  // 50 results
screener.setRange(0, 100); // 100 results

// Large but acceptable
screener.setRange(0, 150); // Near limit

// Avoid: May timeout
screener.setRange(0, 1000); // Too large
```

### Fetch Only What You Need

```typescript
// Good: Fetch first page only
screener.setRange(0, 50);
const results = await screener.get();

// Inefficient: Fetch all when only need some
const allResults = await getAllResults(screener); // May take long
const firstPage = allResults.slice(0, 50);
```

### Progressive Loading

```typescript
async function* loadProgressively(
  screener: StockScreener,
  pageSize: number = 50
) {
  let page = 0;

  while (true) {
    screener.setRange(page * pageSize, (page + 1) * pageSize);
    const results = await screener.get();

    if (results.data.length === 0) break;

    yield results.data;

    if (results.data.length < pageSize) break;
    page++;
  }
}

// Usage: Load and process incrementally
for await (const page of loadProgressively(screener, 50)) {
  processPage(page); // Process each page as it arrives
}
```

## Caching Strategies

### Cache Expensive Queries

```typescript
class CachedScreener {
  private cache = new Map<string, { data: any; timestamp: number }>();
  private ttl = 60000; // 1 minute

  async get(screener: StockScreener): Promise<ScreenerResult> {
    const key = this.getCacheKey(screener);
    const cached = this.cache.get(key);

    if (cached && Date.now() - cached.timestamp < this.ttl) {
      console.log('Cache hit');
      return cached.data;
    }

    console.log('Cache miss, fetching...');
    const data = await screener.get();

    this.cache.set(key, {
      data,
      timestamp: Date.now(),
    });

    return data;
  }

  private getCacheKey(screener: StockScreener): string {
    return JSON.stringify({
      filters: screener['filters'],
      range: screener['range'],
      sort: screener['sort'],
    });
  }
}

// Usage
const cached = new CachedScreener();
const results = await cached.get(screener); // Cached for 1 minute
```

### Memoize Field Searches

```typescript
const fieldSearchCache = new Map<string, BaseField[]>();

function searchFieldsCached(
  fieldClass: typeof BaseField,
  query: string
): BaseField[] {
  const key = `${fieldClass.name}:${query}`;

  if (fieldSearchCache.has(key)) {
    return fieldSearchCache.get(key)!;
  }

  const results = fieldClass.search(query);
  fieldSearchCache.set(key, results);

  return results;
}
```

## Request Batching

### Parallel Requests

```typescript
// Good: Parallel requests for independent queries
const [stocks, crypto, forex] = await Promise.all([
  new StockScreener().where(StockField.PRICE.gt(100)).get(),
  new CryptoScreener().where(CryptoField.MARKET_CAP.gt(1e9)).get(),
  new ForexScreener().setRange(0, 20).get(),
]);

// Inefficient: Sequential
const stocks = await new StockScreener().where(StockField.PRICE.gt(100)).get();
const crypto = await new CryptoScreener().where(CryptoField.MARKET_CAP.gt(1e9)).get();
const forex = await new ForexScreener().setRange(0, 20).get();
```

### Batch Page Fetching

```typescript
async function fetchPagesBatch(
  screener: StockScreener,
  pages: number[],
  pageSize: number = 50
): Promise<any[][]> {
  const promises = pages.map(page => {
    const s = new StockScreener();
    // Copy filters from original screener
    s.setRange(page * pageSize, (page + 1) * pageSize);
    return s.get().then(r => r.data);
  });

  return await Promise.all(promises);
}

// Fetch pages 0, 1, 2 in parallel
const results = await fetchPagesBatch(screener, [0, 1, 2]);
const allData = results.flat();
```

## Memory Management

### Stream Instead of Load All

```typescript
// Good: Stream for large datasets
for await (const data of screener.stream({ interval: 5000 })) {
  if (data) {
    processData(data.data); // Process and discard
  }
}

// Inefficient: Load everything into memory
const allData = await getAllResults(screener); // May use GBs of RAM
processData(allData);
```

### Process in Chunks

```typescript
async function processInChunks(
  screener: StockScreener,
  chunkSize: number = 100
) {
  let offset = 0;

  while (true) {
    screener.setRange(offset, offset + chunkSize);
    const results = await screener.get();

    if (results.data.length === 0) break;

    // Process chunk
    await processChunk(results.data);

    // Free memory
    results.data.length = 0;

    if (results.data.length < chunkSize) break;
    offset += chunkSize;
  }
}
```

### Limit Result Size

```typescript
// Good: Reasonable limits
screener.setRange(0, 150);

// Risky: Very large result sets
screener.setRange(0, 10000); // May cause memory issues
```

## Rate Limiting

### Add Delays Between Requests

```typescript
async function getAllWithDelay(
  screener: StockScreener,
  delay: number = 1000
): Promise<any[]> {
  const pageSize = 150;
  const allResults: any[] = [];
  let page = 0;

  while (true) {
    screener.setRange(page * pageSize, (page + 1) * pageSize);
    const results = await screener.get();

    allResults.push(...results.data);

    if (results.data.length < pageSize) break;

    page++;

    // Delay between pages
    if (results.data.length === pageSize) {
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }

  return allResults;
}
```

### Throttle Requests

```typescript
class Throttler {
  private queue: Array<() => Promise<any>> = [];
  private running = 0;
  private maxConcurrent = 3;

  async add<T>(fn: () => Promise<T>): Promise<T> {
    while (this.running >= this.maxConcurrent) {
      await new Promise(resolve => setTimeout(resolve, 100));
    }

    this.running++;

    try {
      return await fn();
    } finally {
      this.running--;
    }
  }
}

// Usage
const throttler = new Throttler();

const results = await Promise.all([
  throttler.add(() => screener1.get()),
  throttler.add(() => screener2.get()),
  throttler.add(() => screener3.get()),
  throttler.add(() => screener4.get()), // Waits for slot
]);
```

## Network Optimization

### Connection Reuse

The HTTP client automatically reuses connections with keep-alive:

```typescript
// Built-in: Axios uses connection pooling
// Multiple requests reuse the same TCP connection
const results1 = await screener1.get();
const results2 = await screener2.get(); // Reuses connection
```

### Request Compression

```typescript
// If implementing custom HTTP client
import axios from 'axios';

const client = axios.create({
  headers: {
    'Accept-Encoding': 'gzip, deflate, br',
  },
  decompress: true, // Auto decompress
});
```

### Timeout Configuration

```typescript
// Set appropriate timeouts
const client = axios.create({
  timeout: 30000, // 30 seconds

  // Retry on timeout
  validateStatus: (status) => status < 500,
});
```

## Filter Optimization

### Use Indexed Fields

Some fields are indexed and filter faster:

```typescript
// Fast: Market cap is indexed
screener.where(StockField.MARKET_CAPITALIZATION.gt(1e9));

// Fast: Volume is indexed
screener.where(StockField.VOLUME.gte(100_000));

// Fast: Price is indexed
screener.where(StockField.PRICE.between(10, 500));
```

### Avoid Redundant Filters

```typescript
// Good: No redundancy
screener
  .where(StockField.MARKET_CAPITALIZATION.gt(1e9))
  .where(StockField.VOLUME.gte(100_000));

// Wasteful: Redundant conditions
screener
  .where(StockField.MARKET_CAPITALIZATION.gt(1e9))
  .where(StockField.MARKET_CAPITALIZATION.gt(500e6)) // Redundant
  .where(StockField.VOLUME.gte(100_000))
  .where(StockField.VOLUME.gt(50_000)); // Redundant
```

## Streaming Performance

### Choose Appropriate Intervals

```typescript
// Fast updates: Every 5 seconds
screener.stream({ interval: 5000 });

// Balanced: Every 30 seconds
screener.stream({ interval: 30000 });

// Slow but efficient: Every 5 minutes
screener.stream({ interval: 300000 });

// Don't go too fast
screener.stream({ interval: 100 }); // Capped at 1000ms
```

### Limit Stream Duration

```typescript
// Good: Set max iterations
screener.stream({ maxIterations: 100 });

// Or: Use timeout
const timeout = setTimeout(() => {
  process.exit(0);
}, 3600000); // 1 hour

for await (const data of screener.stream()) {
  // Process data
}

clearTimeout(timeout);
```

## Monitoring Performance

### Measure Query Time

```typescript
async function measureQuery(screener: StockScreener): Promise<void> {
  const start = Date.now();

  const results = await screener.get();

  const duration = Date.now() - start;

  console.log(`Query completed in ${duration}ms`);
  console.log(`Results: ${results.totalCount} total, ${results.data.length} fetched`);
  console.log(`Throughput: ${(results.data.length / duration * 1000).toFixed(0)} results/sec`);
}
```

### Track Resource Usage

```typescript
async function monitorMemory(screener: StockScreener): Promise<void> {
  const before = process.memoryUsage();

  const results = await screener.get();

  const after = process.memoryUsage();

  console.log('Memory delta:', {
    heapUsed: `${((after.heapUsed - before.heapUsed) / 1024 / 1024).toFixed(2)} MB`,
    external: `${((after.external - before.external) / 1024 / 1024).toFixed(2)} MB`,
  });
}
```

## Best Practices Summary

### Query Design
- ✅ Apply most restrictive filters first
- ✅ Use specific value ranges
- ✅ Select only needed fields
- ❌ Don't use overly broad filters
- ❌ Don't select all fields unless necessary

### Pagination
- ✅ Use page sizes of 50-150
- ✅ Fetch progressively
- ✅ Process and discard chunks
- ❌ Don't load entire datasets into memory
- ❌ Don't use tiny page sizes (< 20)

### Request Management
- ✅ Batch parallel independent requests
- ✅ Cache expensive queries
- ✅ Add delays between rapid requests
- ❌ Don't make sequential requests when parallel is possible
- ❌ Don't fetch same data repeatedly

### Memory Management
- ✅ Stream large datasets
- ✅ Process in chunks
- ✅ Clear references when done
- ❌ Don't accumulate unlimited data
- ❌ Don't keep unused results in memory

### Error Handling
- ✅ Implement retry with backoff
- ✅ Handle errors gracefully
- ✅ Set appropriate timeouts
- ❌ Don't ignore errors
- ❌ Don't retry indefinitely

## Benchmarking

### Compare Query Strategies

```typescript
async function benchmark() {
  const iterations = 10;

  // Strategy 1: Restrictive filters
  const start1 = Date.now();
  for (let i = 0; i < iterations; i++) {
    await new StockScreener()
      .where(StockField.MARKET_CAPITALIZATION.gt(10e9))
      .where(StockField.VOLUME.gte(1_000_000))
      .setRange(0, 50)
      .get();
  }
  const time1 = Date.now() - start1;

  // Strategy 2: Broad filters
  const start2 = Date.now();
  for (let i = 0; i < iterations; i++) {
    await new StockScreener()
      .where(StockField.PRICE.gt(0))
      .setRange(0, 50)
      .get();
  }
  const time2 = Date.now() - start2;

  console.log(`Strategy 1: ${time1}ms (${(time1/iterations).toFixed(0)}ms avg)`);
  console.log(`Strategy 2: ${time2}ms (${(time2/iterations).toFixed(0)}ms avg)`);
  console.log(`Improvement: ${((time2-time1)/time2*100).toFixed(1)}%`);
}
```

## Next Steps

- [Error Handling](error-handling.md) - Handle errors gracefully
- [Pagination](pagination.md) - Working with large datasets
- [Streaming](streaming.md) - Real-time updates
