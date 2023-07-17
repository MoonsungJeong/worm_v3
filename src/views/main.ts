import { GameStart } from "./index.js";

function greet() {
  var el = GameStart("start");

  return el;
}

var worm = greet();
console.log(worm.getName());
