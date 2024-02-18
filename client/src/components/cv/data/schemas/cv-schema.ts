import educationSchema from './education-schema';
import experienceSchema from './experience-schema';
import generalInformationSchema from './general-Information-schema';
import miscSchema from './misc-schema';
import skillsSchema from './skills-schema';

const cvSchema = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'object',
  properties: {
    name: { type: 'string' },
    generalInformation: generalInformationSchema,
    skills: skillsSchema,
    experiences: {
      type: 'array',
      items: {
        anyOf: [experienceSchema],
      },
    },
    educations: {
      type: 'array',
      items: {
        anyOf: [educationSchema],
      },
    },
    misc: miscSchema,
  },
  required: [
    'educations',
    'experiences',
    'generalInformation',
    'misc',
    'name',
    'skills',
  ],
  additionalProperties: false,
};

export default cvSchema;
