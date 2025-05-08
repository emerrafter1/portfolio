
import type {Project} from "../types";
import ncNewsBeImg from '../assets/nc_news_be.png';
import studyBuddaiImg from '../assets/studdy_buddai.png'
import ncNewsFeImg from '../assets/nc_news_fe.png';


const projectsData: Project[] = [
  {
    id: 1,
    name: "Study BuddAI",
    description: "Study BuddAI is a quiz platform that generates questions from uploaded documents using Gemini AI with prompt engineering. Users can sign up, log in, and take quizzes, with their progress stored in a MySQL database. The frontend is built with React, Vite, Bootstrap, and Lottie, while the backend runs on Express. Clerk handles authentication.",
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
     github_link_FE: "https://github.com/nimashakaranahala/study-buddAI-FE", 
     github_link_BE: "https://github.com/emerrafter1/study-buddAI-BE",
      img_url: studyBuddaiImg
  },
  {
    id: 2,
    name: "News App Backend",
    description: "A RESTful api for a content sharing news app where users can read, post and react to articles through comments and votes. The backend follows an MVC architecture and was developed using a test-driven (TDD) approach",
    frontend_stack: [],
    backend_stack: ["JavaScript", "PostgreSQL", "Express", "Jest", "Supertest"],
    github_link_FE: "",
    github_link_BE: "https://github.com/emerrafter1/nc-news",
     img_url: ncNewsBeImg
  },
  {
    id: 3,
    name: "News App Frontend",
    description: "Developed the frontend for a social news app that lets users browse content, vote, and comment. The responsive interface, built with Bootstrap, integrates with the backend API. React hooks handle state management throughout the app.",
    frontend_stack: ["React", "Vite", "JavaScript", "CSS", "Bootstrap", "API Integration"],
    backend_stack: [],
    github_link_FE: "https://github.com/emerrafter1/nc-news-fe",
    github_link_BE: "",
    img_url: ncNewsFeImg
  },
];

export default projectsData;
