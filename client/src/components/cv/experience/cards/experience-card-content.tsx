import CardContent, { CardContentProps } from '@mui/material/CardContent';
import React, { ElementType } from 'react';
import Typography from '@mui/material/Typography';

import { IExperience } from '../../data/cv.types';

export type ExperienceCardContentProps = CardContentProps & {
  experience: IExperience;
};

const ExperienceCardContent: ElementType = (
  props: ExperienceCardContentProps,
) => {
  const { experience, ...otherProps } = props;
  const { generalDescription, projectsAndTasks } = experience;

  return (
    <CardContent {...otherProps}>
      <Typography variant="subtitle2">General description:</Typography>
      <Typography
        color="text.primary"
        paddingLeft="1rem"
        paragraph
        variant="body2"
      >
        {generalDescription}
      </Typography>

      <Typography variant="subtitle2">
        Projects, tasks, and responsibilities:
      </Typography>
      {Object.entries(projectsAndTasks || {}).map(
        ([projectName, projectDescription], index) => (
          <Typography
            key={index}
            color="text.primary"
            paddingLeft="1rem"
            marginBottom="0.5rem"
            paragraph
            variant="body2"
          >
            {projectName} - {projectDescription}
          </Typography>
        ),
      )}
    </CardContent>
  );
};

export default ExperienceCardContent;
