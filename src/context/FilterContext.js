import React, { useReducer } from "react";
import { createContext } from "react";
import filterReducer from "../reducer/filterReducer/filterReducer";

export const Filter = createContext();

const initialState = {
  minPrice: 0,
  maxPrice: 0,
  minMeterage: 0,
  maxMeterage: 0,
  minBuildIn: 0,
  maxBuildIn: 0,
  minRoom: 0,
  maxRoom: 0,
  filtersName: [],
};
const FilterContext = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, initialState);
  return (
    <Filter.Provider value={{ state, dispatch }}>{children}</Filter.Provider>
  );
};

export default FilterContext;
