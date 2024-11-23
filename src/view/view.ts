import { setCONTROL } from "./network/global.js";
import { KeyControl } from "./types/type.js";

export function initSocket() {
  // Add socket here later
}
export function initUserControl() {
  document.addEventListener("keydown", (e) => {
    const DOWN: KeyControl = { UP: null, DOWN: e };
    setCONTROL(DOWN);
  });
  document.addEventListener("keyup", (e) => {
    const UP: KeyControl = { UP: e, DOWN: null };
    setCONTROL(UP);
  });
}
