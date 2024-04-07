import React, { useContext, useEffect, useReducer, useState } from "react";
import reducer from "../reducers/PostReducer";
import PostJSON from "./Posts.json";
import { createContext } from "react";
import axios from "axios";

const PostContext = createContext("");

const initialState = {
  showPost: {},
  isLoginFetching: false,
  curUser: JSON.parse(localStorage.getItem("userData")) || {},
  loggedIn: false,
  createPost: false,
  allPosts:[],
};

const PostProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setShowPost = (id) => {
    dispatch({ type: "SET_SHOW_POST", id:id });
  };

  const getAllPost = async () => {
    // console.log(1);
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/show_all_posts/");
      dispatch({ "type": "SET_ALL_POSTS", payload: response.data });
    }
    catch(error) {
      console.error("Error fetching posts:", error);
    }
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
    // console.log(postObject);
    try {
      const response = await axios.post(
        "http://localhost:8000/api/add_post/",
        postObject
      );
      dispatch({ type: "TOGGLE_CREATE_POST" });
      // console.log(`Post Successfuly done for ${postObject.email}!`);
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
        AlterCreatePost,getAllPost
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
