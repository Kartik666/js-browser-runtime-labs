function thrash() {
    for (let i = 0; i < 50; i++) {
        box.style.width = i * 5 + "px";
        console.log(box.offsetWidth); // 🚨 Stops browser's batch update & Forces layout
    }
}

document.getElementById("layout").addEventListener("click", () => {
    thrash();
    box.style.width = "300px";
    console.log("Rendering delayed due to JS blocking");
});
