import React from "react";

const Blog = ({ content }) => {
  const data = {
    "id": 17,
    "category": "Yoga",
    "name": "Baddha Konasana",
    "description": "Seated asana in hatha yoga and modern yoga as exercise. If the knees rest on the floor, it is suitable as a meditation seat.",
    "url": "https://en.wikipedia.org/wiki/Baddha_Konasana",
    "image": "bond_angle_pose"
  };
  const imgUrl = `Yoga_Images/${data.image}.jpg`
  return (
    <div className="border w-[80%] flex">
      <img className=" w-[25rem] h-[30rem] bg-primary_light rounded-[3rem]" src={imgUrl} />
      {/* <div className=" w-[25rem] h-[30rem] bg-primary_light rounded-[3rem]"></div> */}
      <div className="w-[25rem] px-4 text-[2rem] text-center">{content}</div>
    </div>
  );
};

export default Blog;
