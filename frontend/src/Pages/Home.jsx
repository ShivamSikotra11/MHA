import React from "react";
import HeroSection from "../components/Home/HeroSection";
import Photos from "../components/Home/Photos";
import Blogs from "../components/Home/Blogs";
import Testimonials from "../components/Home/Testimonials";
import ConditionContent from "../components/Home/ConditionContent";
import Header from "../components/Header";
import Toast from "../components/Toast";
import { usePostContext } from "../store/PostContext";

const Home = () => {
  const { loggedIn } = usePostContext();
  return (
  <div className=" bg-bg  ">
      <Toast />
      <HeroSection />
     {loggedIn && <Blogs />}
      <Photos />
      <ConditionContent />
      <Testimonials />
    </div>
  );
};

export default Home;
