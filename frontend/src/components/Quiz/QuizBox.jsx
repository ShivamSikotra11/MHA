import React from "react";
import Options from "./Options";
import QuesCount from "./QuesCount";
import QuestionsJSON from "../../store/Questions.json";
import StopWatch from "./StopWatch";
import { CiClock2 } from "react-icons/ci";
import { useQuizContext } from "../../store/QuizContext";
import ButtonDiv from "../ButtonDiv";

const QuizBox = ({ qn = QuestionsJSON[0] }) => {
  const { Answers, setAnswers } = useQuizContext();

  const submittedQns = () => {
    return Answers.filter((e) => e != null).length;
  };

  return (
    <div className="w-[100%] p-[2rem] grid grid-cols-4">
      <div className=" flex w-[100%] ">
        <CiClock2 size={40} />
        <StopWatch />
      </div>
      <div className="col-start-4 flex justify-center items-center">
        <ButtonDiv value={"End Quiz"} />
      </div>
      <div className="col-start-1  col-span-3">
        <div className="font-inter text-4xl my-8">Question {qn.id} of 10</div>

        <div className="question font-inter text-4xl my-8">{qn.question}</div>

        <Options data={qn.options} id={qn.id}></Options>
      </div>
      <div className="col-start-4 grid place-items-center mt-[30%]">
        <QuesCount count={submittedQns()}></QuesCount>
      </div>
    </div>
  );
};

export default QuizBox;
