import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { getPassword, getUserName } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import { userLoginService } from "../services/UserServices";
function SignIn() {
  const dispatch = useDispatch();
  const history = useHistory();
  const signIn_Data = useSelector((state) => state.SignIn);
  const [errorList, setErrorList] = useState({
    isPwdError: true,
    pwdErrorMsg: "",
    isUserNameError: true,
    userNameErrorMsg: "",
  });
  const onClickSignIn = () => {
    console.log(signIn_Data);
    if (errorList.isPwdError === false && errorList.isUserNameError === false) {
      userLoginService(signIn_Data);
      history.push("/dashboard");
    } else {
      setErrorList({
        ...errorList,
        isUserNameError: true,
        userNameErrorMsg: "please enter username",
      });
      setErrorList({
        ...errorList,
        isPwdError: true,
        pwdErrorMsg: "please enter password",
      });
      console.log("please clear validations");
    }
  };
  const onClickBackHome = () => {
    history.push("/");
  };
  return (
    <div className="border-2 border-black rounded-md w-6/12 m-auto mt-20">
      <div className="text-center py-4">
        <label htmlFor="signUp" className="text-2xl font-serif">
          Sign In to your Account
        </label>
      </div>
      <div className="mx-4">
        <div className="flex justify-between py-3">
          <label htmlFor="emailId" className="text-blue-900 font-sans text-xl">
            UserName
          </label>
          <div className="w-7/12">
            <input
              type="text"
              className=" border-2 border-gray-200 w-full h-7 px-2 text-xl font-light"
              onChange={(e) => {
                if (e.target.value.length > 0) {
                  setErrorList({
                    ...errorList,
                    isUserNameError: false,
                    userNameErrorMsg: "",
                  });
                } else {
                  setErrorList({
                    ...errorList,
                    isUserNameError: true,
                    userNameErrorMsg: "please enter username.",
                  });
                }
                dispatch(getUserName(e.target.value));
              }}
            />
            <label htmlFor="" className="text-red-500 text-smz">
              {errorList.userNameErrorMsg}
            </label>
          </div>
        </div>
        <div className="flex justify-between py-3">
          <label htmlFor="password" className="text-blue-900 font-sans text-xl">
            Password
          </label>
          <div className="w-7/12">
            <input
              type="password"
              className=" border-2 border-gray-200 w-full h-7 px-2 text-xl font-light"
              onChange={(e) => {
                if (e.target.value.length > 0) {
                  setErrorList({
                    ...errorList,
                    isPwdError: false,
                    pwdErrorMsg: "",
                  });
                } else {
                  setErrorList({
                    ...errorList,
                    isPwdError: true,
                    pwdErrorMsg: "please enter pwd",
                  });
                }
                dispatch(getPassword(e.target.value));
              }}
            />
            <label htmlFor="" className="text-red-500 text-sm">
              {errorList.pwdErrorMsg}
            </label>
          </div>
        </div>
        <div className="py-3">
          <label
            htmlFor="forgotPwd"
            className="font-serif  text-blue-800 text-xl"
          >
            Forgot Password ?
          </label>
        </div>
      </div>
      <div className="text-center">
        <label htmlFor="" className="text-red-500 text-sm">
          services msg
        </label>
        <div className="flex justify-center my-3">
          <button
            className="no-underline px-3 py-2 bg-blue-800 text-white rounded-md"
            onClick={onClickSignIn}
          >
            Sign In
          </button>
        </div>
      </div>
      <div className="flex justify-center my-2">
        <button className=" text-black text-sm" onClick={onClickBackHome}>
          ← Back to Home
        </button>
      </div>
    </div>
  );
}

export default SignIn;
