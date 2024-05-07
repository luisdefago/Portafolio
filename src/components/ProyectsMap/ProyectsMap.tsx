import projectsData from '../../proyects.json';
import { ProjectProps } from "../../utils/interface";
import Project from '../Proyect/Proyect';

const Projects = () => {
  return (
    <section className="mt-16 w-3/4 mx-auto">
      <h3 className="text-center text-4xl font-bold text-blue-950 mb-8">Mis Proyectos</h3>
      <div className="max-w-7xl">
        <div className="grid gap-8 xl:grid-cols-2">
          {projectsData.map((project: ProjectProps, index: number) => (
            <Project key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
