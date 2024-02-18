export interface IGeneralInformation {
  address: string;
  email: string;
  linkedInLink: string;
  phoneNumber: string;
}

export interface IWorkPeriod {
  from: string;
  till: string;
}

export interface ISkills {
  operationSystems: string[];
  programmingLanguages: string[];
  apis: string[];
  clouds: string[];
  databases: string[];
  environments: string[];
  tools: string[];
}

export interface IProjectsAndTasks {
  [projectName: string]: string | undefined;
}

export interface IExperience {
  companyName: string;
  generalDescription: string;
  professionalTitle: string;
  projectsAndTasks: IProjectsAndTasks;
  skills: ISkills;
  title: string;
  workPeriod: IWorkPeriod;
}

export interface IEducationProject {
  courseName: string;
  description: string;
  technology: string;
}

export interface IEducation {
  degree: string;
  institute: string;
  projects: IEducationProject[];
}

export interface IMisc {
  certificates: string;
  languages: string;
  volunteerPrograms: string;
}

export interface ICV {
  educations: IEducation[];
  experiences: IExperience[];
  generalInformation: IGeneralInformation;
  misc: IMisc;
  name: string;
  skills: ISkills;
}
