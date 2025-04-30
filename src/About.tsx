import { experienceData } from "./data/experience_data";
import TechGrid from "./TechGrid";

const About = () => {
  return (
    <section id="about" className="scroll-mt-24 ">
      <div className="mb-24">
        <p>{experienceData.bio}</p>
      </div>

      <div className="mb-24 justify-center">
        <h2 className="uppercase text-center mb-8 border-4 p-4 text-xl">Tools & Technologies</h2>

        <TechGrid />
      </div>
    </section>
  );
};

export default About;
