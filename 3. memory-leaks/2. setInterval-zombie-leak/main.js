let id;
function startPolling() {
    const bigData = new Array(1e6).fill("🔥");

    id = setInterval(() => {
        console.log(bigData[0]);
    }, 1000);
}

startPolling();

/*
Why it leaks
    - setInterval keeps references to bigData
    - bigData can't be garbage collected
    - Memory usage grows over time
*/

/* When not needed, clear the interval to prevent memory leaks */
clearInterval(id);

/*DevTools Tip:
    - Allocation Timeline
*/
