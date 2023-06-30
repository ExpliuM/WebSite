import { Box, BoxProps } from "@mui/material";
import React from "react";

import CollapsedCards from "../../collapsed-cards/collapsed-cards";
import equitybeeCollapsedCardData from "./cards/data/equitybee/collapsed-card-data";
import collapsedCardsData from "./cards/data/forescout/collapsed-card-data";
import rafaelCollapsedCardsData from "./cards/data/rafael/collapsed-card-data";

const Experience = (props: BoxProps) => (
  <Box {...props}>
    <CollapsedCards
      cards={[
        equitybeeCollapsedCardData,
        collapsedCardsData,
        rafaelCollapsedCardsData,
      ]}
      display="flex"
      flexDirection="row"
      height="100%"
    />
  </Box>
);

export default Experience;
