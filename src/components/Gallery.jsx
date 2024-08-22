import { useState, useEffect } from "react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // List of image URLs
  const images = [
    "https://images.pexels.com/photos/27174818/pexels-photo-27174818/free-photo-of-a-tree-with-red-flowers-against-a-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/27359231/pexels-photo-27359231/free-photo-of-lemon-slices-on-a-white-table-with-sunlight.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/10724274/pexels-photo-10724274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/22602397/pexels-photo-22602397/free-photo-of-cascades-on-stream-in-forest.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/20507497/pexels-photo-20507497/free-photo-of-model-posing-in-boots.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/15308688/pexels-photo-15308688/free-photo-of-trees-and-a-field-covered-in-fog.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000); // Change image every second

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [images.length]);

  return (
    <div className="relative w-full h-screen bg-gray-900">
      <h2 className="text-center text-4xl font-bold text-white py-8">
        Image Gallery
      </h2>
      <div className="overflow-hidden w-full h-full">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="flex-shrink-0 w-full h-full">
              <img
                src={image}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
