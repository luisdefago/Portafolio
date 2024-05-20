import React, { useState, useEffect } from 'react';

interface CarouselDemoProps {
  images: string[];
}

const CarouselDemo: React.FC<CarouselDemoProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [loading, setLoading] = useState(true);

  const goToPreviousImage = () => {
    setLoading(true);
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = () => {
    setLoading(true);
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    setLoading(true);
  }, [currentImageIndex]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button
        className={`absolute top-0 bottom-0 left-0 bg-black bg-opacity-50 text-white text-4xl w-12 flex justify-center items-center transition-opacity duration-300 ${
          !isHovered ? 'opacity-0 md:opacity-0' : 'opacity-100'
        }`}
        onClick={goToPreviousImage}
      >
        &lt;
      </button>
      <div className="flex justify-center items-center">
        {loading && <div className="absolute">Cargando...</div>}
        <img
          className="mx-auto w-full max-w-2xl sm:max-w-none"
          src={images[currentImageIndex]}
          alt={images[currentImageIndex]}
          onLoad={() => setLoading(false)}
          onError={() => setLoading(false)}
          style={loading ? { display: 'none' } : {}}
        />
      </div>
      <button
        className={`absolute top-0 bottom-0 right-0 bg-black bg-opacity-50 text-white text-4xl w-12 flex justify-center items-center transition-opacity duration-300 ${
          !isHovered ? 'opacity-0 md:opacity-0' : 'opacity-100'
        }`}
        onClick={goToNextImage}
      >
        &gt;
      </button>
    </div>
  );
};

export default CarouselDemo;
