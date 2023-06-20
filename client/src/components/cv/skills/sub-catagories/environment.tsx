import { BoxProps, Typography } from "@mui/material";
import { VscEditorLayout } from "react-icons/vsc";
import IconBox from "../../../icon-box/icon-box";
import React from "react";

const Environments = (props: BoxProps) => (
  <IconBox Icon={VscEditorLayout} {...props}>
    <Typography variant="subtitle2">Environments:</Typography> VSCode, IntelliJ,
    Visual Studio, Eclipse.
  </IconBox>
);

export default Environments;
