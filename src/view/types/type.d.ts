type Key = KeyboardEvent | undefined;

type KeyControl = {
  up: Key;
  down: Key;
};

type Position = {
  x: number;
  y: number;
};

type Direction = {
  right: boolean;
  left: boolean;
  up: boolean;
};

type WormType = {
  name: string;
  pos: Position;
  direction: Direction;
  degree: number;
  size: number;
  color: string;
  accel: 1 | 2;
  vel: Position;
  headColor: string;
  bodyColor: string;
  body: Position[];
};

export { WormType, Direction, Position, Key, KeyControl };
