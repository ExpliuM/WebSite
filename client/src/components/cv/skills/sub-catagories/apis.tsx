import { AiOutlineApi } from "react-icons/ai";
import { BoxProps, Typography } from "@mui/material";
import React from "react";
import IconBox from "../../../icon-box/icon-box";

const APIs = (props: BoxProps) => {
  return (
    <IconBox Icon={AiOutlineApi} {...props}>
      <Typography variant="subtitle2">API's:</Typography> React,NodeJS, Redux
    </IconBox>
  );
};

export default APIs;
