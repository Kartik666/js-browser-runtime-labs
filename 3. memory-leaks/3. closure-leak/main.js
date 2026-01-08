function createHandler() {
    const huge = new Array(5e6).fill("data");

    return function () {
        console.log("clicked");
    };
}

const handler = createHandler();
document.addEventListener("click", handler);

/*
Why it leaks
    - Handler closure retains reference to 'huge' array
    - 'huge' can't be garbage collected
    - Memory usage grows over time
*/

/* fix: When not needed, remove event listeners to prevent memory leaks */
document.removeEventListener("click", handler);