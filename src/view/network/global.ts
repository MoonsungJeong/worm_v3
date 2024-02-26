import { Key } from "../types/type.js";
import { State } from "../types/interface.js";
//export let myGlobalVariable = "값";
//
//export function updateMyGlobalVariable(newValue: string) {
//  myGlobalVariable = newValue;
//}

export let CONTROL: Key;
export function setCONTROL(newValue: Key) {
  CONTROL = newValue;
}
export function getCONTROL(): Key {
  return CONTROL;
}

export let STATE: State;
export function setSTATE(newValue: State) {
  STATE = newValue;
}
export function getSTATE(): State {
  return STATE;
}
