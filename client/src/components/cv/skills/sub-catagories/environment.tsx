import { Typography } from '@mui/material';
import { VscEditorLayout } from 'react-icons/vsc';
import React from 'react';

import IconBox, { IconBoxProps } from '../../../icon-box/icon-box';

export type EnvironmentsProps = IconBoxProps & {
  environments: string[];
};

const Environments = (props: EnvironmentsProps) => {
  const { environments, ...otherProps } = props;
  return (
    <IconBox Icon={VscEditorLayout} {...otherProps}>
      <Typography color="text.primary" variant="subtitle1">
        Environments:
      </Typography>
      <Typography color="text.primary" variant="body1">
        {environments.join(', ')}.
      </Typography>
    </IconBox>
  );
};

export default Environments;
