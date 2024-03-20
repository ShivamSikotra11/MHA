import React from "react";

const Blog = ({ content }) => {
  return (
    <div>
      <div className=" w-[25rem] h-[30rem] bg-primary_light rounded-[3rem] "></div>
      <div className="w-[25rem] px-4 text-[2rem] text-center">{content}</div>
    </div>
  );
};

export default Blog;
