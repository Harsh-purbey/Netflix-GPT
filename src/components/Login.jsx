import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const userName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const toggleSignInFrom = () => {
    setIsSignInForm(!isSignInForm);
  };
  const handleButtonCkick = (event) => {
    event.preventDefault();

    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((result) => {
          const user = result.user;
          updateProfile(user, {
            displayName: userName.current.value,
            photoURL: "",
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName }));
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          console.log("ERORR ->", error);
          setErrorMessage(error.message);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((result) => {
          console.log("RESULT ->", result);
          navigate("/browse");
        })
        .catch((error) => {
          console.log("ERORR ->", error);
          setErrorMessage(error.message);
        });
    }
  };
  return (
    <div className="">
      <Header />
      <div className="absolute">
        <img
          className=""
          src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg"
          alt=""
        />
      </div>
      <form className=" w-[100%] md:w-[30%] bg-black md:bg-black/80 z-20 text-white p-12 rounded-2xl shadow-xl absolute mx-auto left-0 right-0 my-36">
        <h1 className="text-4xl font-semibold mb-8 ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <div>
            <label className="text-sm  ">Full Name</label>
            <input
              ref={userName}
              type="text"
              placeholder="Full Name"
              className="p-3 w-full mb-4 bg-[#333333] rounded-sm placeholder-gray-400 "
            />
          </div>
        )}
        <div>
          <label className="text-sm  ">Email Address</label>
          <input
            ref={email}
            type="text"
            placeholder="Email or phone number"
            className="p-3 w-full mb-4 bg-[#333333] rounded-sm placeholder-gray-400 "
          />
        </div>

        <div>
          <label className="text-sm  ">Password</label>
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-3 w-full mb-6  bg-[#333333] rounded-sm placeholder-gray-400 "
          />
        </div>
        <p className="text-red-500 text-sm font-bold">{errorMessage}</p>
        <button
          className="p-3 my-6 bg-red-700 w-full rounded-xl hover:bg-red-800 transition cursor-pointer"
          onClick={handleButtonCkick}
        >
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
