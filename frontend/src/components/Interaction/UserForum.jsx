import React, { useEffect } from "react";
import Post from "./Post";
import { usePostContext } from "../../store/PostContext";

const UserForum = () => {
  const { AlterCreatePost, allPosts, getAllPost, setShowPost,isNewPostPosted } = usePostContext();
  useEffect(() => {
    getAllPost();
  }, [isNewPostPosted]);
  return (
    <div>
      <div className="flex justify-between px-4  items-center">
        <span className="font-inter text-4xl">User Forum</span>
        <div
          className={`font-inter text-white text-4xl bg-primary_dark px-14 py-2  rounded-lg cursor-pointer inline-block`}
          onClick={() => AlterCreatePost()}
        >
          Start New Topic
        </div>
      </div>

      <div className="all-posts-container overflow-y-auto max-h-[35rem] mt-8  custom-scrollbar ">
        <div className="all-posts  grid   bg-primary_elight  gap-8  p-8 w-full">
          {allPosts.map((post) => (
            <Post
              key={post.timestamp+'_'+post.user_email.substr(0,post.user_email.indexOf('@'))}
              post={post}
              onClick={() => setShowPost(post)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserForum;
