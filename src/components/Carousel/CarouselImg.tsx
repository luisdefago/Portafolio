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
        className="absolute top-1/2 font-bold left-4 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded-full text-2xl"
        onClick={goToPreviousImage}
      >
        &lt;
      </button>
      <div className="flex justify-center items-center">
      <img
          className="mx-auto"
          src={images[currentImageIndex]}
          alt={images[currentImageIndex]}
          onError={(e) => {
            e.currentTarget.className += " text-center";
          }}
          style={{ width: '520px', height: '250px' }} 
        />
      </div>
      <button
        className="absolute top-1/2 font-bold right-4 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded-full text-2xl" 
        onClick={goToNextImage}
      >
        &gt;
      </button>
    </div>
  );
};

export default CarouselDemo;
