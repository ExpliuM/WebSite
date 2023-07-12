import { Box, BoxProps } from "@mui/material";
import React from "react";

import { IconBoxProps } from "../../icon-box/icon-box";
import { Skills as ISkills } from "../data/cv.types";
import APIs from "./sub-catagories/apis";
import Clouds from "./sub-catagories/cloud";
import Databases from "./sub-catagories/databases";
import Environments from "./sub-catagories/environment";
import OperationSystems from "./sub-catagories/operation-systems";
import ProgrammingLanguages from "./sub-catagories/programming-languages";
import SkillsTitle from "./skills-title";
import Tools from "./sub-catagories/tools";

export type SkillsProps = BoxProps & {
  skills: ISkills;
};

const Skills = (props: SkillsProps) => {
  const { skills, ...otherProps } = props;

  const {
    apis,
    clouds,
    databases,
    environments,
    operationSystems,
    programmingLanguages,
    tools,
  } = skills;

  const skillProps: IconBoxProps = {
    alignItems: "center",
    display: "flex",
    gap: "0.5rem",
    justifyContent: "left",
    width: "100%",
    iconProps: {
      size: "1.5rem",
    },
  };

  const skillsTitleProps: BoxProps = {
    alignItems: "center",
    display: "flex",
    gap: "0.5rem",
    justifyContent: "center",
    width: "100%",
  };

  return (
    <Box {...otherProps}>
      <SkillsTitle {...skillsTitleProps} />
      <Box display="flex" flexDirection="row" gap="3rem">
        <Box display="flex" flexDirection="column">
          <ProgrammingLanguages
            programmingLanguages={programmingLanguages}
            {...skillProps}
          />
          <Environments environments={environments} {...skillProps} />
          <OperationSystems
            operationSystems={operationSystems}
            {...skillProps}
          />
        </Box>
        <Box display="flex" flexDirection="column">
          <APIs apis={apis} {...skillProps} />
          <Clouds clouds={clouds} {...skillProps} />
          <Tools tools={tools} {...skillProps} />
        </Box>
      </Box>
      <Databases
        databases={databases}
        {...skillProps}
        justifyContent="center"
      />
    </Box>
  );
};

export default Skills;
