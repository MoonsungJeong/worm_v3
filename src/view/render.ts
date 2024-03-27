import { State } from "./types/interface.js";
import { WormShapeTMP } from "./types/interface.js";
import { ctx, canvas } from "./view.js";

// have to use requestAnimationFrame() when seperation.
export function paintGame(gameState: State) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
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
