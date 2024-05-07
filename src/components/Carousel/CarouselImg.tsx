import React, { useState } from 'react';

interface CarouselDemoProps {
  images: string[];
}

const CarouselDemo: React.FC<CarouselDemoProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

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
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button
        className={`absolute top-0 bottom-0 left-0 bg-black bg-opacity-50 p-1 text-white text-4xl ${
          !isHovered && 'md:hidden'
        }`}
        onClick={goToPreviousImage}
        style={{ opacity: isHovered ? 1 : 0, transition: 'opacity 0.3s ease' }}
      >
        &lt;
      </button>
      <div className="flex justify-center items-center">
        <img
          className="mx-auto w-full max-w-2xl sm:max-w-none"
          src={images[currentImageIndex]}
          alt={images[currentImageIndex]}
          onError={(e) => {
            e.currentTarget.className += ' text-center';
          }}
        />
      </div>
      <button
        className={`absolute top-0 bottom-0 right-0 bg-black bg-opacity-50 p-1 text-white text-4xl ${
          !isHovered && 'md:hidden'
        }`}
        onClick={goToNextImage}
        style={{ opacity: isHovered ? 1 : 0, transition: 'opacity 0.3s ease' }}
      >
        &gt;
      </button>
    </div>
  );
};

export default CarouselDemo;
