import { Box, BoxProps, Typography } from "@mui/material";
import React from "react";

const Rafael = (props: BoxProps) => (
  <Box {...props}>
    <Typography paragraph>
      Real-Time Embedded Software Engineer | Rafael Advanced Defense Systems |
      05/2017 – 08/2019 C++, Visual Studio, VxWorks Development of a missile
      navigation system that integrates algorithms (Navigation and Mapping) and
      hardware (IMU, Servo Motors, Cameras). Fixing issues with serial driver
      implementation.
    </Typography>
  </Box>
);

export default Rafael;
