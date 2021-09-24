// Sign Up

export const getSignUp_UserName = (userName) => {
  return {
    type: "SIGNUP_USER_NAME",
    payload: userName,
  };
};
export const getEmailId = (emailId) => {
  return {
    type: "EMAIL_ID",
    payload: emailId,
  };
};

export const getSignUpPassword = (password) => {
  return {
    type: "SIGNUP_PASSWORD",
    payload: password,
  };
};

// Create Recipe
export const getRecipeName = (recipeName) => {
  return {
    type: "RECIPE_NAME",
    payload: recipeName,
  };
};

export const getIngName_Quatity = (name_Quantity) => {
  return {
    type: "ING_NAME_QUANTITY",
    payload: name_Quantity,
  };
};
export const getStepNo_desc = (stepNo_desc) => {
  return {
    type: "STEPNUM_DESC",
    payload: stepNo_desc,
  };
};

// Sign In
export const getUserName = (userName) => {
  return {
    type: "SIGNIN_USERNAME",
    payload: userName,
  };
};
export const getPassword = (password) => {
  return {
    type: "SIGNIN_PASSWORD",
    payload: password,
  };
};
// export const getAccessToken = (accessToken) => {
//   return {
//     type: "ACCESS_TOKEN",
//     payload: accessToken,
//   };
// };

export const getUserSession_Data = (User_Data) => {
  return {
    type: "USER_SESSION",
    payload: User_Data,
  };
};
