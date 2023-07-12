import { Typography } from "@mui/material";
import { TfiMicrosoft } from "react-icons/tfi";
import React from "react";

import IconBox, { IconBoxProps } from "../../../icon-box/icon-box";

export type OperationSystemsProps = IconBoxProps & {
  operationSystems: string[];
};

const OperationSystems = (props: OperationSystemsProps) => {
  const { operationSystems, ...otherProps } = props;
  return (
    <IconBox Icon={TfiMicrosoft} {...otherProps}>
      <Typography color="text.primary" variant="subtitle1">
        Operation Systems:
      </Typography>
      <Typography color="text.primary" variant="body1">
        {operationSystems.join(", ")}.
      </Typography>
    </IconBox>
  );
};

export default OperationSystems;
