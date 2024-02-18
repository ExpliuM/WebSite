import { Box, BoxProps } from '@mui/material';
import React from 'react';

import GeneralInformationHeader from './general-information-header';
import SubTitle from '../subtitle';
import { IGeneralInformation as IGeneralInformation } from '../data/cv.types';

export type GeneralInformationProps = BoxProps & {
  generalInformation: IGeneralInformation;
};

const GeneralInformation = (props: GeneralInformationProps) => {
  const { generalInformation, ...otherProps } = props;
  return (
    <Box {...otherProps}>
      <SubTitle align="center">General Information</SubTitle>
      <GeneralInformationHeader
        generalInformation={generalInformation}
        display="flex"
        flexDirection="row"
      />
    </Box>
  );
};

export default GeneralInformation;
