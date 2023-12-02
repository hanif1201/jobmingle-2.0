import PropTypes from "prop-types";

const ChooseItem = ({ image, text }) => {
  return (
    <div className="flex container flex-col  items-center max-w-sm border-2 border-blue border-solid rounded-2xl p-5 mb-5 md:mr-10">
      <img src={image} alt="" className="choose__image" />
      <h3 className=" flex text-left justify-center font-bold text-lg uppercase mt-3  text-blue">
        {text}
      </h3>
    </div>
  );
};

ChooseItem.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ChooseItem;
