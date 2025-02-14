import { Key, Position, Direction } from "./type";

interface WormShape {
  name: string;
  pos: Position;
  direction: Direction;
  degree: number;
  size: number;
  color: string;
  accel: 1 | 2;
  vel: Position = { x: 0.4, y: 0 };
  headColor: string;
  bodyColor: string;
  body: Position[];

  // Methods
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
  players: WormShape[];
  apple: Position[];
  poison: Position[];
  addApple: () => void;
  addPoison: () => void;
}
interface StateObject {
  [key: string]: State;
}
interface CreationManager {
  canCreate(): boolean;
  debug(): void;
}
export { WormShape, State, StateObject, CreationManager };
