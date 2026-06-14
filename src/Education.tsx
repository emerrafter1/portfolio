import { experienceData } from "./data/experience_data";

type EducationProps = {
  activeSection: string;
};

const tiles = [
  { heading: "Professional Development", items: experienceData.professionalDevelopment },
  { heading: "Education", items: experienceData.education },
];

const Education = ({ activeSection }: EducationProps) => {
  return (
    <section id="education" className="scroll-mt-24 group/section">
      {tiles.map((tile, index) => {
        const isFirstActive = index === 0 && activeSection === "education";
        return (
          <div
            key={tile.heading}
            className={`mb-12 rounded-lg sm:p-4 hover:bg-purple-50/5 hover:shadow-purple-200 ${isFirstActive ? "sm:opacity-100 sm:group-hover/section:opacity-20 hover:!opacity-100" : "sm:opacity-20 hover:opacity-100"} transition motion-reduce:transition-none hover:drop-shadow-lg`}
          >
            <h2 className="text-purple-300 text-lg font-medium mb-4">{tile.heading}</h2>
            <ul className="list-disc pl-6 text-sm">
              {tile.items.map((item, i) => (
                <li key={i}>
                  {item.qualification_title} | {item.provider}{item.date && ` | ${item.date}`}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </section>
  );
};

export default Education;
