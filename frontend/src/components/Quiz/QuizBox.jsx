import React from "react";
import Options from "./Options";
import QuesCount from "./QuesCount";
import QuestionsJSON from "../../store/Questions.json";
import StopWatch from "./StopWatch";
import { CiClock2 } from "react-icons/ci";
import { useQuizContext } from "../../store/QuizContext";
import ButtonDiv from "../ButtonDiv";
import { usePostContext } from "../../store/PostContext";
import Toast from "../Toast";
import { useNavigate } from "react-router-dom";
import Tabs from "../Tabs";

const QuizBox = ({ qn = QuestionsJSON[0] }) => {
  const redirect = useNavigate();
  const { Answers, setAnswers, handleSubmitQuiz } = useQuizContext();
  const { InvokeToast } = usePostContext(); 
  const submittedQns = () => {
    return Answers.filter((e) => e != null).length;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(Answers.filter((e) => e != null).length);
    if (Answers.filter((e) => e != null).length < 10)
      InvokeToast("error", "Please answer all questions before submitting");
    else
    {  
      handleSubmitQuiz();
      // redirect("/");
    }
  }
  return (
    <div className="w-[100%] p-[2rem] grid grid-cols-4">
      <Toast/> 
      <div className="col-start-1  flex w-[100%] ">
        <CiClock2 size={40} />
        <StopWatch />
      </div>
      <div className="col-start-4 flex justify-center items-center">
        <ButtonDiv value={"End Quiz"} onClickFunction={handleSubmit} />
      </div>

      <div className="font-inter text-4xl my-8 flex items-center  ">Question {qn.id} of 10</div>

      <div className="font-inter flex justify-center  col-start-4 text-4xl my-8  ">
        <Tabs/>
      </div>
      <div className="col-start-1  col-span-3">

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
