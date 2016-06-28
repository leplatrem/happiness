import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import poll from "./poll";
import charts from "./charts";


const rootReducer = combineReducers({
  poll,
  charts,
  routing: routerReducer,
});

export default rootReducer;
