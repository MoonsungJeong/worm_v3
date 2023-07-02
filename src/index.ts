import express from "express";

const app = express();

// type is for others (personal preference). 구조체??
type Params2 = {
  a: number;
  b: number;
};
// 그냥 함수
type Fn = () => void;

// 변수에 type 선언
const add = (a: number, b?: number): number => {
  if (b) {
    return a + b;
  } else {
    return a;
  }
};

// interface is for object (personal preference). Class??
interface Params {
  a: number;
  b: number;
}
// type을 이용한 함수 정의 + interface 이용
type Add = (x: Params) => number;

const addInterface: Add = (x) => {
  return x.a + x.b;
};

app.get("/", (req: any, res: any) => {
  console.log(add(1));
  console.log(addInterface({ a: 1, b: 2 }));
  res.status(200).json("start NodeTS!!!~~~~");
});

app.listen(3001, () => {
  console.log("started");
});
