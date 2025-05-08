import { experienceData } from "./data/experience_data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FaExternalLinkAlt } from "react-icons/fa";

const Experience = () => {
  return (
    <section id="experience" className=" scroll-mt-24">
      <div className="mb-24">
        {experienceData.experiences.map((experience, index) => (
          <div
            key={index}
            className="grid grid-cols-8 gap-4 my-8 rounded-lg p-4 flex flex-wrap hover:bg-purple-50/5 hover:shadow-purple-200
  rounded-md transition motion-reduce:transition-none  hover:drop-shadow-lg group"
          >
            <div className="col-span-8 flex flex-wrap gap-2">
              <h2 className="text-purple-300 text-lg font-medium w-full">
                <span className="flex flex-wrap justify-between">
                  {experience.title}{" "}
                  <a href={experience.url}><FaExternalLinkAlt className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xl" /></a>
                </span>
              </h2>
              {experience.location && (
                <span className="flex items-center text-purple-300 w-full">
                  <FontAwesomeIcon className="mr-2 " icon={faLocationDot} />
                  {experience.location}
                </span>
              )}
              <span className="col-span-8 text-purple-300 w-full">
                {experience.date}
              </span>
              <p>{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
