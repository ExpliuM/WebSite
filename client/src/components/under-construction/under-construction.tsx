import { BoxProps } from "@mui/material";
import React from "react";

import { LuConstruction } from "react-icons/lu";
import IconBox from "../icon-box/icon-box";

const UnderConstruction = (props: BoxProps) => {
  <IconBox Icon={LuConstruction} {...props} />;
};

export default UnderConstruction;
