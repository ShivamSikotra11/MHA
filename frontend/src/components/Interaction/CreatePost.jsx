import React, { useRef } from "react";
 
import { usePostContext } from "../../store/PostContext";

const CreatePost = () => {
  const { handleCreatePost , AlterCreatePost } = usePostContext();
  const titleRef = useRef();
  const contentRef = useRef();

  const handleCreatePostFunction = () => {
    const currentDate = new Date(); 
    const currTimestamp = currentDate.toLocaleString();
    const postObject = {
      email: curUser.email,
      post: {
        heading:titleRef.current.value,
        content: contentRef.current.value,
        timestamp:currTimestamp,
      }
    }
    handleCreatePost(postObject);
  }
  return (
    <div className="w-[40rem] border-2 shadow-2xl shadow-black-900/50 border-primary_dark bg-primary_light2 p-8 rounded-[2rem] ">
      <p className="font-inter text-4xl  mb-8">Create Post</p>
      <form onSubmit={handleCreatePostFunction} > 
        <input
          type="text"
          className="w-full font-habibi font-medium  rounded-xl p-2 outline-none border-none mb-8 bg-primary_elight"
          placeholder={"Enter The Title Here"}
        />
        <textarea
          className="w-full font-habibi font-medium rounded-xl p-2 outline-none border-none resize-none custom-scrollbar text-primary_dark text-3xl bg-primary_elight"
          placeholder={"Enter The Text Here"}
          style={{ maxWidth: "100%", width: "100%", height: "30rem" }}
        />
        <div className="post-btns  mt-8 flex justify-end gap-x-[3rem] ">
        
          <div
        className={`font-inter text-black text-[2rem] bg-[#A9E1FF] px-12  rounded-full cursor-pointer inline-block`} onClick={()=>AlterCreatePost()}
        >Cancel</div>
          <div
        className={`font-inter text-white text-[2rem] bg-primary_dark px-12  rounded-full cursor-pointer inline-block`} type="submit"
        >Post</div>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
