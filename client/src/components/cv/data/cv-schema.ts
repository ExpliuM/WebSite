const cvSchema = {
  type: "object",
  properties: {
    name: { type: "string" },
    generalInformation: {
      type: "object",
      properties: {
        Address: { type: "string" },
        Email: { type: "string", format: "email" },
        LinkedInLink: { type: "string", format: "uri" },
        PhoneNumber: { type: "string" },
      },
      required: ["Address", "Email"],
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
      additionalProperties: false,
    },
    Experience: {
      type: "array",
      items: {
        type: "object",
        properties: {
          CompanyName: { type: "string" },
          ProfessionalTitle: { type: "string" },
          Title: { type: "string" },
          WorkPeriod: {
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
              "Operation Systems": { type: "array", items: { type: "string" } },
              "Programming Languages": {
                type: "array",
                items: { type: "string" },
              },
              Tools: { type: "array", items: { type: "string" } },
            },
            additionalProperties: false,
          },
          GeneralDescription: { type: "string" },
          ProjectsAndTasks: {
            type: "object",
            patternProperties: {
              "^.*$": { type: "string" },
            },
            additionalProperties: false,
          },
          FullText: { type: "string" },
        },
        required: [
          "CompanyName",
          "ProfessionalTitle",
          "Title",
          "WorkPeriod",
          "Skills",
          "GeneralDescription",
          "ProjectsAndTasks",
        ],
        additionalProperties: false,
      },
    },
    Education: { type: "object" },
    Misc: {
      type: "object",
      properties: {
        Languages: { type: "string" },
        "Volunteer Programs": { type: "string" },
        Certificates: { type: "string" },
      },
      additionalProperties: false,
    },
  },
  required: ["name", "generalInformation", "skills", "Experience", "Misc"],
  additionalProperties: false,
};

export default cvSchema;
