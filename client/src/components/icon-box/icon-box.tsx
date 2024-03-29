import { Box, BoxProps } from '@mui/material';
import { IconBaseProps, IconType } from 'react-icons';

export type IconBoxProps = BoxProps & {
  Icon?: IconType;
  iconProps?: IconBaseProps;
};

const IconBox = (props: IconBoxProps) => {
  const { children, Icon, iconProps, ...otherProps } = props;

  return (
    <Box {...otherProps}>
      {Icon && <Icon {...iconProps} />}
      {children}
    </Box>
  );
};

export default IconBox;
