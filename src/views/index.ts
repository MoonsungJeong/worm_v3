import { WormShape, State } from "./interface";
import { gameLoop, initGame } from "./game.js";
import { init } from "./init.js";

export function GameStart() {
  init();
  const gameState = initGame();
  paintGame(gameState);
  const gameInterval = setInterval(() => {
    const winner: Boolean = gameLoop();
    if (!winner) {
      // game continue.
      console.log("continue game");
    } else {
      // game end
      clearInterval(gameInterval);
    }
  }, 20000 / 20);
  return 0;
}

function paintGame(gameState: State) {
  paintPlayer(gameState.players[0], 7, "#a5a5a5");
}
function paintPlayer(playerState: WormShape, size: number, color: string) {
  const worm = playerState.getBody();
  console.log("1");
  console.log(worm);
  console.log(size);
  console.log(color);
}
