import { Box, BoxProps, Card, CardProps } from "@mui/material";
import React from "react";

import { Education as EducationInterface } from "../data/cv.types";
import cvData from "../data/cv-data";
import EducationCardContent, {
  EducationCardContentProps,
} from "./cards/education-card-content";

const education: EducationInterface[] = cvData.education;

const Education = (props: BoxProps) => {
  const cardProps: CardProps = {
    sx: {
      backgroundColor: "primary.light",
      borderRadius: "1rem",
      display: "flex",
      flexDirection: "column",
      height: "100%",
      justifyContent: "center",
      width: "100%",
    },
  };

  const educationCardContentProps: EducationCardContentProps = {
    education,
    sx: {
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
      padding: "0.1rem",
    },
  };

  return (
    <Box {...props}>
      <Card {...cardProps}>
        <EducationCardContent {...educationCardContentProps} />
      </Card>
    </Box>
  );
};

export default Education;
