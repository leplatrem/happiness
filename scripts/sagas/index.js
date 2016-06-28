import { takeEvery } from "redux-saga";

import * as c from "../constants";
import * as routeSagas from "./route";
import * as pollSagas from "./poll";
import * as chartsSagas from "./charts";


/**
 * @param {function} getState Function to obtain the current store state.
 */
export default function* rootSaga(getState) {
  yield [
    // route
    takeEvery(c.ROUTE_UPDATED, routeSagas.routeUpdated, getState),
    // poll
    takeEvery(c.POLL_CREATE, pollSagas.pollCreate, getState),
    takeEvery(c.VOTE_SUBMIT, pollSagas.voteSubmit, getState),
    // charts
    takeEvery(c.RESULTS_LOAD, chartsSagas.resultsLoad, getState),
  ];
}
