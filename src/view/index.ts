import { StateObject } from "./types/interface.js";
import { initScreen, initUserControl } from "./view.js";
import {} from "./render.js";
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
  const winner: Boolean = gameLoop(state["rand123"]);

  if (!winner) {
    // transmit gameState
  } else {
    // game end
    clearInterval(gameInterval);
  }
});
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
