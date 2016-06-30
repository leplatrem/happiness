import {
  RESULTS_LOADED
} from "../constants";


const INITIAL_STATE = {
  records: []
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

export function getAccumulatedVotes(state) {
  const {records} = state;

  const allDays = [];
  const byDays = {1: {}, 5: {}, 10: {}};
  records.forEach((r) => {
    const date = new Date(r.submitted);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const key = `${month < 10 ? "0" + month : month}-${day < 10 ? "0" + day : day}`;
    if (allDays.indexOf(key) < 0) {
      allDays.push(key);
    }
    byDays[r.note][key] = (byDays[r.note][key] || 0) + 1;
  });

  const sortedDays = allDays.sort();

  const accumulated = {
    labels: sortedDays,
    series: [
      sortedDays.map((d) => (byDays[1][d] || 0)),
      sortedDays.map((d) => (byDays[5][d] || 0)),
      sortedDays.map((d) => (byDays[10][d] || 0)),
    ]
  };
  return {
    total: records.length,
    chartsData: accumulated
  };
}
