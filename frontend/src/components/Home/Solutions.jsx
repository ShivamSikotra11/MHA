import React from "react";
import styled from "styled-components";

const Causes = ({ data }) => {
  const { solutions } = data;
  return (
    <Wrapper>
      <div className=" flex items-center my-10   justify-between">
        <div className="  flex flex-col   h-full justify-between w-1/2 max-[870px]:w-full">
          <h2 className="max-[600px]:text-5xl" >Solutions</h2>
          <div className="flex flex-col space-y-6   ">
            {solutions.map((e, i) => (
              <div className="text-justify" key={i} >
              <span className="text-5xl max-[981px]:text-4xl max-[600px]:text-3xl font-medium">{e.heading} :-  </span>
              <span className="text-4xl max-[981px]:text-3xl max-[600px]:text-2xl  text-justify  "> {e.content} </span>
          </div>
            ))}
          </div>
        </div>
        
        <div className="flex items-center max-[870px]:hidden" ><div className="border border-primary_dark  solutions-img w-[40rem] h-[45rem] bg-primary_dark rounded-[3rem] justify-self-center max-[981px]:w-[35rem] max-[981px]:h-[40rem] "></div></div>
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
