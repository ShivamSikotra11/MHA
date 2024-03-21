import React from "react";

const Causes = ({ data }) => {
  const { solutions } = data;
  return (
    <div className="grid grid-cols-2    items-center my-10">
      <div className="text-[2.5rem] flex flex-col  justify-center ml-[6rem]">
        <h2>Solutions</h2>
        <ol className="list-decimal">
          {solutions.map((e, i) => (
            <li key={i}>{e}</li>
          ))}
        </ol>
      </div>
      <div className=" w-[30rem] h-[35rem] bg-primary_dark rounded-[3rem] justify-self-center "></div>
    </div>
  );
};

export default Causes;
