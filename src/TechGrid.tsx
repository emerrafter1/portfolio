import React from "react";
import {
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiJest,
  SiCypress,
  SiPostman,
  SiTestrail,
  SiGooglecloud,
  SiMysql,
  SiPostgresql,
  SiHtml5,
  SiCss3,
  SiReact,
  SiBootstrap,
  SiTailwindcss,
  SiNetlify,
  SiRender,
  SiFigma,
} from "react-icons/si";

import TechTile from "./TechTile";

type Tech = {
  icon: React.ReactNode;
  label: string;
};

const iconClass = "w-12 h-12 text-purple-300";

const techStack: Tech[] = [
  { icon: <SiJavascript className={iconClass} />, label: "JavaScript" },
  { icon: <SiTypescript className={iconClass} />, label: "TypeScript" },

  { icon: <SiNodedotjs className={iconClass} />, label: "Node.js" },
  { icon: <SiJest className={iconClass} />, label: "Jest" },
  { icon: <SiCypress className={iconClass} />, label: "Cypress" },
  { icon: <SiPostman className={iconClass} />, label: "Postman" },
  { icon: <SiTestrail className={iconClass} />, label: "TestRail" },
  { icon: <SiGooglecloud className={iconClass} />, label: "Google Cloud" },
  { icon: <SiMysql className={iconClass} />, label: "MySQL" },
  { icon: <SiPostgresql className={iconClass} />, label: "PostgreSQL" },
  { icon: <SiHtml5 className={iconClass} />, label: "HTML5" },
  { icon: <SiCss3 className={iconClass} />, label: "CSS3" },
  { icon: <SiReact className={iconClass} />, label: "React" },
  { icon: <SiBootstrap className={iconClass} />, label: "Bootstrap" },
  { icon: <SiTailwindcss className={iconClass} />, label: "Tailwind CSS" },
  { icon: <SiNetlify className={iconClass} />, label: "Netlify" },
  { icon: <SiRender className={iconClass} />, label: "Render" },
  { icon: <SiFigma className={iconClass} />, label: "Figma" },
];

const TechGrid: React.FC = () => (
  <div className=" flex items-center justify-center">
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4"
    >
      {techStack.map((tech) => (
        <TechTile key={tech.label} icon={tech.icon} label={tech.label} />
      ))}
    </div>
  </div>
);

export default TechGrid;
