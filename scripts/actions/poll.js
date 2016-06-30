import {
  POLL_CREATE,
  POLL_CREATED,
  POLL_INIT,
  VOTE_SUBMIT
} from "../constants";


export function createPoll(server, bucket) {
  return {type: POLL_CREATE, info: {server, bucket}};
}

export function pollCreated(server, bucket, collection) {
  return {type: POLL_CREATED, poll: {server, bucket, collection}};
}

export function pollInit(server, bucket, collection) {
  return {type: POLL_INIT, poll: {server, bucket, collection}};
}

export function submitVote(note) {
  return {type: VOTE_SUBMIT, note};
}
