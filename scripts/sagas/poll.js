import { push as updatePath } from "react-router-redux";
import { put } from "redux-saga/effects";
import btoa from "btoa";
import KintoClient from "kinto-http";

import { sessionBusy, notifyError } from "../actions/session";
import { pollCreated, pollLoaded } from "../actions/poll";


const headers = {Authorization: "Basic " + btoa(`token:${Math.random()}`)};


function* createBucket(client, bucket) {
  try {
    // Create the bucket in case it doesn't exist.
    const permissions = {"collection:create": ["system.Authenticated"]};
    yield client.createBucket(bucket, {headers, permissions, safe: true});
  } catch(e) {
    // Ignore error if it already exists (created by someone else).
    if (!/HTTP 403/.test(e.message)) {
      throw e;
    }
  }
}

function* createCollection(client, bucket, title) {
  const data = {title};
  const permissions = {"read": ["system.Everyone"], "record:create": ["system.Everyone"]};
  const result = yield client.bucket(bucket)
                             .createCollection(undefined, {headers, data, permissions});
  const collection = result.data.id;
  return collection;
}


export function* pollCreate(getState, action) {
  const {info} = action;
  const {title, server, bucket} = info;
  yield put(sessionBusy(true));
  try {
    const client = new KintoClient(server);
    yield createBucket(client, bucket);
    const collection = yield createCollection(client, bucket, title);
    yield put(pollCreated(title, server, bucket, collection));
    yield put(updatePath("/poll"));
  } catch (e) {
    yield put(notifyError(e));
  }
  yield put(sessionBusy(false));
}


export function* pollLoad(getState, action) {
  const {info} = action;
  const {server, bucket, collection} = info;
  yield put(sessionBusy(true));
  try {
    const client = new KintoClient(server);
    const {title} = yield client.bucket(bucket).collection(collection).getData();
    yield put(pollLoaded(title, server, bucket, collection));
  } catch(e) {
    yield put(notifyError(e));
  }
  yield put(sessionBusy(false));
}


export function* voteSubmit(getState, action) {
  const {note} = action;
  const record = {note, submitted: new Date().toISOString()};
  const {poll: pollState} = getState();
  const {server, bucket, collection} = pollState.poll;
  yield put(sessionBusy(true));
  try {
    const client = new KintoClient(server);
    yield client.bucket(bucket)
                .collection(collection)
                .createRecord(record);
    yield put(updatePath("/thanks"));
  } catch(e) {
    yield put(notifyError(e));
  }
  yield put(sessionBusy(false));
}
