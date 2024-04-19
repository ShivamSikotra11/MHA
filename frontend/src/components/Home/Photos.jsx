import React from "react";
import { useConditionContext } from "../../store/ConditionContext";

const Photos = () => {
  const { showCondition, curCondition } = useConditionContext();
  
  return (
    <div className="flex h-[40rem]  justify-evenly items-center my-4">
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
  );
};

export default Photos;
