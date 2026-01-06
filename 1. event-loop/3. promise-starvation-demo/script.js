console.clear();

const startBtn = document.getElementById("start");
const timeoutBtn = document.getElementById("timeout");

function recursiveMicrotask() {
  Promise.resolve().then(() => {
    console.log("🟢 microtask running");
    recursiveMicrotask();
  });
}

startBtn.addEventListener("click", () => {
  console.log("🔵 Starting microtask starvation");
  recursiveMicrotask();
});

timeoutBtn.addEventListener("click", () => {
  setTimeout(() => {
    console.log("🟠 setTimeout executed");
  }, 0);
});
