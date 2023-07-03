import React, { ElementType } from "react";

import { Education } from "../../../../cv/data/cv.types";
import { GenericCardHeaderProps } from "../../../../card/generic-card-header/generic-card-header";
import cvData from "../../../../cv/data/cv-data";
import EducationCardHeader from "../../cards/education-card-header";
import Logo from "./logo.svg";

const education: Education = cvData.education;

const CardHeader: ElementType = (props: GenericCardHeaderProps) => (
  <EducationCardHeader
    MiscCardHeader
    education={education}
    Logo={Logo}
    {...props}
  />
);

export default CardHeader;
