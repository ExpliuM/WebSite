const cvSchema = {
  // $schema: "http://json-schema.org/draft-07/schema#",
  type: "object",
  properties: {
    name: { type: "string" },
    generalInformation: {
      type: "object",
      properties: {
        Address: { type: "string" },
        Email: { type: "string", format: "email" },
        LinkedInLink: { type: "string", format: "uri" },
        PhoneNumber: { type: "string", pattern: "^[0-9]+$" },
      },
      required: ["Address", "Email", "LinkedInLink", "PhoneNumber"],
      additionalProperties: false,
    },
    skills: {
      type: "object",
      properties: {
        APIs: { type: "array", items: { type: "string" } },
        Clouds: { type: "array", items: { type: "string" } },
        Databases: { type: "array", items: { type: "string" } },
        Environments: { type: "array", items: { type: "string" } },
        "Operation Systems": { type: "array", items: { type: "string" } },
        "Programming Languages": { type: "array", items: { type: "string" } },
        Tools: { type: "array", items: { type: "string" } },
      },
      required: [
        "APIs",
        "Clouds",
        "Databases",
        "Environments",
        "Operation Systems",
        "Programming Languages",
        "Tools",
      ],
      additionalProperties: false,
    },
    experience: {
      type: "array",
      items: {
        anyOf: [
          {
            type: "object",
            properties: {
              companyName: { type: "string" },
              professionalTitle: { type: "string" },
              Title: { type: "string" },
              workPeriod: {
                type: "object",
                properties: {
                  From: { type: "string" },
                  Till: { type: "string" },
                },
                required: ["From", "Till"],
                additionalProperties: false,
              },
              Skills: {
                type: "object",
                properties: {
                  APIs: { type: "array", items: { type: "string" } },
                  Clouds: { type: "array", items: { type: "string" } },
                  Databases: { type: "array", items: { type: "string" } },
                  Environments: { type: "array", items: { type: "string" } },
                  "Operation Systems": {
                    type: "array",
                    items: { type: "string" },
                  },
                  "Programming Languages": {
                    type: "array",
                    items: { type: "string" },
                  },
                  Tools: { type: "array", items: { type: "string" } },
                },
                additionalProperties: false,
              },
              generalDescription: { type: "string" },
              projectsAndTasks: {
                type: "object",
                patternProperties: {
                  "^.*$": { type: ["string"] },
                },
                additionalProperties: true,
              },
              fullText: { type: "string" },
            },
            required: [
              "companyName",
              "professionalTitle",
              "Title",
              "workPeriod",
              "Skills",
              "generalDescription",
              "projectsAndTasks",
              "fullText",
            ],
          },
        ],
      },
    },
    education: {
      type: "array",
      items: {
        anyOf: [
          {
            type: "object",
            properties: {
              institute: { type: "string" },
              degree: { type: "string" },
              projects: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    courseName: { type: "string" },
                    description: { type: "string" },
                    technology: { type: "string" },
                  },
                  required: ["courseName", "description", "technology"],
                },
              },
            },
            required: ["institute", "degree", "projects"],
            additionalProperties: false,
          },
        ],
      },
    },
    misc: {
      type: "object",
      properties: {
        languages: { type: "string" },
        volunteerPrograms: { type: "string" },
        certificates: { type: "string" },
      },
      required: ["Languages", "Volunteer Programs", "Certificates"],
    },
  },
  required: [
    "name",
    "generalInformation",
    "skills",
    "experience",
    "education",
    "misc",
  ],
  additionalProperties: false,
};

export default cvSchema;
