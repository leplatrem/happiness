import {
  ROUTE_UPDATED,
} from "../constants";

/**
 * @param Object} params
 * @param Object} location
 */
export function routeUpdated(params, location) {
  return {type: ROUTE_UPDATED, params, location};
}
