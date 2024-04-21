import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import "../../styles/quiz.css"; 
import QuizBoxMobile from "./QuizBoxMobile";
import QuestionsEnglish from "../../JSON/QuesEnglish.json";
import QuestionsHindi from "../../JSON/QuesHindi.json";
import QuestionsGujarati from "../../JSON/QuesGujarati.json";
import { useQuizContext } from "../../store/QuizContext";
import { usePostContext } from "../../store/PostContext";
import StopWatch from "./StopWatch";
import { CiClock2 } from "react-icons/ci";
import ButtonDiv from "../ButtonDiv";
// import TabsMobile from "../TabsMobile";
import TabsMobile from "../TabsMobile";
import { useNavigate } from "react-router-dom";

function Items({ currentItems }) {
  return (
    <div className="">
      {currentItems &&
        currentItems.map((item, index) => (
          <QuizBoxMobile key={index} qn={item}></QuizBoxMobile>
        ))}
    </div>
  );
}

function PaginatedItems() {
  const { curLang } = useQuizContext();
  const redirect = useNavigate();
  const [items, setItems] = useState(QuestionsEnglish);
  const { Answers, setAnswers, handleSubmitQuiz } = useQuizContext();
  const { InvokeToast } = usePostContext(); 
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
  
  useEffect(() => {
    // Update the items based on the current language
    switch (curLang) {
      case "English":
        setItems(QuestionsEnglish);
        break;
      case "Hindi":
        setItems(QuestionsHindi);
        break;
      case "Gujarati":
        setItems(QuestionsGujarati);
        break;
      default:
        setItems(QuestionsEnglish); 
        break;
    }
  }, [curLang]);

 

  return (
    <div className="inline-block rounded-3xl bg-primary_elight border pb-8 w-[90%]">
      <div className="flex justify-evenly mt-8 max-[406px]:flex-col items-center" >
        <div className="  flex   ">
          <CiClock2 size={40} />
          <StopWatch />
        </div>
        {/* <div className="  flex justify-center items-center">
          <ButtonDiv value={"End Quiz"} onClickFunction={handleSubmit} />
        </div> */}
        <div className="font-inter flex justify-center   text-4xl my-8  ">
            <TabsMobile/>
          </div>
      </div>
      <Items currentItems={items} />
      <div className="  flex justify-center items-center">
          <ButtonDiv value={"End Quiz"} onClickFunction={handleSubmit} />
        </div>
    </div>
  );
}

export default PaginatedItems;
