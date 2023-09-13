import React, { useState } from "react";
import classes from "./Carousel.module.css";

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={classes["carousel-container"]}>
      <button
        className={`${classes["carousel-button"]} ${classes.prev}`}
        onClick={prevSlide}
      >
        Previous
      </button>
      <div className={classes.carousel}>
        <div
          className={classes["carousel-wrapper"]}
          style={{
            transform: `translateX(-${currentIndex * 350}px)`,
          }}
        >
          {items.map((item) => (
            <div>{item}</div>
          ))}
        </div>
      </div>
      <button
        className={`${classes["carousel-button"]} ${classes.next}`}
        onClick={nextSlide}
      >
        Next
      </button>
    </div>
  );
};

export default Carousel;
