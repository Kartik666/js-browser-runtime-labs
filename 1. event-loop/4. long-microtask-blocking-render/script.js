console.clear();

const box = document.getElementById("box");
const runBtn = document.getElementById("run");

function heavyWork(durationMs) {
  const start = performance.now();
  while (performance.now() - start < durationMs) {}
}

runBtn.addEventListener("click", () => {
  console.log("🔵 Clicked");

  box.style.transform = "translateX(300px)";
  console.log("🟡 Style updated");

  Promise.resolve().then(() => {
    console.log("🟢 Long microtask started");
    heavyWork(2000);
    console.log("🟢 Long microtask finished");
  });

  requestAnimationFrame(() => {
    console.log("🔴 requestAnimationFrame (should be before paint)");
  });
});
