import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import poll from "./poll";
import charts, * as fromCharts from "./charts";


const rootReducer = combineReducers({
  poll,
  charts,
  routing: routerReducer,
});

export default rootReducer;

export function getAccumulatedVotes(state) {
  return fromCharts.getAccumulatedVotes(state.charts);
}
