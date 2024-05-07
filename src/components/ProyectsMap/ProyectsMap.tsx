import projectsData from '../../proyects.json'; 
import Project from '../Proyect/Proyect';
import { ProjectProps } from "../../utils/interface";

const Projects = () => {
  return (
    <section className="projects mt-16">
      <h3 className="text-center text-4xl font-bold text-blue-950 mb-8">Mis Proyectos</h3>
      {projectsData.map((project: ProjectProps, index: number) => (
        <Project key={index} project={project} />
      ))}
    </section>
  );
};

export default Projects;

