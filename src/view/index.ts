import { StateObject } from "./types/interface.js";
import { initSocket, initUserControl } from "./view.js";
import { paintGame } from "./render.js";
import { setSTATE, getSTATE } from "./network/global.js";
import { initGame } from "./model/init.js";
import { gameLoop } from "./controller/process.js";
import { intervalTime } from "./network/constants.js";
import { createTimeManager } from "./lib/time.js";
// ClientSide initialize
initSocket();
initUserControl();

// ServerSide initialize
const state: StateObject = {};
const time = createTimeManager(1000);
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
  // creat new Apple every 1 second
  if (time.canCreate()) {
    state["rand123"].addApple();
    state["rand123"].addPosion();
  }
  time.debug();
  //@@@ ClientSide
  paintGame(getSTATE());
}, intervalTime);
