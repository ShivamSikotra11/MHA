// import React, { createContext, useContext, useReducer } from 'react'
// import reducer from '../reducers/MainReducer';
// import axios from 'axios'; 
// const MainContext = createContext("");

// const initialItems = {
//   url: "http://localhost:8000/api/",
//   isuserPostsFetching: false,
//   isuserPostDeleted: false,
//   userPosts: [],
// };

// const MainProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, initialItems);
 
  
//   const getUserAllPosts = async () => {
//     try {
//       dispatch({ type: "ALTER_USER_POSTS_FETCHING" });
//       const response = await axios.post(
//         `${state.url}get_user_posts/`,
//         {email: JSON.parse(localStorage.getItem("userData")).email}
//       );
//       // console.log("response", response.data);
//       dispatch({ type: "SET_USER_POSTS", payload: response.data });
//       dispatch({ type: "ALTER_USER_POSTS_FETCHING" });
//     } catch (error) {
//       console.error("Error fetching posts:", error);
//     }
//   };
//   const deleteUserPost = async (timestamp) => {
//     try {
//       dispatch({ type: "ALTER_USER_POST_DELETED" });
//       const response = await axios.post(
//         `${state.url}delete_post/`,
//         {email: JSON.parse(localStorage.getItem("userData")).email,timestamp:timestamp}
//       );
//       dispatch({ type: "ALTER_USER_POST_DELETED" });
//     } catch (error) {
//       console.error("Error fetching posts:", error);
//     }
//   };
  
//   return <MainContext.Provider value={{...state,getUserAllPosts,deleteUserPost}}>
//    {children}
//  </MainContext.Provider>
// }
// const useMainContext = () => {
//   return useContext(MainContext);
// }
// export { useMainContext };
// export default MainProvider;


import React, { createContext, useContext, useEffect, useReducer, useState } from 'react'
import reducer from '../reducers/MainReducer';
import axios from 'axios'; 
const MainContext = createContext("");

const initialItems = {
  url: "http://localhost:8000/api/",
  isuserPostsFetching: false,
  isuserPostDeleted: false,
  isuserProfileUpdating: false,
  userPosts: [],
  toastActive:false,
  toastData: { type: "success", text: "op" },
  graphData:[],
};

const MainProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialItems);
  
  const [formData, setFormData] = useState({
    fname: '',
    mname: '',
    lname: '',
    dob: '',
    gender: '',
    mobile: '',
    email: '',
    address: '',
    city: '',
  });

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
      }, 5000); 
    }
  }, [state.toastActive]);

  // Profile Logic
  const getProfileData = async () => {
    const userObj = JSON.parse(localStorage.getItem("userData"));
    try {
      const res = await axios.post(`${state.url}get_profile/`, userObj);
      const data = res.data.data;
      const [fname, mname, lname] = data.user_name.split(" ");
      setFormData({
        fname: fname || '',
        mname: mname || '',
        lname: lname || '',
        dob: data.dob || '',
        gender: data.gender || '',
        mobile: data.mobile_no || '',
        email: data.user_email || '',
        address: data.address || '',
        city: data.city || '',
      });
    } catch (e) {
      console.error(`Error fetching profile data: ${e}`);
    }
  };

  const updateProfileData = async (e) => {
    e.preventDefault();
    const userObj = {
      user_name: `${formData.fname} ${formData.mname} ${formData.lname}`,
      user_password: JSON.parse(localStorage.getItem("userData")).password,
      city: formData.city,
      user_email: formData.email,
      mobile_no: formData.mobile,
      dob: formData.dob,
      gender: formData.gender,
      address: formData.address,
    };

    try {
      dispatch({type:"ALTER_USER_PROFILE_UPDATING"});
      await axios.post(`${state.url}update_profile/`, userObj);
      InvokeToast("success", "Profile Updated Successfully");
      dispatch({type:"ALTER_USER_PROFILE_UPDATING"});
    } catch (e) {
      console.error(`Error updating profile: ${e}`);
    }
  };

  // User Posts Logic
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
      InvokeToast("success", "Post deleted successfully");
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const setCity = (city) => {
    localStorage.setItem("userData", JSON.stringify({ ...JSON.parse(localStorage.getItem("userData")), city: city }));
  }
  const getGraphs = async () => {
    try {
      dispatch({type:"ALTER_USER_PROFILE_UPDATING"});
      const response = await axios.post(
        `${state.url}get_graphs/`,
        {email: JSON.parse(localStorage.getItem("userData")).email,password: JSON.parse(localStorage.getItem("userData")).password}
      );
      dispatch({type:"SET_GRAPH_DATA",payload:response.data.data.scores});
      dispatch({type:"ALTER_USER_PROFILE_UPDATING"});

    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };
  
  
  return <MainContext.Provider value={{
    ...state, 
    getUserAllPosts,
    deleteUserPost,
    getProfileData, 
    updateProfileData,
    formData,
    setFormData,
    clearToast,
    getGraphs
  }}>
   {children}
 </MainContext.Provider>
}
const useMainContext = () => {
  return useContext(MainContext);
}
export { useMainContext };
export default MainProvider;