import React, { ElementType } from "react";

import { Education } from "../../../../cv/data/cv.types";
import cvData from "../../../../cv/data/cv-data";
import EducationCardContent from "../../cards/education-card-content";

const education: Education[] = cvData.education;

const CardContent: ElementType = () => {
  return <EducationCardContent education />;
};

export default CardContent;
