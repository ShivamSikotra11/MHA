import React from "react";
import { useConditionContext } from "../../store/ConditionContext";

const Photos = () => {
  const { showCondition, curCondition } = useConditionContext();
  
  return (
    <div className="flex h-[40rem]  justify-evenly items-center my-4">
      <div
        className={` ${
          curCondition === "Depression"
            ? "ConditionActive"
            : "ConditionInactive"
        } rounded-[3rem]  cursor-pointer   flex justify-center items-center text-6xl`}
        onClick={() => showCondition("Depression")}
      >
        Depression
      </div>
      <div
        className={` ${
          curCondition === "Stress" ? "ConditionActive" : "ConditionInactive"
        } rounded-[3rem]  cursor-pointer   flex justify-center items-center text-6xl`}
        onClick={() => showCondition("Stress")}
      >
        Stress
      </div>
      <div
        className={` ${
          curCondition === "Anxiety" ? "ConditionActive" : "ConditionInactive"
        } rounded-[3rem]  cursor-pointer   flex justify-center items-center text-6xl`}
        onClick={() => showCondition("Anxiety")}
      >
        Anxiety
      </div>
    </div>
  );
};

export default Photos;
