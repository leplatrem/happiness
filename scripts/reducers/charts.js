import {
  UNHAPPY,
  NEUTRAL,
  HAPPY,
  POLL_LOADED,
  RESULTS_LOADED
} from "../constants";


const INITIAL_STATE = {
  poll: {},
  records: []
};

export default function charts(state=INITIAL_STATE, action) {
  switch(action.type) {
    case POLL_LOADED: {
      const {poll} = action;
      return {...state, poll};
    }
    case RESULTS_LOADED: {
      const {records} = action;
      return {...state, records};
    }
    default: {
      return state;
    }
  }
}

export function getAccumulatedVotes(state) {
  const {records} = state;

  const allDays = [];
  const byDays = {[UNHAPPY]: {}, [NEUTRAL]: {}, [HAPPY]: {}};
  records.forEach((r) => {
    const date = new Date(r.submitted);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const key = `${date.getFullYear()}/${month < 10 ? "0" + month : month}/${day < 10 ? "0" + day : day}`;
    if (allDays.indexOf(key) < 0) {
      allDays.push(key);
    }
    byDays[r.note][key] = (byDays[r.note][key] || 0) + 1;
  });

  const sortedDays = allDays.sort();

  const accumulated = {
    labels: sortedDays.map((d) => d.replace(/^\d{4}\//, "")),
    series: [
      sortedDays.map((d) => (byDays[UNHAPPY][d] || 0)),
      sortedDays.map((d) => (byDays[NEUTRAL][d] || 0)),
      sortedDays.map((d) => (byDays[HAPPY][d] || 0)),
    ]
  };
  return {
    total: records.length,
    chartsData: accumulated
  };
}
