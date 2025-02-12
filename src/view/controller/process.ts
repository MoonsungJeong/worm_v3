import { State } from "../types/interface.js";
import { getCONTROL } from "../network/global.js";

export function gameLoop(gameState: State) {
  // return True -> Game end
  gameState.players[0].move();
  gameState.players[0].updatePos();
  gameState.players[0].clickBtn(getCONTROL().down);
  gameState.players[0].unclickBtn(getCONTROL().up);
  gameState.players[0].updateDegree();
  gameState.players[0].updateVel();
  return false;
}
