import { Box, BoxProps, Typography } from "@mui/material";
import React from "react";
import { BsTools } from "react-icons/bs";
import IconBox, { IconBoxProps } from "../../../icon-box/icon-box";

const Tools = (props: IconBoxProps) => (
  <IconBox Icon={BsTools} {...props}>
    <Typography color="text.primary" variant="subtitle2">
      Tools:
    </Typography>
    <Typography color="text.primary">Git, Monday, Jira</Typography>
  </IconBox>
);

export default Tools;
