import { push as updatePath } from "react-router-redux";
import { put } from "redux-saga/effects";
import btoa from "btoa";
import KintoClient from "kinto-http";

import { voteSubmitted, pollCreated } from "../actions/poll";


function* createBucket(client, bucket) {
  try {
    // Create the bucket in case it doesn't exist.
    const permissions = {"collection:create": ["system.Everyone"]};
    const headers = {Authorization: "Basic " + btoa(`token:${Math.random()}`)};
    yield client.createBucket(bucket, {headers, permissions, safe: true});
  } catch(e) {
    // Ignore error if it already exists (created by someone else).
    if (!/HTTP 403/.test(e.message)) {
      throw e;
    }
  }
}

export function* pollCreate(getState, action) {
  const {info} = action;
  const {server, bucket} = info;
  const client = new KintoClient(server);

  yield createBucket(client, bucket);

  const permissions = {"read": ["system.Everyone"], "record:create": ["system.Everyone"]};
  const result = yield client.bucket(bucket)
                             .createCollection(undefined, {permissions});
  const collection = result.data.id;
  yield put(pollCreated(server, bucket, collection));
  yield put(updatePath("/poll"));
}


export function* voteSubmit(getState, action) {
  const {note} = action;
  const record = {note, submitted: new Date().toISOString()};

  const {poll: pollState} = getState();
  const {server, bucket, collection} = pollState.poll;
  const client = new KintoClient(server);
  yield client.bucket(bucket)
              .collection(collection)
              .createRecord(record);
  yield put(voteSubmitted(note));
  yield put(updatePath("/thanks"));
}
