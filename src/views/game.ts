import { /* createWorm */ createWormTMP } from "./worm.js";
import { WormType } from "./types/type.js";
import { State } from "./types/interface.js";

let worm: WormType[] = [
  {
    name: "Monkey",
    pos: { x: 12, y: 10 },
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
export function gameLoop(gameState: State) {
  //console.log("loop");
  gameState.players[0].getName();
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
    state.players.push(createWormTMP(Players[i]));
  }
  return state;
}
