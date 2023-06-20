import { Box, BoxProps } from "@mui/material";
import React from "react";

const Misc = (props: BoxProps) => (
  <Box {...props}>
    MISC
    <br />
    Languages: English, Hebrew, and Russian.
    <br />
    Volunteer programs: MADA (Ambulance first AID assist),Melech Project
    (Donation program, computers for everyone) <br />
    CCNA (Cisco Certified Network Associate)
    <br />
  </Box>
);

export default Misc;
