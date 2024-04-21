import React, { memo, useEffect, useState } from "react";
import ProfilePost from "./ProfilePost";
import Loader from "../Loader";
import { useMainContext } from "../../store/MainContext";
import { usePostContext } from "../../store/PostContext";

const ProfilePosts = () => {
  const { isuserPostsFetching, userPosts, getUserAllPosts, isuserPostDeleted } =
    useMainContext();
    const { clearShowPost } = usePostContext();
    const [expandedPostId, setExpandedPostId] = useState(null);

  useEffect(() => {
    getUserAllPosts();
    clearShowPost();
  }, [isuserPostDeleted]);

  const handlePostClick = (postId) => {
    setExpandedPostId((prevId) => (prevId === postId ? null : postId));
  };

  return (
    <div>
      <p className="text-black font-inter text-5xl font-semibold mb-5 max-[440px]:text-4xl">
        Posts
      </p>
      <div className="flex rounded-xl justify-center p-4">
        {isuserPostsFetching ? (
          <Loader />
        ) : (
          <div className="all-posts-container overflow-y-auto max-h-[35rem] custom-scrollbar w-full">
            {userPosts.length > 0 ? (
              <div className="all-posts grid gap-8 p-8">
                {[...userPosts].reverse().map((post) => (
                  <ProfilePost
                    key={post.timestamp}
                    post={post}
                    isExpanded={post.timestamp === expandedPostId}
                    onPostClick={() => handlePostClick(post.timestamp)}
                  />
                ))}
              </div>
            ) : (
              <div className="text-[2.4rem] text-center">No post posted.</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePosts;
