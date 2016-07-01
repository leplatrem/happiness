import React from "react";
import { Route, IndexRoute } from "react-router";
import { push as updatePath } from "react-router-redux";
import App from "./containers/App";
import HomePage from "./containers/HomePage";
import PollPage from "./containers/PollPage";
import VotePage from "./containers/VotePage";
import ThanksPage from "./components/ThanksPage";
import ChartsPage from "./containers/ChartsPage";
import atob from "atob";

import * as pollActions from "./actions/poll";
import * as chartsActions from "./actions/charts";


function loadAction(store, actions) {
  return ({params}) => {
    const {payload} = params;
    if (payload) {
      try {
        const {server, bucket, collection} = JSON.parse(atob(payload));
        for(let action of actions) {
          store.dispatch(action(server, bucket, collection));
        }
      } catch(error) {
        console.error(error);
      }
    }
  };
}


function redirectAfter(store, timeout, destination) {
  return () => {
    setTimeout(() => {
      store.dispatch(updatePath(destination));
    }, timeout);
  };
}


export default function getRoutes(store) {
  return (
    <Route path="/" component={App}>
      <IndexRoute components={{content: HomePage}} />
      <Route path="/poll"
        components={{content: PollPage}} />
      <Route path="/vote(/:payload)"
        components={{content: VotePage}}
        onEnter={loadAction(store, [pollActions.pollLoad])} />
      <Route path="/charts/:payload"
        components={{content: ChartsPage}}
        onEnter={loadAction(store, [pollActions.pollLoad, chartsActions.loadResults])} />
      <Route path="/thanks"
        components={{content: ThanksPage}}
        onEnter={redirectAfter(store, 5000, "/vote")} />
      <Route path="*" components={{content: _ => <h1>Page not found.</h1>}}/>
    </Route>
  );
}
