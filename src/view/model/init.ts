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
    direction: { right: false, left: false, up: false },
    degree: 0,
    size: 3.5,
    color: "#a5a5a5",
    accel: 1,
    vel: { x: 1, y: 0 },
    headColor: "h color",
    bodyColor: "b color",
    body: [],
  },
];
