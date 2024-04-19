import React from "react";
import styled from "styled-components";

const Testimonial = ({ data }) => {
  return (
    <Wrapper imageurl={data.image}>
      <div className="w-[45rem] h-[43rem] bg-primary_light rounded-[3rem] relative testimonial pt-[14rem] px-[2rem] pb-[2rem] ">
        <div className="flex flex-col justify-between h-full p-4">
          <p className="text-4xl text-justify">{data.text}</p>
          <div className="">
            <p className="text-3xl font-semibold">{data.name}</p>
            <p className="text-3xl">{data.designation}</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section.withConfig({
  shouldForwardProp: (prop) => prop !== "imageurl",  
})`
  .testimonial::before {
    content: "";
    position: absolute;
    top: -22%;
    left: 50%;
    transform: translate(-50%);
    width: 20rem;
    height: 20rem;
    background-color: transparent;
    border-radius: 50%;
    background-image: url(${(props) => props.imageurl});
    background-size: cover;
    background-position: center;
  }
`;

export default Testimonial;
