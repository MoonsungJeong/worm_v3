import { createWorm } from "./worm.js";
import { WormType } from "./type.js";
import { State } from "./interface";

let worm: WormType[] = [
  {
    name: "Monkey",
    pos: { x: 12, y: 10 },
    degree: 10,
    size: 7,
    accel: 1,
    h_color: "h color",
    b_color: "b color",
    body: [],
  },
];
export function gameLoop() {
  console.log("loop");
  return false;
}
export function initGame() {
  return createGameState(worm);
}
function createGameState(Players: WormType[]) {
  let state: State = {
    players: [],
    food: [],
  };
  for (let i = 0; i < Players.length; i++) {
    state.players.push(createWorm(Players[i]));
  }
  return state;
}
