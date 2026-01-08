const cache = {};

function heavyCalc(n) {
    if (!cache[n]) {
        cache[n] = new Array(1e6).fill(n);
    }
    return cache[n];
}

setInterval(() => heavyCalc(Math.random()), 500);

/*
Why it leaks
    - Infinite cache growth
    - 'cache' object retains references to all computed arrays
    - Arrays can't be garbage collected
    - Memory usage grows over time
*/

/* Fix: Limit cache size to prevent memory leaks */
// Use strategies like LRU (Least Recently Used) cache or size limits
// Example: If cache size exceeds limit, delete oldest entries