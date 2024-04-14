import React, { createContext, useContext, useReducer } from "react";
import reducer from "../reducers/ConditionReducer";
import JSONdata from "../JSON/conditionsData.json";

const ConditionContext = createContext("");

const initialState = {
  ConditionData: JSONdata[0],
  curCondition: "Depression",
  isLoading: false,
  isError: false,
  isFetching: false,
};

const ConditionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const showCondition = (condition) => {
    dispatch({ type: "SET_API_DATA", payload: JSONdata, condition: condition });
  };
  const AlterFetchStatus = (value) => {
    dispatch({ type: "ALTER_FETCH", payload: value });
  };
  return (
    <ConditionContext.Provider
      value={{ ...state, showCondition, AlterFetchStatus}}
    >
      {children}
    </ConditionContext.Provider>
  );
};

const useConditionContext = () => {
  return useContext(ConditionContext);
};

export { useConditionContext };
export default ConditionProvider;
