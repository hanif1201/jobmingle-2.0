import hero002 from "../assets/Hero002.png";

const Hero002 = () => {
  return (
    <div className="flex flex-col-reverse justify-evenly items-end md:space-y-0 md:flex-row px-6 mx-auto mt-10 space-y-0">
      <div className="flex flex-col mt-4 space-y-7 md:w-1/2 pr-7">
        <h1 className="text-4xl font-bold ">
          Your <span className="text-darkyellow">Dream Remote Job </span>Awaits
          - Let Us Skill You Up and Guide You there
        </h1>
        <p className="font-medium text-black text-2xl">
          Join the exclusive set of individuals we are currently making their
          dream remote job a reality.
        </p>
        <h3 className="font-bold text-2xl">Join the JobMingle family today</h3>
        <div className="  space-y-3 md:space-x-3">
          {/* <button className="text-white p-4 bg-yellow rounded-lg text-2xl font-bold block md:inline">
            Get Started
          </button> */}
          <button className="text-white p-4 bg-yellow rounded-lg text-2xl font-bold block md:inline">
            Apply For Remote Jobs Here
          </button>
        </div>
      </div>
      <div className="hero__image">
        <img src={hero002} alt="" className="heroImage" />
      </div>
    </div>
  );
};

export default Hero002;
