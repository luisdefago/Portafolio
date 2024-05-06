// Projects.tsx
import projectsData from '../../proyects.json'; 
import Project from '../Proyect/Proyect';
import { ProjectProps } from "../../utils/interface";
const Projects = () => {
  return (
    <div className="projects">
      {projectsData.map((project: ProjectProps, index: number) => (
        <Project key={index} project={project} />
      ))}
    </div>
  );
};

export default Projects;
