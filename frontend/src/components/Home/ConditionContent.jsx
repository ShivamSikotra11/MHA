import React from "react";
import Causes from "./Causes";
import Solutions from "./Solutions";
import { useConditionContext } from "../../store/ConditionContext";
const ConditionContent = () => {
  const { ConditionData , curCondition } = useConditionContext();
  
  return (
    <div className="flex   flex-col items-center justify-center" >
      {/* <p className="text-center font-semibold font-habibi text-4xl " >{curCondition}</p> */}
      <h2 className="text-center font-medium  ">{curCondition}</h2>
      <Causes data={ConditionData} />
      <Solutions data={ConditionData} />
    </div>
  );
};

export default ConditionContent;
