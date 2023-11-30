import { useState, useEffect } from "react";

import choose001 from "../assets/choose001.png";
import choose002 from "../assets/choose002.png";
import choose003 from "../assets/choose003.png";

const MyCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselContent = [
    <>
      <div className="choose__section__content">
        <img src={choose001} alt="" className="choose__image" />
        <h3 className="choose__title">text</h3>
      </div>
    </>,
    <>
      <div className="choose__section__content">
        <img src={choose002} alt="" className="choose__image" />
        <h3 className="choose__title">text</h3>
      </div>
    </>,
    <>
      <div className="choose__section__content">
        <img src={choose003} alt="" className="choose__image" />
        <h3 className="choose__title">text</h3>
      </div>
    </>,
  ];

  const goToNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % carouselContent.length);
  };

  const goToPrevious = () => {
    setActiveIndex(
      (prevIndex) =>
        (prevIndex - 1 + carouselContent.length) % carouselContent.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      <button onClick={goToPrevious}>Previous</button>
      {carouselContent[activeIndex]}
      <button onClick={goToNext}>Next</button>
    </div>
  );
};

export default MyCarousel;
