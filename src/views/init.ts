export function init() {
  // canvas
  // canvas size

  // control
  document.addEventListener("keydown", keyDownHandler);
}

function keyDownHandler(e: KeyboardEvent) {
  if (e.key === "ArrowRight") {
    console.log("right");
  } else if (e.key === "ArrowLeft") {
    console.log("left");
  } else if (e.key === "ArrowUp") {
    console.log("top");
  }
}
