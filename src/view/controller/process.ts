import { State } from "../types/interface.js";
import { getCONTROL } from "../network/global.js";

export function gameLoop(gameState: State) {
  const player = gameState.players[0];
  const control = getCONTROL();

  player.move();
  player.updatePos();
  player.clickBtn(control.down);
  player.unclickBtn(control.up);
  player.updateDegree();
  player.updateVel();
  player.newWormSize();

  return false;
}
