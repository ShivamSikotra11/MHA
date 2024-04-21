import React from "react";
import Options from "./Options";
import QuesCount from "./QuesCount";
import StopWatch from "./StopWatch";
import { CiClock2 } from "react-icons/ci";
import { useQuizContext } from "../../store/QuizContext";
import ButtonDiv from "../ButtonDiv";
import { usePostContext } from "../../store/PostContext";
import Toast from "../Toast";
import { useNavigate } from "react-router-dom";
import Tabs from "../Tabs";

const QuizBox = ({ qn}) => {
  const redirect = useNavigate();
  const { Answers, setAnswers, handleSubmitQuiz } = useQuizContext();
  const { InvokeToast } = usePostContext(); 
  const submittedQns = () => {
    return Answers.filter((e) => e != null).length;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(Answers.filter((e) => e != null).length);
    if (Answers.filter((e) => e != null).length < 10)
      InvokeToast("error", "Please answer all questions before submitting");
    else
    {  
      handleSubmitQuiz();
      InvokeToast("success", "Quiz successfully submitted");
      redirect("/");
    }
  }
  return (
    <div className="w-[100%]   p-[1rem]  grid grid-cols-4">
      {/* <Toast/>  */}
      
 
      <div className="col-start-1  col-span-3 max-[937px]:col-span-4">

        <div className="question font-inter text-4xl max-[400px]:text-3xl my-8">
         {qn.id}.{qn.question}
        </div>

        <Options data={qn.options} id={qn.id}></Options>
      </div>
    </div>
  );
};

export default QuizBox;
