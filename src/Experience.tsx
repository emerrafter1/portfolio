import { experienceData } from "./data/experience_data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Experience = () => {
  return (
    <section id="experience" className="scroll-mt-24">
      <div className="mb-24">
        {experienceData.experiences.map((experience, index) => (
          <div
            key={index}
            className="grid grid-cols-8 gap-4 my-8 rounded-lg p-8 flex flex-wrap hover:bg-purple-300/10 hover:shadow-white"
          >
            <span className="col-span-2">{experience.date}</span>
            <div className="col-span-6">
              <h2 className="text-purple-300 text-lg font-medium">
                <span>{experience.title}</span>
                {experience.location && (
                  <span className="flex items-center">
                    <FontAwesomeIcon className="mr-2" icon={faLocationDot} />
                    {experience.location}
                  </span>
                )}
              </h2>
              <ul className="my-4">
                {experience.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
