import { WormType, WormBody } from "./type";
import { WormShape } from "./interface";

function createWorm(worm: WormType): WormShape {
  let name: string = worm.name;
  let pos: WormBody = worm.pos;
  let degree: number = worm.degree;
  let size: number = worm.size;
  let accel: 1 | 2 = worm.accel;
  let h_color: string = worm.h_color;
  let b_color: string = worm.b_color;
  let body: WormBody[] = worm.body;

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
    return name;
  }

  return { getName };
}
export { createWorm };
