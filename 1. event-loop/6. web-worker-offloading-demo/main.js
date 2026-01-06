console.clear();

const box = document.getElementById("box");
const worker = new Worker("./worker.js");

function heavyWork(durationMs) {
  const start = performance.now();
  while (performance.now() - start < durationMs) {}
}

document.getElementById("main").addEventListener("click", () => {
  console.log("🟠 Heavy work on main thread");

  box.style.transform = "translateX(300px)";

  heavyWork(3000);

  console.log("🟠 Main thread work finished");
});

document.getElementById("worker").addEventListener("click", () => {
  console.log("🟢 Heavy work in Web Worker");

  box.style.transform = "translateX(300px)";
  worker.postMessage({ duration: 3000 });
});

worker.onmessage = () => {
  console.log("🟢 Worker finished heavy work");
};
