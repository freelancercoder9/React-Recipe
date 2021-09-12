import React from "react";

import { NavLink, useHistory } from "react-router-dom";

function SignIn() {
  const history = useHistory();

  const onClickSignIn = () => {
    history.push("/dashboard");
  };
  return (
    <form>
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
              <input type="text" className=" border-2 border-gray-200 w-full h-7 px-2 text-xl font-light" />
              <div style={{ color: "#cc0000" }}>{"please enter proper email"}</div>
            </div>
          </div>
          <div className="flex justify-between py-3">
            <label htmlFor="password" className="text-blue-900 font-sans text-xl">
              Password
            </label>
            <div className="w-7/12">
              <input type="text" className=" border-2 border-gray-200  w-full h-7 px-2 text-xl font-light" />
              <div style={{ color: "#cc0000" }}>{"please enter valid password"}</div>
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
    </form>
  );
}

export default SignIn;
