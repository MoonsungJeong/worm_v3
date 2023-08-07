import { Position } from "./type";
interface WormShape {
  getName: () => string;
  updateVel: (VEL: Position) => void;
  updatePos: () => void;
  move: () => void;
  getBody: () => Position[];
}
interface State {
  players: WormShape[];
  food: Position[];
}
export { WormShape, State };
