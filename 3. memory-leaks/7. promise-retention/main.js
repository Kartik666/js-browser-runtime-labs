let pending = [];

function leakPromise() {
    const p = new Promise(() => { });
    pending.push(p);
}

setInterval(leakPromise, 500);

/*
Why it leaks
    - 'pending' array retains references to unresolved promises
    - Promises can't be garbage collected
    - Memory usage grows over time
*/

/* Fix: Clear references to unresolved promises when not needed */
pending.length = 0; // or pending = [];
/* Add timeout or cancellation logic to resolve/reject promises if applicable */