import {
  RESULTS_LOADED
} from "../constants";


const INITIAL_STATE = {
};

export default function charts(state=INITIAL_STATE, action) {
  switch(action.type) {
    case RESULTS_LOADED: {
      const {records} = action;
      return {...state, records};
    }
    default: {
      return state;
    }
  }
}
