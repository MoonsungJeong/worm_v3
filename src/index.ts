import express from "express";

const app = express();

interface Params {
  a: number;
  b: number;
}
type Fn = () => void;
type Add = (x: Params) => number;

const addInterface: Add = (x) => {
  return x.a + x.b;
};

const add = (a: number, b?: number): number => {
  if (b) {
    return a + b;
  } else {
    return a;
  }
};

app.get("/", (req: any, res: any) => {
  add(1);
  addInterface({ a: 1, b: 2 });
  res.status(200).json("start NodeTS!!!~~~~");
});

app.listen(3001, () => {
  console.log("started");
});
