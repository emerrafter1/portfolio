import type { Experience } from "../types";

export const experienceData: Experience = {
  bio: "Senior QA Engineer turned Software Developer with 5 years of experience in manual and automated testing. Recently completed a full-time Software Development Bootcamp at Northcoders, where I built full-stack JavaScript applications using React, Node.js, and databases, with a strong focus on test-driven development. Skilled in Cypress, writing test cases, and building automation scripts, plus hands-on coding experience from the bootcamp. Now looking to apply my QA background and new development skills to build and ship high-quality software solutions.",

  technicalSkills: {
    languages:
      "JavaScript, TypeScript, using Node.js and browsers as environment",
    testing:
      "TDD (Test Driven Development), Jest, Supertest, Cypress, Postman, TestRail",
    monitoringAndDebugging: "Google Cloud Logging and Logrocket",
    backend: "MySql, PSQL, seeding",
    frontend: "HTML, CSS, React, Lighthouse and other accessibility tools",
    hosting: "Netlify, Render",
    projectManagementAndCollaboration:
      "JIRA, Agile, SCRUM, Kanban, Confluence, Trello",
  },

  experiences: [
    {
      date: "Jan 2025 - Apr 2025",
      title: "Northcoders Software Development Bootcamp in JavaScript",
      location: "",
      description: [
        "Completed a 13-week full-stack JavaScript bootcamp at Northcoders, gaining hands-on experience in software development. Built and deployed full-stack applications using React, Node.js, and databases, with a focus on test-driven development and agile methodologies. Worked in a team using Git, pair programming, and problem-solving to deliver a real-world project.",
      ],
    },

    {
      date: "Jan 2023 - Oct 2024",
      title: "Senior Quality Assurance Engineer", location: "GetGround, London",
      description: [
        "Developed and implemented QA strategies at the project level for the team, identifying and executing necessary QA activities such as automation, end-to-end, manual and exploratory testing",
        "Provided production support on a daily basis, acted as primary point of contact between the customer support and engineering teams, efficiently triaging, documenting, prioritising issues",
        "Analysed server logs, user sessions and the database to diagnose the root cause of bugs/defects",
        "Experienced working with third party integrations including Stripe, Modulr, CurrencyCloud, Onfido, WealthKernel and HubSpot",
        "Conducted API testing using Postman and Swagger to validate response data",
        "Collaborated with Product and UX Design teams to define acceptance criteria during feature development",
        "Managed junior colleagues by reviewing test plans, giving feedback and overseeing issue triaging",
        "Led squad ceremonies including stand-ups, release planning and refinements",
        "Only individual in company of 85 to get maximum rating in 2023 year-end review",
      ],
    },
    {
      date: "Sep 2019 - Jan 2023",
      title: "Technology Consultant", location: "First Derivatives, London",
      description: [
        "Worked on multiple client projects in support, QA and consulting roles",
      ],
    },
    {
      date: "Aug 2021 - Jan 2023",
      title: "Quality Assurance Analyst", location: "London Stock Exchange Group, London",
      description: [
        "Led the timely delivery of quality product releases based on stakeholder specifications",
        "Created and executed test scenarios and built automated testing suites",
        "Worked with dev teams to identify root causes of bugs through troubleshooting and analysis",
        "Onboarded and mentored junior QA engineers",
      ],
    },
    {
      date: "Mar 2021 - Aug 2021",
      title: "Support Analyst", location: "Nephila, London",
      description: [
        "Provided user support, bug fixing, and problem resolution",
        "Spotted recurring issues and recommended application improvements",
        "Built an FAQ site to help users resolve issues independently",
      ],
    },
    {
      date: "Mar 2020 - Mar 2021",
      title: "Quality Assurance Analyst", location: "Investec Wealth & Investment, London",
      description: [
        "Performed user acceptance testing aligned with client requirements",
        "Delivered detailed QA reports and shared findings with stakeholders",
        "Wrote user documentation, release notes, and guides on Confluence",
      ],
    },
  ],

  education: [
    {
      qualification_title: "M.A.I Biomedical Engineering",
      provider: "Trinity College Dublin",
    },
    {
        qualification_title: "B.A.I Biomedical Engineering",
      provider: "Trinity College Dublin",
    },
    { qualification_title: "B.A Mathematics", provider: "Trinity College Dublin" },
    {
        qualification_title: "Professional Diploma, UX Design",
      provider: "UX Design Institute",
    },
  ],
};
