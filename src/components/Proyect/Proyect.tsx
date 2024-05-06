// Proyect.tsx
import { ProjectProps } from "../../utils/interface";
import React from 'react';

const Project: React.FC<{ project: ProjectProps }> = ({ project }) => {
  const { name, description, img, skills, init, end } = project;

  return (
    <div className="project">
      <h2>{name}</h2>
      <p>{description}</p>
      {Object.keys(img).map((key: string) => (
        <img key={key} src={img[key]} alt={img[key]} />
      ))}
      <ul>
        {skills.map((skill: string, index: number) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      <p>Fecha de inicio: {init}</p>
      <p>Fecha de fin: {end}</p>
    </div>
  );
};

export default Project;
