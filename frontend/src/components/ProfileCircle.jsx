import React from "react";

const ProfileCircle = ({ value = "NN" }) => {
  return (
    <div className="h-[4.5rem] w-[4.5rem] bg-primary_elight border-primary_dark border-2 rounded-full flex items-center justify-center font-inter text-4xl">
      {" "}
      {value}{" "}
    </div>
  );
};

export default ProfileCircle;
