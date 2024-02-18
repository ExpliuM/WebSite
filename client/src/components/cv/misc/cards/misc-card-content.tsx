import CardContent, { CardContentProps } from '@mui/material/CardContent';
import React, { ElementType } from 'react';
import Typography from '@mui/material/Typography';

import { IMisc } from '../../data/cv.types';
import _ from 'lodash';

export type MiscCardContentProps = CardContentProps & {
  misc: IMisc;
};

const MiscCardContent: ElementType = (props: MiscCardContentProps) => {
  const { misc, ...otherProps } = props;

  return (
    <CardContent {...otherProps}>
      {Object.entries(misc || {}).map(([title, description], index) => (
        <Typography
          color="text.primary"
          key={index}
          marginBottom="0.5rem"
          paddingLeft="1rem"
          paragraph
          variant="body2"
        >
          {_.startCase(title)} - {description}
        </Typography>
      ))}
    </CardContent>
  );
};

export default MiscCardContent;
