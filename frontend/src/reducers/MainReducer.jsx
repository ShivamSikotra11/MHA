const MainReducer = (state, action) => {
  switch (action.type) {
    case "ALTER_USER_POSTS_FETCHING":
      return {
        ...state,
        isuserPostsFetching: !state.isuserPostsFetching,
      };
    case "ALTER_USER_POST_DELETED":
      return {
        ...state,
        isuserPostDeleted: !state.isuserPostDeleted,
      };
    case "SET_USER_POSTS":
      return {
        ...state,
        userPosts: action.payload,
      };
    case "SET_TOAST":
      return {
        ...state,
        toastActive: true,
        toastData: action.payload,
      };
    case "CLEAR_TOAST":
      return {
        ...state,
        toastData: {},
        toastActive: false,
      };
    default:
      return state;
  }
};

export default MainReducer;
