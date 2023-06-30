import { Typography } from "@mui/material";
import { VscSymbolMisc } from "react-icons/vsc";
import React from "react";

import IconBox, { IconBoxProps } from "../../icon-box/icon-box";

const MiscHeaderButton = (props: IconBoxProps) => (
  <IconBox
    alignItems="center"
    display="flex"
    gap="0.5rem"
    Icon={VscSymbolMisc}
    justifyContent="center"
    width="100%"
    {...props}
  >
    <Typography variant="h6">Misc</Typography>
  </IconBox>
);

export default MiscHeaderButton;
