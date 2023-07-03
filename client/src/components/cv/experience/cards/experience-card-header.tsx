import React, { ElementType } from "react";

import { Experience } from "../../data/cv.types";

import GenericCardHeader, {
  GenericCardHeaderProps,
} from "../../../card/generic-card-header/generic-card-header";
import Logo from "./logo.svg";

type ExperienceCardHeaderProps = GenericCardHeaderProps & {
  experience: Experience;
  Logo: string;
};
const ExperienceCardHeader: ElementType = (
  props: ExperienceCardHeaderProps
) => {
  const { experience, Logo, sideways, ...otherProps } = props;

  const horizontalSubHeader = `${experience.workPeriod.From} - ${experience.workPeriod.Till}`;
  const horizontalTitle = `${experience.companyName} | ${experience.Title} | ${experience.professionalTitle}`;
  const verticalSubHeader = "";
  const verticalTitle = `${experience.companyName} | ${experience.professionalTitle}`;

  return (
    <GenericCardHeader
      horizontalSubHeader={horizontalSubHeader}
      horizontalTitle={horizontalTitle}
      Logo={Logo}
      sideways={sideways}
      verticalSubHeader={verticalSubHeader}
      verticalTitle={verticalTitle}
      {...otherProps}
    />
  );
};

export default ExperienceCardHeader;
