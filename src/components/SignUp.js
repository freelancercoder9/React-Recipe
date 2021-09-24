import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSignUpPassword, getEmailId, getSignUp_UserName } from "../actions";
import { user_SignUp_Service } from "../services/UserServices";

function SignUp() {
  const [createPwd, setCreatePwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [errorList, setErrorList] = useState({
    isUserNameError: true,
    userNameErrorMsg: "",
    ispwdError: true,
    pwdErrorMsg: "",
    isEmailError: true,
    emailErrorMsg: "",
    serviceErrorResponse: "",
  });
  const history = useHistory();
  const dispatch = useDispatch();
  const signUp_Data = useSelector((state) => state.signUp);
  const onClickCreateAccount = async () => {
    if (
      errorList.isUserNameError === false &&
      errorList.ispwdError === false &&
      errorList.isEmailError === false
    ) {
      const res = await user_SignUp_Service(signUp_Data);

      if (res.code === "20001") {
        console.log("Success Response");
        setErrorList({ ...errorList, serviceErrorResponse: "" });
        history.push("/signIn");
      } else {
        setErrorList({ ...errorList, serviceErrorResponse: res.message });
      }
    } else {
      if (errorList.isUserNameError) {
        console.log("in username error");
        setErrorList({
          ...errorList,
          userNameErrorMsg: "please enter valid user name",
        });
      }
      if (errorList.ispwdError) {
        console.log("in password error");
        setErrorList({
          ...errorList,
          pwdErrorMsg: "please enter password",
        });
      }
      if (errorList.isEmailError) {
        console.log("in email  error");
        setErrorList({
          ...errorList,
          emailErrorMsg: "please enter email id",
        });
      }

      console.log();
    }
  };
  const onClickBackHome = () => {
    history.push("/");
  };
  return (
    <div className="border-2 border-black rounded-md w-6/12 m-auto mt-20">
      <div className="text-center py-4">
        <label htmlFor="signUp" className="text-2xl font-serif">
          Sign Up for a New Account
        </label>
      </div>
      <div className="mx-4">
        <div className="flex justify-between py-3">
          <label
            htmlFor="firstName"
            className="text-blue-900 font-sans text-xl"
          >
            User Name
          </label>
          <div className="w-7/12">
            <input
              type="text"
              className=" border-2 border-gray-200 w-full h-7 px-2 text-xl font-light"
              onChange={(e) => {
                console.log(e.target.value);
                if (e.target.value.length > 3) {
                  setErrorList({
                    ...errorList,
                    isUserNameError: false,
                    userNameErrorMsg: "",
                  });
                  dispatch(getSignUp_UserName(e.target.value));
                } else {
                  setErrorList({
                    ...errorList,
                    isUserNameError: true,
                    userNameErrorMsg: "please enter user name",
                  });
                }
              }}
            />
            <label htmlFor="" className="text-red-500 text-sm">
              {errorList.userNameErrorMsg}
            </label>
          </div>
        </div>

        <div className="flex justify-between py-3">
          <label htmlFor="emailId" className="text-blue-900 font-sans text-xl">
            Email ID
          </label>
          <div className="w-7/12">
            <input
              type="text"
              className=" border-2 border-gray-200 w-full h-7 px-2 text-xl font-light"
              onChange={(e) => {
                if (e.target.value.length > 3) {
                  setErrorList({
                    ...errorList,
                    isEmailError: false,
                    emailErrorMsg: "",
                  });
                  dispatch(getEmailId(e.target.value));
                } else {
                  setErrorList({
                    ...errorList,
                    isEmailError: true,
                    emailErrorMsg: "please enter user name",
                  });
                }
              }}
            />
            <label htmlFor="" className="text-red-500 text-sm">
              {errorList.emailErrorMsg}
            </label>
          </div>
        </div>
        <div className="flex justify-between py-3">
          <label
            htmlFor="createPassword"
            className="text-blue-900 font-sans text-xl"
          >
            Create Password
          </label>
          <div className="w-7/12">
            <input
              type="password"
              className=" border-2 border-gray-200 w-full h-7 px-2 text-xl font-light"
              onChange={(e) => {
                setCreatePwd(e.target.value);
                if (e.target.value === confirmPwd) {
                  setErrorList({
                    ...errorList,
                    ispwdError: false,
                    pwdErrorMsg: "",
                  });
                  dispatch(getSignUpPassword(e.target.value));
                } else {
                  setErrorList({
                    ...errorList,
                    ispwdError: true,
                    pwdErrorMsg: "password and confirm password should be same",
                  });
                }
              }}
            />
            <label htmlFor="" className="text-red-500 text-sm">
              {errorList.pwdErrorMsg}
            </label>
          </div>
        </div>
        <div className="flex justify-between py-3">
          <label
            htmlFor="confirmPassword"
            className="text-blue-900 font-sans text-xl"
          >
            Confirm Password
          </label>
          <div className="w-7/12">
            <input
              type="password"
              className=" border-2 border-gray-200 w-full h-7 px-2 text-xl font-light"
              onChange={(e) => {
                setConfirmPwd(e.target.value);
                console.log(" created: ", createPwd);
                if (e.target.value === createPwd) {
                  setErrorList({
                    ...errorList,
                    ispwdError: false,
                    pwdErrorMsg: "",
                  });
                  dispatch(getSignUpPassword(e.target.value));
                } else {
                  setErrorList({
                    ...errorList,
                    ispwdError: true,
                    pwdErrorMsg: "password and confirm password should be same",
                  });
                }
              }}
            />
            <label htmlFor="" className="text-red-500 text-sm">
              {errorList.pwdErrorMsg}
            </label>
          </div>
        </div>
      </div>
      <div className="text-center">
        <label htmlFor="" className="text-red-500 text-sm">
          {errorList.serviceErrorResponse}
        </label>
        <div className="flex justify-center my-3">
          <button
            className="no-underline px-3 py-2 bg-blue-800 text-white rounded-md"
            onClick={onClickCreateAccount}
          >
            Create Account
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

export default SignUp;
