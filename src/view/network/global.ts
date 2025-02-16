import { KeyControl } from "../types/type.js";
import { State } from "../types/interface.js";

export let CONTROL: KeyControl = { up: undefined, down: undefined };
export let STATE: State;

export const setCONTROL = (newValue: KeyControl) => {
  CONTROL = newValue;
};

export const getCONTROL = (): KeyControl => CONTROL;

export const setSTATE = (newValue: State) => {
  STATE = newValue;
};

export const getSTATE = (): State => STATE;
