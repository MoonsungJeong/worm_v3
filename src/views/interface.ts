import { Position } from "./type";
interface WormShape {
  getName: () => string;
  getBody: () => Position[];
}
interface State {
  players: WormShape[];
  food: Position[];
}
export { WormShape, State };
