import { WormType, Position } from "./type";
import { WormShape } from "./interface";

function createWorm(worm: WormType): WormShape {
  let name: string = worm.name;
  let pos: Position = worm.pos;
  let degree: number = worm.degree;
  let size: number = worm.size;
  let accel: 1 | 2 = worm.accel;
  let vel: Position = worm.vel; // TEMP
  let h_color: string = worm.h_color;
  let b_color: string = worm.b_color;
  let body: Position[] = worm.body;
  for (var i = 0.4; i < 10; i = i + 0.4) {
    body.unshift({ x: Number((pos.x - i).toFixed(1)), y: pos.y });
  }
  function getName() {
    if (false) {
      console.log(pos);
      console.log(degree);
      console.log(size);
      console.log(accel);
      console.log(vel);
      console.log(h_color);
      console.log(b_color);
      console.log(body);
    }
    console.log("---------------------------");
    console.log("Vel");
    console.log(vel);
    console.log("Pos");
    console.log(pos);
    console.log("Body");
    console.log(body);
    return name;
  }
  function updateVel(VEL: Position) {
    vel = VEL;
  }
  function updatePos() {
    pos.x += vel.x;
    pos.y += vel.y;
    return 0;
  }
  function move() {
    body.push(pos);
    body.shift();
    return 0;
  }
  function getBody() {
    return body;
  }
  return { getName, updateVel, updatePos, move, getBody };
}
export { createWorm };
