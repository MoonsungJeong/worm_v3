import { createGameState } from "./object.js";
import { WormType } from "../types/type.js";

const DEFAULT_WORM: WormType = {
  name: "Monkey",
  pos: { x: 0, y: 0 },
  direction: { right: false, left: false, up: false },
  degree: 0,
  size: 3.5,
  color: "#a5a5a5",
  accel: 1 as 1 | 2, // Type 오류 방지
  vel: { x: 1, y: 0 },
  headColor: "h color",
  bodyColor: "b color",
  body: [],
};

const worms: WormType[] = [{ ...DEFAULT_WORM }];

export function initGame() {
  return createGameState(worms);
}
