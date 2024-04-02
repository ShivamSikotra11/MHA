import React from "react";
import styled from "styled-components";
import ShowPost from "./components/Interaction/ShowPost";
import UserStats from "./components/Interaction/UserStats";
import UserForum from "./components/Interaction/UserForum";

const Interaction = () => {
  return (
    <Wrapper className="">
      <div className="img-container flex items-center justify-center text-[6rem] text-primary_dark ">
        <div className="content capitalize font-inter">
          Interact with other user
        </div>
      </div>
      <div className="grid grid-cols-6 p-4 ">
        <div className="p-8 col-span-4   ">
          <UserStats />
          <UserForum />
        </div>
        <div className="col-span-2   p-8">
          <ShowPost />
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .img-container {
    background: url("hills.jpg");
    // width: 100%;
    height: 20vh;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

export default Interaction;
