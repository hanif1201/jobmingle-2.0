import PropTypes from "prop-types";
import figma from "../assets/figma.png";
import { FaRegHeart } from "react-icons/fa6";
import { CiShare2 } from "react-icons/ci";

const SkillItem = ({ image, text, name }) => {
  return (
    <div className="flex container flex-col   max-w-sm border-2 border-blue border-solid rounded-2xl p-5 pr-10 mb-5 md:mr-10">
      <div className="flex flex-row justify-start ">
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
      </div>

      {/* <img src={image} alt="" className="choose__image" />
      <h3 className=" flex text-left justify-center font-bold text-lg uppercase mt-3  text-blue">
        {text}
      </h3> */}
    </div>
  );
};

SkillItem.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default SkillItem;
