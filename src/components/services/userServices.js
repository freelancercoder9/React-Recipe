import axios from "axios";

const userLoginService1 = () => {
  console.log("inside login service");
  const article = { userName: "chandu", password: "test123" };
  //   const headers = {
  //     Authorization: "Bearer my-token",
  //     "My-Custom-Header": "foobar",
  //   };
  axios.post("http://localhost:7788/user/login", article).then((response) => console.log(" res : ", response));
};
export default userLoginService1;
