import { Typography } from "@mui/material";
import { BsDatabase } from "react-icons/bs";
import React from "react";

import IconBox, { IconBoxProps } from "../../../icon-box/icon-box";

export type DatabasesProps = IconBoxProps & {
  databases: string[];
};

const Databases = (props: DatabasesProps) => {
  const { databases ,...otherProps} = props;

  return (
    <IconBox Icon={BsDatabase} {...otherProps}>
      <Typography color="text.primary" variant="subtitle1">
        Databases:
      </Typography>
      <Typography color="text.primary" variant="body1">
        {databases.join(", ")}
      </Typography>
    </IconBox>
  );
};

export default Databases;
