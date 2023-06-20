import { Box, BoxProps } from "@mui/material";
import PersonalInfoHeader from "./personal-info-header";
import React from "react";
import SubTitle from "../subtitle";

const GeneralInformation = (props: BoxProps) => (
  <Box {...props}>
    <SubTitle align="center">General Information</SubTitle>
    <PersonalInfoHeader
      display="flex"
      flexDirection="row"
      justifyContent="center"
      width="100%"
    />
  </Box>
);

export default GeneralInformation;
