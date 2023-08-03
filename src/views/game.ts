import { createWorm } from "./worm.js";
import { WormType } from "./type.js";
let w: WormType = {
  name: "Monkey",
  pos: { x: 1230, y: 1 },
  degree: 10,
  size: 7,
  accel: 1,
  h_color: "h color",
  b_color: "b color",
  body: [{ x: 1, y: 1 }],
};
export function gameLoop() {
  const cl = createWorm(w);
  cl.getName();
  return false;
}
