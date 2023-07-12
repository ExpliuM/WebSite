import skillsSchema from "./skills-schema";

const experienceSchema = {
  type: "object",
  properties: {
    companyName: { type: "string" },
    professionalTitle: { type: "string" },
    title: { type: "string" },
    workPeriod: {
      type: "object",
      properties: {
        From: { type: "string" },
        Till: { type: "string" },
      },
      required: ["From", "Till"],
      additionalProperties: false,
    },
    skills: skillsSchema,
    generalDescription: { type: "string" },
    projectsAndTasks: {
      type: "object",
      patternProperties: {
        "^.*$": { type: ["string"] },
      },
      additionalProperties: true,
    },
  },
  required: [
    "companyName",
    "professionalTitle",
    "title",
    "workPeriod",
    "skills",
    "generalDescription",
    "projectsAndTasks",
  ],
  additionalProperties: false,
};

export default experienceSchema;
