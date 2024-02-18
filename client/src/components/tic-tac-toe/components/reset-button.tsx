import { Button, ButtonProps, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';

import { reset } from '../Redux/slice';

// TODO: To improve this buttons style
const ResetButton = (props: ButtonProps) => {
  const dispatch = useDispatch();

  const handleResetClick = () => {
    dispatch(reset());
  };

  return (
    <Button color="secondary" onClick={handleResetClick} {...props}>
      <Typography color="text.secondary" variant="body2">
        Reset
      </Typography>
    </Button>
  );
};

export default ResetButton;
