import React from "react";
import styled from "styled-components";

const Causes = ({ data }) => {
  const { causes } = data;
  return (
    <Wrapper>
      <div className=" flex items-center my-10    justify-between" >
        <div className="flex items-center" ><div className="border border-primary_dark  causes-image w-[40rem] h-[45rem] bg-primary_dark rounded-[3rem] justify-self-center "></div></div>

        <div className="w-1/2 text-[2.5rem] flex flex-col    justify-between ">
          <h2 className=" " >Causes</h2>
          <div className="flex flex-col space-y-6   pb-6">
            {causes.map((e, i) => (
              <div className="text-justify" >
                  <span className="text-5xl font-medium">{e.heading} :-  </span>
                  <span className="text-4xl   "> {e.content} </span>
              </div>
            ))}
          </div>
        </div>
         
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  width:80%;
  // border:2px solid red;
  .causes-image {
    background: url("causes.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
 
  
`;
export default Causes;
