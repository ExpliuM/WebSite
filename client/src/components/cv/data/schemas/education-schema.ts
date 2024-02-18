const educationSchema = {
  type: 'object',
  properties: {
    degree: { type: 'string' },
    institute: { type: 'string' },
    projects: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          courseName: { type: 'string' },
          description: { type: 'string' },
          technology: { type: 'string' },
        },
        required: ['courseName', 'description', 'technology'],
      },
    },
  },
  required: ['degree', 'institute', 'projects'],
  additionalProperties: false,
};

export default educationSchema;
