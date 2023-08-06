import { WormType, Position } from "./type";
import { WormShape } from "./interface";

function createWorm(worm: WormType): WormShape {
  let name: string = worm.name;
  let pos: Position = worm.pos;
  let degree: number = worm.degree;
  let size: number = worm.size;
  let accel: 1 | 2 = worm.accel;
  let h_color: string = worm.h_color;
  let b_color: string = worm.b_color;
  let body: Position[] = worm.body;
  for (var i = 0.4; i < 10; i = i + 0.4) {
    body.unshift({ x: Number((pos.x + i).toFixed(1)), y: pos.y });
  }
  function getName() {
    if (false) {
      console.log(pos);
      console.log(degree);
      console.log(size);
      console.log(accel);
      console.log(h_color);
      console.log(b_color);
      console.log(body);
    }
    console.log(body);
    return name;
  }
  function getBody() {
    return body;
  }
  return { getName, getBody };
}
export { createWorm };
