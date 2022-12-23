import React, { createContext } from "react";
import { useReducer } from "react";
import userReducer from "../reducer/userReducer/userReducer";

export const User = createContext();
const initialState = {
  business_license: "",
  estate_name: "",
  posts: [],
};
const UserConext = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);
  return <User.Provider value={{ state, dispatch }}>{children}</User.Provider>;
};

export default UserConext;
