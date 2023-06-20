import { BoxProps, Typography } from "@mui/material";
import { TfiMicrosoft } from "react-icons/tfi";
import IconBox from "../../../icon-box/icon-box";
import React from "react";

const OperationSystems = (props: BoxProps) => (
  <IconBox Icon={TfiMicrosoft} iconProps={{ style: { color: "#FFF" } }} {...props}>
    <Typography variant="subtitle2">Operation Systems:</Typography> MacOS,
    Ubuntu, CentOS, VxWorks, Unix.
  </IconBox>
);

export default OperationSystems;
