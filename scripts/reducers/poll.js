import {
  POLL_CREATED,
  POLL_LOADED
} from "../constants";


const INITIAL_STATE = {
};

export default function poll(state=INITIAL_STATE, action) {
  switch(action.type) {
    case POLL_CREATED: {
      const {poll} = action;
      return {...state, poll};
    }
    case POLL_LOADED: {
      const {poll} = action;
      return {...state, poll};
    }
    default: {
      return state;
    }
  }
}
