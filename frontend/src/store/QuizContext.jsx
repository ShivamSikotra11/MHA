import React, { createContext, useContext, useReducer, useState } from "react";
import reducer from "../reducers/QuizReducer";
import QuestionsEnglish from "../JSON/QuesEnglish.json";
import QuestionsHindi from "../JSON/QuesHindi.json";
import QuestionsGujarati from "../JSON/QuesGujarati.json";
import axios from "axios";
import { useMainContext } from "./MainContext";
const QuizContext = createContext();
const initialState = {
  curLang:"English",
};

const QuizProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [Answers, setAnswers] = useState(Array(10).fill(null));
  const { url } = useMainContext();
  const clearAnswers = () =>{
    setAnswers(Array(10).fill(null));
    dispatch({type:"SET_LANGUAGE", payload: "English" })
  }
  const handleSubmitQuiz = async () => {
    try {
      const data= {
        answer:Answers,
      };
      const res = await axios.post(
        `${url}cal_score/`,
        data  
      );
  
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
    <QuizContext.Provider value={{ ...state,Answers,setAnswers, handleSubmitQuiz,changeLang,clearAnswers }}>
      {children}
    </QuizContext.Provider>
  );
};

const useQuizContext = () => {
  return useContext(QuizContext);
};
export { useQuizContext };
export default QuizProvider;
