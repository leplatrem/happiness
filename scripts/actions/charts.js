import {
  RESULTS_LOAD,
  RESULTS_LOADED,
} from "../constants";


export function loadResults(server, bucket, collection) {
  return {type: RESULTS_LOAD, poll: {server, bucket, collection}};
}

export function resultsLoaded(records) {
  return {type: RESULTS_LOADED, records};
}
