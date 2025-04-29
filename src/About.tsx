import { experienceData } from "./data/experience_data";
import { SiReact, SiTailwindcss, SiTypescript, SiNodedotjs , SiJest, SiCypress, SiPostman, SiTestrail, SiGooglecloud, SiMysql} from "react-icons/si";


const About = () => {
  return (
    <section id="about" className="scroll-mt-24 ">
      <div className="mb-24">
        <p>{experienceData.bio}</p>
      </div>

      <div className="mb-24">
      
      <SiTailwindcss className="w-12 h-12 text-purple-300" />
      <SiTypescript className="w-12 h-12 text-purple-300" />
      <SiNodedotjs className="w-12 h-12 text-purple-300" />

      <SiJest className="w-12 h-12 text-purple-300" />
      <SiCypress className="w-12 h-12 text-purple-300" />
      <SiPostman className="w-12 h-12 text-purple-300" />
      <SiTestrail className="w-12 h-12 text-purple-300" />

      <SiGooglecloud className="w-12 h-12 text-purple-300" />

      <SiReact className="w-12 h-12 text-purple-300" />
   
        <ul>
          {Object.entries(experienceData.technicalSkills).map(
            ([key, value]) => (
              <li key={key}>
                <strong>
                  {key.charAt(0).toUpperCase() +
                    key.slice(1).replace(/([A-Z])/g, " $1")}
                  :{" "}
                </strong>
                {value}
              </li>
            )
          )}
        </ul>
      </div>




    </section>
  );
};

export default About;
