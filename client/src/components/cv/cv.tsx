import { Box, BoxProps, Typography } from "@mui/material";
import React from "react";

import Experience from "./experience/experience";
import Misc from "./misc/misc";
import Skills from "./skills/skills";
import Title from "./title";
import GeneralInformation from "./general-information/general-information";
import Education from "./education/education";

const CV = (props: BoxProps) => (
  <Typography color="text.primary" variant="body1">
    <Box display="flex" flexDirection="column" gap="1rem" {...props}>
      <Title align="center">Alexander Khvolis</Title>
      <GeneralInformation />
      <Skills display="flex" flexDirection="column" alignItems="center" gap="0.25rem" />
      <Experience />
      <Education />
      <Misc />
    </Box>
  </Typography>
);

export default CV;
