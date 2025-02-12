import { KeyControl } from "../types/type.js";
import { State } from "../types/interface.js";

export let CONTROL: KeyControl = { up: undefined, down: undefined };
export function setCONTROL(newValue: KeyControl) {
  CONTROL = newValue;
}
export function getCONTROL(): KeyControl {
  return CONTROL;
}

export let STATE: State;
export function setSTATE(newValue: State) {
  STATE = newValue;
}
export function getSTATE(): State {
  return STATE;
}
