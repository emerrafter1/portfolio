import type Project from "./types";

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div>
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      <h3>Tools Used</h3>
      <h4>Frontend</h4>
      <ul className="tech-stack">
        {project.frontend_stack.map((tech) => {
          return <li>{tech}</li>;
        })}
      </ul>
      <h4>Backend</h4>
      <ul className="tech-stack">
        {project.backend_stack.map((tech) => {
          return <li>{tech}</li>;
        })}
      </ul>
    </div>
  );
};

export default ProjectCard;
