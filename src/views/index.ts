import { /* WormShape */ WormShapeTMP, State } from "./types/interface";
import { gameLoop, initGame } from "./game.js";
import { keyDownHandler } from "./init.js";

export function GameStart() {
  // *** Start init - will be seperated *** //
  // canvas
  let canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
  let ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
  // canvas size
  canvas.width = canvas.height = 600;
  canvas.style.border = "1px solid #000000";
  //let ctx = init() as CanvasRenderingContext2D;
  // *** End init - will be seperated *** //

  // *** Start control - will be seperated *** //
  let VEL: { x: number; y: number } = { x: 0.4, y: 0 };
  document.addEventListener("keydown", (e) => {
    VEL = keyDownHandler(e);
  });
  // *** End control - will be seperated *** //

  const gameState = initGame();

  const gameInterval = setInterval(() => {
    const winner: Boolean = gameLoop(gameState);
    if (!winner) {
      // game continue.
      paintGame(gameState); // have to use requestAnimationFrame() when seperation.

      gameState.players[0].move();
      gameState.players[0].updatePos();

      gameState.players[0].updateVel(VEL);
      console.log("continue game");
    } else {
      // game end
      clearInterval(gameInterval);
    }
  }, 1000 / 40);

  function paintGame(gameState: State) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    paintPlayer(gameState.players[0], 7, "#a5a5a5");
  }
  function paintPlayer(
    playerState: WormShapeTMP,
    size: number,
    colour: string
  ) {
    const worm = playerState.getBody();
    ctx.fillStyle = colour;
    //for (let cell of worm) {
    //  ctx.fillRect(cell.x * size, cell.y * size, size, size);
    //}
    for (let i = worm.length - 1; i > 0; i--) {
      ctx.fillRect(worm[i].x * size, worm[i].y * size, size, size);
    }
  }
  return 0;
}
