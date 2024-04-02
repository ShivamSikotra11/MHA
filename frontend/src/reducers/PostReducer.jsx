const PostReducer = (state, action) => {
  switch (action.type) {
    case "SET_SHOW_POST":
      return {
        ...state,
        showPost: action.payload.find((post) => post.id === action.id),
      };
    default:
      return state;
  }
};
export default PostReducer;
