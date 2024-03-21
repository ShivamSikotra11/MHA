import React, { useState } from "react";
import Button from "./Button";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [state, setState] = useState("home");
  return (
    <div className="bg-primary_light flex justify-between py-2 items-center">
      <NavLink
        to={"/"}
        className="left font-habibi text-[2.9rem] w-[60%] pl-12"
        onClick={() => setState("home")}
      >
        MindCare
      </NavLink>
      <div className="right   text-[2.5rem] w-[40%] flex justify-between pr-4 py-1 cursor-pointer">
        <NavLink
          to={"/"}
          className={`font-inter cursor-pointer ${
            state === "home" ? "HeaderActive" : ""
          } `}
          onClick={() => setState("home")}
        >
          Home
        </NavLink>
        <NavLink
          to={"/about"}
          className={`font-inter cursor-pointer ${
            state === "about" ? "HeaderActive" : ""
          } `}
          onClick={() => setState("about")}
        >
          About Us
        </NavLink>
        <NavLink
          to={"/contact"}
          className={`font-inter cursor-pointer ${
            state === "contact" ? "HeaderActive" : ""
          } `}
          onClick={() => setState("contact")}
        >
          Contact Us
        </NavLink>
        {/* <div className="font-inter text-white bg-primary_dark px-14 rounded-full cursor-pointer">
          Login
        </div> */}
        <Button value={"Login"} />
      </div>
    </div>
  );
};

export default Header;
