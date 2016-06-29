import { put } from "redux-saga/effects";
import KintoClient from "kinto-http";

import { resultsLoaded } from "../actions/charts";


export function* resultsLoad(getState, action) {
  const {poll} = action;
  const {server, bucket, collection} = poll;

  const client = new KintoClient(server);
  const result = yield client.bucket(bucket)
                             .collection(collection)
                             .listRecords();
  yield put(resultsLoaded(result.data));
}
