import React from "react";
import AxiosAPI from "./AxiosAPI";
import AddPersonForm from "./AddPersonForm";
import { useConditionContext } from "../store/ConditionContext";

const About = () => {
  const { AlterFetchStatus } = useConditionContext();
  return (
    <div class="  flex flex-col space-y-10 bg-primary_light2  py-[7rem]  px-[10rem] mx-auto">
      <div
        class="aboutus border border-primary_dark bg-white space-y-3 p-4 rounded-xl"
      >
        <div class="heading font-bold text-5xl max-sm:text-4xl max-[442px]:text-3xl  text-primary_dark tracking-[2px] max-[360px]:text-center">
          About Us
        </div>
        <p class="text-3xl max-sm:text-2xl max-[442px]:text-xl tracking-[1px] text-justify">
        We are a passionate team committed to promoting mental health awareness and well-being. Our platform serves as a hub for education, self-assessment, and community support. Through informative quizzes, we help users gain insights into their mental health, followed by personalized yoga recommendations to foster relaxation and balance. By facilitating open discussions and sharing valuable resources, we aim to break the stigma associated with mental health and empower individuals to prioritize their well-being. Join us in our mission to create a healthier, more understanding world.
        </p>
      </div>
      <div
        class="aboutus border border-primary_dark bg-white space-y-3 p-4 rounded-xl"
      >
        <div class="heading font-bold text-5xl max-sm:text-4xl max-[442px]:text-3xl  text-primary_dark tracking-[2px] max-[360px]:text-center">
          What We do
        </div>
        <p class="text-3xl max-sm:text-2xl max-[442px]:text-xl tracking-[1px] text-justify">
        We offer a comprehensive platform with quizzes designed to assess mental well-being, followed by personalized yoga recommendations and insights into the causes and solutions for mental health issues. Our interactive forum allows users to share experiences and seek support from the community.
        </p>
      </div>
      <div
        class="aboutus border border-primary_dark bg-white space-y-3 p-4 rounded-xl"
      >
        <div class="heading font-bold text-5xl max-sm:text-4xl max-[442px]:text-3xl  text-primary_dark tracking-[2px] max-[360px]:text-center">
          Our Commitment
        </div>
        <p class="text-3xl max-sm:text-2xl max-[442px]:text-xl tracking-[1px] text-justify">
        We are committed to fostering a safe and inclusive environment where individuals can freely discuss mental health topics, access valuable resources, and find encouragement. Your well-being is our priority, and we strive to provide meaningful support every step of the way.
        </p>
      </div>
      <div
        class="aboutus border border-primary_dark bg-white space-y-3 p-4 rounded-xl"
      >
        <div class="heading font-bold text-5xl max-sm:text-4xl max-[442px]:text-3xl  text-primary_dark tracking-[2px] max-[360px]:text-center">
          Connect With Us
        </div>
        <p class="text-3xl max-sm:text-2xl max-[442px]:text-xl tracking-[1px] text-justify">
        Stay connected with us through our social media channels for updates, tips, and inspiring stories on mental health awareness. Reach out to us via email or join our community forum to engage with like-minded individuals and experts in the field. Let's create a supportive network together.
        </p>
      </div>

       
 
      
    </div>
  );
};

export default About;
