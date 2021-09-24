const signUpReducer = (state = {}, action) => {
  switch (action.type) {
    case "SIGNUP_USER_NAME":
      return (state = { ...state, userName: action.payload });
    case "EMAIL_ID":
      return (state = { ...state, email: action.payload });
    case "SIGNUP_PASSWORD":
      return (state = { ...state, password: action.payload });

    default:
      return state;
  }
};
export default signUpReducer;
