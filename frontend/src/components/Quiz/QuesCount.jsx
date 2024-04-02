import React from "react";
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const QuesCount = ({ count = 1 }) => {
  
  return (
    <div className="w-[18rem]  h-[18rem] ">
      <CircularProgressbarWithChildren
        value={count * 10}
        styles={buildStyles({
          pathColor: `#00668C`,
        })}
      >
        <p className="text-[3rem] font-extrabold">{count}/10 </p>
      </CircularProgressbarWithChildren>
    </div>
  );
};

export default QuesCount;
