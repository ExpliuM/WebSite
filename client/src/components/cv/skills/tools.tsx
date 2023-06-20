import { Box, BoxProps, Typography } from "@mui/material";
import React from "react";
import { BsTools } from "react-icons/bs";

const Tools = (props: BoxProps) => (
  <Box {...props}>
    <BsTools />
    <Typography variant="subtitle2">Tools:</Typography>
    Git, Monday, Jira
  </Box>
);

export default Tools;
