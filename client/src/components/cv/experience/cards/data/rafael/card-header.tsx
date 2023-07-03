import React, { ElementType } from "react";

import cv from "../../../../data/cv.json";
import ExperienceCardHeader from "../../experience-card-header";
import Logo from "./logo.svg";
import { GenericCardHeaderProps } from "../../../../../card/generic-card-header/generic-card";

const experienceIndex = 2;
const experience = cv.experience[experienceIndex];

const CardHeader: ElementType = (props: GenericCardHeaderProps) => (
  <ExperienceCardHeader experience={experience} Logo={Logo} {...props} />
);

export default CardHeader;
