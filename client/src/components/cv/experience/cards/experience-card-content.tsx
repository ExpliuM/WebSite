import CardContent, { CardContentProps } from "@mui/material/CardContent";
import React, { ElementType } from "react";
import Typography from "@mui/material/Typography";

import { Experience } from "../../data/cv.interfaces";

export type ExperienceCardContentProps = CardContentProps & {
  experience: Experience;
};

const ExperienceCardContent: ElementType = (
  props: ExperienceCardContentProps
) => {
  const { experience, ...otherProps } = props;
  const { GeneralDescription, ProjectsAndTasks } = experience;

  return (
    <CardContent {...otherProps}>
      <Typography variant="subtitle1">General description:</Typography>
      <Typography
        color="text.primary"
        paddingLeft="1rem"
        paragraph
        variant="body2"
      >
        {GeneralDescription}
      </Typography>

      <Typography variant="subtitle1">
        Projects, tasks, and responsibilities:
      </Typography>
      {Object.entries(ProjectsAndTasks || {}).map(
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
        )
      )}
    </CardContent>
  );
};

export default ExperienceCardContent;
