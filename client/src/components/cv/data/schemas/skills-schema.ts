const skillsSchema = {
  type: 'object',
  properties: {
    apis: { type: 'array', items: { type: 'string' } },
    clouds: { type: 'array', items: { type: 'string' } },
    databases: { type: 'array', items: { type: 'string' } },
    environments: { type: 'array', items: { type: 'string' } },
    operationSystems: { type: 'array', items: { type: 'string' } },
    programmingLanguages: { type: 'array', items: { type: 'string' } },
    tools: { type: 'array', items: { type: 'string' } },
  },
  required: [
    'apis',
    'clouds',
    'databases',
    'environments',
    'operationSystems',
    'programmingLanguages',
    'tools',
  ],
  additionalProperties: false,
};

export default skillsSchema;
