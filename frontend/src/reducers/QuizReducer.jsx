const QuizReducer = (state, action) => {
  switch (action.type) {
    case "SET_OPTION":
      return { ...state, isLoading: true };
    case "SET_LANGUAGE":
      return { ...state, curLang:action.payload };
    default:
      return state;
  }
};

export default QuizReducer;
