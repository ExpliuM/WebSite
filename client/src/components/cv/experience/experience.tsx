import { Box, BoxProps, Typography } from "@mui/material";
import { MdOutlineWorkOutline } from "react-icons/md";
import EquityBee from "./cards/equitybee";
import IconBox from "../../icon-box/icon-box";
import React from "react";
import Forescout from "./cards/forescout";
import Rafael from "./cards/rafael";

const Experience = (props: BoxProps) => (
  <Box {...props}>
    <IconBox
      alignItems="center"
      display="flex"
      gap="0.5rem"
      Icon={MdOutlineWorkOutline}
      justifyContent="center"
      width="100%"
      iconProps={{ color: "white" }}
    >
      <Typography variant="h6">EXPERIENCE</Typography>
    </IconBox>
    <EquityBee />
    <Forescout />
    <Rafael />
  </Box>
);

export default Experience;
