import React from "react";
import styled from "styled-components";
import TestimonialJSON from "../../JSON/Testimonial.json";
import Testimonial from "./Testimonial";

const Testimonials = () => {
  return (
    <Wrapper className="" >
      <p className="text-center text-[4.4rem] font-medium max-[763px]:text-[3.4rem] max-[458px]:text-[2.7rem] mt-8 testimonial">Testimonials</p>
      <div className="   mb-10 h-[80rem] max-h-[100rem] placeholder:  relative max-[873px]:hidden">
        <div className="testimonial-container">

        </div>
        <div className="absolute top-[45%]   w-full">
          <div className="flex justify-evenly ">
            {TestimonialJSON.map((testimonial, index) => (
              <Testimonial key={index} data={testimonial} />
            ))}
            {/* <div className="w-[45rem] h-[45rem] bg-primary_light rounded-[3rem] relative testimonial"></div>
            <div className="w-[45rem] h-[45rem] bg-primary_light rounded-[3rem] relative testimonial"></div> */}
          </div>
        </div>
      </div>
    <div className="flex flex-col items-center justify-evenly min-[874px]:hidden h-[130rem]  ">
            {TestimonialJSON.map((testimonial, index) => (
              <Testimonial key={index} data={testimonial} />
            ))}
          </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .testimonial-container {
    background: url("hero.jpg");
    height: 90vh;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

export default Testimonials;
