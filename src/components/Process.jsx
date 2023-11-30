import step1 from "../assets/step1.png";
import step2 from "../assets/step2.png";
import step3 from "../assets/step3.png";
import step4 from "../assets/step4.png";
import step5 from "../assets/step5.png";

const Process = () => {
  return (
    <div className="flex flex-col ">
      <h1 className="py-6 text-yellow text-4xl font-bold  text-center">
        Our Process
      </h1>
      <div className="flex flex-col   justify-center mx-auto md:flex-row">
        <div className="process__section__content">
          <div className="p-2.5 bg-lightgrey rounded-full">
            <img src={step1} alt="" className="process__image" />
          </div>
          <p className="step">Step 1</p>
          <p className="process_name">Sign Up</p>
        </div>

        <div className="process__section__content">
          <div className="image_div">
            <img src={step2} alt="" className="process__image" />
          </div>

          <p className="step">Step </p>
          <p className="process_name">Update Profile</p>
        </div>

        <div className="process__section__content">
          <div className="image_div">
            <img src={step3} alt="" className="process__image" />
          </div>
          <p className="step">Step 3</p>
          <p className="process_name">Upskill or Reskill</p>
        </div>

        <div className="process__section__content">
          <div className="image_div">
            <img src={step4} alt="" className="process__image" />
          </div>
          <p className="step">Step 4</p>
          <p className="process_name">Job Search</p>
        </div>

        <div className="process__section__content">
          <div className="image_div">
            <img src={step5} alt="" className="process__image" />
          </div>
          <p className="step">Step 5</p>
          <p className="process_name">Get a Job</p>
        </div>
      </div>
    </div>
  );
};

export default Process;
