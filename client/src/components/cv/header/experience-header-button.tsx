import { Typography, TypographyProps } from '@mui/material';
import React from 'react';

import IconBox, { IconBoxProps } from '../../icon-box/icon-box';
import { MdOutlineWorkOutline } from 'react-icons/md';

export type EducationHeaderButtonProps = {
  iconBoxProps: IconBoxProps;
  typographyProps: TypographyProps;
};

const ExperienceHeaderButton = (props: EducationHeaderButtonProps) => {
  const { iconBoxProps, typographyProps } = props;
  return (
    <IconBox Icon={MdOutlineWorkOutline} {...iconBoxProps}>
      <Typography {...typographyProps}>EXPERIENCE</Typography>
    </IconBox>
  );
};

export default ExperienceHeaderButton;
