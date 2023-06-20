import { BiCode } from "react-icons/bi";
import { BoxProps, Typography } from "@mui/material";
import IconBox from "../../../icon-box/icon-box";
import React from "react";

const ProgrammingLanguages = (props: BoxProps) => (
  <IconBox Icon={BiCode} {...props}>
    <Typography variant="subtitle2">Programming Languages:</Typography>{" "}
    JavaScript, C++, C, Bash, Python, Perl,java.
  </IconBox>
);

export default ProgrammingLanguages;
