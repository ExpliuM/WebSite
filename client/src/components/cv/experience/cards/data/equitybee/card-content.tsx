import React, { ElementType } from "react";

import cv from "../../../../data/cv.json";
import ExperienceCardContent from "../../experience-card-content";

const experienceIndex = 0;
const experience = cv.experience[experienceIndex];

const CardContent: ElementType = () => {
  return <ExperienceCardContent experience={experience} />;
};

export default CardContent;
