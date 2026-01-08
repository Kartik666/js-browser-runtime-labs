window.store = [];

function addData() {
    store.push(new Array(1e5).fill(Math.random()));
}

setInterval(addData, 1000);

/*
Why it leaks
    - 'store' is a global variable
    - References to added arrays are retained
    - Memory usage grows over time
*/

/* Fix: Avoid using global variables to prevent memory leaks */
// Remove 'window.store' and manage data within a local scope when possible
// Use: WeakMap, LRU cache, Scoped variables