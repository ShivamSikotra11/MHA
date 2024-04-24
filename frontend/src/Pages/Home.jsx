import React, { useEffect, useState } from "react";
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
import { useMainContext } from "../store/MainContext";
import { useQuizContext } from "../store/QuizContext";
import Loader from "../components/Loader";

const Home = () => {
  const { loggedIn,AlterFirstLogin,isFirstTimeLogin,isLoginFetching,getSuggestedPoses, getLogIn, getUserName } = usePostContext();
  const { dropdownOpen, setDropdownOpen,isuserProfileUpdating  } = useMainContext();
  const { isQuizSubmitted } = useQuizContext();

// const [loading, setLoading] = useState(true);
// // console.log("App rendered");
// useEffect(() => {
//   const storedUserData = localStorage.getItem("userData");

//   if (storedUserData) {
//     const userData = JSON.parse(storedUserData);
//     getLogIn(userData, false);
    
//     if (isuserProfileUpdating) { 
//       getUserName(userData)
//       .then(() => {
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//         setLoading(false);
//       });
//     }
//     else{
//       getSuggestedPoses(userData)
//       .then(() => setLoading(false))
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//         setLoading(false);
//       });
//     }
//   } else {
//     setLoading(false);
//   }
// }, [isuserProfileUpdating, isQuizSubmitted, isLoginFetching]);


  useEffect(() => {
    if(isFirstTimeLogin){
      setDropdownOpen(true);
    const driverObj = new driver({
      showProgress: true,
      steps: [
        {
          element: '.blogs',
          popover: {
            title: 'Blogs Section',
            description: 'Explore dynamic blogs related to your mental health and yoga to gain insights and personalized tips.',
            side: 'bottom',
            align: 'start',
          },
        },
        {
          element: '.suggestions',
          popover: {
            title: 'Causes & Solutions',
            description: 'Navigate to discover common causes and effective strategies for managing these mental health conditions.',
            side: 'bottom',
            align: 'start',
          },
        },
        {
          element: '.testimonial',
          popover: {
            title: 'Testimonial Section',
            description: 'Read inspiring stories and testimonials from individuals who have benefited from our platform.',
            side: 'bottom',
            align: 'start',
          },
        },
        {
          element: '.quiz',
          popover: {
            title: 'Quiz Section',
            description: 'Take a mental health quiz to assess your current mental well-being and receive recommendations.',
            side: 'left',
            align: 'start',
          },
        },
        {
          element: '.interaction',
          popover: {
            title: 'Interaction Section',
            description: 'Engage with other users in our community to share experiences and support each other.',
            side: 'left',
            align: 'start',
          },
        },
      ],
    });

    driverObj.drive();
    if (dropdownOpen){
      console.log("DD");
      setDropdownOpen(false);
    }
    AlterFirstLogin();
    }
    

  }, []);

  // if (loading) {
  //   return (
  //     <div className="h-[100vh] w-[100vw] bg-bg flex justify-center items-center ">
  //       <Loader width={"50px"} />
  //     </div>
  //   );
  // }

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
