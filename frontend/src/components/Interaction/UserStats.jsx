import React from "react";
import StatBox from "./StatBox";

const UserStats = () => {
  return (
    <div className="font-inter  bg-primary_elight mb-8">
      <div className="border-b-2 border-primary_dark text-4xl p-4 font-inter">
        User Statistics
      </div>
      <div className="flex text-3xl justify-evenly">
        <StatBox number={1} content={"Total Posts"} />
        <StatBox number={1} content={"Total Users"} />
      </div>
    </div>
  );
};

export default UserStats;
