export function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// ex: const randomInt = getRandomInt(1, 3000);
