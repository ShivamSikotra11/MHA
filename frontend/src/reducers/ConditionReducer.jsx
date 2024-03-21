const ConditionReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, isLoading: true };
    case "API_ERROR":
      return { ...state, isLoading: false, isError: true };
    case "SET_API_DATA":
      return {
        ...state,
        curCondition:action.condition,
        ConditionData: action.payload.find(data => data.condition === action.condition)
      };
    default:
      return state;
  }
};

export default ConditionReducer;
