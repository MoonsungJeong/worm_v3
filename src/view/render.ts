import { State } from "./types/interface.js";
import { WormShapeTMP } from "./types/interface.js";

// Canvas
let canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
let ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

const borderStyle = "1px solid #000000"; // Border style
const screenSize = 600; // Screen size
const gameWidth = 3000; // Game width
const gameHeight = 3000; // Game height
const gridSize = 50; // Game grid size

// have to use requestAnimationFrame() when seperation.
export function paintGame(gameState: State) {
  // Canvas Initialize
  canvas.width = canvas.height = screenSize;
  canvas.style.border = borderStyle;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // Grid
  ctx.strokeStyle = "#bbb";
  for (let x = 0; x <= gameWidth; x += gridSize) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, gameHeight);
    ctx.stroke();
  }
  for (let y = 0; y <= gameHeight; y += gridSize) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(gameWidth, y);
    ctx.stroke();
  }

  paintPlayer(gameState.players[0], 7, "#a5a5a5");
}
function paintPlayer(playerState: WormShapeTMP, size: number, colour: string) {
  const worm = playerState.getBody();
  ctx.fillStyle = colour;

  for (let i = worm.length - 1; i > 0; i--) {
    ctx.fillRect(worm[i].x * size, worm[i].y * size, size, size);
  }
  return 0;
}
