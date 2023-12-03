import PropTypes from "prop-types";

const AboutSectionItem = ({ image, heading, text }) => {
  return (
    <div>
      <h3 className="text-yellow font-bold  text-3xl mt-5 mx-3 text-center">
        {heading}
      </h3>
      <div className="flex flex-col md:flex-row items-center md:mx-10 mx-3">
        <img
          src={image}
          alt=""
          className="p-5 border-2 border-black rounded-md md:w-1/3 "
        />

        <p className=" md:text-2xl font-medium md:w-2/3 md:ml-10 "> {text}</p>
      </div>
    </div>
  );
};

AboutSectionItem.propTypes = {
  image: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default AboutSectionItem;
