import { AiOutlineApi } from "react-icons/ai";
import { Typography } from "@mui/material";
import React from "react";

import IconBox, { IconBoxProps } from "../../../icon-box/icon-box";

const APIs = (props: IconBoxProps) => {
  return (
    <IconBox Icon={AiOutlineApi} {...props}>
      <Typography color="text.primary" variant="subtitle2">
        API's:
      </Typography>
      <Typography color="text.primary">React,NodeJS, Redux</Typography>
    </IconBox>
  );
};

export default APIs;
