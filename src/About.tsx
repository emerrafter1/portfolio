import { experienceData } from "./data/experience_data";

const About = () => {
  return (
    <section id="about" className="scroll-mt-24">
      <div className="mb-24">
        <p>{experienceData.bio}</p>
      </div>

      <div className="mb-24">
   
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
