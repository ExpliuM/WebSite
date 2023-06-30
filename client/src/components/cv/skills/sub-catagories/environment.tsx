import { Typography } from "@mui/material";
import { VscEditorLayout } from "react-icons/vsc";
import React from "react";

import IconBox, { IconBoxProps } from "../../../icon-box/icon-box";

const Environments = (props: IconBoxProps) => (
  <IconBox Icon={VscEditorLayout} {...props}>
    <Typography color="text.primary" variant="subtitle2">
      Environments:
    </Typography>
    <Typography color="text.primary">
      VSCode, IntelliJ, Visual Studio, Eclipse.
    </Typography>
  </IconBox>
);

export default Environments;
