let cache = [];

function createCard() {
    const div = document.createElement("div");
    div.textContent = "Card";
    document.body.appendChild(div);
    cache.push(div);
    div.remove();
}

setInterval(createCard, 500);

/*
Why it leaks
    - Removing DOM nodes ≠ freeing memory.
    - Detached DOM nodes are kept in 'cache' array
    - They can't be garbage collected
    - Memory usage grows over time
*/

/* Fix: Clear references to detached DOM nodes when not needed */
cache.length = 0; // or cache = [];