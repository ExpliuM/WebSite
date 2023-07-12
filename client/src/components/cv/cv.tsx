import { Box, BoxProps, TypographyProps } from "@mui/material";
import React, { useState } from "react";

import ArrowedHeader, {
  ArrowedHeaderEventHandler,
  Options,
} from "../arrowed-header/arrowed-header";
import { IconBoxProps } from "../icon-box/icon-box";
import cv from "./data/cv-data";
import Education from "./education/education";
import EducationHeaderButton from "./header/education-header-button";
import Experience from "./experience/experience";
import ExperienceHeaderButton from "./header/experience-header-button";
import GeneralInformation from "./general-information/general-information";
import Misc from "./misc/misc";
import MiscHeaderButton from "./header/misc-header-button";
import Skills from "./skills/skills";
import Title from "./title";

const { educations, experiences, generalInformation, misc, name, skills } = cv;

// TODO: find better type solution for this props
const headerButtonProps: {
  iconBoxProps: IconBoxProps;
  typographyProps: TypographyProps;
} = {
  iconBoxProps: {
    alignItems: "center",
    display: "flex",
    gap: "0.5rem",
    justifyContent: "center",
    width: "100%",
    iconProps: { size: "1.5rem" },
  },
  typographyProps: { variant: "h6" },
};

const headerData: Array<Options> = [
  {
    Component: ExperienceHeaderButton,
    componentProps: headerButtonProps,
  },
  {
    Component: EducationHeaderButton,
    componentProps: headerButtonProps,
  },
  {
    Component: MiscHeaderButton,
    componentProps: headerButtonProps,
  },
];

const componentData = [
  {
    name: "Experience",
    Component: Experience,
    componentProps: { experiences: experiences, height: "45vh", width: "100%" },
  },
  {
    name: "Education",
    Component: Education,
    componentProps: { educations: educations, height: "45vh", width: "100%" },
  },
  {
    name: "Misc",
    Component: Misc,
    componentProps: { height: "45vh", misc: misc, width: "100%" },
  },
];

const CV = (props: BoxProps) => {
  const [selected, setSelected] = useState<number>(0);

  const handleArrowedHeaderClicked: ArrowedHeaderEventHandler = (selected) => {
    setSelected(selected);
  };

  const SelectedComponent = componentData[selected].Component;

  const selectedProps = componentData[selected].componentProps;

  return (
    <Box
      alignItems="center"
      display="flex"
      flexDirection="column"
      gap="0.5rem"
      {...props}
    >
      <Title>{name}</Title>
      <GeneralInformation generalInformation={generalInformation} />
      <Skills
        display="flex"
        flexDirection="column"
        gap="0.25rem"
        skills={skills}
      />
      <Box
        borderRadius="1rem"
        sx={{ backgroundColor: "primary.main" }}
        width="90%"
      >
        <ArrowedHeader
          alignItems="center"
          dataArray={headerData}
          display="flex"
          flexDirection="row"
          iconProps={{ size: "2rem" }}
          onClick={handleArrowedHeaderClicked}
          paddingBottom="0.5rem"
          paddingTop="0.5rem"
          value={selected}
          width="100%"
        />
        {/* TODO: To fix this typescript error */}
        {SelectedComponent && selectedProps && (
          <SelectedComponent {...selectedProps} />
        )}
      </Box>
    </Box>
  );
};

export default CV;
