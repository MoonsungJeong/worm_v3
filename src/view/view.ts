import { initScreen } from "./index.js";
import { myGlobalVariable, updateMyGlobalVariable } from "./network/global.js";
import { test } from "./model/init.js";
initScreen();
setTimeout(() => {
  updateMyGlobalVariable("first");
  console.log(myGlobalVariable);
}, 1000);
setTimeout(() => {
  console.log("Second");
  test();
}, 2000);
setTimeout(() => {
  console.log("Third");
  console.log(myGlobalVariable);
}, 3000);
