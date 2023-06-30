export interface WorkPeriod {
  From: string;
  Till: string;
}

export interface Skills {
  APIs: string[];
  Clouds: string[];
  Databases: string[];
  Environments: string[];
  "Operation Systems": string[];
  "Programming Languages": string[];
  Tools: string[];
}

export interface ProjectsAndTasks {
  [projectName: string]: string;
}

export interface Experience {
  CompanyName: string;
  ProfessionalTitle: string;
  Title: string;
  WorkPeriod: WorkPeriod;
  Skills: Skills;
  GeneralDescription: string;
  ProjectsAndTasks: ProjectsAndTasks;
  FullText?: string;
}

export interface GeneralInformation {
  Address: string;
  Email: string;
  LinkedInLink: string;
  PhoneNumber: string;
}

export interface SkillsData {
  APIs: string[];
  Clouds: string[];
  Databases: string[];
  Environments: string[];
  "Operation Systems": string[];
  "Programming Languages": string[];
  Tools: string[];
}

export interface Misc {
  Languages: string;
  "Volunteer Programs": string;
  Certificates: string;
}

export interface CV {
  name: string;
  generalInformation: GeneralInformation;
  skills: SkillsData;
  Experience: Experience[];
  Education: {};
  Misc: Misc;
}

export default CV;
