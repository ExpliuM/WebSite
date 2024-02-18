import { Typography, TypographyProps } from '@mui/material';
import React from 'react';

const Title = (props: TypographyProps) => (
  <Typography color="text.primary" variant="h3" {...props} />
);

export default Title;
