import React, { createContext, useState } from "react";

export const EditLoads = createContext();

const EditPostLoads = ({ children }) => {
  const [load, setLoad] = useState({
    getPostLoad: false,
    sendPostLoad: false,
  });
  const [post, setPost] = useState({});
  return (
    <EditLoads.Provider value={{ load, setLoad, post, setPost }}>
      {children}
    </EditLoads.Provider>
  );
};

export default EditPostLoads;
