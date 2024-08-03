import { Button, ButtonProps, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';

import { start } from '../Redux/slice';

const StartButton = (props: ButtonProps) => {
  const dispatch = useDispatch();

  const handleResetClick = () => {
    dispatch(start());
  };

  return (
    <Button color="secondary" onClick={handleResetClick} {...props}>
      <Typography color="text.secondary" variant="body2">
        Start
      </Typography>
    </Button>
  );
};

export default StartButton;
