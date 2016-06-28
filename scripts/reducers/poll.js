import {
  POLL_CREATED,
  POLL_INIT,
  VOTE_SUBMITTED,
} from "../constants";


const INITIAL_STATE = {
};

export default function poll(state=INITIAL_STATE, action) {
  switch(action.type) {
    case POLL_CREATED: {
      const {poll} = action;
      return {...state, poll};
    }
    case POLL_INIT: {
      const {poll} = action;
      return {...state, poll};
    }
    case VOTE_SUBMITTED: {
      const {note} = action;
      return {...state, note};
    }
    default: {
      return state;
    }
  }
}
