import React, { useEffect } from "react";
import styled from "styled-components";
import QuizBox from "../components/Quiz/QuizBox";
import PaginatedItems from "../components/Quiz/PaginatedItems";
import { useQuizContext } from "../store/QuizContext";

const Quiz = () => {
  const { clearAnswers } = useQuizContext();
  useEffect(() => {
    clearAnswers();
  },[])
  return (
    <Wrapper>
      <div className="img-container flex items-center justify-center text-[6rem] text-primary_dark">
        <div className="content">Answer Simple Questions About You</div>
      </div>
      <div className="flex justify-center mt-[5rem] ">
        <PaginatedItems />
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
