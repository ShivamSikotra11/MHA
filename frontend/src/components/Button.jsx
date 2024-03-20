import React from "react";

const Button = ({ value}) => {
  return (
    <div
      className={`font-inter text-white text-[2.5rem] bg-primary_dark px-14  rounded-full cursor-pointer inline-block`}
    >
      {value}
    </div>
  );
};

export default Button;
