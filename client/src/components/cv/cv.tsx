import { Box, BoxProps } from "@mui/material";
import React, { useState } from "react";

import ArrowedHeader, {
  ArrowedHeaderEventHandler,
} from "../arrowed-header/arrowed-header";
import Education from "./education/education";
import EducationHeaderButton from "./header/education-header-button";
import Experience from "./experience/experience";
import ExperienceHeaderButton from "./header/experience-header-button";
import GeneralInformation from "./general-information/general-information";
import Misc from "./misc/misc";
import MiscHeaderButton from "./header/misc-header-button";
import Skills from "./skills/skills";
import Title from "./title";

const headerData = [
  {
    Component: ExperienceHeaderButton,
  },
  {
    Component: EducationHeaderButton,
  },
  {
    Component: MiscHeaderButton,
  },
];

const componentData = [
  {
    name: "Experience",
    Component: Experience,
    componentProps: { height: "45vh", width: "100%" },
  },
  {
    name: "Education",
    Component: Education,
    componentProps: { height: "45vh", width: "100%" },
  },
  {
    name: "Misc",
    Component: Misc,
    componentProps: { height: "45vh", width: "100%" },
  },
];

const CV = (props: BoxProps) => {
  const [selected, setSelected] = useState<number>(0);

  const handleArrowedHeaderClicked: ArrowedHeaderEventHandler = (selected) => {
    setSelected(selected);
  };

  const SelectedComponent =
    typeof selected === "number" ? componentData[selected].Component : null;
  const selectedProps =
    typeof selected === "number"
      ? componentData[selected].componentProps
      : null;

  return (
    <Box
      alignItems="center"
      display="flex"
      flexDirection="column"
      gap="0.5rem"
      {...props}
    >
      <Title>Alexander Khvolis</Title>
      <GeneralInformation />
      <Skills display="flex" flexDirection="column" gap="0.25rem" />
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
        {SelectedComponent && <SelectedComponent {...selectedProps} />}
      </Box>
    </Box>
  );
};

export default CV;
