export let myGlobalVariable = "값";

export function updateMyGlobalVariable(newValue: string) {
  myGlobalVariable = newValue;
}

export let CONTROL: KeyboardEvent;
export function setCONTROL(newValue: KeyboardEvent) {
  CONTROL = newValue;
}
export function getCONTROL(): KeyboardEvent {
  return CONTROL;
}

export let STATE: String;
export function setSTATE(newValue: String) {
  STATE = newValue;
}
export function getSTATE(): String {
  return STATE;
}
