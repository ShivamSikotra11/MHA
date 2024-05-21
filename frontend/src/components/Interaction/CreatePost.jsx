import React, { useRef } from "react";
import Loader from "../Loader"

import { usePostContext } from "../../store/PostContext";

const CreatePost = () => {
  const { handleCreatePost, AlterCreatePost, curUser, isNewPostPosted } = usePostContext();
  const titleRef = useRef();
  const contentRef = useRef();
  // pip install -r requirements.txt,2.16.1
  const handleCreatePostFunction = (e) => {
    e.preventDefault();
    const currentDate = new Date();
    const currTimestamp = currentDate.getTime();
    
    const postObject = {
      email: curUser.email,
      password: curUser.password,
      post: {
        heading: titleRef.current.value,
        content: contentRef.current.value,
        timestamp: currTimestamp,
      }
    }
    // AlterCreatePost();

    handleCreatePost(postObject)
  }
  return (
    <div className="w-[45rem] border-2 shadow-2xl shadow-black-900/50 border-primary_dark bg-primary_light2 p-8 rounded-[2rem] max-[455px]:w-[35rem] max-[400px]:w-[30rem]">
      <p className="font-inter text-4xl  mb-8">Create Post</p>
      <form onSubmit={handleCreatePostFunction} >
        <input
          type="text"
          className="w-full font-habibi font-medium px-8 py-2  rounded-xl p-2 outline-none border-none mb-8 bg-primary_elight"
          placeholder={"Enter The Title Here"}
          ref={titleRef}
          required
        />
        <textarea
          className="w-full font-habibi font-medium rounded-xl px-8 py-2 outline-none border-none resize-none custom-scrollbar text-primary_dark text-3xl max-[455px]:text-2xl bg-primary_elight text-justify
          h-[30rem] max-[455px]:h-[20rem] max-[400px]:h-[18rem]"
          placeholder={"Enter The Text Here"}
          style={{ maxWidth: "100%", width: "100%" }}
          ref={contentRef} required
        />
        {isNewPostPosted ? 
        <div className="flex justify-center mt-8" >
        <Loader /> 
        </div>
        :
          <div className="post-btns  mt-8 flex justify-end gap-x-[3rem] max-[455px]:justify-center ">

            <div
              className={`font-inter text-black text-[2rem] bg-[#A9E1FF] px-12  rounded-full cursor-pointer inline-block`} onClick={() => AlterCreatePost()}
            >Cancel</div>
            <button 
              className={`font-inter text-white text-[2rem] bg-primary_dark px-12  rounded-full cursor-pointer inline-block`} type="submit"
            >Post</button>
          </div>
        }

      </form>
    </div>
  );
};

export default CreatePost;
