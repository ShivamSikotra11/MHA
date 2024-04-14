import React, { createContext, useContext, useReducer } from 'react'
import reducer from '../reducers/MainReducer';
const MainContext = createContext("");

const initialItems = {
  url: "http://localhost:8000/api/",
};

const MainProvider = ({ children }) => {
  const [state,dispatch] = useReducer(reducer,initialItems);
  return <MainContext.Provider value={{...state}}>
   {children}
 </MainContext.Provider>
}
const useMainContext = () => {
  return useContext(MainContext);
}
export { useMainContext };
export default MainProvider;