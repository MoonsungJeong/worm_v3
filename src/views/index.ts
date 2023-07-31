import { WormType } from "./type.js";
import { createWorm } from "./worm.js";
import { gameLoop } from "./game.js";

export function GameStart(name: string) {
  let w: WormType = {
    name: name,
    pos: { x: 1230, y: 1 },
    degree: 10,
    size: 7,
    accel: 1,
    h_color: "h color",
    b_color: "b color",
    body: [{ x: 1, y: 1 }],
  };
  const cl = createWorm(w);
  cl.getName();
  const gameInterval = setInterval(() => {
    const winner: Boolean = gameLoop();
    if (!winner) {
      console.log("continue game");
    } else {
      clearInterval(gameInterval);
    }
  }, 1000 / 20);
  return 0;
}
