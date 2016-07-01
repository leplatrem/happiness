import {
  SESSION_BUSY,
  SESSION_ERROR
} from "../constants";


const INITIAL_STATE = {
};

export default function session(state=INITIAL_STATE, action) {
  switch(action.type) {
    case SESSION_BUSY: {
      const {busy} = action;
      let {error} = state;
      if (busy) {
        error = null;
      }
      return {...state, error, busy};
    }
    case SESSION_ERROR: {
      const {error} = action;
      return {...state, error};
    }
    default: {
      return state;
    }
  }
}
