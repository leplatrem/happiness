import { call } from "redux-saga/effects";


export function* routeUpdated(getState, action) {
  // Side effect: scroll to page top on each route change
  yield call([window, window.scrollTo], 0, 0);
}
