import { BoxProps } from '@mui/material';
import React from 'react';

import { default as CVComponent } from '../components/cv/cv';

const CV = (props: BoxProps) => <CVComponent {...props} />;

export default CV;
