import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import session from "./session";
import homepage from "./homepage";
import poll from "./poll";
import charts, * as fromCharts from "./charts";


const rootReducer = combineReducers({
  session,
  homepage,
  poll,
  charts,
  routing: routerReducer,
});

export default rootReducer;

export function getAccumulatedVotes(state) {
  return fromCharts.getAccumulatedVotes(state.charts);
}
