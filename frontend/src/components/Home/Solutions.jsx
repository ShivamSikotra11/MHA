import React from "react";
import styled from "styled-components";

const Causes = ({ data }) => {
  const { solutions } = data;
  return (
    <Wrapper>
      <div className=" flex items-center my-10   justify-between">
        <div className=" text-[2.5rem] flex flex-col   h-full justify-between w-1/2">
          <h2>Solutions</h2>
          <div className="flex flex-col space-y-6   ">
            {solutions.map((e, i) => (
              <div className="" >
              <span className="text-5xl font-medium">{e.heading} :-  </span>
              <span className="text-4xl   text-justify  "> {e.content} </span>
          </div>
            ))}
          </div>
        </div>
        
        <div className="flex items-center" ><div className="border border-primary_dark  solutions-img w-[40rem] h-[45rem] bg-primary_dark rounded-[3rem] justify-self-center "></div></div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width:80%;
  .solutions-img {
    background: url("solutions.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

export default Causes;
