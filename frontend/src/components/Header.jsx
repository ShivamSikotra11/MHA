import React from "react";
import Button from "./Button";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const url = useLocation();

  return (
    <div className="bg-primary_light flex justify-between py-2 items-center">
      <NavLink
        to={"/"}
        className="left font-habibi text-[2.9rem] w-[60%] pl-12"
      >
        MindCare
      </NavLink>
      <div className="right   text-[2.5rem] w-[40%] flex justify-between pr-4 py-1 cursor-pointer">
        <NavLink
          to={"/"}
          className={`font-inter cursor-pointer ${
            location.pathname === "/" ? "HeaderActive" : ""
          } `}
        >
          Home
        </NavLink>
        <NavLink
          to={"/about"}
          className={`font-inter cursor-pointer ${
            location.pathname === "/about" ? "HeaderActive" : ""
          } `}
        >
          About Us
        </NavLink>
        <NavLink
          to={"/contact"}
          className={`font-inter cursor-pointer ${
            location.pathname === "/contact" ? "HeaderActive" : ""
          } `}
        >
          Contact Us
        </NavLink>
        {/* <div className="font-inter text-white bg-primary_dark px-14 rounded-full cursor-pointer">
          Login
        </div> */}
        <Button value={"Login"} Goto={"/login"} />
      </div>
    </div>
  );
};

export default Header;
