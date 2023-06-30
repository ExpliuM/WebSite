import { Box, BoxProps } from "@mui/material";
import React from "react";

import { IconBoxProps } from "../../icon-box/icon-box";
import APIs from "./sub-catagories/apis";
import Clouds from "./sub-catagories/cloud";
import Databases from "./sub-catagories/databases";
import Environments from "./sub-catagories/environment";
import OperationSystems from "./sub-catagories/operation-systems";
import ProgrammingLanguages from "./sub-catagories/programming-languages";
import Title from "./title";
import Tools from "./sub-catagories/tools";

const Skills = (props: BoxProps) => {
  const skillProps: IconBoxProps = {
    alignItems: "center",
    display: "flex",
    gap: "0.5rem",
    justifyContent: "left",
    width: "100%",
  };

  return (
    <Box {...props}>
      <Title
        alignItems="center"
        display="flex"
        gap="0.5rem"
        justifyContent="center"
        width="100%"
      >
        Skills
      </Title>
      <Box display="flex" flexDirection="row" gap="3rem">
        <Box display="flex" flexDirection="column">
          <ProgrammingLanguages {...skillProps} />
          <Environments {...skillProps} />
          <OperationSystems {...skillProps} />
        </Box>
        <Box display="flex" flexDirection="column">
          <APIs {...skillProps} />
          <Tools {...skillProps} />
          <Clouds {...skillProps} />
        </Box>
      </Box>
      <Databases {...skillProps} justifyContent="center" />
    </Box>
  );
};

export default Skills;
