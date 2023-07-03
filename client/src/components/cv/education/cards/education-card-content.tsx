import _ from "lodash";
import CardContent, { CardContentProps } from "@mui/material/CardContent";
import React, { ElementType } from "react";
import Typography from "@mui/material/Typography";

import { Education } from "../../data/cv.types";
import { Box } from "@mui/material";

export type EducationCardContentProps = CardContentProps & {
  education: Education[];
};

const EducationCardContent: ElementType = (
  props: EducationCardContentProps
) => {
  const { education, ...otherProps } = props;

  return (
    <CardContent {...otherProps}>
      {_.map(education, ({ degree, institute, projects }, index) => (
        <Box>
          <Typography
            key={`education-${institute}`}
            color="text.primary"
            paddingLeft="1rem"
            marginBottom="0.5rem"
            paragraph
            variant="body2"
          >
            {`${institute} - ${degree}`}
          </Typography>
          {_.map(projects, ({ courseName, description, technology }, index) => (
            <Typography
              key={`${institute}-projects-${index}`}
              color="text.primary"
              paddingLeft="2rem"
              marginBottom="0.5rem"
              paragraph
              variant="body2"
            >
              {`${courseName} - ${description}`}
              {technology}
            </Typography>
          ))}
        </Box>
      ))}
    </CardContent>
  );
};

export default EducationCardContent;
