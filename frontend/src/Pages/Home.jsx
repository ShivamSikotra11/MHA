import React from "react";
import HeroSection from "../components/Home/HeroSection";
import Photos from "../components/Home/Photos";
import Blogs from "../components/Home/Blogs";
import Testimonials from "../components/Home/Testimonials";
import ConditionContent from "../components/Home/ConditionContent";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className=" bg-bg ">
      <HeroSection />
      <Photos />
      <ConditionContent />
      <Blogs />
      <Testimonials />
    </div>
  );
};

export default Home;
