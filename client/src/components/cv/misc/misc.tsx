import { Box, BoxProps, Card, CardProps } from "@mui/material";
import React from "react";

import { Misc as MiscInterface } from "../data/cv.types";
import cvData from "../data/cv-data";
import MiscCardContent, {
  MiscCardContentProps,
} from "./cards/misc-card-content";

const misc: MiscInterface = cvData.misc;

const Misc = (props: BoxProps) => {
  const cardProps: CardProps = {
    sx: {
      backgroundColor: "primary.light",
      borderRadius: "1rem",
      display: "flex",
      flexDirection: "column",
      height: "100%",
      justifyContent: "center",
      width: "100%",
    },
  };

  const miscCardContentProps: MiscCardContentProps = {
    misc,
    sx: {
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
      padding: "0.1rem",
    },
  };

  return (
    <Box {...props}>
      <Card {...cardProps}>
        <MiscCardContent {...miscCardContentProps} />
      </Card>
    </Box>
  );
};

export default Misc;
