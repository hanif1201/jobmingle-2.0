import step1 from "../assets/step1.png";
import step2 from "../assets/step2.png";
import step3 from "../assets/step3.png";
import step4 from "../assets/step4.png";
import step5 from "../assets/step5.png";

const Process = () => {
  return (
    <div className="flex flex-col ">
      <h1 className="py-6 text-yellow text-3xl font-bold  text-center">
        Our Process
      </h1>
      <div className="flex    justify-center mx-auto flex-col md:flex-row  ">
        <div className=" mb-5 md:mr-5 text-center  ">
          <div className="p-2.5 bg-lightgrey rounded-full">
            <img src={step1} alt="" className="process__image" />
          </div>
          <p className="text-blue font-bold text-base">Step 1</p>
          <p className="text-black font-medium">Sign Up</p>
        </div>

        <div className="mb-5 md:mr-5 text-center ">
          <div className="p-2.5 bg-lightgrey rounded-full">
            <img src={step2} alt="" className="process__image" />
          </div>

          <p className="text-blue font-bold text-base">Step 2 </p>
          <p className="text-black font-medium">Update Profile</p>
        </div>

        <div className="mb-5 md:mr-5 text-center ">
          <div className="p-2.5 bg-lightgrey rounded-full">
            <img src={step3} alt="" className="process__image" />
          </div>
          <p className="text-blue font-bold text-base">Step 3</p>
          <p className="text-black font-medium">Upskill or Reskill</p>
        </div>

        <div className="mb-5 md:mr-5 text-center ">
          <div className="p-2.5 bg-lightgrey rounded-full">
            <img src={step4} alt="" className="process__image" />
          </div>
          <p className="text-blue font-bold text-base">Step 4</p>
          <p className="text-black font-medium">Job Search</p>
        </div>

        <div className="mb-5 md:mr-5 text-center ">
          <div className="p-2.5 bg-lightgrey rounded-full">
            <img src={step5} alt="" className="process__image" />
          </div>
          <p className="text-blue font-bold text-base">Step 5</p>
          <p className="text-black font-medium">Get a Job</p>
        </div>
      </div>
    </div>
  );
};

export default Process;
