import { BiCode } from "react-icons/bi";
import { Typography } from "@mui/material";
import IconBox, { IconBoxProps } from "../../../icon-box/icon-box";
import React from "react";

const ProgrammingLanguages = (props: IconBoxProps) => (
  <IconBox Icon={BiCode} {...props}>
    <Typography color="text.primary" variant="subtitle2">
      Programming Languages:
    </Typography>{" "}
    <Typography color="text.primary">
      JavaScript, C++, C, Bash, Python, Perl,java.
    </Typography>
  </IconBox>
);

export default ProgrammingLanguages;
