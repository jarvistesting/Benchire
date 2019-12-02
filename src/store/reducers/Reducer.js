const initialState = {
  isLogin: false,
  userDetail: {}
};

const Reducer = (state = initialState, action) => {
  console.log("reducer function", { ...state }, action);

  switch (action.type) {
    case "LOGGEDIN":
      return {
        ...state,
        isLogin: true,
        userDetail: { ...action.payload }
      };
    case "LOGGEDIN_ERROR":
      return {
        ...state,
        isLogin: false,
        userDetail: { ...action.payload }
      };
    default:
      return { ...state };
  }
};

export default Reducer;
