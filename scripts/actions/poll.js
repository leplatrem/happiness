import {
  POLL_CREATE,
  POLL_CREATED,
  POLL_LOAD,
  POLL_LOADED,
  VOTE_SUBMIT
} from "../constants";


export function createPoll(title, server, bucket) {
  return {type: POLL_CREATE, info: {title, server, bucket}};
}

export function pollCreated(title, server, bucket, collection) {
  return {type: POLL_CREATED, poll: {title, server, bucket, collection}};
}

export function pollLoad(server, bucket, collection) {
  return {type: POLL_LOAD, info: {server, bucket, collection}};
}

export function pollLoaded(title, server, bucket, collection) {
  return {type: POLL_LOADED, poll: {title, server, bucket, collection}};
}

export function submitVote(note) {
  return {type: VOTE_SUBMIT, note};
}
