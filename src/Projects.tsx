import projectsData from "./data/projects_data";
import ProjectCard from "./ProjectCard";
import type {Project} from "./types";

const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-24 mb-24">

      {projectsData.map((project: Project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </section>
  );
};

export default Projects;
