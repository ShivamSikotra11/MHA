import React, { createContext, useContext, useReducer, useState } from "react";
import reducer from "../reducers/QuizReducer";
import QuestionsEnglish from "../JSON/QuesEnglish.json";
import QuestionsHindi from "../JSON/QuesHindi.json";
import QuestionsGujarati from "../JSON/QuesGujarati.json";
import axios from "axios";
import { useMainContext } from "./MainContext";
import { usePostContext } from "./PostContext";
const QuizContext = createContext();
const initialState = {
  curLang: "English",
  isQuizSubmitted: false,
};

const QuizProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [Answers, setAnswers] = useState(Array(10).fill(null));
  const { url } = useMainContext();
  const { curUser } = usePostContext();
  const clearAnswers = () => {
    setAnswers(Array(10).fill(null));
    dispatch({ type: "SET_LANGUAGE", payload: "English" });
  };
  const handleSubmitQuiz = async () => {
    const currentDate = new Date();
    let day = String(currentDate.getDate()).padStart(2, "0"); // Ensure two digits
    let month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Months are 0-based
    let year = currentDate.getFullYear();

    // Format date as dd/mm/yyyy
    let date = `${day}/${month}/${year}`;
    dispatch({ type: "ALTER_QUIZ_SUBMISSION" });
    try {
      const data = {
        answer: Answers,
        date: date,
        email: curUser.email,
      };
      const res = await axios.post(`${url}cal_score/`, data);
      dispatch({ type: "ALTER_QUIZ_SUBMISSION" });
      
      // console.log(res);
    } catch (e) {
      console.log(`Error occured ${e}`);
    }
  };
  const changeLang = (lang) => {
    dispatch({ type: "SET_LANGUAGE", payload: lang });
  };
  return (
    <QuizContext.Provider
      value={{
        ...state,
        Answers,
        setAnswers,
        handleSubmitQuiz,
        changeLang,
        clearAnswers,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

const useQuizContext = () => {
  return useContext(QuizContext);
};
export { useQuizContext };
export default QuizProvider;
