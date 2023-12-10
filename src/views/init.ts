export function init() {
  // canvas
  let canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
  let ctx = canvas.getContext("2d");
  // canvas size
  canvas.width = canvas.height = 600;
  canvas.style.border = "1px solid #000000";

  // control
  // document.addEventListener("keydown", keyDownHandler); Activate when seperate server and view
  return ctx;
}

export function keyDownHandler(e: KeyboardEvent) {
  switch (e.key) {
    case "ArrowLeft": {
      // left
      return { x: -0.4, y: 0 };
    }
    case "ArrowDown": {
      // down
      return { x: 0, y: 0.4 };
    }
    case "ArrowRight": {
      // right
      return { x: 0.4, y: 0 };
    }
    case "ArrowUp": {
      // up
      return { x: 0, y: -0.4 };
    }
  }
  return { x: 0, y: 0 };
}
