import React from "react";
import { NavLink } from "react-router-dom";

const ButtonDiv = ({ value, onClickFunction = ()=>{} }) => {
  return (
    <div
      className={`font-inter text-white text-[2.5rem] bg-primary_dark px-14  rounded-full cursor-pointer inline-block`}
      onClick={onClickFunction}
        >
          {value}
        </div>
  );
};

export default ButtonDiv;
