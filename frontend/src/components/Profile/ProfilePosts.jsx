import React, { useEffect } from "react";
import { usePostContext } from "../../store/PostContext";
import ProfilePost from "./ProfilePost";
import Loader from "../Loader";
import { useMainContext } from "../../store/MainContext";

const ProfilePosts = () => {
  const { isuserPostsFetching, userPosts, getUserAllPosts } = useMainContext();
  // const { isuserPostDeleted } = usePostContext();
  const { isuserPostDeleted } = useMainContext();

  useEffect(() => {
    getUserAllPosts();
  }, [isuserPostDeleted]);

  return (
    <div>
      <p className="text-black font-inter text-5xl font-semibold mb-5 ">
        Posts
      </p>
      <div className="flex border border-primary_dark  rounded-xl justify-center p-4">
        {isuserPostsFetching ? <Loader />: (
          <div className="all-posts-container overflow-y-auto max-h-[35rem]  custom-scrollbar  w-full">
            <div className="all-posts  grid   gap-8  p-8">
              {[...userPosts].reverse().map((post,index) => (
                <ProfilePost
                  key={index}
                  post={post}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePosts;
