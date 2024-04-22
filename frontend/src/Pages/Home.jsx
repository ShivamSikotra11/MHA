import React, { useEffect } from "react";
import HeroSection from "../components/Home/HeroSection";
import Photos from "../components/Home/Photos";
import Blogs from "../components/Home/Blogs";
import Testimonials from "../components/Home/Testimonials";
import ConditionContent from "../components/Home/ConditionContent";
import Header from "../components/Header";
import Toast from "../components/Toast";
import { usePostContext } from "../store/PostContext";
import {driver} from 'driver.js';
import "driver.js/dist/driver.css";

const Home = () => {
  const { loggedIn } = usePostContext();
  // useEffect(() => {
  //   const driverObj = new driver({
  //     showProgress: true,
  //     steps: [
  //       {
  //         element: '.blogs',
  //         popover: {
  //           title: 'Blogs Section',
  //           description: 'Explore dynamic blogs related to mental health and yoga to gain insights and tips.',
  //           side: 'bottom',
  //           align: 'start',
  //         },
  //       },
  //       {
  //         element: '.suggestions',
  //         popover: {
  //           title: 'Suggestions Section',
  //           description: 'Get personalized suggestions based on your mental health condition and preferences.',
  //           side: 'bottom',
  //           align: 'start',
  //         },
  //       },
  //       {
  //         element: '.testimonial',
  //         popover: {
  //           title: 'Testimonial Section',
  //           description: 'Read inspiring stories and testimonials from individuals who have benefited from our platform.',
  //           side: 'bottom',
  //           align: 'start',
  //         },
  //       },
  //       {
  //         element: '.quiz',
  //         popover: {
  //           title: 'Quiz Section',
  //           description: 'Take a mental health quiz to assess your current mental well-being and receive recommendations.',
  //           side: 'bottom',
  //           align: 'start',
  //         },
  //       },
  //       {
  //         element: '.interaction',
  //         popover: {
  //           title: 'Interaction Section',
  //           description: 'Engage with other users in our community to share experiences and support each other.',
  //           side: 'bottom',
  //           align: 'start',
  //         },
  //       },
  //     ],
  //   });

  //   driverObj.drive();

  //   // Cleanup function
  //   return () => {
  //     driverObj.cleanup();
  //   };
  // }, []);
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
