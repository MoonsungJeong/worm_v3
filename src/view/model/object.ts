import { Key, WormType, Position, Direction } from "../types/type";
import { WormShape, State } from "../types/interface";
import * as NUM from "../lib/mathutils.js";
import { gameSize } from "../network/constants.js";
export { createWorm, createGameState };
function createGameState(players: WormType[]): State {
  const getRandomPosition = (): Position => ({
    x: NUM.getRandomInt(1, gameSize),
    y: NUM.getRandomInt(1, gameSize),
  });

  return {
    players: players.map((player): WormShape => createWorm(player)),
    apple: [] as Position[],
    poison: [] as Position[],
    addApple() {
      this.apple.push(getRandomPosition());
    },
    addPoison() {
      this.poison.push(getRandomPosition());
    },
  } as State;
}
// ##########################
// #### Factory Function ####
// ##########################
function createWorm(player: WormType): WormShape {
  //@@@@let click: boolean = worm.click;
  // Initialize worm body
  for (var i = 1; i < 21; i = i + 1) {
    player.body.unshift({
      x: Number((player.pos.x - i * 0.4).toFixed(1)),
      y: player.pos.y,
    });
  }
  let WORM: WormShape = {
    name: player.name as string,
    pos: player.pos as Position,
    //click: click,
    direction: player.direction as Direction,
    degree: player.degree as number,
    size: player.size as number,
    color: player.color as string,
    accel: player.accel as 1 | 2,
    vel: player.vel as Position,
    headColor: player.headColor as string,
    bodyColor: player.bodyColor as string,
    body: player.body as Position[],
    getName: () => {
      if (false) {
        console.log(WORM.pos);
        console.log(WORM.degree);
        console.log(WORM.size);
        console.log(WORM.accel);
        console.log(WORM.vel);
        console.log(WORM.headColor);
        console.log(WORM.bodyColor);
        console.log(WORM.body);
      }
      return WORM.name;
    },
    updateVel: () => {
      WORM.vel = {
        x: WORM.accel * 0.4 * Math.cos(NUM.toRadians(WORM.degree)),
        y: WORM.accel * 0.4 * Math.sin(NUM.toRadians(WORM.degree)),
      };
    },
    clickBtn: (DOWN: Key) => {
      //console.log("Click: " + DOWN?.key);
      switch (DOWN?.key) {
        case "ArrowLeft": {
          //console.log(e.key);
          WORM.direction.left = true;
          break;
        }
        case "ArrowRight": {
          //console.log(e.key);
          WORM.direction.right = true;
          break;
        }
        case "ArrowUp": {
          //console.log(e.key);
          WORM.direction.up = true;
          break;
        }
      }
    },
    unclickBtn: (UP: Key) => {
      //console.log("UnClick: " + UP?.key);
      switch (UP?.key) {
        case "ArrowLeft":
          WORM.direction.left = false;
          break;
        case "ArrowRight":
          WORM.direction.right = false;
          break;
        case "ArrowUp":
          WORM.direction.up = false;
          break;
      }
    },
    updateDegree: () => {
      //console.log("update degree" + direction.right);
      if (WORM.direction.right) {
        WORM.degree += 2;
      } else if (WORM.direction.left) {
        WORM.degree -= 2;
      }
      //console.log(degree);
      if (WORM.direction.up) {
        // speed * 2
      } else if (!WORM.direction.up) {
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
  let headColor: string = worm.headColor;
  let bodyColor: string = worm.bodyColor;
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
      console.log(headColor);
      console.log(bodyColor);
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
