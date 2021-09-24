import axios from "axios";

const userLoginService = (serviceData_signIn) => {
  console.log("in service call", serviceData_signIn);
  console.log("inside login service");
  //   const signInDetails = { userName: "chandu", password: "test123" };
  //   const headers = {
  //     Authorization: "Bearer my-token",
  //     "My-Custom-Header": "foobar",
  //   };
  axios
    .post("http://192.168.18.3:7788/user/login", serviceData_signIn)
    .then((response) => console.log(" res_SignIn : ", response));
};
async function user_SignUp_Service(serviceData_signUp) {
  const returnResponse = await axios
    .post("http://192.168.18.3:7788/user/register", serviceData_signUp)
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

const createRecipe_Service = (serviceData_CreateRecipe) => {
  console.log("in services call:", serviceData_CreateRecipe);
  axios
    .post("", serviceData_signIn)
    .then((response) => console.log(" res_SignIn : ", response));
};

export { userLoginService, user_SignUp_Service, createRecipe_Service };
