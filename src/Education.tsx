import { experienceData } from "./data/experience_data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Education = () => {
  return (
    <section id="education" className="scroll-mt-24">
      <div className="mb-24">
        <div className=" my-2 rounded-lg p-2 bg-purple-300/10 font-large text-purple-300 ">
          <ul>
            {experienceData.education.map((item, i) => (
                <li>
              <p>{item.qualification_title}</p>
              <p><FontAwesomeIcon className="mr-2" icon={faLocationDot} />{item.provider}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;


