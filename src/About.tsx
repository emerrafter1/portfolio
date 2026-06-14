import { experienceData } from "./data/experience_data";
import TechGrid from "./TechGrid";

const About = () => {
  return (
    <section id="about" className="scroll-mt-24 ">
      <div className="mb-6 sm:mb-16 lg:mb-24 flex flex-wrap gap-4">
        {
          experienceData.bio.map((item) => {
            return <p className="w-full">{item}</p>
          })
        }
      </div>

      <div className="mb-24 justify-center">
        <h2 className="uppercase text-center mb-8 p-4 text-xl text-purple-300">Tools & Technologies</h2>
        <TechGrid />
      </div>
    </section>
  );
};

export default About;
