import React from "react";
import StatBox from "./StatBox";
import { usePostContext } from "../../store/PostContext";

const UserStats = () => {
  const {allPosts} = usePostContext();
  // console.log(allPosts);
  const uniqueEmails = new Set();

  allPosts.forEach(item => {
    uniqueEmails.add(item.user_email);
  });

console.log("Number of unique emails:", uniqueEmails.size);
  return (
    <div className="font-inter  bg-primary_elight mb-8">
      <div className="border-b-2 border-primary_dark text-4xl p-4 font-inter">
        User Statistics
      </div>
      <div className="flex text-3xl justify-evenly">
        <StatBox number={allPosts.length} content={"Total Posts"} />
        <StatBox number={uniqueEmails.size} content={"Total Users"} />
      </div>
    </div>
  );
};

export default UserStats;
