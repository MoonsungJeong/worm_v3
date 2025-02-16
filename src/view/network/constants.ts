import { ItemConfig } from "../types/type.js";
// file for game variables and constants
export const portNumber: number = 3001;
export const intervalGame: number = 20; // 0.020
export const intervalObject: number = 1000; // 1
export const gameSize: number = 500;
export const scale: number = 7;
export const renderedSize: number = gameSize * scale; // 3500 = 500 * 7

export const movementStep = 0.4; // Quantization Unit

export const grid: ItemConfig = {
  flag: true,
  size: 50,
  color: "#bbb",
};
export const apple: ItemConfig = {
  flag: false,
  size: 10,
  color: "#ff0000",
};

export const poison: ItemConfig = {
  flag: false,
  size: 20,
  color: "#800080",
};
