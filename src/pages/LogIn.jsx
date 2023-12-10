import React from "react";
import image from "../assets/courseshero.png";

const LogIn = () => {
  return (
    <div className="flex flex-col md:flex-row ">
      <div className="">
        <img src={image} alt="" srcset="" />
      </div>
      <div className="flex flex-col justify-center items-center ">
        <h1 className="text-2xl font-semibold mt-10 mb-3">
          Welcome Back to JobMingle!
        </h1>
        <p className="font-medium text-xs">
          Please, Login to yoour account to access features
        </p>
        <button className="text-xs font-semibold px-4 py-3 mt-5 border-2 border-solid rounded-md w-5/6">
          Login with Google
        </button>
        <p className="text-xs mt-3"> or enter details below </p>
        <form className="flex flex-col w-5/6 ">
          <h1>Email</h1>
          <input
            type="email"
            placeholder=" Enter your Email here"
            className="border-2 border-solid rounded-md py-2 "
          />
          <h1>Password</h1>
          <input
            type="password"
            placeholder="Create a Password here"
            className="border-2 border-solid rounded-md py-2"
          />

          <button className="text-white bg-yellow my-3 py-3">Log In</button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
