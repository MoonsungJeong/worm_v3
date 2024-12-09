import { State } from "../types/interface.js";
import { getCONTROL } from "../network/global.js";

export function gameLoop(gameState: State) {
  // return True -> Game end
  gameState.players[0].move();
  gameState.players[0].updatePos();
  gameState.players[0].clickBtn(getCONTROL().DOWN);
  gameState.players[0].unclickBtn(getCONTROL().UP);
  gameState.players[0].updateDegree();
  gameState.players[0].updateVel();
  return false;
}
