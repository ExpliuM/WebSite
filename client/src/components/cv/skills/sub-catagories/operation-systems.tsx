import { Typography } from "@mui/material";
import { TfiMicrosoft } from "react-icons/tfi";
import React from "react";

import IconBox, { IconBoxProps } from "../../../icon-box/icon-box";

const OperationSystems = (props: IconBoxProps) => (
  <IconBox
    Icon={TfiMicrosoft}
    {...props}
  >
    <Typography color="text.primary" variant="subtitle2">
      Operation Systems:
    </Typography>
    <Typography color="text.primary">
      MacOS, Ubuntu, CentOS, VxWorks, Unix.
    </Typography>
  </IconBox>
);

export default OperationSystems;
