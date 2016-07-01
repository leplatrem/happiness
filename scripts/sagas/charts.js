import { put } from "redux-saga/effects";
import KintoClient from "kinto-http";

import { resultsLoaded } from "../actions/charts";
import { sessionBusy, notifyError } from "../actions/session";


export function* resultsLoad(getState, action) {
  const {poll} = action;
  const {server, bucket, collection} = poll;
  yield put(sessionBusy(true));
  try {
    const client = new KintoClient(server);
    const {data} = yield client.bucket(bucket)
                               .collection(collection)
                               .listRecords();
    yield put(resultsLoaded(data));
  } catch(e) {
    yield put(notifyError(e));
  }
  yield put(sessionBusy(false));
}
