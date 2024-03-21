import React from "react";
import Causes from "./Causes";
import Solutions from "./Solutions";
import { useConditionContext } from "../../store/ConditionContext";
const ConditionContent = () => {
  const { ConditionData } = useConditionContext();
  
  return (
    <div>
      <Causes data={ConditionData} />
      <Solutions data={ConditionData} />
    </div>
  );
};

export default ConditionContent;
