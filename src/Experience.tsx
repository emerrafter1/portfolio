import { experienceData } from "./data/experience_data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FaExternalLinkAlt } from "react-icons/fa";
import cv from "../public/EmerRafter_CV.pdf";

const Experience = () => {
  return (
    <section id="experience" className=" scroll-mt-24">
      <div className="mb-12">
        {experienceData.experiences.map((experience, index) => (
          <div
            key={index}
            className="grid grid-cols-8 gap-4 my-8 rounded-lg sm:p-1 lg:p-4  flex flex-wrap hover:bg-purple-50/5 hover:shadow-purple-200 sm:opacity-20 hover:opacity-100
  rounded-md transition motion-reduce:transition-none  hover:drop-shadow-lg group"
          >
            <div className="col-span-8 flex flex-wrap gap-2">
              <h2 className="text-purple-300 text-lg font-medium w-full">
                <span className="flex flex-wrap justify-between">
                  {experience.title}{" "}
                  <a href={experience.url} aria-label={experience.location}>
                    <FaExternalLinkAlt className="sm:opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xl" />
                  </a>
                </span>
              </h2>
              {experience.location && (
                <span className="flex items-center text-purple-300 w-full">
                  <FontAwesomeIcon className="mr-2 " icon={faLocationDot} />
                  {experience.location}
                </span>
              )}
              <span className="col-span-8 text-purple-300 w-full ">
                {experience.date}
              </span>
              <p>{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap w-full gap-2 text-purple-300 mb-12  sm:p-4">
      <a href={cv} target="_blank" rel="noopener noreferrer">
  View Full CV
</a>
        <FaExternalLinkAlt className="text-lg" />
      </div>
    </section>
  );
};

export default Experience;
