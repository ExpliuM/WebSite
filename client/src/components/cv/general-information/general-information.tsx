import { Box, BoxProps } from "@mui/material";
import React from "react";

import { GeneralInformation as GeneralInformationInterface } from "../data/cv.types";
import cvData from "../../cv/data/cv-data";
import GeneralInformationHeader from "./general-information-header";
import SubTitle from "../subtitle";

const generalInformation: GeneralInformationInterface =
  cvData.generalInformation;

const GeneralInformation = (props: BoxProps) => (
  <Box {...props}>
    <SubTitle align="center">General Information</SubTitle>
    <GeneralInformationHeader
      generalInformation={generalInformation}
      display="flex"
      flexDirection="row"
    />
  </Box>
);

export default GeneralInformation;
