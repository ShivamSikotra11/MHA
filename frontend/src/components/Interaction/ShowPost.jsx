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
        <div className="text-4xl font-bold font-inter overflow-clip">{showPost.heading}</div>
        <div className="font-inter m-2 p-2 text-3xl text-justify overflow-scroll custom-scrollbar max-h-[35rem] ">
          {showPost.content}
        </div>
      </div>
    </div>
  );
};

export default ShowPost;
