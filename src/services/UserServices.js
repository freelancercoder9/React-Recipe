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
const user_SignUp_Service = (serviceData_signUp) => {
  console.log("in sign up service");
  axios
    .post("http://192.168.18.3:7788/user/register", serviceData_signUp)
    .then((response) => console.log(" res_SignUp : ", response))
    .catch((err) => {
      //   console.log("error msgs:", err.response.data.message);
      return err.response.data.message;
    });
};

export { userLoginService, user_SignUp_Service };
