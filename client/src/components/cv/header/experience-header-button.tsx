import { IconButton, Typography } from "@mui/material";
import React from "react";

import IconBox, { IconBoxProps } from "../../icon-box/icon-box";
import { MdOutlineWorkOutline } from "react-icons/md";

const ExperienceHeaderButton = (props: IconBoxProps) => (
  <IconBox
    alignItems="center"
    display="flex"
    gap="0.5rem"
    Icon={MdOutlineWorkOutline}
    justifyContent="center"
    width="100%"
    {...props}
  >
    <Typography variant="h6">EXPERIENCE</Typography>
  </IconBox>
);

export default ExperienceHeaderButton;
