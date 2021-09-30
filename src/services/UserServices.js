import axios from "axios";

async function userLoginService(serviceData_signIn) {
  console.log("in service call", serviceData_signIn);
  console.log("inside login service");
  //   const signInDetails = { userName: "chandu", password: "test123" };
  //   const headers = {
  //     Authorization: "Bearer my-token",
  //     "My-Custom-Header": "foobar",
  //   };
  const returnResponse = await axios
    .post("https://chrecipeserver.herokuapp.com/user/login", serviceData_signIn)
    .then((response) => {
      console.log("Success response : ", response);
      return response.data;
    })
    .catch((err) => {
      console.log("catch response : ", err);
      return err.response.data;
    });
  return returnResponse;
}
async function user_SignUp_Service(serviceData_signUp) {
  const returnResponse = await axios
    .post(
      "https://chrecipeserver.herokuapp.com/user/register",
      serviceData_signUp
    )
    .then((response) => {
      console.log("Success response : ", response);
      return response.data;
    })
    .catch((err) => {
      console.log("catch response : ", err);
      return err.response.data;
    });
  console.log("res in service call :", returnResponse);
  return returnResponse;
}

async function createRecipe_Service(serviceData_CreateRecipe, accessToken) {
  const headers = {
    "x-access-token": accessToken,
  };
  console.log("in services call:", serviceData_CreateRecipe, { headers });
  const returnResponse = await axios
    .post(
      "https://chrecipeserver.herokuapp.com/recipe/create",
      serviceData_CreateRecipe,
      { headers }
    )
    .then((response) => {
      console.log(" create  recipe : ", response);
      return response.data;
    })
    .catch((err) => {
      console.log("catch response : ", err);
      return err.response.data;
    });
  console.log("res in service call :", returnResponse);
  return returnResponse;
}

async function getRecipe_Info(getRecipeInfo, accessToken) {
  const headers = {
    "x-access-token": accessToken,
  };
  console.log("in service call:", getRecipeInfo, headers);
  var url = "https://chrecipeserver.herokuapp.com/recipe/" + getRecipeInfo;
  const returnResponse = await axios
    .get(url, { headers })
    .then((response) => {
      console.log("response:", response);
      return response.data;
    })
    .catch((err) => {
      console.log("catch response :", err);
      return err.response.data;
    });
  console.log("res in service call :", returnResponse);
  return returnResponse;
}

export {
  userLoginService,
  user_SignUp_Service,
  createRecipe_Service,
  getRecipe_Info,
};
