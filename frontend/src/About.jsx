import React from "react";
import AxiosAPI from "./AxiosAPI";
import AddPersonForm from "./AddPersonForm";
import { useConditionContext } from "./store/ConditionContext";

const About = () => {
  const { AlterFetchStatus } = useConditionContext();
  return (
    <div>
      
      <AxiosAPI></AxiosAPI>
      <AddPersonForm />
    </div>
  );
};

export default About;
