const PostReducer = (state, action) => {
  switch (action.type) {
    case "SET_SHOW_POST":
      return {
        ...state,
        showPost: state.allPosts.find(
          (post) => post.timestamp + '_' + post.user_email.substr(0, post.user_email.indexOf('@')) === action.id),
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
    case "TOGGLE_CREATE_POST":
      return {
        ...state,
        createPost: !state.createPost,
      };
    case "TOGGLE_NEW_POST_POSTED":
      return {
        ...state,
        isNewPostPosted: !state.isNewPostPosted,
      };
    case "SET_ALL_POSTS":
      return {
        ...state,
        allPosts:action.payload,
      };
    default:
      return state;
  }
};
export default PostReducer;
