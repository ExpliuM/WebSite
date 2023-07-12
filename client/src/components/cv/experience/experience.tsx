import { Box, BoxProps } from "@mui/material";
import React from "react";

import CollapsedCards, {
  CollapsedCardData,
  CollapsedCardsData,
} from "../../collapsed-cards/collapsed-cards";
import { Experience as IExperience } from "../data/cv.types";
import EquityBeeLogo from "./cards/data/equitybee/logo.svg";
import ExperienceCardContent from "./cards/experience-card-content";
import ExperienceCardHeader from "./cards/experience-card-header";
import ForescoutLogo from "./cards/data/forescout/logo.svg";
import RafaelLogo from "./cards/data/rafael/logo.svg";

export type ExperienceProps = BoxProps & {
  experiences: IExperience[];
};

const Experience = (props: ExperienceProps) => {
  const { experiences, ...otherProps } = props;

  const collapsedCardsData: CollapsedCardsData = experiences.map(
    (experience): CollapsedCardData => {
      const { companyName } = experience;
      let Logo;
      switch (companyName) {
        case "EquityBee":
          Logo = EquityBeeLogo;
          break;
        case "Forescout":
          Logo = ForescoutLogo;
          break;
        case "Rafael":
        default:
          Logo = RafaelLogo;
      }
      return {
        CardContent: ExperienceCardContent,
        cardContentProps: { experience },
        CardHeader: ExperienceCardHeader,
        cardHeaderProps: { experience, Logo },
      };
    }
  );

  return (
    <Box {...otherProps}>
      <CollapsedCards
        collapsedCardsData={collapsedCardsData}
        display="flex"
        flexDirection="row"
        height="100%"
      />
    </Box>
  );
};

export default Experience;
