import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const Load = createContext();
const LoadingPostsContext = ({ children }) => {
  const [loadPosts, setLoadPosts] = useState(false);
  return (
    <Load.Provider value={{ loadPosts, setLoadPosts }}>
      {children}
    </Load.Provider>
  );
};

export default LoadingPostsContext;
