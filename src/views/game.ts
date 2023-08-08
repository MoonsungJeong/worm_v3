import { /* createWorm */ createWormTMP } from "./worm.js";
import { WormType } from "./type.js";
import { State } from "./interface";

let worm: WormType[] = [
  {
    name: "Monkey",
    pos: { x: 12, y: 10 },
    degree: 10,
    size: 7,
    accel: 1,
    vel: { x: 0.4, y: 0 },
    h_color: "h color",
    b_color: "b color",
    body: [],
  },
];
export function gameLoop(gameState: State) {
  console.log("loop");
  gameState.players[0].getName();
  return false;
}
export function initGame() {
  return createGameState(worm);
}
//export function changeVelocity(e: KeyboardEvent) {
//  switch (e.key) {
//    case "ArrowLeft": {
//      // left
//      return { x: -0.4, y: 0 };
//    }
//    case "ArrowDown": {
//      // down
//      return { x: 0, y: -0.4 };
//    }
//    case "ArrowRight": {
//      // right
//      return { x: 0.4, y: 0 };
//    }
//    case "ArrowUp":
//      {
//        // up
//        return { x: 0, y: 0.4 };
//      }
//  }
//  return false;
//}
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
