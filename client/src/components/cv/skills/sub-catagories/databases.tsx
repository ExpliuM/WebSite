import { BoxProps, Typography } from "@mui/material";
import { BsDatabase } from "react-icons/bs";
import IconBox from "../../../icon-box/icon-box";
import React from "react";

const Databases = (props: BoxProps) => (
  <IconBox Icon={BsDatabase} {...props}>
    <Typography variant="subtitle2">Databases:</Typography>
    Neo4J, Datastore, Firebase, PostgreSQL.
  </IconBox>
);

export default Databases;
