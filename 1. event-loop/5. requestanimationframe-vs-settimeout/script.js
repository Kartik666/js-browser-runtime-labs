console.clear();

const box = document.getElementById("box");
let position = 0;
let animationId = null;

function reset() {
  cancelAnimationFrame(animationId);
  position = 0;
  box.style.transform = "translateX(0)";
}

document.getElementById("timeout").addEventListener("click", () => {
  reset();
  console.log("🟠 setTimeout animation started");

  function animate() {
    position += 5;
    box.style.transform = `translateX(${position}px)`;

    if (position < 300) {
      setTimeout(animate, 16); // ~60fps attempt
    }
  }

  animate();
});

document.getElementById("raf").addEventListener("click", () => {
  reset();
  console.log("🔵 requestAnimationFrame animation started");

  function animate() {
    position += 5;
    box.style.transform = `translateX(${position}px)`;

    if (position < 300) {
      animationId = requestAnimationFrame(animate);
    }
  }

  animationId = requestAnimationFrame(animate);
});
