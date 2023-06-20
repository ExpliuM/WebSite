import { Box, BoxProps, Typography, TypographyProps } from "@mui/material";
import { GiSkills } from "react-icons/gi";
import React from "react";

export type SubTitleProps = BoxProps & {
  text: string;
  typographyProps?: TypographyProps;
};

const SubTitle = (props: SubTitleProps) => {
  const { children, typographyProps, ...otherProps } = props;
  return (
    <Box {...otherProps}>
      <GiSkills />
      <Typography variant="subtitle2" {...typographyProps}>
        {children}
      </Typography>
    </Box>
  );
};

export default SubTitle;
