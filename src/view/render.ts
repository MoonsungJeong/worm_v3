import { State } from "./types/interface.js";
import { WormShapeTMP } from "./types/interface.js";

// Canvas
let canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
let ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

const borderStyle = "1px solid #000000"; // Border style
const screenSize: number = 600; // Screen size
const gameWidth: number = 3000; // Game width
const gameHeight: number = 3000; // Game height
const gridSize: number = 50; // Game grid size
let offsetX: number = 0;
let offsetY: number = 0;

// have to use requestAnimationFrame() when seperation.
export function paintGame(gameState: State) {
  // Initialize
  canvas.width = canvas.height = screenSize;
  canvas.style.border = borderStyle;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  offsetX = gameState.players[0].pos.x * 7 - canvas.width / 2; // size = 7 update later
  offsetY = gameState.players[0].pos.y * 7 - canvas.height / 2; // size = 7 update later
  // Grid
  ctx.strokeStyle = "#bbb";
  for (let x = 0; x <= gameWidth; x += gridSize) {
    ctx.beginPath();
    //ctx.moveTo(x, 0);
    //ctx.lineTo(x, gameHeight);
    ctx.moveTo(x - offsetX, 0 - offsetY);
    ctx.lineTo(x - offsetX, gameHeight - offsetY);
    ctx.stroke();
  }
  for (let y = 0; y <= gameHeight; y += gridSize) {
    ctx.beginPath();
    //ctx.moveTo(0, y);
    //ctx.lineTo(gameWidth, y);
    ctx.moveTo(0 - offsetX, y - offsetY);
    ctx.lineTo(gameWidth - offsetX, y - offsetY);
    ctx.stroke();
  }

  paintPlayer(gameState.players[0], 7, "#a5a5a5");
}
function paintPlayer(playerState: WormShapeTMP, size: number, colour: string) {
  const worm = playerState.getBody();
  ctx.fillStyle = colour;

  for (let i = worm.length - 1; i > 0; i--) {
    //ctx.fillRect(worm[i].x * size, worm[i].y * size, size, size);
    ctx.fillRect(
      //worm[i].x * size,
      //worm[i].y * size,
      worm[i].x * size - offsetX,
      worm[i].y * size - offsetY,
      size,
      size
    );
  }
  return 0;
}
