export function initScreen() {
  let canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
  //let ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
  canvas.width = canvas.height = 600;
  canvas.style.border = "1px solid #000000";
}
export function initUserControl() {
  document.addEventListener("keydown", (e) => {
    console.log(e.key);
  });
  document.addEventListener("keyup", (e) => {
    console.log(e.key);
  });
}
