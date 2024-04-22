import React from "react";
import Blog from "./Blog";
import ypJOSN from "../../JSON/YogaPoses.json";
import { usePostContext } from "../../store/PostContext";
 

const Blogs = () => {
  const { poses } = usePostContext();
  let Data;
  const ids = [1, 9, 16]
  if (typeof poses === 'undefined') {
    Data=ypJOSN.filter(item => ids.includes(item.id));
  }
  else {
    const poses2 = [poses.stress_poses, poses.depression_poses, poses.anxiety_poses]
  Data = ypJOSN.filter(item => poses2.includes(item.image));
}
// Data = ypJOSN.filter(item => ids.includes(item.image));
  return (
    <div className="my-10  ">
      <p className="text-center mb-4 text-[4.4rem] font-medium max-[763px]:text-[3.4rem] max-[458px]:text-[2.7rem] blogs">Our Blogs For You</p>
      <div className="flex flex-col space-y-[3rem] justify-center items-center">
        {Data.map((content, index) => (
          <Blog key={index} data={content} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
