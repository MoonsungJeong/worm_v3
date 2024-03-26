import { setCONTROL } from "./network/global.js";
import { KeyControl } from "./types/type.js";
export function initScreen() {
  let canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
  //let ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
  canvas.width = canvas.height = 600;
  canvas.style.border = "1px solid #000000";
}
export function initUserControl() {
  document.addEventListener("keydown", (e) => {
    const DOWN: KeyControl = { UP: null, DOWN: e };
    setCONTROL(DOWN);
  });
  document.addEventListener("keyup", (e) => {
    const UP: KeyControl = { UP: e, DOWN: null };
    setCONTROL(UP);
  });
}
