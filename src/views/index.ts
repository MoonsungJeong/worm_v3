import { gameLoop } from "./game.js";
import { init } from "./init.js";

export function GameStart() {
  const gameInterval = setInterval(() => {
    const winner: Boolean = gameLoop();
    init();
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
