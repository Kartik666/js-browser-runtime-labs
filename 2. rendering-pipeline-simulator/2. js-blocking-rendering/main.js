function blockMainThread(ms) {
  const start = performance.now();
  while (performance.now() - start < ms) {}
}

document.getElementById("layout").addEventListener("click", () => {
  blockMainThread(2000);
  box.style.width = "300px";
  console.log("Rendering delayed due to JS blocking");
});
