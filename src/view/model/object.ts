import { Key, WormType, Position, DirectionClick } from "../types/type";
import { /* WormShape */ WormShapeTMP, State } from "../types/interface";
import * as NUM from "../lib/mathutils.js";
//import { getRandomInt } from "../lib/mathUtils.js";
export { /* createWorm */ createWormTMP, createGameState };
function createGameState(Players: WormType[]) {
  let STATE: State = {
    players: [] as WormShapeTMP[],
    apple: [] as Position[],
    poison: [] as Position[],
    addApple: () => {
      STATE.apple.push({
        x: NUM.getRandomInt(1, 3000),
        y: NUM.getRandomInt(1, 3000),
      });
    },
    addPosion: () => {
      STATE.apple.push({
        x: NUM.getRandomInt(1, 3000),
        y: NUM.getRandomInt(1, 3000),
      });
    },
  };
  for (let i = 0; i < Players.length; i++) {
    STATE.players.push(createWormTMP(Players[i]));
  }
  return STATE;
}
// ##########################
// #### Factory Function ####
// ##########################
function createWormTMP(player: WormType): WormShapeTMP {
  //@@@@let click: boolean = worm.click;
  // Initialize worm body
  for (var i = 1; i < 21; i = i + 1) {
    player.body.unshift({
      x: Number((player.pos.x - i * 0.4).toFixed(1)),
      y: player.pos.y,
    });
  }
  let WORM: WormShapeTMP = {
    name: player.name as string,
    pos: player.pos as Position,
    //click: click,
    direction: player.direction as DirectionClick,
    degree: player.degree as number,
    size: player.size as number,
    accel: player.accel as 1 | 2,
    vel: player.vel as Position,
    h_color: player.h_color as string,
    b_color: player.b_color as string,
    body: player.body as Position[],
    getName: () => {
      if (false) {
        console.log(WORM.pos);
        console.log(WORM.degree);
        console.log(WORM.size);
        console.log(WORM.accel);
        console.log(WORM.vel);
        console.log(WORM.h_color);
        console.log(WORM.b_color);
        console.log(WORM.body);
      }
      return WORM.name;
    },
    updateVel: () => {
      WORM.vel = {
        x: WORM.accel * 0.4 * Math.cos(toRadians(WORM.degree)),
        y: WORM.accel * 0.4 * Math.sin(toRadians(WORM.degree)),
      };
    },
    clickBtn: (DOWN: Key) => {
      //console.log("Click: " + DOWN?.key);
      switch (DOWN?.key) {
        case "ArrowLeft": {
          //console.log(e.key);
          WORM.direction.leftClick = true;
          break;
        }
        case "ArrowRight": {
          //console.log(e.key);
          WORM.direction.rightClick = true;
          break;
        }
        case "ArrowUp": {
          //console.log(e.key);
          WORM.direction.upClick = true;
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
      //console.log("UnClick: " + UP?.key);
      switch (UP?.key) {
        case "ArrowLeft":
          WORM.direction.leftClick = false;
          break;
        case "ArrowRight":
          WORM.direction.rightClick = false;
          break;
        case "ArrowUp":
          WORM.direction.upClick = false;
          break;
      }
    },
    updateDegree: () => {
      //console.log("update degree" + direction.rightClick);
      if (WORM.direction.rightClick) {
        WORM.degree += 2;
      } else if (WORM.direction.leftClick) {
        WORM.degree -= 2;
      }
      //console.log(degree);
      if (WORM.direction.upClick) {
        // speed * 2
      } else if (!WORM.direction.upClick) {
        // speed * 1
      }
    },
    updatePos: () => {
      WORM.pos.x += WORM.vel.x;
      WORM.pos.y += WORM.vel.y;
      return false;
    },
    move: () => {
      WORM.body.push({ ...WORM.pos });
      WORM.body.shift();
      return false;
    },
    getBody: () => {
      return WORM.body;
    },
  };
  return WORM;
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
