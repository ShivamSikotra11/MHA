import React from "react";
import styled from "styled-components";

const Testimonials = () => {
  return (
    <Wrapper>
      <div className=" mb-10 h-[80rem] placeholder:  relative my-10 mt-20 ">
        <div className="testimonial-container"></div>
        <div className="absolute top-[40%]   w-full">
          <div className="flex justify-evenly ">
            <div className="w-[45rem] h-[45rem] bg-primary_light rounded-[3rem] relative testimonial"></div>
            <div className="w-[45rem] h-[45rem] bg-primary_light rounded-[3rem] relative testimonial"></div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .testimonial-container {
    background: linear-gradient(
        rgba(256, 256, 256, 0.6),
        rgba(256, 256, 256, 0.5)
      ),
      url("hero.jpg");
    height: 90vh;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

export default Testimonials;
