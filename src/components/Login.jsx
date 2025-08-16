import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInFrom = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg"
          alt=""
        />
      </div>
      <form className="w-3/12 bg-black/80 z-20 text-white p-12 rounded-2xl shadow-xl absolute mx-auto left-0 right-0 my-36">
        <h1 className="text-4xl font-semibold mb-8 ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <div>
            <label className="text-sm  ">Full Name</label>
            <input
              type="text"
              placeholder="Full Name"
              className="p-3 w-full mb-4 bg-[#333333] rounded-sm placeholder-gray-400 "
            />
          </div>
        )}
        <div>
          <label className="text-sm  ">Email Address</label>
          <input
            type="text"
            placeholder="Email or phone number"
            className="p-3 w-full mb-4 bg-[#333333] rounded-sm placeholder-gray-400 "
          />
        </div>

        <div>
          <label className="text-sm  ">Password</label>
          <input
            type="password"
            placeholder="Password"
            className="p-3 w-full mb-6 bg-[#333333] rounded-sm placeholder-gray-400 "
          />
        </div>

        <button className="p-3 mb-6 bg-red-700 w-full rounded-xl hover:bg-red-800 transition cursor-pointer">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer text-sm" onClick={toggleSignInFrom}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
