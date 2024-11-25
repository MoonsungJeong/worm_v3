import { createGameState } from "./object.js";
import { WormType } from "../types/type.js";
export function initGame() {
  return createGameState(worm);
}
let worm: WormType[] = [
  {
    name: "Monkey",
    pos: { x: 0, y: 0 },
    //click: false,
    direction: { rightClick: false, leftClick: false, upClick: false },
    degree: 0,
    size: 7,
    accel: 1,
    vel: { x: 1, y: 0 },
    h_color: "h color",
    b_color: "b color",
    body: [],
  },
];
