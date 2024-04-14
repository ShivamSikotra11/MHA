import React, { useEffect } from "react";
import { usePostContext } from "../../store/PostContext";
import ProfilePost from "./ProfilePost";
import Loader from "../Loader";

const ProfilePosts = () => {
  const { isAllPostsFetching, allPosts, getAllPost } = usePostContext();
  useEffect(() => {
    getAllPost();
  }, []);

  return (
    <div>
      <p className="text-black font-inter text-5xl font-semibold mb-5 ">
        Posts
      </p>
      <div className="flex border border-primary_dark  rounded-xl justify-center p-4">
        {isAllPostsFetching ? <Loader />: (
          <div className="all-posts-container overflow-y-auto max-h-[35rem]  custom-scrollbar  ">
            <div className="all-posts  grid   gap-8  p-8">
              {allPosts.map((post) => (
                <ProfilePost
                  key={
                    post.timestamp +
                    "_" +
                    post.user_email.substr(0, post.user_email.indexOf("@"))
                  }
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
