const PostReducer = (state, action) => {
  switch (action.type) {
    case "SET_SHOW_POST":
      return {
        ...state,
        showPost: action.payload.find((post) => post.id === action.id),
      };
    case "ALTER_LOGIN_FETCHING":
      return {
        ...state,
        isLoginFetching: !state.isLoginFetching
      };
    case "SET_CURRENT_USER":
      return {
        ...state,
        curUser: action.payload,
        loggedIn:true,
        isLoginFetching: false
      };
    case "LOG_OUT_USER":
      return {
        ...state,
        loggedIn:false,
        curUser:{},
      };
    default:
      return state;
  }
};
export default PostReducer;
