import { Box, BoxProps, Card, CardProps } from '@mui/material';
import React from 'react';

import { IMisc } from '../data/cv.types';
import MiscCardContent, {
  MiscCardContentProps,
} from './cards/misc-card-content';

export type MiscProps = BoxProps & {
  misc: IMisc;
};

export type MiscComponent = (props: MiscProps) => React.JSX.Element;

const Misc: MiscComponent = (props: MiscProps) => {
  const { misc, ...otherProps } = props;

  const cardProps: CardProps = {
    sx: {
      backgroundColor: 'primary.light',
      borderRadius: '1rem',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      justifyContent: 'center',
      width: '100%',
    },
  };

  const miscCardContentProps: MiscCardContentProps = {
    misc,
    sx: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      padding: '0.1rem',
    },
  };

  return (
    <Box {...otherProps}>
      <Card {...cardProps}>
        <MiscCardContent {...miscCardContentProps} />
      </Card>
    </Box>
  );
};

export default Misc;
