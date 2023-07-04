const miscSchema = {
  type: "object",
  properties: {
    certificates: { type: "string" },
    languages: { type: "string" },
    volunteerPrograms: { type: "string" },
  },
  required: ["certificates", "languages", "volunteerPrograms"],
  additionalProperties: false,
};

export default miscSchema;
