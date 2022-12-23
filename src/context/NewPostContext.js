import React from "react";
import { createContext } from "react";
import { useState } from "react";

export const NewPost = createContext();
const NewPostContext = ({ children }) => {
  const [newPost, setNewPost] = useState({
    build_in: "",
    category: "",
    description: "",
    document: "",
    image: "",
    metrage: "",
    mortgage: "",
    number: "",
    parking: "",
    price: "",
    rent: "",
    room: "",
    title: "",
    user_id: "",
    warehouse: "",
  });
  return (
    <NewPost.Provider value={{ newPost, setNewPost }}>
      {children}
    </NewPost.Provider>
  );
};

export default NewPostContext;
