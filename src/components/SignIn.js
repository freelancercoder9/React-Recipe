import React, { useState } from "react";

import { NavLink, useHistory } from "react-router-dom";

function SignIn() {
  const history = useHistory();
  const [emailID, setEmailID] = useState("");
  const [errorList, setErrorList] = useState({
    isemailError: true,
    emailError: "",
    isPasswordError: true,
    passwordError: "",
  });

  const onClickSignIn = () => {
    if (errorList.isPasswordError === false && errorList.isemailError === false) {
      history.push("/dashboard");
    } else {
      console.log("please clear validations");
    }
  };
  const onChangeEventEmail = (e) => {
    const email = e.target.value;
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const value = re.test(String(email).toLowerCase());
    console.log(" -- ", value);
    if (!value) {
      setErrorList({ ...errorList, isemailError: true, emailError: "please enter valid email" });
    } else {
      setErrorList({ ...errorList, isemailError: false, emailError: "" });
    }
  };
  const onChangeEventPassword = (e) => {
    const pass = e.target.value;

    if ((pass != null, pass.length >= 8)) {
      setErrorList({ ...errorList, isPasswordError: false, passwordError: "" });
    } else {
      setErrorList({ ...errorList, isPasswordError: true, passwordError: "Password not a valid format" });
    }
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
            Email ID
          </label>
          <div className="w-7/12">
            <input type="text" onChange={onChangeEventEmail} className=" border-2 border-gray-200 w-full h-7 px-2 text-xl font-light" />
            <div style={{ color: "#cc0000" }}>{errorList.emailError}</div>
          </div>
        </div>
        <div className="flex justify-between py-3">
          <label htmlFor="password" className="text-blue-900 font-sans text-xl">
            Password
          </label>
          <div className="w-7/12">
            <input type="password" onChange={onChangeEventPassword} className=" border-2 border-gray-200  w-full h-7 px-2 text-xl font-light" />
            <div style={{ color: "#cc0000" }}>{errorList.passwordError}</div>
          </div>
        </div>
        <div className="py-3">
          <label htmlFor="forgotPwd" className="font-serif  text-blue-800 text-xl">
            Forgot Password ?
          </label>
        </div>
      </div>
      <div className="flex justify-center my-3">
        <button className="no-underline px-3 py-2 bg-blue-800 text-white rounded-md" onClick={onClickSignIn}>
          Sign In
        </button>
      </div>
      <div className="flex justify-center my-2">
        <NavLink className=" text-black text-sm" to="/">
          ← Back to Home
        </NavLink>
      </div>
    </div>
  );
}

export default SignIn;
