import PropTypes from "prop-types";

const PartnerItem = ({ text }) => {
  return (
    <div className="flex container flex-col  items-center  border-2 border-black border-solid rounded-xl p-5 mb-5 md:mr-10 ">
      <h3 className="  h-auto">{text}</h3>
    </div>
  );
};

PartnerItem.propTypes = {
  text: PropTypes.string.isRequired,
};

export default PartnerItem;
