const observer = new MutationObserver(() => {
    console.log("mutated");
});

observer.observe(document.body, {
    childList: true,
    subtree: true,
});

/*
Why it leaks
    - Observer retains references to all mutations i.e entire subtrees
    - Mutated nodes can't be garbage collected
    - Memory usage grows over time
*/

/* When not needed, disconnect the observer to prevent memory leaks */
observer.disconnect();