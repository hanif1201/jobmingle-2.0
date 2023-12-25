import { FcGoogle } from "react-icons/fc";

const LogIn = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen ">
      <div className="md:w-1/2 bg-hero-background bg-no-repeat bg-cover h-screen"></div>
      <div className="flex flex-col justify-center items-center md:w-1/2">
        <h1 className="text-2xl font-semibold mt-10 mb-3">
          Welcome Back to JobMingle!
        </h1>
        <p className="font-medium text-xs">
          Please, Login to yoour account to access features
        </p>
        <button className="text-xs font-semibold px-4 py-3 mt-5 border-2 border-solid rounded-md w-5/6 flex justify-center">
          <FcGoogle className="text-2xl pb-2" />
          Login with Google
        </button>
        <p className="text-xs mt-3"> or enter details below </p>
        <form className="flex flex-col w-5/6 ">
          <h1>Email</h1>
          <input
            type="email"
            placeholder=" Enter your Email here"
            className="border-2 border-solid rounded-md py-2 mb-2 "
          />
          <h1>Password</h1>
          <input
            type="password"
            placeholder="Create a Password here"
            className="border-2 border-solid rounded-md py-2 mb-2"
          />

          <button className="text-white bg-yellow my-3 py-3 rounded-md">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
