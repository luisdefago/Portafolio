import React, { useState } from 'react';
import { ProjectProps } from "../../utils/interface";
import CarouselDemo from '../Carousel/CarouselImg';

const Project: React.FC<{ project: ProjectProps }> = ({ project }) => {
  const { name, description, repo, img, skills, init, end, deploy } = project;
  const [expanded, setExpanded] = useState(false);

  const images = img !== undefined ? Object.values(img).filter((img) => img !== undefined) : [];

  const handleToggleExpand = () => {
    setExpanded(!expanded);
  };

  const truncatedDescription = description.length > 100 && !expanded ? description.slice(0, 100) + '...' : description;

  return (
    <article className="max-w-lg mx-auto mb-8 bg-white rounded-lg shadow-md p-4">
      <div className="flex flex-col">
        <a href={repo} target="_blank" rel="noopener noreferrer" className="inline-block">
          <h4 className="inline-block mb-1 text-2xl font-bold hover:border-b hover:border-black transition-all duration-100">
            {name}
          </h4>
        </a>
        {deploy && (
          <a
            href={deploy}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-900 w-fit py-1 text-base font-bold transition-all duration-300 hover:underline"
          >
            Ver Web
          </a>
        )}
      </div>
      <p className="text-gray-600 mb-4">
        {truncatedDescription}
        {description.length > 100 && (
          <button
            className="text-gray-800 text-lg pl-4 font-bold hover:text-gray-900 focus:outline-none focus:text-gray-900"
            onClick={handleToggleExpand}
          >
            {expanded ? '-' : '+'}
          </button>
        )}
      </p>
      <CarouselDemo images={images as string[]} />
      <ul className="mt-4 flex flex-wrap">
        {skills.map((skill, index) => (
          <li key={index} className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
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
