import { Typography } from '@mui/material';
import React from 'react';
import { BsTools } from 'react-icons/bs';
import IconBox, { IconBoxProps } from '../../../icon-box/icon-box';

export type ToolsProps = IconBoxProps & {
  tools: string[];
};

const Tools = (props: ToolsProps) => {
  const { tools, ...otherProps } = props;
  return (
    <IconBox Icon={BsTools} {...otherProps}>
      <Typography color="text.primary" variant="subtitle1">
        Tools:
      </Typography>
      <Typography color="text.primary" variant="body1">
        {tools.join(', ')}.
      </Typography>
    </IconBox>
  );
};
export default Tools;
