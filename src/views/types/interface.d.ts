import { Position } from "./type";
/* interface WormShape {
  getName: () => string;
  updateVel: (VEL: Position) => void;
  updatePos: () => boolean;
  move: () => boolean;
  getBody: () => Position[];
} */
interface WormShapeTMP {
  name: string;
  pos: Position;
  degree: number;
  size: number;
  accel: 1 | 2;
  vel: Position;
  h_color: string;
  b_color: string;
  body: Position[];
  getName: () => string;
  updateVel: (VEL: Position) => void;
  updateDegree: (e: KeyboardEvent) => void;
  updatePos: () => boolean;
  move: () => boolean;
  getBody: () => Position[];
}
interface State {
  //players: WormShape[];
  players: WormShapeTMP[];
  food: Position[];
}
export { /* WormShape, */ WormShapeTMP, State };
