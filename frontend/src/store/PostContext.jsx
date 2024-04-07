import React, { useContext, useEffect, useReducer, useState } from "react";
import reducer from "../reducers/PostReducer";
import PostJSON from "./Posts.json";
import { createContext } from "react";
import axios from "axios";

const PostContext = createContext("");

const initialState = {
  showPost: PostJSON[0],
  isLoginFetching: false,
  curUser: JSON.parse(localStorage.getItem("userData")) || {},
  loggedIn: false,
  createPost: false,
};

const PostProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setShowPost = (id) => {
    dispatch({ type: "SET_SHOW_POST", payload: PostJSON,id:id });
  };

  function getNameAcronym(sentence) {
    const words = sentence.split(" ");
    const newWord = words.reduce((acc, word) => acc + word.charAt(0), "");
    return newWord.substring(0,2);
  }

  const handleLoginSubmit = async (redirect, userData) => {
    dispatch({ type: "ALTER_LOGIN_FETCHING" });
    try {
      const response = await axios.post(
        "http://localhost:8000/api/login/",
        userData
      );
      userData.name = response.data.data.user_name;
      dispatch({ type: "SET_CURRENT_USER", payload: userData});
      localStorage.setItem("userData", JSON.stringify(userData));
      // console.log(response.data.data.user_name)
      redirect("/");
    } catch (error) {
      dispatch({ type: "ALTER_LOGIN_FETCHING" });
      console.error("Error adding new record:", error);
    }
  };

  const getLogOut = () => {
    dispatch({ type: "LOG_OUT_USER" });
    localStorage.removeItem("userData");
  };

  const handleCreatePost = async (postObject) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/add_post/",
        postObject
      );
      dispatch({ type: "TOGGLE_CREATE_POST" });
      console.log(`Post Successfuly done for ${postObject.email}!`);
    } catch (error) {
      console.error("Error adding new record:", error);
    }
  };
  const AlterCreatePost = async (postObject) => {
    dispatch({ type: "TOGGLE_CREATE_POST" });
  };

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      dispatch({
        type: "SET_CURRENT_USER",
        payload: JSON.parse(storedUserData),
      });
    }
  }, []);

  return (
    <PostContext.Provider
      value={{
        ...state,
        setShowPost,
        handleLoginSubmit,
        getNameAcronym,
        getLogOut,
        handleCreatePost,
        AlterCreatePost
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

const usePostContext = () => {
  return useContext(PostContext);
};

export { usePostContext };
export default PostProvider;
