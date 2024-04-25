import React, { useEffect, useState } from "react";
import Option from "./Option";
import { useQuizContext } from "../../store/QuizContext";

const Options = ({ data, id }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const { Answers, setAnswers } = useQuizContext();
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    setSelectedOption(Answers[id - 1]);
  }, [Answers, id]);

  const setOption = (optionWeightage) => {
      setSelectedOption(optionWeightage);
      const updatedAnswers = [...Answers];
      updatedAnswers[id - 1] = optionWeightage;
      setAnswers(updatedAnswers);
  };
 
  return (
    <div className="grid  gap-9 mx-[3rem] ">
      {data.map((option, index) => (
        <Option
          key={index}
          option={option}
          isSelected={selectedOption === option.weightage}
          checkOption={setOption}
        />
      ))}
    </div>
    // <div className="grid  gap-9 mx-[3rem] ">
    //   {data.map((option, index) => (
    //     <Option
    //       key={option.key}
    //       option={option}
    //       isSelected={selectedOption === option.key}
    //       checkOption={setOption}
    //     />
    //   ))}
    // </div>
  );
};

export default Options;




// import React, { useEffect, useState } from "react";
// import Option from "./Option";
// import { useQuizContext } from "../../store/QuizContext";

// const Options = ({ data, id }) => {
//   const [selectedOption, setSelectedOption] = useState(null);
//   const { Answers, setAnswers } = useQuizContext();
//   const [currentIndex, setCurrentIndex] = useState(0); // Track current index for arrow key navigation

//   useEffect(() => {
//     setSelectedOption(Answers[id - 1]);
//   }, [Answers, id]);
//   useEffect(() => {
//     setCurrentIndex(0);
//   }, [data,id]);

//   const setOption = (optionWeightage) => {
//     setSelectedOption(optionWeightage);
//     const updatedAnswers = [...Answers];
//     updatedAnswers[id - 1] = optionWeightage;
//     setAnswers(updatedAnswers);
//   };
//   console.log(id,currentIndex);
//   useEffect(() => {
//     const handleKeyDown = (event) => {
//       if (event.key === "ArrowDown") {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
//         setOption(data[currentIndex].weightage);
//       }
//     };

//     window.addEventListener("keydown", handleKeyDown);

//     // Cleanup event listener
//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//     };
//   }, [currentIndex, data, setOption]);

//   return (
//     <div className="grid gap-9 mx-[3rem]">
//       {data.map((option, index) => (
//         <Option
//           key={index}
//           option={option}
//           isSelected={selectedOption === option.weightage}
//           checkOption={() => setOption(option.weightage)}
//         />
//       ))}
//     </div>
//   );
// };

// export default Options;
