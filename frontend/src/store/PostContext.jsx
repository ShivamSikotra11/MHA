import React, { useContext, useEffect, useReducer, useState } from "react";
import reducer from "../reducers/PostReducer";
import { createContext } from "react";
import axios from "axios";
import { useMainContext } from "./MainContext";

const PostContext = createContext("");
 
const initialState = {
  showPost: {},
  isLoginFetching: false,
  isAllPostsFetching: false,
  curUser: {},
  isNewPostPosted: false,
  //  JSON.parse(localStorage.getItem("userData")) ||
  loggedIn: false,
  createPost: false,
  allPosts: [],
  toastActive:false,
  toastData:{type:"success", text:"op"},
  isuserPostDeleted:false,
  poses:[],
};

const PostProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { url } = useMainContext();
  //Toast Logic
  const InvokeToast = (type, text) => {
    dispatch({ type: "SET_TOAST", payload: { type: type, text: text } })
  };
  const clearToast = () => {
    dispatch({ type: "CLEAR_TOAST" });
  };

  useEffect(() => {
    if (state.toastActive) {
      setTimeout(() => {
        clearToast();
      }, 5000); // Toast duration in milliseconds (5 seconds)
    }
  }, [state.toastActive]);


  // Posts Logic
  const setShowPost = (id) => {
    dispatch({ type: "SET_SHOW_POST", id: id });
  };
  const clearShowPost = () => {
    dispatch({ type: "CLEAR_SHOW_POST" });
  };
  const getAllPost = async () => {
    try {
      dispatch({ type: "ALTER_ALL_POSTS_FETCHING" });
      const response = await axios.get(
        `${url}show_all_posts/`
      );
      dispatch({ type: "SET_ALL_POSTS", payload: response.data });
      dispatch({ type: "ALTER_ALL_POSTS_FETCHING" });
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };


  const handleCreatePost = async (postObject) => {
    try {
      dispatch({ type: "TOGGLE_NEW_POST_POSTED" });
      const response = await axios.post(
        `${url}add_post/`,
        postObject
      );
      dispatch({ type: "TOGGLE_CREATE_POST" });
      dispatch({ type: "TOGGLE_NEW_POST_POSTED" });
      InvokeToast("success", "Post Created Successfully");
    } catch (error) {
      console.error("Error adding new record:", error);
    }
  };

  const AlterCreatePost = async (postObject) => {
    dispatch({ type: "TOGGLE_CREATE_POST" });
  };

  // Login/LogOut Logic
  function getNameAcronym(sentence="") {
    const words = sentence.split(" ");
    const newWord = words.reduce((acc, word) => acc + word.charAt(0), "");
    return newWord.substring(0, 2).toUpperCase();
  }

  const getUserName = async (userData) => {
    try {
      
      const res = await axios.post(`${url}get_name/`, userData);
      const name = res.data.data.name;
      const city = res.data.data.city;
      userData.name = name;
      userData.city = city;
      getLogIn(userData);
      // dispatch({type:"SET_POSES",payload:res.data.data.poses[0]})

    }
    catch (e) {
      console.log(e);   
    }
    // console.log(res.data.data.user_name);
  }
  const getSuggestedPoses= async (userData) => {
    try {
    
      const res = await axios.post(`${url}get_poses/`, userData);
      dispatch({type:"SET_POSES",payload:res.data.data.poses[0]})
    }
    catch (e) {
      console.log(e);   
    }
    // console.log(res.data.data.user_name);
  }

  
  const handleLoginSubmit = async (redirect, userData) => {
    dispatch({ type: "ALTER_LOGIN_FETCHING" });
    try {
      const response = await axios.post(
        `${url}login/`,
        userData
      );
      InvokeToast("success", "Successfully Logged in");
      userData.name = response.data.data.user_name;
      dispatch({ type: "SET_CURRENT_USER", payload: userData });
      localStorage.setItem("userData", JSON.stringify(userData));
      // getUserName(userData);
      redirect("/");
    } catch (error) {
      dispatch({ type: "ALTER_LOGIN_FETCHING" });
      if (error.response.data.message == "No_user") {
        InvokeToast("error","No user found with this email")
      }
      else if (error.response.data.message == "Incorrect") {
        InvokeToast("error","Invalid Credentials")
      }
      console.error("Error adding new record:", error);
    }
  };

  const getLogIn = (userData, flag = true) => {
    dispatch({ type: "SET_CURRENT_USER", payload: userData });
    if (flag) localStorage.setItem("userData", JSON.stringify(userData));
  };

  const getLogOut = () => {
    dispatch({ type: "LOG_OUT_USER" });
    localStorage.removeItem("userData");
  };


  // Extra deletePost Function (All related to this in MainContext)
  const deleteUserPost = async (timestamp) => {
    // console.log("Func cc",timestamp,url);
    try {
      dispatch({ type: "ALTER_USER_POST_DELETED" });
      const response = await axios.post(
        `${state.url}delete_post/`,
        {email: JSON.parse(localStorage.getItem("userData")).email,timestamp:timestamp}
      );
      // InvokeToast("success", "Post Deleted Successfully");
      dispatch({ type: "ALTER_USER_POST_DELETED" });
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };
  


  return (
    <PostContext.Provider
      value={{
        ...state,
        setShowPost,
        clearShowPost,
        handleLoginSubmit,
        getNameAcronym,
        getLogOut,
        handleCreatePost,
        AlterCreatePost,
        getAllPost,
        getLogIn,
        InvokeToast,
        clearToast,
        deleteUserPost,
        getUserName,
        getSuggestedPoses
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
