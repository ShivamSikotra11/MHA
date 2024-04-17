const MainReducer = (state, action) => {
  switch (action.type) {
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
    case "ALTER_USER_PROFILE_UPDATING":
      return {
        ...state,
        isuserProfileUpdating: !state.isuserProfileUpdating,
      };
    default:
      return state;
  }
};

export default MainReducer;
