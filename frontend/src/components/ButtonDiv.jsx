import React from "react";
import { NavLink } from "react-router-dom";

const ButtonDiv = ({ value, bgColor ="#00668C",valColor="white" , onClickFunction = () => {} }) => {
  return (
    <div
      className={`font-inter text-[2.5rem] px-14 rounded-full cursor-pointer inline-block`}
      style={{ backgroundColor: bgColor,color:valColor }}
      onClick={onClickFunction}
    >
      {value}
    </div>
  );
};

export default ButtonDiv;
