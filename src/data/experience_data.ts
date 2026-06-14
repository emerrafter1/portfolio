import type { Experience } from "../types";

export const experienceData: Experience = {
  bio: ["Hi, I’m Emer - a Software Development Engineer at Gateway21, with a background in QA and engineering. I enjoy problem-solving and bring an engineering mindset to how I approach development.","I build full-stack features for financial promotion approvals and AI-assisted compliance workflows. I’ve worked across the stack using TypeScript, React, Next.js, Python, PostgreSQL, and AWS - building everything from serverless email pipelines to prompt management tooling and client-facing Slack integrations.","Before moving into development, I spent five years in QA across fintech and financial services, working in manual and automated testing with tools like Cypress, Postman, and TestRail, and collaborating closely with product and design teams to deliver reliable software."]
   ,

  technicalSkills: {
    languages:
      "JavaScript, TypeScript, Python, using Node.js and browsers as environment",
    testing:
      "TDD (Test Driven Development), Jest, Supertest, Cypress, Postman, TestRail",
    monitoringAndDebugging: "Google Cloud Logging and Logrocket",
    backend: "PostgreSQL, MySQL, Sequelize, Drizzle, seeding",
    frontend: "HTML, CSS, React, Next.js, Lighthouse and other accessibility tools",
    hosting: "Netlify, Render, AWS (Lambda, S3, SES)",
    projectManagementAndCollaboration:
      "JIRA, Agile, SCRUM, Kanban, Confluence, Trello",
  },

  experiences: [
    {
      date: "Jun 2025 - Present",
      title: "Software Development Engineer",
      location: "Gateway21, London",
      description: "Build and maintain full-stack features for financial promotion approvals and AI-assisted compliance workflows using TypeScript, React, Next.js, Python, PostgreSQL, and AWS. Built a serverless email ingestion service using AWS SES, Lambda, S3, and PostgreSQL to automate how inbound client emails and attachments enter Gateway21's internal review process, including spam checks, validation, and failure alerting. Built an internal prompt management tool giving non-technical compliance and operations teams control over prompts used in AI workflows - with versioning, approval states, edit history, role-based access, and production/draft workflows. Developed a prompt evaluation pipeline supporting human review, pass/fail thresholds, and golden datasets, allowing teams to test prompt performance before release. Built a client-facing Slack app using TypeScript, AWS Lambda, S3, and the Slack API to let clients submit financial promotion materials directly into the Gateway21 portal from Slack. Currently building an admissions and disclosure platform for crypto clients using TypeScript, Next.js, PostgreSQL, Drizzle, and AWS.",
      url: "https://www.gateway21.com/"
    },
    {
      date: "Jan 2025 - Apr 2025",
      title: "Northcoders Software Development Bootcamp in ",
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

  professionalDevelopment: [
    {
      qualification_title: "AWS Certified Cloud Practitioner (CLF-C02)",
      provider: "Amazon Web Services",
      date: "2026",
    },
    {
      qualification_title: "Northcoders JavaScript Bootcamp",
      provider: "Northcoders",
      date: "Jan 2025 - Apr 2025",
    },
    {
      qualification_title: "Professional Diploma, UX Design",
      provider: "UX Design Institute",
      date: "2021 - 2022",
    },
  ],

  education: [
    {
      qualification_title: "M.A.I Biomedical Engineering",
      provider: "Trinity College Dublin",
      date: "2018 - 2019",
    },
    {
      qualification_title: "B.A.I Biomedical Engineering",
      provider: "Trinity College Dublin",
      date: "2014 - 2018",
    },
    {
      qualification_title: "B.A Mathematics",
      provider: "Trinity College Dublin",
      date: "2014 - 2018",
    },
  ],
};
