import React from "react";

const LogIn = () => {
  return (
    <div className="flex flex-col">
      <div>image</div>
      <div>
        <h1>Welcome Back to JobMingle</h1>
        <p>Please, Login to yoour account to access features</p>
        <button>Login with Google</button>
        <p> or enter details below </p>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="checkbox" name="" id="" />
          <button>Log In</button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
