import { Typography, TypographyProps } from '@mui/material';
import React from 'react';

import IconBox, { IconBoxProps } from '../../icon-box/icon-box';
import { TbSchool } from 'react-icons/tb';

export type EducationHeaderButtonProps = {
  iconBoxProps: IconBoxProps;
  typographyProps: TypographyProps;
};

const EducationHeaderButton = (props: EducationHeaderButtonProps) => {
  const { iconBoxProps, typographyProps } = props;
  return (
    <IconBox
      alignItems="center"
      display="flex"
      gap="0.5rem"
      Icon={TbSchool}
      justifyContent="center"
      width="100%"
      {...iconBoxProps}
    >
      <Typography {...typographyProps}>Education</Typography>
    </IconBox>
  );
};

export default EducationHeaderButton;
