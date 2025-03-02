import { State } from "./types/interface.js";
import { initSocket, initUserControl } from "./view.js";
import { paintGame } from "./render.js";
import { setSTATE, getSTATE } from "./network/global.js";
import { initGame } from "./model/init.js";
import { gameLoop } from "./controller/process.js";
import {
  intervalGame,
  intervalObject,
  apple,
  poison,
} from "./network/constants.js";
import { createTimeManager } from "./lib/time.js";

// ClientSide initialize
initSocket();
initUserControl();

// ServerSide initialize
const state: Record<string, State> = {};
const time = createTimeManager(intervalObject);
state["rand123"] = initGame();

// Process
const gameInterval = setInterval(() => {
  //@@@ ServerSide
  const winner = gameLoop(state["rand123"]);

  if (winner) {
    // game end
    clearInterval(gameInterval);
    return;
  }
  // transmit gameState
  setSTATE(state["rand123"]);

  // creat new Apple every 1 second
  if (time.canCreate()) {
    if (apple.flag) state["rand123"].addApple();
    if (poison.flag) state["rand123"].addPoison();
  }

  //time.debug();
  //@@@ ClientSide
  paintGame(getSTATE());
}, intervalGame);
