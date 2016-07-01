import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { Router, hashHistory } from "react-router";
import { syncHistoryWithStore } from "react-router-redux";
import getRoutes from "./routes";
import configureStore from "./store";

import "../css/styles.css";


const store = configureStore();

syncHistoryWithStore(hashHistory, store);

render((
  <Provider store={store}>
    <Router history={hashHistory}>
      {getRoutes(store)}
    </Router>
  </Provider>
), document.getElementById("app"));
