import { Key } from "../types/type.js";
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

export let STATE: String;
export function setSTATE(newValue: String) {
  STATE = newValue;
}
export function getSTATE(): String {
  return STATE;
}
