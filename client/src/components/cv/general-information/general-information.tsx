import { Box, BoxProps } from '@mui/material';
import { IGeneralInformation as IGeneralInformation } from '../data/cv.types';
import GeneralInformationBody from './general-information-body';
import SubTitle from '../subtitle';

export type GeneralInformationProps = BoxProps & {
  generalInformation: IGeneralInformation;
};

const GeneralInformation = (props: GeneralInformationProps) => {
  const { generalInformation, ...otherProps } = props;

  return (
    <Box {...otherProps}>
      <SubTitle align="center">General Information</SubTitle>
      <GeneralInformationBody
        generalInformation={generalInformation}
        display="flex"
        flexDirection="row"
      />
    </Box>
  );
};

export default GeneralInformation;
