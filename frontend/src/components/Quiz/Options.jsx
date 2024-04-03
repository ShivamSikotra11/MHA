import React, { useEffect, useState } from "react";
import Option from "./Option";
import { useQuizContext } from "../../store/QuizContext";

const Options = ({ data, id }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const { Answers,setAnswers } = useQuizContext();

  useEffect(() => {
    setSelectedOption(Answers[id - 1]);
  }, [Answers, id]);

  const setOption = (optionKey) => {
    if (selectedOption === optionKey) {
      setSelectedOption(null);
      const updatedAnswers = [...Answers];
      updatedAnswers[id - 1] = null;
      setAnswers(updatedAnswers);
    } else {
      setSelectedOption(optionKey);
      const updatedAnswers = [...Answers];
      updatedAnswers[id - 1] = optionKey;
      setAnswers(updatedAnswers);
    }
  };
  

  return (
    <div className="grid  gap-9 mx-[3rem] ">
      {data.map((option, index) => (
        <Option
          key={option.key}
          option={option}
          isSelected={selectedOption === option.key}
          checkOption={setOption}
        />
      ))}
    </div>
  );
};

export default Options;