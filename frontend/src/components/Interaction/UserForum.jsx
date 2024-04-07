import React from "react";
import PostsJson from "../../store/Posts.json";
import Post from "./Post";
import { usePostContext } from "../../store/PostContext";

const UserForum = () => {
  const { handleCreatePost } = usePostContext();
  return (
    <div>
      <div className="flex justify-between px-4  items-center">
        <span className="font-inter text-4xl">User Forum</span>
        <div
          className={`font-inter text-white text-4xl bg-primary_dark px-14 py-2  rounded-lg cursor-pointer inline-block`} onClick={()=>handleCreatePost()}
        >
          Start New Topic
        </div>
      </div>
 
      <div className="all-posts-container overflow-y-auto max-h-[48rem] mt-8  custom-scrollbar ">
        <div className="all-posts grid grid-cols-2 grid-rows-3    bg-primary_elight  gap-8  p-8">
          {PostsJson.map((post) => (
            <Post
              key={post.id}
              post={post}
              onClick={() => setShowPost(post.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserForum;
