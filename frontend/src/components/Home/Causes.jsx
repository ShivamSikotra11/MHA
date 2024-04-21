import React from "react";
import styled from "styled-components";

const Causes = ({ data }) => {
  const { causes } = data;
  // console.log("Causes Data:", causes);
  return (
    <Wrapper>
      <div className=" flex items-center my-10    justify-between" >
        <div className="flex items-center max-[870px]:hidden" >
          <div className="border border-primary_dark  causes-image w-[40rem] h-[45rem] bg-primary_dark rounded-[3rem] justify-self-center max-[981px]:w-[35rem] max-[981px]:h-[40rem] "></div>
        </div>

        <div className="w-1/2 max-[870px]:w-full  flex flex-col    justify-between ">
          <h2 className="max-[600px]:text-5xl" >Causes</h2>
          <div className="flex flex-col space-y-6   pb-6">
            {causes.map((e, i) => (
              <div className="text-justify" key={i} >
                  <span className="text-5xl max-[981px]:text-4xl max-[600px]:text-3xl font-medium">{e.heading} :-  </span>
                  <span className="text-4xl max-[981px]:text-3xl max-[600px]:text-2xl   "> {e.content} </span>
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
