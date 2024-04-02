const QuizReducer = (state, action) => {
  switch (action.type) {
    case "SET_OPTION":
      return { ...state, isLoading: true };
    default:
      return state;
  }
};

export default QuizReducer;
