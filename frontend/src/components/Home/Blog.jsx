import React from "react";
import Button from "../Button";
import { NavLink } from "react-router-dom";

const Blog = ({ data, index }) => {
  const imgurl = `Yoga_Images/${data.image}.jpg`;

  return (
    <div
      className={`border border-primary_dark rounded-xl w-[80%] flex max-[700px]:flex-col max-[700px]:items-center  p-8 ${
        index % 2 === 0 ? "" : "flex-row-reverse"
      }`}
    >
      <img
        className="w-[25rem] h-[30rem] bg-primary_light rounded-[1rem] border-primary_dark"
        src={imgurl}
        alt={data.name}
      />
      <div className="px-10 flex flex-col justify-evenly max-[700px]:items-centerblo ">
        <p className="text-4xl font-semibold">{data.name}</p>
        <p className="text-3xl text-justify">{data.description}</p>
        <div>
          <NavLink
            className={`font-inter text-white text-[2.5rem] bg-primary_dark px-16  rounded-full cursor-pointer inline-block`}
            to={data.url}
 
            target="_blank"
            rel="noopener noreferrer"
          >
            Read More
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Blog;
