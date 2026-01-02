console.clear();

const button = document.getElementById("run");

async function asyncFunction() {
  console.log("🟢 async function start");

  await Promise.resolve();

  console.log("🟣 async function resumed after await");
}

button.addEventListener("click", () => {
  console.log("🔵 Script start");

  setTimeout(() => {
    console.log("🟠 setTimeout (macrotask)");
  }, 0);

  Promise.resolve().then(() => {
    console.log("🟡 Promise.then (microtask)");
  });

  asyncFunction();

  console.log("🔵 Script end");
});
