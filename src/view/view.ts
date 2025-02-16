import { setCONTROL } from "./network/global.js";

export function initSocket() {
  // Add socket here later
}

export function initUserControl() {
  document.addEventListener("keydown", handleKeyDown);
  document.addEventListener("keyup", handleKeyUp);
}

function handleKeyDown(e: KeyboardEvent) {
  setCONTROL({ up: undefined, down: e });
}

function handleKeyUp(e: KeyboardEvent) {
  setCONTROL({ up: e, down: undefined });
}
