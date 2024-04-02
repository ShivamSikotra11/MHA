import React from "react";
import styled from "styled-components";

const Causes = ({ data }) => {
  const { solutions } = data;
  return (
    <Wrapper>
      <div className=" grid grid-cols-2    items-center my-10">
        <div className=" text-[2.5rem] flex flex-col  justify-center ml-[16rem]">
          <h2>Solutions</h2>
          <ol className="list-decimal">
            {solutions.map((e, i) => (
              <li key={i}>{e}</li>
            ))}
          </ol>
        </div>
        <div className="border border-primary_dark  solutions-img w-[40rem] h-[45rem] bg-primary_dark rounded-[3rem] justify-self-center "></div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .solutions-img {
    background: url("solutions.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

export default Causes;
