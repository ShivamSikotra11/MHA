import React from "react";
import styled from "styled-components";
import Button from "../Button";
import { usePostContext } from "../../store/PostContext";
import { NavLink } from "react-router-dom";

const HeroSection = () => {
  const { curUser, loggedIn } = usePostContext();

  return (
    <Wrapper>
      <div className="hero-container grid grid-cols-12 grid-rows-5 max-[510px]:hidden">
        <div className="col-start-2 col-span-5 row-start-2 row-span-3 mx-auto ">
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
          <div className="flex justify-center" ><Button value={"Get Started"} Goto={"/register"} /></div>
          }
        </div>
      </div>
      <div className="hero-container flex justify-center items-center min-[511px]:hidden">
        <div className=" w-[80%] ">
          <div className="tagline w-full text-[4rem] max-[870px]:text-[3rem] text-center">
            You are Not Alone, We are With You{" "}
            {curUser.hasOwnProperty("name") ? `, ${curUser.name}` : ""}
          </div>
          <div className="box-content mb-4 text-[2.7rem] max-[870px]:text-[2rem]  text-center max-[590px]:hidden">
            Join our supportive community for guidance and
            understanding.Together, we'll navigate your mental health journey
          </div>
          {!loggedIn && (
            <div className="flex  justify-center" >
              <NavLink
                className={`font-inter text-white text-[2.5rem]  bg-primary_dark px-16  rounded-full cursor-pointer inline-block`}
                to={"/register"}
              >
                Get Started
              </NavLink>
            </div>
          )}
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
