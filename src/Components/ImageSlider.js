import React, { useEffect, useState } from "react";
import ImageData from "./ImageData";
import "../CSS/ImageSlider.css";

const ImageSlider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = ImageData.length;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  };

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  const nextImage = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="imageslider">
      <div className="left" onClick={prevSlide}>
        {"<"}
      </div>
      <div className="right" onClick={nextSlide}>
        {">"}
      </div>
      {ImageData.map((slide, index) => {
        return (
          <div
            className={index === currentSlide ? "slide current" : slide}
            key={index}
          >
            {index === currentSlide && (
              <div>
                <img
                  src={slide.image}
                  alt="nature"
                  className="images"
                  key={index}
                />
              </div>
            )}
          </div>
        );
      })}
      <div className="dotcontainer">
        {ImageData.map((slide, index) => {
          return (
            <div
              key={index}
              onClick={() => nextImage(index)}
              className={currentSlide === index ? "dot active" : "dot"}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageSlider;
