import React, { ElementType } from "react";

import cv from "../../../../data/cv.json";
import ExperienceCardHeader from "../../experience-card-header";
import Logo from "./logo.svg";
import { GenericCardHeaderProps } from "../../generic-card-header";

const experienceIndex = 0;
const experience = cv.Experience[experienceIndex];

const CardHeader: ElementType = (props: GenericCardHeaderProps) => (
  <ExperienceCardHeader experience={experience} Logo={Logo} {...props} />
);

export default CardHeader;
