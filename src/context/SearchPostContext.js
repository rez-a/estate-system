import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const SearchText = createContext();
const SearchPostContext = ({ children }) => {
  const [search, setSearch] = useState("");
  return (
    <SearchText.Provider value={{ search, setSearch }}>
      {children}
    </SearchText.Provider>
  );
};

export default SearchPostContext;
