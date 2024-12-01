import { Position } from "./types/type.js";
import { State } from "./types/interface.js";
import { WormShapeTMP } from "./types/interface.js";
import * as worm from "./network/constants.js";

// Canvas
let canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
let ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;
//const borderStyle = "1px solid #000000"; // Border style
window.addEventListener("resize", resizeCanvas);
const gameWidth: number = worm.gameSize; // Game width
const gameHeight: number = worm.gameSize; // Game height
const gridUnit: number = worm.gridUnit; // Game grid size
const scale: number = worm.scale; // render

let offsetX: number = 0;
let offsetY: number = 0;

// have to use requestAnimationFrame() when seperation.
export function paintGame(gameState: State) {
  //canvas.style.border = borderStyle;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  offsetX = gameState.players[0].pos.x * scale - canvas.width / 2;
  offsetY = gameState.players[0].pos.y * scale - canvas.height / 2;
  // Grid
  ctx.strokeStyle = "#bbb";
  for (let x = 0; x <= gameWidth; x += gridUnit) {
    ctx.beginPath();
    ctx.moveTo(x - offsetX, 0 - offsetY);
    ctx.lineTo(x - offsetX, gameHeight - offsetY);
    ctx.stroke();
  }
  for (let y = 0; y <= gameHeight; y += gridUnit) {
    ctx.beginPath();
    ctx.moveTo(0 - offsetX, y - offsetY);
    ctx.lineTo(gameWidth - offsetX, y - offsetY);
    ctx.stroke();
  }
  paintPosion(gameState.poison);
  paintApple(gameState.apple);
  paintPlayer(gameState.players[0], 7, "#a5a5a5"); // Update: WormShapeTMP -> WormShapeTMP[]
}
function paintPosion(Posion: Position[]) {
  const posions = Posion;
  //console.log("posion");
  //console.log(Posion); // need to update drawing posion logic
  posions.forEach((posion) => {
    ctx.fillRect(
      posion.x * scale - offsetX,
      posion.y * scale - offsetY,
      20,
      20
    );
    //ctx.arc(
    //  posion.x * scale - offsetX,
    //  posion.y * scale - offsetY,
    //  10,
    //  0,
    //  Math.PI * 2,
    //  false
    //);
    //console.log("poison");
  });
}
function paintApple(Apple: Position[]) {
  const apples: Position[] = Apple;
  //console.log("apple");
  //console.log(Apple); // need to update drawing apple logic
  apples.forEach((apple) => {
    ctx.fillRect(apple.x * scale - offsetX, apple.y * scale - offsetY, 10, 10);
  });
}
function paintPlayer(playerState: WormShapeTMP, size: number, color: string) {
  const worm = playerState.getBody();
  ctx.fillStyle = color;

  for (let i = worm.length - 1; i > 0; i--) {
    ctx.fillRect(
      worm[i].x * scale - offsetX,
      worm[i].y * scale - offsetY,
      size,
      size
    );
  }
  return 0;
}
function resizeCanvas() {
  canvas.width = document.documentElement.clientWidth; //window.innerWidth;
  canvas.height = document.documentElement.clientHeight; // window.innerHeight;
}
