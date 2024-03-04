import { Position, DirectionClick } from "./type";
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
  //click: boolean;
  direction: DirectionClick;
  degree: number;
  size: number;
  accel: 1 | 2;
  vel: Position;
  h_color: string;
  b_color: string;
  body: Position[];
  getName: () => string;
  updateVel: (VEL: Position) => void;
  clickBtn: (e: KeyboardEvent) => void;
  unclickBtn: (e: KeyboardEvent) => void;
  updateDegree: () => void;
  updatePos: () => boolean;
  move: () => boolean;
  getBody: () => Position[];
}
interface State {
  //players: WormShape[];
  players: WormShapeTMP[];
  food: Position[];
}
interface StateObject {
  [key: string]: State;
}
export { /* WormShape, */ WormShapeTMP, State, StateObject };
