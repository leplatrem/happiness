import React from "react";
import { Route, IndexRoute } from "react-router";
import App from "./containers/App";
import HomePage from "./containers/HomePage";
import PollPage from "./containers/PollPage";
import VotePage from "./containers/VotePage";
import ThanksPage from "./containers/ThanksPage";
import ChartsPage from "./containers/ChartsPage";
import atob from "atob";

import * as pollActions from "./actions/poll";
import * as chartsActions from "./actions/charts";


const common = {};


function onVoteEnter(store, {params}) {
  const {payload} = params;
  if (payload) {
    try {
      const {server, bucket, collection} = JSON.parse(atob(payload));
      store.dispatch(pollActions.pollInit(server, bucket, collection));
    } catch(error) {
      console.error(error);
    }
  }
}

function onChartsEnter(store, {params}) {
  const {payload} = params;
  if (payload) {
    try {
      const {server, bucket, collection} = JSON.parse(atob(payload));
      store.dispatch(chartsActions.loadResults(server, bucket, collection));
    } catch(error) {
      console.error(error);
    }
  }
}


export default function getRoutes(store) {
  return (
    <Route path="/" component={App}>
      <IndexRoute components={{...common, content: HomePage}} />
      <Route path="/poll"
        components={{...common, content: PollPage}} />
      <Route path="/vote/:payload"
        components={{...common, content: VotePage}}
        onEnter={onVoteEnter.bind(null, store)} />
      <Route path="/charts/:payload"
        components={{...common, content: ChartsPage}}
        onEnter={onChartsEnter.bind(null, store)} />
      <Route path="/thanks"
        components={{...common, content: ThanksPage}} />
      <Route path="*" components={{...common, content: _ => <h1>Page not found.</h1>}}/>
    </Route>
  );
}
