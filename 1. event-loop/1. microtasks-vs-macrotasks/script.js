console.clear();

const button = document.getElementById("run");

button.addEventListener("click", () => {
    console.log("🔵 Script start (sync)");

    setTimeout(() => {
        console.log("🟠 setTimeout (macrotask)");
    }, 0);

    Promise.resolve().then(() => {
        console.log("🟢 Promise.then (microtask)");
    });

    queueMicrotask(() => {
        console.log("🟣 queueMicrotask (microtask)");
    });

    requestAnimationFrame(() => {
        console.log("🔴 requestAnimationFrame (before paint)");
    });

    console.log("🔵 Script end (sync)");
});
