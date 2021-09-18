const SignInReducer = (state = {}, action) => {
  switch (action.type) {
    case "SIGNIN_USERNAME":
      return (state = { ...state, userName: action.payload });
    case "SIGNIN_PASSWORD":
      return (state = { ...state, password: action.payload });

    default:
      return state;
  }
};

export default SignInReducer;
