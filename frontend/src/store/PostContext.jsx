import React, { useContext, useReducer, useState } from "react";
import reducer from "../reducers/PostReducer";
import PostJSON from "./Posts.json";
import { createContext } from "react";


const PostContext = createContext("");

const initialState = {
  showPost:PostJSON[0],
};

const PostProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const setShowPost = (id) => {
    console.log(`${id} occured!!`);
    dispatch({ type: "SET_SHOW_POST", payload: PostJSON, id: id });
  };

  return (
    <PostContext.Provider value={{ ...state, setShowPost }}>
      {children}
    </PostContext.Provider>
  );
};

const usePostContext = () => {
  return useContext(PostContext);
};

export { usePostContext };
export default PostProvider;
