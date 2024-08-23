import { useState, useEffect } from "react";
import abtimg1 from "../assets/abtimg1.webp";
import abtimg2 from "../assets/abtimg2.webp";
import abtimg3 from "../assets/abtimg3.webp";
import abtimg4 from "../assets/abtimg4.webp";
import abtimg5 from "../assets/abtimg5.webp";
import abtimg6 from "../assets/abtimg6.webp";
import abtimg7 from "../assets/abtimg7.webp";

const Gallery2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // List of image URLs from local assets
  const images = [
    abtimg1,
    abtimg2,
    abtimg3,
    abtimg4,
    abtimg5,
    abtimg6,
    abtimg7,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [images.length]);

  return (
    <div className="relative flex justify-center items-center w-full h-screen bg-gray-900">
      <div className="w-11/12 md:w-3/4 lg:w-1/2 h-3/4 overflow-hidden rounded-lg shadow-lg relative">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full h-full transition-opacity duration-1000 ease-in-out"
            >
              <img
                src={image}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          {images.map((_, index) => (
            <span
              key={index}
              className={`inline-block w-3 h-3 bg-white rounded-full ${
                currentIndex === index ? "opacity-100" : "opacity-50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery2;
