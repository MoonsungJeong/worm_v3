import { Position } from "./types/type.js";
import { State, WormShape } from "./types/interface.js";
import * as worm from "./network/constants.js";

// Canvas 설정
const canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

// 게임 설정
const { renderedSize: gameWidth, gridUnit, scale } = worm;
const gameHeight = gameWidth;

let offsetX = 0;
let offsetY = 0;

export function paintGame(gameState: State) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const player = gameState.players[0];
  offsetX = player.pos.x * scale - canvas.width / 2;
  offsetY = player.pos.y * scale - canvas.height / 2;

  drawGrid();
  paintObjects(gameState.poison, 20, "purple");
  paintObjects(gameState.apple, 10, "red");
  paintPlayer(player, player.size, player.color);
}

function drawGrid() {
  ctx.strokeStyle = "#bbb";
  for (let x = 0; x <= gameWidth; x += gridUnit) {
    drawLine(x - offsetX, 0 - offsetY, x - offsetX, gameHeight - offsetY);
  }
  for (let y = 0; y <= gameHeight; y += gridUnit) {
    drawLine(0 - offsetX, y - offsetY, gameWidth - offsetX, y - offsetY);
  }
}

function drawLine(x1: number, y1: number, x2: number, y2: number) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

function paintObjects(objects: Position[], size: number, color: string) {
  ctx.fillStyle = color;
  objects.forEach(({ x, y }) => {
    ctx.fillRect(x * scale - offsetX, y * scale - offsetY, size, size);
  });
}

function paintPlayer(playerState: WormShape, size: number, color: string) {
  ctx.fillStyle = color;
  playerState.getBody().forEach(({ x, y }) => {
    ctx.beginPath();
    ctx.arc(x * scale - offsetX, y * scale - offsetY, size, 0, Math.PI * 2);
    ctx.fill();
  });
}

function resizeCanvas() {
  canvas.width = document.documentElement.clientWidth;
  canvas.height = document.documentElement.clientHeight;
}
