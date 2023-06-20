import { AiOutlineCloud } from "react-icons/ai";
import { Box, BoxProps, Typography } from "@mui/material";
import React from "react";
import IconBox from "../../../icon-box/icon-box";

const Clouds = (props: BoxProps) => {
  return (
    <IconBox Icon={AiOutlineCloud} {...props}>
      <Typography variant="subtitle2">Clouds:</Typography>
      GCP, Azure.
    </IconBox>
  );
};

export default Clouds;
