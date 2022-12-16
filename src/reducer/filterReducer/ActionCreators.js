import {
  ADD_FILTER,
  REMOVE_BUILDIN_FILTER,
  REMOVE_METERAGE_FILTER,
  REMOVE_PRICE_FILTER,
  REMOVE_ROOM_FILTER,
} from "./ActionTypes";

export function addFilter(data) {
  return {
    type: ADD_FILTER,
    payload: data,
  };
}
export function removePriceFilter(filterName) {
  return {
    type: REMOVE_PRICE_FILTER,
    payload: filterName,
  };
}
export function removeMeterageFilter(filterName) {
  return {
    type: REMOVE_METERAGE_FILTER,
    payload: filterName,
  };
}
export function removeBuildInFilter(filterName) {
  return {
    type: REMOVE_BUILDIN_FILTER,
    payload: filterName,
  };
}
export function removeRoomFilter(filterName) {
  return {
    type: REMOVE_ROOM_FILTER,
    payload: filterName,
  };
}
