import React from "react";

const Option = ({ option, isSelected, checkOption }) => {
  return (
    <div
      className={`w-full text-3xl max-[400px]:text-2xl font-inter rounded-3xl p-6 py-3  cursor-pointer ${
        isSelected ? "bg-primary_dark text-white" : "bg-primary_light"
      } hover:bg-primary_dark hover:text-white`}
      onClick={() => checkOption(option.weightage )}
    >
      {option.text}
    </div>
  );
};

export default Option;
