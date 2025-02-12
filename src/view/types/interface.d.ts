import { Key, Position, DirectionClick } from "./type";
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
  color: string;
  accel: 1 | 2;
  vel: Position = { x: 0.4, y: 0 };
  h_color: string;
  b_color: string;
  body: Position[];
  getName: () => string;
  updateVel: () => void;
  clickBtn: (DOWN: Key) => void;
  unclickBtn: (UP: Key) => void;
  updateDegree: () => void;
  updatePos: () => boolean;
  move: () => boolean;
  getBody: () => Position[];
}
interface State {
  //players: WormShape[];
  players: WormShapeTMP[];
  apple: Position[];
  poison: Position[];
  addApple: () => void;
  addPosion: () => void;
}
interface StateObject {
  [key: string]: State;
}
interface CreationManager {
  canCreate(): boolean;
  debug(): void;
}
export { /* WormShape, */ WormShapeTMP, State, StateObject, CreationManager };
