import React from "react";
import { Box, BoxProps } from "@mui/material";

import {
  AiOutlineHome,
  AiOutlinePhone,
  AiOutlineLinkedin,
  AiOutlineMail,
} from "react-icons/ai";

const PersonalInfoHeader = (props: BoxProps) => (
  <Box
    {...props}
  >
    <Box
      alignItems="center"
      display="flex"
      flexDirection="row"
      gap="0.5rem"
      marginRight="1rem"
    >
      <AiOutlineHome />
      Crailsheim, Germany
    </Box>
    |
    <Box
      alignItems="center"
      display="flex"
      flexDirection="row"
      gap="0.5rem"
      marginRight="1rem"
      marginLeft="1rem"
    >
      <AiOutlinePhone /> +4917620126517
    </Box>
    |
    <Box
      alignItems="center"
      display="flex"
      flexDirection="row"
      gap="0.5rem"
      marginRight="1rem"
      marginLeft="1rem"
    >
      <AiOutlineLinkedin /> www.linkedin.com/in/alex-khvolis
    </Box>
    |
    <Box
      alignItems="center"
      display="flex"
      flexDirection="row"
      gap="0.5rem"
      marginLeft="1rem"
    >
      <AiOutlineMail /> alex1309@gmail.com
    </Box>
    <br />
  </Box>
);

export default PersonalInfoHeader;
