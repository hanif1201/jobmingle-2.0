// import PropTypes from "prop-types";
import course from "../assets/course.png";
import ellipse from "../assets/Ellipse 14.png";
import { FaRegHeart } from "react-icons/fa6";
import { CiShare2 } from "react-icons/ci";

const CourseSearchItem = () => {
  return (
    <div className="flex container flex-col   max-w-sm border-2 border-blue border-solid rounded-2xl p-5 pr-5 mb-5 md:mr-10">
      <img src={course} alt="" className="pr-1 " />
      <h3 className="font-semibold text-yellow text-xl">Digital Marketing</h3>
      <h3 className="font-semibold text-blue text-xl">Email Marketing </h3>
      <h3 className="font-medium text-blue text-sm">
        Using Email marketing to drive SEO,{" "}
      </h3>
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row">
          <img src={ellipse} alt="" className="pr-1 " />
          <div>
            <h3 className="font-semibold text-blue text-base">Mecie Kin</h3>
            <h3 className="font-semibold text-blue text-base">100 Enrolled</h3>
          </div>
        </div>
        <h3 className="font-semibold text-blue text-xl">$120</h3>
      </div>
      <div className="flex flex-row justify-between border-solid border-t-2 mt-2 pt-2">
        <FaRegHeart className="text-2xl active:text-yellow active:fill-yellow" />
        <CiShare2 className="text-yellow text-2xl " />
      </div>

      {/* <div className="flex flex-row justify-start ">
        <img src={figma} alt="" className="pr-1 " />
        <h3 className="font-semibold text-sm">figma</h3>
      </div>
      <div>
        <h3 className="font-medium text-base ">Virtual Assistant</h3>
        <h3 className="text-neutralgrey">River State, Nigeria</h3>
        <h3 className="text-yellow">$45k - $60k</h3>
      </div>
      <div className="flex flex-row justify-between border-solid border-t-2 mt-2 pt-2">
        <FaRegHeart className="text-2xl active:text-yellow active:fill-yellow" />
        <CiShare2 className="text-yellow text-2xl " />
      </div> */}
    </div>
  );
};

export default CourseSearchItem;
