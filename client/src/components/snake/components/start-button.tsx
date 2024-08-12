import { Button, ButtonProps, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';

import { start } from '../Redux/slice';
import { MouseEvent } from 'react';

const StartButton = (props: ButtonProps) => {
  const { onClick, ...otherProps } = props;
  const dispatch = useDispatch();

  const handleResetClick = (event: MouseEvent<HTMLButtonElement>) => {
    dispatch(start());
    onClick && onClick(event);
  };

  return (
    <Button color="secondary" onClick={handleResetClick} {...otherProps}>
      <Typography color="text.secondary" variant="body2">
        Start
      </Typography>
    </Button>
  );
};

export default StartButton;
