"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const addInterface = (x) => {
  return x.a + x.b;
};
const add = (a, b) => {
  if (b) {
    return a + b;
  } else {
    return a;
  }
};
app.get("/", (req, res) => {
  add(1);
  addInterface({ a: 1, b: 2 });
  res.status(200).json("Start NodeTS!!!~~~~");
});
app.listen(3001, () => {
  console.log("started");
});
