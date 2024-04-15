import React from "react";
import { usePostContext } from "../../store/PostContext";
const ShowPost = () => {
  const { showPost } = usePostContext();
  
  return (
    <div className=" bg-primary_elight postbox ">
      {/* max-h-[50rem] overflow-y-scroll custom-scrollbar   */}
      <div className="border-b-2 border-primary_dark text-4xl p-4 font-inter">
        Post
      </div>
      <div className="post-content p-8 ">
        <div className="text-4xl font-bold font-inter ">{showPost.heading}</div>
        <div className="font-inter m-2  text-3xl text-justify">
          {showPost.content}
        </div>
      </div>
    </div>
  );
};

export default ShowPost;
