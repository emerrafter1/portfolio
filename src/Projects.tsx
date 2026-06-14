import projectsData from "./data/projects_data";
import ProjectCard from "./ProjectCard";
import type {Project} from "./types";

type ProjectsProps = {
  activeSection: string;
};

const Projects = ({ activeSection }: ProjectsProps) => {
  return (
    <section id="projects" className="scroll-mt-24 mb-24 group/section">

      {projectsData.map((project: Project, index: number) => (
        <ProjectCard key={project.id} project={project} isFirstActive={index === 0 && activeSection === "projects"} />
      ))}
    </section>
  );
};

export default Projects;
