import type { Project } from "./types";

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="my-2">
      <h2
        className="text-purple-300 text-xl font-medium

"
      >
        {project.name}
      </h2>
      <p>{project.description}</p>

      <ul className="flex flex-wrap my-2">
        {project.frontend_stack.map((tech) => {
          return (
            <li className="flex items-center rounded-full bg-purple-300/10 px-3 py-1 text-xs font-large text-purple-300 mr-3">
              {tech}
            </li>
          );
        })}
      </ul>

      <ul className="flex flex-wrap my-2">
        {project.backend_stack.map((tech) => {
          return (
            <li className="flex items-center rounded-full bg-purple-300/10 px-3 py-1 text-xs font-large text-purple-300 mr-3">
              {tech}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProjectCard;
