import { Key, WormType, Position } from "../types/type";
import { WormShape, State } from "../types/interface";
import * as NUM from "../lib/mathutils.js";
import { gameSize, movementStep } from "../network/constants.js";
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
  const {
    name,
    pos,
    direction,
    degree,
    size,
    color,
    accel,
    vel,
    headColor,
    bodyColor,
  } = player;

  // Initialize worm body
  const body: Position[] = Array.from({ length: 20 }, (_, i) => ({
    x: Number((pos.x - (i + 1) * movementStep).toFixed(1)),
    y: pos.y,
  }));

  const WORM: WormShape = {
    name,
    pos,
    direction,
    degree,
    size,
    color,
    accel,
    vel,
    headColor,
    bodyColor,
    body,

    getName: () => WORM.name,

    updateVel: () => {
      const radian = NUM.toRadians(WORM.degree);
      WORM.vel = {
        x: WORM.accel * movementStep * Math.cos(radian),
        y: WORM.accel * movementStep * Math.sin(radian),
      };
    },

    clickBtn: (DOWN: Key) => {
      if (!DOWN?.key) return;
      const actions: Record<string, () => void> = {
        ArrowLeft: () => (WORM.direction.left = true),
        ArrowRight: () => (WORM.direction.right = true),
        ArrowUp: () => (WORM.direction.up = true),
      };
      actions[DOWN.key]?.();
    },

    unclickBtn: (UP: Key) => {
      if (!UP?.key) return;
      const actions: Record<string, () => void> = {
        ArrowLeft: () => (WORM.direction.left = false),
        ArrowRight: () => (WORM.direction.right = false),
        ArrowUp: () => (WORM.direction.up = false),
      };
      actions[UP.key]?.();
    },

    updateDegree: () => {
      if (WORM.direction.right) WORM.degree += 2;
      if (WORM.direction.left) WORM.degree -= 2;
      if (WORM.direction.up) {
        /* speed * 2 */
      }
      if (!WORM.direction.up) {
        /* speed * 1 */
      }
    },

    updatePos: () => {
      WORM.pos.x += WORM.vel.x;
      WORM.pos.y += WORM.vel.y;
    },

    move: () => {
      WORM.body.push({ ...WORM.pos });
      WORM.body.shift();
    },

    getBody: () => WORM.body,
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
  for (var i = movementStep; i < 10; i = i + movementStep) {
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
