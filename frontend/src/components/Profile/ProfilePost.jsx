import React from "react";

const ProfilePost = ({ post }) => {
  return (
    <div className="bg-white border flex flex-col p-4 cursor-pointer rounded-lg border-primary_dark space-y-4 ">

      <div className="flex justify-between">
        <div className="text-black text-4xl font-inter font-semibold mb-2">
          {post.heading}{" "}
        </div>

        <div
          className={`font-inter text-4xl px-7 rounded-full text-white cursor-pointer  bg-red-600 border border-primary_dark `}
        >
          Remove
        </div>
      </div>
      
      <div className="text-black line-clamp-2  text-2xl text-justify">
        {post.content}{" "}
      </div>

    </div>
  );
};

export default ProfilePost;
