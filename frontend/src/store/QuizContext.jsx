import React, { createContext, useContext, useReducer, useState } from "react";
import reducer from "../reducers/QuizReducer";
import QuestionsEnglish from "../JSON/QuesEnglish.json";
import QuestionsHindi from "../JSON/QuesHindi.json";
import QuestionsGujarati from "../JSON/QuesGujarati.json";
import axios from "axios";
const QuizContext = createContext();
const initialState = {
  curLang:"English",
};

const QuizProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [Answers, setAnswers] = useState(Array(10).fill(null));
  const [submitted, setSubmitted] = useState(Array(10).fill(false));
  const handleSubmitQuiz = async () => {
    try {
      const data= {
        answer:Answers,
      };
      const res = await axios.post("http://localhost:8000/api/cal_score/", data);
  
      console.log(res);
    }
    catch (e) {
      console.log(`Error occured ${e}`);
    }
  }
  const changeLang = (lang) => {
    dispatch({type:"SET_LANGUAGE", payload: lang })
  }
  return (
    <QuizContext.Provider value={{ ...state,Answers,setAnswers,submitted, setSubmitted,handleSubmitQuiz,changeLang }}>
      {children}
    </QuizContext.Provider>
  );
};

const useQuizContext = () => {
  return useContext(QuizContext);
};
export { useQuizContext };
export default QuizProvider;
