import { Button, ButtonProps, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';

import { pause } from '../Redux/slice';

const PauseButton = (props: ButtonProps) => {
  const dispatch = useDispatch();

  const handleResetClick = () => {
    dispatch(pause());
  };

  return (
    <Button color="secondary" onClick={handleResetClick} {...props}>
      <Typography color="text.secondary" variant="body2">
        Pause
      </Typography>
    </Button>
  );
};

export default PauseButton;
