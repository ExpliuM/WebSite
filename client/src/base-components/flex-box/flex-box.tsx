import { Box, BoxProps } from '@mui/material';

export type FlexBoxProps = Omit<BoxProps, 'display'> & {
  direction: 'row' | 'column';
};

export type FlexBoxComponent = (props: FlexBoxProps) => React.JSX.Element;

const FlexBox: FlexBoxComponent = (props: FlexBoxProps) => {
  const { children, direction, ...other } = props;

  const boxProps: BoxProps = { flexDirection: direction, ...other };

  return (
    <Box display="flex" {...boxProps}>
      {children}
    </Box>
  );
};

export default FlexBox;
