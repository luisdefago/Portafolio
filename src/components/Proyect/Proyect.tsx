import React from 'react';
import { ProjectProps } from "../../utils/interface";
import CarouselDemo from '../Carousel/CarouselImg';

const Project: React.FC<{ project: ProjectProps }> = ({ project }) => {
  const { name, description, img, skills, init, end } = project;
  const images = Object.values(img);

  return (
    <article className="max-w-lg mx-auto mb-8">
      <h2 className="text-2xl font-bold mb-2">{name}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <CarouselDemo images={images} /> {/* Pasar el array de imágenes */}
      <ul className="mt-4">
        {skills.map((skill, index) => (
          <li key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {skill}
          </li>
        ))}
      </ul>
      <p className="text-gray-500 text-sm mt-4">
        Inicio: {init} - Fin: {end}
      </p>
    </article>
  );
};

export default Project;
