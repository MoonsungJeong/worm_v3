import { WormType } from "./type.js";
import { createWorm } from "./worm.js";

export function GameStart(name: string) {
  let w: WormType = {
    name: name,
    pos: { x: 4, y: 1 },
    degree: 10,
    size: 7,
    accel: 1,
    h_color: "h color",
    b_color: "b color",
    body: [{ x: 1, y: 1 }],
  };
  const cl = createWorm(w);
  return cl;
}
