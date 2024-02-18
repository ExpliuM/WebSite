import _ from 'lodash';
import CardContent, { CardContentProps } from '@mui/material/CardContent';
import React, { ElementType } from 'react';
import Typography from '@mui/material/Typography';

import { IEducation } from '../../data/cv.types';
import { Box } from '@mui/material';

export type EducationCardContentProps = CardContentProps & {
  educations?: IEducation[];
};

const EducationCardContent: ElementType = (
  props: EducationCardContentProps,
) => {
  const { educations, ...otherProps } = props;

  return (
    <CardContent {...otherProps}>
      {_.map(educations, ({ degree, institute, projects }, educationIndex) => (
        <Box key={educationIndex}>
          <Typography
            color="text.primary"
            paddingLeft="1rem"
            marginBottom="0.5rem"
            paragraph
            variant="body2"
          >
            {`${institute} - ${degree}`}
          </Typography>
          {_.map(
            projects,
            ({ courseName, description, technology }, projectIndex) => (
              <Typography
                key={projectIndex}
                color="text.primary"
                paddingLeft="2rem"
                marginBottom="0.5rem"
                paragraph
                variant="body2"
              >
                {`${courseName} - ${description}`}
                {technology}
              </Typography>
            ),
          )}
        </Box>
      ))}
    </CardContent>
  );
};

export default EducationCardContent;
