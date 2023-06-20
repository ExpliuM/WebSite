import { Box, BoxProps, Typography, TypographyProps } from "@mui/material";
import { GiSkills } from "react-icons/gi";
import React from "react";

export type TitleProps = BoxProps & {
  typographyProps?: TypographyProps;
};

const Title = (props: TitleProps) => {
  const { children, typographyProps, ...otherProps } = props;

  return (
    <Box {...otherProps}>
      <GiSkills />
      <Typography variant="h6" {...typographyProps}>
        {children}
      </Typography>
    </Box>
  );
};

export default Title;
