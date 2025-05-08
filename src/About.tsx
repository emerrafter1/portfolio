import { experienceData } from "./data/experience_data";
import TechGrid from "./TechGrid";
import {  SiPython,
} from "react-icons/si";
import TechTile from "./TechTile";

type Tech = {
  icon: React.ReactNode;
  label: string;
};

const About = () => {

  const iconClass = "w-12 h-12 text-purple-300";

const techStack: Tech[] = [
  { icon: <SiPython className={iconClass} />, label: "Python" },]



  return (
    <section id="about" className="scroll-mt-24 ">
      <div className="mb-24">
        <p>{experienceData.bio}</p>
      </div>

      <div className="mb-24 justify-center">
        <h2 className="uppercase text-center mb-8 p-4 text-xl">Tools & Technologies</h2>

        <TechGrid />
        <h2 className="uppercase text-center mb-8 mt-12 p-4 text-l">Currently learning</h2>
        <div className="mb-24 flex justify-center">
        <TechTile key={techStack[0].label} icon={techStack[0].icon} label={techStack[0].label} />
        </div>
      </div>
    </section>
  );
};

export default About;
