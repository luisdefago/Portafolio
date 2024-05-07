import React, { useState } from 'react';

interface CarouselDemoProps {
  images: string[];
}

const CarouselDemo: React.FC<CarouselDemoProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative">
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-500 text-white p-1 rounded-full text-3xl sm:text-4xl"
        onClick={goToPreviousImage}
      >
        &lt;
      </button>
      <div className="flex justify-center items-center">
        <img
          className="mx-auto w-full max-w-2xl sm:max-w-none"
          src={images[currentImageIndex]}
          alt={images[currentImageIndex]}
          onError={(e) => {
            e.currentTarget.className += " text-center";
          }}
        />
      </div>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-500 text-white p-1 rounded-full text-3xl sm:text-4xl"
        onClick={goToNextImage}
      >
        &gt;
      </button>
    </div>
  );
};


export default CarouselDemo;
