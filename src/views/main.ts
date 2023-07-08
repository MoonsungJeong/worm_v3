import { mo } from "./module.js";
function greet(name: string) {
  console.log(mo("Tom"));
  console.log(`Hello, ${name}!`);
}

greet("John");
