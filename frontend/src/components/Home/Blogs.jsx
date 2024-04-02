import React from "react";
import Blog from "./Blog";

const blogContents = [
  "Join our supportive community for guidance and understanding.",
  "Explore our latest articles and stay informed.",
  "Discover tips and tricks to enhance your skills.",
  "Learn from industry experts and expand your knowledge.",
];

const Blogs = () => {
  return (
    <div className="my-10">
      <h2 className="text-center mb-4">Our Blogs For You</h2>
      <div className=" flex justify-around">
        {blogContents.map((content, index) => (
          <Blog key={index} content={content} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
