import projectsData from "./data/projects_data";
import ProjectCard from "./ProjectCard";
import type Project from "./types";

const Projects = () => {
  return (
    <section className="projects">
      <h1>Projects</h1>
      {projectsData.map((project: Project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </section>
  );
};

export default Projects;
