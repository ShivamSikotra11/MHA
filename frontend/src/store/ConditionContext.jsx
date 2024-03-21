import React, { createContext, useContext, useReducer } from "react";
import reducer from "../reducers/ConditionReducer";
import JSONdata from "./conditionsData.json";

const ConditionContext = createContext("");

const initialState = {
  ConditionData: JSONdata[0],
  curCondition: "Depression",
  isLoading: false,
  isError: false,
};

const ConditionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const showCondition = (condition) => {
    dispatch({ type: "SET_API_DATA", payload: JSONdata, condition: condition });
  };

  // const getConditionData = async () => {
  //   try {
  //     // const response = await fetch("skills.json");
  //     // const data = await response.text();
  //     // const trimmedData = data.trim();
  //     // const jsonData = JSON.parse(trimmedData);

  //     // const resp = await fetch("./skills.json");
  //     // const resp = await fetch("./skills.json", {
  //     //   headers: {
  //     //     accept: "application/json",
  //     //     "User-agent": "learning app",
  //     //   },
  //     // });
  //     const jsonData = await resp.json();
  //     console.log(jsonData);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getConditionData();
  // }, []);

  return (
    <ConditionContext.Provider value={{ ...state, showCondition }}>
      {children}
    </ConditionContext.Provider>
  );
};

const useConditionContext = () => {
  return useContext(ConditionContext);
};

export { useConditionContext };
export default ConditionProvider;
