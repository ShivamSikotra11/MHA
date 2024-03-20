import React from "react";
import HeroSection from "./components/Home/HeroSection";
import Photos from "./components/Home/Photos";
import Causes from "./components/Home/Causes";
import Solutions from "./components/Home/Solutions";
import Blogs from "./components/Home/Blogs";
import Testimonials from "./components/Home/Testimonials";

const Home = () => {
  return (
    <div className="">
      <HeroSection />
      <Photos />
      <Causes />
      <Solutions />
      <Blogs />
      <Testimonials />
    </div>
  );
};

export default Home;
