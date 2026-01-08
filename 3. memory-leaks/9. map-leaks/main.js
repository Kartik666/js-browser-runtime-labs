const map = new Map();

(function () {
    const obj = {};
    map.set(obj, "data");
})();

/*
Why it leaks
    - Map prevents GC
    - 'obj' is stored in a Map
    - Map retains reference to 'obj'
    - 'obj' can't be garbage collected
    - Memory usage grows over time
*/

/* Fix: Use WeakMap to allow garbage collection */
const wmap = new WeakMap();