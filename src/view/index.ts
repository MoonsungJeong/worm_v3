import { StateObject } from "./types/interface.js";
import { initScreen, initUserControl } from "./view.js";
import { setSTATE, getSTATE } from "./network/global.js";
import { paintGame } from "./render.js";
import { initGame } from "./model/init.js";
import { gameLoop } from "./controller/process.js";
initScreen();
initUserControl();
// initialize
const state: StateObject = {};
state["rand123"] = initGame();
//
//Process
const gameInterval = setInterval(() => {
  // Server
  const winner: Boolean = gameLoop(state["rand123"]);
  if (!winner) {
    // transmit gameState
    setSTATE(state["rand123"]);
  } else {
    // game end
    clearInterval(gameInterval);
  }
  // Browser
  paintGame(getSTATE());
}, 1000 / 50);
//import { myGlobalVariable, updateMyGlobalVariable } from "./network/global.js";
//import { test } from "./model/init.js";
//setTimeout(() => {
//  updateMyGlobalVariable("first");
//  console.log(myGlobalVariable);
//}, 1000);
//setTimeout(() => {
//  console.log("Second");
//  test();
//}, 2000);
//setTimeout(() => {
//  console.log("Third");
//  console.log(myGlobalVariable);
//}, 3000);
