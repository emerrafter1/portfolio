
export type Project = {
    id:number,
    name: string;
    description: string,
    frontend_stack: string[],
    backend_stack: string[]
  };

 export type Experience = {
    bio: string;
    technicalSkills: {
      languages: string;
      testing: string;
      monitoringAndDebugging: string;
      backend: string;
      frontend: string;
      hosting: string;
      projectManagementAndCollaboration: string;
    };
    experiences: {
      date: string;
      title: string;
      location: string;
      description: string[];
    }[];
    education: Qualification[];
  };

  type Qualification = {
    qualification_title: string;
    provider: string;

  }
  


