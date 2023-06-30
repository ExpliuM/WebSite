import {
  AiOutlineHome,
  AiOutlinePhone,
  AiOutlineLinkedin,
  AiOutlineMail,
} from "react-icons/ai";
import { Box, BoxProps, Typography } from "@mui/material";
import IconBox, { IconBoxProps } from "../../icon-box/icon-box";
import React from "react";

const PersonalInfoHeader = (props: BoxProps) => {
  const baseIconBoxProps: IconBoxProps = {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    gap: "0.5rem",
  };

  const leftIconBoxProps: IconBoxProps = {
    ...baseIconBoxProps,
    marginRight: "1rem",
  };

  const middleIconBoxProps: IconBoxProps = {
    ...baseIconBoxProps,
    marginRight: "1rem",
    marginLeft: "1rem",
  };

  const rightIconBoxProps: IconBoxProps = {
    ...baseIconBoxProps,
    marginLeft: "1rem",
  };

  const typographyProps = { color: "text.primary" };

  return (
    <Box {...props}>
      <IconBox Icon={AiOutlineHome} {...leftIconBoxProps}>
        <Typography {...typographyProps}>Crailsheim, Germany</Typography>
      </IconBox>
      <Typography {...typographyProps}>|</Typography>
      <IconBox Icon={AiOutlinePhone} {...middleIconBoxProps}>
        <Typography {...typographyProps}>+4917620126517</Typography>
      </IconBox>
      <Typography {...typographyProps}>|</Typography>
      <IconBox Icon={AiOutlineLinkedin} {...middleIconBoxProps}>
        <Typography {...typographyProps}>
          www.linkedin.com/in/alex-khvolis
        </Typography>
      </IconBox>
      <Typography {...typographyProps}>|</Typography>
      <IconBox Icon={AiOutlineMail} {...middleIconBoxProps}>
        <Typography {...typographyProps}>alex1309@gmail.com</Typography>
      </IconBox>
      <br />
    </Box>
  );
};
export default PersonalInfoHeader;
