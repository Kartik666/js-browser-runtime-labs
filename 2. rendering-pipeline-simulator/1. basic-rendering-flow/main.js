const box = document.getElementById("box");

document.getElementById("style").onclick = () => {
  console.log("STYLE recalculation");
  box.style.background = "tomato";
};

document.getElementById("layout").onclick = () => {
  console.log("LAYOUT (reflow)");
  box.style.width = Math.random() * 300 + "px";
};

document.getElementById("paint").onclick = () => {
  console.log("PAINT");
  box.style.borderRadius = Math.random() * 50 + "%";
};

document.getElementById("composite").onclick = () => {
  console.log("COMPOSITE only");
  box.style.transform = `translateX(${Math.random() * 200}px)`;
};
