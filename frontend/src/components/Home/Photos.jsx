import React from "react";
import { useConditionContext } from "../../store/ConditionContext";

const Photos = () => {
  const { showCondition, curCondition } = useConditionContext();
  
  return (
    <div>
      <div className="flex h-[40rem]  justify-evenly items-center my-4 max-[800px]:hidden">
        <img
          className={` ${
            curCondition === "Stress"
              ? "ConditionActive "
              : "ConditionInactive border border-primary_dark"
            } rounded-[3rem]  cursor-pointer   flex justify-center items-center text-6xl`}
            src="stress.jpg"
          onClick={() => showCondition("Stress")}
        />
        <img
          className={` ${
            curCondition === "Depression"
              ? "ConditionActive "
              : "ConditionInactive border border-primary_dark"
            } rounded-[3rem]  cursor-pointer   flex justify-center items-center text-6xl`}
            src="depression.jpg"
          onClick={() => showCondition("Depression")}
        />
        
        <img
          className={` ${
            curCondition === "Anxiety"
              ? "ConditionActive "
              : "ConditionInactive border border-primary_dark"
            } rounded-[3rem]  cursor-pointer   flex justify-center items-center text-6xl`}
            src="anxiety.jpg"
          onClick={() => showCondition("Anxiety")}
        />
      </div>
      <div className="min-[801px]:hidden flex flex-col items-center justify-center space-y-[1rem]">
          <div className={` ${
            curCondition === "Stress"
              ? "ConditionActiveSmall "
              : "ConditionInactiveSmall border border-primary_dark"
            } rounded-[1rem]  cursor-pointer   flex justify-center items-center w-[80%] text-4xl`}
            src="stress.jpg"
          onClick={() => showCondition("Stress")}>Stress</div>
          <div className={` ${
            curCondition === "Depression"
              ? "ConditionActiveSmall "
              : "ConditionInactiveSmall border border-primary_dark"
            } rounded-[1rem]  cursor-pointer   flex justify-center items-center w-[80%] text-4xl`}
            src="stress.jpg"
          onClick={() => showCondition("Depression")}>Depression</div>
          <div className={` ${
            curCondition === "Anxiety"
              ? "ConditionActiveSmall "
              : "ConditionInactiveSmall border border-primary_dark"
            } rounded-[1rem]  cursor-pointer   flex justify-center items-center w-[80%] text-4xl`}
            src="stress.jpg"
          onClick={() => showCondition("Anxiety")}>Anxiety</div>
      </div>
    </div>
  );
};

export default Photos;
