import type {Project} from "../types";

const projectsData: Project[] = [
  {
    id: 1,
    name: "Study BuddAI",
    description: "Study BuddAI is ...",
    frontend_stack: [
      "React",
      "Vite",
      "TypeScript",
      "CSS",
      "HTML",
      "Bootstrap",
      "Lottie",
    ],
    backend_stack: [
      "TypeScript",
      "MySQL",
      "Express",
      "Supertest",
      "Jest",
      "Gemini AI",
      "Clerk",
    ],
  },
  {
    id: 2,
    name: "NC News",
    description: "NC News is ...",
    frontend_stack: ["React", "Vite", "JavaScript", "CSS", "HTML", "Bootstrap"],
    backend_stack: ["JavaScript", "PostgreSQL", "Express", "Jest", "Supertest"],
  },
];

export default projectsData;
