import { Box, BoxProps } from '@mui/material';
import { IconBaseProps, IconType } from 'react-icons';
import React from 'react';

export type IconBoxProps = BoxProps & {
  Icon?: IconType;
  iconProps?: IconBaseProps;
};

const IconBox = (props: IconBoxProps) => {
  const { children, Icon, iconProps, ...otherProps } = props;

  return (
    <Box {...otherProps}>
      <Icon {...iconProps} />
      {children}
    </Box>
  );
};

export default IconBox;
