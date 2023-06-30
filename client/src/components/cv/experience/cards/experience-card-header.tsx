import React, { ElementType } from "react";

import { Experience } from "../../data/cv.interfaces";
import GenericCardHeader, {
  GenericCardHeaderProps,
} from "./generic-card-header";
import Logo from "./logo.svg";

type ExperienceCardHeaderProps = GenericCardHeaderProps & {
  experience: Experience;
  Logo: string;
};
const ExperienceCardHeader: ElementType = (
  props: ExperienceCardHeaderProps
) => {
  const { experience, Logo, sideways, ...otherProps } = props;

  const horizontalSubHeader = `${experience.WorkPeriod.From} - ${experience.WorkPeriod.Till}`;
  const horizontalTitle = `${experience.CompanyName} | ${experience.Title} | ${experience.ProfessionalTitle}`;
  const verticalSubHeader = "";
  const verticalTitle = `${experience.CompanyName} | ${experience.ProfessionalTitle} | ${experience.WorkPeriod.From} - ${experience.WorkPeriod.Till}`;

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
