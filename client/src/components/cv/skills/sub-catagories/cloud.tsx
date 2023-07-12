import { AiOutlineCloud } from "react-icons/ai";
import { Typography } from "@mui/material";
import React from "react";

import IconBox, { IconBoxProps } from "../../../icon-box/icon-box";

export type CloudsProps = IconBoxProps & {
  clouds: string[];
};

const Clouds = (props: CloudsProps) => {
  const { clouds, ...otherProps } = props;

  return (
    <IconBox Icon={AiOutlineCloud} {...otherProps}>
      <Typography color="text.primary" variant="subtitle1">
        Clouds:
      </Typography>
      <Typography color="text.primary" variant="body1">
        {clouds.join(", ")}.
      </Typography>
    </IconBox>
  );
};

export default Clouds;
