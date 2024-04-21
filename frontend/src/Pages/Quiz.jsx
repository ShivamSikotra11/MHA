import React, { useEffect } from "react";
import styled from "styled-components";
import QuizBox from "../components/Quiz/QuizBox";
import PaginatedItems from "../components/Quiz/PaginatedItems";
import PaginatedItemsMobile from "../components/Quiz/PaginatedItemsMobile";
import { useQuizContext } from "../store/QuizContext";
import Toast from "../components/Toast";

const Quiz = () => {
  const { clearAnswers } = useQuizContext();
  useEffect(() => {
    clearAnswers();
  },[])
  return (
    <Wrapper>
      <Toast/> 
      <div className="img-container flex items-center justify-center  text-primary_dark ">
        <div className="content capitalize font-inter text-center text-[5.4rem] max-[900px]:text-[4.7rem] max-[763px]:text-[4rem] max-[655px]:text-[3rem] ">
        Answer Simple Questions About You
        </div>
      </div>
      <div className="flex justify-center my-[5rem] max-[581px]:hidden">
        <PaginatedItems />
      </div>
      <div className="flex   justify-center my-[5rem] min-[582px]:hidden">
        <PaginatedItemsMobile />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  background-color: white;
  .img-container {
    background: url("hills.jpg");
    // width: 100%;
    height: 15vh;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

export default Quiz;
