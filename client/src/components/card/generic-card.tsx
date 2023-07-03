import { Card, CardProps } from "@mui/material";
import React, { ElementType } from "react";

export type GenericCardProps = CardProps & {};

const GenericCard: ElementType = (props: GenericCardProps) => {
  const { sx, ...otherProps } = props;

  return <Card {...otherProps} />;
};

export default GenericCard;
