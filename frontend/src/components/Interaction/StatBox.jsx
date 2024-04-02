import React from "react";

const StatBox = ({ number, content }) => {
  return (
    <div className="flex flex-col py-2">
      <span className="text-center m-2 font-inter">{number}</span>
      <span className="text-center text-gray m-2 font-inter">{content}</span>
    </div>
  );
};

export default StatBox;
