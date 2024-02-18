const generalInformationSchema = {
  type: 'object',
  properties: {
    address: { type: 'string' },
    email: { type: 'string', format: 'email' },
    linkedInLink: { type: 'string', format: 'uri' },
    phoneNumber: { type: 'string', pattern: '^[0-9]+$' },
  },
  required: ['address', 'email', 'linkedInLink', 'phoneNumber'],
  additionalProperties: false,
};

export default generalInformationSchema;
