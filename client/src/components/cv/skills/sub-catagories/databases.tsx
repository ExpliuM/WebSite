import { Typography } from "@mui/material";
import { BsDatabase } from "react-icons/bs";
import React from "react";

import IconBox, { IconBoxProps } from "../../../icon-box/icon-box";

const Databases = (props: IconBoxProps) => (
  <IconBox Icon={BsDatabase} {...props}>
    <Typography color="text.primary" variant="subtitle2">
      Databases:
    </Typography>
    <Typography color="text.primary">
      Neo4J, Datastore, Firebase, PostgreSQL.
    </Typography>
  </IconBox>
);

export default Databases;
