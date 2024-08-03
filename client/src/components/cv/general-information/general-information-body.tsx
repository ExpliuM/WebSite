import {
  AiOutlineHome,
  AiOutlinePhone,
  AiOutlineLinkedin,
  AiOutlineMail,
} from 'react-icons/ai';
import { Box, BoxProps, Typography, TypographyProps } from '@mui/material';

import { IGeneralInformation } from '../data/cv.types';
import IconBox, { IconBoxProps } from '../../icon-box/icon-box';
import { isMobile } from 'react-device-detect';

const baseIconBoxProps: IconBoxProps = {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'row',
  gap: '0.5rem',
  iconProps: {
    size: '1.5rem',
  },
};

const leftIconBoxProps: IconBoxProps = {
  ...baseIconBoxProps,
  marginRight: '1rem',
};

const middleIconBoxProps: IconBoxProps = {
  ...baseIconBoxProps,
  marginRight: '1rem',
  marginLeft: '1rem',
};

const rightIconBoxProps: IconBoxProps = {
  ...baseIconBoxProps,
  marginLeft: '1rem',
};

const typographyProps: TypographyProps = {
  color: 'text.primary',
  variant: 'body1',
};

type GeneralInformationHeaderProps = BoxProps & {
  generalInformation: IGeneralInformation;
};

const GeneralInformationBody = (props: GeneralInformationHeaderProps) => {
  const { generalInformation, ...otherProps } = props;

  const { address, email, linkedInLink, phoneNumber } = generalInformation;

  const linkedInLinkUrl: URL = new URL(linkedInLink);

  const boxProps: BoxProps = {
    ...otherProps,
    ...(isMobile ? { display: 'flex', flexDirection: 'column' } : {}),
  };

  return (
    <Box {...boxProps}>
      <IconBox Icon={AiOutlineHome} {...leftIconBoxProps}>
        <Typography {...typographyProps}>{address}</Typography>
      </IconBox>
      <Typography {...typographyProps}>|</Typography>
      <IconBox Icon={AiOutlinePhone} {...middleIconBoxProps}>
        <Typography {...typographyProps}>{phoneNumber}</Typography>
      </IconBox>
      <Typography {...typographyProps}>|</Typography>
      <IconBox Icon={AiOutlineLinkedin} {...middleIconBoxProps}>
        <Typography {...typographyProps}>
          {linkedInLinkUrl.host + linkedInLinkUrl.pathname}
        </Typography>
      </IconBox>
      <Typography {...typographyProps}>|</Typography>
      <IconBox Icon={AiOutlineMail} {...rightIconBoxProps}>
        <Typography {...typographyProps}>{email}</Typography>
      </IconBox>
      <br />
    </Box>
  );
};
export default GeneralInformationBody;
