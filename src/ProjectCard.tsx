import type { Project } from "./types";
import { FaExternalLinkAlt } from "react-icons/fa";


type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="my-2 mb-24 rounded-lg flex flex-wrap bg-purple-50/5 sm:bg-slate-900 sm:hover:bg-purple-50/5 hover:shadow-purple-200 sm:opacity-20 hover:opacity-100 rounded-md transition motion-reduce:transition-none hover:drop-shadow-lg group">
      <img src={project.img_url} alt={project.name} className="rounded-lg p-4 "/>
      <div className="p-4 flex gap-4 flex-wrap">
      <h2
        className="text-purple-300 text-xl font-medium 

"
      >
        {project.name}
      </h2>
      <p>{project.description}</p>
      {project.frontend_stack.length > 0 ?  <ul className="flex flex-wrap my-2 w-full gap-2">
        {project.frontend_stack.map((tech) => {
          return (
            <li className="flex items-center rounded-full bg-purple-300/10 px-3 py-1 text-s font-large text-purple-300 mr-3">
              {tech}
            </li>
          );
        })}
      </ul>: null}

    
{project.backend_stack.length > 0 ? <ul className="flex flex-wrap my-2 w-full gap-2">
        {project.backend_stack.map((tech) => {
          return (
            <li className="flex items-center rounded-full bg-purple-300/10 px-3 py-1 text-s font-large text-purple-300 mr-3">
              {tech}
            </li>
          );
        })}
      </ul> : null}

      {project.github_link_FE.length > 0 && project.github_link_BE.length > 0 ? <div><a href={project.github_link_FE} className="flex items-center gap-2 sm:opacity-0 group-hover:opacity-100">View frontend repository on GitHub<FaExternalLinkAlt/></a><a href={project.github_link_BE} className="flex items-center gap-2 sm:opacity-0 group-hover:opacity-100">View backend repository on GitHub<FaExternalLinkAlt/></a></div> : null}

      {project.github_link_FE.length > 0 && project.github_link_BE.length === 0 ? <a href={project.github_link_FE} className="flex items-center gap-2 sm:opacity-0 group-hover:opacity-100">View on GitHub<FaExternalLinkAlt/></a> : null}
      {project.github_link_BE.length > 0 && project.github_link_FE.length === 0  ? <a href={project.github_link_BE} className="flex items-center gap-2 sm:opacity-0 group-hover:opacity-100">View on GitHub<FaExternalLinkAlt/></a> : null}
    </div>
    </div>
  );
};

export default ProjectCard;
