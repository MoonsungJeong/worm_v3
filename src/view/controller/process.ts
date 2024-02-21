import { State } from "../types/interface.js";
export function gameLoop(gameState: State) {
  //console.log("loop");
  gameState.players[0].getName();
  return false;
}
