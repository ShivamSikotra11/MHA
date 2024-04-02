import React from "react";
import styled from "styled-components";

const Causes = ({ data }) => {
  const { causes } = data;
  return (
    <Wrapper>
      <div className="grid grid-cols-2  items-center my-10">
        <div className="border border-primary_dark  causes-image w-[40rem] h-[45rem] bg-primary_dark rounded-[3rem] justify-self-center "></div>

        <div className=" ml-[16rem] text-[2.5rem] h-full ">
          <h2>Causes</h2>
          <ol className="list-decimal">
            {causes.map((e, index) => (
              <li key={index}>{e}</li>
            ))}
          </ol>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .causes-image {
    background: url("causes.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;
export default Causes;
