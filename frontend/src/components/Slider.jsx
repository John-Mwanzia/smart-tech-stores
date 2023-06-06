import React, { useEffect, useState } from "react";

export default function Slider() {
  // Initialize the current image index state variable
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of image paths to display in the slider
  const images = [
    "images/image1.png",
    "images/image2.png",
    "images/image3.png",
  ];

  // Function to switch to the next slide
  const nextSlide = () => {
    // Determine the index of the next slide based on the current image index
    const newIndex =
      currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;

    // Set the state variable to the new index to update the image displayed in the slider
    setCurrentImageIndex(newIndex);
  };

  // Set up an interval to switch to the next slide every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(nextSlide, 3000); // Set up the interval with the nextSlide function and a 3 second delay
    return () => clearInterval(intervalId); // Clean up the interval when the component unmounts
  }, [nextSlide]); // Include the nextSlide function as a dependency to re-run the effect if it changes

  return (
    <>
      {/* Display the current image in a container */}
      <div className=" max-h-[600px] max-w-[600px]  ">
        <img className="rounded-[50%] max-w-[100%] h-auto" src={images[currentImageIndex]} alt="slider" />
      </div>
    </>
  );
}
