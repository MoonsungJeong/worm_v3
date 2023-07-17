type WormBody = {
  x: number;
  y: number;
};
type WormType = {
  name: string;
  hX: number;
  hY: number;
  degree: number;
  size: number;
  accel: 1 | 2;
  h_color: string;
  b_color: string;
  body: WormBody[];
};
export { WormType, WormBody };
