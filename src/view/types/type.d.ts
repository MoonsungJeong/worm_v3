type Key = KeyboardEvent | null;

type KeyControl = {
  UP: Key;
  DOWN: Key;
};
type Position = {
  x: number;
  y: number;
};
type DirectionClick = {
  rightClick: boolean;
  leftClick: boolean;
  upClick: boolean;
};
type WormType = {
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
};
export { WormType, DirectionClick, Position, Key, KeyControl };
