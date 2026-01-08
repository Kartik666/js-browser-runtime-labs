function attach() {
    const button = document.createElement("button");
    button.textContent = "Click";
    button.addEventListener("click", () => {
        console.log("clicked");
    });
    document.body.appendChild(button);
}

setInterval(attach, 1000);

/*
Why it leaks
    - Buttons accumulate
    - Each listener holds a closure
    - Memory grows linearly
*/

/*
When not needed, remove event listeners to prevent memory leaks
*/
button.removeEventListener("click", handler);

/* DevTools Tip:
    - Use Memory tab to take heap snapshots
    - Look for Detached HTMLButtonElement
*/