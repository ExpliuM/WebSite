import { Card, CardProps } from '@mui/material';
import React, { ElementType } from 'react';

export type GenericCardProps = CardProps;

const GenericCard: ElementType = (props: GenericCardProps) => {
  return <Card {...props} />;
};

export default GenericCard;
