type Position = {
  x: number;
  y: number;
};
type WormType = {
  name: string;
  pos: Position;
  degree: number;
  size: number;
  accel: 1 | 2;
  vel: Position;
  h_color: string;
  b_color: string;
  body: Position[];
};
export { WormType, Position };
