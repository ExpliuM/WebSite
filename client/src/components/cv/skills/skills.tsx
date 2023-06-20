import { Box, BoxProps } from "@mui/material";
import APIs from "./sub-catagories/apis";
import Clouds from "./sub-catagories/cloud";
import Databases from "./sub-catagories/databases";
import Environments from "./sub-catagories/environment";
import OperationSystems from "./sub-catagories/operation-systems";
import ProgrammingLanguages from "./sub-catagories/programming-languages";
import React from "react";
import Title from "./title";
import Tools from "./tools";

const Skills = (props: BoxProps) => {
  const skillProps = {
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
      <Databases
        alignItems="center"
        display="flex"
        gap="0.5rem"
        justifyContent="center"
        width="100%"
      />
    </Box>
  );
};

export default Skills;
