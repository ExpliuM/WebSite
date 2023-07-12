import { AiOutlineApi } from "react-icons/ai";
import { Typography } from "@mui/material";
import React from "react";

import IconBox, { IconBoxProps } from "../../../icon-box/icon-box";

export type APIsProps = IconBoxProps & {
  apis: string[];
};

const APIs = (props: APIsProps) => {
  const { apis, ...otherProps} = props;

  return (
    <IconBox Icon={AiOutlineApi} {...otherProps}>
      <Typography color="text.primary" variant="subtitle1">
        API's:
      </Typography>
      <Typography color="text.primary" variant="body1">
        {apis.join(", ")}
      </Typography>
    </IconBox>
  );
};

export default APIs;
