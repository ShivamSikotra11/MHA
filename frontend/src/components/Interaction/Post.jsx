import React from "react";
import { usePostContext } from "../../store/PostContext";

const Post = ({ post }) => {
  const { setShowPost } = usePostContext();
  return (
    <div
      className="bg-white flex flex-col p-4 cursor-pointer "
      onClick={() => setShowPost(post.timestamp+'_'+post.user_email.substr(0,post.user_email.indexOf('@')))}
    >
      <div className="text-3xl font-inter mb-1">{post.heading} </div>
      <div className="line-clamp-3 font-inter">{post.content} </div>
    </div>
  );
};

export default Post;
