import React from "react";
import { useHistory } from "react-router-dom";

function PreLogin() {
  const history = useHistory();
  const onClickSignIn = () => {
    history.push("/signIn");
  };
  const onClickSignUp = () => {
    history.push("/signUp");
  };
  return (
    <div className="border-2 border-black w-96 m-auto rounded-md mt-20">
      <div className="text-center text-2xl py-10">
        <label
          htmlFor="recipiApp"
          className="font-serif font-semibold text-black"
        >
          Recipe App
        </label>
      </div>
      <div className="flex justify-center py-5">
        <button
          className="no-underline px-3 py-1 bg-green-500 text-white rounded-md"
          onClick={onClickSignIn}
        >
          Sign In
        </button>
        <button
          className="no-underline px-3 py-1 bg-blue-500 text-white rounded-md ml-4"
          onClick={onClickSignUp}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default PreLogin;
