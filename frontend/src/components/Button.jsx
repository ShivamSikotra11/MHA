import React from "react";
import { NavLink } from "react-router-dom";

const Button = ({ value, Goto=()=>{} }) => {
  return (
    <NavLink
      className={`font-inter text-white text-[2.5rem] bg-primary_dark px-16  rounded-full cursor-pointer inline-block`}
      to={Goto}
      
    >
      {value}
    </NavLink>
  );
};

export default Button;
