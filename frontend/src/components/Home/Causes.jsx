import React from "react";

const Causes = ({ data }) => {
  const { causes } = data;
  return (
    <div className="grid grid-cols-2   items-center my-10">
      <div className=" w-[30rem] h-[35rem] bg-primary_dark rounded-[3rem] justify-self-center "></div>
      <div className="text-[2.5rem]">
        <h2>Causes</h2>
        <ol className="list-decimal">
          {causes.map((e, index) => (
            <li key={index}>{e}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Causes;
