import React, { createContext, useContext, useReducer } from 'react'
import reducer from '../reducers/MainReducer';
import axios from 'axios'; 
const MainContext = createContext("");

const initialItems = {
  url: "http://localhost:8000/api/",
  isuserPostsFetching: false,
  isuserPostDeleted: false,
  userPosts: [],
};

const MainProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialItems);
 
  
  const getUserAllPosts = async () => {
    try {
      dispatch({ type: "ALTER_USER_POSTS_FETCHING" });
      const response = await axios.post(
        `${state.url}get_user_posts/`,
        {email: JSON.parse(localStorage.getItem("userData")).email}
      );
      // console.log("response", response.data);
      dispatch({ type: "SET_USER_POSTS", payload: response.data });
      dispatch({ type: "ALTER_USER_POSTS_FETCHING" });
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };
  const deleteUserPost = async (timestamp) => {
    try {
      dispatch({ type: "ALTER_USER_POST_DELETED" });
      const response = await axios.post(
        `${state.url}delete_post/`,
        {email: JSON.parse(localStorage.getItem("userData")).email,timestamp:timestamp}
      );
      dispatch({ type: "ALTER_USER_POST_DELETED" });
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };
  
  return <MainContext.Provider value={{...state,getUserAllPosts,deleteUserPost}}>
   {children}
 </MainContext.Provider>
}
const useMainContext = () => {
  return useContext(MainContext);
}
export { useMainContext };
export default MainProvider;