import { setCONTROL } from "./network/global.js";
import { Key } from "./types/type.js";
export function initScreen() {
  let canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
  //let ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
  canvas.width = canvas.height = 600;
  canvas.style.border = "1px solid #000000";
}
export function initUserControl() {
  document.addEventListener("keydown", (e) => {
    const DOWN: Key = { UP: null, DOWN: e };
    setCONTROL(DOWN);
  });
  document.addEventListener("keyup", (e) => {
    const UP: Key = { UP: e, DOWN: null };
    setCONTROL(UP);
  });
}

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
