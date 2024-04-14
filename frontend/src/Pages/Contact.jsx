import React from "react";
import StopWatch from "../components/Quiz/StopWatch";
import PaginatedItems from "../components/Quiz/PaginatedItems";
import ButtonDiv from "../components/ButtonDiv";
import Loader from "../components/Loader";
import ProfileCircle from "../components/ProfileCircle";
import CreatePost from "../components/Interaction/CreatePost";
import Toast from "../components/Toast";
import { usePostContext } from "../store/PostContext";
import Tabs from "../components/Tabs";

const options = ["one", "two", "three"];
const Contact = () => {
  const { InvokeToast } = usePostContext();
  const defaultOption = options[0];
  return (

    <div className="h-[100vh] w-[100vw] flex justify-center items-center">
       
      <Tabs></Tabs>
 
      {/* <Loader></Loader> */}
      {/* <ProfileCircle /> */}
      {/* <CreatePost></CreatePost> */}
      {/* <Toast/>
      <button onClick={()=>InvokeToast("success","op")} >dfd</button> */}
    </div>
  );
};

export default Contact;
