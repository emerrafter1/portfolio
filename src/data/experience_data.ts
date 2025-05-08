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
      description: 
        "Completed a 13-week full-stack JavaScript bootcamp at Northcoders, gaining hands-on experience in software development. Built and deployed full-stack applications using React, Node.js, and databases, with a focus on test-driven development and agile methodologies. Worked in a team using Git, pair programming, and problem-solving to deliver a real-world project.",
      url: "https://northcoders.com/"
      
    },

    {
      date: "Jan 2023 - Oct 2024",
      title: "Senior Quality Assurance Engineer", location: "GetGround, London",
      description: "Developed and ran QA strategies for the team, covering automation, end-to-end, manual, and exploratory testing. Handled daily production support as the main link between customer support and engineering, triaging and prioritising issues. Analysed server logs, user sessions, and databases to identify root causes of defects. Worked with third-party tools including Stripe, Modulr, CurrencyCloud, Onfido, WealthKernel, and HubSpot. Performed API testing using Postman and Swagger, and collaborated with Product and UX teams to define acceptance criteria. Managed junior staff by reviewing test plans and overseeing issue triaging. Led squad ceremonies. Received the highest rating in the 2023 year-end review, as the only employee in a company of 85 to achieve this.",
      url:"https://www.getground.co.uk/"
        
      
    },
    {
      date: "Sep 2019 - Jan 2023",
      title: "Technology Consultant", location: "First Derivatives, London",
      description: 
        "Worked on multiple client projects in support, QA and consulting roles",
      url:"https://firstderivative.com/"
    },
    {
      date: "Aug 2021 - Jan 2023",
      title: "Quality Assurance Analyst", location: "London Stock Exchange Group, London",
      description: 
        "Led on-time delivery of product releases aligned with stakeholder specifications. Created and ran test scenarios and built automated test suites. Collaborated with development teams to identify bug root causes through troubleshooting and analysis. Onboarded and mentored junior QA engineers.",
      url:"https://www.lseg.com/en/post-trade/clearing"
    },
    {
      date: "Mar 2021 - Aug 2021",
      title: "Support Analyst", location: "Nephila, London",
      description: 
        "Provided user support, handled bug fixing, and resolved problems. Identified recurring issues and suggested application improvements. Built an FAQ site to help users troubleshoot issues on their own.",
        url: "https://www.nephila.com/"
      
    },
    {
      date: "Mar 2020 - Mar 2021",
      title: "Quality Assurance Analyst", location: "Investec Wealth & Investment, London",
      description: 
        "Performed user acceptance testing to meet client requirements. Delivered detailed QA reports and shared findings with stakeholders. Wrote user documentation, release notes, and guides on Confluence.",
      url: "https://www.investec.com/en_gb.html"
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
