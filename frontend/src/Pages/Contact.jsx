import React from "react";
import StopWatch from "../components/Quiz/StopWatch";
import PaginatedItems from "../components/Quiz/PaginatedItems";
import ButtonDiv from "../components/ButtonDiv";
import Loader from "../components/Loader";
import ProfileCircle from "../components/ProfileCircle";
import CreatePost from "../components/Interaction/CreatePost";
import Toast from "../components/Toast";
import { usePostContext } from "../store/PostContext";
import Dropdown from "react-dropdown";
import DropDown from "../components/DropDown";
import "../styles/dropdown.css"
import "react-dropdown/style.css";

const options = ["one", "two", "three"];
const Contact = () => {
  const { InvokeToast } = usePostContext();
  const defaultOption = options[0];
  return (

    <div className="h-[100vh] w-[100vw] flex justify-center items-center">
      {/* <DropDown></DropDown> */}
      <Dropdown   
        options={options}
 
        placeholder="Select an option"
        className="custom-dropdown"
        controlClassName='myControlClassName'
        menuClassName='myMenuClassName'
        arrowClassName='myArrowClassName'
        /> 
      {/* <Dropdown
        options={options}
        // onChange={this._onSelect}
        value={defaultOption}
        placeholder="Select an option"
      /> */}
      {/* <Loader></Loader> */}
      {/* <ProfileCircle /> */}
      {/* <CreatePost></CreatePost> */}
      {/* <Toast/>
      <button onClick={()=>InvokeToast("success","op")} >dfd</button> */}
    </div>
  );
};

export default Contact;
