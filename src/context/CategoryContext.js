import React, { createContext, useState } from "react";

export const Category = createContext();
const CategoryContext = ({ children }) => {
  const [category, setCategory] = useState("all");
  return (
    <Category.Provider value={{ category, setCategory }}>
      {children}
    </Category.Provider>
  );
};

export default CategoryContext;
