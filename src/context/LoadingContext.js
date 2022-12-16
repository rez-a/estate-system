import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const Load = createContext();
const LoadingContext = ({ children }) => {
  const [load, setLoad] = useState(false);
  return <Load.Provider value={{ load, setLoad }}>{children}</Load.Provider>;
};

export default LoadingContext;
