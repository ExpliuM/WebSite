import { AiOutlineCloud } from "react-icons/ai";
import { Typography } from "@mui/material";
import React from "react";

import IconBox, { IconBoxProps } from "../../../icon-box/icon-box";

const Clouds = (props: IconBoxProps) => {
  return (
    <IconBox Icon={AiOutlineCloud} {...props}>
      <Typography color="text.primary" variant="subtitle2">
        Clouds:
      </Typography>
      <Typography color="text.primary">GCP, Azure.</Typography>
    </IconBox>
  );
};

export default Clouds;
