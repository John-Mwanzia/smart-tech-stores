import React, { useEffect, useState } from "react";

export default function Slider() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "images/image1.png",
    "images/image2.png",
    "images/image3.png",
  ];

const nextSlide = () => {
  const newIndex = currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;
  setCurrentImageIndex(newIndex);
};


  useEffect(() => {
    console.log('Setting up slider interval');
    const intervalId = setInterval(nextSlide, 3000);
    return () => clearInterval(intervalId);
  }, [nextSlide]);

  return (
    <>
      <div className="slider-container ">
        <img src={images[currentImageIndex]} alt="slider" />
      </div>
    </>
  );
}
