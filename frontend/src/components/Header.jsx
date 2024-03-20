import React from "react";
import Button from "./Button";

const Header = () => {
  return (
    <div className="bg-primary_light flex justify-between py-2 items-center">
      <div className="left font-habibi text-[2.9rem] w-[60%] pl-12">
        MindCare
      </div>
      <div className="right   text-[2.5rem] w-[40%] flex justify-between pr-4 py-1 ">
        <div className="font-inter rounded-[1.2rem] bg-white px-4">Home</div>
        <div className="font-inter ">About Us</div>
        <div className="font-inter ">Contact Us</div>
        {/* <div className="font-inter text-white bg-primary_dark px-14 rounded-full cursor-pointer">
          Login
        </div> */}
        <Button value={"Login"} />
      </div>
    </div>
  );
};

export default Header;
