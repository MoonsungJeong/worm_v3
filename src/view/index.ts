import { StateObject } from "./types/interface.js";
import { initScreen, initUserControl } from "./view.js";
import { setSTATE, getSTATE } from "./network/global.js";
import { paintGame } from "./render.js";
import { initGame } from "./model/init.js";
import { gameLoop } from "./controller/process.js";
// ClientSide initialize
initScreen();
initUserControl();
// ServerSide initialize
const state: StateObject = {};
state["rand123"] = initGame();
//
//Process
const gameInterval = setInterval(() => {
  //@@@ ServerSide
  const winner: Boolean = gameLoop(state["rand123"]);
  if (!winner) {
    // transmit gameState
    setSTATE(state["rand123"]);
  } else {
    // game end
    clearInterval(gameInterval);
  }
  //@@@ ClientSide
  paintGame(getSTATE());
}, 1000 / 50);
