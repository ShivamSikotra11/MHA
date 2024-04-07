import React from "react";
import PostsJson from "../../store/Posts.json";
import { usePostContext } from "../../store/PostContext";
const ShowPost = () => {
  const { showPost } = usePostContext();
  // console.log(showPost);
  return (
    <div className=" bg-primary_elight postbox">
      <div className="border-b-2 border-primary_dark text-4xl p-4 font-inter">
        Post
      </div>
      <div className="post-content p-8 ">
        <div className="text-4xl font-bold font-inter">{showPost.heading}</div>
        <div className="font-inter m-2  text-3xl text-justify">
          {showPost.content}
        </div>
      </div>
    </div>
  );
};

export default ShowPost;
