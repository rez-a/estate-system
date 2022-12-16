import React, { createContext, useState } from "react";
import { fakeUser } from "../fakeData";

export const User = createContext();
const UserConext = ({ children }) => {
  const [user, setUser] = useState(fakeUser);
  return <User.Provider value={{ user, setUser }}>{children}</User.Provider>;
};

export default UserConext;
