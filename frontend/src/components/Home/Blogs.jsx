import React from "react";
import Blog from "./Blog";
import ypJOSN from "../../JSON/YogaPoses.json";
 

const Blogs = () => {
  return (
    <div className="my-10">
      <h2 className="text-center mb-4 font-medium">Our Blogs For You</h2>
      <div className="flex flex-col space-y-[3rem] justify-center items-center">
        {ypJOSN.slice(0,3).map((content, index) => (
          <Blog key={index} data={content} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
