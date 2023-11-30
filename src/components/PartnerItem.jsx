import PropTypes from "prop-types";

const PartnerItem = ({ image }) => {
  return (
    <div className="flex container flex-col  items-center  border-2 border-black border-solid rounded-1xl p-5 mb-5 md:mr-10 ">
      <img src={image} alt="" className="object-contain w-1/2 h-12" />
    </div>
  );
};

PartnerItem.propTypes = {
  image: PropTypes.string.isRequired,
};

export default PartnerItem;
