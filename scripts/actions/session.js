import {
  SESSION_BUSY,
  SESSION_ERROR
} from "../constants";


export function sessionBusy(busy) {
  return {type: SESSION_BUSY, busy};
}

export function notifyError(error) {
  return {type: SESSION_ERROR, error};
}
