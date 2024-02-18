import React, { ElementType } from 'react';

import { IExperience } from '../../data/cv.types';

import GenericCardHeader, {
  GenericCardHeaderProps,
} from '../../../card/generic-card-header/generic-card-header';

type ExperienceCardHeaderProps = GenericCardHeaderProps & {
  experience: IExperience;
  Logo: string;
};
const ExperienceCardHeader: ElementType = (
  props: ExperienceCardHeaderProps,
) => {
  const { experience, Logo, sideways, ...otherProps } = props;

  const horizontalSubHeader = `${experience.workPeriod.from} - ${experience.workPeriod.till}`;
  const horizontalTitle = `${experience.companyName} | ${experience.title} | ${experience.professionalTitle}`;
  const verticalSubHeader = '';
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
