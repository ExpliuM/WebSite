import { Typography } from "@mui/material";
import React from "react";

import IconBox, { IconBoxProps } from "../../icon-box/icon-box";
import { TbSchool } from "react-icons/tb";

const EducationHeaderButton = (props: IconBoxProps) => (
  <IconBox
    alignItems="center"
    display="flex"
    gap="0.5rem"
    Icon={TbSchool}
    justifyContent="center"
    width="100%"
    {...props}
  >
    <Typography variant="h6">Education</Typography>
  </IconBox>
);

export default EducationHeaderButton;
