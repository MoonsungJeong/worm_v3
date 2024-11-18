import { /* createWorm */ createWormTMP } from "./worm.js";
import { WormType } from "../types/type.js";
import { State } from "../types/interface.js";
export function initGame() {
  return createGameState(worm);
}
let worm: WormType[] = [
  {
    name: "Monkey",
    pos: { x: 10, y: 10 },
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
function createGameState(Players: WormType[]) {
  let state: State = {
    players: [],
    food: [],
  };
  for (let i = 0; i < Players.length; i++) {
    state.players.push(createWormTMP(Players[i]));
  }
  return state;
}
