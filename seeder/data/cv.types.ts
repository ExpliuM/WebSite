export interface GeneralInformation {
  address: string;
  email: string;
  linkedInLink: string;
  phoneNumber: string;
}

export interface workPeriod {
  from: string;
  till: string;
}

export interface Skills {
  operationSystems: string[];
  programmingLanguages: string[];
  apis: string[];
  clouds: string[];
  databases: string[];
  environments: string[];
  tools: string[];
}

export interface projectsAndTasks {
  [projectName: string]: string | undefined;
}

export interface Experience {
  companyName: string;
  generalDescription: string;
  professionalTitle: string;
  projectsAndTasks: projectsAndTasks;
  skills: Skills;
  title: string;
  workPeriod: workPeriod;
}

export interface EducationProject {
  courseName: string;
  description: string;
  technology: string;
}

export interface Education {
  degree: string;
  institute: string;
  projects: EducationProject[];
}

export interface Misc {
  certificates: string;
  languages: string;
  volunteerPrograms: string;
}

export interface CV {
  educations: Education[];
  experiences: Experience[];
  generalInformation: GeneralInformation;
  misc: Misc;
  name: string;
  skills: Skills;
}
