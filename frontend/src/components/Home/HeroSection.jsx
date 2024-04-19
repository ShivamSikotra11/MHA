import React from "react";
import styled from "styled-components";
import Button from "../Button";
import { usePostContext } from "../../store/PostContext";

const HeroSection = () => {
  const { curUser , loggedIn } = usePostContext();

  return (
    <Wrapper>
      <div className="hero-container grid grid-cols-12 grid-rows-5">
        <div className="col-start-2 col-span-5 row-start-2 row-span-3">
          <div className="tagline w-full text-[4rem] max-[870px]:text-[3rem] text-center">
            You are Not Alone, We are With You{" "}
            {curUser.hasOwnProperty("name") ? `, ${curUser.name}` : ""}
          </div>
          <div className="box-content mb-4 text-[2.7rem] max-[870px]:text-[2rem]  text-center max-[590px]:hidden" >
            Join our supportive community for guidance and
            understanding.Together, we'll navigate your mental health journey
          </div>
          {
            !loggedIn &&
          <Button value={"Get Started"} Goto={"/register"} />
          }
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .hero-container {
    background: url("hero.jpg");
    // width: 100%;
    height: 90vh;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;
export default HeroSection;
