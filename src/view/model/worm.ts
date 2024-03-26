import { Key, WormType, Position, DirectionClick } from "../types/type";
import { /* WormShape */ WormShapeTMP } from "../types/interface";
export { createWormTMP };
// ##########################
// #### Factory Function ####
// ##########################
function createWormTMP(worm: WormType): WormShapeTMP {
  let name: string = worm.name;
  let pos: Position = worm.pos;
  //let click: boolean = worm.click;
  let direction: DirectionClick = worm.direction;
  let degree: number = worm.degree;
  let size: number = worm.size;
  let accel: 1 | 2 = worm.accel;
  let vel: Position = worm.vel; // TEMP
  let h_color: string = worm.h_color;
  let b_color: string = worm.b_color;
  let body: Position[] = worm.body;
  for (var i = 1; i < 21; i = i + 1) {
    body.unshift({ x: Number((pos.x - i * 0.4).toFixed(1)), y: pos.y });
  }
  return {
    name: name,
    pos: pos,
    //click: click,
    direction: direction,
    degree: degree,
    size: size,
    accel: accel,
    vel: vel,
    h_color: h_color,
    b_color: b_color,
    body: body,
    getName: () => {
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
      return name;
    },
    updateVel: (VEL: Position) => {
      vel = VEL;
      vel = {
        x: accel * 0.4 * Math.cos(toRadians(degree)),
        y: accel * 0.4 * Math.sin(toRadians(degree)),
      };
    },
    clickBtn: (DOWN: Key) => {
      console.log("Click: " + DOWN?.key);
      switch (DOWN?.key) {
        case "ArrowLeft": {
          //console.log(e.key);
          direction.leftClick = true;
          break;
        }
        case "ArrowRight": {
          //console.log(e.key);
          direction.rightClick = true;
          break;
        }
        case "ArrowUp": {
          //console.log(e.key);
          direction.upClick = true;
          break;
        }
      }
    },
    //clickBtn: (e: KeyboardEvent) => {
    //  console.log("Click: " + e.key);
    //  switch (e.key) {
    //    case "ArrowLeft": {
    //      //console.log(e.key);
    //      direction.leftClick = true;
    //      break;
    //    }
    //    case "ArrowRight": {
    //      //console.log(e.key);
    //      direction.rightClick = true;
    //      break;
    //    }
    //    case "ArrowUp": {
    //      //console.log(e.key);
    //      direction.upClick = true;
    //      break;
    //    }
    //  }
    //},
    unclickBtn: (UP: Key) => {
      console.log("UnClick: " + UP?.key);
      switch (UP?.key) {
        case "ArrowLeft":
          direction.leftClick = false;
          break;
        case "ArrowRight":
          direction.rightClick = false;
          break;
        case "ArrowUp":
          direction.upClick = false;
          break;
      }
    },
    updateDegree: () => {
      //console.log("update degree" + direction.rightClick);
      if (direction.rightClick) {
        degree += 2;
      } else if (direction.leftClick) {
        degree -= 2;
      }
      console.log(degree);
      if (direction.upClick) {
        // speed * 2
      } else if (!direction.upClick) {
        // speed * 1
      }
    },
    updatePos: () => {
      pos.x += vel.x;
      pos.y += vel.y;
      return false;
    },
    move: () => {
      body.push({ ...pos });
      body.shift();
      return false;
    },
    getBody: () => {
      return body;
    },
  };
}
function toRadians(deg: number) {
  return deg * (Math.PI / 180);
}
// ##########################
// #### Closure          ####
// ##########################
/* function createWorm(worm: WormType): WormShape {
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
    //console.log(body);
    return name;
  }
  function updateVel(VEL: Position) {
    vel = VEL;
  }
  function updatePos() {
    pos.x += vel.x;
    pos.y += vel.y;
    return false;
  }
  function move() {
    body.push(pos);
    body.shift();
    return false;
  }
  function getBody() {
    return body;
  }
  return { getName, updateVel, updatePos, move, getBody };
} */
