import {
  ADD_FILTER,
  REMOVE_BUILDIN_FILTER,
  REMOVE_METERAGE_FILTER,
  REMOVE_PRICE_FILTER,
  REMOVE_ROOM_FILTER,
} from "./ActionTypes";

const filterReducer = (state, action) => {
  switch (action.type) {
    case ADD_FILTER:
      return {
        ...state,
        minPrice:
          typeof action.payload.minPrice !== "number"
            ? 0
            : action.payload.minPrice,
        maxPrice:
          typeof action.payload.maxPrice !== "number"
            ? 0
            : action.payload.maxPrice,
        minMeterage:
          typeof action.payload.minMeterage !== "number"
            ? 0
            : action.payload.minMeterage,
        maxMeterage:
          typeof action.payload.maxMeterage !== "number"
            ? 0
            : action.payload.maxMeterage,
        minBuildIn:
          typeof action.payload.minBuildIn !== "number"
            ? 0
            : action.payload.minBuildIn,
        maxBuildIn:
          typeof action.payload.maxBuildIn !== "number"
            ? 0
            : action.payload.maxBuildIn,
        minRoom:
          typeof action.payload.minRoom !== "number"
            ? 0
            : action.payload.minRoom,
        maxRoom:
          typeof action.payload.maxRoom !== "number"
            ? 0
            : action.payload.maxRoom,
        filtersName: [...action.payload.filtersName],
      };
    case REMOVE_PRICE_FILTER:
      return {
        ...state,
        minPrice: 0,
        maxPrice: 0,
        filtersName: state.filtersName.filter(
          (filter) => filter !== action.payload
        ),
      };
    case REMOVE_METERAGE_FILTER:
      return {
        ...state,
        minMeterage: 0,
        maxMeterage: 0,
        filtersName: state.filtersName.filter(
          (filter) => filter !== action.payload
        ),
      };
    case REMOVE_BUILDIN_FILTER:
      return {
        ...state,
        minBuildIn: 0,
        maxBuildIn: 0,
        filtersName: state.filtersName.filter(
          (filter) => filter !== action.payload
        ),
      };
    case REMOVE_ROOM_FILTER:
      return {
        ...state,
        minRoom: 0,
        maxRoom: 0,
        filtersName: state.filtersName.filter(
          (filter) => filter !== action.payload
        ),
      };
  }
};
export default filterReducer;
